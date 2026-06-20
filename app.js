/* ============================================================
   单词物语 · Word Whisper — 主程序 v3
   集成 GameEngine: 扩展词库·渐进加速·随机事件·成就进度
   ============================================================ */

// --- DOM Helpers ---
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// --- State ---
const DEFAULT_SETTINGS = {
  speed: 85,
  wordDensity: 2,
  buffFrequency: 2,
  eventFrequency: 2,
  progressiveSpeed: true,
  comboFever: true,
  milestoneRewards: true,
  startLives: 3,
  maxLives: 5,
  freezeSeconds: 5,
  freezeCharges: 3,
  starburstCharges: 1,
  music: true,
  haptic: true,
  calm: false,
  showMeaning: true,
  nextKeyHint: true,
  dangerLine: true,
  mobileKeyboard: true,
  kitchenOrderDensity: 1,
  kitchenPatience: 2,
  kitchenCompactCards: true,
  kitchenSceneDecor: true,
  kitchenAutoQueue: true,
  kitchenFocusAssist: true,
  singleMode: 'classic',
  singleBackground: 'starValley',
};

const SINGLE_BACKGROUNDS = [
  { key: 'starValley', name: '星谷夜色', tag: '柔夜' },
  { key: 'auroraLake', name: '极光湖面', tag: '流光' },
  { key: 'sunsetLibrary', name: '黄昏书屋', tag: '书页' },
  { key: 'oceanDawn', name: '海岸晨光', tag: '海风' },
];

const SINGLE_MODES = [
  { key: 'classic', name: '经典收集', desc: '看到就打，稳稳收词' },
  { key: 'chef', name: '厨房轮班', desc: '接单备餐，打字出餐' },
];

const state = {
  currentScene: 'menu',
  settings: { ...DEFAULT_SETTINGS },
  menuIndex: 0,
  wordbank: ['CET-4', 'CET-6', 'IELTS'],
  wordbankIdx: 0,
  wordbankOpen: false,
  animFrameId: null,
  fireflyAnimId: null,
  gameLoopId: null,
  countdownInterval: null,
  vineOffset: 0,
  territorySpring: 50,
  lastSpaceTime: 0,
  spacePressedOnce: false,
  dual: null,
  dualSocket: null,
  dualInvite: null,
  singleRun: null,
  singleBgIndex: 0,
  kitchen: null,
};

const scenes = {
  menu:   $('#scene-menu'),
  single: $('#scene-single'),
  dual:   $('#scene-dual'),
  settings: $('#scene-settings'),
  achievements: $('#scene-achievements'),
  friends: $('#scene-friends'),
  rank: $('#scene-rank'),
};

/* ================================================================
   AUDIO MANAGER
   ================================================================ */
const audioManager = {
  bgm: null,
  init() {
    this.bgm = document.getElementById('bgm-audio');
    if (this.bgm) {
      this.bgm.volume = 0.28;
      this.bgm.loop = true;
      this.bgm.preload = 'auto';
    }
  },
  play() {
    if (!this.bgm || !state.settings.music) return;
    const p = this.bgm.play();
    if (p && p.catch) p.catch(() => {}); // 浏览器自动播放策略
  },
  pause() {
    if (!this.bgm) return;
    this.bgm.pause();
  },
  sync() {
    if (!this.bgm) return;
    const shouldPlay = state.settings.music && (state.currentScene === 'single');
    if (shouldPlay && this.bgm.paused) {
      this.play();
    } else if (!shouldPlay && !this.bgm.paused) {
      this.pause();
    }
  }
};

function getWordbankLabels() {
  const banks = (typeof WORD_BANKS !== 'undefined' && WORD_BANKS) || window.WORD_BANKS || {};
  const labels = Object.keys(banks);
  return labels.length ? labels : ['CET-4', 'CET-6', 'IELTS'];
}

function syncWordbankList() {
  state.wordbank = getWordbankLabels();
  if (state.wordbankIdx >= state.wordbank.length) state.wordbankIdx = 0;
  if (state.wordbankIdx < 0) state.wordbankIdx = 0;
  return state.wordbank;
}

function getWordbankIcon(label) {
  const meta = (typeof WORD_BANK_META !== 'undefined' && WORD_BANK_META) || window.WORD_BANK_META || {};
  const fallback = ['📘', '📙', '📕', '🎓', '💼', '💻', '🌿', '🧳', '📝', '🌈', '🩺', '📰', '🎨', '🧩'];
  const idx = Math.max(0, getWordbankLabels().indexOf(label));
  return meta[label]?.icon || fallback[idx % fallback.length] || '📚';
}

function renderWordbankButton() {
  const btn = $('#btn-wordbank');
  if (!btn) return;
  const labels = syncWordbankList();
  const label = labels[state.wordbankIdx] || labels[0] || 'CET-4';
  const banks = (typeof WORD_BANKS !== 'undefined' && WORD_BANKS) || window.WORD_BANKS || {};
  const count = Array.isArray(banks[label]) ? banks[label].length : 0;
  btn.innerHTML = `<span class="chip-icon">${getWordbankIcon(label)}</span> 词库: ${escapeHTML(label)} <small>${count}词</small> <span class="chip-arrow">&#9656;</span>`;
  btn.setAttribute('aria-expanded', state.wordbankOpen ? 'true' : 'false');
  btn.classList.toggle('is-open', state.wordbankOpen);
}

function renderWordbankOptions() {
  const panel = $('#wordbank-dropdown');
  const list = $('#wordbank-options');
  if (!panel || !list) return;
  const labels = syncWordbankList();
  const banks = (typeof WORD_BANKS !== 'undefined' && WORD_BANKS) || window.WORD_BANKS || {};
  const current = labels[state.wordbankIdx] || labels[0] || 'CET-4';

  panel.hidden = !state.wordbankOpen;
  list.innerHTML = labels.map((label, index) => {
    const count = Array.isArray(banks[label]) ? banks[label].length : 0;
    const active = label === current;
    return `<button type="button" class="wordbank-option ${active ? 'active' : ''}" data-wordbank-index="${index}" role="option" aria-selected="${active ? 'true' : 'false'}"><span class="option-main"><span class="chip-icon">${getWordbankIcon(label)}</span><strong>${escapeHTML(label)}</strong></span><small>${count}词</small></button>`;
  }).join('');
}

function setWordbankOpen(open) {
  state.wordbankOpen = Boolean(open);
  renderWordbankButton();
  renderWordbankOptions();
}

function selectWordbank(index, announce = true) {
  const labels = syncWordbankList();
  if (!labels.length) return;
  const nextIndex = Math.max(0, Math.min(index, labels.length - 1));
  state.wordbankIdx = nextIndex;
  renderWordbankButton();
  renderWordbankOptions();
  if (announce) showFeatureToast(`已切换词库：${labels[state.wordbankIdx]}`);
}


/* ================================================================
   GAME ENGINE (Single Player)
   ================================================================ */
function getSingleModeMeta(mode = state.settings.singleMode) {
  return SINGLE_MODES.find((item) => item.key === mode) || SINGLE_MODES[0];
}

function getSingleBackgroundMeta(key = state.settings.singleBackground) {
  return SINGLE_BACKGROUNDS.find((item) => item.key === key) || SINGLE_BACKGROUNDS[0];
}

function syncSingleBackgroundIndex() {
  const idx = SINGLE_BACKGROUNDS.findIndex((item) => item.key === state.settings.singleBackground);
  state.singleBgIndex = idx >= 0 ? idx : 0;
  if (!SINGLE_BACKGROUNDS[state.singleBgIndex]) state.singleBgIndex = 0;
  state.settings.singleBackground = SINGLE_BACKGROUNDS[state.singleBgIndex].key;
}

function renderSingleConfig() {
  syncSingleBackgroundIndex();
  const modeMeta = getSingleModeMeta();
  const bgMeta = getSingleBackgroundMeta();
  const modeBtn = $('#btn-single-mode');
  const mapBtn = $('#btn-single-map');
  const modeBadge = $('#single-mode-badge');
  const mapSceneBtn = $('#btn-cycle-single-map');
  if (modeBtn) {
    modeBtn.innerHTML = `<span class="chip-icon">&#10022;</span> 模式: ${escapeHTML(modeMeta.name)} <small>${escapeHTML(modeMeta.desc)}</small> <span class="chip-arrow">&#9656;</span>`;
  }
  if (mapBtn) {
    mapBtn.innerHTML = `<span class="chip-icon">&#128506;</span> 地图: ${escapeHTML(bgMeta.name)} <small>${escapeHTML(bgMeta.tag || '')}</small> <span class="chip-arrow">&#9656;</span>`;
  }
  if (modeBadge) modeBadge.textContent = modeMeta.name;
  if (mapSceneBtn) mapSceneBtn.textContent = `地图: ${bgMeta.name}`;
}

function cycleSingleMode() {
  const current = SINGLE_MODES.findIndex((item) => item.key === state.settings.singleMode);
  const next = SINGLE_MODES[(current + 1 + SINGLE_MODES.length) % SINGLE_MODES.length] || SINGLE_MODES[0];
  state.settings.singleMode = next.key;
  applySettingsToGame();
  try { localStorage.setItem('ww-settings', JSON.stringify(state.settings)); } catch (err) {}
  renderSingleConfig();
  showFeatureToast(`已切换模式：${next.name}`);
}

function cycleSingleBackground() {
  syncSingleBackgroundIndex();
  state.singleBgIndex = (state.singleBgIndex + 1) % SINGLE_BACKGROUNDS.length;
  state.settings.singleBackground = SINGLE_BACKGROUNDS[state.singleBgIndex].key;
  applySettingsToGame();
  try { localStorage.setItem('ww-settings', JSON.stringify(state.settings)); } catch (err) {}
  renderSingleConfig();
  applySingleBackgroundTheme();
  const bgMeta = getSingleBackgroundMeta();
  if (state.currentScene === 'single') showSingleToast(`背景切换：${bgMeta.name}`, 'buff');
  else showFeatureToast(`已切换地图：${bgMeta.name}`);
}

let engine = null;

function initEngine() {
  syncWordbankList();
  engine = new GameEngine('game-canvas');
  engine.loadWordBank(state.wordbank[state.wordbankIdx]);

  engine.onScoreChange = (score) => {
    const el = $('#single-score');
    if (el) el.textContent = score;
  };

  engine.onLivesChange = (lives, maxLives = 5) => {
    const el = $('#single-hearts');
    if (el) {
      const full = '<span class="heart-icon">&#9829;</span>'.repeat(Math.max(0, lives));
      const empty = '<span class="heart-icon empty">&#9825;</span>'.repeat(Math.max(0, maxLives - lives));
      el.innerHTML = full + empty;
    }
  };

  engine.onComboChange = (combo) => {
    const el = $('#combo-display');
    if (!el) return;
    if (combo >= 3) {
      el.textContent = combo >= 8 ? `连击 ×${combo}  技能充能!` : `连击 ×${combo}`;
      el.classList.add('active');
      clearTimeout(el._timeout);
      el._timeout = setTimeout(() => el.classList.remove('active'), 1200);
    } else if (combo === 0) {
      el.classList.remove('active');
    }
  };

  engine.onInputChange = (text) => {
    const el = $('#input-text-single');
    if (el) el.textContent = text || '_';
  };

  engine.onCollect = (word, combo, points = 10, meta = {}) => {
    triggerCollectFlash(meta?.buff?.color || meta?.eventBonus?.color);
    if (meta?.buff) {
      showSingleToast(`${meta.buff.icon} ${meta.buff.name}：${meta.buff.effect} · +${points} 星尘`, 'buff');
    } else if (meta?.eventBonus) {
      showSingleToast(`${meta.eventBonus.icon} ${meta.eventBonus.key === 'treasure' ? '宝箱词' : '流星词'} +${points} 星尘 · ${word.en}`, 'buff');
    } else {
      showSingleToast(`+${points} 星尘 · ${word.en} / ${word.zh}`);
    }
    recordSingleCollect(word, combo, points, meta);
    const bar = $('#input-bar-single');
    if (bar) {
      bar.classList.add('success');
      setTimeout(() => bar.classList.remove('success'), 260);
    }
    // 显示单词中文释义
    const el = $('#combo-display');
    if (el && combo >= 5) {
      el.textContent = `×${combo}  ${word.zh}`;
      el.classList.add('active');
      clearTimeout(el._timeout);
      el._timeout = setTimeout(() => el.classList.remove('active'), 1500);
    }
  };

  engine.onWrongInput = (info = {}) => {
    const bar = $('#input-bar-single');
    if (bar) {
      bar.classList.add('shake');
      setTimeout(() => bar.classList.remove('shake'), 450);
    }
    recordSingleMistake(info);
    showSingleToast(info.guardSafe ? '极光护符保护：抵消了一次输错' : (info.echoSafe ? '回声词链保护：输错不掉连击' : '前缀不匹配，已自动回退错误字符'), info.echoSafe ? 'buff' : 'warn');
  };

  engine.onLevelChange = (levelName, level, wordsCollected) => {
    const stage = $('#single-stage');
    if (stage) stage.textContent = `${levelName}`;
    const words = $('#single-words');
    if (words) words.textContent = wordsCollected;
  };

  engine.onSkillChange = (skill) => {
    updatePauseInfo();
    updateBuffPanel(skill?.activeBuffs);
    updatePacePanel(skill);
  };

  engine.onBuffActivate = (buff) => {
    if (!buff?.hotword) {
      showSingleToast(`${buff.icon || '✦'} ${buff.name || '增益'}：${buff.effect || '效果已触发'}`, 'buff');
    }
  };

  engine.onBuffChange = (buffs) => updateBuffPanel(buffs);

  engine.onMiss = (word) => {
    recordSingleMiss(word);
    if (word?.shielded) {
      showSingleToast(`月光盾抵挡了 ${word.en}，生命未减少`, 'buff');
    } else {
      showSingleToast(`错过了 ${word.en}，连击中断`, 'warn');
    }
  };

  engine.onRunEvent = (event, phase) => handleGameplayEvent(event, phase);
  engine.onSkillUse = (skill) => recordSingleSkill(skill);

  engine.onGameOver = (result) => {
    $('#rs-score').textContent = result.score;
    const wordsEl = $('#rs-words');
    if (wordsEl) wordsEl.textContent = result.words;
    $('#rs-accuracy').textContent = `${result.accuracy}%`;
    $('#rs-combo').textContent = `×${result.maxCombo}`;
    const levelEl = $('#rs-level');
    if (levelEl) levelEl.textContent = result.level || '萤火初醒';
    finalizeSingleRun(result);
    $('#result-single').hidden = false;
  };

  return engine;
}

/* ================================================================
   SCENE SWITCHING
   ================================================================ */
function switchScene(name) {
  // Stop all loops
  cancelAnimationFrame(state.animFrameId || 0);
  cancelAnimationFrame(state.fireflyAnimId || 0);
  cancelAnimationFrame(state.gameLoopId || 0);
  if (state.countdownInterval) { clearInterval(state.countdownInterval); state.countdownInterval = null; }
  if (state.currentScene === 'single' && name !== 'single') stopChefMode();

  state.currentScene = name;
  Object.values(scenes).forEach((s) => s.classList.remove('active'));
  scenes[name].classList.add('active');

  // Audio: BGM plays during single-player, stops otherwise
  audioManager.sync();

  if (name === 'menu')   initTitleParticles();
  if (name === 'single') startSingleMode();
  if (name === 'dual')   startDualMode();
  if (name === 'settings') renderSettings();
  if (name === 'achievements') renderAchievements();
  if (name === 'friends') renderFriends();
  if (name === 'rank') renderRank();
}
window.switchScene = switchScene;

