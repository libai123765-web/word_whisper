/* ============================================================
   单词物语 · Word Whisper — 游戏引擎 v0.3
   优化: 扩展词库·渐进加速·玩法事件·真实成就
   ============================================================ */

class GameEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this._resize();

    // 游戏状态
    this.state = 'idle'; // idle | playing | paused | over
    this.wordBank = 'CET-4';
    this.words = [];           // 活跃的下落词
    this.particles = [];       // 收集/遗失特效粒子
    this.currentInput = '';
    this.score = 0;            // 星尘得分
    this.wordsCollected = 0;   // 实际收集单词数
    this.lives = 3;
    this.maxLives = 5;
    this.combo = 0;
    this.maxCombo = 0;
    this.totalTyped = 0;       // 完成/遗漏/错误事件数
    this.totalCorrect = 0;
    this.totalKeystrokes = 0;
    this.mistakes = 0;
    this.missed = 0;

    // 特殊技能
    this.maxPause = 3;
    this.pauseDurationMs = 5000;
    this.pauseRemaining = this.maxPause;
    this.pauseStartedAt = 0;
    this.pauseEndsAt = 0;
    this.clearRemaining = 1;
    this.lastSpaceTime = 0;
    this.spacePressedOnce = false;

    // 单人增益 Buff：尽量做成玩家能明显感知的“强反馈”效果
    this.buffTypes = [
      { key: 'dreamcatcher', name: '捕梦网', icon: '🕸', color: '#BDF7FF', effect: '立刻捕获最危险的2个普通词', instant: true, weight: 2 },
      { key: 'burst', name: '星爆花', icon: '✹', color: '#FFE480', effect: '立刻清屏并获得星尘', instant: true, weight: 1 },
      { key: 'timebubble', name: '时间泡泡', icon: '🫧', color: '#AEEAFF', effect: '6秒内所有单词几乎停止下落', durationMs: 6500, weight: 2 },
      { key: 'gravity', name: '重力井', icon: '◎', color: '#B9A7FF', effect: '10秒内单词强力聚到中央并减速', durationMs: 10000, weight: 2 },
      { key: 'magnify', name: '放大灯', icon: '🔎', color: '#FFD38A', effect: '12秒内词卡变大，显示中文和下一键', durationMs: 12000, weight: 2 },
      { key: 'shield', name: '月光罩', icon: '◐', color: '#D9CCFF', effect: '获得2层可见护盾，漏词不掉生命', instant: true, weight: 1 },
      { key: 'bloom', name: '生命花', icon: '✿', color: '#F7B7D2', effect: '立即恢复2点生命', instant: true, weight: 1 },
      { key: 'chain', name: '连锁闪电', icon: '⚡', color: '#C8F7C5', effect: '10秒内打中一个词会自动带走另一个', durationMs: 10000, weight: 2 },
      { key: 'stardust', name: '星尘礼盒', icon: '🎁', color: '#FFE480', effect: '立即获得80星尘', instant: true, weight: 1 },
      { key: 'refill', name: '补给背包', icon: '🎒', color: '#AEE8FF', effect: '冻结和消除各补充1次', instant: true, weight: 1 },
      { key: 'feather', name: '羽毛伞', icon: '🪶', color: '#D7F7B7', effect: '9秒内全场下落速度降低', durationMs: 9000, weight: 2 },
      { key: 'guide', name: '引路萤火', icon: '💡', color: '#FFF0A8', effect: '12秒内所有单词显示下一键提示', durationMs: 12000, weight: 2 },
      { key: 'starhalo', name: '星环加成', icon: '🌟', color: '#FFC6E1', effect: '10秒内星尘收益提升35%', durationMs: 10000, weight: 2 },
      { key: 'siphon', name: '藤蔓牵引', icon: '🌿', color: '#A8E6A3', effect: '立刻带走最危险的3个普通词', instant: true, weight: 1 },
    ];
    this.activeBuffs = {};
    this.shields = 0;
    this.focusGuards = 0;
    this.buffSparkTimer = 0;

    // 局内玩法事件：让单人模式每隔一段时间出现不同节奏。
    this.eventTypes = [
      { key: 'comet', name: '流星雨', icon: '☄', color: '#FFE480', durationMs: 12000, desc: '流星词出现，打中会给额外星尘' },
      { key: 'fog', name: '晨雾慢行', icon: '🌫', color: '#BDF7FF', durationMs: 9500, desc: '全场变慢，适合稳住连击' },
      { key: 'meadow', name: '花田补给', icon: '🌼', color: '#F7B7D2', durationMs: 12500, desc: '连续收词会长出护盾或生命' },
      { key: 'echo', name: '回声词链', icon: '🔤', color: '#C8F7C5', durationMs: 11000, desc: '显示更强提示，输错不会断连击' },
      { key: 'rush', name: '星河疾跑', icon: '🚀', color: '#FFB36A', durationMs: 9000, desc: '单词明显加速，但打中会获得额外星尘' },
      { key: 'library', name: '记忆书页', icon: '📖', color: '#D9CCFF', durationMs: 11000, desc: '词义与下一键提示更明显，长词奖励提高' },
      { key: 'tide', name: '潮汐摆动', icon: '🌊', color: '#9ADCFB', durationMs: 10500, desc: '词卡左右漂移，危险区域打中有潮汐奖励' },
      { key: 'aurora', name: '极光护航', icon: '🌌', color: '#AEE8FF', durationMs: 11500, desc: '每收集4词获得一次输错保护' },
      { key: 'treasure', name: '宝箱词潮', icon: '🎁', color: '#FFE480', durationMs: 10000, desc: '奖励词出现，连续命中会补给技能' },
    ];
    this.activeEvent = null;
    this.nextEventAt = 10;
    this.lastEventKey = '';

    this.defaultSettings = {
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
      showMeaning: true,
      nextKeyHint: true,
      dangerLine: true,
      calm: false,
    };
    this.settings = { ...this.defaultSettings };

    // 难度
    this.difficulty = 1;
    this.speedRampMultiplier = 1;
    this.lastMilestoneReward = 0;
    this.paceTier = { name: '微光起步', icon: '🌱', color: '#AEE8C8' };
    this.levelNames = ['萤火初醒', '流星小径', '月光花园', '星河疾跑', '晨曦大师'];
    this.spawnTimer = 0;
    this.spawnInterval = 168; // frames · 更舒缓的刷词节奏
    this.fallSpeed = 0.30;    // px/frame · 单词下落更慢更舒服
    this.maxActiveWords = 2;
    this.recentWords = [];

    // 回调
    this.onScoreChange = null;
    this.onLivesChange = null;
    this.onComboChange = null;
    this.onInputChange = null;
    this.onGameOver = null;
    this.onCollect = null;
    this.onWrongInput = null;
    this.onLevelChange = null;
    this.onSkillChange = null;
    this.onBuffChange = null;
    this.onBuffActivate = null;
    this.onMiss = null;
    this.onRunEvent = null;
    this.onSkillUse = null;
  }

  _now() {
    return (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
  }

  _clamp(value, min, max) {
    return Math.max(min, Math.min(max, Number(value)));
  }

  _syncSettings() {
    const source = (typeof window !== 'undefined' && window.WW_SETTINGS) ? window.WW_SETTINGS : {};
    this.settings = { ...this.defaultSettings, ...source };
    this.settings.speed = this._clamp(this.settings.speed ?? 85, 15, 240);
    this.settings.wordDensity = this._clamp(this.settings.wordDensity ?? 2, 1, 6);
    this.settings.buffFrequency = this._clamp(this.settings.buffFrequency ?? 2, 0, 4);
    this.settings.eventFrequency = this._clamp(this.settings.eventFrequency ?? 2, 0, 4);
    this.settings.progressiveSpeed = this.settings.progressiveSpeed !== false;
    this.settings.comboFever = this.settings.comboFever !== false;
    this.settings.milestoneRewards = this.settings.milestoneRewards !== false;
    this.settings.maxLives = this._clamp(this.settings.maxLives ?? 5, 1, 8);
    this.settings.startLives = this._clamp(this.settings.startLives ?? 3, 1, this.settings.maxLives);
    this.settings.freezeSeconds = this._clamp(this.settings.freezeSeconds ?? 5, 2, 9);
    this.settings.freezeCharges = this._clamp(this.settings.freezeCharges ?? 3, 0, 6);
    this.settings.starburstCharges = this._clamp(this.settings.starburstCharges ?? 1, 0, 5);
    this.maxLives = this.settings.maxLives;
    this.maxPause = this.settings.freezeCharges;
    this.pauseDurationMs = this.settings.freezeSeconds * 1000;
  }

  getPauseMsRemaining(now = this._now()) {
    if (this.state !== 'paused') return 0;
    return Math.max(0, this.pauseEndsAt - now);
  }

  getPauseSecondsRemaining(now = this._now()) {
    return Math.max(0, Math.ceil(this.getPauseMsRemaining(now) / 1000));
  }

  _pruneBuffs(now = this._now()) {
    let changed = false;
    Object.keys(this.activeBuffs).forEach((key) => {
      const buff = this.activeBuffs[key];
      if (buff.expiresAt && buff.expiresAt <= now) {
        delete this.activeBuffs[key];
        changed = true;
      }
    });
    return changed;
  }

  _hasBuff(key, now = this._now()) {
    this._pruneBuffs(now);
    return Boolean(this.activeBuffs[key]);
  }

  _scoreMultiplier(now = this._now()) {
    let multiplier = 1;
    if (this._hasBuff('fever', now)) multiplier *= 1.5;
    if (this._hasBuff('starhalo', now)) multiplier *= 1.35;
    if (this._hasEvent('rush', now)) multiplier *= 1.18;
    return multiplier;
  }

  _activeSlowMultiplier(now = this._now()) {
    if (this._hasBuff('timebubble', now)) return 0.06;
    if (this._hasBuff('feather', now)) return 0.42;
    if (this._hasBuff('gravity', now)) return 0.58;
    return 1;
  }

  _getBuffDef(key) {
    return this.buffTypes.find((buff) => buff.key === key) || null;
  }

  _randomBuff() {
    const now = this._now();
    const weighted = this.buffTypes.flatMap((buff) => {
      if (buff.key === 'shield' && this.shields >= 4) return [];
      if (buff.key === 'bloom' && this.lives >= this.maxLives) return [];
      if (this.activeBuffs[buff.key]?.expiresAt && this.activeBuffs[buff.key].expiresAt > now && !buff.instant) return [];
      return Array.from({ length: buff.weight || 1 }, () => buff);
    });
    const pool = weighted.length ? weighted : this.buffTypes;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  _getBuffSpawnChance() {
    const freq = Math.round(this.settings?.buffFrequency ?? 2);
    if (freq <= 0) return 0;
    const baseMap = [0, 0.08, 0.16, 0.25, 0.38];
    const base = baseMap[freq] ?? 0.16;
    const comboBoost = Math.min(0.12, Math.floor(this.combo / 6) * 0.025);
    const lowLifeBoost = this.lives <= 1 ? 0.12 : this.lives === 2 ? 0.05 : 0;
    return Math.min(0.55, base + comboBoost + lowLifeBoost);
  }

  getActiveBuffs(now = this._now()) {
    this._pruneBuffs(now);
    const timed = Object.values(this.activeBuffs).map((buff) => ({
      key: buff.key,
      name: buff.name,
      icon: buff.icon,
      color: buff.color,
      effect: buff.effect,
      remainingMs: buff.expiresAt ? Math.max(0, buff.expiresAt - now) : 0,
      durationMs: buff.durationMs || 0,
      charges: buff.charges || 0,
    }));
    if (this.shields > 0) {
      const def = this._getBuffDef('shield');
      timed.push({ ...def, remainingMs: 0, durationMs: 0, charges: this.shields, effect: `护盾×${this.shields}` });
    }
    if (this.focusGuards > 0) {
      timed.push({ key: 'focusguard', name: '极光护符', icon: '🌌', color: '#AEE8FF', remainingMs: 0, durationMs: 0, charges: this.focusGuards, effect: `输错保护×${this.focusGuards}` });
    }
    return timed;
  }


  _getEventDef(key) {
    return this.eventTypes.find((event) => event.key === key) || null;
  }

  _hasEvent(key, now = this._now()) {
    const event = this.getActiveEvent(now);
    return Boolean(event && event.key === key);
  }

  getActiveEvent(now = this._now()) {
    if (!this.activeEvent) return null;
    if (this.activeEvent.expiresAt && this.activeEvent.expiresAt <= now) return null;
    return {
      ...this.activeEvent,
      remainingMs: Math.max(0, this.activeEvent.expiresAt - now),
      progress: this.activeEvent.progress || 0,
    };
  }

  _scheduleNextEvent() {
    const freq = Math.round(this.settings?.eventFrequency ?? 2);
    if (freq <= 0) {
      this.nextEventAt = Number.POSITIVE_INFINITY;
      return;
    }
    const baseGap = [999, 18, 13, 9, 6][freq] || 13;
    const jitter = Math.floor(Math.random() * Math.max(2, Math.round(baseGap * 0.45)));
    this.nextEventAt = this.wordsCollected + baseGap + jitter;
  }

  _pickRunEvent() {
    const pool = this.eventTypes.filter((event) => event.key !== this.lastEventKey);
    const source = pool.length ? pool : this.eventTypes;
    return source[Math.floor(Math.random() * source.length)];
  }

  _startRunEvent(event = null) {
    if (this.activeEvent || this.wordsCollected < 5) return;
    const def = event || this._pickRunEvent();
    if (!def) return;
    const now = this._now();
    this.activeEvent = { ...def, startedAt: now, expiresAt: now + def.durationMs, progress: 0 };
    this.lastEventKey = def.key;
    this._spawnBuffParticles(this.w / 2, this.h * 0.24, def);
    if (this.onRunEvent) this.onRunEvent(this.getActiveEvent(), 'start');
  }

  _updateRunEvent(now = this._now()) {
    if (!this.activeEvent) return false;
    if (this.activeEvent.expiresAt && this.activeEvent.expiresAt <= now) {
      const ended = { ...this.activeEvent, remainingMs: 0 };
      this.activeEvent = null;
      this._scheduleNextEvent();
      if (this.onRunEvent) this.onRunEvent(ended, 'end');
      return true;
    }
    return false;
  }

  _maybeStartRunEvent() {
    if ((this.settings?.eventFrequency ?? 2) <= 0) return;
    if (this.activeEvent || this.wordsCollected < this.nextEventAt) return;
    this._startRunEvent();
  }

  _eventFallMultiplier(now = this._now()) {
    const event = this.getActiveEvent(now);
    if (!event) return 1;
    if (event.key === 'fog') return 0.52;
    if (event.key === 'meadow') return 0.84;
    if (event.key === 'comet') return 1.08;
    if (event.key === 'rush') return 1.32;
    if (event.key === 'tide') return 1.04;
    if (event.key === 'aurora') return 0.92;
    if (event.key === 'treasure') return 1.05;
    return 1;
  }

  _applyEventCollectBonus(wordEntity, isBuff) {
    const event = this.getActiveEvent();
    if (!event || isBuff) return;

    if (event.key === 'meadow') {
      this.activeEvent.progress = (this.activeEvent.progress || 0) + 1;
      if (this.activeEvent.progress % 3 === 0) {
        if (this.lives < this.maxLives && Math.random() < 0.45) {
          this.lives++;
        } else {
          this.shields = Math.min(4, this.shields + 1);
        }
        this._spawnBuffParticles(wordEntity.x, wordEntity.y - 18, event);
      }
    }

    if (event.key === 'echo' && this.combo > 0 && this.combo % 7 === 0) {
      this.score += 12;
      this._spawnBuffParticles(wordEntity.x, wordEntity.y - 18, event);
    }

    if (event.key === 'rush') {
      this.score += 8 + Math.floor(this.speedRampMultiplier * 4);
      if (this.combo % 5 === 0) this._spawnBuffParticles(wordEntity.x, wordEntity.y - 18, event);
    }

    if (event.key === 'library') {
      this.score += (wordEntity.word.en.length >= 8 ? 12 : 5);
      if (wordEntity.word.en.length >= 8) this._spawnBuffParticles(wordEntity.x, wordEntity.y - 18, event);
    }

    if (event.key === 'tide' && wordEntity.y > this.groundY - 110) {
      this.score += 14;
      this._spawnBuffParticles(wordEntity.x, wordEntity.y - 18, event);
    }

    if (event.key === 'aurora') {
      this.activeEvent.progress = (this.activeEvent.progress || 0) + 1;
      if (this.activeEvent.progress % 4 === 0) {
        this.focusGuards = Math.min(3, this.focusGuards + 1);
        this._spawnBuffParticles(wordEntity.x, wordEntity.y - 18, event);
        if (this.onBuffChange) this.onBuffChange(this.getActiveBuffs());
      }
    }

    if (event.key === 'treasure') {
      this.activeEvent.progress = (this.activeEvent.progress || 0) + 1;
      this.score += 16;
      if (this.activeEvent.progress % 3 === 0) {
        const pick = this.activeEvent.progress % 6 === 0 ? 'starburst' : (this.activeEvent.progress % 2 === 0 ? 'freeze' : 'shield');
        if (pick === 'starburst') this.clearRemaining = Math.min(7, this.clearRemaining + 1);
        if (pick === 'freeze') this.pauseRemaining = Math.min(9, this.pauseRemaining + 1);
        if (pick === 'shield') this.shields = Math.min(5, this.shields + 1);
        this._spawnBuffParticles(wordEntity.x, wordEntity.y - 18, event);
        if (this.onBuffChange) this.onBuffChange(this.getActiveBuffs());
      }
    }
  }

  _applyBuff(buff) {
    if (!buff) return;
    const now = this._now();
    let instantNoticeMs = 2600;

    if (buff.key === 'dreamcatcher') {
      this._captureLowestWords(2, buff, { points: 10, combo: false });
    } else if (buff.key === 'burst') {
      const captured = this._captureLowestWords(99, buff, { points: 7, combo: false });
      if (captured === 0) this.score += 12;
    } else if (buff.key === 'bloom') {
      const before = this.lives;
      this.lives = Math.min(this.maxLives, this.lives + 2);
      if (this.lives === before) this.score += 25;
    } else if (buff.key === 'shield') {
      this.shields = Math.min(4, this.shields + 2);
    } else if (buff.key === 'stardust') {
      this.score += 80;
    } else if (buff.key === 'refill') {
      this.pauseRemaining = Math.min(9, this.pauseRemaining + 1);
      this.clearRemaining = Math.min(7, this.clearRemaining + 1);
    } else if (buff.key === 'siphon') {
      const captured = this._captureLowestWords(3, buff, { points: 9, combo: false });
      if (captured === 0) this.score += 18;
    }

    if (!buff.instant) {
      const current = this.activeBuffs[buff.key];
      const startAt = current?.expiresAt && current.expiresAt > now ? current.expiresAt : now;
      this.activeBuffs[buff.key] = { ...buff, expiresAt: startAt + buff.durationMs };
    } else {
      this.activeBuffs[buff.key] = { ...buff, expiresAt: now + instantNoticeMs, durationMs: instantNoticeMs };
    }

    this._spawnBuffParticles(this.w / 2, this.h * 0.36, buff);
    if (this.onBuffActivate) this.onBuffActivate(buff, this.getActiveBuffs());
    if (this.onBuffChange) this.onBuffChange(this.getActiveBuffs());
  }

  resize() {
    this._resize();
    this._render();
  }

  /* ---------- 画布尺寸 ---------- */
  _resize() {
    if (!this.canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const r = this.canvas.parentElement.getBoundingClientRect();
    this.w = r.width;
    this.h = r.height;
    this.canvas.width = r.width * dpr;
    this.canvas.height = r.height * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.groundY = this.h * 0.76; // 地面线
  }

  /* ---------- 词库 ---------- */
  loadWordBank(name) {
    this.wordBank = name;
    return (WORD_BANKS[name] || WORD_BANKS['CET-4']).length;
  }

  _randomWord() {
    const pool = WORD_BANKS[this.wordBank] || WORD_BANKS['CET-4'];
    const active = new Set(this.words.map((w) => w.word.en));
    const candidates = pool.filter((entry) => !active.has(entry.en) && !this.recentWords.includes(entry.en));
    const source = candidates.length ? candidates : pool.filter((entry) => !active.has(entry.en));
    return (source.length ? source : pool)[Math.floor(Math.random() * (source.length ? source.length : pool.length))];
  }


  _getPaceTier(multiplier = this.speedRampMultiplier) {
    const tiers = [
      { threshold: 1.95, name: '星河冲刺', icon: '🌌', color: '#FFB36A' },
      { threshold: 1.65, name: '疾风追词', icon: '💨', color: '#FFE480' },
      { threshold: 1.38, name: '流星小跑', icon: '☄', color: '#BDF7FF' },
      { threshold: 1.16, name: '微风加速', icon: '🍃', color: '#C8F7C5' },
      { threshold: 0, name: '微光起步', icon: '🌱', color: '#AEE8C8' },
    ];
    return tiers.find((tier) => multiplier >= tier.threshold) || tiers[tiers.length - 1];
  }

  _maybeTriggerComboFever() {
    if (this.settings?.comboFever === false) return;
    if (this.combo < 10 || this.combo % 10 !== 0) return;
    this._applyBuff({
      key: 'fever',
      name: '连击热浪',
      icon: '🔥',
      color: '#FFB36A',
      effect: '6秒内星尘×1.5，词卡出现热浪光效',
      durationMs: 6500,
      source: 'combo',
    });
  }

  _maybeGrantMilestoneReward() {
    if (this.settings?.milestoneRewards === false) return;
    const milestone = Math.floor(this.wordsCollected / 20);
    if (milestone <= 0 || milestone <= this.lastMilestoneReward) return;
    this.lastMilestoneReward = milestone;
    const rewards = [
      { icon: '🛡', name: '里程碑护盾', color: '#D9CCFF', effect: '+1 护盾', apply: () => { this.shields = Math.min(5, this.shields + 1); } },
      { icon: '❄', name: '里程碑冻结', color: '#BDF7FF', effect: '+1 冻结', apply: () => { this.pauseRemaining = Math.min(9, this.pauseRemaining + 1); } },
      { icon: '✨', name: '里程碑星爆', color: '#FFE480', effect: '+1 星爆', apply: () => { this.clearRemaining = Math.min(7, this.clearRemaining + 1); } },
      { icon: '🌟', name: '里程碑星尘', color: '#F7B7D2', effect: '+80 星尘', apply: () => { this.score += 80; } },
    ];
    const reward = rewards[(milestone - 1) % rewards.length];
    reward.apply();
    const notice = { key: `milestone-${milestone}`, durationMs: 2800, ...reward };
    this.activeBuffs.milestone = { ...notice, expiresAt: this._now() + notice.durationMs };
    this._spawnBuffParticles(this.w / 2, this.h * 0.34, notice);
    if (this.onBuffActivate) this.onBuffActivate(notice, this.getActiveBuffs());
    if (this.onBuffChange) this.onBuffChange(this.getActiveBuffs());
  }

  /* ---------- 难度曲线 ---------- */
  _updateDifficulty() {
    const collected = this.wordsCollected;
    let level = 1;
    if (collected >= 72) level = 5;
    else if (collected >= 42) level = 4;
    else if (collected >= 22) level = 3;
    else if (collected >= 8) level = 2;

    this.difficulty = level;
    const levelBoost = level - 1;
    const comboBoost = Math.min(22, Math.floor(this.combo / 5) * 3);
    const survivalEase = this.lives <= 1 ? 18 : this.lives === 2 ? 9 : 0;
    const progressRamp = this.settings?.progressiveSpeed === false
      ? 1
      : 1 + Math.min(1.35, Math.pow(Math.max(0, collected), 0.88) * 0.018);
    this.speedRampMultiplier = Number(progressRamp.toFixed(3));
    this.paceTier = this._getPaceTier(this.speedRampMultiplier);

    // 速度设置 + 消词成长曲线：收集越多，下落越快；HUD 会显示实时倍率。
    const speedMultiplier = ((this.settings?.speed ?? 85) / 100) * this.speedRampMultiplier;
    const density = this.settings?.wordDensity ?? 2;
    const densityIntervalFactor = 1.30 - (density - 1) * 0.15; // 1档稀疏，6档非常密集
    const rampIntervalFactor = this.settings?.progressiveSpeed === false
      ? 1
      : Math.max(0.56, 1 - Math.min(0.44, (this.speedRampMultiplier - 1) * 0.34));
    const baseInterval = 182 - levelBoost * 17 - comboBoost * 0.48 + survivalEase;
    this.spawnInterval = Math.max(24, baseInterval * densityIntervalFactor * rampIntervalFactor);
    this.fallSpeed = Math.max(0.07, (0.28 + levelBoost * 0.082 + Math.min(0.12, this.combo * 0.0038) - survivalEase * 0.0045) * speedMultiplier);
    this.maxActiveWords = Math.min(9, Math.max(1, density) + 1 + Math.floor(level / 2) + Math.floor(this.combo / 16) + Math.floor(Math.max(0, this.speedRampMultiplier - 1) * 1.8));

    const event = this.getActiveEvent();
    if (event?.key === 'comet') {
      this.spawnInterval = Math.max(24, this.spawnInterval * 0.68);
      this.maxActiveWords = Math.min(10, this.maxActiveWords + 1);
    } else if (event?.key === 'fog') {
      this.spawnInterval = Math.max(40, this.spawnInterval * 1.18);
    } else if (event?.key === 'echo' || event?.key === 'library') {
      this.spawnInterval = Math.max(30, this.spawnInterval * 0.86);
    } else if (event?.key === 'rush') {
      this.spawnInterval = Math.max(22, this.spawnInterval * 0.62);
      this.maxActiveWords = Math.min(10, this.maxActiveWords + 2);
    } else if (event?.key === 'aurora') {
      this.spawnInterval = Math.max(34, this.spawnInterval * 0.92);
    } else if (event?.key === 'treasure') {
      this.spawnInterval = Math.max(24, this.spawnInterval * 0.76);
      this.maxActiveWords = Math.min(10, this.maxActiveWords + 1);
    }
  }

  /* ---------- 开局 ---------- */
  start() {
    this._syncSettings();
    this._resize();
    this.words = [];
    this.particles = [];
    this.currentInput = '';
    this.score = 0;
    this.wordsCollected = 0;
    this.lives = this.settings.startLives;
    this.combo = 0;
    this.maxCombo = 0;
    this.totalTyped = 0;
    this.totalCorrect = 0;
    this.totalKeystrokes = 0;
    this.mistakes = 0;
    this.missed = 0;
    this.pauseRemaining = this.maxPause;
    this.pauseStartedAt = 0;
    this.pauseEndsAt = 0;
    this.clearRemaining = this.settings.starburstCharges;
    this.lastSpaceTime = 0;
    this.spacePressedOnce = false;
    this.activeBuffs = {};
    this.shields = 0;
    this.focusGuards = 0;
    this.buffSparkTimer = 0;
    this.activeEvent = null;
    this.nextEventAt = 0;
    this.lastEventKey = '';
    this.speedRampMultiplier = 1;
    this.lastMilestoneReward = 0;
    this.paceTier = this._getPaceTier(1);
    this._scheduleNextEvent();
    this.spawnTimer = 0;
    this.recentWords = [];
    this.state = 'playing';
    this._updateDifficulty();
    this._spawnWord();
    this._emitAll();
  }

  /* ---------- 暂停 ---------- */
  pause() {
    if (this.state !== 'playing' || this.pauseRemaining <= 0) return;
    const now = this._now();
    this.state = 'paused';
    this.pauseStartedAt = now;
    this.pauseEndsAt = now + this.pauseDurationMs;
    this.pauseRemaining--;
    if (this.onSkillUse) this.onSkillUse({ type: 'freeze', remaining: this.pauseRemaining });
    this._emitAll();
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.pauseStartedAt = 0;
    this.pauseEndsAt = 0;
    this._emitAll();
  }

  togglePause() {
    if (this.state === 'playing') this.pause();
    else if (this.state === 'paused') this.resume();
  }

  /* ---------- 全屏清除 ---------- */
  clearAll() {
    if (!['playing', 'paused'].includes(this.state) || this.clearRemaining <= 0 || this.words.length === 0) return;
    const wasPaused = this.state === 'paused';

    // 星爆清屏：给少量星尘，但不计入收集数，避免玩家只靠技能刷关
    const clearPoints = Math.round((wasPaused ? 6 : 5) * this._scoreMultiplier());
    this.words.forEach((w) => {
      this._spawnCollectParticles(w.x, w.y, w.word.en, w.buff?.color || '#AEEAFF');
      this.score += clearPoints;
    });
    this.words = [];
    this.currentInput = '';
    this.clearRemaining--;
    if (this.onSkillUse) this.onSkillUse({ type: 'starburst', remaining: this.clearRemaining });
    this.combo = 0;
    this.spawnTimer = Math.floor(this.spawnInterval * 0.55);
    this._updateDifficulty();
    this._emitAll();
  }

  /* ---------- 键盘输入 ---------- */
  handleKey(key) {
    if (this.state === 'idle' || this.state === 'over') return;

    // 空格: 暂停；双击空格: 星爆清屏
    if (key === ' ') {
      const now = this._now();
      if (this.spacePressedOnce && now - this.lastSpaceTime < 360) {
        this.spacePressedOnce = false;
        this.clearAll();
        return;
      }
      this.spacePressedOnce = true;
      this.lastSpaceTime = now;
      setTimeout(() => { this.spacePressedOnce = false; }, 380);
      this.togglePause();
      return;
    }

    // Tab: 清屏技能，降低双击空格的误触成本
    if (key === 'Tab') {
      this.clearAll();
      return;
    }

    // 退格
    if (key === 'Backspace') {
      this.currentInput = this.currentInput.slice(0, -1);
      this._emitAll();
      return;
    }

    // 字母键
    if (key.length === 1 && /^[a-zA-Z]$/.test(key)) {
      this.totalKeystrokes++;
      this.currentInput += key.toLowerCase();
      this._checkMatch();
    }
  }

  /* ---------- 匹配检测 ---------- */
  _getFocusedWord() {
    if (!this.currentInput) return null;
    const matches = this.words
      .filter((w) => w.word.en.startsWith(this.currentInput))
      .sort((a, b) => b.y - a.y || a.word.en.length - b.word.en.length);
    return matches[0] || null;
  }

  _checkMatch() {
    const matched = this.words.find((w) => w.word.en === this.currentInput);
    if (matched) {
      this._onWordCollected(matched);
      return;
    }

    const focused = this._getFocusedWord();
    if (!focused && this.currentInput.length >= 1) {
      // 输错时只回退错误字符，不清空整段输入。
      this.totalTyped++;
      this.currentInput = this.currentInput.slice(0, -1);
      const echoSafe = this._hasEvent('echo');
      const guardSafe = this.focusGuards > 0;
      if (guardSafe) {
        this.focusGuards--;
        this.score = Math.max(0, this.score - 1);
        this._spawnBuffParticles(this.w / 2, this.h * 0.32, { icon: '🌌', color: '#AEE8FF' });
        if (this.onBuffChange) this.onBuffChange(this.getActiveBuffs());
      } else {
        this.mistakes++;
        if (!echoSafe) this.combo = 0;
        else this.score = Math.max(0, this.score - 2);
      }
      if (this.onWrongInput) this.onWrongInput({ echoSafe: echoSafe || guardSafe, guardSafe });
      this._updateDifficulty();
    }

    this._emitAll();
  }

  _onWordCollected(wordEntity) {
    this.totalTyped++;
    this.totalCorrect++;
    this.combo++;
    if (this.combo > this.maxCombo) this.maxCombo = this.combo;

    const isBuff = Boolean(wordEntity.buff);
    if (!isBuff) this.wordsCollected++;

    const dangerBonus = wordEntity.y > this.groundY - 88 ? 5 : 0;
    const freezeBonus = this.state === 'paused' ? 3 : 0;
    const comboBonus = Math.min(30, Math.floor(this.combo / 4) * 3);
    const eventBonus = wordEntity.eventBonus ? 14 : 0;
    const basePoints = isBuff ? 8 + Math.min(18, this.combo) : 10 + comboBonus + dangerBonus + freezeBonus + eventBonus;
    const points = Math.round(basePoints * this._scoreMultiplier());
    this.score += points;
    this.currentInput = '';

    // 连击奖励：清屏可通过技巧获得，生命偶尔回复
    if (this.combo > 0 && this.combo % 8 === 0 && this.clearRemaining < 3) {
      this.clearRemaining++;
    }
    if (this.combo > 0 && this.combo % 12 === 0 && this.lives < this.maxLives) {
      this.lives++;
    }
    if (!isBuff) {
      this._maybeTriggerComboFever();
      this._maybeGrantMilestoneReward();
    }

    this._spawnCollectParticles(wordEntity.x, wordEntity.y, wordEntity.word.en, wordEntity.buff?.color || '#F5D980');

    const idx = this.words.indexOf(wordEntity);
    if (idx !== -1) this.words.splice(idx, 1);

    this.recentWords.push(wordEntity.word.en);
    if (this.recentWords.length > 8) this.recentWords.shift();

    if (!isBuff && this._hasBuff('chain')) {
      const chainBuff = this._getBuffDef('chain');
      this._captureLowestWords(1, chainBuff, { points: 6, combo: false });
    }

    this._applyEventCollectBonus(wordEntity, isBuff);
    if (isBuff) this._applyBuff(wordEntity.buff);

    this._maybeStartRunEvent();
    this._updateDifficulty();
    this._emitAll();
    if (this.onCollect) this.onCollect(wordEntity.word, this.combo, points, { buff: wordEntity.buff || null, eventBonus: wordEntity.eventBonus || null });
  }

  /* ---------- 掉出屏幕 ---------- */
  _onWordMissed(wordEntity) {
    this.totalTyped++;
    this.missed++;
    this.currentInput = '';

    const idx = this.words.indexOf(wordEntity);
    if (idx !== -1) this.words.splice(idx, 1);

    if (this.shields > 0) {
      this.shields--;
      this._spawnBuffParticles(wordEntity.x, this.groundY - 24, this._getBuffDef('shield'));
      if (this.onMiss) this.onMiss({ ...wordEntity.word, shielded: true });
      this._updateDifficulty();
      this._emitAll();
      if (this.onBuffChange) this.onBuffChange(this.getActiveBuffs());
      return;
    }

    this.combo = 0;
    this.lives--;
    this._spawnMissParticles(wordEntity.x, this.groundY + 4);

    if (this.onMiss) this.onMiss(wordEntity.word);
    this._updateDifficulty();
    this._emitAll();
    if (this.lives <= 0) this._gameOver();
  }

  _gameOver() {
    this.state = 'over';
    const accuracyBase = this.totalKeystrokes || this.totalTyped;
    const accuracy = accuracyBase > 0
      ? Math.max(0, Math.round(((accuracyBase - this.mistakes) / accuracyBase) * 100))
      : 0;

    if (this.onGameOver) {
      this.onGameOver({
        score: this.score,
        words: this.wordsCollected,
        maxCombo: this.maxCombo,
        accuracy,
        totalCorrect: this.totalCorrect,
        mistakes: this.mistakes,
        missed: this.missed,
        level: this.levelNames[this.difficulty - 1],
        speedRamp: this.speedRampMultiplier,
        paceTier: this.paceTier?.name || '微光起步',
      });
    }
  }

  /* ---------- 粒子特效 ---------- */
  _spawnCollectParticles(x, y, word, color = '#F5D980') {
    const count = this.settings?.calm ? 8 : 18;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        type: 'collect',
        x, y,
        vx: (Math.random() - 0.5) * 5.5,
        vy: (Math.random() - 0.9) * 4.5 - 2,
        life: 46 + Math.random() * 18,
        maxLife: 64,
        r: Math.random() * 3 + 1.5,
        color,
      });
    }
    this.particles.push({
      type: 'text', x, y: y - 8,
      vx: 0, vy: -0.9,
      life: 54, maxLife: 54,
      text: '+', color,
    });
  }

  _spawnMissParticles(x, y) {
    for (let i = 0; i < 12; i++) {
      this.particles.push({
        type: 'miss',
        x, y,
        vx: (Math.random() - 0.5) * 3.5,
        vy: -(Math.random() * 2 + 1),
        life: 34 + Math.random() * 14,
        maxLife: 48,
        r: Math.random() * 2 + 1,
        color: '#F09090',
      });
    }
  }

  _spawnBuffParticles(x, y, buff) {
    const color = buff?.color || '#AEEAFF';
    const count = this.settings?.calm ? 14 : 28;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = 1.2 + Math.random() * 3.2;
      this.particles.push({
        type: 'buff',
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.6,
        life: 48 + Math.random() * 22,
        maxLife: 70,
        r: Math.random() * 2.8 + 1.2,
        color,
      });
    }
    this.particles.push({
      type: 'text', x, y: y - 12,
      vx: 0, vy: -0.82,
      life: 62, maxLife: 62,
      text: buff?.icon || '✦', color,
    });
  }

  _captureLowestWords(count = 1, buff = null, options = {}) {
    const color = buff?.color || '#FFE480';
    const targets = this.words
      .filter((w) => !w.buff)
      .sort((a, b) => b.y - a.y)
      .slice(0, Math.max(0, count));
    let captured = 0;
    targets.forEach((w) => {
      const idx = this.words.indexOf(w);
      if (idx === -1) return;
      this.words.splice(idx, 1);
      captured++;
      this.wordsCollected++;
      this.totalTyped++;
      this.totalCorrect++;
      this.score += Math.round(options.points ?? 8);
      this._spawnCollectParticles(w.x, w.y, w.word.en, color);
      this.particles.push({
        type: 'text', x: w.x, y: w.y - 28,
        vx: 0, vy: -1.05,
        life: 58, maxLife: 58,
        text: buff?.icon || 'AUTO', color,
      });
      this.recentWords.push(w.word.en);
    });
    while (this.recentWords.length > 8) this.recentWords.shift();
    return captured;
  }

  _updateParticles() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx; p.y += p.vy; p.life--;
      if (p.type !== 'text') p.vy += 0.035;
      if (p.life <= 0) this.particles.splice(i, 1);
    }
  }

  /* ---------- 刷词 ---------- */
  _spawnWord() {
    if (!this.w || this.w < 160) return;

    const activeEvent = this.getActiveEvent();
    const buffChanceBoost = activeEvent?.key === 'comet' ? 0.08 : 0;
    const shouldSpawnBuff = this.wordsCollected >= 2
      && !this.words.some((w) => w.buff)
      && Math.random() < Math.min(0.65, this._getBuffSpawnChance() + buffChanceBoost);
    const buff = shouldSpawnBuff ? this._randomBuff() : null;
    const eventBonus = !buff && ((activeEvent?.key === 'comet' && Math.random() < 0.42) || (activeEvent?.key === 'treasure' && Math.random() < 0.46)) ? activeEvent : null;

    // v0.9.9：Buff 不再绑定固定热词。先从当前词库抽正常单词，再把 Buff 随机附着到这个词卡上。
    let entry = this._randomWord();

    if (!buff && (activeEvent?.key === 'echo' || activeEvent?.key === 'library')) {
      const pool = WORD_BANKS[this.wordBank] || WORD_BANKS['CET-4'];
      const targetFirst = this.words.find((w) => !w.buff)?.word?.en?.[0] || entry?.en?.[0];
      const echoCandidates = pool.filter((w) => w.en?.[0] === targetFirst && !this.words.some((active) => active.word.en === w.en));
      if (echoCandidates.length && Math.random() < 0.62) entry = echoCandidates[Math.floor(Math.random() * echoCandidates.length)];
    }

    if (!entry || this.words.some((w) => w.word.en === entry.en)) return;

    const margin = 88;
    let x = margin + Math.random() * Math.max(1, this.w - margin * 2);
    for (let i = 0; i < 12; i++) {
      const candidateX = margin + Math.random() * Math.max(1, this.w - margin * 2);
      const tooClose = this.words.some((w) => Math.abs(w.x - candidateX) < 126 && w.y < 120);
      if (!tooClose) { x = candidateX; break; }
    }

    const lengthFactor = Math.min(0.055, entry.en.length * 0.004);
    this.words.push({
      word: entry,
      x,
      y: -42,
      speed: this.fallSpeed + Math.random() * 0.075 + lengthFactor + (buff ? 0.025 : 0) + (eventBonus ? 0.045 : 0),
      wobble: Math.random() * Math.PI * 2,
      born: performance.now(),
      buff,
      eventBonus,
    });
  }

  /* ---------- 主循环 ---------- */
  update() {
    const buffExpired = this._pruneBuffs();
    const eventChanged = this._updateRunEvent();
    if (buffExpired && this.onBuffChange) this.onBuffChange(this.getActiveBuffs());
    if (eventChanged) this._updateDifficulty();

    if (this.state === 'paused') {
      if (this.getPauseMsRemaining() <= 0) {
        this.resume();
      } else {
        this._updateParticles();
        this._render();
        return;
      }
    }

    if (this.state !== 'playing') {
      this._render();
      return;
    }

    // 刷词。场上为空时更快补词，避免空窗。
    this.spawnTimer++;
    const dynamicInterval = this.words.length === 0 ? 44 : this.spawnInterval;
    if (this.spawnTimer >= dynamicInterval && this.words.length < this.maxActiveWords) {
      this.spawnTimer = 0;
      this._spawnWord();
    }

    const focused = this._getFocusedWord();

    // 更新下落位置
    for (let i = this.words.length - 1; i >= 0; i--) {
      const w = this.words[i];
      const isFocused = focused === w;
      const slowFactor = isFocused ? 0.46 : 0.86;
      const dangerFactor = w.y > this.groundY - 90 ? 0.96 : 1;
      const buffSlow = this._activeSlowMultiplier();
      const eventSlow = this._eventFallMultiplier();
      w.y += w.speed * slowFactor * dangerFactor * buffSlow * eventSlow;
      if (this._hasBuff('gravity') && !w.buff) {
        w.x += (this.w / 2 - w.x) * 0.018;
      }
      const activeEvent = this.getActiveEvent();
      if (activeEvent?.key === 'tide' && !w.buff) {
        w.x += Math.sin(w.wobble * 1.7 + w.y * 0.015) * 0.46;
        w.x = this._clamp(w.x, 54, this.w - 54);
      }
      w.wobble += w.buff ? 0.026 : 0.012;

      if (w.y > this.groundY + 20) {
        this._onWordMissed(w);
      }
    }

    this._updateParticles();
    this._render();
  }

  /* ---------- 渲染 ---------- */
  _render() {
    const ctx = this.ctx;
    if (!ctx) return;
    ctx.clearRect(0, 0, this.w, this.h);

    const focused = this._getFocusedWord();
    const now = this._now();
    const hasTimeBubble = this._hasBuff('timebubble', now);
    const hasGravity = this._hasBuff('gravity', now);
    const hasMagnify = this._hasBuff('magnify', now);
    const hasGuide = this._hasBuff('guide', now);
    const hasChain = this._hasBuff('chain', now);
    const hasFever = this._hasBuff('fever', now);
    const activeEvent = this.getActiveEvent(now);

    // 柔和的单人模式动态画面：地平线光晕、buff 气场和安全线。
    ctx.save();
    const horizon = ctx.createLinearGradient(0, this.groundY - 120, 0, this.groundY + 36);
    horizon.addColorStop(0, 'rgba(174, 234, 255, 0)');
    horizon.addColorStop(0.55, hasTimeBubble ? 'rgba(174, 234, 255, 0.26)' : 'rgba(245, 217, 128, 0.10)');
    horizon.addColorStop(1, 'rgba(91, 127, 96, 0.18)');
    ctx.fillStyle = horizon;
    ctx.fillRect(0, Math.max(0, this.groundY - 130), this.w, 180);
    if (hasGravity || hasTimeBubble || hasMagnify || hasGuide || hasChain || hasFever || this.shields > 0 || activeEvent) {
      const aura = ctx.createRadialGradient(this.w / 2, this.h * 0.44, 20, this.w / 2, this.h * 0.44, Math.max(this.w, this.h) * 0.48);
      aura.addColorStop(0, activeEvent ? `${this._hexToRgba(activeEvent.color || '#FFE480', 0.18)}` : hasTimeBubble ? 'rgba(174,234,255,0.24)' : hasGravity ? 'rgba(185,167,255,0.20)' : hasFever ? 'rgba(255,179,106,0.22)' : hasChain ? 'rgba(200,247,197,0.18)' : 'rgba(255,211,138,0.15)');
      aura.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = aura;
      ctx.fillRect(0, 0, this.w, this.h);
    }

    if (hasTimeBubble) {
      ctx.fillStyle = 'rgba(174,234,255,0.08)';
      ctx.fillRect(0, 0, this.w, this.h);
      ctx.fillStyle = 'rgba(247,253,255,0.92)';
      ctx.font = '900 20px "Noto Sans SC", "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(174,234,255,0.65)';
      ctx.shadowBlur = 18;
      ctx.fillText('时间泡泡：单词几乎停住', this.w / 2, 92);
    }
    if (hasFever) {
      ctx.fillStyle = 'rgba(255, 246, 230, 0.92)';
      ctx.font = '900 18px "Noto Sans SC", "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(255,179,106,0.66)';
      ctx.shadowBlur = 18;
      ctx.fillText('连击热浪：星尘 ×1.5', this.w / 2, hasTimeBubble ? 120 : 92);
    }
    if (this.shields > 0) {
      ctx.strokeStyle = 'rgba(217,204,255,0.55)';
      ctx.lineWidth = 4;
      ctx.shadowColor = 'rgba(217,204,255,0.55)';
      ctx.shadowBlur = 18;
      this._roundRect(ctx, 34, this.groundY - 6, this.w - 68, 36, 18);
      ctx.stroke();
    }

    if (activeEvent) {
      if (activeEvent.key === 'fog') {
        ctx.fillStyle = 'rgba(220, 247, 255, 0.10)';
        for (let i = 0; i < 4; i++) {
          const yy = 130 + i * 74 + Math.sin(now / 900 + i) * 8;
          this._roundRect(ctx, -40 + i * 17, yy, this.w + 80, 28, 14);
          ctx.fill();
        }
      }
      const eventPct = Math.max(0, Math.min(1, activeEvent.remainingMs / activeEvent.durationMs));
      const boxW = Math.min(360, this.w - 56);
      const boxX = this.w / 2 - boxW / 2;
      const boxY = 102;
      ctx.shadowColor = this._hexToRgba(activeEvent.color, 0.45);
      ctx.shadowBlur = 18;
      ctx.fillStyle = 'rgba(21, 32, 50, 0.58)';
      this._roundRect(ctx, boxX, boxY, boxW, 48, 18);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = this._hexToRgba(activeEvent.color, 0.58);
      ctx.lineWidth = 1.4;
      this._roundRect(ctx, boxX, boxY, boxW, 48, 18);
      ctx.stroke();
      ctx.fillStyle = this._hexToRgba(activeEvent.color, 0.86);
      this._roundRect(ctx, boxX + 14, boxY + 39, (boxW - 28) * eventPct, 4, 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.94)';
      ctx.textAlign = 'center';
      ctx.font = '900 15px "Noto Sans SC", "Microsoft YaHei", sans-serif';
      ctx.fillText(`${activeEvent.icon} ${activeEvent.name} · ${Math.ceil(activeEvent.remainingMs / 1000)}s`, this.w / 2, boxY + 21);
      ctx.font = '700 11px "Noto Sans SC", "Microsoft YaHei", sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.70)';
      ctx.fillText(activeEvent.desc || '', this.w / 2, boxY + 35);
    }
    ctx.restore();

    // 危险线
    if (this.settings?.dangerLine !== false) {
      ctx.save();
      ctx.globalAlpha = 0.25;
      ctx.strokeStyle = '#F09090';
      ctx.setLineDash([8, 10]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(24, this.groundY - 24);
      ctx.lineTo(this.w - 24, this.groundY - 24);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    // --- 下落词 ---
    for (const w of this.words) {
      const alpha = this.state === 'paused' ? 0.78 : 1;
      const text = w.word.en;
      const isFocused = focused === w;
      const isMatchedPrefix = this.currentInput && text.startsWith(this.currentInput);
      const danger = w.y > this.groundY - 92;
      const wobbleX = Math.sin(w.wobble) * (danger ? 3 : 1.4);
      const drawX = w.x + wobbleX;

      // 星光和尾迹
      ctx.save();
      ctx.globalAlpha = alpha;
      const tail = ctx.createLinearGradient(drawX, w.y - 66, drawX, w.y - 16);
      tail.addColorStop(0, 'rgba(255, 240, 192, 0)');
      tail.addColorStop(1, danger ? 'rgba(255, 181, 181, 0.34)' : 'rgba(255, 238, 190, 0.42)');
      ctx.fillStyle = tail;
      this._roundRect(ctx, drawX - 2, w.y - 66, 4, 52, 2);
      ctx.fill();

      ctx.fillStyle = danger ? '#FF9E9E' : (w.buff?.color || w.eventBonus?.color || '#FFD76A');
      ctx.shadowColor = danger ? 'rgba(255, 158, 158, 0.70)' : (w.buff ? w.buff.color : w.eventBonus ? w.eventBonus.color : 'rgba(255, 229, 150, 0.72)');
      ctx.shadowBlur = isFocused || w.buff || w.eventBonus ? 20 : 10;
      ctx.font = `${isFocused || w.buff || w.eventBonus ? 24 : 20}px "Nunito", "Noto Sans SC", "Microsoft YaHei", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(w.buff ? w.buff.icon : w.eventBonus ? w.eventBonus.icon : (isFocused ? '✦' : '☆'), drawX, w.y - 14);
      ctx.restore();

      // 单词背景卡片：v0.9.6 自适应宽度/换行，保证中文释义完整落在方块内部。
      ctx.save();
      ctx.globalAlpha = alpha;
      const showMeaning = (this.settings?.showMeaning !== false) || w.buff || w.eventBonus || hasMagnify || activeEvent?.key === 'echo' || activeEvent?.key === 'library';
      const isBigVisible = Boolean(w.buff || w.eventBonus || isFocused || hasMagnify || activeEvent?.key === 'echo' || activeEvent?.key === 'library' || showMeaning);
      const wordFontSize = hasMagnify && !w.buff ? 23 : 18;
      const padX = hasMagnify ? 18 : 14;
      const cardY = w.y - 7;
      const minCardW = w.buff || w.eventBonus ? 142 : 112;
      const maxCardW = Math.max(minCardW, Math.min(this.w - 24, hasMagnify ? 292 : (w.buff || w.eventBonus ? 282 : 248)));
      const baseMeaning = String(w.word.zh || '').trim();
      const meaningText = w.buff
        ? `${baseMeaning}${baseMeaning ? ' · ' : ''}${w.buff.name}`
        : (w.eventBonus ? `${w.eventBonus.key === 'treasure' ? '宝箱词' : '流星词'} · 额外星尘` : baseMeaning);

      ctx.font = `800 ${wordFontSize}px "Nunito", "Noto Sans SC", "Microsoft YaHei", sans-serif`;
      const metrics = ctx.measureText(text);
      const tw = metrics.width;

      let meaningFontSize = (w.buff || w.eventBonus) ? 12 : 13;
      let meaningLines = [];
      let meaningWidth = 0;
      if (showMeaning && meaningText) {
        ctx.font = `700 ${meaningFontSize}px "Noto Sans SC", "Microsoft YaHei", sans-serif`;
        const preferredWidth = Math.min(maxCardW - padX * 2, Math.max(86, ctx.measureText(meaningText).width));
        meaningLines = this._wrapCanvasText(ctx, meaningText, preferredWidth);
        while (meaningLines.length > 3 && meaningFontSize > 10) {
          meaningFontSize -= 1;
          ctx.font = `700 ${meaningFontSize}px "Noto Sans SC", "Microsoft YaHei", sans-serif`;
          meaningLines = this._wrapCanvasText(ctx, meaningText, preferredWidth);
        }
        meaningWidth = meaningLines.reduce((max, line) => Math.max(max, ctx.measureText(line).width), 0);
      }

      let cardW = Math.max(minCardW, tw + padX * 2, meaningWidth + padX * 2);
      cardW = Math.min(maxCardW, cardW);
      // 如果宽度被上限压缩，重新按最终宽度换行；不截断中文，只增加卡片高度。
      if (showMeaning && meaningText) {
        ctx.font = `700 ${meaningFontSize}px "Noto Sans SC", "Microsoft YaHei", sans-serif`;
        meaningLines = this._wrapCanvasText(ctx, meaningText, Math.max(40, cardW - padX * 2));
      }
      const meaningLineHeight = meaningFontSize + 4;
      const baseCardH = (w.buff || w.eventBonus) ? 48 : (isBigVisible ? 42 : 32);
      const cardH = Math.max((w.buff || w.eventBonus) ? 58 : (isBigVisible ? 52 : 32), baseCardH + (meaningLines.length ? meaningLines.length * meaningLineHeight + 4 : 0));
      const cardCenterX = this._clamp(drawX, cardW / 2 + 12, this.w - cardW / 2 - 12);
      const cardX = cardCenterX - cardW / 2;

      ctx.shadowBlur = isFocused ? 18 : 8;
      ctx.shadowColor = danger ? 'rgba(240, 144, 144, 0.38)' : 'rgba(13, 27, 42, 0.35)';
      const bg = ctx.createLinearGradient(0, cardY, 0, cardY + cardH);
      if (w.buff || w.eventBonus) {
        bg.addColorStop(0, 'rgba(255, 255, 245, 0.98)');
        bg.addColorStop(1, w.eventBonus ? 'rgba(255, 244, 197, 0.94)' : 'rgba(217, 246, 255, 0.94)');
      } else {
        bg.addColorStop(0, danger ? 'rgba(255, 230, 230, 0.94)' : 'rgba(255, 250, 232, 0.96)');
        bg.addColorStop(1, isFocused ? 'rgba(224, 248, 237, 0.96)' : 'rgba(236, 247, 255, 0.92)');
      }
      ctx.fillStyle = bg;
      this._roundRect(ctx, cardX, cardY, cardW, cardH, 9);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.strokeStyle = w.buff
        ? w.buff.color
        : w.eventBonus
          ? w.eventBonus.color
          : isFocused
            ? 'rgba(255, 193, 91, 0.92)'
            : danger ? 'rgba(255, 158, 158, 0.86)' : 'rgba(130, 190, 170, 0.42)';
      ctx.lineWidth = (isFocused || w.buff || w.eventBonus) ? 2 : 1;
      this._roundRect(ctx, cardX, cardY, cardW, cardH, 9);
      ctx.stroke();

      // 输入进度条
      if (isMatchedPrefix) {
        const progress = Math.min(1, this.currentInput.length / text.length);
        ctx.fillStyle = danger ? 'rgba(240, 144, 144, 0.7)' : (w.buff ? w.buff.color : w.eventBonus ? w.eventBonus.color : 'rgba(245, 217, 128, 0.72)');
        this._roundRect(ctx, cardX + 5, cardY + cardH - 6, (cardW - 10) * progress, 3, 2);
        ctx.fill();
      }

      // 单词文字：已输入部分高亮
      ctx.font = `800 ${wordFontSize}px "Nunito", "Noto Sans SC", "Microsoft YaHei", sans-serif`;
      ctx.textBaseline = 'alphabetic';
      const prefix = isMatchedPrefix ? this.currentInput : '';
      const rest = text.slice(prefix.length);
      let cursorX = cardCenterX - tw / 2;
      ctx.textAlign = 'left';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
      ctx.shadowBlur = 2;
      if (prefix) {
        ctx.fillStyle = '#F2A65A';
        ctx.fillText(prefix, cursorX, w.y + 14);
        cursorX += ctx.measureText(prefix).width;
      }
      ctx.fillStyle = 'rgba(86, 66, 48, 0.94)';
      ctx.fillText(rest, cursorX, w.y + 14);

      if (meaningLines.length) {
        ctx.shadowBlur = 0;
        ctx.font = `700 ${meaningFontSize}px "Noto Sans SC", "Microsoft YaHei", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = (w.buff || w.eventBonus) ? 'rgba(67, 80, 92, 0.86)' : 'rgba(96, 122, 112, 0.82)';
        const firstLineY = w.y + ((w.buff || w.eventBonus) ? 34 : 32);
        meaningLines.forEach((line, index) => {
          ctx.fillText(line, cardCenterX, firstLineY + index * meaningLineHeight);
        });
        ctx.textBaseline = 'alphabetic';
      }

      if (this.settings?.nextKeyHint !== false && (isFocused || hasMagnify || hasGuide || (activeEvent?.key === 'echo' || activeEvent?.key === 'library'))) {
        const next = text.slice((isMatchedPrefix ? this.currentInput.length : 0), (isMatchedPrefix ? this.currentInput.length : 0) + 1);
        if (next) {
          ctx.shadowBlur = 0;
          ctx.font = '900 12px "Nunito", sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = 'rgba(255,255,255,0.94)';
          ctx.strokeStyle = 'rgba(242,166,90,0.78)';
          ctx.lineWidth = 4;
          ctx.strokeText(`NEXT ${next.toUpperCase()}`, cardCenterX, cardY - 6);
          ctx.fillText(`NEXT ${next.toUpperCase()}`, cardCenterX, cardY - 6);
        }
      }
      ctx.restore();
      ctx.restore();
    }

    // --- 粒子 ---
    ctx.shadowBlur = 0;
    for (const p of this.particles) {
      const fade = Math.max(0, p.life / p.maxLife);
      ctx.save();
      ctx.globalAlpha = fade;
      if (p.type === 'text') {
        ctx.font = '800 14px "Nunito", "Noto Sans SC", "Microsoft YaHei", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fillText(p.text, p.x, p.y);
      } else {
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.type === 'collect' || p.type === 'buff' ? 8 : 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * fade, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    // --- 暂停叠加 ---
    if (this.state === 'paused') {
      const msLeft = this.getPauseMsRemaining();
      const secLeft = this.getPauseSecondsRemaining();
      const progress = Math.max(0, Math.min(1, msLeft / this.pauseDurationMs));
      ctx.fillStyle = 'rgba(13, 27, 42, 0.26)';
      ctx.fillRect(0, 0, this.w, this.h);

      const boxW = Math.min(420, this.w - 48);
      const boxH = 156;
      const boxX = this.w / 2 - boxW / 2;
      const boxY = this.h / 2 - boxH / 2;

      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.28)';
      ctx.shadowBlur = 26;
      ctx.fillStyle = 'rgba(13, 27, 42, 0.70)';
      this._roundRect(ctx, boxX, boxY, boxW, boxH, 18);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(255, 232, 128, 0.38)';
      ctx.lineWidth = 1.4;
      this._roundRect(ctx, boxX, boxY, boxW, boxH, 18);
      ctx.stroke();

      const cx = this.w / 2;
      const cy = boxY + 54;
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.lineWidth = 7;
      ctx.arc(cx, cy, 27, -Math.PI / 2, Math.PI * 1.5);
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = '#F5D980';
      ctx.lineCap = 'round';
      ctx.arc(cx, cy, 27, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress);
      ctx.stroke();

      ctx.fillStyle = 'rgba(255, 248, 240, 0.88)';
      ctx.font = '900 26px "Nunito", "Noto Sans SC", "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${secLeft}s`, cx, cy + 8);
      ctx.font = '900 20px "Noto Sans SC", "Microsoft YaHei", sans-serif';
      ctx.fillStyle = 'rgba(255, 248, 240, 0.90)';
      ctx.fillText('冻 结 时 间', this.w / 2, boxY + 102);
      ctx.font = '700 13px "Noto Sans SC", "Microsoft YaHei", sans-serif';
      ctx.fillStyle = 'rgba(255, 248, 240, 0.62)';
      ctx.fillText(`可继续输入消除  ·  Tab/双击 Space 星爆×${this.clearRemaining}`, this.w / 2, boxY + 132);
      ctx.restore();
    }
  }


  _wrapCanvasText(ctx, text = '', maxWidth = 120) {
    const raw = String(text || '').replace(/\s+/g, ' ').trim();
    if (!raw) return [];
    const limit = Math.max(36, maxWidth);
    const lines = [];
    let line = '';
    for (const char of raw) {
      const test = line + char;
      if (!line || ctx.measureText(test).width <= limit) {
        line = test;
      } else {
        lines.push(line);
        line = char.trimStart();
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  _hexToRgba(hex = '#FFE480', alpha = 0.2) {
    const clean = String(hex).replace('#', '');
    const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean;
    const n = Number.parseInt(full, 16);
    if (!Number.isFinite(n)) return `rgba(255, 228, 128, ${alpha})`;
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  _roundRect(ctx, x, y, w, h, r) {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  /* ---------- 回调触发 ---------- */
  _emitAll() {
    if (this.onScoreChange) this.onScoreChange(this.score);
    if (this.onLivesChange) this.onLivesChange(this.lives, this.maxLives);
    if (this.onComboChange) this.onComboChange(this.combo);
    if (this.onInputChange) this.onInputChange(this.currentInput);
    if (this.onLevelChange) this.onLevelChange(this.levelNames[this.difficulty - 1], this.difficulty, this.wordsCollected);
    if (this.onSkillChange) this.onSkillChange({
      pauseRemaining: this.pauseRemaining,
      pauseDurationMs: this.pauseDurationMs,
      pauseMsRemaining: this.getPauseMsRemaining(),
      pauseSecondsRemaining: this.getPauseSecondsRemaining(),
      isPaused: this.state === 'paused',
      clearRemaining: this.clearRemaining,
      activeBuffs: this.getActiveBuffs(),
      activeEvent: this.getActiveEvent(),
      scoreMultiplier: this._scoreMultiplier(),
      slowActive: this._hasBuff('timebubble') || this._hasBuff('gravity') || this._hasBuff('feather'),
      shields: this.shields,
      wordsCollected: this.wordsCollected,
      speedRampMultiplier: this.speedRampMultiplier,
      paceTier: this.paceTier,
      fallSpeed: this.fallSpeed,
      spawnInterval: this.spawnInterval,
      mistakes: this.mistakes,
      missed: this.missed,
    });
    if (this.onBuffChange) this.onBuffChange(this.getActiveBuffs());
  }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameEngine;
}