/* ================================================================
   SINGLE PLAYER — Full Game Loop
   ================================================================ */
function startSingleMode() {
  initStarfield();
  initFireflies();
  applySingleBackgroundTheme();
  renderSingleConfig();
  syncSingleModeScene();

  // Init engine
  syncWordbankList();
  renderWordbankButton();
  applySettingsToGame();
  const eng = initEngine();
  eng.loadWordBank(state.wordbank[state.wordbankIdx]);
  setupSingleRun();
  eng.start();
  if (isChefMode()) {
    startChefMode();
  } else {
    stopChefMode();
  }
  updateBuffPanel([]);
  updateQuestPanel();

  // Hide result panel
  $('#result-single').hidden = true;

  // Game loop
  (function loop() {
    if (state.currentScene !== 'single') return;
    if (isChefMode()) {
      updateChefMode();
    } else {
      eng.update();
    }
    if (eng.state === 'paused') updatePauseInfo();
    state.gameLoopId = requestAnimationFrame(loop);
  })();
}

function triggerCollectFlash(color = '') {
  const flash = $('#collect-flash');
  if (!flash) return;
  if (color) flash.style.setProperty('--flash-color', color);
  flash.classList.add('active');
  gentleHaptic(18);
  setTimeout(() => flash.classList.remove('active'), 260);
}

function showSingleToast(text, type = 'good') {
  const toast = $('#toast-single');
  if (!toast) return;
  toast.textContent = text;
  toast.className = `single-toast active ${type}`;
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('active'), type === 'buff' ? 1900 : 1300);
}

function isChefMode() {
  return state.settings.singleMode === 'chef';
}

function syncSingleModeScene() {
  document.body.classList.toggle('chef-mode', isChefMode());
  const stageLabel = $('#single-stage-label');
  const wordsLabel = $('#single-words-label');
  const focus = $('.focus-panel');
  const pause = $('.pause-info');
  if (stageLabel) stageLabel.textContent = isChefMode() ? '班次' : '阶段';
  if (wordsLabel) wordsLabel.textContent = isChefMode() ? '出餐' : '单词';
  if (focus) {
    focus.textContent = isChefMode()
      ? '厨房轮班中，优先处理快超时订单；点击订单卡可切换目标，完成全部步骤即可出餐。'
      : '完成本局目标拿奖励；左侧增益/目标和右侧事件卡都可以点标题收纳，避免遮挡下落词。收词越多下落越快，每 20 词有补给。';
    const dot = document.createElement('span');
    dot.className = 'focus-dot';
    focus.prepend(dot);
  }
  if (pause) {
    pause.style.display = isChefMode() ? 'none' : '';
  }
}

function applySingleBackgroundTheme() {
  const root = $('#scene-single');
  if (!root) return;
  const bg = getSingleBackgroundMeta();
  root.dataset.singleBg = bg.key;
}

function createChefDishPool() {
  return [
    { name: '星光沙拉', tone: '#DFF3E6' },
    { name: '月湾煎蛋', tone: '#FFF0C0' },
    { name: '晨露烤面包', tone: '#F7D8A2' },
    { name: '极光热汤', tone: '#DDF6FF' },
    { name: '灯火甜点', tone: '#F7E8EF' },
    { name: '竹雨小食', tone: '#E6F6DC' },
  ];
}

function createChefState() {
  return {
    dishes: createChefDishPool(),
    orders: [],
    nextId: 1,
    activeId: 0,
    input: '',
    served: 0,
    missed: 0,
    combo: 0,
    lastSpawnAt: 0,
    running: true,
  };
}

function getChefOrderLimit() {
  return Math.max(2, Math.min(4, (state.settings.kitchenOrderDensity || 1) + 2));
}

function getChefPatienceMs() {
  return [15000, 17500, 20000][Math.max(0, Math.min(2, state.settings.kitchenPatience || 1))] || 17500;
}

function pickChefWords(count = 2) {
  const bank = getDualBank();
  const picked = [];
  const used = new Set();
  while (picked.length < count && bank.length) {
    const item = bank[Math.floor(Math.random() * bank.length)];
    if (!item?.en || used.has(item.en)) continue;
    used.add(item.en);
    picked.push({ en: String(item.en).toLowerCase(), zh: item.zh || '' });
  }
  return picked;
}

function createChefOrder() {
  const chef = state.kitchen;
  const dish = chef.dishes[Math.floor(Math.random() * chef.dishes.length)];
  const steps = pickChefWords(Math.random() < 0.45 ? 3 : 2);
  return {
    id: chef.nextId++,
    dish: dish.name,
    tone: dish.tone,
    steps,
    stepIndex: 0,
    lifeMs: getChefPatienceMs(),
    leftMs: getChefPatienceMs(),
    createdAt: performance.now(),
  };
}

function getChefActiveOrder() {
  const chef = state.kitchen;
  if (!chef?.orders?.length) return null;
  return chef.orders.find((order) => order.id === chef.activeId) || chef.orders[0] || null;
}

function ensureChefOrders() {
  const chef = state.kitchen;
  if (!chef) return;
  const limit = getChefOrderLimit();
  while (chef.orders.length < Math.min(2, limit)) {
    const order = createChefOrder();
    chef.orders.push(order);
    if (!chef.activeId) chef.activeId = order.id;
  }
}

function renderChefBoard() {
  const board = $('#chef-board');
  const list = $('#chef-order-list');
  const status = $('#chef-board-status');
  const tip = $('#chef-board-tip');
  if (!board || !list) return;
  board.hidden = !isChefMode();
  if (!isChefMode()) {
    list.innerHTML = '';
    return;
  }
  const chef = state.kitchen;
  if (!chef) return;
  const active = getChefActiveOrder();
  if (status) status.textContent = `厨房轮班 · 已出餐 ${chef.served}`;
  if (tip) tip.textContent = active
    ? `当前订单：${active.dish} · 第 ${active.stepIndex + 1}/${active.steps.length} 步`
    : '等待新订单中…';
  list.innerHTML = chef.orders.map((order) => {
    const current = order.steps[order.stepIndex];
    const pct = Math.max(0, Math.min(100, Math.round((order.leftMs / order.lifeMs) * 100)));
    const activeCls = order.id === chef.activeId ? 'active' : '';
    const dangerCls = pct <= 28 ? 'danger' : '';
    return `
      <article class="chef-order-card ${activeCls} ${dangerCls}" data-chef-order="${order.id}" style="--chef-tone:${order.tone}">
        <div class="chef-order-top">
          <strong>${escapeHTML(order.dish)}</strong>
          <em>${Math.ceil(order.leftMs / 1000)}s</em>
        </div>
        <div class="chef-order-step">
          <span>${escapeHTML(current?.en || 'done')}</span>
          <small>${escapeHTML(current?.zh || '准备出餐')}</small>
        </div>
        <div class="chef-order-progress"><span style="width:${pct}%"></span></div>
      </article>
    `;
  }).join('');
}

function updateChefHud() {
  const chef = state.kitchen;
  if (!chef) return;
  const score = $('#single-score');
  const words = $('#single-words');
  const stage = $('#single-stage');
  const combo = $('#combo-display');
  const input = $('#input-text-single');
  if (score) score.textContent = String(engine?.score || 0);
  if (words) words.textContent = String(chef.served || 0);
  if (stage) stage.textContent = chef.orders.length ? `${chef.orders.length} 单待处理` : '等待补单';
  if (combo) {
    combo.textContent = chef.combo >= 2 ? `出餐连击 ×${chef.combo}` : '';
    combo.classList.toggle('active', chef.combo >= 2);
  }
  if (input) input.textContent = chef.input || '_';
}

function startChefMode() {
  state.kitchen = createChefState();
  ensureChefOrders();
  if (engine) {
    engine.state = 'playing';
    engine.words = [];
    engine.currentInput = '';
    engine.score = 0;
    engine.wordsCollected = 0;
    engine.combo = 0;
    engine.maxCombo = 0;
    engine.lives = state.settings.startLives;
    engine._emitAll?.();
  }
  renderChefBoard();
  updateChefHud();
}

function stopChefMode() {
  state.kitchen = null;
  const board = $('#chef-board');
  if (board) board.hidden = true;
}

function spawnChefOrderIfNeeded(now = performance.now()) {
  const chef = state.kitchen;
  if (!chef) return;
  const limit = getChefOrderLimit();
  const interval = 4600 - Math.min(1200, chef.served * 70) - (state.settings.kitchenOrderDensity || 1) * 240;
  if (chef.orders.length < limit && now - chef.lastSpawnAt >= Math.max(2400, interval)) {
    chef.lastSpawnAt = now;
    chef.orders.push(createChefOrder());
    if (!chef.activeId) chef.activeId = chef.orders[0]?.id || 0;
  }
}

function finishChefOrder(order) {
  const chef = state.kitchen;
  if (!chef || !order) return;
  chef.orders = chef.orders.filter((item) => item.id !== order.id);
  chef.served += 1;
  chef.combo += 1;
  chef.input = '';
  chef.activeId = chef.orders[0]?.id || 0;
  if (engine) {
    engine.score += 18 + Math.min(16, chef.combo * 2);
    engine.wordsCollected = chef.served;
    engine.combo = chef.combo;
    engine.maxCombo = Math.max(engine.maxCombo || 0, chef.combo);
    engine._emitAll?.();
  }
  triggerCollectFlash(order.tone);
  showSingleToast(`出餐完成：${order.dish}`, 'buff');
  ensureChefOrders();
  renderChefBoard();
  updateChefHud();
}

function missChefOrder(order) {
  const chef = state.kitchen;
  if (!chef || !order) return;
  chef.orders = chef.orders.filter((item) => item.id !== order.id);
  chef.missed += 1;
  chef.combo = 0;
  chef.input = '';
  chef.activeId = chef.orders[0]?.id || 0;
  if (engine) {
    engine.combo = 0;
    engine.lives = Math.max(0, (engine.lives || 1) - 1);
    engine._emitAll?.();
    if ((engine.lives || 0) <= 0) {
      engine.onGameOver?.({
        score: engine.score || 0,
        words: chef.served || 0,
        maxCombo: engine.maxCombo || 0,
        accuracy: 100,
        totalCorrect: chef.served || 0,
        mistakes: chef.missed || 0,
        missed: chef.missed || 0,
        level: '厨房轮班',
        speedRamp: 1,
        paceTier: '厨房轮班',
      });
      $('#result-single').hidden = false;
      return;
    }
  }
  showSingleToast(`订单超时：${order.dish}`, 'warn');
  ensureChefOrders();
  renderChefBoard();
  updateChefHud();
}

function updateChefMode() {
  const chef = state.kitchen;
  if (!chef || !engine) return;
  const now = performance.now();
  spawnChefOrderIfNeeded(now);
  for (let i = chef.orders.length - 1; i >= 0; i -= 1) {
    const order = chef.orders[i];
    order.leftMs = Math.max(0, order.leftMs - 16);
    if (order.leftMs <= 0) {
      missChefOrder(order);
      return;
    }
  }
  renderChefBoard();
  updateChefHud();
}

function handleChefTyping(key) {
  const chef = state.kitchen;
  const active = getChefActiveOrder();
  if (!chef || !active) return;
  if (key === 'Backspace') {
    chef.input = chef.input.slice(0, -1);
    updateChefHud();
    return;
  }
  if (!/^[a-z]$/i.test(key)) return;
  const target = active.steps[active.stepIndex]?.en || '';
  const next = (chef.input + key.toLowerCase()).trim();
  if (!target.startsWith(next)) {
    chef.combo = 0;
    chef.input = chef.input.slice(0, -1);
    showSingleToast('工序字母不匹配', 'warn');
    updateChefHud();
    renderChefBoard();
    return;
  }
  chef.input = next;
  if (chef.input === target) {
    chef.input = '';
    active.stepIndex += 1;
    if (active.stepIndex >= active.steps.length) {
      finishChefOrder(active);
      return;
    }
  }
  updateChefHud();
  renderChefBoard();
}


const SINGLE_PANEL_COLLAPSE_KEY = 'ww-single-panel-collapse-v096';
function readSinglePanelCollapseState() {
  try { return JSON.parse(localStorage.getItem(SINGLE_PANEL_COLLAPSE_KEY) || '{}') || {}; }
  catch (err) { return {}; }
}
function writeSinglePanelCollapseState(map) {
  try { localStorage.setItem(SINGLE_PANEL_COLLAPSE_KEY, JSON.stringify(map || {})); }
  catch (err) { /* localStorage may be unavailable in private mode */ }
}
function setSinglePanelCollapsed(panelId, collapsed, persist = true) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  panel.classList.toggle('collapsed', Boolean(collapsed));
  const button = panel.querySelector('.panel-collapse-toggle');
  if (button) {
    button.setAttribute('aria-expanded', String(!collapsed));
    const em = button.querySelector('em');
    if (em) em.textContent = collapsed ? '展开' : '收起';
  }
  if (persist) {
    const map = readSinglePanelCollapseState();
    map[panelId] = Boolean(collapsed);
    writeSinglePanelCollapseState(map);
  }
}
function restoreSinglePanelCollapse() {
  const map = readSinglePanelCollapseState();
  ['buff-panel', 'quest-panel', 'event-panel'].forEach((id) => setSinglePanelCollapsed(id, Boolean(map[id]), false));
}
document.addEventListener('click', (event) => {
  const btn = event.target.closest('.panel-collapse-toggle');
  if (!btn) return;
  const panelId = btn.dataset.collapseTarget;
  const panel = panelId ? document.getElementById(panelId) : btn.closest('.collapsible-panel');
  if (!panel) return;
  event.preventDefault();
  event.stopPropagation();
  setSinglePanelCollapsed(panel.id, !panel.classList.contains('collapsed'));
});

function updateBuffPanel(buffs = null) {
  const panel = $('#buff-panel');
  const list = $('#buff-list');
  if (!panel || !list) return;
  const active = Array.isArray(buffs)
    ? buffs
    : (engine && typeof engine.getActiveBuffs === 'function' ? engine.getActiveBuffs() : []);

  panel.classList.toggle('has-buffs', active.length > 0);
  if (!active.length) {
    list.innerHTML = '<span class="buff-empty">打中闪光词：获得增益</span>';
    return;
  }

  list.innerHTML = active.map((buff) => {
    const remaining = buff.remainingMs ? `${Math.ceil(buff.remainingMs / 1000)}s` : (buff.charges ? `×${buff.charges}` : '已触发');
    const pct = buff.durationMs ? Math.max(0, Math.min(100, Math.round((buff.remainingMs / buff.durationMs) * 100))) : 100;
    return `
      <span class="buff-pill" title="${escapeHTML(buff.effect || '')}" style="--buff-color:${escapeHTML(buff.color || '#FFE880')}; --buff-pct:${pct}%">
        <b>${buff.icon || '✦'}</b>
        <span>${escapeHTML(buff.name || '增益')}</span>
        <em>${remaining}</em>
      </span>
    `;
  }).join('');
}


/* ================================================================
   SINGLE PLAYER — 局内任务 / 随机事件 / 可解锁目标
   ================================================================ */
const RUN_MISSION_POOL = [
  { id: 'words_8', icon: '🌱', title: '采集小径', desc: '收集 8 个普通词', type: 'words', target: 8, reward: 'score', amount: 40, rewardText: '+40 星尘' },
  { id: 'combo_6', icon: '🔥', title: '连击火苗', desc: '达成 6 连击', type: 'combo', target: 6, reward: 'freeze', amount: 1, rewardText: '+1 冻结' },
  { id: 'score_180', icon: '✨', title: '星尘袋', desc: '本局获得 180 星尘', type: 'score', target: 180, reward: 'shield', amount: 1, rewardText: '+1 护盾' },
  { id: 'buff_1', icon: '🫧', title: '抓住闪光', desc: '触发 1 个 Buff', type: 'buffs', target: 1, reward: 'starburst', amount: 1, rewardText: '+1 星爆' },
  { id: 'event_1', icon: '☄', title: '追上变奏', desc: '经历 1 次随机事件', type: 'events', target: 1, reward: 'score', amount: 55, rewardText: '+55 星尘' },
  { id: 'freeze_1', icon: '❄', title: '冷静时刻', desc: '使用 1 次冻结', type: 'freezes', target: 1, reward: 'life', amount: 1, rewardText: '+1 生命' },
  { id: 'precision_12', icon: '🎯', title: '精准采摘', desc: '错误不超过 1 次时收集 12 词', type: 'precision', target: 12, reward: 'shield', amount: 2, rewardText: '+2 护盾' },
  { id: 'combo_10', icon: '🏹', title: '长弓连射', desc: '达成 10 连击', type: 'combo', target: 10, reward: 'starburst', amount: 1, rewardText: '+1 星爆' },
];

function setupSingleRun() {
  state.singleRun = {
    wordbank: state.wordbank[state.wordbankIdx] || 'CET-4',
    startedAt: Date.now(),
    buffs: 0,
    events: 0,
    freezes: 0,
    starbursts: 0,
    mistakes: 0,
    missed: 0,
    completedMissions: 0,
    missions: pickRunMissions(),
  };
  updateQuestPanel();
  renderEventPanel(null, 'reset');
  updateResultUnlocks([]);
}

function pickRunMissions() {
  return [...RUN_MISSION_POOL]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((mission) => ({ ...mission, progress: 0, completed: false }));
}

function getMissionProgress(mission) {
  const run = state.singleRun;
  if (!engine || !run || !mission) return 0;
  if (mission.type === 'words') return engine.wordsCollected || 0;
  if (mission.type === 'combo') return engine.maxCombo || 0;
  if (mission.type === 'score') return engine.score || 0;
  if (mission.type === 'buffs') return run.buffs || 0;
  if (mission.type === 'events') return run.events || 0;
  if (mission.type === 'freezes') return run.freezes || 0;
  if (mission.type === 'precision') return (engine.mistakes || 0) <= 1 ? (engine.wordsCollected || 0) : Math.max(0, (engine.wordsCollected || 0) - 3);
  return 0;
}

function updateRunMissions(reason = '') {
  const run = state.singleRun;
  if (!run || !engine) return;
  run.missions.forEach((mission) => {
    if (mission.completed) return;
    mission.progress = Math.min(mission.target, getMissionProgress(mission));
    const precisionOk = mission.type !== 'precision' || (engine.mistakes || 0) <= 1;
    if (mission.progress >= mission.target && precisionOk) {
      mission.completed = true;
      run.completedMissions += 1;
      grantMissionReward(mission);
      showSingleToast(`目标完成：${mission.title} · 奖励${mission.rewardText}`, 'buff');
      gentleHaptic(26);
    }
  });
  updateQuestPanel(reason);
}

function grantMissionReward(mission) {
  if (!engine || !mission) return;
  const amount = Number(mission.amount || 1);
  if (mission.reward === 'score') engine.score += amount;
  if (mission.reward === 'freeze') engine.pauseRemaining = Math.min(9, (engine.pauseRemaining || 0) + amount);
  if (mission.reward === 'starburst') engine.clearRemaining = Math.min(7, (engine.clearRemaining || 0) + amount);
  if (mission.reward === 'shield') engine.shields = Math.min(5, (engine.shields || 0) + amount);
  if (mission.reward === 'life') engine.lives = Math.min(engine.maxLives || 5, (engine.lives || 0) + amount);
  if (typeof engine._spawnBuffParticles === 'function') {
    engine._spawnBuffParticles(engine.w / 2, engine.h * 0.32, { icon: mission.icon, color: '#FFE480' });
  }
  if (typeof engine._emitAll === 'function') engine._emitAll();
}

function updateQuestPanel() {
  const panel = $('#quest-panel');
  const list = $('#quest-list');
  if (!panel || !list) return;
  const run = state.singleRun;
  if (!run || !run.missions?.length) {
    list.innerHTML = '<span class="quest-empty">开始一局后会生成 3 个本局目标</span>';
    return;
  }
  list.innerHTML = run.missions.map((mission) => {
    const progress = Math.min(mission.target, getMissionProgress(mission));
    mission.progress = Math.max(mission.progress || 0, progress);
    const pct = Math.round((mission.progress / mission.target) * 100);
    const atRisk = mission.type === 'precision' && engine && (engine.mistakes || 0) > 1 && !mission.completed;
    return `
      <article class="quest-card ${mission.completed ? 'completed' : ''} ${atRisk ? 'at-risk' : ''}">
        <b>${mission.completed ? '✓' : mission.icon}</b>
        <div><strong>${escapeHTML(mission.title)}</strong><small>${escapeHTML(mission.desc)}</small><i>${Math.min(mission.progress, mission.target)}/${mission.target}</i></div>
        <span class="quest-bar"><em style="width:${Math.max(4, Math.min(100, pct))}%"></em></span>
      </article>
    `;
  }).join('');
}

function recordSingleCollect(word, combo, points, meta = {}) {
  if (!state.singleRun) return;
  if (meta?.buff) state.singleRun.buffs += 1;
  updateRunMissions(meta?.buff ? 'buff' : 'collect');
}

function recordSingleMistake(info = {}) {
  if (!state.singleRun) return;
  state.singleRun.mistakes += 1;
  updateRunMissions(info.echoSafe ? 'echo-safe' : 'mistake');
}

function recordSingleMiss(word) {
  if (!state.singleRun) return;
  if (!word?.shielded) state.singleRun.missed += 1;
  updateRunMissions('miss');
}

function recordSingleSkill(skill = {}) {
  if (!state.singleRun || !skill?.type) return;
  if (skill.type === 'freeze') state.singleRun.freezes += 1;
  if (skill.type === 'starburst') state.singleRun.starbursts += 1;
  updateRunMissions(skill.type);
}

function handleGameplayEvent(event, phase = 'start') {
  if (!event) return;
  if (phase === 'start') {
    if (state.singleRun) state.singleRun.events += 1;
    showSingleToast(`${event.icon} ${event.name} 开始：${event.desc}`, 'buff');
    renderEventPanel(event, 'start');
    updateRunMissions('event');
  } else {
    renderEventPanel(event, 'end');
  }
}

function renderEventPanel(event, phase = 'start') {
  const panel = $('#event-panel');
  if (!panel) return;
  clearTimeout(panel._timer);
  const collapseMap = readSinglePanelCollapseState();
  const collapsed = panel.classList.contains('collapsed') || Boolean(collapseMap['event-panel']);
  if (!event || phase === 'reset') {
    panel.hidden = true;
    panel.className = `event-panel collapsible-panel${collapsed ? ' collapsed' : ''}`;
    panel.innerHTML = '';
    return;
  }
  panel.hidden = false;
  panel.className = `event-panel collapsible-panel active ${phase === 'end' ? 'ending' : ''} ${collapsed ? 'collapsed' : ''}`;
  panel.style.setProperty('--event-color', event.color || '#FFE480');
  panel.innerHTML = `<button class="event-title panel-collapse-toggle" type="button" data-collapse-target="event-panel" aria-expanded="${collapsed ? 'false' : 'true'}" title="收纳/展开事件提示">事件 <em>${collapsed ? '展开' : '收起'}</em></button><b>${event.icon || '✦'}</b><div><strong>${phase === 'end' ? event.name + '结束' : event.name}</strong><span>${escapeHTML(event.desc || '玩法变奏正在发生')}</span></div>`;
  if (phase === 'end') panel._timer = setTimeout(() => { panel.hidden = true; panel.className = `event-panel collapsible-panel${panel.classList.contains('collapsed') ? ' collapsed' : ''}`; }, 1200);
}

function updateResultUnlocks(unlocks = [], completedMissions = 0) {
  const box = $('#result-unlocks-single');
  if (!box) return;
  if (!unlocks.length && !completedMissions) {
    box.innerHTML = '<span class="result-mini-note">完成本局目标或解锁成就后，会在这里显示奖励。</span>';
    return;
  }
  const missionHtml = completedMissions ? `<span class="unlock-pill">🎯 本局目标 ×${completedMissions}</span>` : '';
  const unlockHtml = unlocks.map((a) => `<span class="unlock-pill">${a.icon} 新成就：${escapeHTML(a.title)}</span>`).join('');
  box.innerHTML = missionHtml + unlockHtml;
}

function finalizeSingleRun(result) {
  updateRunMissions('gameover');
  const run = state.singleRun || {};
  const unlocked = updateAchievementStats(result, run);
  updateResultUnlocks(unlocked, run.completedMissions || 0);
  if (unlocked.length) {
    showSingleToast(`解锁 ${unlocked.length} 个新成就：${unlocked[0].title}`, 'buff');
  }
}

/* ================================================================
   KEYBOARD — Route to active scene
   ================================================================ */
document.addEventListener('keydown', (e) => {
  const isTypingTarget = e.target?.matches?.('input, textarea, select') || e.target?.isContentEditable;
  if (isTypingTarget && e.key !== 'Escape') return;

  // Prevent default for game keys
  const gameKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Backspace', ' ', 'Escape', 'Tab'];
  if (gameKeys.includes(e.key)) e.preventDefault();

  if (state.currentScene === 'menu')   handleMenuKeyboard(e);
  if (state.currentScene === 'single') handleSingleKeyboard(e);
  if (state.currentScene === 'dual')   handleDualKeyboard(e);
});

window.addEventListener('resize', () => {
  if (state.currentScene === 'single' && engine && typeof engine.resize === 'function') {
    engine.resize();
  }
});

function handleMenuKeyboard(e) {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    const btns = $$('#menu-buttons .wood-btn');
    state.menuIndex = e.key === 'ArrowUp'
      ? Math.max(0, state.menuIndex - 1)
      : Math.min(btns.length - 1, state.menuIndex + 1);
    updateMenuFocus();
  }
  if (e.key === 'Enter') {
    const btn = $$('#menu-buttons .wood-btn')[state.menuIndex];
    if (btn?.dataset.scene) switchScene(btn.dataset.scene);
  }
}

function handleSingleKeyboard(e) {
  // 结算面板快捷键
  if (!$('#result-single').hidden) {
    if (e.key === 'Enter') {
      $('#result-single').hidden = true;
      if (engine) {
        setupSingleRun();
        engine.start();
        if (isChefMode()) startChefMode();
        else stopChefMode();
        updatePauseInfo();
        updatePacePanel();
      }
      return;
    }
    if (e.key === 'Escape') {
      $('#result-single').hidden = true;
      switchScene('menu');
      return;
    }
    return; // 结算时屏蔽游戏按键
  }

  if (e.key === 'Escape') {
    switchScene('menu');
    return;
  }
  if (isChefMode()) {
    if (e.key === 'Backspace') {
      handleChefTyping('Backspace');
      return;
    }
    if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
      handleChefTyping(e.key);
      return;
    }
  }
  // Forward all other keys to engine
  if (engine) {
    if (e.key === ' ') {
      engine.handleKey(' ');
      updatePauseInfo();
    } else if (e.key === 'Backspace') {
      engine.handleKey('Backspace');
    } else if (e.key === 'Tab') {
      engine.handleKey(e.key);
      updatePauseInfo();
    } else if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
      engine.handleKey(e.key);
    }
  }
}

function handleMobileKeyboardPress(key, button = null) {
  if (state.currentScene !== 'single' || !engine || !state.settings.mobileKeyboard) return;
  const resultPanel = $('#result-single');
  if (resultPanel && !resultPanel.hidden) return;

  const normalized = String(key || '').toLowerCase();
  if (button) {
    button.classList.add('pressed');
    clearTimeout(button._pressTimer);
    button._pressTimer = setTimeout(() => button.classList.remove('pressed'), 120);
  }

  if (normalized === 'pause') {
    if (!isChefMode()) {
      engine.handleKey(' ');
      updatePauseInfo();
    }
  } else if (normalized === 'clear') {
    if (!isChefMode()) {
      engine.handleKey('Tab');
      updatePauseInfo();
    }
  } else if (/^[a-z]$/.test(normalized)) {
    if (isChefMode()) handleChefTyping(normalized);
    else engine.handleKey(normalized);
  }
  gentleHaptic(normalized.length === 1 ? 8 : 14);
}

function setupMobileKeyboard() {
  $$('.mobile-key').forEach((button) => {
    if (button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';
    const press = (event) => {
      event.preventDefault();
      handleMobileKeyboardPress(button.dataset.key, button);
    };
    button.addEventListener('pointerdown', press);
    button.addEventListener('contextmenu', (event) => event.preventDefault());
  });
}

/* ================================================================
   MENU — Navigation & Wordbank
   ================================================================ */
const menuButtons = $$('#menu-buttons .wood-btn');

menuButtons.forEach((btn, i) => {
  btn.addEventListener('click', (event) => {
    event.__wwSceneHandled = true;
    state.menuIndex = i;
    if (btn.dataset.scene) switchScene(btn.dataset.scene);
  });
  btn.addEventListener('mouseenter', () => { state.menuIndex = i; updateMenuFocus(); });
});


// 兜底：即使按钮内部图标/高亮层被点击，也能进入对应画面。
document.addEventListener('click', (e) => {
  if (e.__wwSceneHandled) return;
  const sceneBtn = e.target.closest('[data-scene]');
  if (!sceneBtn) return;
  const sceneName = sceneBtn.dataset.scene;
  if (!scenes[sceneName]) return;
  e.preventDefault();
  const index = Array.from(menuButtons).indexOf(sceneBtn);
  if (index >= 0) state.menuIndex = index;
  switchScene(sceneName);
});

function updateMenuFocus() {
  menuButtons.forEach((b, i) => {
    b.style.outline = i === state.menuIndex ? '3px solid var(--gold-star)' : 'none';
    if (i === state.menuIndex) b.focus();
  });
}

$('#btn-wordbank')?.addEventListener('click', () => {
  setWordbankOpen(!state.wordbankOpen);
  return;
  const labels = syncWordbankList();
  state.wordbankIdx = (state.wordbankIdx + 1) % labels.length;
  renderWordbankButton();
  showFeatureToast(`已切换词库：${labels[state.wordbankIdx]}`);
});
$('#btn-single-mode')?.addEventListener('click', cycleSingleMode);
$('#btn-single-map')?.addEventListener('click', cycleSingleBackground);
$('#btn-cycle-single-map')?.addEventListener('click', cycleSingleBackground);
document.addEventListener('click', (e) => {
  const option = e.target.closest('.wordbank-option');
  if (option) {
    selectWordbank(Number(option.dataset.wordbankIndex));
    setWordbankOpen(false);
    return;
  }
  if (!e.target.closest('.wordbank-selector')) {
    setWordbankOpen(false);
  }

  const card = e.target.closest('[data-chef-order]');
  if (!card || !state.kitchen) return;
  state.kitchen.activeId = Number(card.dataset.chefOrder);
  state.kitchen.input = '';
  renderChefBoard();
  updateChefHud();
});

function updatePauseInfo() {
  if (!engine) return;
  const el = $('.pause-info');
  if (!el) return;
  const isPaused = engine.state === 'paused';
  const sec = typeof engine.getPauseSecondsRemaining === 'function' ? engine.getPauseSecondsRemaining() : 0;
  el.classList.toggle('is-paused', isPaused);
  el.innerHTML = isPaused
    ? `<span class="pause-btn-icon pulse">&#10074;&#10074;</span> 冻结 ${sec}s · 可输入消除` +
      ` <span class="pause-divider">|</span>` +
      ` <span class="clear-btn-icon">&#10022;</span> 星爆×${engine.clearRemaining}`
    : `<span class="pause-btn-icon">&#10074;&#10074;</span> Space 冻结${Math.round((engine.pauseDurationMs || 5000) / 1000)}s×${engine.pauseRemaining}` +
      ` <span class="pause-divider">|</span>` +
      ` <span class="clear-btn-icon">&#10022;</span> Tab/双击 Space 星爆×${engine.clearRemaining}`;
}


function updatePacePanel(skill = null) {
  const el = $('#single-pace');
  if (!el) return;
  const multiplier = Number(skill?.speedRampMultiplier || engine?.speedRampMultiplier || 1);
  const tier = skill?.paceTier || engine?.paceTier || { name: '微光起步', icon: '🌱' };
  el.classList.toggle('hot', multiplier >= 1.38);
  el.classList.toggle('rush', multiplier >= 1.65);
  el.innerHTML = `速度: <strong>×${multiplier.toFixed(2)}</strong> <small>${tier.icon || '🌱'} ${escapeHTML(tier.name || '微光起步')}</small>`;
}

/* ================================================================
   RESULT PANEL — Replay / Back
   ================================================================ */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.result-buttons .wood-btn');
  if (!btn) return;
  const text = btn.textContent.trim();
  if (text === '再来一局') {
    $$('.result-panel').forEach((p) => (p.hidden = true));
    if (state.currentScene === 'single' && engine) {
      setupSingleRun();
      engine.start();
      if (isChefMode()) startChefMode();
      else stopChefMode();
      updatePauseInfo();
      updatePacePanel();
    }
    if (state.currentScene === 'dual') {
      restartDualBattle();
    }
  }
  if (text === '返回菜单') {
    $$('.result-panel').forEach((p) => (p.hidden = true));
    if (state.countdownInterval) { clearInterval(state.countdownInterval); state.countdownInterval = null; }
    switchScene('menu');
  }
});

/* ================================================================
   TITLE PARTICLES
   ================================================================ */
function initTitleParticles() {
  const c = setupCanvas('#title-particles');
  if (!c) return;
  const particles = Array.from({ length: 25 }, () => ({
    x: Math.random() * c.w, y: Math.random() * c.h,
    r: Math.random() * 2.5 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4 - 0.2,
    alpha: Math.random() * 0.6 + 0.2,
    life: Math.random() * 200 + 100, maxLife: 300,
  }));
  (function draw() {
    if (state.currentScene !== 'menu') return;
    c.ctx.clearRect(0, 0, c.w, c.h);
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.life--;
      if (p.life <= 0) { p.x = Math.random() * c.w; p.y = Math.random() * c.h; p.life = p.maxLife; }
      const fade = p.life / p.maxLife;
      c.ctx.fillStyle = `rgba(255,248,200,${p.alpha * fade})`;
      c.ctx.shadowColor = `rgba(255,232,160,${p.alpha * fade})`;
      c.ctx.shadowBlur = p.r * 3;
      c.ctx.beginPath(); c.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); c.ctx.fill();
    });
    c.ctx.shadowBlur = 0;
    state.animFrameId = requestAnimationFrame(draw);
  })();
}

/* ================================================================
   SINGLE PLAYER — Background Effects (Starfield + Fireflies)
   ================================================================ */
function initStarfield() {
  const c = setupCanvas('#starfield-canvas');
  if (!c) return;
  const stars = Array.from({ length: 80 }, () => ({
    x: Math.random() * c.w, y: Math.random() * c.h * 0.72,
    r: Math.random() * 2.2 + 0.3,
    twinkle: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.025 + 0.008,
  }));
  let shootingStar = null;
  function spawnShootingStar() {
    shootingStar = {
      x: Math.random() * c.w * 0.8 + c.w * 0.1,
      y: Math.random() * c.h * 0.3,
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * 4 + 2,
      life: 50, maxLife: 50,
      length: Math.random() * 40 + 30,
    };
  }
  (function draw() {
    if (state.currentScene !== 'single') return;
    c.ctx.clearRect(0, 0, c.w, c.h);
    stars.forEach((s) => {
      s.twinkle += s.speed;
      const a = 0.25 + Math.abs(Math.sin(s.twinkle)) * 0.75;
      c.ctx.fillStyle = `rgba(255,248,220,${a})`;
      c.ctx.beginPath(); c.ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); c.ctx.fill();
    });
    if (!shootingStar && Math.random() < 0.008) spawnShootingStar();
    if (shootingStar) {
      shootingStar.x += shootingStar.vx; shootingStar.y += shootingStar.vy; shootingStar.life--;
      const f = shootingStar.life / shootingStar.maxLife;
      const grad = c.ctx.createLinearGradient(
        shootingStar.x, shootingStar.y,
        shootingStar.x - shootingStar.vx * shootingStar.length / 5,
        shootingStar.y - shootingStar.vy * shootingStar.length / 5
      );
      grad.addColorStop(0, `rgba(255,255,255,${f})`);
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      c.ctx.strokeStyle = grad; c.ctx.lineWidth = 1.5 * f;
      c.ctx.beginPath();
      c.ctx.moveTo(shootingStar.x, shootingStar.y);
      c.ctx.lineTo(shootingStar.x - shootingStar.vx * shootingStar.length / 5, shootingStar.y - shootingStar.vy * shootingStar.length / 5);
      c.ctx.stroke();
      if (shootingStar.life <= 0) shootingStar = null;
    }
    state.animFrameId = requestAnimationFrame(draw);
  })();
}

function initFireflies() {
  const c = setupCanvas('#firefly-canvas');
  if (!c) return;
  const flies = Array.from({ length: 18 }, () => ({
    x: Math.random() * c.w, y: c.h * 0.2 + Math.random() * c.h * 0.7,
    r: Math.random() * 2 + 1.2,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.04 + 0.015,
  }));
  (function draw() {
    if (state.currentScene !== 'single') return;
    c.ctx.clearRect(0, 0, c.w, c.h);
    flies.forEach((f) => {
      f.x += f.vx + Math.sin(f.phase) * 0.3; f.y += f.vy + Math.cos(f.phase) * 0.2; f.phase += f.speed;
      if (f.x < -20) f.x = c.w + 20; if (f.x > c.w + 20) f.x = -20;
      if (f.y < c.h * 0.1) f.y = c.h * 0.9; if (f.y > c.h * 0.95) f.y = c.h * 0.15;
      const g = 0.3 + Math.abs(Math.sin(f.phase * 1.5)) * 0.7;
      c.ctx.fillStyle = `rgba(255,248,180,${g})`;
      c.ctx.shadowColor = `rgba(255,248,150,${g * 0.8})`;
      c.ctx.shadowBlur = f.r * 5;
      c.ctx.beginPath(); c.ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); c.ctx.fill();
    });
    c.ctx.shadowBlur = 0;
    state.fireflyAnimId = requestAnimationFrame(draw);
  })();
}


/* ================================================================
   CLIPBOARD HELPERS — 复制 IP / 进入双人画面
   ================================================================ */
function escapeHTML(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function copyTextFallback(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  textarea.style.top = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
  textarea.remove();
  return ok;
}

async function copyLobbyText(text, successMessage = '已复制') {
  if (!text) return false;
  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      copied = true;
    }
  } catch (err) {
    copied = false;
  }
  if (!copied) copied = copyTextFallback(text);

  const feedback = $('#lobby-copy-feedback');
  if (feedback) {
    feedback.textContent = copied ? successMessage : '复制失败，请长按或选中 IP 手动复制';
    feedback.classList.toggle('error', !copied);
    feedback.classList.add('show');
    clearTimeout(feedback._timer);
    feedback._timer = setTimeout(() => feedback.classList.remove('show'), 1800);
  } else if (copied && typeof showFeatureToast === 'function') {
    showFeatureToast(successMessage);
  }
  return copied;
}

/* ================================================================
   DUAL MODE — Playable Local / LAN-ready Battle
   ================================================================ */
const DUAL_DEFAULT_SECONDS = 60;
const DUAL_WIN_EDGE = 35;

function createDualRoomCode() {
  return `WW-${Math.floor(1000 + Math.random() * 9000)}`;
}

function normalizeRoomCode(value = '') {
  return String(value || '')
    .trim()
    .replace(/[^a-zA-Z0-9-_]/g, '')
    .toUpperCase() || 'WORD-WHISPER';
}

function getDualInviteState() {
  try {
    const params = new URLSearchParams(window.location.search || '');
    const ip = (params.get('ip') || '').trim();
    const roomCode = normalizeRoomCode(params.get('room') || 'WORD-WHISPER');
    if (!ip && params.get('join') !== '1' && !params.get('room')) return null;
    return {
      ip,
      roomCode,
      autoJoin: params.get('join') === '1',
      role: params.get('role') === 'p1' ? 'p1' : 'p2',
    };
  } catch (err) {
    return null;
  }
}

function updateDualInviteUrl(ip, roomCode = 'WORD-WHISPER', role = 'p2', baseOrigin = '') {
  try {
    const current = new URL(window.location.href);
    const base = baseOrigin ? new URL(baseOrigin) : current;
    const url = new URL(current.pathname, base);
    if (current.hash) url.hash = current.hash;
    if (ip) url.searchParams.set('ip', normalizeNetworkHost(ip));
    else url.searchParams.delete('ip');
    url.searchParams.set('room', normalizeRoomCode(roomCode));
    url.searchParams.set('join', '1');
    url.searchParams.set('role', role);
    return url.toString();
  } catch (err) {
    return '';
  }
}

function normalizeNetworkHost(raw = '') {
  return String(raw || '')
    .trim()
    .replace(/^wss?:\/\//, '')
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '');
}

function splitHostAndPort(raw = '') {
  const host = normalizeNetworkHost(raw);
  if (!host) return { hostname: '', port: '' };
  if (host.startsWith('[')) {
    const end = host.indexOf(']');
    if (end >= 0) {
      return {
        hostname: host.slice(1, end),
        port: host[end + 1] === ':' ? host.slice(end + 2) : '',
      };
    }
  }
  const parts = host.split(':');
  if (parts.length === 2 && /^\d+$/.test(parts[1])) {
    return { hostname: parts[0], port: parts[1] };
  }
  return { hostname: host, port: '' };
}

function isLoopbackHost(raw = '') {
  const hostname = splitHostAndPort(raw).hostname.toLowerCase();
  return ['localhost', '127.0.0.1', '0.0.0.0', '::1'].includes(hostname);
}

function formatHostWithCurrentPort(raw = '') {
  const host = normalizeNetworkHost(raw);
  if (!host) return '';
  const parts = splitHostAndPort(host);
  if (parts.port) return host;
  if (location.port) return `${host}:${location.port}`;
  return host;
}

function buildShareOriginFromHost(raw = '') {
  const host = formatHostWithCurrentPort(raw);
  if (!host) return '';
  const protocol = location.protocol === 'https:' ? 'https:' : 'http:';
  return `${protocol}//${host}`;
}

function getPreferredShareOrigin(ips = []) {
  if (location.origin && !isLoopbackHost(location.hostname || '')) return location.origin;
  const firstIp = ips.find(Boolean);
  return firstIp ? buildShareOriginFromHost(firstIp) : location.origin;
}

function getDualBank() {
  const label = state.wordbank[state.wordbankIdx] || 'CET-4';
  const banks = (typeof WORD_BANKS !== 'undefined' && WORD_BANKS) || window.WORD_BANKS || {};
  const bank = banks[label] || banks['CET-4'];
  return Array.isArray(bank) && bank.length ? bank : [
    { en: 'breeze', zh: '微风；轻松通过' },
    { en: 'harvest', zh: '收获；收割' },
    { en: 'garden', zh: '花园' },
    { en: 'wonder', zh: '惊奇；奇迹' },
  ];
}

function pickDualWord(exclude = '') {
  const bank = getDualBank();
  const safe = bank.filter(w => w && w.en && w.en !== exclude);
  const pool = safe.length ? safe : bank;
  const chosen = pool[Math.floor(Math.random() * pool.length)] || pool[0];
  return { en: String(chosen.en).toLowerCase(), zh: chosen.zh || '词义待补充' };
}

function createDualState(options = {}) {
  const p1Word = options.words?.p1 || pickDualWord();
  const p2Word = options.words?.p2 || pickDualWord(p1Word.en);
  return {
    mode: options.mode || 'local',
    role: options.role || 'both',
    roomCode: options.roomCode || createDualRoomCode(),
    running: false,
    ended: false,
    seconds: DUAL_DEFAULT_SECONDS,
    players: {
      p1: { name: '1P · 春', score: 0, hits: 0, combo: 0, input: '', word: p1Word },
      p2: { name: '2P · 秋', score: 0, hits: 0, combo: 0, input: '', word: p2Word },
    },
  };
}

function startDualMode() {
  initLobbyParticles();
  resetLobby();
}

function resetLobby() {
  if (state.countdownInterval) { clearInterval(state.countdownInterval); state.countdownInterval = null; }
  closeDualSocket();
  state.dual = null;
  state.vineOffset = 0;
  state.territorySpring = 50;
  if ($('#lobby')) $('#lobby').hidden = false;
  if ($('#battlefield')) $('#battlefield').hidden = true;
  if ($('#result-dual')) $('#result-dual').hidden = true;
  updateLobbyStatus(
    'waiting',
    '点击「创建房间」可以显示 IP，也可以直接开始本机双人对战。两位玩家分别在左右输入框打自己的单词。',
    '等待开始'
  );

  const invite = state.dualInvite || getDualInviteState();
  const ipInput = $('#ip-input');
  if (invite?.ip && ipInput && !ipInput.value.trim()) {
    ipInput.value = invite.ip;
  }

  if (invite?.ip) {
    updateLobbyStatus(
      'waiting',
      `已为你填好邀请地址 <strong class="ip-value copyable-text">${escapeHTML(invite.ip)}</strong>。<span class="status-note">房间码：<strong class="copyable-url">${escapeHTML(invite.roomCode || 'WORD-WHISPER')}</strong>，点击“加入 / 开始”即可连接；如果只是自己试玩，也可以直接开始本机双人。</span>`,
      '检测到联机邀请'
    );
  }
}

/**
 * 获取本机局域网 IP 地址（WebRTC 方式）
 */
function getLocalIPs() {
  return new Promise((resolve) => {
    const ips = [];
    const RTC = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
    if (!RTC) { resolve([]); return; }

    let resolved = false;
    let pc = null;
    const finish = () => {
      if (resolved) return;
      resolved = true;
      try { pc?.close(); } catch (err) {}
      resolve([...new Set(ips)]);
    };

    try {
      pc = new RTC({ iceServers: [] });
      pc.createDataChannel('word-whisper-room');
      pc.onicecandidate = (e) => {
        if (!e.candidate) { finish(); return; }
        const candidate = e.candidate.candidate || '';
        const addr = e.candidate.address || (candidate.match(/(?:\d{1,3}\.){3}\d{1,3}/) || [])[0];
        if (addr && !addr.includes(':') && addr !== '127.0.0.1' && !addr.startsWith('169.254')) {
          ips.push(addr);
        }
      };
      pc.createOffer()
        .then((offer) => pc.setLocalDescription(offer))
        .catch(finish);
    } catch (err) {
      finish();
      return;
    }

    // 超时回退：部分浏览器会隐藏真实 IP，但页面仍可进入可玩双人模式。
    setTimeout(finish, 2200);
  });
}

function updateLobbyStatus(mode, text, title = '') {
  const el = $('#lobby-status');
  if (!el) return;
  const labelMap = {
    waiting: '等待开始',
    connected: '房间就绪',
    disconnected: '需要处理',
  };
  el.className = `lobby-status-card ${mode}`;
  el.innerHTML = `
    <div class="status-head">
      <span class="status-dot ${mode}"></span>
      <strong>${title || labelMap[mode] || '双人状态'}</strong>
    </div>
    <div class="status-body">${text}</div>
  `;
}

function buildRoomReadyHTML(ips, roomCode = createDualRoomCode()) {
  const cleanIps = ips.filter(Boolean);
  const primary = cleanIps[0] || '127.0.0.1';
  const shareOrigin = getPreferredShareOrigin(cleanIps);
  const visitOrigin = shareOrigin || buildShareOriginFromHost(primary) || `http://${primary}:3000`;
  const inviteUrl = shareOrigin
    ? updateDualInviteUrl('', roomCode, 'p2', shareOrigin)
    : (cleanIps.length ? updateDualInviteUrl(primary, roomCode, 'p2') : '');
  const ipPanel = cleanIps.length
    ? `
      <span>房间已创建。把下面的本机 IP 发给好友：</span>
      <div class="ip-copy-panel" aria-label="本机 IP 地址">
        ${cleanIps.map(ip => `<button type="button" class="ip-value copyable-text" data-copy-text="${encodeURIComponent(ip)}" title="点击复制这个 IP">${escapeHTML(ip)}</button>`).join('')}
      </div>
      <span class="status-note">房间码：<strong class="copyable-url">${escapeHTML(roomCode)}</strong>。好友连接同一 Wi‑Fi 后，可访问 <strong class="copyable-url">${escapeHTML(`http://${primary}:3000`)}</strong>，也可以直接打开下方邀请链接自动填好加入信息。</span>
    `
    : `
      <span>没有自动检测到局域网 IP。你仍然可以先开始本机双人对战。</span>
      <span class="status-note">本地测试时请先用 <strong>npm start</strong> 启动项目；如果已经部署到云服务器，也可以直接把公网域名发给好友联机。</span>
    `;

  const allIps = cleanIps.join(' / ');
  const localUrls = cleanIps.map(ip => buildShareOriginFromHost(ip) || `http://${ip}:3000`).join(' / ');
  const renderedIpPanel = ipPanel.replace(`http://${primary}:3000`, visitOrigin);
  return `
    ${renderedIpPanel}
    <div class="lobby-copy-actions">
      ${cleanIps.length ? `<button type="button" class="wood-btn small copy-ip-btn" data-copy-text="${encodeURIComponent(primary)}">复制主 IP</button>` : ''}
      ${cleanIps.length > 1 ? `<button type="button" class="wood-btn small ghost" data-copy-text="${encodeURIComponent(allIps)}">复制全部 IP</button>` : ''}
      ${cleanIps.length ? `<button type="button" class="wood-btn small ghost" data-copy-text="${encodeURIComponent(localUrls)}">复制访问地址</button>` : ''}
      ${inviteUrl ? `<button type="button" class="wood-btn small ghost" data-copy-text="${encodeURIComponent(inviteUrl)}">复制邀请链接</button>` : ''}
      <button type="button" class="wood-btn small lobby-start" data-dual-start="local">开始本机双人</button>
      <button type="button" class="wood-btn small ghost" data-dual-start="host" data-room-code="${escapeHTML(roomCode)}">尝试联机房主</button>
    </div>
    <span class="copy-feedback" id="lobby-copy-feedback" aria-live="polite"></span>
  `;
}

function setDualInputsForRole() {
  const dual = state.dual;
  const p1 = $('#input-1p');
  const p2 = $('#input-2p');
  if (!dual || !p1 || !p2) return;

  const network = dual.mode === 'lan';
  p1.disabled = network && dual.role !== 'p1';
  p2.disabled = network && dual.role !== 'p2';
  p1.placeholder = p1.disabled ? '等待 1P 操作' : '输入左侧单词';
  p2.placeholder = p2.disabled ? '等待 2P 操作' : '输入右侧单词';
  p1.classList.toggle('is-locked', p1.disabled);
  p2.classList.toggle('is-locked', p2.disabled);
}

function renderDualState() {
  const dual = state.dual;
  if (!dual) return;
  const p1 = dual.players.p1;
  const p2 = dual.players.p2;

  $('#word-1p') && ($('#word-1p').textContent = p1.word.en);
  $('#meaning-1p') && ($('#meaning-1p').textContent = p1.word.zh || '');
  $('#input-1p') && ($('#input-1p').value = p1.input || '');
  $('#score-1p') && ($('#score-1p').textContent = p1.score);
  $('#combo-1p') && ($('#combo-1p').textContent = `连击 ×${p1.combo}`);

  $('#word-2p') && ($('#word-2p').textContent = p2.word.en);
  $('#meaning-2p') && ($('#meaning-2p').textContent = p2.word.zh || '');
  $('#input-2p') && ($('#input-2p').value = p2.input || '');
  $('#score-2p') && ($('#score-2p').textContent = p2.score);
  $('#combo-2p') && ($('#combo-2p').textContent = `连击 ×${p2.combo}`);

  const tip = $('#battle-mode-tip');
  if (tip) {
    if (dual.mode === 'lan') {
      tip.textContent = dual.role === 'p1'
        ? `联机房主 · 房间 ${dual.roomCode} · 你控制 1P 春，等待/对战 2P 秋。`
        : `联机加入 · 房间 ${dual.roomCode} · 你控制 2P 秋。`;
    } else {
      tip.textContent = '本机双人：两位玩家分别点击左右输入框，输入自己的目标单词；打对就推动藤蔓。';
    }
  }

  setDualInputsForRole();
}

function startBattle(options = {}) {
  if ($('#lobby')) $('#lobby').hidden = true;
  if ($('#battlefield')) $('#battlefield').hidden = false;
  if ($('#result-dual')) $('#result-dual').hidden = true;

  state.vineOffset = 0;
  state.territorySpring = 50;
  state.dual = createDualState(options);
  state.dual.running = true;
  updateVinePosition();
  updateTerritoryBar();
  renderDualState();
  startCountdown(DUAL_DEFAULT_SECONDS);
  initPetalCanvases();

  const preferred = state.dual.role === 'p2' ? $('#input-2p') : $('#input-1p');
  setTimeout(() => preferred?.focus?.(), 80);
}

function restartDualBattle() {
  const previous = state.dual || {};
  const options = {
    mode: previous.mode || 'local',
    role: previous.role || 'both',
    roomCode: previous.roomCode || createDualRoomCode(),
  };
  if (previous.mode === 'lan' && previous.role === 'p1') {
    const p1Word = pickDualWord();
    const p2Word = pickDualWord(p1Word.en);
    options.words = { p1: p1Word, p2: p2Word };
    sendDualMessage({ type: 'battleStart', roomCode: options.roomCode, words: options.words });
  }
  startBattle(options);
}

function startCountdown(totalSeconds = DUAL_DEFAULT_SECONDS) {
  const dual = state.dual;
  if (dual) dual.seconds = totalSeconds;
  const el = $('#battle-timer');
  if (el) {
    el.textContent = `00:${String(totalSeconds).padStart(2, '0')}`;
    el.style.color = '';
  }
  if (state.countdownInterval) clearInterval(state.countdownInterval);
  state.countdownInterval = setInterval(() => {
    if (!state.dual?.running) return;
    state.dual.seconds -= 1;
    if (el) {
      el.textContent = `00:${String(Math.max(0, state.dual.seconds)).padStart(2, '0')}`;
      el.style.color = state.dual.seconds <= 10 ? '#F0A0A0' : '';
    }
    if (state.dual.seconds <= 0) {
      clearInterval(state.countdownInterval);
      state.countdownInterval = null;
      showBattleResult();
    }
  }, 1000);
}

function moveVine(direction, amount = 3) {
  const vine = $('#vine');
  if (!vine || state.dual?.ended) return;
  state.vineOffset += direction * amount;
  state.vineOffset = Math.max(-DUAL_WIN_EDGE, Math.min(DUAL_WIN_EDGE, state.vineOffset));
  state.territorySpring = 50 + state.vineOffset;
  updateVinePosition();
  updateTerritoryBar();
  if (Math.abs(state.vineOffset) >= DUAL_WIN_EDGE) {
    if (state.countdownInterval) { clearInterval(state.countdownInterval); state.countdownInterval = null; }
    showBattleResult();
  }
}

function updateVinePosition() {
  const vine = $('#vine'); if (vine) vine.style.left = `calc(50% + ${state.vineOffset}%)`;
  const sp = $('#side-spring'); if (sp) sp.style.flex = `${state.territorySpring}%`;
  const au = $('#side-autumn'); if (au) au.style.flex = `${100 - state.territorySpring}%`;
}

function updateTerritoryBar() {
  const bar = $('#territory-bar');
  if (bar) bar.style.background =
    `linear-gradient(90deg, var(--green-soft) ${state.territorySpring}%, var(--orange-warm) ${state.territorySpring}%)`;
}

function applyDualHit(payload = {}, fromNetwork = false) {
  if (!state.dual || state.dual.ended) return;
  const playerId = payload.player === 'p2' ? 'p2' : 'p1';
  const player = state.dual.players[playerId];
  const side = playerId === 'p1' ? $('#side-spring') : $('#side-autumn');
  const input = playerId === 'p1' ? $('#input-1p') : $('#input-2p');
  const currentWord = player.word?.en || '';
  const nextWord = payload.nextWord || pickDualWord(currentWord);
  const earned = Number(payload.points || (10 + Math.min(player.combo, 6) * 2));

  player.score += earned;
  player.hits += 1;
  player.combo += 1;
  player.input = '';
  player.word = nextWord;

  if (input) {
    input.value = '';
    input.classList.remove('mistake');
    input.classList.add('success');
    setTimeout(() => input.classList.remove('success'), 240);
  }
  if (side) {
    side.classList.add('hit-pulse');
    setTimeout(() => side.classList.remove('hit-pulse'), 300);
  }

  moveVine(playerId === 'p1' ? 1 : -1, payload.amount || 3);
  renderDualState();
  gentleHaptic(18);

  if (!fromNetwork && state.dual.mode === 'lan') {
    sendDualMessage({
      type: 'dualHit',
      player: playerId,
      points: earned,
      amount: payload.amount || 3,
      nextWord,
    });
  }
}

function handleDualTyping(playerId, value) {
  const dual = state.dual;
  if (!dual || !dual.running || dual.ended) return;
  if (dual.mode === 'lan' && dual.role !== playerId) return;

  const player = dual.players[playerId];
  const input = playerId === 'p1' ? $('#input-1p') : $('#input-2p');
  const normalized = String(value || '').trim().toLowerCase().replace(/[^a-z-]/g, '');
  if (input && input.value !== normalized) input.value = normalized;
  player.input = normalized;

  const target = player.word.en.toLowerCase();
  if (!target.startsWith(normalized) && normalized.length) {
    player.combo = 0;
    input?.classList.add('mistake');
  } else {
    input?.classList.remove('mistake');
  }

  if (normalized === target) {
    applyDualHit({ player: playerId });
  } else {
    renderDualState();
    if (input) input.value = normalized;
  }
}

function showBattleResult() {
  if (!state.dual) return;
  state.dual.running = false;
  state.dual.ended = true;
  const rp = $('#result-dual');
  const title = $('#result-title-dual');
  const p1 = state.dual.players.p1;
  const p2 = state.dual.players.p2;
  if (rp) rp.hidden = false;
  if (title) {
    if (state.territorySpring >= 58 || p1.score > p2.score) title.textContent = '春 · 胜利!';
    else if (state.territorySpring <= 42 || p2.score > p1.score) title.textContent = '秋 · 胜利!';
    else title.textContent = '平局!';
  }
  $('#result-score-1p') && ($('#result-score-1p').textContent = p1.score);
  $('#result-score-2p') && ($('#result-score-2p').textContent = p2.score);
  $('#result-territory-1p') && ($('#result-territory-1p').textContent = `${Math.round(state.territorySpring)}%`);
  $('#result-territory-2p') && ($('#result-territory-2p').textContent = `${Math.round(100 - state.territorySpring)}%`);
}

function handleDualKeyboard(e) {
  if ($('#battlefield')?.hidden) return;
  if (e.key === 'Escape') {
    if (state.countdownInterval) { clearInterval(state.countdownInterval); state.countdownInterval = null; }
    resetLobby();
    return;
  }
  // 调试/无鼠标兜底：左右方向键仍然可以轻推藤蔓，但正式玩法靠输入单词得分。
  if (e.key === 'ArrowLeft')  moveVine(-1, 1);
  if (e.key === 'ArrowRight') moveVine(1, 1);
}

function getDualSocketUrl(ip = '') {
  let host = normalizeNetworkHost(ip || location.host || location.hostname || '127.0.0.1');
  if (!host) host = normalizeNetworkHost(location.host || location.hostname || '127.0.0.1');
  const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  const currentHost = normalizeNetworkHost(location.host || location.hostname || '');
  const parsed = splitHostAndPort(host);
  if (!parsed.port) {
    if (host === currentHost && location.port) {
      host = `${host}:${location.port}`;
    } else if (host !== currentHost && location.port) {
      host = `${host}:${location.port}`;
    } else if (host !== currentHost && protocol === 'ws') {
      host = `${host}:3000`;
    }
  }
  return `${protocol}://${host}/ws`;
}

function closeDualSocket() {
  if (state.dualSocket) {
    try { state.dualSocket.close(); } catch (err) {}
    state.dualSocket = null;
  }
}

function connectDualSocket({ ip = '', roomCode = createDualRoomCode(), role = 'p1' } = {}) {
  if (!('WebSocket' in window)) return Promise.reject(new Error('WebSocket not supported'));
  closeDualSocket();
  const normalizedRoomCode = normalizeRoomCode(roomCode);
  state.dualInvite = { ip: ip.trim(), roomCode: normalizedRoomCode, role };
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(getDualSocketUrl(ip));
    let opened = false;
    const timeout = setTimeout(() => {
      if (!opened) {
        try { socket.close(); } catch (err) {}
        reject(new Error('连接超时'));
      }
    }, 4500);

    socket.addEventListener('open', () => {
      opened = true;
      clearTimeout(timeout);
      state.dualSocket = socket;
      sendDualMessage({ type: 'joinRoom', roomCode: normalizedRoomCode, role });
      resolve(socket);
    });
    socket.addEventListener('message', (event) => handleDualSocketMessage(event.data));
    socket.addEventListener('error', () => {
      clearTimeout(timeout);
      if (!opened) reject(new Error('无法连接实时服务器'));
    });
    socket.addEventListener('close', () => {
      clearTimeout(timeout);
      if (state.dualSocket === socket) state.dualSocket = null;
    });
  });
}

function sendDualMessage(message) {
  const socket = state.dualSocket;
  if (!socket || socket.readyState !== WebSocket.OPEN) return false;
  socket.send(JSON.stringify({ ...message, at: Date.now() }));
  return true;
}

function handleDualSocketMessage(raw) {
  let msg = null;
  try { msg = JSON.parse(raw); } catch (err) { return; }
  if (!msg || typeof msg !== 'object') return;

  if (msg.type === 'roomJoined') {
    const role = msg.role || 'p1';
    const roomCode = normalizeRoomCode(msg.roomCode || createDualRoomCode());
    state.dualInvite = {
      ip: state.dualInvite?.ip || $('#ip-input')?.value?.trim() || location.hostname || '',
      roomCode,
      role,
    };
    const actionHtml = role === 'p1'
      ? `<div class="lobby-copy-actions"><button type="button" class="wood-btn small lobby-start" data-dual-start="local">开始本机双人</button><button type="button" class="wood-btn small ghost" data-dual-start="host" data-room-code="${escapeHTML(roomCode)}">进入房主画面</button></div>`
      : `<div class="lobby-copy-actions"><button type="button" class="wood-btn small ghost" data-dual-start="local">本机试玩</button></div>`;
    updateLobbyStatus('connected', `已连接实时房间 <strong class="copyable-url">${escapeHTML(roomCode)}</strong>，你的身份是 <strong>${role === 'p1' ? '1P 春' : '2P 秋'}</strong>。${role === 'p1' ? '等待好友加入，或点击进入房主画面。' : '等待房主开始对战。'}${actionHtml}`, '联机已连接');
  }

  if (msg.type === 'peerJoined' && msg.role === 'p2') {
    const p1Word = pickDualWord();
    const p2Word = pickDualWord(p1Word.en);
    const roomCode = msg.roomCode || createDualRoomCode();
    sendDualMessage({ type: 'battleStart', roomCode, words: { p1: p1Word, p2: p2Word } });
    startBattle({ mode: 'lan', role: 'p1', roomCode, words: { p1: p1Word, p2: p2Word } });
  }

  if (msg.type === 'battleStart') {
    startBattle({ mode: 'lan', role: state.dual?.role || msg.role || 'p2', roomCode: msg.roomCode, words: msg.words });
  }

  if (msg.type === 'dualHit') {
    applyDualHit(msg, true);
  }
}

$('#btn-server')?.addEventListener('click', async () => {
  const roomCode = normalizeRoomCode('WORD-WHISPER');
  updateLobbyStatus('waiting', '正在准备双人房间……', '正在创建房间');
  const ips = await getLocalIPs();
  updateLobbyStatus('connected', buildRoomReadyHTML(ips, roomCode), '房间已创建');

  // 如果使用 npm start 运行，会自动连接内置实时服务器；直接打开 HTML 时不影响本机双人玩法。
  connectDualSocket({ roomCode, role: 'p1' }).catch(() => {
    const feedback = $('#lobby-copy-feedback');
    if (feedback) {
      feedback.textContent = '未检测到实时服务器；可以点击“开始本机双人”直接玩。';
      feedback.classList.add('show');
    }
  });
});

$('#btn-client')?.addEventListener('click', () => {
  const ip = $('#ip-input')?.value?.trim();
  const roomCode = normalizeRoomCode(state.dualInvite?.roomCode || 'WORD-WHISPER');
  if (!ip) {
    updateLobbyStatus('connected', `未输入 IP，已切换为本机双人模式。<div class="lobby-copy-actions"><button type="button" class="wood-btn small lobby-start" data-dual-start="local">开始本机双人</button></div>`, '本机双人');
    return;
  }
  updateLobbyStatus('waiting', `正在连接 <strong class="ip-value copyable-text">${escapeHTML(ip)}</strong>。如果连接失败，也可以立即开始本机双人。`, '正在加入房间');
  connectDualSocket({ ip, roomCode, role: 'p2' }).catch(() => {
    updateLobbyStatus('disconnected', `没有连接到 ${escapeHTML(ip)} 的实时服务器。<span class="status-note">你可以确认房主是否已经启动本地服务，或确认云服务器和域名已经部署完成；也可以先开始本机双人试玩。</span><div class="lobby-copy-actions"><button type="button" class="wood-btn small lobby-start" data-dual-start="local">开始本机双人</button></div>`, '联机失败');
  });
});

function hydrateDualInviteEntry() {
  const invite = getDualInviteState();
  if (!invite) return;
  state.dualInvite = invite;
  try {
    history.replaceState(null, '', location.pathname);
  } catch (err) {}
}

document.addEventListener('click', (e) => {
  const copyTarget = e.target.closest('[data-copy-text]');
  if (copyTarget) {
    e.preventDefault();
    const text = decodeURIComponent(copyTarget.dataset.copyText || '');
    const isUrl = /^https?:\/\//.test(text);
    copyLobbyText(text, isUrl ? '访问地址已复制' : 'IP 已复制');
    return;
  }

  const startTarget = e.target.closest('[data-dual-start]');
  if (startTarget) {
    e.preventDefault();
    const mode = startTarget.dataset.dualStart;
    if (mode === 'host') {
      const roomCode = startTarget.dataset.roomCode || createDualRoomCode();
      startBattle({ mode: state.dualSocket ? 'lan' : 'local', role: state.dualSocket ? 'p1' : 'both', roomCode });
    } else {
      startBattle({ mode: 'local', role: 'both' });
    }
  }
});

$$('.dual-type-input').forEach(input => {
  input.addEventListener('input', (e) => handleDualTyping(input.dataset.player, e.target.value));
  input.addEventListener('focus', () => input.closest('.side')?.classList.add('typing-active'));
  input.addEventListener('blur', () => input.closest('.side')?.classList.remove('typing-active'));
});

$('#btn-dual-exit')?.addEventListener('click', () => resetLobby());
/* ================================================================
   LOBBY PARTICLES
   ================================================================ */
function initLobbyParticles() {
  const c = setupCanvas('#lobby-particles');
  if (!c) return;
  const particles = Array.from({ length: 15 }, () => ({
    x: Math.random() * c.w, y: Math.random() * c.h,
    r: Math.random() * 2 + 0.8,
    vy: -(Math.random() * 0.4 + 0.1),
    vx: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.4 + 0.1,
  }));
  (function draw() {
    if (state.currentScene !== 'dual') return;
    c.ctx.clearRect(0, 0, c.w, c.h);
    particles.forEach((p) => {
      p.y += p.vy; p.x += p.vx;
      if (p.y < -20) { p.y = c.h + 10; p.x = Math.random() * c.w; }
      c.ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
      c.ctx.beginPath(); c.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); c.ctx.fill();
    });
    state.animFrameId = requestAnimationFrame(draw);
  })();
}

/* ================================================================
   PETAL CANVASES (Sakura & Maple)
   ================================================================ */
function initPetalCanvases() {
  const spring = setupCanvas('#petal-canvas-spring');
  const autumn = setupCanvas('#petal-canvas-autumn');
  if (!spring || !autumn) return;

  const sakura = Array.from({ length: 20 }, () => ({
    x: Math.random() * spring.w, y: Math.random() * spring.h,
    r: Math.random() * 3 + 2,
    vy: Math.random() * 0.5 + 0.2, vx: (Math.random() - 0.5) * 0.6,
    rot: Math.random() * 360, rotSpeed: (Math.random() - 0.5) * 2,
    alpha: Math.random() * 0.5 + 0.3,
  }));
  const maple = Array.from({ length: 15 }, () => ({
    x: Math.random() * autumn.w, y: Math.random() * autumn.h,
    r: Math.random() * 3 + 2.5,
    vy: Math.random() * 0.4 + 0.15, vx: (Math.random() - 0.5) * 0.7,
    rot: Math.random() * 360, rotSpeed: (Math.random() - 0.5) * 1.5,
    alpha: Math.random() * 0.45 + 0.25,
  }));

  (function draw() {
    if (state.currentScene !== 'dual' || $('#battlefield')?.hidden) return;
    spring.ctx.clearRect(0, 0, spring.w, spring.h);
    sakura.forEach((p) => {
      p.y += p.vy; p.x += p.vx + Math.sin(p.rot * 0.02) * 0.3; p.rot += p.rotSpeed;
      if (p.y > spring.h + 20) { p.y = -20; p.x = Math.random() * spring.w; }
      if (p.x < -20) p.x = spring.w + 20; if (p.x > spring.w + 20) p.x = -20;
      spring.ctx.save(); spring.ctx.translate(p.x, p.y); spring.ctx.rotate(p.rot * Math.PI / 180);
      spring.ctx.fillStyle = `rgba(245,192,208,${p.alpha})`;
      spring.ctx.shadowColor = 'rgba(245,180,200,0.4)'; spring.ctx.shadowBlur = 4;
      spring.ctx.beginPath(); spring.ctx.ellipse(0, 0, p.r, p.r * 0.6, 0, 0, Math.PI * 2); spring.ctx.fill();
      spring.ctx.restore();
    });
    autumn.ctx.clearRect(0, 0, autumn.w, autumn.h);
    maple.forEach((p) => {
      p.y += p.vy; p.x += p.vx + Math.cos(p.rot * 0.03) * 0.35; p.rot += p.rotSpeed;
      if (p.y > autumn.h + 20) { p.y = -20; p.x = Math.random() * autumn.w; }
      if (p.x < -20) p.x = autumn.w + 20; if (p.x > autumn.w + 20) p.x = -20;
      autumn.ctx.save(); autumn.ctx.translate(p.x, p.y); autumn.ctx.rotate(p.rot * Math.PI / 180);
      autumn.ctx.fillStyle = `rgba(232,176,136,${p.alpha})`;
      autumn.ctx.shadowColor = 'rgba(220,150,120,0.35)'; autumn.ctx.shadowBlur = 3;
      autumn.ctx.beginPath(); autumn.ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2); autumn.ctx.fill();
      autumn.ctx.fillStyle = `rgba(210,150,110,${p.alpha * 0.7})`;
      autumn.ctx.beginPath(); autumn.ctx.ellipse(p.r * 0.3, 0, p.r * 0.5, p.r * 0.35, 0.5, 0, Math.PI * 2); autumn.ctx.fill();
      autumn.ctx.restore();
    });
    state.animFrameId = requestAnimationFrame(draw);
  })();
}

/* ================================================================
   UTILITY — Canvas Setup
   ================================================================ */
function setupCanvas(id) {
  const c = $(id);
  if (!c) return null;
  const dpr = window.devicePixelRatio || 1;
  const r = c.parentElement.getBoundingClientRect();
  c.width = r.width * dpr; c.height = r.height * dpr;
  const ctx = c.getContext('2d'); ctx.scale(dpr, dpr);
  return { canvas: c, ctx, w: r.width, h: r.height };
}

/* ================================================================
   RESIZE
   ================================================================ */
window.addEventListener('resize', () => {
  // 不再通过 switchScene(active) 重启场景，避免双人对战时窗口尺寸变化导致游戏被重置。
  if (state.currentScene === 'single' && engine && typeof engine.resize === 'function') {
    engine.resize();
  }
  if (state.currentScene === 'dual') {
    if ($('#battlefield') && !$('#battlefield').hidden) initPetalCanvases();
    else initLobbyParticles();
  }
});



/* ================================================================
   HEALING UI FEEDBACK — 按钮涟漪 + 轻触震动（支持则启用）
   ================================================================ */
function gentleHaptic(ms = 12) {
  if (!state.settings.haptic) return;
  if (navigator && typeof navigator.vibrate === 'function') navigator.vibrate(ms);
}

document.addEventListener('pointerdown', (e) => {
  const target = e.target.closest('button, .chip-btn');
  if (!target) return;
  target.classList.add('is-pressing');
  gentleHaptic(10);

  const rect = target.getBoundingClientRect();
  const burst = document.createElement('span');
  burst.className = 'tap-burst';
  burst.style.left = `${e.clientX - rect.left}px`;
  burst.style.top = `${e.clientY - rect.top}px`;
  target.appendChild(burst);
  setTimeout(() => burst.remove(), 620);
});

document.addEventListener('pointerup', () => {
  document.querySelectorAll('.is-pressing').forEach((el) => el.classList.remove('is-pressing'));
});

document.addEventListener('pointercancel', () => {
  document.querySelectorAll('.is-pressing').forEach((el) => el.classList.remove('is-pressing'));
});



/* ================================================================
   FEATURE PANELS v0.6 — 高级设置 / 成就 / 好友 / 排行
   ================================================================ */
const ACHIEVEMENT_STORAGE_KEY = 'ww-achievement-stats-v2';
const ACHIEVEMENT_DEFS = [
  { id: 'first_game', icon: '🌱', title: '初次发芽', desc: '完成第一局单人练习', metric: 'games', target: 1, rarity: '普通', reward: '+20 星尘' },
  { id: 'stardust_500', icon: '✨', title: '星尘收集者', desc: '累计获得 500 星尘', metric: 'totalScore', target: 500, rarity: '稀有', reward: '金色输入框光效' },
  { id: 'stardust_2000', icon: '🌌', title: '小小星河', desc: '累计获得 2000 星尘', metric: 'totalScore', target: 2000, rarity: '史诗', reward: '星河结算徽章' },
  { id: 'combo_10', icon: '🔥', title: '连击小天才', desc: '任意一局达成 10 连击', metric: 'maxCombo', target: 10, rarity: '稀有', reward: '+1 次星爆特效' },
  { id: 'combo_20', icon: '⚡', title: '指尖闪电', desc: '任意一局达成 20 连击', metric: 'maxCombo', target: 20, rarity: '史诗', reward: '闪电连击称号' },
  { id: 'buff_5', icon: '🫧', title: '闪光猎手', desc: '累计触发 5 个 Buff', metric: 'totalBuffs', target: 5, rarity: '普通', reward: 'Buff 图鉴贴纸' },
  { id: 'mission_10', icon: '🎯', title: '目标规划师', desc: '累计完成 10 个本局目标', metric: 'completedMissions', target: 10, rarity: '稀有', reward: '任务面板花边' },
  { id: 'event_5', icon: '☄', title: '变奏旅行家', desc: '经历 5 次随机事件', metric: 'totalEvents', target: 5, rarity: '稀有', reward: '流星雨背景提示' },
  { id: 'no_miss', icon: '🛡', title: '月夜守护', desc: '收集至少 12 词且没有漏词地结束一局', metric: 'noMissGames', target: 1, rarity: '史诗', reward: '月亮头像框' },
  { id: 'no_mistake', icon: '🎯', title: '精准魔法师', desc: '收集至少 12 词且没有输错地结束一局', metric: 'noMistakeGames', target: 1, rarity: '史诗', reward: '精准光环' },
  { id: 'score_600', icon: '🏆', title: '丰收之夜', desc: '单局星尘达到 600', metric: 'bestScore', target: 600, rarity: '传说', reward: '丰收奖杯' },
  { id: 'wordbank_travel', icon: '📚', title: '词库旅行家', desc: '体验 8 个不同词库分类', metric: 'wordbanks', target: 8, rarity: '普通', reward: '词库贴纸' },
  { id: 'mixed_bank', icon: '🎲', title: '乱序探险家', desc: '使用“综合乱序”词库完成 2 局', metric: 'mixedBankGames', target: 2, rarity: '稀有', reward: '骰子词库徽章' },
  { id: 'speed_ramp_40', icon: '💨', title: '疾风适应者', desc: '单局收集 40 个单词，体验渐进加速', metric: 'bestWords', target: 40, rarity: '稀有', reward: '速度仪表光效' },
  { id: 'speed_ramp_80', icon: '🌌', title: '星河冲刺者', desc: '单局收集 80 个单词', metric: 'bestWords', target: 80, rarity: '传说', reward: '星河速度称号' },
  { id: 'starburst_10', icon: '✨', title: '星爆工匠', desc: '累计使用 10 次星爆', metric: 'totalStarbursts', target: 10, rarity: '稀有', reward: '星爆边框' },
];
const friends = [
  { avatar: '🐰', name: 'Momo', status: '今日已练 12 分钟', online: true, bond: 86 },
  { avatar: '🦊', name: 'Kiki', status: '等待你的邀请', online: true, bond: 64 },
  { avatar: '🐻', name: 'Bobo', status: '上次对战：春季胜利', online: false, bond: 48 },
  { avatar: '🐼', name: 'Nana', status: '刚解锁 CET-6', online: false, bond: 38 },
];
const rankData = {
  score: [ ['你', 1280, '🌟', '+2'], ['Momo', 1160, '🐰', '+1'], ['Kiki', 980, '🦊', '-1'], ['Bobo', 720, '🐻', '0'], ['Nana', 660, '🐼', '+3'] ],
  combo: [ ['Kiki', 18, '🦊', '+1'], ['你', 14, '🌟', '0'], ['Momo', 12, '🐰', '-1'], ['Bobo', 9, '🐻', '+2'], ['Nana', 7, '🐼', '0'] ],
};
let achFilter = 'all';

function createDefaultAchievementStats() {
  return {
    games: 0,
    totalScore: 0,
    totalWords: 0,
    bestWords: 0,
    totalBuffs: 0,
    totalEvents: 0,
    totalFreezes: 0,
    totalStarbursts: 0,
    completedMissions: 0,
    maxCombo: 0,
    bestScore: 0,
    noMissGames: 0,
    noMistakeGames: 0,
    wordbanks: {},
    mixedBankGames: 0,
    unlocked: {},
  };
}

function loadAchievementStats() {
  try {
    const saved = JSON.parse(localStorage.getItem(ACHIEVEMENT_STORAGE_KEY) || 'null');
    return { ...createDefaultAchievementStats(), ...(saved || {}), wordbanks: saved?.wordbanks || {}, unlocked: saved?.unlocked || {} };
  } catch (err) {
    return createDefaultAchievementStats();
  }
}

function saveAchievementStats(stats) {
  localStorage.setItem(ACHIEVEMENT_STORAGE_KEY, JSON.stringify(stats));
}

function getAchievementMetricValue(def, stats) {
  if (def.metric === 'wordbanks') return Object.keys(stats.wordbanks || {}).length;
  return Number(stats[def.metric] || 0);
}

function getAchievements() {
  const stats = loadAchievementStats();
  return ACHIEVEMENT_DEFS.map((def) => {
    const value = getAchievementMetricValue(def, stats);
    const progress = Math.max(0, Math.min(100, Math.round((value / def.target) * 100)));
    const unlocked = Boolean(stats.unlocked?.[def.id]) || progress >= 100;
    return { ...def, value, progress, unlocked };
  });
}

function updateAchievementStats(result = {}, run = {}) {
  const stats = loadAchievementStats();
  stats.games += 1;
  stats.totalScore += Number(result.score || 0);
  stats.totalWords += Number(result.words || 0);
  stats.bestWords = Math.max(stats.bestWords || 0, Number(result.words || 0));
  stats.totalBuffs += Number(run.buffs || 0);
  stats.totalEvents += Number(run.events || 0);
  stats.totalFreezes += Number(run.freezes || 0);
  stats.totalStarbursts += Number(run.starbursts || 0);
  stats.completedMissions += Number(run.completedMissions || 0);
  stats.maxCombo = Math.max(stats.maxCombo || 0, Number(result.maxCombo || 0));
  stats.bestScore = Math.max(stats.bestScore || 0, Number(result.score || 0));
  if ((result.words || 0) >= 12 && Number(result.missed || 0) === 0) stats.noMissGames += 1;
  if ((result.words || 0) >= 12 && Number(result.mistakes || 0) === 0) stats.noMistakeGames += 1;
  if (run.wordbank) stats.wordbanks[run.wordbank] = true;
  if (run.wordbank === '综合乱序') stats.mixedBankGames += 1;

  const unlockedNow = [];
  ACHIEVEMENT_DEFS.forEach((def) => {
    const value = getAchievementMetricValue(def, stats);
    if (!stats.unlocked[def.id] && value >= def.target) {
      stats.unlocked[def.id] = Date.now();
      unlockedNow.push({ ...def, value, progress: 100, unlocked: true });
    }
  });
  saveAchievementStats(stats);
  return unlockedNow;
}


function normalizeSettings(input = {}) {
  const raw = { ...DEFAULT_SETTINGS, ...(input || {}) };
  const clamp = (value, min, max, fallback) => {
    const n = Number(value);
    return Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : fallback;
  };
  const bool = (value, fallback = true) => (typeof value === 'boolean' ? value : fallback);
  return {
    ...raw,
    speed: clamp(raw.speed, 15, 240, DEFAULT_SETTINGS.speed),
    wordDensity: clamp(raw.wordDensity, 1, 6, DEFAULT_SETTINGS.wordDensity),
    buffFrequency: clamp(raw.buffFrequency, 0, 4, DEFAULT_SETTINGS.buffFrequency),
    eventFrequency: clamp(raw.eventFrequency, 0, 4, DEFAULT_SETTINGS.eventFrequency),
    startLives: clamp(raw.startLives, 1, 5, DEFAULT_SETTINGS.startLives),
    maxLives: 5,
    freezeSeconds: clamp(raw.freezeSeconds, 2, 9, DEFAULT_SETTINGS.freezeSeconds),
    freezeCharges: clamp(raw.freezeCharges, 0, 6, DEFAULT_SETTINGS.freezeCharges),
    starburstCharges: clamp(raw.starburstCharges, 0, 5, DEFAULT_SETTINGS.starburstCharges),
    progressiveSpeed: bool(raw.progressiveSpeed, DEFAULT_SETTINGS.progressiveSpeed),
    comboFever: bool(raw.comboFever, DEFAULT_SETTINGS.comboFever),
    milestoneRewards: bool(raw.milestoneRewards, DEFAULT_SETTINGS.milestoneRewards),
    music: bool(raw.music, DEFAULT_SETTINGS.music),
    haptic: bool(raw.haptic, DEFAULT_SETTINGS.haptic),
    calm: bool(raw.calm, DEFAULT_SETTINGS.calm),
    showMeaning: bool(raw.showMeaning, DEFAULT_SETTINGS.showMeaning),
    nextKeyHint: bool(raw.nextKeyHint, DEFAULT_SETTINGS.nextKeyHint),
    dangerLine: bool(raw.dangerLine, DEFAULT_SETTINGS.dangerLine),
    mobileKeyboard: bool(raw.mobileKeyboard, DEFAULT_SETTINGS.mobileKeyboard),
    kitchenOrderDensity: clamp(raw.kitchenOrderDensity, 0, 2, DEFAULT_SETTINGS.kitchenOrderDensity),
    kitchenPatience: clamp(raw.kitchenPatience, 0, 2, DEFAULT_SETTINGS.kitchenPatience),
    kitchenCompactCards: bool(raw.kitchenCompactCards, DEFAULT_SETTINGS.kitchenCompactCards),
    kitchenSceneDecor: bool(raw.kitchenSceneDecor, DEFAULT_SETTINGS.kitchenSceneDecor),
    kitchenAutoQueue: bool(raw.kitchenAutoQueue, DEFAULT_SETTINGS.kitchenAutoQueue),
    kitchenFocusAssist: bool(raw.kitchenFocusAssist, DEFAULT_SETTINGS.kitchenFocusAssist),
    singleMode: raw.singleMode === 'chef' ? 'chef' : 'classic',
    singleBackground: SINGLE_BACKGROUNDS.some((item) => item.key === raw.singleBackground) ? raw.singleBackground : DEFAULT_SETTINGS.singleBackground,
  };
}

function loadSavedSettings() {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem('ww-settings') || 'null'); } catch (err) { saved = null; }
  state.settings = normalizeSettings(saved || state.settings);
  applySettingsToGame();
  return state.settings;
}

function applySettingsToGame() {
  state.settings = normalizeSettings(state.settings);
  window.WW_SETTINGS = { ...state.settings };
  // 兼容旧引擎字段；新版引擎直接读取 WW_SETTINGS。
  window.WW_SPEED_MULTIPLIER = state.settings.speed / 100;
  document.body.classList.toggle('calm-motion', !!state.settings.calm);
  document.body.classList.toggle('ambient-off', !state.settings.music);
  document.body.classList.toggle('mobile-keyboard-off', !state.settings.mobileKeyboard);
  syncSingleBackgroundIndex();
  renderSingleConfig();
  syncSingleModeScene();
  applySingleBackgroundTheme();
  audioManager.sync();
}

function getSettingsLabel(key, value) {
  if (key === 'speed') {
    if (value <= 30) return '极慢认词';
    if (value <= 65) return '慢速舒缓';
    if (value <= 110) return '标准节奏';
    if (value <= 160) return '快速挑战';
    if (value <= 205) return '高速冲刺';
    return '极限疾跑';
  }
  if (key === 'wordDensity') return ['很稀疏', '偏少', '标准', '偏多', '密集', '爆满'][value - 1] || '标准';
  if (key === 'eventFrequency') return ['关闭', '偶尔', '标准', '频繁', '连续变奏'][value] || '标准';
  if (key === 'buffFrequency') return ['关闭', '较少', '标准', '很多', '狂欢'][value] || '标准';
  if (key === 'startLives') return `${value} 颗`;
  if (key === 'freezeSeconds') return `${value} 秒`;
  if (key === 'freezeCharges') return `${value} 次`;
  if (key === 'starburstCharges') return `${value} 次`;
  return String(value);
}

function collectSettingsFromUI() {
  const read = (id, fallback) => Number(document.getElementById(id)?.value ?? fallback);
  state.settings = normalizeSettings({
    ...state.settings,
    speed: read('setting-speed', state.settings.speed),
    wordDensity: read('setting-density', state.settings.wordDensity),
    buffFrequency: read('setting-buff-frequency', state.settings.buffFrequency),
    eventFrequency: read('setting-event-frequency', state.settings.eventFrequency),
    startLives: read('setting-start-lives', state.settings.startLives),
    freezeSeconds: read('setting-freeze-seconds', state.settings.freezeSeconds),
    freezeCharges: read('setting-freeze-charges', state.settings.freezeCharges),
    starburstCharges: read('setting-starburst-charges', state.settings.starburstCharges),
  });
  applySettingsToGame();
}

function renderSettings() {
  loadSavedSettings();
  const bindValue = (id, value) => {
    const input = document.getElementById(id);
    if (input) input.value = value;
  };
  bindValue('setting-speed', state.settings.speed);
  bindValue('setting-density', state.settings.wordDensity);
  bindValue('setting-buff-frequency', state.settings.buffFrequency);
  bindValue('setting-event-frequency', state.settings.eventFrequency);
  bindValue('setting-start-lives', state.settings.startLives);
  bindValue('setting-freeze-seconds', state.settings.freezeSeconds);
  bindValue('setting-freeze-charges', state.settings.freezeCharges);
  bindValue('setting-starburst-charges', state.settings.starburstCharges);

  $$('.toggle-btn').forEach((btn) => {
    const key = btn.dataset.setting;
    btn.classList.toggle('active', !!state.settings[key]);
    btn.textContent = state.settings[key] ? '开启' : '关闭';
  });
  syncSettingsVisuals();
  setDirty(false);
}
function setDirty(isDirty = true) {
  const el = $('#settings-live-status');
  if (!el) return;
  el.textContent = isDirty ? '有修改' : '已同步';
  el.classList.toggle('dirty', isDirty);
}
function syncSpeedVisual() {
  const v = Number($('#setting-speed')?.value || state.settings.speed);
  const value = $('#speed-value');
  const orb = $('#speed-orb');
  if (value) value.textContent = v;
  if (orb) orb.style.setProperty('--speed-fill', `${Math.max(0, Math.min(100, (v - 15) / 225 * 100))}%`);
  $$('.preset-chip').forEach(btn => btn.classList.toggle('active', Number(btn.dataset.speed) === v));
}
function syncSettingsVisuals() {
  syncSpeedVisual();
  const pairs = [
    ['setting-density', 'density-value', 'wordDensity'],
    ['setting-buff-frequency', 'buff-frequency-value', 'buffFrequency'],
    ['setting-event-frequency', 'event-frequency-value', 'eventFrequency'],
    ['setting-start-lives', 'start-lives-value', 'startLives'],
    ['setting-freeze-seconds', 'freeze-seconds-value', 'freezeSeconds'],
    ['setting-freeze-charges', 'freeze-charges-value', 'freezeCharges'],
    ['setting-starburst-charges', 'starburst-charges-value', 'starburstCharges'],
  ];
  pairs.forEach(([inputId, labelId, key]) => {
    const input = document.getElementById(inputId);
    const label = document.getElementById(labelId);
    if (label && input) label.textContent = getSettingsLabel(key, Number(input.value));
  });
  updateSettingsNote();
}
function updateSettingsNote() {
  const note = $('#settings-note');
  if (!note) return;
  const speed = Number($('#setting-speed')?.value || state.settings.speed);
  const density = Number($('#setting-density')?.value || state.settings.wordDensity);
  const buffs = Number($('#setting-buff-frequency')?.value || state.settings.buffFrequency);
  const events = Number($('#setting-event-frequency')?.value || state.settings.eventFrequency);
  note.textContent = `当前：${getSettingsLabel('speed', speed)} · 出词${getSettingsLabel('wordDensity', density)} · Buff ${getSettingsLabel('buffFrequency', buffs)} · 事件${getSettingsLabel('eventFrequency', events)}。保存后下一局立即生效。`;
}
function activatePanelTab(tabName) {
  $$('.side-tab').forEach(t => t.classList.toggle('active', t.dataset.panelTab === tabName));
  $$('.tab-page').forEach(p => p.classList.toggle('active', p.dataset.tabPage === tabName));
  gentleHaptic(12);
}
$$('.side-tab').forEach(tab => tab.addEventListener('click', () => activatePanelTab(tab.dataset.panelTab)));
$$('.setting-range').forEach(input => input.addEventListener('input', () => {
  collectSettingsFromUI();
  syncSettingsVisuals();
  setDirty(true);
}));
$$('.preset-chip').forEach(btn => btn.addEventListener('click', () => {
  const speed = $('#setting-speed');
  if (speed) speed.value = btn.dataset.speed;
  collectSettingsFromUI();
  syncSettingsVisuals();
  setDirty(true);
  showFeatureToast(btn.textContent.trim());
}));
$$('.toggle-btn').forEach((btn) => btn.addEventListener('click', () => {
  const key = btn.dataset.setting;
  state.settings[key] = !state.settings[key];
  applySettingsToGame();
  btn.classList.toggle('active', state.settings[key]);
  btn.textContent = state.settings[key] ? '开启' : '关闭';
  setDirty(true);
  gentleHaptic(16);
}));
$('#btn-save-settings')?.addEventListener('click', () => {
  collectSettingsFromUI();
  localStorage.setItem('ww-settings', JSON.stringify(state.settings));
  setDirty(false);
  showFeatureToast('设置已保存，下一局会按这些参数运行 ✨');
});
$('#btn-reset-settings')?.addEventListener('click', () => {
  state.settings = normalizeSettings(DEFAULT_SETTINGS);
  localStorage.removeItem('ww-settings');
  applySettingsToGame();
  renderSettings();
  showFeatureToast('已恢复默认治愈设置 🌿');
});

function renderAchievements() {
  const grid = $('#achievement-grid');
  if (!grid) return;
  const achievements = getAchievements();
  const items = achievements.filter(a => achFilter === 'all' || (achFilter === 'unlocked' ? a.unlocked : !a.unlocked));
  $('#ach-unlocked-count') && ($('#ach-unlocked-count').textContent = achievements.filter(a => a.unlocked).length + '/' + achievements.length);
  grid.innerHTML = items.map((a, i) => `<article class="achievement-card interactive-card ${a.unlocked ? 'unlocked' : 'locked'}" data-ach-index="${achievements.indexOf(a)}" style="animation-delay:${i * 70}ms"><div class="ach-shine"></div><div class="ach-icon">${a.icon}</div><span class="rarity">${a.rarity}</span><h3>${escapeHTML(a.title)}</h3><p>${escapeHTML(a.desc)}</p><div class="ach-progress"><span style="width:${a.progress}%"></span></div><small>${a.unlocked ? '已解锁 · 点击查看' : `${a.value}/${a.target} · ${a.progress}%`} </small></article>`).join('');
  $$('.achievement-card').forEach(card => card.addEventListener('click', () => openAchievementDrawer(Number(card.dataset.achIndex))));
}
function openAchievementDrawer(index) {
  const a = getAchievements()[index];
  const drawer = $('#achievement-drawer');
  if (!drawer || !a) return;
  drawer.innerHTML = `<button class="drawer-close">×</button><div class="drawer-icon">${a.icon}</div><h3>${escapeHTML(a.title)}</h3><p>${escapeHTML(a.desc)}</p><div class="drawer-progress"><span style="width:${a.progress}%"></span></div><strong>${a.unlocked ? '奖励：' + escapeHTML(a.reward) : `解锁进度：${a.value}/${a.target}`}</strong>`;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  drawer.querySelector('.drawer-close').addEventListener('click', closeAchievementDrawer);
  showFeatureToast(a.unlocked ? `已查看 ${a.title} 奖励` : `${a.title} 还差 ${100 - a.progress}%`);
}
function closeAchievementDrawer() {
  const drawer = $('#achievement-drawer');
  if (!drawer) return;
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
}
$$('.tiny-filter').forEach(btn => btn.addEventListener('click', () => {
  achFilter = btn.dataset.achFilter;
  $$('.tiny-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAchievements();
}));

function renderFriends(keyword = '') {
  const list = $('#friend-list');
  if (!list) return;
  const key = keyword.trim().toLowerCase();
  const rows = friends.filter(f => !key || f.name.toLowerCase().includes(key) || f.status.toLowerCase().includes(key));
  list.innerHTML = rows.map((f, i) => `<article class="friend-card interactive-card" style="animation-delay:${i * 60}ms"><span class="friend-avatar ${f.online ? 'online' : ''}">${f.avatar}</span><div><strong>${f.name}</strong><p>${f.status}</p><div class="bond-bar"><span style="width:${f.bond}%"></span></div></div><button class="mini-action" data-friend="${f.name}">${f.online ? '邀请' : '留言'}</button></article>`).join('') || '<p class="empty-tip">没有找到好友，换个关键词试试 🌱</p>';
  $$('.mini-action').forEach(btn => btn.addEventListener('click', () => showFeatureToast(`${btn.dataset.friend} 的互动卡片已准备好 🐾`)));
}
$('#friend-search')?.addEventListener('input', (e) => renderFriends(e.target.value));

function renderRank(type = 'score') {
  const list = $('#rank-list');
  const podium = $('#rank-podium');
  if (!list) return;
  const unit = type === 'score' ? '星尘' : '连击';
  const data = rankData[type];
  if (podium) podium.innerHTML = data.slice(0, 3).map((r, i) => `<div class="podium-place p${i + 1}"><span>${r[2]}</span><b>#${i + 1}</b><small>${r[0]}</small></div>`).join('');
  list.innerHTML = data.map((r, i) => `<article class="rank-row interactive-card ${r[0] === '你' ? 'me' : ''} ${i === 0 ? 'top-one' : ''}" style="animation-delay:${i * 55}ms"><span class="rank-no">${i + 1}</span><span class="rank-avatar">${r[2]}</span><strong>${r[0]} ${i === 0 ? '<i>👑</i>' : ''}</strong><em>${r[1]} ${unit}</em><small class="rank-delta ${r[3].startsWith('+') ? 'up' : r[3].startsWith('-') ? 'down' : ''}">${r[3]}</small></article>`).join('');
}
$$('.rank-tab').forEach(tab => tab.addEventListener('click', () => {
  $$('.rank-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderRank(tab.dataset.rank);
  showFeatureToast(`已切换到${tab.textContent}`);
}));
$('#btn-invite-friend')?.addEventListener('click', () => showFeatureToast('邀请卡已生成：可接入微信分享接口 🐾'));
$('#btn-copy-room')?.addEventListener('click', () => showFeatureToast('房间码 WW-0525 已复制，轻触反馈已触发'));
function showFeatureToast(text) {
  const activeScene = document.querySelector('.scene.active');
  const toast = activeScene?.querySelector('.feature-toast') || $('#feature-toast') || $('#settings-toast') || $('#toast-single');
  if (!toast) return;
  toast.textContent = text;
  toast.className = 'single-toast feature-toast active';
  gentleHaptic(14);
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('active'), 1500);
}

/* ================================================================
   INIT
   ================================================================ */
(function init() {
  state.dualInvite = getDualInviteState();
  loadSavedSettings();
  setupMobileKeyboard();
  restoreSinglePanelCollapse();
  renderSingleConfig();
  applySingleBackgroundTheme();
  updateMenuFocus();
  audioManager.init();
  switchScene('menu');
  console.log('%c🌿 单词物语 · Word Whisper %cv0.9.9 音频系统/Loading/异步加载已就绪', 'font-size:18px;color:#A8D8B9;', 'color:#8B7355;font-size:13px;');
  console.log('%c玩法: 敲单词→完成本局目标 | 随机事件变奏 | 空格冻结 | Tab/双击空格星爆', 'color:#C49A6C;');
  console.log('%c词库: 23类词库，综合乱序按全词库去重汇总', 'color:#DEB887;');

  // 隐藏 loading 遮罩
  setTimeout(function () {
    var loadingEl = document.getElementById('app-loading');
    if (loadingEl) {
      loadingEl.classList.add('fade-out');
      setTimeout(function () { if (loadingEl.parentNode) loadingEl.parentNode.removeChild(loadingEl); }, 500);
    }
  }, 400);

  // 首次用户交互时解锁音频（浏览器自动播放策略）
  function unlockAudio() {
    if (audioManager.bgm && audioManager.bgm.paused && state.settings.music) {
      audioManager.play();
    }
    document.removeEventListener('click', unlockAudio);
    document.removeEventListener('keydown', unlockAudio);
  }
  document.addEventListener('click', unlockAudio);
  document.addEventListener('keydown', unlockAudio);

  hydrateDualInviteEntry();
})();

renderWordbankButton();
renderSingleConfig();

const FRIEND_RANK_DATA = [
  { name: '你', value: 1280, unit: '星尘', icon: '👑', delta: '+2', meta: '今日最佳表现', highlight: true },
  { name: 'Momo', value: 1160, unit: '星尘', icon: '🐏', delta: '+1', meta: '今日已练 12 分钟' },
  { name: 'Kiki', value: 980, unit: '星尘', icon: '🦯', delta: '-1', meta: '等待你的邀请' },
  { name: 'Bobo', value: 720, unit: '星尘', icon: '🐢', delta: '0', meta: '上次对战获胜' },
  { name: 'Nana', value: 660, unit: '星尘', icon: '🐣', delta: '+3', meta: '刚解锁 CET-6' },
];

function getHistoryRankData() {
  const stats = loadAchievementStats();
  return [
    { name: '单局最高分', value: Number(stats.bestScore || 0), unit: '星尘', icon: '🏆', delta: stats.bestScore >= 600 ? '已达标' : '继续冲刺', meta: '来自你的个人历史' },
    { name: '最高连击', value: Number(stats.maxCombo || 0), unit: '连击', icon: '⚡', delta: stats.maxCombo >= 10 ? '手感在线' : '继续练习', meta: '历史最佳连击记录' },
    { name: '累计收词', value: Number(stats.totalWords || 0), unit: '单词', icon: '📚', delta: `${Number(stats.wordbanks ? Object.keys(stats.wordbanks).length : 0)} 词库`, meta: '已累计掌握的单词数量' },
    { name: '完成局数', value: Number(stats.games || 0), unit: '局', icon: '🎮', delta: `${Number(stats.completedMissions || 0)} 目标`, meta: '包含已完成的单人对局' },
    { name: '完美局数', value: Number(stats.noMistakeGames || 0), unit: '局', icon: '🌟', delta: `${Number(stats.noMissGames || 0)} 无漏词`, meta: '无失误与无漏词的稳定发挥' },
  ];
}

function getRankSceneElements() {
  const root = document.getElementById('scene-rank');
  if (!root) return {};
  const sidebarTitle = root.querySelector('.feature-sidebar h2');
  const sidebarDesc = root.querySelector('.feature-sidebar p');
  const panelPill = root.querySelector('.panel-topline .panel-pill');
  const panelStatus = root.querySelector('.panel-topline .panel-status');
  const panelSubtitle = root.querySelector('.panel-subtitle');
  return { root, sidebarTitle, sidebarDesc, panelPill, panelStatus, panelSubtitle };
}

function configureRankSceneUI() {
  const rankTabs = Array.from(document.querySelectorAll('#scene-rank .rank-tab'));
  if (rankTabs[0]) {
    rankTabs[0].dataset.rank = 'friends';
    rankTabs[0].textContent = '好友榜';
  }
  if (rankTabs[1]) {
    rankTabs[1].dataset.rank = 'history';
    rankTabs[1].textContent = '个人历史榜';
  }

  const { sidebarTitle, sidebarDesc, panelPill, panelStatus, panelSubtitle } = getRankSceneElements();
  if (sidebarTitle) sidebarTitle.textContent = '双榜单';
  if (sidebarDesc) sidebarDesc.textContent = '这里分成好友榜和个人历史榜，既能看你和好友的当日表现，也能回顾自己的长期成长。';
  if (panelPill) panelPill.textContent = '双榜排行';
  if (panelStatus) panelStatus.textContent = '自动刷新';
  if (panelSubtitle) panelSubtitle.textContent = '好友榜展示当前社交对比，个人历史榜汇总你的本地成长记录。';
}

function getRankRows(type = 'friends') {
  if (type === 'history') return getHistoryRankData();
  return FRIEND_RANK_DATA;
}

function getActiveRankType() {
  return document.querySelector('#scene-rank .rank-tab.active')?.dataset.rank || 'friends';
}

function renderRank(type = getActiveRankType()) {
  configureRankSceneUI();
  const list = $('#rank-list');
  const podium = $('#rank-podium');
  if (!list) return;

  const data = getRankRows(type);
  if (podium) {
    podium.innerHTML = data.slice(0, 3).map((item, index) => `
      <div class="podium-place p${index + 1} ${type === 'history' ? 'history-place' : ''}">
        <span>${item.icon}</span>
        <b>#${index + 1}</b>
        <strong>${escapeHTML(item.name)}</strong>
        <small>${item.value} ${escapeHTML(item.unit)}</small>
      </div>
    `).join('');
  }

  list.innerHTML = data.map((item, index) => {
    const delta = String(item.delta || '');
    const deltaClass = delta.startsWith('+') ? 'up' : delta.startsWith('-') ? 'down' : '';
    return `
      <article class="rank-row interactive-card ${item.highlight ? 'me' : ''} ${index === 0 ? 'top-one' : ''} ${type === 'history' ? 'history-row' : ''}" style="animation-delay:${index * 55}ms">
        <span class="rank-no">${index + 1}</span>
        <span class="rank-avatar">${item.icon}</span>
        <div class="rank-copy">
          <strong>${escapeHTML(item.name)} ${index === 0 ? '<i>👑</i>' : ''}</strong>
          <small class="rank-meta">${escapeHTML(item.meta || '')}</small>
        </div>
        <em>${item.value} ${escapeHTML(item.unit)}</em>
        <small class="rank-delta ${deltaClass}">${escapeHTML(delta)}</small>
      </article>
    `;
  }).join('');
}

audioManager.sync = function syncBgmForAllScenes() {
  if (!this.bgm) return;
  const shouldPlay = Boolean(state.settings.music && document.querySelector('.scene.active'));
  if (shouldPlay && this.bgm.paused) {
    this.play();
  } else if (!shouldPlay && !this.bgm.paused) {
    this.pause();
  }
};
audioManager.sync();
configureRankSceneUI();

function openRequestedSceneFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const scene = params.get('scene');
    if (!scene || !scenes[scene] || scene === state.currentScene) return;
    window.switchScene(scene);
  } catch (error) {
    // Ignore malformed URLs and keep the default menu scene.
  }
}

audioManager.ensureUnlocked = async function ensureUnlocked() {
  if (!this.bgm || !state.settings.music) return false;
  try {
    this.bgm.muted = false;
    this.bgm.volume = 0.28;
    this.bgm.loop = true;
    if (typeof this.bgm.load === 'function' && this.bgm.networkState === 0) {
      this.bgm.load();
    }
    const directAttempt = this.bgm.play();
    if (directAttempt && directAttempt.catch) await directAttempt;
    return !this.bgm.paused;
  } catch (error) {
    try {
      this.bgm.muted = true;
      const warmupAttempt = this.bgm.play();
      if (warmupAttempt && warmupAttempt.catch) await warmupAttempt.catch(() => {});
      this.bgm.muted = false;
      this.bgm.volume = 0.28;
      const retryAttempt = this.bgm.play();
      if (retryAttempt && retryAttempt.catch) await retryAttempt.catch(() => {});
      return !this.bgm.paused;
    } catch (retryError) {
      this.bgm.muted = false;
      return false;
    }
  }
};

audioManager.toggleFromUi = async function toggleFromUi() {
  state.settings.music = !state.settings.music;
  try { localStorage.setItem('ww-settings', JSON.stringify(state.settings)); } catch (err) {}
  if (state.settings.music) {
    await this.ensureUnlocked();
    this.sync();
  } else if (this.bgm) {
    this.pause();
    this.bgm.currentTime = 0;
  }
  refreshMusicControl();
};

function createMusicControl() {
  if (document.getElementById('music-control')) return;
  const button = document.createElement('button');
  button.id = 'music-control';
  button.type = 'button';
  button.className = 'music-control';
  button.addEventListener('click', async () => {
    await audioManager.toggleFromUi();
  });
  document.body.appendChild(button);
}

function refreshMusicControl() {
  const button = document.getElementById('music-control');
  if (!button) return;
  const isEnabled = !!state.settings.music;
  const isPlaying = !!(audioManager.bgm && !audioManager.bgm.paused);
  button.classList.toggle('is-off', !isEnabled);
  button.classList.toggle('is-playing', isEnabled && isPlaying);
  if (!isEnabled) {
    button.textContent = '音乐已关';
  } else if (isPlaying) {
    button.textContent = '音乐播放中';
  } else {
    button.textContent = '点击开启音乐';
  }
}

function installMusicRecovery() {
  createMusicControl();
  refreshMusicControl();

  const reviveAudio = async () => {
    if (!state.settings.music) {
      refreshMusicControl();
      return;
    }
    await audioManager.ensureUnlocked();
    refreshMusicControl();
  };

  ['pointerdown', 'click', 'touchstart', 'keydown'].forEach((eventName) => {
    window.addEventListener(eventName, reviveAudio, { passive: true });
  });

  if (audioManager.bgm) {
    ['play', 'pause', 'ended'].forEach((eventName) => {
      audioManager.bgm.addEventListener(eventName, refreshMusicControl);
    });
  }
}

installMusicRecovery();
openRequestedSceneFromUrl();

document.addEventListener('visibilitychange', () => {
  if (!document.hidden && state.settings.music) {
    audioManager.sync();
    audioManager.ensureUnlocked().then(refreshMusicControl);
  }
});

const originalApplySettingsToGame = applySettingsToGame;
applySettingsToGame = function patchedApplySettingsToGame() {
  originalApplySettingsToGame();
  refreshMusicControl();
};

const _originalSwitchSceneForBgm = window.switchScene;
window.switchScene = function patchedSwitchScene(name) {
  _originalSwitchSceneForBgm(name);
  if (state.settings.music) {
    audioManager.sync();
    audioManager.ensureUnlocked().then(refreshMusicControl);
  } else {
    refreshMusicControl();
  }
};

if (audioManager.bgm) {
  this.bgm.muted = false;
}
