/* ============================================================
   单词物语 · Word Whisper — 词库数据
   CET-4 / CET-6 / IELTS 核心词汇 + 中文释义
   ============================================================ */

const WORD_BANKS = {
  'CET-4': [
    { en: 'abandon',  zh: '放弃；抛弃' },
    { en: 'ability',  zh: '能力；才能' },
    { en: 'absence',  zh: '缺席；不在' },
    { en: 'absolute', zh: '绝对的；完全的' },
    { en: 'absorb',   zh: '吸收；吸引' },
    { en: 'abstract', zh: '抽象的；摘要' },
    { en: 'academic', zh: '学术的；学院的' },
    { en: 'access',   zh: '进入；通道' },
    { en: 'account',  zh: '账户；说明' },
    { en: 'achieve',  zh: '达到；实现' },
    { en: 'acquire',  zh: '获得；习得' },
    { en: 'balance',  zh: '平衡；余额' },
    { en: 'barrier',  zh: '障碍；屏障' },
    { en: 'benefit',  zh: '利益；好处' },
    { en: 'blanket',  zh: '毯子；覆盖' },
    { en: 'boundary', zh: '边界；界限' },
    { en: 'breathe',  zh: '呼吸' },
    { en: 'breeze',   zh: '微风；轻松通过' },
    { en: 'brilliant',zh: '杰出的；明亮的' },
    { en: 'campus',   zh: '校园；校区' },
    { en: 'capture',  zh: '捕获；俘获' },
    { en: 'career',   zh: '职业；生涯' },
    { en: 'ceiling',  zh: '天花板；上限' },
    { en: 'channel',  zh: '频道；渠道' },
    { en: 'chapter',  zh: '章节；篇章' },
    { en: 'climate',  zh: '气候；风气' },
    { en: 'comfort',  zh: '舒适；安慰' },
    { en: 'compare',  zh: '比较；对比' },
    { en: 'conquer',  zh: '征服；克服' },
    { en: 'context',  zh: '语境；背景' },
    { en: 'cottage',  zh: '小屋；村舍' },
    { en: 'courage',  zh: '勇气；胆量' },
    { en: 'creature', zh: '生物；创造物' },
    { en: 'curtain',  zh: '窗帘；幕布' },
    { en: 'delicate', zh: '精致的；脆弱的' },
    { en: 'deserve',  zh: '值得；应得' },
    { en: 'diamond',  zh: '钻石；菱形' },
    { en: 'discover', zh: '发现；发觉' },
    { en: 'embrace',  zh: '拥抱；包含' },
    { en: 'emotion',  zh: '情感；情绪' },
    { en: 'endless',  zh: '无尽的；无限的' },
    { en: 'explore',  zh: '探索；探究' },
    { en: 'fashion',  zh: '时尚；方式' },
    { en: 'feather',  zh: '羽毛；翎毛' },
    { en: 'fortune',  zh: '财富；运气' },
    { en: 'freedom',  zh: '自由；自主' },
    { en: 'gallery',  zh: '画廊；走廊' },
    { en: 'genuine',  zh: '真实的；真诚的' },
    { en: 'gentle',   zh: '温和的；轻柔的' },
    { en: 'gesture',  zh: '手势；姿态' },
    { en: 'glimpse',  zh: '一瞥；瞥见' },
    { en: 'harvest',  zh: '收获；收割' },
    { en: 'healthy',  zh: '健康的' },
    { en: 'horizon',  zh: '地平线；眼界' },
    { en: 'journey',  zh: '旅程；旅行' },
    { en: 'justice',  zh: '正义；公正' },
    { en: 'kitchen',  zh: '厨房' },
    { en: 'lantern',  zh: '灯笼；灯塔' },
    { en: 'liberty',  zh: '自由；解放' },
    { en: 'mansion',  zh: '大厦；宅邸' },
    { en: 'meadow',   zh: '草地；牧场' },
    { en: 'miracle',  zh: '奇迹' },
    { en: 'morning',  zh: '早晨；上午' },
    { en: 'mystery',  zh: '神秘；谜' },
    { en: 'neutral',  zh: '中立的；中性的' },
    { en: 'noble',    zh: '高尚的；贵族' },
    { en: 'observe',  zh: '观察；遵守' },
    { en: 'orchard',  zh: '果园' },
    { en: 'passion',  zh: '热情；激情' },
    { en: 'patient',  zh: '耐心的；病人' },
    { en: 'peaceful', zh: '和平的；宁静的' },
    { en: 'picture',  zh: '图片；想象' },
    { en: 'pioneer',  zh: '先锋；先驱' },
    { en: 'plastic',  zh: '塑料的；可塑的' },
    { en: 'pleasure', zh: '快乐；愉悦' },
    { en: 'portrait', zh: '肖像；描绘' },
    { en: 'precious', zh: '珍贵的；宝贵的' },
    { en: 'pursuit',  zh: '追求；追赶' },
    { en: 'quality',  zh: '质量；品质' },
    { en: 'quest',    zh: '探索；追求' },
    { en: 'reality',  zh: '现实；真实' },
    { en: 'reflect',  zh: '反映；反射' },
    { en: 'rescue',   zh: '救援；营救' },
    { en: 'ripple',   zh: '涟漪；波纹' },
    { en: 'shelter',  zh: '庇护所；遮蔽' },
    { en: 'silence',  zh: '沉默；寂静' },
    { en: 'sketch',   zh: '素描；草图' },
    { en: 'splendid', zh: '辉煌的；壮丽的' },
    { en: 'stumble',  zh: '绊倒；跌跌撞撞' },
    { en: 'sunrise',  zh: '日出；黎明' },
    { en: 'sunset',   zh: '日落；黄昏' },
    { en: 'shelter',  zh: '遮蔽；庇护所' },
    { en: 'temple',   zh: '寺庙；太阳穴' },
    { en: 'therapy',  zh: '治疗；疗法' },
    { en: 'tranquil', zh: '宁静的；平静的' },
    { en: 'treasure', zh: '宝藏；珍视' },
    { en: 'triumph',  zh: '胜利；凯旋' },
    { en: 'twinkle',  zh: '闪烁；闪耀' },
    { en: 'umbrella', zh: '雨伞；保护伞' },
    { en: 'uniform',  zh: '制服；统一的' },
    { en: 'universe', zh: '宇宙；世界' },
    { en: 'valley',   zh: '山谷；流域' },
    { en: 'vapor',    zh: '蒸气；水汽' },
    { en: 'venture',  zh: '冒险；投机' },
    { en: 'village',  zh: '村庄；乡村' },
    { en: 'vintage',  zh: '复古的；佳酿' },
    { en: 'visible',  zh: '可见的；明显的' },
    { en: 'wander',   zh: '漫步；闲逛' },
    { en: 'warmth',   zh: '温暖；热情' },
    { en: 'whisper',  zh: '耳语；低语' },
    { en: 'witness',  zh: '目击者；见证' },
    { en: 'wrinkle',  zh: '皱纹；褶皱' },
    { en: 'yield',    zh: '产出；屈服' },
    { en: 'zealous',  zh: '热情的；热心的' },
  ],

  'CET-6': [
    { en: 'abolish',  zh: '废除；取消' },
    { en: 'absurd',   zh: '荒谬的；可笑的' },
    { en: 'acknowledge', zh: '承认；确认' },
    { en: 'acquaint', zh: '使熟悉；使认识' },
    { en: 'agitate',  zh: '煽动；搅动' },
    { en: 'alienate', zh: '疏远；离间' },
    { en: 'ambiguous',zh: '模糊的；模棱两可的' },
    { en: 'anonymous',zh: '匿名的；无名的' },
    { en: 'applaud',  zh: '鼓掌；称赞' },
    { en: 'aspire',   zh: '渴望；立志' },
    { en: 'barren',   zh: '贫瘠的； barren' },
    { en: 'beforehand',zh: '预先；事先' },
    { en: 'betray',   zh: '背叛；出卖' },
    { en: 'bewilder', zh: '使迷惑；使困惑' },
    { en: 'blossom',  zh: '开花；繁荣' },
    { en: 'boycott',  zh: '抵制；联合抵制' },
    { en: 'brisk',    zh: '轻快的； brisk' },
    { en: 'brutal',   zh: '残忍的；野蛮的' },
    { en: 'capsule',  zh: '胶囊；太空舱' },
    { en: 'cathedral',zh: '大教堂' },
    { en: 'cherish',  zh: '珍爱；珍惜' },
    { en: 'chronic',  zh: '慢性的；长期的' },
    { en: 'clumsy',   zh: '笨拙的； clumsy' },
    { en: 'coincide', zh: '同时发生；巧合' },
    { en: 'colonial', zh: '殖民地的' },
    { en: 'compact',  zh: '紧凑的；小巧的' },
    { en: 'compile',  zh: '编译；编纂' },
    { en: 'comply',   zh: '遵守；服从' },
    { en: 'conceive', zh: '构思；怀孕' },
    { en: 'conscience',zh:'良心；良知' },
    { en: 'console',  zh: '安慰；控制台' },
    { en: 'contempt', zh: '蔑视；轻视' },
    { en: 'corrode',  zh: '腐蚀；侵蚀' },
    { en: 'crisp',    zh: '脆的； crisp' },
    { en: 'dedicate', zh: '奉献；致力于' },
    { en: 'defy',     zh: '违抗；藐视' },
    { en: 'deprive',  zh: '剥夺；使丧失' },
    { en: 'destiny',  zh: '命运；天命' },
    { en: 'dilemma',  zh: '困境；两难' },
    { en: 'dilute',   zh: '稀释；冲淡' },
    { en: 'dismay',   zh: '使沮丧； dismay' },
    { en: 'disperse', zh: '分散；驱散' },
    { en: 'drought',  zh: '干旱；旱灾' },
    { en: 'dwell',    zh: '居住； dwell' },
    { en: 'eclipse',  zh: '日食；月食；黯然失色' },
    { en: 'elapse',   zh: '流逝；消逝' },
    { en: 'eloquent', zh: '雄辩的；有口才的' },
    { en: 'enchant',  zh: '使着迷；施魔法' },
    { en: 'eternal',  zh: '永恒的；不朽的' },
    { en: 'exile',    zh: '流放；放逐' },
    { en: 'fable',    zh: '寓言；传说' },
    { en: 'feeble',   zh: '虚弱的；无力的' },
    { en: 'flaw',     zh: '瑕疵；缺陷' },
    { en: 'fragile',  zh: '脆弱的；易碎的' },
    { en: 'friction', zh: '摩擦；冲突' },
    { en: 'gasp',     zh: '喘息；倒抽气' },
    { en: 'glitter',  zh: '闪光；闪烁' },
    { en: 'gloom',    zh: '忧郁；阴暗' },
    { en: 'gracious', zh: '亲切的；仁慈的' },
    { en: 'grim',     zh: '严厉的； grim' },
    { en: 'handicap', zh: '障碍；残疾' },
    { en: 'haunt',    zh: '萦绕；出没' },
    { en: 'hinder',   zh: '阻碍；妨碍' },
    { en: 'humiliate',zh: '羞辱；使丢脸' },
    { en: 'illusion', zh: '幻觉；错觉' },
    { en: 'imitate',  zh: '模仿；仿效' },
    { en: 'indignant',zh:'愤慨的；愤怒的' },
    { en: 'intact',   zh: '完整的； intact' },
    { en: 'intricate',zh:'复杂的；错综的' },
    { en: 'knit',     zh: '编织； knit' },
    { en: 'linger',   zh: '徘徊；逗留' },
    { en: 'luminous', zh: '发光的；明亮的' },
    { en: 'majestic', zh: '雄伟的；壮丽的' },
    { en: 'menace',   zh: '威胁；恐吓' },
    { en: 'mingle',   zh: '混合；交往' },
    { en: 'mourn',    zh: '哀悼； mourn' },
    { en: 'neglect',  zh: '忽视；疏忽' },
    { en: 'notorious',zh:'声名狼藉的；臭名昭著的' },
    { en: 'obscure',  zh: '模糊的； obscure' },
    { en: 'ornament', zh: '装饰品；点缀' },
    { en: 'paradox',  zh: '悖论；矛盾' },
    { en: 'pasture',  zh: '牧场；草原' },
    { en: 'perish',   zh: '灭亡；消亡' },
    { en: 'plead',    zh: '恳求；辩护' },
    { en: 'ponder',   zh: '沉思；考虑' },
    { en: 'preach',   zh: ' preach' },
    { en: 'precede',  zh: '先于；在之前' },
    { en: 'prophet',  zh: '先知；预言家' },
    { en: 'radiant',  zh: '光芒四射的；容光焕发的' },
    { en: 'realm',    zh: '领域；王国' },
    { en: 'reap',     zh: '收获；收割' },
    { en: 'rejoice',  zh: '喜悦；高兴' },
    { en: 'relish',   zh: ' relish' },
    { en: 'savage',   zh: '野蛮的； savage' },
    { en: 'scorn',    zh: '蔑视；嘲笑' },
    { en: 'serene',   zh: '宁静的；安详的' },
    { en: 'shrewd',   zh: '精明的； shrewd' },
    { en: 'soar',     zh: '翱翔；高飞' },
    { en: 'solitude', zh: '孤独； solitude' },
    { en: 'sparkle',  zh: '闪闪发光' },
    { en: 'stroll',   zh: '漫步；闲逛' },
    { en: 'swamp',    zh: '沼泽； swamp' },
    { en: 'swift',    zh: '迅速的； swift' },
    { en: 'tangle',   zh: '纠缠； tangle' },
    { en: 'thrive',   zh: '繁荣；兴旺' },
    { en: 'timid',    zh: '胆小的；害羞的' },
    { en: 'torture',  zh: '折磨；酷刑' },
    { en: 'tribute',  zh: ' tribute' },
    { en: 'trigger',  zh: '触发；引起' },
    { en: 'uphold',   zh: '维护； uphold' },
    { en: 'vigor',    zh: '活力；精力' },
    { en: 'vivid',    zh: '生动的；鲜明的' },
    { en: 'vulnerable',zh:'脆弱的；易受伤的' },
    { en: 'warrant',  zh: ' warrant' },
    { en: 'weary',    zh: '疲倦的；厌倦的' },
    { en: 'wither',   zh: '枯萎；凋谢' },
    { en: 'wreck',    zh: ' wreck' },
    { en: 'yearn',    zh: '渴望； yearning' },
    { en: 'zeal',     zh: '热情；热心' },
  ],

  'IELTS': [
    { en: 'abundance',zh: '丰富；充裕' },
    { en: 'accommodate',zh:'容纳；提供住宿' },
    { en: 'adolescent',zh:'青少年' },
    { en: 'advocate', zh: '提倡；倡导者' },
    { en: 'aesthetic',zh: '美学的；审美的' },
    { en: 'alleviate',zh: '减轻；缓解' },
    { en: 'analogy',  zh: '类比；比喻' },
    { en: 'apparatus',zh: '仪器；设备' },
    { en: 'articulate',zh:'清晰表达的；口齿伶俐的' },
    { en: 'ascertain',zh: '查明；确定' },
    { en: 'bias',     zh: '偏见；偏向' },
    { en: 'bureaucracy',zh:'官僚体制' },
    { en: 'chancellor',zh:'总理；大臣' },
    { en: 'coherent', zh: '连贯的；一致的' },
    { en: 'commence', zh: '开始；着手' },
    { en: 'commodity',zh: '商品；货物' },
    { en: 'compensate',zh:'补偿；赔偿' },
    { en: 'component',zh: '组成部分；成分' },
    { en: 'comprehensive',zh:'全面的；综合的' },
    { en: 'conceive', zh: '构思；设想' },
    { en: 'confer',   zh: '授予；协商' },
    { en: 'consensus',zh: '共识；一致意见' },
    { en: 'constitute',zh:'构成；组成' },
    { en: 'contemporary',zh:'当代的；同时代的' },
    { en: 'contradict',zh:'矛盾；反驳' },
    { en: 'controversy',zh:'争议；争论' },
    { en: 'coordinate',zh:'协调；坐标' },
    { en: 'criteria', zh: '标准；准则' },
    { en: 'definite', zh: '明确的；确定的' },
    { en: 'demographic',zh:'人口统计的' },
    { en: 'denote',   zh: '表示；指示' },
    { en: 'depict',   zh: '描述；描绘' },
    { en: 'derive',   zh: '得到；源自' },
    { en: 'diminish', zh: '减少；缩小' },
    { en: 'discrete', zh: '离散的；分离的' },
    { en: 'discriminate',zh:'歧视；区分' },
    { en: 'displace', zh: '取代； displaced' },
    { en: 'domain',   zh: '领域；范围' },
    { en: 'draft',    zh: ' draft' },
    { en: 'elicit',   zh: '引出； eliciting' },
    { en: 'empirical',zh: '经验的；实证的' },
    { en: 'enhance',  zh: '增强；提高' },
    { en: 'enormous', zh: '巨大的；庞大的' },
    { en: 'entity',   zh: '实体；存在' },
    { en: 'equilibrium',zh:'平衡；均衡' },
    { en: 'erode',    zh: '侵蚀；腐蚀' },
    { en: 'ethnic',   zh: '种族的；民族的' },
    { en: 'evolve',   zh: '发展；进化' },
    { en: 'explicit', zh: '明确的；直截了当的' },
    { en: 'exploit',  zh: '开发；利用' },
    { en: 'facilitate',zh:'促进；使便利' },
    { en: 'fluctuate',zh: '波动；涨落' },
    { en: 'formulate',zh: '规划；制定' },
    { en: 'fossil',   zh: '化石；守旧的人' },
    { en: 'framework',zh: '框架；结构' },
    { en: 'genome',   zh: '基因组' },
    { en: 'habitat',  zh: '栖息地；生存环境' },
    { en: 'hierarchy',zh: '等级制度；层次' },
    { en: 'ideology', zh: '意识形态；思想体系' },
    { en: 'immerse',  zh: ' immerse' },
    { en: 'immigrant',zh: '移民；外来者' },
    { en: 'implement',zh: '实施；执行' },
    { en: 'implicit', zh: '含蓄的；暗示的' },
    { en: 'impose',   zh: ' impose' },
    { en: 'incentive',zh: '激励；奖励' },
    { en: 'indigenous',zh:'土著的；本地的' },
    { en: 'infrastructure',zh:'基础设施' },
    { en: 'inherent', zh: '固有的；内在的' },
    { en: 'innovation',zh:'创新；革新' },
    { en: 'integrate',zh: '整合；融合' },
    { en: 'interpret',zh: '解释；口译' },
    { en: 'justify',  zh: ' justify' },
    { en: 'legislate',zh: '立法；制定法律' },
    { en: 'levy',     zh: ' levy' },
    { en: 'mechanism',zh: '机制；原理' },
    { en: 'migrate',  zh: '迁移；移居' },
    { en: 'negotiate',zh: '谈判；协商' },
    { en: 'notion',   zh: '概念；观念' },
    { en: 'outcome',  zh: '结果；成果' },
    { en: 'paradigm', zh: '范例；范式' },
    { en: 'perceive', zh: '感知；察觉' },
    { en: 'phenomenon',zh:'现象；奇迹' },
    { en: 'philosophy',zh:'哲学；理念' },
    { en: 'plausible',zh: '看似合理的' },
    { en: 'polarize', zh: ' polarize' },
    { en: 'potential',zh: '潜力；潜在的' },
    { en: 'predominant',zh:'主导的；优势的' },
    { en: 'preliminary',zh:'初步的；预备的' },
    { en: 'presume',  zh: ' presume' },
    { en: 'profound', zh: '深刻的；深远的' },
    { en: 'prohibit', zh: '禁止；阻止' },
    { en: 'proportion',zh:'比例；部分' },
    { en: 'protocol', zh: '协议；礼仪' },
    { en: 'qualitative',zh:'定性的；质的' },
    { en: 'rational', zh: '理性的；合理的' },
    { en: 'refine',   zh: '精炼；改进' },
    { en: 'regime',   zh: '政权；制度' },
    { en: 'reluctant',zh: '不情愿的；勉强的' },
    { en: 'revenue',  zh: '收入；税收' },
    { en: 'revolution',zh:'革命；变革' },
    { en: 'scenario', zh: '场景；方案' },
    { en: 'scheme',   zh: '方案；计划' },
    { en: 'simulate', zh: '模拟；仿真' },
    { en: 'sophisticated',zh:'复杂的；精密的' },
    { en: 'statistics',zh:'统计学；数据' },
    { en: 'stimulus', zh: '刺激；激励' },
    { en: 'subordinate',zh:'下属的；从属的' },
    { en: 'sustain',  zh: '维持；支撑' },
    { en: 'synthesis',zh: '综合；合成' },
    { en: 'tension',  zh: '紧张；张力' },
    { en: 'terminal', zh: '终端的；末端的' },
    { en: 'transit',  zh: '运输；中转' },
    { en: 'treaty',   zh: '条约；协议' },
    { en: 'undermine',zh: '削弱；破坏' },
    { en: 'undergo',  zh: '经历； undergo' },
    { en: 'valid',    zh: '有效的；合理的' },
    { en: 'voluntary',zh: '自愿的；志愿的' },
    { en: 'whereby',  zh: ' whereby' },
    { en: 'widespread',zh:'广泛的；普遍的' },
  ]
};


/* ============================================================
   v0.9.6 词库扩展包：补全主题词量 + 综合乱序分类
   游戏仍读取 en / zh；pos、tag、example、tip 会作为后续学习面板预留数据。
   ============================================================ */
const WORD_BANK_META = {
  'CET-4': { icon: '📘', desc: '四级核心与日常高频词', color: '#6FA8DC' },
  'CET-6': { icon: '📙', desc: '六级进阶与抽象表达', color: '#F6B26B' },
  'IELTS': { icon: '📕', desc: '雅思学术与议论文词汇', color: '#E06666' },
  '高考核心': { icon: '🎓', desc: '高中常见阅读、完形与写作词', color: '#93C47D' },
  '商务职场': { icon: '💼', desc: '会议、项目、沟通与职场表达', color: '#8E7CC3' },
  '科技互联网': { icon: '💻', desc: 'AI、网络、产品与数字生活', color: '#76A5AF' },
  '自然环境': { icon: '🌿', desc: '生态、气候、地理与环境保护', color: '#6AA84F' },
  '旅行生活': { icon: '🧳', desc: '出行、住宿、餐饮和日常场景', color: '#F1C232' },
  '学术写作': { icon: '📝', desc: '论证、比较、研究与图表描述', color: '#A64D79' },
  '情绪性格': { icon: '🌈', desc: '心理状态、人物性格与社交表达', color: '#C27BA0' },
  '医疗健康': { icon: '🩺', desc: '身体、健康、症状与护理词汇', color: '#6D9EEB' },
  '新闻社会': { icon: '📰', desc: '公共议题、媒体、法律与社会变化', color: '#B45F06' },
  '艺术文化': { icon: '🎨', desc: '文学、音乐、电影、审美和传统', color: '#CC0000' },
  '词根进阶': { icon: '🧩', desc: '常见词根、前后缀相关的进阶词', color: '#674EA7' },
  '综合乱序': { icon: '🎲', desc: '从各大词汇分类中打散抽取，适合混合复习', color: '#5E7B62' },
};

const WORD_BANK_EXPANSION = {
  "高考核心": [
    {"en": "accept", "zh": "接受；认可", "pos": "v.", "tag": "态度", "example": "Use 'accept' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：态度"},
    {"en": "active", "zh": "积极的；活跃的", "pos": "adj.", "tag": "性格", "example": "Use 'active' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：性格"},
    {"en": "address", "zh": "地址；演讲；处理", "pos": "n./v.", "tag": "多义", "example": "Use 'address' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：多义"},
    {"en": "admire", "zh": "钦佩；欣赏", "pos": "v.", "tag": "情感", "example": "Use 'admire' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：情感"},
    {"en": "advice", "zh": "建议；忠告", "pos": "n.", "tag": "写作", "example": "Use 'advice' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：写作"},
    {"en": "afford", "zh": "负担得起", "pos": "v.", "tag": "生活", "example": "Use 'afford' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：生活"},
    {"en": "allow", "zh": "允许；准许", "pos": "v.", "tag": "规则", "example": "Use 'allow' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：规则"},
    {"en": "amaze", "zh": "使惊讶", "pos": "v.", "tag": "情绪", "example": "Use 'amaze' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：情绪"},
    {"en": "ancient", "zh": "古代的", "pos": "adj.", "tag": "历史", "example": "Use 'ancient' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：历史"},
    {"en": "appear", "zh": "出现；似乎", "pos": "v.", "tag": "高频", "example": "Use 'appear' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：高频"},
    {"en": "arrange", "zh": "安排；整理", "pos": "v.", "tag": "计划", "example": "Use 'arrange' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：计划"},
    {"en": "attend", "zh": "参加；出席", "pos": "v.", "tag": "校园", "example": "Use 'attend' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：校园"},
    {"en": "avoid", "zh": "避免；避开", "pos": "v.", "tag": "策略", "example": "Use 'avoid' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：策略"},
    {"en": "basic", "zh": "基本的；基础的", "pos": "adj.", "tag": "高频", "example": "Use 'basic' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：高频"},
    {"en": "believe", "zh": "相信；认为", "pos": "v.", "tag": "观点", "example": "Use 'believe' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：观点"},
    {"en": "borrow", "zh": "借入", "pos": "v.", "tag": "生活", "example": "Use 'borrow' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：生活"},
    {"en": "brain", "zh": "大脑；智力", "pos": "n.", "tag": "身体", "example": "Use 'brain' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：身体"},
    {"en": "cancel", "zh": "取消", "pos": "v.", "tag": "安排", "example": "Use 'cancel' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：安排"},
    {"en": "careful", "zh": "仔细的；小心的", "pos": "adj.", "tag": "性格", "example": "Use 'careful' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：性格"},
    {"en": "cause", "zh": "原因；导致", "pos": "n./v.", "tag": "因果", "example": "Use 'cause' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：因果"},
    {"en": "certain", "zh": "确定的；某个", "pos": "adj.", "tag": "判断", "example": "Use 'certain' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：判断"},
    {"en": "chance", "zh": "机会；可能性", "pos": "n.", "tag": "抽象", "example": "Use 'chance' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：抽象"},
    {"en": "choice", "zh": "选择", "pos": "n.", "tag": "决策", "example": "Use 'choice' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：决策"},
    {"en": "common", "zh": "常见的；共同的", "pos": "adj.", "tag": "高频", "example": "Use 'common' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：高频"},
    {"en": "complete", "zh": "完成；完整的", "pos": "v./adj.", "tag": "任务", "example": "Use 'complete' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：任务"},
    {"en": "condition", "zh": "条件；状况", "pos": "n.", "tag": "环境", "example": "Use 'condition' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：环境"},
    {"en": "consider", "zh": "考虑；认为", "pos": "v.", "tag": "思考", "example": "Use 'consider' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：思考"},
    {"en": "continue", "zh": "继续", "pos": "v.", "tag": "动作", "example": "Use 'continue' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：动作"},
    {"en": "control", "zh": "控制；管理", "pos": "n./v.", "tag": "管理", "example": "Use 'control' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：管理"},
    {"en": "culture", "zh": "文化", "pos": "n.", "tag": "社会", "example": "Use 'culture' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：社会"},
    {"en": "decision", "zh": "决定", "pos": "n.", "tag": "决策", "example": "Use 'decision' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：决策"},
    {"en": "develop", "zh": "发展；培养", "pos": "v.", "tag": "成长", "example": "Use 'develop' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：成长"},
    {"en": "difference", "zh": "差异；不同", "pos": "n.", "tag": "比较", "example": "Use 'difference' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：比较"},
    {"en": "direction", "zh": "方向；指导", "pos": "n.", "tag": "空间", "example": "Use 'direction' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：空间"},
    {"en": "discover", "zh": "发现", "pos": "v.", "tag": "探索", "example": "Use 'discover' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：探索"},
    {"en": "distance", "zh": "距离；远方", "pos": "n.", "tag": "空间", "example": "Use 'distance' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：空间"},
    {"en": "education", "zh": "教育", "pos": "n.", "tag": "校园", "example": "Use 'education' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：校园"},
    {"en": "effort", "zh": "努力", "pos": "n.", "tag": "品质", "example": "Use 'effort' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：品质"},
    {"en": "encourage", "zh": "鼓励", "pos": "v.", "tag": "社交", "example": "Use 'encourage' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：社交"},
    {"en": "energy", "zh": "能量；精力", "pos": "n.", "tag": "科学", "example": "Use 'energy' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：科学"},
    {"en": "environment", "zh": "环境", "pos": "n.", "tag": "自然", "example": "Use 'environment' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：自然"},
    {"en": "especially", "zh": "尤其；特别", "pos": "adv.", "tag": "强调", "example": "Use 'especially' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：强调"},
    {"en": "example", "zh": "例子；榜样", "pos": "n.", "tag": "写作", "example": "Use 'example' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：写作"},
    {"en": "excellent", "zh": "优秀的", "pos": "adj.", "tag": "评价", "example": "Use 'excellent' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：评价"},
    {"en": "experience", "zh": "经验；经历", "pos": "n./v.", "tag": "成长", "example": "Use 'experience' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：成长"},
    {"en": "explain", "zh": "解释；说明", "pos": "v.", "tag": "表达", "example": "Use 'explain' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：表达"},
    {"en": "famous", "zh": "著名的", "pos": "adj.", "tag": "人物", "example": "Use 'famous' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：人物"},
    {"en": "foreign", "zh": "外国的；陌生的", "pos": "adj.", "tag": "文化", "example": "Use 'foreign' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：文化"},
    {"en": "future", "zh": "未来；将来", "pos": "n.", "tag": "时间", "example": "Use 'future' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：时间"},
    {"en": "habit", "zh": "习惯", "pos": "n.", "tag": "生活", "example": "Use 'habit' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：生活"},
    {"en": "improve", "zh": "改进；提高", "pos": "v.", "tag": "学习", "example": "Use 'improve' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：学习"},
    {"en": "include", "zh": "包括；包含", "pos": "v.", "tag": "逻辑", "example": "Use 'include' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：逻辑"},
    {"en": "instead", "zh": "代替；反而", "pos": "adv.", "tag": "转折", "example": "Use 'instead' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：转折"},
    {"en": "interest", "zh": "兴趣；利益", "pos": "n.", "tag": "情感", "example": "Use 'interest' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：情感"},
    {"en": "knowledge", "zh": "知识", "pos": "n.", "tag": "学习", "example": "Use 'knowledge' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：学习"},
    {"en": "language", "zh": "语言", "pos": "n.", "tag": "学习", "example": "Use 'language' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：学习"},
    {"en": "meaning", "zh": "意义；意思", "pos": "n.", "tag": "理解", "example": "Use 'meaning' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：理解"},
    {"en": "method", "zh": "方法", "pos": "n.", "tag": "学习", "example": "Use 'method' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：学习"},
    {"en": "modern", "zh": "现代的", "pos": "adj.", "tag": "时间", "example": "Use 'modern' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：时间"},
    {"en": "necessary", "zh": "必要的", "pos": "adj.", "tag": "判断", "example": "Use 'necessary' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：判断"},
    {"en": "notice", "zh": "注意；通知", "pos": "n./v.", "tag": "观察", "example": "Use 'notice' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：观察"},
    {"en": "opinion", "zh": "观点；看法", "pos": "n.", "tag": "表达", "example": "Use 'opinion' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：表达"},
    {"en": "ordinary", "zh": "普通的；平常的", "pos": "adj.", "tag": "描述", "example": "Use 'ordinary' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：描述"},
    {"en": "perfect", "zh": "完美的", "pos": "adj.", "tag": "评价", "example": "Use 'perfect' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：评价"},
    {"en": "prepare", "zh": "准备", "pos": "v.", "tag": "计划", "example": "Use 'prepare' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：计划"},
    {"en": "protect", "zh": "保护", "pos": "v.", "tag": "安全", "example": "Use 'protect' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：安全"},
    {"en": "purpose", "zh": "目的；意图", "pos": "n.", "tag": "写作", "example": "Use 'purpose' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：写作"},
    {"en": "realize", "zh": "意识到；实现", "pos": "v.", "tag": "认知", "example": "Use 'realize' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：认知"},
    {"en": "reason", "zh": "理由；原因", "pos": "n.", "tag": "因果", "example": "Use 'reason' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：因果"},
    {"en": "receive", "zh": "收到；接待", "pos": "v.", "tag": "交流", "example": "Use 'receive' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：交流"},
    {"en": "remember", "zh": "记得；记住", "pos": "v.", "tag": "学习", "example": "Use 'remember' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：学习"},
    {"en": "require", "zh": "要求；需要", "pos": "v.", "tag": "规则", "example": "Use 'require' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：规则"},
    {"en": "result", "zh": "结果；成绩", "pos": "n.", "tag": "因果", "example": "Use 'result' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：因果"},
    {"en": "science", "zh": "科学", "pos": "n.", "tag": "学科", "example": "Use 'science' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：学科"},
    {"en": "serious", "zh": "严肃的；严重的", "pos": "adj.", "tag": "程度", "example": "Use 'serious' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：程度"},
    {"en": "similar", "zh": "相似的", "pos": "adj.", "tag": "比较", "example": "Use 'similar' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：比较"},
    {"en": "society", "zh": "社会", "pos": "n.", "tag": "群体", "example": "Use 'society' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：群体"},
    {"en": "special", "zh": "特别的；专门的", "pos": "adj.", "tag": "描述", "example": "Use 'special' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：描述"},
    {"en": "success", "zh": "成功", "pos": "n.", "tag": "目标", "example": "Use 'success' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：目标"},
    {"en": "suggest", "zh": "建议；暗示", "pos": "v.", "tag": "表达", "example": "Use 'suggest' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：表达"},
    {"en": "support", "zh": "支持；支撑", "pos": "v./n.", "tag": "社交", "example": "Use 'support' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：社交"},
    {"en": "surprise", "zh": "惊喜；使惊讶", "pos": "n./v.", "tag": "情绪", "example": "Use 'surprise' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：情绪"},
    {"en": "technology", "zh": "技术", "pos": "n.", "tag": "科技", "example": "Use 'technology' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：科技"},
    {"en": "though", "zh": "虽然；不过", "pos": "conj.", "tag": "转折", "example": "Use 'though' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：转折"},
    {"en": "traffic", "zh": "交通", "pos": "n.", "tag": "城市", "example": "Use 'traffic' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：城市"},
    {"en": "valuable", "zh": "有价值的", "pos": "adj.", "tag": "评价", "example": "Use 'valuable' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：评价"},
    {"en": "volunteer", "zh": "志愿者；自愿做", "pos": "n./v.", "tag": "社会", "example": "Use 'volunteer' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：社会"},
    {"en": "weather", "zh": "天气", "pos": "n.", "tag": "自然", "example": "Use 'weather' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：自然"},
    {"en": "wonderful", "zh": "精彩的；极好的", "pos": "adj.", "tag": "评价", "example": "Use 'wonderful' in a short typing challenge to remember its meaning.", "tip": "分类：高考核心 · 标签：评价"},
  ],
  "商务职场": [
    {"en": "agenda", "zh": "议程；待办事项", "pos": "n.", "tag": "会议", "example": "Use 'agenda' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：会议"},
    {"en": "align", "zh": "使一致；对齐", "pos": "v.", "tag": "协作", "example": "Use 'align' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：协作"},
    {"en": "annual", "zh": "年度的", "pos": "adj.", "tag": "时间", "example": "Use 'annual' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：时间"},
    {"en": "approve", "zh": "批准；认可", "pos": "v.", "tag": "流程", "example": "Use 'approve' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：流程"},
    {"en": "asset", "zh": "资产；有价值的人", "pos": "n.", "tag": "财务", "example": "Use 'asset' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：财务"},
    {"en": "audit", "zh": "审计；检查", "pos": "n./v.", "tag": "财务", "example": "Use 'audit' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：财务"},
    {"en": "budget", "zh": "预算", "pos": "n.", "tag": "财务", "example": "Use 'budget' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：财务"},
    {"en": "campaign", "zh": "活动；营销战役", "pos": "n.", "tag": "市场", "example": "Use 'campaign' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：市场"},
    {"en": "capacity", "zh": "容量；能力", "pos": "n.", "tag": "资源", "example": "Use 'capacity' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：资源"},
    {"en": "client", "zh": "客户", "pos": "n.", "tag": "商务", "example": "Use 'client' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：商务"},
    {"en": "collaborate", "zh": "合作；协作", "pos": "v.", "tag": "团队", "example": "Use 'collaborate' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：团队"},
    {"en": "commission", "zh": "佣金；委员会", "pos": "n.", "tag": "商务", "example": "Use 'commission' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：商务"},
    {"en": "contract", "zh": "合同；订立合同", "pos": "n./v.", "tag": "法律", "example": "Use 'contract' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：法律"},
    {"en": "deadline", "zh": "截止日期", "pos": "n.", "tag": "项目", "example": "Use 'deadline' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：项目"},
    {"en": "delegate", "zh": "委派；代表", "pos": "v./n.", "tag": "管理", "example": "Use 'delegate' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：管理"},
    {"en": "deliverable", "zh": "交付成果", "pos": "n.", "tag": "项目", "example": "Use 'deliverable' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：项目"},
    {"en": "department", "zh": "部门", "pos": "n.", "tag": "组织", "example": "Use 'department' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：组织"},
    {"en": "efficiency", "zh": "效率", "pos": "n.", "tag": "管理", "example": "Use 'efficiency' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：管理"},
    {"en": "enterprise", "zh": "企业；事业", "pos": "n.", "tag": "组织", "example": "Use 'enterprise' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：组织"},
    {"en": "estimate", "zh": "估计；报价", "pos": "v./n.", "tag": "项目", "example": "Use 'estimate' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：项目"},
    {"en": "feedback", "zh": "反馈", "pos": "n.", "tag": "沟通", "example": "Use 'feedback' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：沟通"},
    {"en": "finance", "zh": "金融；财务", "pos": "n.", "tag": "财务", "example": "Use 'finance' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：财务"},
    {"en": "forecast", "zh": "预测；预报", "pos": "n./v.", "tag": "规划", "example": "Use 'forecast' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：规划"},
    {"en": "invoice", "zh": "发票；开票", "pos": "n./v.", "tag": "财务", "example": "Use 'invoice' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：财务"},
    {"en": "launch", "zh": "发布；启动", "pos": "v./n.", "tag": "产品", "example": "Use 'launch' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：产品"},
    {"en": "leadership", "zh": "领导力", "pos": "n.", "tag": "管理", "example": "Use 'leadership' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：管理"},
    {"en": "margin", "zh": "利润率；边缘", "pos": "n.", "tag": "财务", "example": "Use 'margin' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：财务"},
    {"en": "meeting", "zh": "会议；会面", "pos": "n.", "tag": "会议", "example": "Use 'meeting' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：会议"},
    {"en": "negotiate", "zh": "谈判；协商", "pos": "v.", "tag": "沟通", "example": "Use 'negotiate' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：沟通"},
    {"en": "objective", "zh": "目标；客观的", "pos": "n./adj.", "tag": "规划", "example": "Use 'objective' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：规划"},
    {"en": "operation", "zh": "运营；操作", "pos": "n.", "tag": "管理", "example": "Use 'operation' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：管理"},
    {"en": "partnership", "zh": "合作关系", "pos": "n.", "tag": "商务", "example": "Use 'partnership' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：商务"},
    {"en": "pipeline", "zh": "业务管线；流程", "pos": "n.", "tag": "销售", "example": "Use 'pipeline' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：销售"},
    {"en": "priority", "zh": "优先事项", "pos": "n.", "tag": "管理", "example": "Use 'priority' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：管理"},
    {"en": "proposal", "zh": "提案；建议书", "pos": "n.", "tag": "写作", "example": "Use 'proposal' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：写作"},
    {"en": "quarterly", "zh": "季度的", "pos": "adj.", "tag": "时间", "example": "Use 'quarterly' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：时间"},
    {"en": "recruit", "zh": "招聘；新成员", "pos": "v./n.", "tag": "人事", "example": "Use 'recruit' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：人事"},
    {"en": "refund", "zh": "退款", "pos": "n./v.", "tag": "交易", "example": "Use 'refund' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：交易"},
    {"en": "revenue", "zh": "收入", "pos": "n.", "tag": "财务", "example": "Use 'revenue' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：财务"},
    {"en": "schedule", "zh": "日程；安排", "pos": "n./v.", "tag": "时间", "example": "Use 'schedule' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：时间"},
    {"en": "stakeholder", "zh": "利益相关者", "pos": "n.", "tag": "项目", "example": "Use 'stakeholder' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：项目"},
    {"en": "strategy", "zh": "战略；策略", "pos": "n.", "tag": "规划", "example": "Use 'strategy' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：规划"},
    {"en": "supervise", "zh": "监督；管理", "pos": "v.", "tag": "管理", "example": "Use 'supervise' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：管理"},
    {"en": "supplier", "zh": "供应商", "pos": "n.", "tag": "供应链", "example": "Use 'supplier' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：供应链"},
    {"en": "target", "zh": "目标；对象", "pos": "n./v.", "tag": "市场", "example": "Use 'target' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：市场"},
    {"en": "transaction", "zh": "交易；事务", "pos": "n.", "tag": "财务", "example": "Use 'transaction' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：财务"},
    {"en": "workflow", "zh": "工作流程", "pos": "n.", "tag": "项目", "example": "Use 'workflow' in a short typing challenge to remember its meaning.", "tip": "分类：商务职场 · 标签：项目"},
  ],
  "科技互联网": [
    {"en": "algorithm", "zh": "算法", "pos": "n.", "tag": "AI", "example": "Use 'algorithm' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：AI"},
    {"en": "analytics", "zh": "数据分析", "pos": "n.", "tag": "数据", "example": "Use 'analytics' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：数据"},
    {"en": "archive", "zh": "归档；档案", "pos": "n./v.", "tag": "数据", "example": "Use 'archive' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：数据"},
    {"en": "automation", "zh": "自动化", "pos": "n.", "tag": "效率", "example": "Use 'automation' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：效率"},
    {"en": "bandwidth", "zh": "带宽；处理能力", "pos": "n.", "tag": "网络", "example": "Use 'bandwidth' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：网络"},
    {"en": "browser", "zh": "浏览器", "pos": "n.", "tag": "网络", "example": "Use 'browser' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：网络"},
    {"en": "cache", "zh": "缓存", "pos": "n./v.", "tag": "系统", "example": "Use 'cache' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：系统"},
    {"en": "cloud", "zh": "云；云端服务", "pos": "n.", "tag": "网络", "example": "Use 'cloud' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：网络"},
    {"en": "compile", "zh": "编译；汇编", "pos": "v.", "tag": "开发", "example": "Use 'compile' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：开发"},
    {"en": "component", "zh": "组件；组成部分", "pos": "n.", "tag": "开发", "example": "Use 'component' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：开发"},
    {"en": "console", "zh": "控制台；安慰", "pos": "n./v.", "tag": "开发", "example": "Use 'console' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：开发"},
    {"en": "database", "zh": "数据库", "pos": "n.", "tag": "数据", "example": "Use 'database' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：数据"},
    {"en": "debug", "zh": "调试", "pos": "v.", "tag": "开发", "example": "Use 'debug' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：开发"},
    {"en": "deploy", "zh": "部署；展开", "pos": "v.", "tag": "开发", "example": "Use 'deploy' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：开发"},
    {"en": "device", "zh": "设备；装置", "pos": "n.", "tag": "硬件", "example": "Use 'device' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：硬件"},
    {"en": "digital", "zh": "数字的", "pos": "adj.", "tag": "科技", "example": "Use 'digital' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：科技"},
    {"en": "encrypt", "zh": "加密", "pos": "v.", "tag": "安全", "example": "Use 'encrypt' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：安全"},
    {"en": "framework", "zh": "框架；结构", "pos": "n.", "tag": "开发", "example": "Use 'framework' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：开发"},
    {"en": "interface", "zh": "界面；接口", "pos": "n.", "tag": "产品", "example": "Use 'interface' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：产品"},
    {"en": "latency", "zh": "延迟", "pos": "n.", "tag": "网络", "example": "Use 'latency' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：网络"},
    {"en": "login", "zh": "登录", "pos": "n./v.", "tag": "账户", "example": "Use 'login' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：账户"},
    {"en": "module", "zh": "模块", "pos": "n.", "tag": "开发", "example": "Use 'module' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：开发"},
    {"en": "network", "zh": "网络；人脉", "pos": "n.", "tag": "网络", "example": "Use 'network' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：网络"},
    {"en": "platform", "zh": "平台", "pos": "n.", "tag": "产品", "example": "Use 'platform' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：产品"},
    {"en": "privacy", "zh": "隐私", "pos": "n.", "tag": "安全", "example": "Use 'privacy' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：安全"},
    {"en": "processor", "zh": "处理器", "pos": "n.", "tag": "硬件", "example": "Use 'processor' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：硬件"},
    {"en": "protocol", "zh": "协议；礼仪", "pos": "n.", "tag": "网络", "example": "Use 'protocol' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：网络"},
    {"en": "query", "zh": "查询；问题", "pos": "n./v.", "tag": "数据", "example": "Use 'query' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：数据"},
    {"en": "render", "zh": "渲染；呈现", "pos": "v.", "tag": "界面", "example": "Use 'render' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：界面"},
    {"en": "repository", "zh": "代码仓库；资料库", "pos": "n.", "tag": "开发", "example": "Use 'repository' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：开发"},
    {"en": "responsive", "zh": "响应式的；反应快的", "pos": "adj.", "tag": "界面", "example": "Use 'responsive' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：界面"},
    {"en": "script", "zh": "脚本；剧本", "pos": "n.", "tag": "开发", "example": "Use 'script' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：开发"},
    {"en": "server", "zh": "服务器", "pos": "n.", "tag": "网络", "example": "Use 'server' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：网络"},
    {"en": "session", "zh": "会话；阶段", "pos": "n.", "tag": "系统", "example": "Use 'session' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：系统"},
    {"en": "software", "zh": "软件", "pos": "n.", "tag": "开发", "example": "Use 'software' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：开发"},
    {"en": "storage", "zh": "存储；仓库", "pos": "n.", "tag": "数据", "example": "Use 'storage' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：数据"},
    {"en": "stream", "zh": "流；播放", "pos": "n./v.", "tag": "媒体", "example": "Use 'stream' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：媒体"},
    {"en": "synchronize", "zh": "同步", "pos": "v.", "tag": "系统", "example": "Use 'synchronize' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：系统"},
    {"en": "template", "zh": "模板", "pos": "n.", "tag": "设计", "example": "Use 'template' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：设计"},
    {"en": "terminal", "zh": "终端；末端的", "pos": "n./adj.", "tag": "开发", "example": "Use 'terminal' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：开发"},
    {"en": "token", "zh": "令牌；标记", "pos": "n.", "tag": "安全", "example": "Use 'token' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：安全"},
    {"en": "upload", "zh": "上传", "pos": "v.", "tag": "网络", "example": "Use 'upload' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：网络"},
    {"en": "username", "zh": "用户名", "pos": "n.", "tag": "账户", "example": "Use 'username' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：账户"},
    {"en": "virtual", "zh": "虚拟的；实际上的", "pos": "adj.", "tag": "科技", "example": "Use 'virtual' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：科技"},
    {"en": "wireless", "zh": "无线的", "pos": "adj.", "tag": "网络", "example": "Use 'wireless' in a short typing challenge to remember its meaning.", "tip": "分类：科技互联网 · 标签：网络"},
  ],
  "自然环境": [
    {"en": "atmosphere", "zh": "大气；氛围", "pos": "n.", "tag": "气候", "example": "Use 'atmosphere' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：气候"},
    {"en": "biodiversity", "zh": "生物多样性", "pos": "n.", "tag": "生态", "example": "Use 'biodiversity' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：生态"},
    {"en": "blizzard", "zh": "暴风雪", "pos": "n.", "tag": "天气", "example": "Use 'blizzard' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：天气"},
    {"en": "canyon", "zh": "峡谷", "pos": "n.", "tag": "地理", "example": "Use 'canyon' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：地理"},
    {"en": "carbon", "zh": "碳", "pos": "n.", "tag": "科学", "example": "Use 'carbon' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：科学"},
    {"en": "cliff", "zh": "悬崖", "pos": "n.", "tag": "地理", "example": "Use 'cliff' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：地理"},
    {"en": "conservation", "zh": "保护；保存", "pos": "n.", "tag": "环保", "example": "Use 'conservation' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：环保"},
    {"en": "coral", "zh": "珊瑚", "pos": "n.", "tag": "海洋", "example": "Use 'coral' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：海洋"},
    {"en": "creek", "zh": "小溪", "pos": "n.", "tag": "水文", "example": "Use 'creek' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：水文"},
    {"en": "drought", "zh": "干旱", "pos": "n.", "tag": "气候", "example": "Use 'drought' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：气候"},
    {"en": "ecosystem", "zh": "生态系统", "pos": "n.", "tag": "生态", "example": "Use 'ecosystem' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：生态"},
    {"en": "emission", "zh": "排放；散发", "pos": "n.", "tag": "环保", "example": "Use 'emission' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：环保"},
    {"en": "endangered", "zh": "濒危的", "pos": "adj.", "tag": "生态", "example": "Use 'endangered' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：生态"},
    {"en": "erosion", "zh": "侵蚀；腐蚀", "pos": "n.", "tag": "地理", "example": "Use 'erosion' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：地理"},
    {"en": "extinct", "zh": "灭绝的", "pos": "adj.", "tag": "生态", "example": "Use 'extinct' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：生态"},
    {"en": "fertile", "zh": "肥沃的；多产的", "pos": "adj.", "tag": "土地", "example": "Use 'fertile' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：土地"},
    {"en": "glacier", "zh": "冰川", "pos": "n.", "tag": "地理", "example": "Use 'glacier' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：地理"},
    {"en": "habitat", "zh": "栖息地", "pos": "n.", "tag": "生态", "example": "Use 'habitat' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：生态"},
    {"en": "hurricane", "zh": "飓风", "pos": "n.", "tag": "天气", "example": "Use 'hurricane' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：天气"},
    {"en": "landscape", "zh": "风景；地形", "pos": "n.", "tag": "地理", "example": "Use 'landscape' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：地理"},
    {"en": "meadow", "zh": "草地；牧场", "pos": "n.", "tag": "地貌", "example": "Use 'meadow' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：地貌"},
    {"en": "mineral", "zh": "矿物；矿物质", "pos": "n.", "tag": "科学", "example": "Use 'mineral' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：科学"},
    {"en": "mist", "zh": "薄雾", "pos": "n.", "tag": "天气", "example": "Use 'mist' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：天气"},
    {"en": "oasis", "zh": "绿洲", "pos": "n.", "tag": "地理", "example": "Use 'oasis' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：地理"},
    {"en": "organic", "zh": "有机的；器官的", "pos": "adj.", "tag": "科学", "example": "Use 'organic' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：科学"},
    {"en": "pollution", "zh": "污染", "pos": "n.", "tag": "环保", "example": "Use 'pollution' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：环保"},
    {"en": "rainforest", "zh": "雨林", "pos": "n.", "tag": "生态", "example": "Use 'rainforest' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：生态"},
    {"en": "recycle", "zh": "回收利用", "pos": "v.", "tag": "环保", "example": "Use 'recycle' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：环保"},
    {"en": "renewable", "zh": "可再生的", "pos": "adj.", "tag": "能源", "example": "Use 'renewable' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：能源"},
    {"en": "reservoir", "zh": "水库；储备", "pos": "n.", "tag": "水文", "example": "Use 'reservoir' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：水文"},
    {"en": "resource", "zh": "资源", "pos": "n.", "tag": "环保", "example": "Use 'resource' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：环保"},
    {"en": "savanna", "zh": "热带草原", "pos": "n.", "tag": "地理", "example": "Use 'savanna' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：地理"},
    {"en": "species", "zh": "物种", "pos": "n.", "tag": "生态", "example": "Use 'species' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：生态"},
    {"en": "stream", "zh": "溪流；流动", "pos": "n./v.", "tag": "水文", "example": "Use 'stream' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：水文"},
    {"en": "sustainable", "zh": "可持续的", "pos": "adj.", "tag": "环保", "example": "Use 'sustainable' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：环保"},
    {"en": "terrain", "zh": "地形；地势", "pos": "n.", "tag": "地理", "example": "Use 'terrain' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：地理"},
    {"en": "thunder", "zh": "雷；雷声", "pos": "n.", "tag": "天气", "example": "Use 'thunder' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：天气"},
    {"en": "valley", "zh": "山谷", "pos": "n.", "tag": "地理", "example": "Use 'valley' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：地理"},
    {"en": "vegetation", "zh": "植被", "pos": "n.", "tag": "生态", "example": "Use 'vegetation' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：生态"},
    {"en": "volcano", "zh": "火山", "pos": "n.", "tag": "地理", "example": "Use 'volcano' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：地理"},
    {"en": "wilderness", "zh": "荒野", "pos": "n.", "tag": "自然", "example": "Use 'wilderness' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：自然"},
    {"en": "wildlife", "zh": "野生动物", "pos": "n.", "tag": "生态", "example": "Use 'wildlife' in a short typing challenge to remember its meaning.", "tip": "分类：自然环境 · 标签：生态"},
  ],
  "旅行生活": [
    {"en": "accommodation", "zh": "住宿", "pos": "n.", "tag": "旅行", "example": "Use 'accommodation' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：旅行"},
    {"en": "aisle", "zh": "过道；通道", "pos": "n.", "tag": "交通", "example": "Use 'aisle' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "arrival", "zh": "到达；到来", "pos": "n.", "tag": "交通", "example": "Use 'arrival' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "baggage", "zh": "行李", "pos": "n.", "tag": "旅行", "example": "Use 'baggage' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：旅行"},
    {"en": "boarding", "zh": "登机；寄宿", "pos": "n.", "tag": "交通", "example": "Use 'boarding' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "booking", "zh": "预订", "pos": "n.", "tag": "安排", "example": "Use 'booking' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：安排"},
    {"en": "brochure", "zh": "宣传册", "pos": "n.", "tag": "旅游", "example": "Use 'brochure' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：旅游"},
    {"en": "cabin", "zh": "客舱；小屋", "pos": "n.", "tag": "交通", "example": "Use 'cabin' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "cashier", "zh": "收银员", "pos": "n.", "tag": "购物", "example": "Use 'cashier' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：购物"},
    {"en": "checkout", "zh": "结账；退房", "pos": "n.", "tag": "住宿", "example": "Use 'checkout' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：住宿"},
    {"en": "commute", "zh": "通勤", "pos": "v./n.", "tag": "城市", "example": "Use 'commute' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：城市"},
    {"en": "cuisine", "zh": "菜肴；烹饪风格", "pos": "n.", "tag": "饮食", "example": "Use 'cuisine' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：饮食"},
    {"en": "customs", "zh": "海关；习俗", "pos": "n.", "tag": "旅行", "example": "Use 'customs' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：旅行"},
    {"en": "delay", "zh": "延误；推迟", "pos": "n./v.", "tag": "交通", "example": "Use 'delay' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "departure", "zh": "离开；出发", "pos": "n.", "tag": "交通", "example": "Use 'departure' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "destination", "zh": "目的地", "pos": "n.", "tag": "旅行", "example": "Use 'destination' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：旅行"},
    {"en": "downtown", "zh": "市中心", "pos": "n./adv.", "tag": "城市", "example": "Use 'downtown' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：城市"},
    {"en": "fare", "zh": "票价；车费", "pos": "n.", "tag": "交通", "example": "Use 'fare' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "ferry", "zh": "渡船", "pos": "n.", "tag": "交通", "example": "Use 'ferry' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "itinerary", "zh": "行程安排", "pos": "n.", "tag": "旅行", "example": "Use 'itinerary' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：旅行"},
    {"en": "landmark", "zh": "地标；里程碑", "pos": "n.", "tag": "城市", "example": "Use 'landmark' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：城市"},
    {"en": "laundry", "zh": "洗衣物；洗衣店", "pos": "n.", "tag": "生活", "example": "Use 'laundry' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：生活"},
    {"en": "luggage", "zh": "行李", "pos": "n.", "tag": "旅行", "example": "Use 'luggage' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：旅行"},
    {"en": "menu", "zh": "菜单", "pos": "n.", "tag": "饮食", "example": "Use 'menu' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：饮食"},
    {"en": "museum", "zh": "博物馆", "pos": "n.", "tag": "文化", "example": "Use 'museum' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：文化"},
    {"en": "passport", "zh": "护照", "pos": "n.", "tag": "旅行", "example": "Use 'passport' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：旅行"},
    {"en": "receipt", "zh": "收据", "pos": "n.", "tag": "购物", "example": "Use 'receipt' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：购物"},
    {"en": "reservation", "zh": "预订；保留", "pos": "n.", "tag": "安排", "example": "Use 'reservation' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：安排"},
    {"en": "souvenir", "zh": "纪念品", "pos": "n.", "tag": "旅行", "example": "Use 'souvenir' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：旅行"},
    {"en": "subway", "zh": "地铁；地下通道", "pos": "n.", "tag": "交通", "example": "Use 'subway' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "suitcase", "zh": "手提箱", "pos": "n.", "tag": "旅行", "example": "Use 'suitcase' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：旅行"},
    {"en": "terminal", "zh": "航站楼；终点", "pos": "n.", "tag": "交通", "example": "Use 'terminal' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "ticket", "zh": "票；罚单", "pos": "n.", "tag": "交通", "example": "Use 'ticket' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "tourist", "zh": "游客", "pos": "n.", "tag": "旅行", "example": "Use 'tourist' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：旅行"},
    {"en": "traffic", "zh": "交通；车流", "pos": "n.", "tag": "城市", "example": "Use 'traffic' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：城市"},
    {"en": "transfer", "zh": "换乘；转移", "pos": "v./n.", "tag": "交通", "example": "Use 'transfer' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "vacation", "zh": "假期", "pos": "n.", "tag": "生活", "example": "Use 'vacation' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：生活"},
    {"en": "vehicle", "zh": "车辆；交通工具", "pos": "n.", "tag": "交通", "example": "Use 'vehicle' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：交通"},
    {"en": "visa", "zh": "签证", "pos": "n.", "tag": "旅行", "example": "Use 'visa' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：旅行"},
    {"en": "wallet", "zh": "钱包", "pos": "n.", "tag": "生活", "example": "Use 'wallet' in a short typing challenge to remember its meaning.", "tip": "分类：旅行生活 · 标签：生活"},
  ],
  "学术写作": [
    {"en": "abstract", "zh": "摘要；抽象的", "pos": "n./adj.", "tag": "论文", "example": "Use 'abstract' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：论文"},
    {"en": "analysis", "zh": "分析", "pos": "n.", "tag": "研究", "example": "Use 'analysis' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：研究"},
    {"en": "argue", "zh": "论证；争辩", "pos": "v.", "tag": "议论", "example": "Use 'argue' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：议论"},
    {"en": "assumption", "zh": "假设；前提", "pos": "n.", "tag": "逻辑", "example": "Use 'assumption' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：逻辑"},
    {"en": "cite", "zh": "引用；举例", "pos": "v.", "tag": "论文", "example": "Use 'cite' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：论文"},
    {"en": "clarify", "zh": "澄清；阐明", "pos": "v.", "tag": "表达", "example": "Use 'clarify' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：表达"},
    {"en": "coherent", "zh": "连贯的；一致的", "pos": "adj.", "tag": "写作", "example": "Use 'coherent' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：写作"},
    {"en": "compare", "zh": "比较；对照", "pos": "v.", "tag": "论证", "example": "Use 'compare' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：论证"},
    {"en": "conclude", "zh": "总结；断定", "pos": "v.", "tag": "结论", "example": "Use 'conclude' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：结论"},
    {"en": "contrast", "zh": "对比；差异", "pos": "n./v.", "tag": "论证", "example": "Use 'contrast' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：论证"},
    {"en": "correlation", "zh": "相关性", "pos": "n.", "tag": "统计", "example": "Use 'correlation' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：统计"},
    {"en": "data", "zh": "数据", "pos": "n.", "tag": "研究", "example": "Use 'data' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：研究"},
    {"en": "define", "zh": "定义；说明", "pos": "v.", "tag": "论文", "example": "Use 'define' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：论文"},
    {"en": "demonstrate", "zh": "证明；展示", "pos": "v.", "tag": "论证", "example": "Use 'demonstrate' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：论证"},
    {"en": "derive", "zh": "得到；起源于", "pos": "v.", "tag": "逻辑", "example": "Use 'derive' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：逻辑"},
    {"en": "evidence", "zh": "证据", "pos": "n.", "tag": "论证", "example": "Use 'evidence' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：论证"},
    {"en": "hypothesis", "zh": "假设", "pos": "n.", "tag": "研究", "example": "Use 'hypothesis' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：研究"},
    {"en": "illustrate", "zh": "说明；阐明", "pos": "v.", "tag": "举例", "example": "Use 'illustrate' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：举例"},
    {"en": "imply", "zh": "暗示；意味着", "pos": "v.", "tag": "逻辑", "example": "Use 'imply' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：逻辑"},
    {"en": "indicate", "zh": "表明；指出", "pos": "v.", "tag": "图表", "example": "Use 'indicate' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：图表"},
    {"en": "interpret", "zh": "解释；口译", "pos": "v.", "tag": "研究", "example": "Use 'interpret' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：研究"},
    {"en": "methodology", "zh": "方法论", "pos": "n.", "tag": "研究", "example": "Use 'methodology' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：研究"},
    {"en": "objective", "zh": "客观的；目标", "pos": "adj./n.", "tag": "论文", "example": "Use 'objective' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：论文"},
    {"en": "paragraph", "zh": "段落", "pos": "n.", "tag": "写作", "example": "Use 'paragraph' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：写作"},
    {"en": "perspective", "zh": "观点；视角", "pos": "n.", "tag": "议论", "example": "Use 'perspective' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：议论"},
    {"en": "qualitative", "zh": "定性的", "pos": "adj.", "tag": "研究", "example": "Use 'qualitative' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：研究"},
    {"en": "quantitative", "zh": "定量的", "pos": "adj.", "tag": "研究", "example": "Use 'quantitative' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：研究"},
    {"en": "reference", "zh": "参考；引用", "pos": "n.", "tag": "论文", "example": "Use 'reference' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：论文"},
    {"en": "relevant", "zh": "相关的", "pos": "adj.", "tag": "论证", "example": "Use 'relevant' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：论证"},
    {"en": "sample", "zh": "样本；样品", "pos": "n.", "tag": "统计", "example": "Use 'sample' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：统计"},
    {"en": "significant", "zh": "显著的；重要的", "pos": "adj.", "tag": "研究", "example": "Use 'significant' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：研究"},
    {"en": "summarize", "zh": "总结；概述", "pos": "v.", "tag": "写作", "example": "Use 'summarize' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：写作"},
    {"en": "thesis", "zh": "论文；论点", "pos": "n.", "tag": "论文", "example": "Use 'thesis' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：论文"},
    {"en": "transition", "zh": "过渡；转变", "pos": "n.", "tag": "写作", "example": "Use 'transition' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：写作"},
    {"en": "validity", "zh": "有效性；合理性", "pos": "n.", "tag": "研究", "example": "Use 'validity' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：研究"},
    {"en": "variable", "zh": "变量；可变的", "pos": "n./adj.", "tag": "统计", "example": "Use 'variable' in a short typing challenge to remember its meaning.", "tip": "分类：学术写作 · 标签：统计"},
  ],
  "情绪性格": [
    {"en": "ambitious", "zh": "有雄心的", "pos": "adj.", "tag": "性格", "example": "Use 'ambitious' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：性格"},
    {"en": "anxious", "zh": "焦虑的；担心的", "pos": "adj.", "tag": "情绪", "example": "Use 'anxious' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：情绪"},
    {"en": "awkward", "zh": "尴尬的；笨拙的", "pos": "adj.", "tag": "社交", "example": "Use 'awkward' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：社交"},
    {"en": "brave", "zh": "勇敢的", "pos": "adj.", "tag": "品质", "example": "Use 'brave' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "calm", "zh": "冷静的；平静的", "pos": "adj.", "tag": "情绪", "example": "Use 'calm' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：情绪"},
    {"en": "cheerful", "zh": "快乐的；开朗的", "pos": "adj.", "tag": "性格", "example": "Use 'cheerful' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：性格"},
    {"en": "confident", "zh": "自信的", "pos": "adj.", "tag": "品质", "example": "Use 'confident' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "curious", "zh": "好奇的", "pos": "adj.", "tag": "性格", "example": "Use 'curious' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：性格"},
    {"en": "diligent", "zh": "勤奋的", "pos": "adj.", "tag": "品质", "example": "Use 'diligent' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "empathetic", "zh": "有同理心的", "pos": "adj.", "tag": "社交", "example": "Use 'empathetic' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：社交"},
    {"en": "energetic", "zh": "精力充沛的", "pos": "adj.", "tag": "状态", "example": "Use 'energetic' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：状态"},
    {"en": "faithful", "zh": "忠诚的；可靠的", "pos": "adj.", "tag": "品质", "example": "Use 'faithful' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "generous", "zh": "慷慨的；大方的", "pos": "adj.", "tag": "性格", "example": "Use 'generous' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：性格"},
    {"en": "grateful", "zh": "感激的", "pos": "adj.", "tag": "情绪", "example": "Use 'grateful' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：情绪"},
    {"en": "guilty", "zh": "内疚的；有罪的", "pos": "adj.", "tag": "情绪", "example": "Use 'guilty' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：情绪"},
    {"en": "honest", "zh": "诚实的", "pos": "adj.", "tag": "品质", "example": "Use 'honest' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "humble", "zh": "谦逊的", "pos": "adj.", "tag": "品质", "example": "Use 'humble' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "impatient", "zh": "不耐烦的", "pos": "adj.", "tag": "情绪", "example": "Use 'impatient' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：情绪"},
    {"en": "jealous", "zh": "嫉妒的", "pos": "adj.", "tag": "情绪", "example": "Use 'jealous' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：情绪"},
    {"en": "kind", "zh": "善良的；种类", "pos": "adj./n.", "tag": "品质", "example": "Use 'kind' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "lonely", "zh": "孤独的", "pos": "adj.", "tag": "情绪", "example": "Use 'lonely' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：情绪"},
    {"en": "modest", "zh": "谦虚的；适度的", "pos": "adj.", "tag": "品质", "example": "Use 'modest' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "nervous", "zh": "紧张的", "pos": "adj.", "tag": "情绪", "example": "Use 'nervous' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：情绪"},
    {"en": "optimistic", "zh": "乐观的", "pos": "adj.", "tag": "态度", "example": "Use 'optimistic' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：态度"},
    {"en": "patient", "zh": "耐心的；病人", "pos": "adj./n.", "tag": "品质", "example": "Use 'patient' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "pessimistic", "zh": "悲观的", "pos": "adj.", "tag": "态度", "example": "Use 'pessimistic' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：态度"},
    {"en": "proud", "zh": "骄傲的；自豪的", "pos": "adj.", "tag": "情绪", "example": "Use 'proud' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：情绪"},
    {"en": "reliable", "zh": "可靠的", "pos": "adj.", "tag": "品质", "example": "Use 'reliable' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "sensitive", "zh": "敏感的；灵敏的", "pos": "adj.", "tag": "性格", "example": "Use 'sensitive' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：性格"},
    {"en": "sincere", "zh": "真诚的", "pos": "adj.", "tag": "品质", "example": "Use 'sincere' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "stubborn", "zh": "固执的", "pos": "adj.", "tag": "性格", "example": "Use 'stubborn' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：性格"},
    {"en": "thoughtful", "zh": "体贴的；深思的", "pos": "adj.", "tag": "品质", "example": "Use 'thoughtful' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "tolerant", "zh": "宽容的", "pos": "adj.", "tag": "品质", "example": "Use 'tolerant' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：品质"},
    {"en": "upset", "zh": "难过的；打乱", "pos": "adj./v.", "tag": "情绪", "example": "Use 'upset' in a short typing challenge to remember its meaning.", "tip": "分类：情绪性格 · 标签：情绪"},
  ],
  "医疗健康": [
    {"en": "allergy", "zh": "过敏", "pos": "n.", "tag": "症状", "example": "Use 'allergy' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：症状"},
    {"en": "ambulance", "zh": "救护车", "pos": "n.", "tag": "急救", "example": "Use 'ambulance' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：急救"},
    {"en": "appointment", "zh": "预约；约定", "pos": "n.", "tag": "医疗", "example": "Use 'appointment' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "bacteria", "zh": "细菌", "pos": "n.", "tag": "科学", "example": "Use 'bacteria' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：科学"},
    {"en": "bandage", "zh": "绷带", "pos": "n./v.", "tag": "护理", "example": "Use 'bandage' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：护理"},
    {"en": "clinic", "zh": "诊所", "pos": "n.", "tag": "医疗", "example": "Use 'clinic' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "diagnose", "zh": "诊断", "pos": "v.", "tag": "医疗", "example": "Use 'diagnose' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "diet", "zh": "饮食；节食", "pos": "n.", "tag": "健康", "example": "Use 'diet' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：健康"},
    {"en": "disease", "zh": "疾病", "pos": "n.", "tag": "医疗", "example": "Use 'disease' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "emergency", "zh": "紧急情况", "pos": "n.", "tag": "急救", "example": "Use 'emergency' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：急救"},
    {"en": "exercise", "zh": "锻炼；练习", "pos": "n./v.", "tag": "健康", "example": "Use 'exercise' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：健康"},
    {"en": "fatigue", "zh": "疲劳", "pos": "n.", "tag": "症状", "example": "Use 'fatigue' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：症状"},
    {"en": "fever", "zh": "发烧；狂热", "pos": "n.", "tag": "症状", "example": "Use 'fever' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：症状"},
    {"en": "fracture", "zh": "骨折；破裂", "pos": "n./v.", "tag": "医疗", "example": "Use 'fracture' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "immune", "zh": "免疫的", "pos": "adj.", "tag": "身体", "example": "Use 'immune' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：身体"},
    {"en": "infection", "zh": "感染", "pos": "n.", "tag": "医疗", "example": "Use 'infection' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "injury", "zh": "伤害；损伤", "pos": "n.", "tag": "医疗", "example": "Use 'injury' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "medicine", "zh": "药；医学", "pos": "n.", "tag": "医疗", "example": "Use 'medicine' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "mental", "zh": "心理的；精神的", "pos": "adj.", "tag": "健康", "example": "Use 'mental' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：健康"},
    {"en": "nutrition", "zh": "营养", "pos": "n.", "tag": "健康", "example": "Use 'nutrition' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：健康"},
    {"en": "operation", "zh": "手术；操作", "pos": "n.", "tag": "医疗", "example": "Use 'operation' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "patient", "zh": "病人；耐心的", "pos": "n./adj.", "tag": "医疗", "example": "Use 'patient' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "pharmacy", "zh": "药店；药房", "pos": "n.", "tag": "医疗", "example": "Use 'pharmacy' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "pulse", "zh": "脉搏；跳动", "pos": "n.", "tag": "身体", "example": "Use 'pulse' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：身体"},
    {"en": "recover", "zh": "恢复；康复", "pos": "v.", "tag": "健康", "example": "Use 'recover' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：健康"},
    {"en": "relieve", "zh": "缓解；减轻", "pos": "v.", "tag": "护理", "example": "Use 'relieve' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：护理"},
    {"en": "routine", "zh": "常规；惯例", "pos": "n.", "tag": "健康", "example": "Use 'routine' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：健康"},
    {"en": "symptom", "zh": "症状", "pos": "n.", "tag": "医疗", "example": "Use 'symptom' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "therapy", "zh": "疗法；治疗", "pos": "n.", "tag": "医疗", "example": "Use 'therapy' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "treatment", "zh": "治疗；处理", "pos": "n.", "tag": "医疗", "example": "Use 'treatment' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "vaccine", "zh": "疫苗", "pos": "n.", "tag": "医疗", "example": "Use 'vaccine' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：医疗"},
    {"en": "virus", "zh": "病毒", "pos": "n.", "tag": "科学", "example": "Use 'virus' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：科学"},
    {"en": "vitamin", "zh": "维生素", "pos": "n.", "tag": "营养", "example": "Use 'vitamin' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：营养"},
    {"en": "wellness", "zh": "健康；安康", "pos": "n.", "tag": "健康", "example": "Use 'wellness' in a short typing challenge to remember its meaning.", "tip": "分类：医疗健康 · 标签：健康"},
  ],
  "新闻社会": [
    {"en": "authority", "zh": "权威；当局", "pos": "n.", "tag": "政治", "example": "Use 'authority' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：政治"},
    {"en": "campaign", "zh": "运动；竞选", "pos": "n.", "tag": "社会", "example": "Use 'campaign' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "citizen", "zh": "公民；市民", "pos": "n.", "tag": "社会", "example": "Use 'citizen' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "community", "zh": "社区；群体", "pos": "n.", "tag": "社会", "example": "Use 'community' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "conflict", "zh": "冲突；矛盾", "pos": "n.", "tag": "社会", "example": "Use 'conflict' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "constitution", "zh": "宪法；构成", "pos": "n.", "tag": "法律", "example": "Use 'constitution' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：法律"},
    {"en": "debate", "zh": "辩论；争论", "pos": "n./v.", "tag": "媒体", "example": "Use 'debate' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：媒体"},
    {"en": "democracy", "zh": "民主；民主制", "pos": "n.", "tag": "政治", "example": "Use 'democracy' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：政治"},
    {"en": "economy", "zh": "经济", "pos": "n.", "tag": "社会", "example": "Use 'economy' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "election", "zh": "选举", "pos": "n.", "tag": "政治", "example": "Use 'election' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：政治"},
    {"en": "equality", "zh": "平等", "pos": "n.", "tag": "社会", "example": "Use 'equality' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "evidence", "zh": "证据", "pos": "n.", "tag": "法律", "example": "Use 'evidence' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：法律"},
    {"en": "global", "zh": "全球的", "pos": "adj.", "tag": "国际", "example": "Use 'global' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：国际"},
    {"en": "headline", "zh": "标题；头条", "pos": "n.", "tag": "媒体", "example": "Use 'headline' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：媒体"},
    {"en": "immigration", "zh": "移民；移居", "pos": "n.", "tag": "社会", "example": "Use 'immigration' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "incident", "zh": "事件；事变", "pos": "n.", "tag": "新闻", "example": "Use 'incident' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：新闻"},
    {"en": "justice", "zh": "正义；司法", "pos": "n.", "tag": "法律", "example": "Use 'justice' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：法律"},
    {"en": "legislation", "zh": "立法；法律", "pos": "n.", "tag": "法律", "example": "Use 'legislation' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：法律"},
    {"en": "media", "zh": "媒体", "pos": "n.", "tag": "新闻", "example": "Use 'media' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：新闻"},
    {"en": "minister", "zh": "部长；牧师", "pos": "n.", "tag": "政治", "example": "Use 'minister' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：政治"},
    {"en": "policy", "zh": "政策；方针", "pos": "n.", "tag": "政治", "example": "Use 'policy' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：政治"},
    {"en": "poverty", "zh": "贫困", "pos": "n.", "tag": "社会", "example": "Use 'poverty' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "protest", "zh": "抗议", "pos": "n./v.", "tag": "社会", "example": "Use 'protest' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "public", "zh": "公众的；公开的", "pos": "adj./n.", "tag": "社会", "example": "Use 'public' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "reform", "zh": "改革；改造", "pos": "n./v.", "tag": "社会", "example": "Use 'reform' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "resident", "zh": "居民", "pos": "n.", "tag": "社会", "example": "Use 'resident' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "rights", "zh": "权利", "pos": "n.", "tag": "法律", "example": "Use 'rights' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：法律"},
    {"en": "security", "zh": "安全；保障", "pos": "n.", "tag": "社会", "example": "Use 'security' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：社会"},
    {"en": "survey", "zh": "调查；概览", "pos": "n./v.", "tag": "媒体", "example": "Use 'survey' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：媒体"},
    {"en": "witness", "zh": "目击者；见证", "pos": "n./v.", "tag": "法律", "example": "Use 'witness' in a short typing challenge to remember its meaning.", "tip": "分类：新闻社会 · 标签：法律"},
  ],
  "艺术文化": [
    {"en": "aesthetic", "zh": "审美的；美学", "pos": "adj./n.", "tag": "艺术", "example": "Use 'aesthetic' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：艺术"},
    {"en": "architecture", "zh": "建筑；建筑学", "pos": "n.", "tag": "艺术", "example": "Use 'architecture' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：艺术"},
    {"en": "canvas", "zh": "画布；帆布", "pos": "n.", "tag": "绘画", "example": "Use 'canvas' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：绘画"},
    {"en": "ceremony", "zh": "典礼；仪式", "pos": "n.", "tag": "文化", "example": "Use 'ceremony' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：文化"},
    {"en": "classic", "zh": "经典的；经典作品", "pos": "adj./n.", "tag": "文学", "example": "Use 'classic' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：文学"},
    {"en": "compose", "zh": "作曲；组成", "pos": "v.", "tag": "音乐", "example": "Use 'compose' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：音乐"},
    {"en": "costume", "zh": "服装；戏装", "pos": "n.", "tag": "戏剧", "example": "Use 'costume' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：戏剧"},
    {"en": "craft", "zh": "工艺；手艺", "pos": "n.", "tag": "文化", "example": "Use 'craft' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：文化"},
    {"en": "creative", "zh": "有创造力的", "pos": "adj.", "tag": "艺术", "example": "Use 'creative' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：艺术"},
    {"en": "critic", "zh": "评论家；批评者", "pos": "n.", "tag": "媒体", "example": "Use 'critic' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：媒体"},
    {"en": "exhibition", "zh": "展览；展示", "pos": "n.", "tag": "艺术", "example": "Use 'exhibition' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：艺术"},
    {"en": "festival", "zh": "节日；庆典", "pos": "n.", "tag": "文化", "example": "Use 'festival' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：文化"},
    {"en": "fiction", "zh": "小说；虚构", "pos": "n.", "tag": "文学", "example": "Use 'fiction' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：文学"},
    {"en": "gallery", "zh": "画廊；走廊", "pos": "n.", "tag": "艺术", "example": "Use 'gallery' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：艺术"},
    {"en": "heritage", "zh": "遗产；传统", "pos": "n.", "tag": "文化", "example": "Use 'heritage' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：文化"},
    {"en": "instrument", "zh": "乐器；工具", "pos": "n.", "tag": "音乐", "example": "Use 'instrument' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：音乐"},
    {"en": "literature", "zh": "文学", "pos": "n.", "tag": "文学", "example": "Use 'literature' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：文学"},
    {"en": "melody", "zh": "旋律", "pos": "n.", "tag": "音乐", "example": "Use 'melody' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：音乐"},
    {"en": "myth", "zh": "神话；误解", "pos": "n.", "tag": "文化", "example": "Use 'myth' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：文化"},
    {"en": "novel", "zh": "小说；新颖的", "pos": "n./adj.", "tag": "文学", "example": "Use 'novel' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：文学"},
    {"en": "opera", "zh": "歌剧", "pos": "n.", "tag": "音乐", "example": "Use 'opera' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：音乐"},
    {"en": "orchestra", "zh": "管弦乐队", "pos": "n.", "tag": "音乐", "example": "Use 'orchestra' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：音乐"},
    {"en": "perform", "zh": "表演；执行", "pos": "v.", "tag": "舞台", "example": "Use 'perform' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：舞台"},
    {"en": "portrait", "zh": "肖像；描绘", "pos": "n.", "tag": "绘画", "example": "Use 'portrait' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：绘画"},
    {"en": "rhythm", "zh": "节奏；韵律", "pos": "n.", "tag": "音乐", "example": "Use 'rhythm' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：音乐"},
    {"en": "sculpture", "zh": "雕塑", "pos": "n.", "tag": "艺术", "example": "Use 'sculpture' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：艺术"},
    {"en": "symbol", "zh": "象征；符号", "pos": "n.", "tag": "文化", "example": "Use 'symbol' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：文化"},
    {"en": "tradition", "zh": "传统", "pos": "n.", "tag": "文化", "example": "Use 'tradition' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：文化"},
    {"en": "visual", "zh": "视觉的", "pos": "adj.", "tag": "设计", "example": "Use 'visual' in a short typing challenge to remember its meaning.", "tip": "分类：艺术文化 · 标签：设计"},
  ],
  "词根进阶": [
    {"en": "beneficial", "zh": "有益的", "pos": "adj.", "tag": "bene好", "example": "Use 'beneficial' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：bene好"},
    {"en": "benevolent", "zh": "仁慈的；慈善的", "pos": "adj.", "tag": "bene好", "example": "Use 'benevolent' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：bene好"},
    {"en": "convention", "zh": "会议；惯例", "pos": "n.", "tag": "ven来", "example": "Use 'convention' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：ven来"},
    {"en": "intervene", "zh": "干预；介入", "pos": "v.", "tag": "ven来", "example": "Use 'intervene' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：ven来"},
    {"en": "portable", "zh": "便携的", "pos": "adj.", "tag": "port带", "example": "Use 'portable' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：port带"},
    {"en": "transport", "zh": "运输；运送", "pos": "v./n.", "tag": "port带", "example": "Use 'transport' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：port带"},
    {"en": "predict", "zh": "预测", "pos": "v.", "tag": "dict说", "example": "Use 'predict' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：dict说"},
    {"en": "dictation", "zh": "听写；口述", "pos": "n.", "tag": "dict说", "example": "Use 'dictation' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：dict说"},
    {"en": "visible", "zh": "可见的", "pos": "adj.", "tag": "vis看", "example": "Use 'visible' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：vis看"},
    {"en": "revise", "zh": "修改；复习", "pos": "v.", "tag": "vis看", "example": "Use 'revise' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：vis看"},
    {"en": "spectator", "zh": "观众", "pos": "n.", "tag": "spect看", "example": "Use 'spectator' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：spect看"},
    {"en": "inspect", "zh": "检查；视察", "pos": "v.", "tag": "spect看", "example": "Use 'inspect' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：spect看"},
    {"en": "construct", "zh": "建造；构建", "pos": "v.", "tag": "struct建", "example": "Use 'construct' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：struct建"},
    {"en": "structure", "zh": "结构", "pos": "n.", "tag": "struct建", "example": "Use 'structure' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：struct建"},
    {"en": "manual", "zh": "手册；手工的", "pos": "n./adj.", "tag": "man手", "example": "Use 'manual' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：man手"},
    {"en": "manufacture", "zh": "制造；制造业", "pos": "v./n.", "tag": "man手", "example": "Use 'manufacture' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：man手"},
    {"en": "audience", "zh": "观众；听众", "pos": "n.", "tag": "aud听", "example": "Use 'audience' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：aud听"},
    {"en": "audible", "zh": "听得见的", "pos": "adj.", "tag": "aud听", "example": "Use 'audible' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：aud听"},
    {"en": "credible", "zh": "可信的", "pos": "adj.", "tag": "cred信", "example": "Use 'credible' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：cred信"},
    {"en": "credit", "zh": "信用；学分", "pos": "n.", "tag": "cred信", "example": "Use 'credit' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：cred信"},
    {"en": "export", "zh": "出口；输出", "pos": "v./n.", "tag": "port带", "example": "Use 'export' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：port带"},
    {"en": "import", "zh": "进口；输入", "pos": "v./n.", "tag": "port带", "example": "Use 'import' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：port带"},
    {"en": "biology", "zh": "生物学", "pos": "n.", "tag": "bio生命", "example": "Use 'biology' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：bio生命"},
    {"en": "biography", "zh": "传记", "pos": "n.", "tag": "bio生命", "example": "Use 'biography' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：bio生命"},
    {"en": "telephone", "zh": "电话", "pos": "n.", "tag": "tele远", "example": "Use 'telephone' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：tele远"},
    {"en": "television", "zh": "电视", "pos": "n.", "tag": "tele远", "example": "Use 'television' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：tele远"},
    {"en": "democracy", "zh": "民主", "pos": "n.", "tag": "demo人民", "example": "Use 'democracy' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：demo人民"},
    {"en": "demographic", "zh": "人口统计的", "pos": "adj.", "tag": "demo人民", "example": "Use 'demographic' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：demo人民"},
    {"en": "geography", "zh": "地理", "pos": "n.", "tag": "geo地", "example": "Use 'geography' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：geo地"},
    {"en": "geology", "zh": "地质学", "pos": "n.", "tag": "geo地", "example": "Use 'geology' in a short typing challenge to remember its meaning.", "tip": "分类：词根进阶 · 标签：geo地"},
  ],
};

Object.entries(WORD_BANK_EXPANSION).forEach(([name, entries]) => {
  const existed = new Set((WORD_BANKS[name] || []).map((item) => item.en));
  const unique = entries.filter((item) => item?.en && !existed.has(item.en));
  WORD_BANKS[name] = [ ...(WORD_BANKS[name] || []), ...unique ];
});

// 给旧词库补充少量主题词，让切换回基础词库时也能出现新鲜词。
WORD_BANKS['CET-4'] = WORD_BANKS['CET-4'].concat(WORD_BANK_EXPANSION['高考核心'].slice(0, 28));
WORD_BANKS['CET-6'] = WORD_BANKS['CET-6'].concat(WORD_BANK_EXPANSION['学术写作'].slice(0, 24), WORD_BANK_EXPANSION['商务职场'].slice(0, 18));
WORD_BANKS['IELTS'] = WORD_BANKS['IELTS'].concat(WORD_BANK_EXPANSION['自然环境'].slice(0, 22), WORD_BANK_EXPANSION['新闻社会'].slice(0, 18));


/* ============================================================
   v0.9.6 词库补全：扩充各主题词量，并生成“综合乱序”混合词库。
   ============================================================ */
const WORD_BANK_SUPPLEMENT_V096 = {
  "CET-4": [
    {
      "en": "advantage",
      "zh": "优势；有利条件",
      "pos": "n.",
      "tag": "核心",
      "example": "Use 'advantage' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：核心"
    },
    {
      "en": "apartment",
      "zh": "公寓；住所",
      "pos": "n.",
      "tag": "生活",
      "example": "Use 'apartment' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：生活"
    },
    {
      "en": "argument",
      "zh": "争论；论点",
      "pos": "n.",
      "tag": "写作",
      "example": "Use 'argument' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：写作"
    },
    {
      "en": "attract",
      "zh": "吸引；引起",
      "pos": "v.",
      "tag": "高频",
      "example": "Use 'attract' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：高频"
    },
    {
      "en": "available",
      "zh": "可获得的；有空的",
      "pos": "adj.",
      "tag": "高频",
      "example": "Use 'available' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：高频"
    },
    {
      "en": "average",
      "zh": "平均的；平均数",
      "pos": "adj./n.",
      "tag": "数据",
      "example": "Use 'average' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：数据"
    },
    {
      "en": "behavior",
      "zh": "行为；举止",
      "pos": "n.",
      "tag": "人物",
      "example": "Use 'behavior' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：人物"
    },
    {
      "en": "celebrate",
      "zh": "庆祝",
      "pos": "v.",
      "tag": "生活",
      "example": "Use 'celebrate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：生活"
    },
    {
      "en": "community",
      "zh": "社区；群体",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'community' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：社会"
    },
    {
      "en": "confidence",
      "zh": "信心；信任",
      "pos": "n.",
      "tag": "心理",
      "example": "Use 'confidence' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：心理"
    },
    {
      "en": "connect",
      "zh": "连接；联系",
      "pos": "v.",
      "tag": "科技",
      "example": "Use 'connect' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：科技"
    },
    {
      "en": "culture",
      "zh": "文化；文明",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'culture' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：社会"
    },
    {
      "en": "decision",
      "zh": "决定；决策",
      "pos": "n.",
      "tag": "行动",
      "example": "Use 'decision' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：行动"
    },
    {
      "en": "develop",
      "zh": "发展；开发",
      "pos": "v.",
      "tag": "高频",
      "example": "Use 'develop' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：高频"
    },
    {
      "en": "education",
      "zh": "教育；培养",
      "pos": "n.",
      "tag": "校园",
      "example": "Use 'education' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：校园"
    },
    {
      "en": "environment",
      "zh": "环境；周围状况",
      "pos": "n.",
      "tag": "自然",
      "example": "Use 'environment' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：自然"
    },
    {
      "en": "experience",
      "zh": "经历；经验",
      "pos": "n./v.",
      "tag": "高频",
      "example": "Use 'experience' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：高频"
    },
    {
      "en": "favorite",
      "zh": "最喜欢的",
      "pos": "adj./n.",
      "tag": "生活",
      "example": "Use 'favorite' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：生活"
    },
    {
      "en": "information",
      "zh": "信息；资料",
      "pos": "n.",
      "tag": "高频",
      "example": "Use 'information' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：高频"
    },
    {
      "en": "introduce",
      "zh": "介绍；引入",
      "pos": "v.",
      "tag": "交流",
      "example": "Use 'introduce' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：交流"
    },
    {
      "en": "knowledge",
      "zh": "知识；学问",
      "pos": "n.",
      "tag": "学习",
      "example": "Use 'knowledge' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：学习"
    },
    {
      "en": "language",
      "zh": "语言；表达方式",
      "pos": "n.",
      "tag": "学习",
      "example": "Use 'language' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：学习"
    },
    {
      "en": "necessary",
      "zh": "必要的；必需的",
      "pos": "adj.",
      "tag": "高频",
      "example": "Use 'necessary' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：高频"
    },
    {
      "en": "opportunity",
      "zh": "机会；时机",
      "pos": "n.",
      "tag": "抽象",
      "example": "Use 'opportunity' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：抽象"
    },
    {
      "en": "population",
      "zh": "人口；族群",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'population' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：社会"
    },
    {
      "en": "position",
      "zh": "位置；职位",
      "pos": "n.",
      "tag": "空间",
      "example": "Use 'position' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：空间"
    },
    {
      "en": "practice",
      "zh": "练习；实践",
      "pos": "n./v.",
      "tag": "学习",
      "example": "Use 'practice' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：学习"
    },
    {
      "en": "protect",
      "zh": "保护；防护",
      "pos": "v.",
      "tag": "安全",
      "example": "Use 'protect' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：安全"
    },
    {
      "en": "purpose",
      "zh": "目的；用途",
      "pos": "n.",
      "tag": "写作",
      "example": "Use 'purpose' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：写作"
    },
    {
      "en": "recommend",
      "zh": "推荐；建议",
      "pos": "v.",
      "tag": "交流",
      "example": "Use 'recommend' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：交流"
    },
    {
      "en": "relationship",
      "zh": "关系；联系",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'relationship' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：社会"
    },
    {
      "en": "responsible",
      "zh": "负责的；可靠的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'responsible' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：性格"
    },
    {
      "en": "solution",
      "zh": "解决办法",
      "pos": "n.",
      "tag": "问题",
      "example": "Use 'solution' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：问题"
    },
    {
      "en": "temperature",
      "zh": "温度；体温",
      "pos": "n.",
      "tag": "自然",
      "example": "Use 'temperature' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：自然"
    },
    {
      "en": "tradition",
      "zh": "传统；惯例",
      "pos": "n.",
      "tag": "文化",
      "example": "Use 'tradition' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：文化"
    },
    {
      "en": "volunteer",
      "zh": "志愿者；自愿做",
      "pos": "n./v.",
      "tag": "社会",
      "example": "Use 'volunteer' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-4 · 标签：社会"
    }
  ],
  "CET-6": [
    {
      "en": "adaptation",
      "zh": "适应；改编",
      "pos": "n.",
      "tag": "学术",
      "example": "Use 'adaptation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：学术"
    },
    {
      "en": "aggregate",
      "zh": "总计；聚合",
      "pos": "v./n.",
      "tag": "数据",
      "example": "Use 'aggregate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：数据"
    },
    {
      "en": "allocate",
      "zh": "分配；拨给",
      "pos": "v.",
      "tag": "管理",
      "example": "Use 'allocate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：管理"
    },
    {
      "en": "appraisal",
      "zh": "评价；估价",
      "pos": "n.",
      "tag": "判断",
      "example": "Use 'appraisal' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：判断"
    },
    {
      "en": "autonomous",
      "zh": "自治的；自主的",
      "pos": "adj.",
      "tag": "科技",
      "example": "Use 'autonomous' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：科技"
    },
    {
      "en": "clarify",
      "zh": "澄清；阐明",
      "pos": "v.",
      "tag": "表达",
      "example": "Use 'clarify' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：表达"
    },
    {
      "en": "commodity",
      "zh": "商品；日用品",
      "pos": "n.",
      "tag": "经济",
      "example": "Use 'commodity' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：经济"
    },
    {
      "en": "constraint",
      "zh": "限制；约束",
      "pos": "n.",
      "tag": "问题",
      "example": "Use 'constraint' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：问题"
    },
    {
      "en": "controversy",
      "zh": "争议；争论",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'controversy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：社会"
    },
    {
      "en": "counterpart",
      "zh": "对应物；职位相当者",
      "pos": "n.",
      "tag": "比较",
      "example": "Use 'counterpart' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：比较"
    },
    {
      "en": "deviation",
      "zh": "偏离；差异",
      "pos": "n.",
      "tag": "数据",
      "example": "Use 'deviation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：数据"
    },
    {
      "en": "dimension",
      "zh": "维度；方面",
      "pos": "n.",
      "tag": "抽象",
      "example": "Use 'dimension' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：抽象"
    },
    {
      "en": "disclose",
      "zh": "揭露；公开",
      "pos": "v.",
      "tag": "新闻",
      "example": "Use 'disclose' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：新闻"
    },
    {
      "en": "distort",
      "zh": "歪曲；扭曲",
      "pos": "v.",
      "tag": "表达",
      "example": "Use 'distort' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：表达"
    },
    {
      "en": "empirical",
      "zh": "经验的；实证的",
      "pos": "adj.",
      "tag": "研究",
      "example": "Use 'empirical' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：研究"
    },
    {
      "en": "enforce",
      "zh": "实施；强制执行",
      "pos": "v.",
      "tag": "法律",
      "example": "Use 'enforce' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：法律"
    },
    {
      "en": "equivalent",
      "zh": "相等的；等同物",
      "pos": "adj./n.",
      "tag": "比较",
      "example": "Use 'equivalent' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：比较"
    },
    {
      "en": "fluctuate",
      "zh": "波动；起伏",
      "pos": "v.",
      "tag": "数据",
      "example": "Use 'fluctuate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：数据"
    },
    {
      "en": "framework",
      "zh": "框架；体系",
      "pos": "n.",
      "tag": "学术",
      "example": "Use 'framework' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：学术"
    },
    {
      "en": "incentive",
      "zh": "激励；诱因",
      "pos": "n.",
      "tag": "经济",
      "example": "Use 'incentive' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：经济"
    },
    {
      "en": "integrate",
      "zh": "整合；融入",
      "pos": "v.",
      "tag": "学术",
      "example": "Use 'integrate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：学术"
    },
    {
      "en": "intermediate",
      "zh": "中间的；中级的",
      "pos": "adj.",
      "tag": "层级",
      "example": "Use 'intermediate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：层级"
    },
    {
      "en": "legislation",
      "zh": "立法；法规",
      "pos": "n.",
      "tag": "法律",
      "example": "Use 'legislation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：法律"
    },
    {
      "en": "manipulate",
      "zh": "操纵；熟练处理",
      "pos": "v.",
      "tag": "动作",
      "example": "Use 'manipulate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：动作"
    },
    {
      "en": "notion",
      "zh": "概念；看法",
      "pos": "n.",
      "tag": "观点",
      "example": "Use 'notion' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：观点"
    },
    {
      "en": "preliminary",
      "zh": "初步的；预备的",
      "pos": "adj.",
      "tag": "研究",
      "example": "Use 'preliminary' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：研究"
    },
    {
      "en": "prestige",
      "zh": "声望；威信",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'prestige' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：社会"
    },
    {
      "en": "proportion",
      "zh": "比例；部分",
      "pos": "n.",
      "tag": "数据",
      "example": "Use 'proportion' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：数据"
    },
    {
      "en": "qualitative",
      "zh": "定性的；质的",
      "pos": "adj.",
      "tag": "研究",
      "example": "Use 'qualitative' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：研究"
    },
    {
      "en": "quantitative",
      "zh": "定量的；数量的",
      "pos": "adj.",
      "tag": "研究",
      "example": "Use 'quantitative' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：研究"
    },
    {
      "en": "rationale",
      "zh": "基本原理；理由",
      "pos": "n.",
      "tag": "逻辑",
      "example": "Use 'rationale' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：逻辑"
    },
    {
      "en": "recession",
      "zh": "衰退；萧条",
      "pos": "n.",
      "tag": "经济",
      "example": "Use 'recession' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：经济"
    },
    {
      "en": "subsequent",
      "zh": "随后的；后来的",
      "pos": "adj.",
      "tag": "时间",
      "example": "Use 'subsequent' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：时间"
    },
    {
      "en": "terminate",
      "zh": "终止；结束",
      "pos": "v.",
      "tag": "动作",
      "example": "Use 'terminate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：动作"
    },
    {
      "en": "viable",
      "zh": "可行的；能生存的",
      "pos": "adj.",
      "tag": "判断",
      "example": "Use 'viable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：判断"
    },
    {
      "en": "whereas",
      "zh": "然而；鉴于",
      "pos": "conj.",
      "tag": "连接",
      "example": "Use 'whereas' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：CET-6 · 标签：连接"
    }
  ],
  "IELTS": [
    {
      "en": "accessible",
      "zh": "可进入的；易懂的",
      "pos": "adj.",
      "tag": "社会",
      "example": "Use 'accessible' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：社会"
    },
    {
      "en": "accountable",
      "zh": "负有责任的",
      "pos": "adj.",
      "tag": "管理",
      "example": "Use 'accountable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：管理"
    },
    {
      "en": "adaptable",
      "zh": "适应性强的",
      "pos": "adj.",
      "tag": "能力",
      "example": "Use 'adaptable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：能力"
    },
    {
      "en": "affluent",
      "zh": "富裕的；富足的",
      "pos": "adj.",
      "tag": "社会",
      "example": "Use 'affluent' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：社会"
    },
    {
      "en": "biodiversity",
      "zh": "生物多样性",
      "pos": "n.",
      "tag": "环境",
      "example": "Use 'biodiversity' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：环境"
    },
    {
      "en": "civic",
      "zh": "城市的；公民的",
      "pos": "adj.",
      "tag": "社会",
      "example": "Use 'civic' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：社会"
    },
    {
      "en": "cohesion",
      "zh": "凝聚力；结合",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'cohesion' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：社会"
    },
    {
      "en": "conservation",
      "zh": "保护；保存",
      "pos": "n.",
      "tag": "环境",
      "example": "Use 'conservation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：环境"
    },
    {
      "en": "demographic",
      "zh": "人口统计的",
      "pos": "adj.",
      "tag": "社会",
      "example": "Use 'demographic' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：社会"
    },
    {
      "en": "disparity",
      "zh": "差距；悬殊",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'disparity' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：社会"
    },
    {
      "en": "feasible",
      "zh": "可行的",
      "pos": "adj.",
      "tag": "判断",
      "example": "Use 'feasible' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：判断"
    },
    {
      "en": "greenhouse",
      "zh": "温室；温室的",
      "pos": "n./adj.",
      "tag": "环境",
      "example": "Use 'greenhouse' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：环境"
    },
    {
      "en": "infrastructure",
      "zh": "基础设施",
      "pos": "n.",
      "tag": "城市",
      "example": "Use 'infrastructure' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：城市"
    },
    {
      "en": "migration",
      "zh": "迁移；移民",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'migration' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：社会"
    },
    {
      "en": "nutrient",
      "zh": "营养物；养分",
      "pos": "n.",
      "tag": "健康",
      "example": "Use 'nutrient' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：健康"
    },
    {
      "en": "overcrowding",
      "zh": "过度拥挤",
      "pos": "n.",
      "tag": "城市",
      "example": "Use 'overcrowding' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：城市"
    },
    {
      "en": "perspective",
      "zh": "观点；视角",
      "pos": "n.",
      "tag": "写作",
      "example": "Use 'perspective' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：写作"
    },
    {
      "en": "predominant",
      "zh": "主要的；占优势的",
      "pos": "adj.",
      "tag": "趋势",
      "example": "Use 'predominant' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：趋势"
    },
    {
      "en": "recyclable",
      "zh": "可回收的",
      "pos": "adj.",
      "tag": "环境",
      "example": "Use 'recyclable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：环境"
    },
    {
      "en": "renewable",
      "zh": "可再生的",
      "pos": "adj.",
      "tag": "能源",
      "example": "Use 'renewable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：能源"
    },
    {
      "en": "sustainable",
      "zh": "可持续的",
      "pos": "adj.",
      "tag": "环境",
      "example": "Use 'sustainable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：环境"
    },
    {
      "en": "urbanization",
      "zh": "城市化",
      "pos": "n.",
      "tag": "城市",
      "example": "Use 'urbanization' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：城市"
    },
    {
      "en": "vocational",
      "zh": "职业的",
      "pos": "adj.",
      "tag": "教育",
      "example": "Use 'vocational' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：教育"
    },
    {
      "en": "welfare",
      "zh": "福利；幸福",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'welfare' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：社会"
    },
    {
      "en": "yield",
      "zh": "产量；产生",
      "pos": "n./v.",
      "tag": "数据",
      "example": "Use 'yield' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：IELTS · 标签：数据"
    }
  ],
  "高考核心": [
    {
      "en": "actually",
      "zh": "实际上；事实上",
      "pos": "adv.",
      "tag": "高频",
      "example": "Use 'actually' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：高频"
    },
    {
      "en": "advantage",
      "zh": "优势；优点",
      "pos": "n.",
      "tag": "写作",
      "example": "Use 'advantage' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：写作"
    },
    {
      "en": "although",
      "zh": "虽然；尽管",
      "pos": "conj.",
      "tag": "连接",
      "example": "Use 'although' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：连接"
    },
    {
      "en": "background",
      "zh": "背景；经历",
      "pos": "n.",
      "tag": "叙事",
      "example": "Use 'background' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：叙事"
    },
    {
      "en": "challenge",
      "zh": "挑战；质疑",
      "pos": "n./v.",
      "tag": "高频",
      "example": "Use 'challenge' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：高频"
    },
    {
      "en": "communication",
      "zh": "交流；通信",
      "pos": "n.",
      "tag": "社交",
      "example": "Use 'communication' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：社交"
    },
    {
      "en": "compare",
      "zh": "比较；对照",
      "pos": "v.",
      "tag": "写作",
      "example": "Use 'compare' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：写作"
    },
    {
      "en": "convenient",
      "zh": "方便的",
      "pos": "adj.",
      "tag": "生活",
      "example": "Use 'convenient' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：生活"
    },
    {
      "en": "creative",
      "zh": "有创造力的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'creative' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：性格"
    },
    {
      "en": "culture",
      "zh": "文化；修养",
      "pos": "n.",
      "tag": "阅读",
      "example": "Use 'culture' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：阅读"
    },
    {
      "en": "direction",
      "zh": "方向；说明",
      "pos": "n.",
      "tag": "空间",
      "example": "Use 'direction' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：空间"
    },
    {
      "en": "encourage",
      "zh": "鼓励；促进",
      "pos": "v.",
      "tag": "态度",
      "example": "Use 'encourage' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：态度"
    },
    {
      "en": "especially",
      "zh": "尤其；特别",
      "pos": "adv.",
      "tag": "强调",
      "example": "Use 'especially' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：强调"
    },
    {
      "en": "excellent",
      "zh": "优秀的；极好的",
      "pos": "adj.",
      "tag": "评价",
      "example": "Use 'excellent' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：评价"
    },
    {
      "en": "failure",
      "zh": "失败；故障",
      "pos": "n.",
      "tag": "经历",
      "example": "Use 'failure' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：经历"
    },
    {
      "en": "foreign",
      "zh": "外国的；外来的",
      "pos": "adj.",
      "tag": "文化",
      "example": "Use 'foreign' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：文化"
    },
    {
      "en": "generous",
      "zh": "慷慨的；大方的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'generous' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：性格"
    },
    {
      "en": "improve",
      "zh": "改进；提高",
      "pos": "v.",
      "tag": "学习",
      "example": "Use 'improve' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：学习"
    },
    {
      "en": "instead",
      "zh": "代替；反而",
      "pos": "adv.",
      "tag": "连接",
      "example": "Use 'instead' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：连接"
    },
    {
      "en": "memory",
      "zh": "记忆；回忆",
      "pos": "n.",
      "tag": "学习",
      "example": "Use 'memory' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：学习"
    },
    {
      "en": "modern",
      "zh": "现代的；时髦的",
      "pos": "adj.",
      "tag": "时代",
      "example": "Use 'modern' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：时代"
    },
    {
      "en": "notice",
      "zh": "注意；通知",
      "pos": "n./v.",
      "tag": "校园",
      "example": "Use 'notice' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：校园"
    },
    {
      "en": "ordinary",
      "zh": "普通的；平常的",
      "pos": "adj.",
      "tag": "生活",
      "example": "Use 'ordinary' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：生活"
    },
    {
      "en": "perfect",
      "zh": "完美的；使完善",
      "pos": "adj./v.",
      "tag": "评价",
      "example": "Use 'perfect' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：评价"
    },
    {
      "en": "pollution",
      "zh": "污染",
      "pos": "n.",
      "tag": "环境",
      "example": "Use 'pollution' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：环境"
    },
    {
      "en": "promise",
      "zh": "承诺；保证",
      "pos": "n./v.",
      "tag": "社交",
      "example": "Use 'promise' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：社交"
    },
    {
      "en": "receive",
      "zh": "收到；接待",
      "pos": "v.",
      "tag": "动作",
      "example": "Use 'receive' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：动作"
    },
    {
      "en": "succeed",
      "zh": "成功；接替",
      "pos": "v.",
      "tag": "成长",
      "example": "Use 'succeed' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：成长"
    },
    {
      "en": "suggest",
      "zh": "建议；表明",
      "pos": "v.",
      "tag": "写作",
      "example": "Use 'suggest' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：写作"
    },
    {
      "en": "valuable",
      "zh": "有价值的；贵重的",
      "pos": "adj.",
      "tag": "评价",
      "example": "Use 'valuable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：评价"
    },
    {
      "en": "weather",
      "zh": "天气；经受住",
      "pos": "n./v.",
      "tag": "自然",
      "example": "Use 'weather' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：自然"
    },
    {
      "en": "wonderful",
      "zh": "精彩的；极好的",
      "pos": "adj.",
      "tag": "评价",
      "example": "Use 'wonderful' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：高考核心 · 标签：评价"
    }
  ],
  "商务职场": [
    {
      "en": "agenda",
      "zh": "议程；待办事项",
      "pos": "n.",
      "tag": "会议",
      "example": "Use 'agenda' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：会议"
    },
    {
      "en": "briefing",
      "zh": "简报；情况介绍",
      "pos": "n.",
      "tag": "会议",
      "example": "Use 'briefing' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：会议"
    },
    {
      "en": "budget",
      "zh": "预算；安排预算",
      "pos": "n./v.",
      "tag": "财务",
      "example": "Use 'budget' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：财务"
    },
    {
      "en": "candidate",
      "zh": "候选人；应聘者",
      "pos": "n.",
      "tag": "招聘",
      "example": "Use 'candidate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：招聘"
    },
    {
      "en": "contract",
      "zh": "合同；签订合同",
      "pos": "n./v.",
      "tag": "法律",
      "example": "Use 'contract' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：法律"
    },
    {
      "en": "deadline",
      "zh": "截止日期",
      "pos": "n.",
      "tag": "项目",
      "example": "Use 'deadline' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：项目"
    },
    {
      "en": "delegate",
      "zh": "代表；委派",
      "pos": "n./v.",
      "tag": "管理",
      "example": "Use 'delegate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：管理"
    },
    {
      "en": "deliverable",
      "zh": "交付成果",
      "pos": "n.",
      "tag": "项目",
      "example": "Use 'deliverable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：项目"
    },
    {
      "en": "department",
      "zh": "部门；系",
      "pos": "n.",
      "tag": "组织",
      "example": "Use 'department' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：组织"
    },
    {
      "en": "estimate",
      "zh": "估计；估算",
      "pos": "v./n.",
      "tag": "项目",
      "example": "Use 'estimate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：项目"
    },
    {
      "en": "feedback",
      "zh": "反馈；意见",
      "pos": "n.",
      "tag": "沟通",
      "example": "Use 'feedback' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：沟通"
    },
    {
      "en": "invoice",
      "zh": "发票；开票",
      "pos": "n./v.",
      "tag": "财务",
      "example": "Use 'invoice' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：财务"
    },
    {
      "en": "logistics",
      "zh": "物流；后勤",
      "pos": "n.",
      "tag": "运营",
      "example": "Use 'logistics' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：运营"
    },
    {
      "en": "negotiate",
      "zh": "谈判；协商",
      "pos": "v.",
      "tag": "商务",
      "example": "Use 'negotiate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：商务"
    },
    {
      "en": "onboarding",
      "zh": "入职培训",
      "pos": "n.",
      "tag": "招聘",
      "example": "Use 'onboarding' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：招聘"
    },
    {
      "en": "portfolio",
      "zh": "作品集；投资组合",
      "pos": "n.",
      "tag": "职业",
      "example": "Use 'portfolio' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：职业"
    },
    {
      "en": "presentation",
      "zh": "展示；报告",
      "pos": "n.",
      "tag": "会议",
      "example": "Use 'presentation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：会议"
    },
    {
      "en": "proposal",
      "zh": "提案；建议书",
      "pos": "n.",
      "tag": "商务",
      "example": "Use 'proposal' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：商务"
    },
    {
      "en": "recruit",
      "zh": "招聘；新成员",
      "pos": "v./n.",
      "tag": "招聘",
      "example": "Use 'recruit' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：招聘"
    },
    {
      "en": "revenue",
      "zh": "收入；营收",
      "pos": "n.",
      "tag": "财务",
      "example": "Use 'revenue' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：财务"
    },
    {
      "en": "strategy",
      "zh": "策略；战略",
      "pos": "n.",
      "tag": "管理",
      "example": "Use 'strategy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：管理"
    },
    {
      "en": "supervisor",
      "zh": "主管；监督者",
      "pos": "n.",
      "tag": "组织",
      "example": "Use 'supervisor' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：组织"
    },
    {
      "en": "turnover",
      "zh": "营业额；人员流动",
      "pos": "n.",
      "tag": "财务",
      "example": "Use 'turnover' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：财务"
    },
    {
      "en": "workflow",
      "zh": "工作流程",
      "pos": "n.",
      "tag": "运营",
      "example": "Use 'workflow' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：运营"
    },
    {
      "en": "workload",
      "zh": "工作量",
      "pos": "n.",
      "tag": "项目",
      "example": "Use 'workload' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：项目"
    }
  ],
  "科技互联网": [
    {
      "en": "algorithm",
      "zh": "算法",
      "pos": "n.",
      "tag": "AI",
      "example": "Use 'algorithm' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：AI"
    },
    {
      "en": "bandwidth",
      "zh": "带宽；容量",
      "pos": "n.",
      "tag": "网络",
      "example": "Use 'bandwidth' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：网络"
    },
    {
      "en": "browser",
      "zh": "浏览器",
      "pos": "n.",
      "tag": "网络",
      "example": "Use 'browser' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：网络"
    },
    {
      "en": "cache",
      "zh": "缓存；贮藏",
      "pos": "n./v.",
      "tag": "系统",
      "example": "Use 'cache' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：系统"
    },
    {
      "en": "cloud",
      "zh": "云；云服务",
      "pos": "n.",
      "tag": "网络",
      "example": "Use 'cloud' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：网络"
    },
    {
      "en": "compile",
      "zh": "编译；汇编",
      "pos": "v.",
      "tag": "开发",
      "example": "Use 'compile' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：开发"
    },
    {
      "en": "database",
      "zh": "数据库",
      "pos": "n.",
      "tag": "开发",
      "example": "Use 'database' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：开发"
    },
    {
      "en": "debug",
      "zh": "调试；排错",
      "pos": "v.",
      "tag": "开发",
      "example": "Use 'debug' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：开发"
    },
    {
      "en": "device",
      "zh": "设备；装置",
      "pos": "n.",
      "tag": "硬件",
      "example": "Use 'device' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：硬件"
    },
    {
      "en": "encryption",
      "zh": "加密",
      "pos": "n.",
      "tag": "安全",
      "example": "Use 'encryption' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：安全"
    },
    {
      "en": "firewall",
      "zh": "防火墙",
      "pos": "n.",
      "tag": "安全",
      "example": "Use 'firewall' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：安全"
    },
    {
      "en": "interface",
      "zh": "界面；接口",
      "pos": "n.",
      "tag": "产品",
      "example": "Use 'interface' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：产品"
    },
    {
      "en": "latency",
      "zh": "延迟；潜伏期",
      "pos": "n.",
      "tag": "网络",
      "example": "Use 'latency' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：网络"
    },
    {
      "en": "malware",
      "zh": "恶意软件",
      "pos": "n.",
      "tag": "安全",
      "example": "Use 'malware' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：安全"
    },
    {
      "en": "metadata",
      "zh": "元数据",
      "pos": "n.",
      "tag": "数据",
      "example": "Use 'metadata' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：数据"
    },
    {
      "en": "protocol",
      "zh": "协议；礼仪",
      "pos": "n.",
      "tag": "网络",
      "example": "Use 'protocol' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：网络"
    },
    {
      "en": "repository",
      "zh": "仓库；代码库",
      "pos": "n.",
      "tag": "开发",
      "example": "Use 'repository' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：开发"
    },
    {
      "en": "responsive",
      "zh": "响应式的；反应快的",
      "pos": "adj.",
      "tag": "产品",
      "example": "Use 'responsive' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：产品"
    },
    {
      "en": "scalable",
      "zh": "可扩展的",
      "pos": "adj.",
      "tag": "系统",
      "example": "Use 'scalable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：系统"
    },
    {
      "en": "server",
      "zh": "服务器；服务者",
      "pos": "n.",
      "tag": "网络",
      "example": "Use 'server' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：网络"
    },
    {
      "en": "synchronize",
      "zh": "同步",
      "pos": "v.",
      "tag": "系统",
      "example": "Use 'synchronize' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：系统"
    },
    {
      "en": "template",
      "zh": "模板；样板",
      "pos": "n.",
      "tag": "开发",
      "example": "Use 'template' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：开发"
    },
    {
      "en": "upload",
      "zh": "上传",
      "pos": "v./n.",
      "tag": "网络",
      "example": "Use 'upload' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：网络"
    },
    {
      "en": "virtual",
      "zh": "虚拟的；实质上的",
      "pos": "adj.",
      "tag": "科技",
      "example": "Use 'virtual' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：科技"
    },
    {
      "en": "wireless",
      "zh": "无线的",
      "pos": "adj.",
      "tag": "网络",
      "example": "Use 'wireless' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：网络"
    }
  ],
  "自然环境": [
    {
      "en": "atmosphere",
      "zh": "大气；氛围",
      "pos": "n.",
      "tag": "气候",
      "example": "Use 'atmosphere' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：气候"
    },
    {
      "en": "conserve",
      "zh": "保护；节省",
      "pos": "v.",
      "tag": "环保",
      "example": "Use 'conserve' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：环保"
    },
    {
      "en": "creek",
      "zh": "小溪；溪流",
      "pos": "n.",
      "tag": "地理",
      "example": "Use 'creek' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：地理"
    },
    {
      "en": "drought",
      "zh": "干旱；旱灾",
      "pos": "n.",
      "tag": "气候",
      "example": "Use 'drought' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：气候"
    },
    {
      "en": "ecosystem",
      "zh": "生态系统",
      "pos": "n.",
      "tag": "生态",
      "example": "Use 'ecosystem' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：生态"
    },
    {
      "en": "emission",
      "zh": "排放；散发",
      "pos": "n.",
      "tag": "环保",
      "example": "Use 'emission' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：环保"
    },
    {
      "en": "erosion",
      "zh": "侵蚀；腐蚀",
      "pos": "n.",
      "tag": "地理",
      "example": "Use 'erosion' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：地理"
    },
    {
      "en": "fertile",
      "zh": "肥沃的；富饶的",
      "pos": "adj.",
      "tag": "土地",
      "example": "Use 'fertile' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：土地"
    },
    {
      "en": "habitat",
      "zh": "栖息地",
      "pos": "n.",
      "tag": "生态",
      "example": "Use 'habitat' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：生态"
    },
    {
      "en": "humidity",
      "zh": "湿度；潮湿",
      "pos": "n.",
      "tag": "气候",
      "example": "Use 'humidity' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：气候"
    },
    {
      "en": "irrigation",
      "zh": "灌溉",
      "pos": "n.",
      "tag": "农业",
      "example": "Use 'irrigation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：农业"
    },
    {
      "en": "landscape",
      "zh": "风景；地貌",
      "pos": "n.",
      "tag": "地理",
      "example": "Use 'landscape' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：地理"
    },
    {
      "en": "mammal",
      "zh": "哺乳动物",
      "pos": "n.",
      "tag": "动物",
      "example": "Use 'mammal' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：动物"
    },
    {
      "en": "marine",
      "zh": "海洋的；海事的",
      "pos": "adj.",
      "tag": "海洋",
      "example": "Use 'marine' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：海洋"
    },
    {
      "en": "meadow",
      "zh": "草地；牧场",
      "pos": "n.",
      "tag": "地理",
      "example": "Use 'meadow' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：地理"
    },
    {
      "en": "mineral",
      "zh": "矿物；矿物质",
      "pos": "n.",
      "tag": "地理",
      "example": "Use 'mineral' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：地理"
    },
    {
      "en": "organic",
      "zh": "有机的；自然的",
      "pos": "adj.",
      "tag": "生态",
      "example": "Use 'organic' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：生态"
    },
    {
      "en": "rainforest",
      "zh": "雨林",
      "pos": "n.",
      "tag": "生态",
      "example": "Use 'rainforest' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：生态"
    },
    {
      "en": "species",
      "zh": "物种；种类",
      "pos": "n.",
      "tag": "生态",
      "example": "Use 'species' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：生态"
    },
    {
      "en": "terrain",
      "zh": "地形；地势",
      "pos": "n.",
      "tag": "地理",
      "example": "Use 'terrain' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：地理"
    },
    {
      "en": "vegetation",
      "zh": "植被；植物",
      "pos": "n.",
      "tag": "生态",
      "example": "Use 'vegetation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：生态"
    },
    {
      "en": "wildlife",
      "zh": "野生动物",
      "pos": "n.",
      "tag": "生态",
      "example": "Use 'wildlife' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：生态"
    }
  ],
  "旅行生活": [
    {
      "en": "accommodation",
      "zh": "住宿；膳宿",
      "pos": "n.",
      "tag": "酒店",
      "example": "Use 'accommodation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：酒店"
    },
    {
      "en": "aisle",
      "zh": "过道；通道",
      "pos": "n.",
      "tag": "交通",
      "example": "Use 'aisle' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "boarding",
      "zh": "登机；寄宿",
      "pos": "n.",
      "tag": "交通",
      "example": "Use 'boarding' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "brochure",
      "zh": "小册子；宣传册",
      "pos": "n.",
      "tag": "旅游",
      "example": "Use 'brochure' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：旅游"
    },
    {
      "en": "cabin",
      "zh": "客舱；小木屋",
      "pos": "n.",
      "tag": "交通",
      "example": "Use 'cabin' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "checkin",
      "zh": "办理入住；值机",
      "pos": "n.",
      "tag": "旅行",
      "example": "Use 'checkin' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：旅行"
    },
    {
      "en": "commute",
      "zh": "通勤",
      "pos": "v./n.",
      "tag": "交通",
      "example": "Use 'commute' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "currency",
      "zh": "货币；流通",
      "pos": "n.",
      "tag": "消费",
      "example": "Use 'currency' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：消费"
    },
    {
      "en": "destination",
      "zh": "目的地",
      "pos": "n.",
      "tag": "旅行",
      "example": "Use 'destination' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：旅行"
    },
    {
      "en": "fare",
      "zh": "车费；票价",
      "pos": "n.",
      "tag": "交通",
      "example": "Use 'fare' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "itinerary",
      "zh": "行程表",
      "pos": "n.",
      "tag": "旅行",
      "example": "Use 'itinerary' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：旅行"
    },
    {
      "en": "luggage",
      "zh": "行李",
      "pos": "n.",
      "tag": "旅行",
      "example": "Use 'luggage' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：旅行"
    },
    {
      "en": "passport",
      "zh": "护照",
      "pos": "n.",
      "tag": "旅行",
      "example": "Use 'passport' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：旅行"
    },
    {
      "en": "reservation",
      "zh": "预订；保留",
      "pos": "n.",
      "tag": "酒店",
      "example": "Use 'reservation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：酒店"
    },
    {
      "en": "souvenir",
      "zh": "纪念品",
      "pos": "n.",
      "tag": "购物",
      "example": "Use 'souvenir' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：购物"
    },
    {
      "en": "terminal",
      "zh": "航站楼；终端",
      "pos": "n.",
      "tag": "交通",
      "example": "Use 'terminal' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "transfer",
      "zh": "转乘；转移",
      "pos": "v./n.",
      "tag": "交通",
      "example": "Use 'transfer' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "transit",
      "zh": "运输；中转",
      "pos": "n.",
      "tag": "交通",
      "example": "Use 'transit' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "vacancy",
      "zh": "空房；空缺",
      "pos": "n.",
      "tag": "酒店",
      "example": "Use 'vacancy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：酒店"
    },
    {
      "en": "voucher",
      "zh": "代金券；凭证",
      "pos": "n.",
      "tag": "消费",
      "example": "Use 'voucher' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：消费"
    },
    {
      "en": "wayfinding",
      "zh": "寻路；导览",
      "pos": "n.",
      "tag": "旅行",
      "example": "Use 'wayfinding' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：旅行"
    }
  ],
  "学术写作": [
    {
      "en": "abstract",
      "zh": "摘要；抽象的",
      "pos": "n./adj.",
      "tag": "论文",
      "example": "Use 'abstract' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：论文"
    },
    {
      "en": "citation",
      "zh": "引用；引文",
      "pos": "n.",
      "tag": "论文",
      "example": "Use 'citation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：论文"
    },
    {
      "en": "coherence",
      "zh": "连贯性；一致性",
      "pos": "n.",
      "tag": "写作",
      "example": "Use 'coherence' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：写作"
    },
    {
      "en": "conclude",
      "zh": "总结；推断",
      "pos": "v.",
      "tag": "逻辑",
      "example": "Use 'conclude' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：逻辑"
    },
    {
      "en": "contradict",
      "zh": "反驳；矛盾",
      "pos": "v.",
      "tag": "论证",
      "example": "Use 'contradict' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：论证"
    },
    {
      "en": "criteria",
      "zh": "标准；准则",
      "pos": "n.",
      "tag": "研究",
      "example": "Use 'criteria' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    },
    {
      "en": "deduce",
      "zh": "推论；演绎",
      "pos": "v.",
      "tag": "逻辑",
      "example": "Use 'deduce' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：逻辑"
    },
    {
      "en": "emphasize",
      "zh": "强调；重视",
      "pos": "v.",
      "tag": "表达",
      "example": "Use 'emphasize' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：表达"
    },
    {
      "en": "hypothesis",
      "zh": "假设；前提",
      "pos": "n.",
      "tag": "研究",
      "example": "Use 'hypothesis' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    },
    {
      "en": "illustrate",
      "zh": "说明；举例",
      "pos": "v.",
      "tag": "写作",
      "example": "Use 'illustrate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：写作"
    },
    {
      "en": "interpret",
      "zh": "解释；口译",
      "pos": "v.",
      "tag": "研究",
      "example": "Use 'interpret' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    },
    {
      "en": "methodology",
      "zh": "方法论",
      "pos": "n.",
      "tag": "研究",
      "example": "Use 'methodology' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    },
    {
      "en": "objective",
      "zh": "客观的；目标",
      "pos": "adj./n.",
      "tag": "研究",
      "example": "Use 'objective' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    },
    {
      "en": "parameter",
      "zh": "参数；因素",
      "pos": "n.",
      "tag": "数据",
      "example": "Use 'parameter' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：数据"
    },
    {
      "en": "plagiarism",
      "zh": "剽窃；抄袭",
      "pos": "n.",
      "tag": "论文",
      "example": "Use 'plagiarism' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：论文"
    },
    {
      "en": "qualify",
      "zh": "限定；使合格",
      "pos": "v.",
      "tag": "论证",
      "example": "Use 'qualify' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：论证"
    },
    {
      "en": "reference",
      "zh": "参考；提及",
      "pos": "n./v.",
      "tag": "论文",
      "example": "Use 'reference' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：论文"
    },
    {
      "en": "revise",
      "zh": "修改；复习",
      "pos": "v.",
      "tag": "写作",
      "example": "Use 'revise' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：写作"
    },
    {
      "en": "significant",
      "zh": "显著的；重要的",
      "pos": "adj.",
      "tag": "研究",
      "example": "Use 'significant' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    },
    {
      "en": "synthesize",
      "zh": "综合；合成",
      "pos": "v.",
      "tag": "研究",
      "example": "Use 'synthesize' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    },
    {
      "en": "validity",
      "zh": "有效性；合理性",
      "pos": "n.",
      "tag": "研究",
      "example": "Use 'validity' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    }
  ],
  "情绪性格": [
    {
      "en": "ambitious",
      "zh": "有抱负的；野心勃勃的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'ambitious' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "anxious",
      "zh": "焦虑的；渴望的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'anxious' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "awkward",
      "zh": "尴尬的；笨拙的",
      "pos": "adj.",
      "tag": "感受",
      "example": "Use 'awkward' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：感受"
    },
    {
      "en": "calm",
      "zh": "平静的；使平静",
      "pos": "adj./v.",
      "tag": "情绪",
      "example": "Use 'calm' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "confident",
      "zh": "自信的；确信的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'confident' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "curious",
      "zh": "好奇的；稀奇的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'curious' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "determined",
      "zh": "坚定的；下定决心的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'determined' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "empathy",
      "zh": "同理心；共情",
      "pos": "n.",
      "tag": "社交",
      "example": "Use 'empathy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：社交"
    },
    {
      "en": "frustrated",
      "zh": "沮丧的；受挫的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'frustrated' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "grateful",
      "zh": "感激的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'grateful' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "hesitant",
      "zh": "犹豫的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'hesitant' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "impulsive",
      "zh": "冲动的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'impulsive' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "jealous",
      "zh": "嫉妒的；羡慕的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'jealous' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "modest",
      "zh": "谦虚的；适度的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'modest' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "optimistic",
      "zh": "乐观的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'optimistic' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "patient",
      "zh": "耐心的；病人",
      "pos": "adj./n.",
      "tag": "性格",
      "example": "Use 'patient' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "reliable",
      "zh": "可靠的；可信赖的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'reliable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "sensitive",
      "zh": "敏感的；体贴的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'sensitive' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "sincere",
      "zh": "真诚的；诚挚的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'sincere' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "stubborn",
      "zh": "固执的；顽强的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'stubborn' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "tolerant",
      "zh": "宽容的；能耐受的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'tolerant' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    }
  ],
  "医疗健康": [
    {
      "en": "allergy",
      "zh": "过敏；过敏症",
      "pos": "n.",
      "tag": "症状",
      "example": "Use 'allergy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：症状"
    },
    {
      "en": "ambulance",
      "zh": "救护车",
      "pos": "n.",
      "tag": "急救",
      "example": "Use 'ambulance' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：急救"
    },
    {
      "en": "appointment",
      "zh": "预约；约定",
      "pos": "n.",
      "tag": "就诊",
      "example": "Use 'appointment' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：就诊"
    },
    {
      "en": "bloodstream",
      "zh": "血流；血液循环",
      "pos": "n.",
      "tag": "身体",
      "example": "Use 'bloodstream' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：身体"
    },
    {
      "en": "diagnose",
      "zh": "诊断；判断",
      "pos": "v.",
      "tag": "医疗",
      "example": "Use 'diagnose' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：医疗"
    },
    {
      "en": "dietary",
      "zh": "饮食的；膳食的",
      "pos": "adj.",
      "tag": "健康",
      "example": "Use 'dietary' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：健康"
    },
    {
      "en": "fatigue",
      "zh": "疲劳；劳累",
      "pos": "n.",
      "tag": "症状",
      "example": "Use 'fatigue' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：症状"
    },
    {
      "en": "fracture",
      "zh": "骨折；断裂",
      "pos": "n./v.",
      "tag": "外伤",
      "example": "Use 'fracture' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：外伤"
    },
    {
      "en": "hygiene",
      "zh": "卫生；保健",
      "pos": "n.",
      "tag": "健康",
      "example": "Use 'hygiene' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：健康"
    },
    {
      "en": "immunity",
      "zh": "免疫力；豁免",
      "pos": "n.",
      "tag": "健康",
      "example": "Use 'immunity' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：健康"
    },
    {
      "en": "infection",
      "zh": "感染；传染",
      "pos": "n.",
      "tag": "疾病",
      "example": "Use 'infection' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：疾病"
    },
    {
      "en": "inflammation",
      "zh": "炎症；发炎",
      "pos": "n.",
      "tag": "疾病",
      "example": "Use 'inflammation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：疾病"
    },
    {
      "en": "nutrition",
      "zh": "营养；营养学",
      "pos": "n.",
      "tag": "健康",
      "example": "Use 'nutrition' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：健康"
    },
    {
      "en": "prescription",
      "zh": "处方；规定",
      "pos": "n.",
      "tag": "医疗",
      "example": "Use 'prescription' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：医疗"
    },
    {
      "en": "recovery",
      "zh": "恢复；痊愈",
      "pos": "n.",
      "tag": "健康",
      "example": "Use 'recovery' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：健康"
    },
    {
      "en": "rehabilitation",
      "zh": "康复；复原",
      "pos": "n.",
      "tag": "医疗",
      "example": "Use 'rehabilitation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：医疗"
    },
    {
      "en": "symptom",
      "zh": "症状；征兆",
      "pos": "n.",
      "tag": "疾病",
      "example": "Use 'symptom' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：疾病"
    },
    {
      "en": "therapy",
      "zh": "治疗；疗法",
      "pos": "n.",
      "tag": "医疗",
      "example": "Use 'therapy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：医疗"
    },
    {
      "en": "vaccine",
      "zh": "疫苗",
      "pos": "n.",
      "tag": "预防",
      "example": "Use 'vaccine' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：预防"
    },
    {
      "en": "ward",
      "zh": "病房；监护",
      "pos": "n.",
      "tag": "医院",
      "example": "Use 'ward' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：医院"
    },
    {
      "en": "wellness",
      "zh": "健康；良好状态",
      "pos": "n.",
      "tag": "健康",
      "example": "Use 'wellness' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：健康"
    }
  ],
  "新闻社会": [
    {
      "en": "administration",
      "zh": "行政部门；管理",
      "pos": "n.",
      "tag": "公共",
      "example": "Use 'administration' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "campaign",
      "zh": "运动；竞选活动",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'campaign' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "censorship",
      "zh": "审查制度",
      "pos": "n.",
      "tag": "媒体",
      "example": "Use 'censorship' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：媒体"
    },
    {
      "en": "citizen",
      "zh": "公民；市民",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'citizen' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "constitution",
      "zh": "宪法；构成",
      "pos": "n.",
      "tag": "法律",
      "example": "Use 'constitution' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：法律"
    },
    {
      "en": "coverage",
      "zh": "报道；覆盖范围",
      "pos": "n.",
      "tag": "媒体",
      "example": "Use 'coverage' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：媒体"
    },
    {
      "en": "crisis",
      "zh": "危机；紧急关头",
      "pos": "n.",
      "tag": "新闻",
      "example": "Use 'crisis' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：新闻"
    },
    {
      "en": "debate",
      "zh": "辩论；争论",
      "pos": "n./v.",
      "tag": "公共",
      "example": "Use 'debate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "diplomacy",
      "zh": "外交；交际手腕",
      "pos": "n.",
      "tag": "国际",
      "example": "Use 'diplomacy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：国际"
    },
    {
      "en": "election",
      "zh": "选举",
      "pos": "n.",
      "tag": "公共",
      "example": "Use 'election' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "equality",
      "zh": "平等；相等",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'equality' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "immigration",
      "zh": "移民；移居",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'immigration' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "justice",
      "zh": "正义；司法",
      "pos": "n.",
      "tag": "法律",
      "example": "Use 'justice' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：法律"
    },
    {
      "en": "legislation",
      "zh": "立法；法律",
      "pos": "n.",
      "tag": "法律",
      "example": "Use 'legislation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：法律"
    },
    {
      "en": "minority",
      "zh": "少数；少数群体",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'minority' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "policy",
      "zh": "政策；方针",
      "pos": "n.",
      "tag": "公共",
      "example": "Use 'policy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "protest",
      "zh": "抗议；反对",
      "pos": "n./v.",
      "tag": "社会",
      "example": "Use 'protest' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "referendum",
      "zh": "全民公投",
      "pos": "n.",
      "tag": "公共",
      "example": "Use 'referendum' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "reform",
      "zh": "改革；改良",
      "pos": "n./v.",
      "tag": "社会",
      "example": "Use 'reform' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "regulation",
      "zh": "规定；监管",
      "pos": "n.",
      "tag": "法律",
      "example": "Use 'regulation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：法律"
    },
    {
      "en": "sanction",
      "zh": "制裁；批准",
      "pos": "n./v.",
      "tag": "国际",
      "example": "Use 'sanction' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：国际"
    },
    {
      "en": "scandal",
      "zh": "丑闻；丢脸事",
      "pos": "n.",
      "tag": "媒体",
      "example": "Use 'scandal' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：媒体"
    },
    {
      "en": "survey",
      "zh": "调查；测量",
      "pos": "n./v.",
      "tag": "媒体",
      "example": "Use 'survey' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：媒体"
    },
    {
      "en": "transparency",
      "zh": "透明度；透明性",
      "pos": "n.",
      "tag": "公共",
      "example": "Use 'transparency' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    }
  ],
  "艺术文化": [
    {
      "en": "aesthetics",
      "zh": "美学；审美",
      "pos": "n.",
      "tag": "艺术",
      "example": "Use 'aesthetics' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：艺术"
    },
    {
      "en": "archive",
      "zh": "档案；归档",
      "pos": "n./v.",
      "tag": "文化",
      "example": "Use 'archive' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：文化"
    },
    {
      "en": "ceremony",
      "zh": "仪式；典礼",
      "pos": "n.",
      "tag": "文化",
      "example": "Use 'ceremony' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：文化"
    },
    {
      "en": "choreography",
      "zh": "编舞；舞蹈设计",
      "pos": "n.",
      "tag": "舞蹈",
      "example": "Use 'choreography' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：舞蹈"
    },
    {
      "en": "cinema",
      "zh": "电影；电影院",
      "pos": "n.",
      "tag": "电影",
      "example": "Use 'cinema' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：电影"
    },
    {
      "en": "curator",
      "zh": "策展人；馆长",
      "pos": "n.",
      "tag": "艺术",
      "example": "Use 'curator' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：艺术"
    },
    {
      "en": "documentary",
      "zh": "纪录片；纪实的",
      "pos": "n./adj.",
      "tag": "电影",
      "example": "Use 'documentary' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：电影"
    },
    {
      "en": "drama",
      "zh": "戏剧；戏剧性事件",
      "pos": "n.",
      "tag": "戏剧",
      "example": "Use 'drama' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：戏剧"
    },
    {
      "en": "genre",
      "zh": "体裁；类型",
      "pos": "n.",
      "tag": "文学",
      "example": "Use 'genre' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：文学"
    },
    {
      "en": "improvise",
      "zh": "即兴创作；临时做",
      "pos": "v.",
      "tag": "艺术",
      "example": "Use 'improvise' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：艺术"
    },
    {
      "en": "manuscript",
      "zh": "手稿；原稿",
      "pos": "n.",
      "tag": "文学",
      "example": "Use 'manuscript' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：文学"
    },
    {
      "en": "masterpiece",
      "zh": "杰作；代表作",
      "pos": "n.",
      "tag": "艺术",
      "example": "Use 'masterpiece' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：艺术"
    },
    {
      "en": "medium",
      "zh": "媒介；中等的",
      "pos": "n./adj.",
      "tag": "艺术",
      "example": "Use 'medium' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：艺术"
    },
    {
      "en": "museum",
      "zh": "博物馆",
      "pos": "n.",
      "tag": "文化",
      "example": "Use 'museum' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：文化"
    },
    {
      "en": "narrative",
      "zh": "叙事；故事",
      "pos": "n./adj.",
      "tag": "文学",
      "example": "Use 'narrative' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：文学"
    },
    {
      "en": "rehearsal",
      "zh": "排练；演练",
      "pos": "n.",
      "tag": "舞台",
      "example": "Use 'rehearsal' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：舞台"
    },
    {
      "en": "renaissance",
      "zh": "文艺复兴；复兴",
      "pos": "n.",
      "tag": "文化",
      "example": "Use 'renaissance' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：文化"
    },
    {
      "en": "satire",
      "zh": "讽刺；讽刺作品",
      "pos": "n.",
      "tag": "文学",
      "example": "Use 'satire' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：文学"
    },
    {
      "en": "script",
      "zh": "剧本；脚本",
      "pos": "n.",
      "tag": "戏剧",
      "example": "Use 'script' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：戏剧"
    },
    {
      "en": "texture",
      "zh": "质地；纹理",
      "pos": "n.",
      "tag": "设计",
      "example": "Use 'texture' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：设计"
    },
    {
      "en": "venue",
      "zh": "场地；会场",
      "pos": "n.",
      "tag": "演出",
      "example": "Use 'venue' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：演出"
    }
  ],
  "词根进阶": [
    {
      "en": "circumference",
      "zh": "周长；圆周",
      "pos": "n.",
      "tag": "circum周围",
      "example": "Use 'circumference' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：circum周围"
    },
    {
      "en": "circumnavigate",
      "zh": "环航；绕行",
      "pos": "v.",
      "tag": "circum周围",
      "example": "Use 'circumnavigate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：circum周围"
    },
    {
      "en": "contradict",
      "zh": "反驳；矛盾",
      "pos": "v.",
      "tag": "contra反",
      "example": "Use 'contradict' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：contra反"
    },
    {
      "en": "contrary",
      "zh": "相反的；反面",
      "pos": "adj./n.",
      "tag": "contra反",
      "example": "Use 'contrary' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：contra反"
    },
    {
      "en": "benefactor",
      "zh": "恩人；捐助者",
      "pos": "n.",
      "tag": "bene好",
      "example": "Use 'benefactor' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：bene好"
    },
    {
      "en": "malfunction",
      "zh": "故障；失灵",
      "pos": "n./v.",
      "tag": "mal坏",
      "example": "Use 'malfunction' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：mal坏"
    },
    {
      "en": "malnutrition",
      "zh": "营养不良",
      "pos": "n.",
      "tag": "mal坏",
      "example": "Use 'malnutrition' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：mal坏"
    },
    {
      "en": "submarine",
      "zh": "潜艇；海底的",
      "pos": "n./adj.",
      "tag": "sub下",
      "example": "Use 'submarine' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：sub下"
    },
    {
      "en": "substitute",
      "zh": "替代；代替者",
      "pos": "v./n.",
      "tag": "sub下",
      "example": "Use 'substitute' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：sub下"
    },
    {
      "en": "transmit",
      "zh": "传送；传播",
      "pos": "v.",
      "tag": "trans跨",
      "example": "Use 'transmit' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：trans跨"
    },
    {
      "en": "transform",
      "zh": "转变；改造",
      "pos": "v.",
      "tag": "trans跨",
      "example": "Use 'transform' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：trans跨"
    },
    {
      "en": "autograph",
      "zh": "亲笔签名",
      "pos": "n.",
      "tag": "auto自己",
      "example": "Use 'autograph' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：auto自己"
    },
    {
      "en": "automatic",
      "zh": "自动的",
      "pos": "adj.",
      "tag": "auto自己",
      "example": "Use 'automatic' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：auto自己"
    },
    {
      "en": "chronology",
      "zh": "年代顺序；年表",
      "pos": "n.",
      "tag": "chron时间",
      "example": "Use 'chronology' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：chron时间"
    },
    {
      "en": "synchronize",
      "zh": "同步；同时发生",
      "pos": "v.",
      "tag": "chron时间",
      "example": "Use 'synchronize' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：chron时间"
    },
    {
      "en": "microphone",
      "zh": "麦克风",
      "pos": "n.",
      "tag": "micro小",
      "example": "Use 'microphone' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：micro小"
    },
    {
      "en": "microscope",
      "zh": "显微镜",
      "pos": "n.",
      "tag": "micro小",
      "example": "Use 'microscope' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：micro小"
    },
    {
      "en": "telegraph",
      "zh": "电报；用电报发送",
      "pos": "n./v.",
      "tag": "tele远",
      "example": "Use 'telegraph' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：tele远"
    },
    {
      "en": "telescope",
      "zh": "望远镜",
      "pos": "n.",
      "tag": "tele远",
      "example": "Use 'telescope' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：tele远"
    },
    {
      "en": "postpone",
      "zh": "推迟；延期",
      "pos": "v.",
      "tag": "post后",
      "example": "Use 'postpone' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：post后"
    },
    {
      "en": "preview",
      "zh": "预览；预告",
      "pos": "n./v.",
      "tag": "pre前",
      "example": "Use 'preview' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：pre前"
    },
    {
      "en": "retrospect",
      "zh": "回顾；追溯",
      "pos": "n./v.",
      "tag": "retro回",
      "example": "Use 'retrospect' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：retro回"
    },
    {
      "en": "biology",
      "zh": "生物学",
      "pos": "n.",
      "tag": "bio生命",
      "example": "Use 'biology' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：bio生命"
    },
    {
      "en": "biodegradable",
      "zh": "可生物降解的",
      "pos": "adj.",
      "tag": "bio生命",
      "example": "Use 'biodegradable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：bio生命"
    },
    {
      "en": "phonetic",
      "zh": "语音的；音标的",
      "pos": "adj.",
      "tag": "phon声音",
      "example": "Use 'phonetic' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：phon声音"
    },
    {
      "en": "symphony",
      "zh": "交响乐；和谐",
      "pos": "n.",
      "tag": "phon声音",
      "example": "Use 'symphony' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：phon声音"
    }
  ]
};

Object.entries(WORD_BANK_SUPPLEMENT_V096).forEach(([name, entries]) => {
  const existed = new Set((WORD_BANKS[name] || []).map((item) => String(item.en || '').toLowerCase()));
  const unique = entries.filter((item) => item?.en && !existed.has(String(item.en).toLowerCase()));
  WORD_BANKS[name] = [ ...(WORD_BANKS[name] || []), ...unique ];
});


/* v0.9.6 主题词库第二轮补全：让小词库也有足够轮换空间。 */
const WORD_BANK_SUPPLEMENT_V096_B = {
  "商务职场": [
    {
      "en": "benchmark",
      "zh": "基准；标杆",
      "pos": "n./v.",
      "tag": "管理",
      "example": "Use 'benchmark' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：管理"
    },
    {
      "en": "capacity",
      "zh": "能力；容量",
      "pos": "n.",
      "tag": "运营",
      "example": "Use 'capacity' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：运营"
    },
    {
      "en": "collaboration",
      "zh": "合作；协作",
      "pos": "n.",
      "tag": "团队",
      "example": "Use 'collaboration' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：团队"
    },
    {
      "en": "commission",
      "zh": "佣金；委员会",
      "pos": "n.",
      "tag": "商务",
      "example": "Use 'commission' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：商务"
    },
    {
      "en": "compliance",
      "zh": "合规；遵从",
      "pos": "n.",
      "tag": "法律",
      "example": "Use 'compliance' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：法律"
    },
    {
      "en": "distribution",
      "zh": "分发；配送",
      "pos": "n.",
      "tag": "运营",
      "example": "Use 'distribution' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：运营"
    },
    {
      "en": "enterprise",
      "zh": "企业；事业",
      "pos": "n.",
      "tag": "组织",
      "example": "Use 'enterprise' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：组织"
    },
    {
      "en": "inventory",
      "zh": "库存；清单",
      "pos": "n.",
      "tag": "运营",
      "example": "Use 'inventory' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：运营"
    },
    {
      "en": "margin",
      "zh": "利润率；边缘",
      "pos": "n.",
      "tag": "财务",
      "example": "Use 'margin' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：财务"
    },
    {
      "en": "outsource",
      "zh": "外包",
      "pos": "v.",
      "tag": "运营",
      "example": "Use 'outsource' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：商务职场 · 标签：运营"
    }
  ],
  "科技互联网": [
    {
      "en": "automation",
      "zh": "自动化",
      "pos": "n.",
      "tag": "系统",
      "example": "Use 'automation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：系统"
    },
    {
      "en": "biometric",
      "zh": "生物识别的",
      "pos": "adj.",
      "tag": "安全",
      "example": "Use 'biometric' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：安全"
    },
    {
      "en": "chatbot",
      "zh": "聊天机器人",
      "pos": "n.",
      "tag": "AI",
      "example": "Use 'chatbot' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：AI"
    },
    {
      "en": "dashboard",
      "zh": "仪表盘；控制面板",
      "pos": "n.",
      "tag": "产品",
      "example": "Use 'dashboard' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：产品"
    },
    {
      "en": "deployment",
      "zh": "部署；展开",
      "pos": "n.",
      "tag": "开发",
      "example": "Use 'deployment' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：开发"
    },
    {
      "en": "firmware",
      "zh": "固件",
      "pos": "n.",
      "tag": "硬件",
      "example": "Use 'firmware' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：硬件"
    },
    {
      "en": "iteration",
      "zh": "迭代；重复",
      "pos": "n.",
      "tag": "开发",
      "example": "Use 'iteration' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：开发"
    },
    {
      "en": "machine",
      "zh": "机器；机械",
      "pos": "n.",
      "tag": "硬件",
      "example": "Use 'machine' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：硬件"
    },
    {
      "en": "network",
      "zh": "网络；联网",
      "pos": "n./v.",
      "tag": "网络",
      "example": "Use 'network' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：网络"
    },
    {
      "en": "pixel",
      "zh": "像素",
      "pos": "n.",
      "tag": "设计",
      "example": "Use 'pixel' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：设计"
    },
    {
      "en": "prototype",
      "zh": "原型；样机",
      "pos": "n.",
      "tag": "产品",
      "example": "Use 'prototype' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：产品"
    },
    {
      "en": "sandbox",
      "zh": "沙盒；测试环境",
      "pos": "n.",
      "tag": "开发",
      "example": "Use 'sandbox' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：科技互联网 · 标签：开发"
    }
  ],
  "自然环境": [
    {
      "en": "avalanche",
      "zh": "雪崩",
      "pos": "n.",
      "tag": "地理",
      "example": "Use 'avalanche' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：地理"
    },
    {
      "en": "canopy",
      "zh": "树冠；天篷",
      "pos": "n.",
      "tag": "森林",
      "example": "Use 'canopy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：森林"
    },
    {
      "en": "delta",
      "zh": "三角洲；差量",
      "pos": "n.",
      "tag": "地理",
      "example": "Use 'delta' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：地理"
    },
    {
      "en": "estuary",
      "zh": "河口；入海口",
      "pos": "n.",
      "tag": "地理",
      "example": "Use 'estuary' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：地理"
    },
    {
      "en": "fossil",
      "zh": "化石；化石的",
      "pos": "n./adj.",
      "tag": "地质",
      "example": "Use 'fossil' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：地质"
    },
    {
      "en": "glacier",
      "zh": "冰川",
      "pos": "n.",
      "tag": "气候",
      "example": "Use 'glacier' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：气候"
    },
    {
      "en": "horizon",
      "zh": "地平线；眼界",
      "pos": "n.",
      "tag": "地理",
      "example": "Use 'horizon' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：地理"
    },
    {
      "en": "lagoon",
      "zh": "潟湖；环礁湖",
      "pos": "n.",
      "tag": "水域",
      "example": "Use 'lagoon' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：水域"
    },
    {
      "en": "monsoon",
      "zh": "季风；雨季",
      "pos": "n.",
      "tag": "气候",
      "example": "Use 'monsoon' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：气候"
    },
    {
      "en": "ozone",
      "zh": "臭氧",
      "pos": "n.",
      "tag": "气候",
      "example": "Use 'ozone' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：气候"
    },
    {
      "en": "peninsula",
      "zh": "半岛",
      "pos": "n.",
      "tag": "地理",
      "example": "Use 'peninsula' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：地理"
    },
    {
      "en": "prairie",
      "zh": "大草原",
      "pos": "n.",
      "tag": "生态",
      "example": "Use 'prairie' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：生态"
    },
    {
      "en": "reef",
      "zh": "礁；暗礁",
      "pos": "n.",
      "tag": "海洋",
      "example": "Use 'reef' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：海洋"
    },
    {
      "en": "savanna",
      "zh": "稀树草原",
      "pos": "n.",
      "tag": "生态",
      "example": "Use 'savanna' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：生态"
    },
    {
      "en": "tundra",
      "zh": "冻原；苔原",
      "pos": "n.",
      "tag": "生态",
      "example": "Use 'tundra' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：自然环境 · 标签：生态"
    }
  ],
  "旅行生活": [
    {
      "en": "backpack",
      "zh": "背包；背包旅行",
      "pos": "n./v.",
      "tag": "旅行",
      "example": "Use 'backpack' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：旅行"
    },
    {
      "en": "beverage",
      "zh": "饮料",
      "pos": "n.",
      "tag": "餐饮",
      "example": "Use 'beverage' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：餐饮"
    },
    {
      "en": "boulevard",
      "zh": "林荫大道",
      "pos": "n.",
      "tag": "城市",
      "example": "Use 'boulevard' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：城市"
    },
    {
      "en": "cafeteria",
      "zh": "自助餐厅；食堂",
      "pos": "n.",
      "tag": "餐饮",
      "example": "Use 'cafeteria' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：餐饮"
    },
    {
      "en": "detour",
      "zh": "绕路；绕行",
      "pos": "n./v.",
      "tag": "交通",
      "example": "Use 'detour' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "embassy",
      "zh": "大使馆",
      "pos": "n.",
      "tag": "旅行",
      "example": "Use 'embassy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：旅行"
    },
    {
      "en": "ferry",
      "zh": "渡船；摆渡",
      "pos": "n./v.",
      "tag": "交通",
      "example": "Use 'ferry' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "hostel",
      "zh": "青年旅舍",
      "pos": "n.",
      "tag": "住宿",
      "example": "Use 'hostel' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：住宿"
    },
    {
      "en": "laundry",
      "zh": "洗衣；待洗衣物",
      "pos": "n.",
      "tag": "生活",
      "example": "Use 'laundry' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：生活"
    },
    {
      "en": "metro",
      "zh": "地铁",
      "pos": "n.",
      "tag": "交通",
      "example": "Use 'metro' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "neighborhood",
      "zh": "街区；邻里",
      "pos": "n.",
      "tag": "生活",
      "example": "Use 'neighborhood' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：生活"
    },
    {
      "en": "platform",
      "zh": "站台；平台",
      "pos": "n.",
      "tag": "交通",
      "example": "Use 'platform' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "receipt",
      "zh": "收据；收到",
      "pos": "n.",
      "tag": "消费",
      "example": "Use 'receipt' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：消费"
    },
    {
      "en": "route",
      "zh": "路线；路由",
      "pos": "n.",
      "tag": "交通",
      "example": "Use 'route' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    },
    {
      "en": "schedule",
      "zh": "时间表；安排",
      "pos": "n./v.",
      "tag": "旅行",
      "example": "Use 'schedule' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：旅行"
    }
  ],
  "学术写作": [
    {
      "en": "appendix",
      "zh": "附录；附属物",
      "pos": "n.",
      "tag": "论文",
      "example": "Use 'appendix' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：论文"
    },
    {
      "en": "assumption",
      "zh": "假设；设想",
      "pos": "n.",
      "tag": "研究",
      "example": "Use 'assumption' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    },
    {
      "en": "correlation",
      "zh": "相关性；相互关系",
      "pos": "n.",
      "tag": "数据",
      "example": "Use 'correlation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：数据"
    },
    {
      "en": "dataset",
      "zh": "数据集",
      "pos": "n.",
      "tag": "研究",
      "example": "Use 'dataset' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    },
    {
      "en": "evidence",
      "zh": "证据；证明",
      "pos": "n.",
      "tag": "论证",
      "example": "Use 'evidence' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：论证"
    },
    {
      "en": "implication",
      "zh": "含义；影响",
      "pos": "n.",
      "tag": "写作",
      "example": "Use 'implication' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：写作"
    },
    {
      "en": "inference",
      "zh": "推论；推断",
      "pos": "n.",
      "tag": "逻辑",
      "example": "Use 'inference' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：逻辑"
    },
    {
      "en": "limitation",
      "zh": "限制；局限",
      "pos": "n.",
      "tag": "研究",
      "example": "Use 'limitation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    },
    {
      "en": "literature",
      "zh": "文献；文学",
      "pos": "n.",
      "tag": "论文",
      "example": "Use 'literature' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：论文"
    },
    {
      "en": "paraphrase",
      "zh": "释义；改述",
      "pos": "v./n.",
      "tag": "写作",
      "example": "Use 'paraphrase' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：写作"
    },
    {
      "en": "premise",
      "zh": "前提；假定",
      "pos": "n.",
      "tag": "逻辑",
      "example": "Use 'premise' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：逻辑"
    },
    {
      "en": "variable",
      "zh": "变量；可变的",
      "pos": "n./adj.",
      "tag": "数据",
      "example": "Use 'variable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：数据"
    },
    {
      "en": "verification",
      "zh": "验证；核实",
      "pos": "n.",
      "tag": "研究",
      "example": "Use 'verification' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    }
  ],
  "情绪性格": [
    {
      "en": "affectionate",
      "zh": "深情的；慈爱的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'affectionate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "apathetic",
      "zh": "冷漠的；无兴趣的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'apathetic' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "assertive",
      "zh": "坚定自信的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'assertive' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "cheerful",
      "zh": "快乐的；令人愉快的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'cheerful' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "compassion",
      "zh": "同情；怜悯",
      "pos": "n.",
      "tag": "情感",
      "example": "Use 'compassion' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情感"
    },
    {
      "en": "courageous",
      "zh": "勇敢的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'courageous' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "diligent",
      "zh": "勤奋的；用功的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'diligent' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "embarrassed",
      "zh": "尴尬的；窘迫的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'embarrassed' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "generous",
      "zh": "慷慨的；大量的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'generous' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "gloomy",
      "zh": "阴郁的；沮丧的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'gloomy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "insecure",
      "zh": "不安的；无保障的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'insecure' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "loyal",
      "zh": "忠诚的；忠实的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'loyal' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "mature",
      "zh": "成熟的；使成熟",
      "pos": "adj./v.",
      "tag": "性格",
      "example": "Use 'mature' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "nervous",
      "zh": "紧张的；神经的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'nervous' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "outgoing",
      "zh": "外向的；离任的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'outgoing' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "proud",
      "zh": "骄傲的；自豪的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'proud' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "reserved",
      "zh": "内向的；保留的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'reserved' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "sympathetic",
      "zh": "同情的；赞同的",
      "pos": "adj.",
      "tag": "情感",
      "example": "Use 'sympathetic' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情感"
    },
    {
      "en": "thoughtful",
      "zh": "体贴的；深思的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'thoughtful' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "uneasy",
      "zh": "不安的；不舒服的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'uneasy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "witty",
      "zh": "机智的；风趣的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'witty' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    }
  ],
  "医疗健康": [
    {
      "en": "antibiotic",
      "zh": "抗生素",
      "pos": "n./adj.",
      "tag": "药物",
      "example": "Use 'antibiotic' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：药物"
    },
    {
      "en": "clinic",
      "zh": "诊所；门诊部",
      "pos": "n.",
      "tag": "医院",
      "example": "Use 'clinic' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：医院"
    },
    {
      "en": "contagious",
      "zh": "有传染性的",
      "pos": "adj.",
      "tag": "疾病",
      "example": "Use 'contagious' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：疾病"
    },
    {
      "en": "dizziness",
      "zh": "头晕；眩晕",
      "pos": "n.",
      "tag": "症状",
      "example": "Use 'dizziness' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：症状"
    },
    {
      "en": "dosage",
      "zh": "剂量；用量",
      "pos": "n.",
      "tag": "药物",
      "example": "Use 'dosage' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：药物"
    },
    {
      "en": "emergency",
      "zh": "紧急情况",
      "pos": "n.",
      "tag": "急救",
      "example": "Use 'emergency' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：急救"
    },
    {
      "en": "heartbeat",
      "zh": "心跳；心搏",
      "pos": "n.",
      "tag": "身体",
      "example": "Use 'heartbeat' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：身体"
    },
    {
      "en": "insomnia",
      "zh": "失眠",
      "pos": "n.",
      "tag": "症状",
      "example": "Use 'insomnia' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：症状"
    },
    {
      "en": "metabolism",
      "zh": "新陈代谢",
      "pos": "n.",
      "tag": "身体",
      "example": "Use 'metabolism' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：身体"
    },
    {
      "en": "obesity",
      "zh": "肥胖；肥胖症",
      "pos": "n.",
      "tag": "健康",
      "example": "Use 'obesity' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：健康"
    },
    {
      "en": "operation",
      "zh": "手术；操作",
      "pos": "n.",
      "tag": "医疗",
      "example": "Use 'operation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：医疗"
    },
    {
      "en": "pulse",
      "zh": "脉搏；脉冲",
      "pos": "n.",
      "tag": "身体",
      "example": "Use 'pulse' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：身体"
    },
    {
      "en": "respiration",
      "zh": "呼吸；呼吸作用",
      "pos": "n.",
      "tag": "身体",
      "example": "Use 'respiration' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：身体"
    },
    {
      "en": "stamina",
      "zh": "耐力；持久力",
      "pos": "n.",
      "tag": "健康",
      "example": "Use 'stamina' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：健康"
    },
    {
      "en": "sterile",
      "zh": "无菌的；贫瘠的",
      "pos": "adj.",
      "tag": "医疗",
      "example": "Use 'sterile' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：医疗"
    },
    {
      "en": "surgeon",
      "zh": "外科医生",
      "pos": "n.",
      "tag": "医院",
      "example": "Use 'surgeon' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：医院"
    },
    {
      "en": "tablet",
      "zh": "药片；平板电脑",
      "pos": "n.",
      "tag": "药物",
      "example": "Use 'tablet' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：药物"
    }
  ],
  "新闻社会": [
    {
      "en": "advocacy",
      "zh": "倡导；拥护",
      "pos": "n.",
      "tag": "公共",
      "example": "Use 'advocacy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "assembly",
      "zh": "集会；装配",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'assembly' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "authority",
      "zh": "权威；当局",
      "pos": "n.",
      "tag": "公共",
      "example": "Use 'authority' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "broadcast",
      "zh": "广播；播送",
      "pos": "n./v.",
      "tag": "媒体",
      "example": "Use 'broadcast' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：媒体"
    },
    {
      "en": "bureau",
      "zh": "局；办事处",
      "pos": "n.",
      "tag": "公共",
      "example": "Use 'bureau' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "coalition",
      "zh": "联盟；联合",
      "pos": "n.",
      "tag": "公共",
      "example": "Use 'coalition' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "corruption",
      "zh": "腐败；堕落",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'corruption' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "discrimination",
      "zh": "歧视；区别对待",
      "pos": "n.",
      "tag": "社会",
      "example": "Use 'discrimination' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "editorial",
      "zh": "社论；编辑的",
      "pos": "n./adj.",
      "tag": "媒体",
      "example": "Use 'editorial' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：媒体"
    },
    {
      "en": "headline",
      "zh": "标题；头条新闻",
      "pos": "n.",
      "tag": "媒体",
      "example": "Use 'headline' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：媒体"
    },
    {
      "en": "humanitarian",
      "zh": "人道主义的；慈善家",
      "pos": "adj./n.",
      "tag": "社会",
      "example": "Use 'humanitarian' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "journalism",
      "zh": "新闻业；新闻工作",
      "pos": "n.",
      "tag": "媒体",
      "example": "Use 'journalism' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：媒体"
    },
    {
      "en": "lawsuit",
      "zh": "诉讼；官司",
      "pos": "n.",
      "tag": "法律",
      "example": "Use 'lawsuit' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：法律"
    },
    {
      "en": "municipal",
      "zh": "市政的；地方的",
      "pos": "adj.",
      "tag": "公共",
      "example": "Use 'municipal' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "parliament",
      "zh": "议会；国会",
      "pos": "n.",
      "tag": "公共",
      "example": "Use 'parliament' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "petition",
      "zh": "请愿书；请愿",
      "pos": "n./v.",
      "tag": "社会",
      "example": "Use 'petition' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "rally",
      "zh": "集会；恢复",
      "pos": "n./v.",
      "tag": "社会",
      "example": "Use 'rally' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：社会"
    },
    {
      "en": "subsidy",
      "zh": "补贴；津贴",
      "pos": "n.",
      "tag": "经济",
      "example": "Use 'subsidy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：经济"
    },
    {
      "en": "testimony",
      "zh": "证词；证言",
      "pos": "n.",
      "tag": "法律",
      "example": "Use 'testimony' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：法律"
    }
  ],
  "艺术文化": [
    {
      "en": "adaptation",
      "zh": "改编；适应",
      "pos": "n.",
      "tag": "影视",
      "example": "Use 'adaptation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：影视"
    },
    {
      "en": "artifact",
      "zh": "人工制品；文物",
      "pos": "n.",
      "tag": "文化",
      "example": "Use 'artifact' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：文化"
    },
    {
      "en": "ballad",
      "zh": "民谣；叙事诗",
      "pos": "n.",
      "tag": "音乐",
      "example": "Use 'ballad' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：音乐"
    },
    {
      "en": "calligraphy",
      "zh": "书法",
      "pos": "n.",
      "tag": "艺术",
      "example": "Use 'calligraphy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：艺术"
    },
    {
      "en": "carve",
      "zh": "雕刻；切开",
      "pos": "v.",
      "tag": "工艺",
      "example": "Use 'carve' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：工艺"
    },
    {
      "en": "chorus",
      "zh": "合唱；副歌",
      "pos": "n.",
      "tag": "音乐",
      "example": "Use 'chorus' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：音乐"
    },
    {
      "en": "decorative",
      "zh": "装饰性的",
      "pos": "adj.",
      "tag": "设计",
      "example": "Use 'decorative' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：设计"
    },
    {
      "en": "folklore",
      "zh": "民俗；民间传说",
      "pos": "n.",
      "tag": "文化",
      "example": "Use 'folklore' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：文化"
    },
    {
      "en": "mural",
      "zh": "壁画",
      "pos": "n.",
      "tag": "艺术",
      "example": "Use 'mural' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：艺术"
    },
    {
      "en": "nostalgia",
      "zh": "怀旧；乡愁",
      "pos": "n.",
      "tag": "文化",
      "example": "Use 'nostalgia' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：文化"
    },
    {
      "en": "palette",
      "zh": "调色板；色彩范围",
      "pos": "n.",
      "tag": "艺术",
      "example": "Use 'palette' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：艺术"
    },
    {
      "en": "playwright",
      "zh": "剧作家",
      "pos": "n.",
      "tag": "戏剧",
      "example": "Use 'playwright' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：戏剧"
    },
    {
      "en": "protagonist",
      "zh": "主角；主要人物",
      "pos": "n.",
      "tag": "文学",
      "example": "Use 'protagonist' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：文学"
    },
    {
      "en": "symphony",
      "zh": "交响乐；和谐",
      "pos": "n.",
      "tag": "音乐",
      "example": "Use 'symphony' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：音乐"
    },
    {
      "en": "theater",
      "zh": "剧院；戏剧",
      "pos": "n.",
      "tag": "戏剧",
      "example": "Use 'theater' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：戏剧"
    },
    {
      "en": "vocal",
      "zh": "嗓音的；声乐的",
      "pos": "adj.",
      "tag": "音乐",
      "example": "Use 'vocal' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：艺术文化 · 标签：音乐"
    }
  ],
  "词根进阶": [
    {
      "en": "aquatic",
      "zh": "水生的；水中的",
      "pos": "adj.",
      "tag": "aqua水",
      "example": "Use 'aquatic' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：aqua水"
    },
    {
      "en": "aquarium",
      "zh": "水族馆；鱼缸",
      "pos": "n.",
      "tag": "aqua水",
      "example": "Use 'aquarium' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：aqua水"
    },
    {
      "en": "centimeter",
      "zh": "厘米",
      "pos": "n.",
      "tag": "cent百",
      "example": "Use 'centimeter' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：cent百"
    },
    {
      "en": "century",
      "zh": "世纪；百年",
      "pos": "n.",
      "tag": "cent百",
      "example": "Use 'century' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：cent百"
    },
    {
      "en": "geothermal",
      "zh": "地热的",
      "pos": "adj.",
      "tag": "geo地",
      "example": "Use 'geothermal' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：geo地"
    },
    {
      "en": "hemisphere",
      "zh": "半球",
      "pos": "n.",
      "tag": "hemi半",
      "example": "Use 'hemisphere' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：hemi半"
    },
    {
      "en": "monologue",
      "zh": "独白；长篇讲话",
      "pos": "n.",
      "tag": "mono单",
      "example": "Use 'monologue' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：mono单"
    },
    {
      "en": "monopoly",
      "zh": "垄断；专卖",
      "pos": "n.",
      "tag": "mono单",
      "example": "Use 'monopoly' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：mono单"
    },
    {
      "en": "polygon",
      "zh": "多边形",
      "pos": "n.",
      "tag": "poly多",
      "example": "Use 'polygon' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：poly多"
    },
    {
      "en": "polyglot",
      "zh": "通晓多种语言的人",
      "pos": "n./adj.",
      "tag": "poly多",
      "example": "Use 'polyglot' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：词根进阶 · 标签：poly多"
    }
  ]
};
Object.entries(WORD_BANK_SUPPLEMENT_V096_B).forEach(([name, entries]) => {
  const existed = new Set((WORD_BANKS[name] || []).map((item) => String(item.en || '').toLowerCase()));
  const unique = entries.filter((item) => item?.en && !existed.has(String(item.en).toLowerCase()));
  WORD_BANKS[name] = [ ...(WORD_BANKS[name] || []), ...unique ];
});


/* v0.9.6 小词库补齐到 60 词上下。 */
const WORD_BANK_SUPPLEMENT_V096_C = {
  "旅行生活": [
    {
      "en": "customs",
      "zh": "海关；习俗",
      "pos": "n.",
      "tag": "旅行",
      "example": "Use 'customs' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：旅行"
    },
    {
      "en": "landmark",
      "zh": "地标；里程碑",
      "pos": "n.",
      "tag": "旅行",
      "example": "Use 'landmark' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：旅行"
    },
    {
      "en": "motel",
      "zh": "汽车旅馆",
      "pos": "n.",
      "tag": "住宿",
      "example": "Use 'motel' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：住宿"
    },
    {
      "en": "shuttle",
      "zh": "班车；航天飞机",
      "pos": "n.",
      "tag": "交通",
      "example": "Use 'shuttle' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：旅行生活 · 标签：交通"
    }
  ],
  "学术写作": [
    {
      "en": "annotation",
      "zh": "注释；评注",
      "pos": "n.",
      "tag": "论文",
      "example": "Use 'annotation' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：论文"
    },
    {
      "en": "baseline",
      "zh": "基线；基准",
      "pos": "n.",
      "tag": "研究",
      "example": "Use 'baseline' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    },
    {
      "en": "deduction",
      "zh": "演绎；扣除",
      "pos": "n.",
      "tag": "逻辑",
      "example": "Use 'deduction' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：逻辑"
    },
    {
      "en": "overview",
      "zh": "概述；总览",
      "pos": "n.",
      "tag": "写作",
      "example": "Use 'overview' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：写作"
    },
    {
      "en": "sampling",
      "zh": "抽样；取样",
      "pos": "n.",
      "tag": "研究",
      "example": "Use 'sampling' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：学术写作 · 标签：研究"
    }
  ],
  "情绪性格": [
    {
      "en": "adaptable",
      "zh": "适应性强的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'adaptable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "bold",
      "zh": "大胆的；醒目的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'bold' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "cautious",
      "zh": "谨慎的；小心的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'cautious' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "earnest",
      "zh": "认真的；诚挚的",
      "pos": "adj.",
      "tag": "性格",
      "example": "Use 'earnest' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：性格"
    },
    {
      "en": "irritable",
      "zh": "易怒的；急躁的",
      "pos": "adj.",
      "tag": "情绪",
      "example": "Use 'irritable' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    },
    {
      "en": "melancholy",
      "zh": "忧郁；忧郁的",
      "pos": "n./adj.",
      "tag": "情绪",
      "example": "Use 'melancholy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：情绪性格 · 标签：情绪"
    }
  ],
  "医疗健康": [
    {
      "en": "bloodpressure",
      "zh": "血压",
      "pos": "n.",
      "tag": "身体",
      "example": "Use 'bloodpressure' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：身体"
    },
    {
      "en": "checkup",
      "zh": "体检；检查",
      "pos": "n.",
      "tag": "医疗",
      "example": "Use 'checkup' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：医疗"
    },
    {
      "en": "dehydration",
      "zh": "脱水",
      "pos": "n.",
      "tag": "症状",
      "example": "Use 'dehydration' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：症状"
    },
    {
      "en": "pharmacy",
      "zh": "药房；药学",
      "pos": "n.",
      "tag": "医疗",
      "example": "Use 'pharmacy' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：医疗健康 · 标签：医疗"
    }
  ],
  "新闻社会": [
    {
      "en": "council",
      "zh": "委员会；理事会",
      "pos": "n.",
      "tag": "公共",
      "example": "Use 'council' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "district",
      "zh": "地区；行政区",
      "pos": "n.",
      "tag": "公共",
      "example": "Use 'district' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "mandate",
      "zh": "授权；命令",
      "pos": "n./v.",
      "tag": "公共",
      "example": "Use 'mandate' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：公共"
    },
    {
      "en": "summit",
      "zh": "峰会；顶点",
      "pos": "n.",
      "tag": "国际",
      "example": "Use 'summit' in a quick mixed typing run to remember its meaning.",
      "tip": "分类：新闻社会 · 标签：国际"
    }
  ]
};
Object.entries(WORD_BANK_SUPPLEMENT_V096_C).forEach(([name, entries]) => {
  const existed = new Set((WORD_BANKS[name] || []).map((item) => String(item.en || '').toLowerCase()));
  const unique = entries.filter((item) => item?.en && !existed.has(String(item.en).toLowerCase()));
  WORD_BANKS[name] = [ ...(WORD_BANKS[name] || []), ...unique ];
});


WORD_BANKS['医疗健康'].push({ en: 'screening', zh: '筛查；检查', pos: 'n.', tag: '预防', example: "Use 'screening' in a quick mixed typing run to remember its meaning.", tip: '分类：医疗健康 · 标签：预防' });


/* ============================================================
   v0.9.7 大词库补丁：考试核心词 + 学科主题词扩容。
   说明：优先补足实际游戏可用的 en / zh，pos、tag、tip 用于学习面板与后续扩展。
   ============================================================ */
const WORD_BANK_MEGA_V097 = {
  "CET-4": [
    {
      "en": "about",
      "zh": "关于；大约",
      "pos": "prep./adv.",
      "tag": "高频"
    },
    {
      "en": "above",
      "zh": "在上方；超过",
      "pos": "prep./adv.",
      "tag": "空间"
    },
    {
      "en": "abroad",
      "zh": "在国外；到国外",
      "pos": "adv.",
      "tag": "生活"
    },
    {
      "en": "accident",
      "zh": "事故；意外",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "according",
      "zh": "根据；依照",
      "pos": "prep.",
      "tag": "写作"
    },
    {
      "en": "accurate",
      "zh": "准确的；精确的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "action",
      "zh": "行动；行为",
      "pos": "n.",
      "tag": "高频"
    },
    {
      "en": "activity",
      "zh": "活动；活跃",
      "pos": "n.",
      "tag": "校园"
    },
    {
      "en": "actually",
      "zh": "实际上；事实上",
      "pos": "adv.",
      "tag": "高频"
    },
    {
      "en": "addition",
      "zh": "增加；加法",
      "pos": "n.",
      "tag": "逻辑"
    },
    {
      "en": "address",
      "zh": "地址；演讲；处理",
      "pos": "n./v.",
      "tag": "多义"
    },
    {
      "en": "adult",
      "zh": "成年人；成年的",
      "pos": "n./adj.",
      "tag": "生活"
    },
    {
      "en": "affect",
      "zh": "影响；感动",
      "pos": "v.",
      "tag": "高频"
    },
    {
      "en": "afraid",
      "zh": "害怕的；担心的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "agency",
      "zh": "机构；代理处",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "agenda",
      "zh": "议程；日程",
      "pos": "n.",
      "tag": "会议"
    },
    {
      "en": "agreement",
      "zh": "协议；同意",
      "pos": "n.",
      "tag": "关系"
    },
    {
      "en": "airline",
      "zh": "航空公司",
      "pos": "n.",
      "tag": "旅行"
    },
    {
      "en": "airport",
      "zh": "机场",
      "pos": "n.",
      "tag": "旅行"
    },
    {
      "en": "alike",
      "zh": "相似的；同样地",
      "pos": "adj./adv.",
      "tag": "比较"
    },
    {
      "en": "alive",
      "zh": "活着的；有生气的",
      "pos": "adj.",
      "tag": "状态"
    },
    {
      "en": "almost",
      "zh": "几乎；差不多",
      "pos": "adv.",
      "tag": "高频"
    },
    {
      "en": "alone",
      "zh": "独自的；单独地",
      "pos": "adj./adv.",
      "tag": "生活"
    },
    {
      "en": "along",
      "zh": "沿着；向前",
      "pos": "prep./adv.",
      "tag": "空间"
    },
    {
      "en": "already",
      "zh": "已经",
      "pos": "adv.",
      "tag": "时间"
    },
    {
      "en": "although",
      "zh": "虽然；尽管",
      "pos": "conj.",
      "tag": "逻辑"
    },
    {
      "en": "altogether",
      "zh": "总共；完全",
      "pos": "adv.",
      "tag": "数量"
    },
    {
      "en": "amazing",
      "zh": "令人惊奇的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "among",
      "zh": "在……之中",
      "pos": "prep.",
      "tag": "空间"
    },
    {
      "en": "amount",
      "zh": "数量；总额",
      "pos": "n.",
      "tag": "数量"
    },
    {
      "en": "angle",
      "zh": "角度；立场",
      "pos": "n.",
      "tag": "数学"
    },
    {
      "en": "angry",
      "zh": "生气的；愤怒的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "announce",
      "zh": "宣布；通告",
      "pos": "v.",
      "tag": "社会"
    },
    {
      "en": "another",
      "zh": "另一个；又一",
      "pos": "det.",
      "tag": "高频"
    },
    {
      "en": "anxious",
      "zh": "焦虑的；渴望的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "anywhere",
      "zh": "任何地方",
      "pos": "adv.",
      "tag": "空间"
    },
    {
      "en": "apologize",
      "zh": "道歉",
      "pos": "v.",
      "tag": "社交"
    },
    {
      "en": "appeal",
      "zh": "吸引；呼吁",
      "pos": "n./v.",
      "tag": "写作"
    },
    {
      "en": "area",
      "zh": "地区；面积",
      "pos": "n.",
      "tag": "高频"
    },
    {
      "en": "argue",
      "zh": "争论；论证",
      "pos": "v.",
      "tag": "写作"
    },
    {
      "en": "army",
      "zh": "军队；陆军",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "arrival",
      "zh": "到达；到来",
      "pos": "n.",
      "tag": "旅行"
    },
    {
      "en": "article",
      "zh": "文章；物品；冠词",
      "pos": "n.",
      "tag": "多义"
    },
    {
      "en": "artist",
      "zh": "艺术家",
      "pos": "n.",
      "tag": "艺术"
    },
    {
      "en": "aside",
      "zh": "在旁边；除外",
      "pos": "adv.",
      "tag": "空间"
    },
    {
      "en": "asleep",
      "zh": "睡着的",
      "pos": "adj.",
      "tag": "生活"
    },
    {
      "en": "assistant",
      "zh": "助手；助理",
      "pos": "n.",
      "tag": "职场"
    },
    {
      "en": "atmosphere",
      "zh": "气氛；大气",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "audience",
      "zh": "观众；听众",
      "pos": "n.",
      "tag": "艺术"
    },
    {
      "en": "author",
      "zh": "作者",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "average",
      "zh": "平均的；普通的",
      "pos": "adj./n.",
      "tag": "数量"
    },
    {
      "en": "awake",
      "zh": "醒着的；唤醒",
      "pos": "adj./v.",
      "tag": "生活"
    },
    {
      "en": "award",
      "zh": "奖品；授予",
      "pos": "n./v.",
      "tag": "校园"
    },
    {
      "en": "aware",
      "zh": "意识到的；知道的",
      "pos": "adj.",
      "tag": "思考"
    },
    {
      "en": "awful",
      "zh": "糟糕的；可怕的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "background",
      "zh": "背景；经历",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "balloon",
      "zh": "气球；膨胀",
      "pos": "n./v.",
      "tag": "生活"
    },
    {
      "en": "barbecue",
      "zh": "烧烤",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "bargain",
      "zh": "便宜货；讨价还价",
      "pos": "n./v.",
      "tag": "购物"
    },
    {
      "en": "battle",
      "zh": "战斗；斗争",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "beauty",
      "zh": "美；美人",
      "pos": "n.",
      "tag": "描述"
    },
    {
      "en": "behavior",
      "zh": "行为；举止",
      "pos": "n.",
      "tag": "心理"
    },
    {
      "en": "belief",
      "zh": "信念；相信",
      "pos": "n.",
      "tag": "观点"
    },
    {
      "en": "belong",
      "zh": "属于；归属",
      "pos": "v.",
      "tag": "关系"
    },
    {
      "en": "below",
      "zh": "在下方；低于",
      "pos": "prep./adv.",
      "tag": "空间"
    },
    {
      "en": "beside",
      "zh": "在……旁边",
      "pos": "prep.",
      "tag": "空间"
    },
    {
      "en": "besides",
      "zh": "此外；除……之外",
      "pos": "adv./prep.",
      "tag": "逻辑"
    },
    {
      "en": "beyond",
      "zh": "超过；在远处",
      "pos": "prep.",
      "tag": "空间"
    },
    {
      "en": "birth",
      "zh": "出生；诞生",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "blame",
      "zh": "责备；责任",
      "pos": "v./n.",
      "tag": "关系"
    },
    {
      "en": "blind",
      "zh": "失明的；盲目的",
      "pos": "adj.",
      "tag": "身体"
    },
    {
      "en": "blood",
      "zh": "血液；血统",
      "pos": "n.",
      "tag": "身体"
    },
    {
      "en": "board",
      "zh": "木板；董事会；登上",
      "pos": "n./v.",
      "tag": "多义"
    },
    {
      "en": "boil",
      "zh": "煮沸；沸腾",
      "pos": "v.",
      "tag": "生活"
    },
    {
      "en": "border",
      "zh": "边界；边境",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "boring",
      "zh": "无聊的；乏味的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "brain",
      "zh": "大脑；智力",
      "pos": "n.",
      "tag": "身体"
    },
    {
      "en": "branch",
      "zh": "树枝；分支",
      "pos": "n.",
      "tag": "自然"
    },
    {
      "en": "brand",
      "zh": "品牌；类型",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "brave",
      "zh": "勇敢的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "breakfast",
      "zh": "早餐",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "bridge",
      "zh": "桥；连接",
      "pos": "n./v.",
      "tag": "交通"
    },
    {
      "en": "bright",
      "zh": "明亮的；聪明的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "broadcast",
      "zh": "广播；播送",
      "pos": "n./v.",
      "tag": "媒体"
    },
    {
      "en": "budget",
      "zh": "预算；安排经费",
      "pos": "n./v.",
      "tag": "商业"
    },
    {
      "en": "building",
      "zh": "建筑物",
      "pos": "n.",
      "tag": "城市"
    },
    {
      "en": "business",
      "zh": "商业；事务",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "button",
      "zh": "按钮；纽扣",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "camera",
      "zh": "照相机；摄像机",
      "pos": "n.",
      "tag": "科技"
    },
    {
      "en": "campaign",
      "zh": "运动；活动",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "cancer",
      "zh": "癌症",
      "pos": "n.",
      "tag": "健康"
    },
    {
      "en": "candle",
      "zh": "蜡烛",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "capital",
      "zh": "首都；资本；大写",
      "pos": "n./adj.",
      "tag": "多义"
    },
    {
      "en": "captain",
      "zh": "船长；队长",
      "pos": "n.",
      "tag": "人物"
    },
    {
      "en": "careless",
      "zh": "粗心的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "castle",
      "zh": "城堡",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "celebrate",
      "zh": "庆祝",
      "pos": "v.",
      "tag": "节日"
    },
    {
      "en": "central",
      "zh": "中心的；主要的",
      "pos": "adj.",
      "tag": "位置"
    },
    {
      "en": "century",
      "zh": "世纪；百年",
      "pos": "n.",
      "tag": "时间"
    },
    {
      "en": "ceremony",
      "zh": "典礼；仪式",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "challenge",
      "zh": "挑战；质疑",
      "pos": "n./v.",
      "tag": "高频"
    },
    {
      "en": "character",
      "zh": "性格；角色；文字",
      "pos": "n.",
      "tag": "多义"
    },
    {
      "en": "charge",
      "zh": "收费；指控；充电",
      "pos": "n./v.",
      "tag": "多义"
    },
    {
      "en": "charity",
      "zh": "慈善；慈善机构",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "chart",
      "zh": "图表；绘制",
      "pos": "n./v.",
      "tag": "学习"
    },
    {
      "en": "chemical",
      "zh": "化学的；化学品",
      "pos": "adj./n.",
      "tag": "科学"
    },
    {
      "en": "childhood",
      "zh": "童年",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "citizen",
      "zh": "公民；市民",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "classical",
      "zh": "古典的；经典的",
      "pos": "adj.",
      "tag": "艺术"
    },
    {
      "en": "clear",
      "zh": "清楚的；清除",
      "pos": "adj./v.",
      "tag": "高频"
    },
    {
      "en": "clerk",
      "zh": "职员；店员",
      "pos": "n.",
      "tag": "职场"
    },
    {
      "en": "clinic",
      "zh": "诊所；门诊",
      "pos": "n.",
      "tag": "健康"
    },
    {
      "en": "collect",
      "zh": "收集；募集",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "comfortable",
      "zh": "舒服的",
      "pos": "adj.",
      "tag": "生活"
    },
    {
      "en": "command",
      "zh": "命令；掌握",
      "pos": "n./v.",
      "tag": "能力"
    },
    {
      "en": "comment",
      "zh": "评论；意见",
      "pos": "n./v.",
      "tag": "表达"
    },
    {
      "en": "communicate",
      "zh": "交流；沟通",
      "pos": "v.",
      "tag": "社交"
    },
    {
      "en": "community",
      "zh": "社区；共同体",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "compete",
      "zh": "竞争；比赛",
      "pos": "v.",
      "tag": "校园"
    },
    {
      "en": "complain",
      "zh": "抱怨；投诉",
      "pos": "v.",
      "tag": "社交"
    },
    {
      "en": "complete",
      "zh": "完成；完整的",
      "pos": "v./adj.",
      "tag": "高频"
    },
    {
      "en": "concert",
      "zh": "音乐会；一致",
      "pos": "n.",
      "tag": "艺术"
    },
    {
      "en": "condition",
      "zh": "条件；状况",
      "pos": "n.",
      "tag": "高频"
    },
    {
      "en": "connect",
      "zh": "连接；联系",
      "pos": "v.",
      "tag": "关系"
    },
    {
      "en": "construction",
      "zh": "建设；结构",
      "pos": "n.",
      "tag": "城市"
    },
    {
      "en": "contact",
      "zh": "联系；接触",
      "pos": "n./v.",
      "tag": "社交"
    },
    {
      "en": "continue",
      "zh": "继续",
      "pos": "v.",
      "tag": "高频"
    },
    {
      "en": "conversation",
      "zh": "谈话；会话",
      "pos": "n.",
      "tag": "社交"
    },
    {
      "en": "corner",
      "zh": "角落；转角",
      "pos": "n.",
      "tag": "空间"
    },
    {
      "en": "correct",
      "zh": "正确的；改正",
      "pos": "adj./v.",
      "tag": "学习"
    },
    {
      "en": "costume",
      "zh": "服装；戏装",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "countryside",
      "zh": "乡村；农村",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "couple",
      "zh": "一对；夫妇",
      "pos": "n.",
      "tag": "关系"
    },
    {
      "en": "create",
      "zh": "创造；创建",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "credit",
      "zh": "信用；学分；赞扬",
      "pos": "n.",
      "tag": "多义"
    },
    {
      "en": "culture",
      "zh": "文化",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "curious",
      "zh": "好奇的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "customer",
      "zh": "顾客；客户",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "daily",
      "zh": "每日的；日常的",
      "pos": "adj.",
      "tag": "生活"
    },
    {
      "en": "damage",
      "zh": "损害；损失",
      "pos": "n./v.",
      "tag": "问题"
    },
    {
      "en": "dangerous",
      "zh": "危险的",
      "pos": "adj.",
      "tag": "安全"
    },
    {
      "en": "dataset",
      "zh": "数据集",
      "pos": "n.",
      "tag": "科技"
    },
    {
      "en": "decade",
      "zh": "十年",
      "pos": "n.",
      "tag": "时间"
    },
    {
      "en": "decide",
      "zh": "决定",
      "pos": "v.",
      "tag": "高频"
    },
    {
      "en": "define",
      "zh": "定义；限定",
      "pos": "v.",
      "tag": "学习"
    },
    {
      "en": "degree",
      "zh": "程度；学位；度数",
      "pos": "n.",
      "tag": "多义"
    },
    {
      "en": "delicious",
      "zh": "美味的",
      "pos": "adj.",
      "tag": "食物"
    },
    {
      "en": "deliver",
      "zh": "递送；发表",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "demand",
      "zh": "要求；需求",
      "pos": "n./v.",
      "tag": "商业"
    },
    {
      "en": "department",
      "zh": "部门；系",
      "pos": "n.",
      "tag": "职场"
    },
    {
      "en": "depend",
      "zh": "依靠；取决于",
      "pos": "v.",
      "tag": "逻辑"
    },
    {
      "en": "describe",
      "zh": "描述；形容",
      "pos": "v.",
      "tag": "写作"
    },
    {
      "en": "design",
      "zh": "设计；图案",
      "pos": "n./v.",
      "tag": "创造"
    },
    {
      "en": "desire",
      "zh": "渴望；愿望",
      "pos": "n./v.",
      "tag": "情绪"
    },
    {
      "en": "destroy",
      "zh": "破坏；摧毁",
      "pos": "v.",
      "tag": "问题"
    },
    {
      "en": "detail",
      "zh": "细节；详述",
      "pos": "n./v.",
      "tag": "写作"
    },
    {
      "en": "determine",
      "zh": "决定；查明",
      "pos": "v.",
      "tag": "思考"
    },
    {
      "en": "development",
      "zh": "发展；开发",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "device",
      "zh": "设备；装置",
      "pos": "n.",
      "tag": "科技"
    },
    {
      "en": "diary",
      "zh": "日记",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "dictionary",
      "zh": "词典；字典",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "difficulty",
      "zh": "困难；难度",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "direction",
      "zh": "方向；说明",
      "pos": "n.",
      "tag": "空间"
    },
    {
      "en": "disagree",
      "zh": "不同意；有分歧",
      "pos": "v.",
      "tag": "观点"
    },
    {
      "en": "disease",
      "zh": "疾病",
      "pos": "n.",
      "tag": "健康"
    },
    {
      "en": "distance",
      "zh": "距离；远方",
      "pos": "n.",
      "tag": "空间"
    },
    {
      "en": "divide",
      "zh": "分开；除以",
      "pos": "v.",
      "tag": "数学"
    },
    {
      "en": "document",
      "zh": "文件；记录",
      "pos": "n./v.",
      "tag": "职场"
    },
    {
      "en": "double",
      "zh": "双倍的；加倍",
      "pos": "adj./v.",
      "tag": "数量"
    },
    {
      "en": "doubt",
      "zh": "怀疑；疑问",
      "pos": "n./v.",
      "tag": "思考"
    },
    {
      "en": "downtown",
      "zh": "市中心",
      "pos": "n./adv.",
      "tag": "城市"
    },
    {
      "en": "drama",
      "zh": "戏剧；剧本",
      "pos": "n.",
      "tag": "艺术"
    },
    {
      "en": "drug",
      "zh": "药物；毒品",
      "pos": "n.",
      "tag": "健康"
    },
    {
      "en": "duty",
      "zh": "责任；职责",
      "pos": "n.",
      "tag": "职场"
    },
    {
      "en": "earn",
      "zh": "赚得；赢得",
      "pos": "v.",
      "tag": "商业"
    },
    {
      "en": "economy",
      "zh": "经济；节约",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "effort",
      "zh": "努力；尝试",
      "pos": "n.",
      "tag": "高频"
    },
    {
      "en": "either",
      "zh": "任一；也不",
      "pos": "det./adv.",
      "tag": "逻辑"
    },
    {
      "en": "elder",
      "zh": "年长者；年长的",
      "pos": "n./adj.",
      "tag": "人物"
    },
    {
      "en": "elect",
      "zh": "选举；选择",
      "pos": "v.",
      "tag": "社会"
    },
    {
      "en": "electricity",
      "zh": "电；电力",
      "pos": "n.",
      "tag": "科学"
    },
    {
      "en": "element",
      "zh": "要素；元素",
      "pos": "n.",
      "tag": "科学"
    },
    {
      "en": "elsewhere",
      "zh": "在别处",
      "pos": "adv.",
      "tag": "空间"
    },
    {
      "en": "encourage",
      "zh": "鼓励；促进",
      "pos": "v.",
      "tag": "关系"
    },
    {
      "en": "energy",
      "zh": "能量；精力",
      "pos": "n.",
      "tag": "科学"
    },
    {
      "en": "engineer",
      "zh": "工程师；设计",
      "pos": "n./v.",
      "tag": "职业"
    },
    {
      "en": "entire",
      "zh": "全部的；完整的",
      "pos": "adj.",
      "tag": "数量"
    },
    {
      "en": "environment",
      "zh": "环境",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "equal",
      "zh": "相等的；平等的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "escape",
      "zh": "逃脱；避开",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "especially",
      "zh": "尤其；特别",
      "pos": "adv.",
      "tag": "强调"
    },
    {
      "en": "event",
      "zh": "事件；活动",
      "pos": "n.",
      "tag": "高频"
    },
    {
      "en": "evidence",
      "zh": "证据；迹象",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "excellent",
      "zh": "优秀的；极好的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "exchange",
      "zh": "交换；交流",
      "pos": "n./v.",
      "tag": "关系"
    },
    {
      "en": "exercise",
      "zh": "锻炼；练习",
      "pos": "n./v.",
      "tag": "健康"
    },
    {
      "en": "expect",
      "zh": "期待；预计",
      "pos": "v.",
      "tag": "思考"
    },
    {
      "en": "expense",
      "zh": "费用；开支",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "experience",
      "zh": "经验；经历",
      "pos": "n./v.",
      "tag": "高频"
    },
    {
      "en": "explain",
      "zh": "解释；说明",
      "pos": "v.",
      "tag": "写作"
    },
    {
      "en": "express",
      "zh": "表达；快车",
      "pos": "v./adj.",
      "tag": "多义"
    },
    {
      "en": "extra",
      "zh": "额外的；附加的",
      "pos": "adj.",
      "tag": "数量"
    },
    {
      "en": "failure",
      "zh": "失败；故障",
      "pos": "n.",
      "tag": "问题"
    },
    {
      "en": "familiar",
      "zh": "熟悉的",
      "pos": "adj.",
      "tag": "状态"
    },
    {
      "en": "favorite",
      "zh": "最喜欢的",
      "pos": "adj./n.",
      "tag": "喜好"
    },
    {
      "en": "feature",
      "zh": "特征；特色",
      "pos": "n.",
      "tag": "描述"
    },
    {
      "en": "female",
      "zh": "女性；雌性的",
      "pos": "n./adj.",
      "tag": "人物"
    },
    {
      "en": "festival",
      "zh": "节日；庆典",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "figure",
      "zh": "数字；人物；认为",
      "pos": "n./v.",
      "tag": "多义"
    },
    {
      "en": "financial",
      "zh": "金融的；财务的",
      "pos": "adj.",
      "tag": "商业"
    },
    {
      "en": "foreign",
      "zh": "外国的；陌生的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "formal",
      "zh": "正式的；规范的",
      "pos": "adj.",
      "tag": "场合"
    },
    {
      "en": "former",
      "zh": "以前的；前者",
      "pos": "adj./n.",
      "tag": "时间"
    },
    {
      "en": "forward",
      "zh": "向前；转发",
      "pos": "adv./v.",
      "tag": "方向"
    },
    {
      "en": "fresh",
      "zh": "新鲜的；清新的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "friendship",
      "zh": "友谊",
      "pos": "n.",
      "tag": "关系"
    },
    {
      "en": "garbage",
      "zh": "垃圾；废物",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "general",
      "zh": "一般的；将军",
      "pos": "adj./n.",
      "tag": "多义"
    },
    {
      "en": "generous",
      "zh": "慷慨的；大方的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "global",
      "zh": "全球的；总体的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "government",
      "zh": "政府",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "graduate",
      "zh": "毕业；毕业生",
      "pos": "v./n.",
      "tag": "校园"
    },
    {
      "en": "grammar",
      "zh": "语法",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "grateful",
      "zh": "感激的",
      "pos": "adj.",
      "tag": "情感"
    },
    {
      "en": "guarantee",
      "zh": "保证；担保",
      "pos": "n./v.",
      "tag": "商业"
    },
    {
      "en": "guard",
      "zh": "守卫；保护",
      "pos": "n./v.",
      "tag": "安全"
    },
    {
      "en": "guest",
      "zh": "客人；嘉宾",
      "pos": "n.",
      "tag": "社交"
    },
    {
      "en": "handle",
      "zh": "处理；把手",
      "pos": "v./n.",
      "tag": "多义"
    },
    {
      "en": "hardly",
      "zh": "几乎不",
      "pos": "adv.",
      "tag": "程度"
    },
    {
      "en": "harm",
      "zh": "伤害；损害",
      "pos": "n./v.",
      "tag": "安全"
    },
    {
      "en": "hearing",
      "zh": "听力；听证会",
      "pos": "n.",
      "tag": "身体"
    },
    {
      "en": "height",
      "zh": "高度；身高",
      "pos": "n.",
      "tag": "数量"
    },
    {
      "en": "holiday",
      "zh": "假期；节日",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "honest",
      "zh": "诚实的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "honor",
      "zh": "荣誉；尊敬",
      "pos": "n./v.",
      "tag": "价值"
    },
    {
      "en": "however",
      "zh": "然而；不过",
      "pos": "adv.",
      "tag": "逻辑"
    },
    {
      "en": "human",
      "zh": "人类；人的",
      "pos": "n./adj.",
      "tag": "社会"
    },
    {
      "en": "humorous",
      "zh": "幽默的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "identity",
      "zh": "身份；特征",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "ignore",
      "zh": "忽视；不理会",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "illness",
      "zh": "疾病；不适",
      "pos": "n.",
      "tag": "健康"
    },
    {
      "en": "imagine",
      "zh": "想象；设想",
      "pos": "v.",
      "tag": "思考"
    },
    {
      "en": "immediate",
      "zh": "立即的；直接的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "improve",
      "zh": "改善；提高",
      "pos": "v.",
      "tag": "学习"
    },
    {
      "en": "income",
      "zh": "收入",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "increase",
      "zh": "增加；增长",
      "pos": "v./n.",
      "tag": "数量"
    },
    {
      "en": "industry",
      "zh": "工业；行业",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "injure",
      "zh": "伤害；使受伤",
      "pos": "v.",
      "tag": "健康"
    },
    {
      "en": "insect",
      "zh": "昆虫",
      "pos": "n.",
      "tag": "自然"
    },
    {
      "en": "insist",
      "zh": "坚持；坚决要求",
      "pos": "v.",
      "tag": "态度"
    },
    {
      "en": "instruction",
      "zh": "说明；指导",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "instrument",
      "zh": "仪器；乐器",
      "pos": "n.",
      "tag": "多义"
    },
    {
      "en": "international",
      "zh": "国际的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "introduce",
      "zh": "介绍；引入",
      "pos": "v.",
      "tag": "社交"
    },
    {
      "en": "involve",
      "zh": "包含；涉及",
      "pos": "v.",
      "tag": "逻辑"
    },
    {
      "en": "island",
      "zh": "岛；岛屿",
      "pos": "n.",
      "tag": "自然"
    },
    {
      "en": "issue",
      "zh": "问题；发行",
      "pos": "n./v.",
      "tag": "社会"
    },
    {
      "en": "junior",
      "zh": "初级的；年少的",
      "pos": "adj.",
      "tag": "校园"
    },
    {
      "en": "language",
      "zh": "语言",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "lecture",
      "zh": "讲座；训斥",
      "pos": "n./v.",
      "tag": "校园"
    },
    {
      "en": "legal",
      "zh": "合法的；法律的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "library",
      "zh": "图书馆；资料库",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "likely",
      "zh": "可能的；可能地",
      "pos": "adj./adv.",
      "tag": "判断"
    },
    {
      "en": "local",
      "zh": "当地的；本地人",
      "pos": "adj./n.",
      "tag": "社会"
    },
    {
      "en": "machine",
      "zh": "机器；机械",
      "pos": "n.",
      "tag": "科技"
    },
    {
      "en": "magazine",
      "zh": "杂志",
      "pos": "n.",
      "tag": "媒体"
    },
    {
      "en": "major",
      "zh": "主要的；专业",
      "pos": "adj./n.",
      "tag": "校园"
    },
    {
      "en": "manage",
      "zh": "管理；设法做到",
      "pos": "v.",
      "tag": "能力"
    },
    {
      "en": "manner",
      "zh": "方式；礼貌",
      "pos": "n.",
      "tag": "社交"
    },
    {
      "en": "market",
      "zh": "市场；营销",
      "pos": "n./v.",
      "tag": "商业"
    },
    {
      "en": "marriage",
      "zh": "婚姻；结婚",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "material",
      "zh": "材料；资料",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "measure",
      "zh": "测量；措施",
      "pos": "v./n.",
      "tag": "数量"
    },
    {
      "en": "medical",
      "zh": "医学的；医疗的",
      "pos": "adj.",
      "tag": "健康"
    },
    {
      "en": "medicine",
      "zh": "药；医学",
      "pos": "n.",
      "tag": "健康"
    },
    {
      "en": "member",
      "zh": "成员；会员",
      "pos": "n.",
      "tag": "组织"
    },
    {
      "en": "memory",
      "zh": "记忆；回忆",
      "pos": "n.",
      "tag": "心理"
    },
    {
      "en": "method",
      "zh": "方法；办法",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "middle",
      "zh": "中间；中等的",
      "pos": "n./adj.",
      "tag": "位置"
    },
    {
      "en": "modern",
      "zh": "现代的；时髦的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "moment",
      "zh": "时刻；片刻",
      "pos": "n.",
      "tag": "时间"
    },
    {
      "en": "necessary",
      "zh": "必要的；必需的",
      "pos": "adj.",
      "tag": "判断"
    },
    {
      "en": "neighbor",
      "zh": "邻居；邻近的人",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "notice",
      "zh": "注意；通知",
      "pos": "n./v.",
      "tag": "社交"
    },
    {
      "en": "official",
      "zh": "官方的；官员",
      "pos": "adj./n.",
      "tag": "社会"
    },
    {
      "en": "opinion",
      "zh": "意见；看法",
      "pos": "n.",
      "tag": "观点"
    },
    {
      "en": "opportunity",
      "zh": "机会；时机",
      "pos": "n.",
      "tag": "高频"
    },
    {
      "en": "ordinary",
      "zh": "普通的；平常的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "organize",
      "zh": "组织；安排",
      "pos": "v.",
      "tag": "能力"
    },
    {
      "en": "original",
      "zh": "原来的；原创的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "overall",
      "zh": "总体的；全部地",
      "pos": "adj./adv.",
      "tag": "总结"
    },
    {
      "en": "owner",
      "zh": "主人；所有者",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "pattern",
      "zh": "模式；图案",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "peace",
      "zh": "和平；安宁",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "perform",
      "zh": "表演；执行",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "perhaps",
      "zh": "也许；可能",
      "pos": "adv.",
      "tag": "判断"
    },
    {
      "en": "physical",
      "zh": "身体的；物理的",
      "pos": "adj.",
      "tag": "科学"
    },
    {
      "en": "planet",
      "zh": "行星；星球",
      "pos": "n.",
      "tag": "科学"
    },
    {
      "en": "pleasant",
      "zh": "令人愉快的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "policy",
      "zh": "政策；方针",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "popular",
      "zh": "受欢迎的；流行的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "population",
      "zh": "人口；族群",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "practice",
      "zh": "练习；实践",
      "pos": "n./v.",
      "tag": "学习"
    },
    {
      "en": "prefer",
      "zh": "更喜欢；宁愿",
      "pos": "v.",
      "tag": "喜好"
    },
    {
      "en": "prepare",
      "zh": "准备；预备",
      "pos": "v.",
      "tag": "学习"
    },
    {
      "en": "prevent",
      "zh": "阻止；预防",
      "pos": "v.",
      "tag": "安全"
    },
    {
      "en": "private",
      "zh": "私人的；私立的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "process",
      "zh": "过程；处理",
      "pos": "n./v.",
      "tag": "逻辑"
    },
    {
      "en": "produce",
      "zh": "生产；产生",
      "pos": "v.",
      "tag": "商业"
    },
    {
      "en": "professor",
      "zh": "教授",
      "pos": "n.",
      "tag": "校园"
    },
    {
      "en": "program",
      "zh": "程序；节目；计划",
      "pos": "n.",
      "tag": "科技"
    },
    {
      "en": "progress",
      "zh": "进步；进展",
      "pos": "n./v.",
      "tag": "学习"
    },
    {
      "en": "protect",
      "zh": "保护；防护",
      "pos": "v.",
      "tag": "安全"
    },
    {
      "en": "provide",
      "zh": "提供；供应",
      "pos": "v.",
      "tag": "高频"
    },
    {
      "en": "public",
      "zh": "公共的；公众",
      "pos": "adj./n.",
      "tag": "社会"
    },
    {
      "en": "purpose",
      "zh": "目的；意图",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "quarter",
      "zh": "四分之一；一刻钟",
      "pos": "n.",
      "tag": "数量"
    },
    {
      "en": "quite",
      "zh": "相当；十分",
      "pos": "adv.",
      "tag": "程度"
    },
    {
      "en": "raise",
      "zh": "提高；筹集；抚养",
      "pos": "v.",
      "tag": "多义"
    },
    {
      "en": "recent",
      "zh": "最近的；近来的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "recommend",
      "zh": "推荐；建议",
      "pos": "v.",
      "tag": "社交"
    },
    {
      "en": "record",
      "zh": "记录；唱片",
      "pos": "n./v.",
      "tag": "学习"
    },
    {
      "en": "reduce",
      "zh": "减少；降低",
      "pos": "v.",
      "tag": "数量"
    },
    {
      "en": "regular",
      "zh": "有规律的；定期的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "relation",
      "zh": "关系；联系",
      "pos": "n.",
      "tag": "关系"
    },
    {
      "en": "remain",
      "zh": "保持；剩余",
      "pos": "v.",
      "tag": "状态"
    },
    {
      "en": "remind",
      "zh": "提醒；使想起",
      "pos": "v.",
      "tag": "记忆"
    },
    {
      "en": "remove",
      "zh": "移开；去除",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "repair",
      "zh": "修理；修补",
      "pos": "v.",
      "tag": "生活"
    },
    {
      "en": "repeat",
      "zh": "重复；重说",
      "pos": "v.",
      "tag": "学习"
    },
    {
      "en": "report",
      "zh": "报告；报道",
      "pos": "n./v.",
      "tag": "媒体"
    },
    {
      "en": "require",
      "zh": "要求；需要",
      "pos": "v.",
      "tag": "规则"
    },
    {
      "en": "research",
      "zh": "研究；调查",
      "pos": "n./v.",
      "tag": "学习"
    },
    {
      "en": "respect",
      "zh": "尊重；方面",
      "pos": "n./v.",
      "tag": "关系"
    },
    {
      "en": "result",
      "zh": "结果；导致",
      "pos": "n./v.",
      "tag": "逻辑"
    },
    {
      "en": "review",
      "zh": "复习；评论",
      "pos": "n./v.",
      "tag": "学习"
    },
    {
      "en": "river",
      "zh": "河流；江河",
      "pos": "n.",
      "tag": "自然"
    },
    {
      "en": "role",
      "zh": "角色；作用",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "science",
      "zh": "科学",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "search",
      "zh": "搜索；寻找",
      "pos": "n./v.",
      "tag": "动作"
    },
    {
      "en": "season",
      "zh": "季节；旺季",
      "pos": "n.",
      "tag": "时间"
    },
    {
      "en": "section",
      "zh": "部分；章节",
      "pos": "n.",
      "tag": "结构"
    },
    {
      "en": "separate",
      "zh": "分开的；分离",
      "pos": "adj./v.",
      "tag": "关系"
    },
    {
      "en": "service",
      "zh": "服务；维修",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "shape",
      "zh": "形状；塑造",
      "pos": "n./v.",
      "tag": "描述"
    },
    {
      "en": "share",
      "zh": "分享；份额",
      "pos": "v./n.",
      "tag": "关系"
    },
    {
      "en": "shine",
      "zh": "照耀；发光",
      "pos": "v.",
      "tag": "自然"
    },
    {
      "en": "situation",
      "zh": "情况；形势",
      "pos": "n.",
      "tag": "高频"
    },
    {
      "en": "skill",
      "zh": "技能；技巧",
      "pos": "n.",
      "tag": "能力"
    },
    {
      "en": "society",
      "zh": "社会；社团",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "solve",
      "zh": "解决；解答",
      "pos": "v.",
      "tag": "问题"
    },
    {
      "en": "special",
      "zh": "特殊的；专门的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "speech",
      "zh": "演讲；说话",
      "pos": "n.",
      "tag": "表达"
    },
    {
      "en": "spirit",
      "zh": "精神；情绪",
      "pos": "n.",
      "tag": "心理"
    },
    {
      "en": "spread",
      "zh": "传播；展开",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "standard",
      "zh": "标准；标准的",
      "pos": "n./adj.",
      "tag": "规则"
    },
    {
      "en": "station",
      "zh": "车站；电台",
      "pos": "n.",
      "tag": "多义"
    },
    {
      "en": "store",
      "zh": "商店；储存",
      "pos": "n./v.",
      "tag": "商业"
    },
    {
      "en": "strange",
      "zh": "奇怪的；陌生的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "strict",
      "zh": "严格的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "success",
      "zh": "成功；成就",
      "pos": "n.",
      "tag": "高频"
    },
    {
      "en": "suggest",
      "zh": "建议；暗示",
      "pos": "v.",
      "tag": "表达"
    },
    {
      "en": "supply",
      "zh": "供应；供给",
      "pos": "n./v.",
      "tag": "商业"
    },
    {
      "en": "support",
      "zh": "支持；支撑",
      "pos": "n./v.",
      "tag": "关系"
    },
    {
      "en": "surface",
      "zh": "表面；外表",
      "pos": "n.",
      "tag": "空间"
    },
    {
      "en": "system",
      "zh": "系统；制度",
      "pos": "n.",
      "tag": "高频"
    },
    {
      "en": "technology",
      "zh": "技术；科技",
      "pos": "n.",
      "tag": "科技"
    },
    {
      "en": "terrible",
      "zh": "可怕的；很糟的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "threaten",
      "zh": "威胁；预示",
      "pos": "v.",
      "tag": "问题"
    },
    {
      "en": "toward",
      "zh": "朝向；对于",
      "pos": "prep.",
      "tag": "方向"
    },
    {
      "en": "tradition",
      "zh": "传统；惯例",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "traffic",
      "zh": "交通；流量",
      "pos": "n.",
      "tag": "城市"
    },
    {
      "en": "training",
      "zh": "训练；培训",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "trouble",
      "zh": "麻烦；困难",
      "pos": "n.",
      "tag": "问题"
    },
    {
      "en": "truth",
      "zh": "真相；事实",
      "pos": "n.",
      "tag": "价值"
    },
    {
      "en": "useful",
      "zh": "有用的；有益的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "various",
      "zh": "各种各样的",
      "pos": "adj.",
      "tag": "数量"
    },
    {
      "en": "visitor",
      "zh": "游客；来访者",
      "pos": "n.",
      "tag": "旅行"
    },
    {
      "en": "waste",
      "zh": "浪费；废物",
      "pos": "n./v.",
      "tag": "环境"
    },
    {
      "en": "weather",
      "zh": "天气",
      "pos": "n.",
      "tag": "自然"
    },
    {
      "en": "welcome",
      "zh": "欢迎；受欢迎的",
      "pos": "v./adj.",
      "tag": "社交"
    },
    {
      "en": "whether",
      "zh": "是否；不管",
      "pos": "conj.",
      "tag": "逻辑"
    },
    {
      "en": "whole",
      "zh": "整个的；全部",
      "pos": "adj.",
      "tag": "数量"
    },
    {
      "en": "wonder",
      "zh": "想知道；奇迹",
      "pos": "v./n.",
      "tag": "思考"
    },
    {
      "en": "worth",
      "zh": "值得的；价值",
      "pos": "adj./n.",
      "tag": "价值"
    },
    {
      "en": "writer",
      "zh": "作家；作者",
      "pos": "n.",
      "tag": "文化"
    }
  ],
  "CET-6": [
    {
      "en": "abnormal",
      "zh": "异常的；不正常的",
      "pos": "adj.",
      "tag": "进阶"
    },
    {
      "en": "abrupt",
      "zh": "突然的；唐突的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "accelerate",
      "zh": "加速；促进",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "accessible",
      "zh": "可进入的；易懂的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "accordingly",
      "zh": "因此；相应地",
      "pos": "adv.",
      "tag": "逻辑"
    },
    {
      "en": "accumulate",
      "zh": "积累；聚集",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "accuracy",
      "zh": "准确性；精确度",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "adhere",
      "zh": "坚持；黏附",
      "pos": "v.",
      "tag": "态度"
    },
    {
      "en": "adjacent",
      "zh": "邻近的；相邻的",
      "pos": "adj.",
      "tag": "空间"
    },
    {
      "en": "administration",
      "zh": "管理；行政部门",
      "pos": "n.",
      "tag": "组织"
    },
    {
      "en": "advocate",
      "zh": "提倡；拥护者",
      "pos": "v./n.",
      "tag": "观点"
    },
    {
      "en": "aesthetic",
      "zh": "审美的；美学的",
      "pos": "adj.",
      "tag": "艺术"
    },
    {
      "en": "affection",
      "zh": "喜爱；感情",
      "pos": "n.",
      "tag": "情感"
    },
    {
      "en": "affluent",
      "zh": "富裕的；丰富的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "agenda",
      "zh": "议程；待办事项",
      "pos": "n.",
      "tag": "会议"
    },
    {
      "en": "aggregate",
      "zh": "总计；集合",
      "pos": "n./v.",
      "tag": "数量"
    },
    {
      "en": "aggressive",
      "zh": "好斗的；积极进取的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "allocate",
      "zh": "分配；拨给",
      "pos": "v.",
      "tag": "管理"
    },
    {
      "en": "alternative",
      "zh": "替代的；选择",
      "pos": "adj./n.",
      "tag": "写作"
    },
    {
      "en": "ambiguity",
      "zh": "模糊；歧义",
      "pos": "n.",
      "tag": "语言"
    },
    {
      "en": "ample",
      "zh": "充足的；丰富的",
      "pos": "adj.",
      "tag": "数量"
    },
    {
      "en": "analogy",
      "zh": "类比；相似",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "anticipate",
      "zh": "预期；期待",
      "pos": "v.",
      "tag": "判断"
    },
    {
      "en": "apparatus",
      "zh": "设备；机构",
      "pos": "n.",
      "tag": "科技"
    },
    {
      "en": "applicable",
      "zh": "适用的；可应用的",
      "pos": "adj.",
      "tag": "规则"
    },
    {
      "en": "appraisal",
      "zh": "评价；估价",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "arbitrary",
      "zh": "任意的；武断的",
      "pos": "adj.",
      "tag": "判断"
    },
    {
      "en": "array",
      "zh": "排列；大量",
      "pos": "n.",
      "tag": "数量"
    },
    {
      "en": "articulate",
      "zh": "清楚表达；口齿清楚的",
      "pos": "v./adj.",
      "tag": "表达"
    },
    {
      "en": "ascertain",
      "zh": "查明；确定",
      "pos": "v.",
      "tag": "研究"
    },
    {
      "en": "assemble",
      "zh": "集合；组装",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "assert",
      "zh": "断言；坚持",
      "pos": "v.",
      "tag": "表达"
    },
    {
      "en": "asset",
      "zh": "资产；有价值的人",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "assign",
      "zh": "分配；布置",
      "pos": "v.",
      "tag": "管理"
    },
    {
      "en": "assumption",
      "zh": "假设；设想",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "attain",
      "zh": "达到；获得",
      "pos": "v.",
      "tag": "目标"
    },
    {
      "en": "authentic",
      "zh": "真实的；可靠的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "authorize",
      "zh": "授权；批准",
      "pos": "v.",
      "tag": "规则"
    },
    {
      "en": "autonomy",
      "zh": "自主；自治",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "bias",
      "zh": "偏见；倾向",
      "pos": "n./v.",
      "tag": "观点"
    },
    {
      "en": "bilateral",
      "zh": "双边的",
      "pos": "adj.",
      "tag": "国际"
    },
    {
      "en": "boost",
      "zh": "促进；提高",
      "pos": "v./n.",
      "tag": "变化"
    },
    {
      "en": "bulk",
      "zh": "大部分；体积",
      "pos": "n.",
      "tag": "数量"
    },
    {
      "en": "bureaucracy",
      "zh": "官僚制度",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "capacity",
      "zh": "能力；容量",
      "pos": "n.",
      "tag": "能力"
    },
    {
      "en": "category",
      "zh": "类别；范畴",
      "pos": "n.",
      "tag": "分类"
    },
    {
      "en": "caution",
      "zh": "谨慎；警告",
      "pos": "n./v.",
      "tag": "安全"
    },
    {
      "en": "cease",
      "zh": "停止；终止",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "characteristic",
      "zh": "特征；特性的",
      "pos": "n./adj.",
      "tag": "描述"
    },
    {
      "en": "circulate",
      "zh": "循环；传播",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "clarify",
      "zh": "澄清；阐明",
      "pos": "v.",
      "tag": "表达"
    },
    {
      "en": "coherent",
      "zh": "连贯的；一致的",
      "pos": "adj.",
      "tag": "写作"
    },
    {
      "en": "collaborate",
      "zh": "合作；协作",
      "pos": "v.",
      "tag": "职场"
    },
    {
      "en": "commence",
      "zh": "开始；着手",
      "pos": "v.",
      "tag": "时间"
    },
    {
      "en": "commodity",
      "zh": "商品；日用品",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "compatible",
      "zh": "兼容的；相容的",
      "pos": "adj.",
      "tag": "科技"
    },
    {
      "en": "compensate",
      "zh": "补偿；弥补",
      "pos": "v.",
      "tag": "商业"
    },
    {
      "en": "competent",
      "zh": "有能力的；胜任的",
      "pos": "adj.",
      "tag": "能力"
    },
    {
      "en": "complement",
      "zh": "补充；补足物",
      "pos": "v./n.",
      "tag": "关系"
    },
    {
      "en": "comprehensive",
      "zh": "全面的；综合的",
      "pos": "adj.",
      "tag": "写作"
    },
    {
      "en": "compulsory",
      "zh": "强制的；必修的",
      "pos": "adj.",
      "tag": "规则"
    },
    {
      "en": "concede",
      "zh": "承认；让步",
      "pos": "v.",
      "tag": "观点"
    },
    {
      "en": "confine",
      "zh": "限制；局限于",
      "pos": "v.",
      "tag": "规则"
    },
    {
      "en": "conform",
      "zh": "遵守；符合",
      "pos": "v.",
      "tag": "规则"
    },
    {
      "en": "consecutive",
      "zh": "连续的；连贯的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "consensus",
      "zh": "共识；一致意见",
      "pos": "n.",
      "tag": "观点"
    },
    {
      "en": "conserve",
      "zh": "保护；节约",
      "pos": "v.",
      "tag": "环境"
    },
    {
      "en": "considerable",
      "zh": "相当大的；重要的",
      "pos": "adj.",
      "tag": "程度"
    },
    {
      "en": "consistent",
      "zh": "一致的；持续的",
      "pos": "adj.",
      "tag": "逻辑"
    },
    {
      "en": "constituent",
      "zh": "组成部分；选民",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "constraint",
      "zh": "限制；约束",
      "pos": "n.",
      "tag": "规则"
    },
    {
      "en": "consult",
      "zh": "咨询；查阅",
      "pos": "v.",
      "tag": "学习"
    },
    {
      "en": "contaminate",
      "zh": "污染；弄脏",
      "pos": "v.",
      "tag": "环境"
    },
    {
      "en": "contemporary",
      "zh": "当代的；同时代的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "contradict",
      "zh": "反驳；相矛盾",
      "pos": "v.",
      "tag": "观点"
    },
    {
      "en": "controversial",
      "zh": "有争议的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "coordinate",
      "zh": "协调；坐标",
      "pos": "v./n.",
      "tag": "组织"
    },
    {
      "en": "correspond",
      "zh": "相一致；通信",
      "pos": "v.",
      "tag": "关系"
    },
    {
      "en": "credible",
      "zh": "可信的；可靠的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "criterion",
      "zh": "标准；准则",
      "pos": "n.",
      "tag": "规则"
    },
    {
      "en": "crucial",
      "zh": "关键的；至关重要的",
      "pos": "adj.",
      "tag": "判断"
    },
    {
      "en": "currency",
      "zh": "货币；流通",
      "pos": "n.",
      "tag": "经济"
    },
    {
      "en": "decisive",
      "zh": "决定性的；果断的",
      "pos": "adj.",
      "tag": "判断"
    },
    {
      "en": "deficiency",
      "zh": "缺乏；不足",
      "pos": "n.",
      "tag": "问题"
    },
    {
      "en": "degrade",
      "zh": "降低；退化",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "demonstrate",
      "zh": "证明；演示",
      "pos": "v.",
      "tag": "研究"
    },
    {
      "en": "denote",
      "zh": "表示；指示",
      "pos": "v.",
      "tag": "语言"
    },
    {
      "en": "deplete",
      "zh": "耗尽；大量减少",
      "pos": "v.",
      "tag": "环境"
    },
    {
      "en": "derive",
      "zh": "获得；源于",
      "pos": "v.",
      "tag": "逻辑"
    },
    {
      "en": "deviate",
      "zh": "偏离；背离",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "devote",
      "zh": "献身；投入",
      "pos": "v.",
      "tag": "态度"
    },
    {
      "en": "diminish",
      "zh": "减少；削弱",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "discriminate",
      "zh": "区别；歧视",
      "pos": "v.",
      "tag": "社会"
    },
    {
      "en": "displace",
      "zh": "取代；迫使离开",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "disposition",
      "zh": "性格；倾向",
      "pos": "n.",
      "tag": "心理"
    },
    {
      "en": "distort",
      "zh": "扭曲；曲解",
      "pos": "v.",
      "tag": "问题"
    },
    {
      "en": "diversify",
      "zh": "使多样化",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "dominant",
      "zh": "占主导的；显著的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "dominate",
      "zh": "支配；占优势",
      "pos": "v.",
      "tag": "关系"
    },
    {
      "en": "duration",
      "zh": "持续时间；期间",
      "pos": "n.",
      "tag": "时间"
    },
    {
      "en": "efficiency",
      "zh": "效率；效能",
      "pos": "n.",
      "tag": "管理"
    },
    {
      "en": "elaborate",
      "zh": "详细说明；复杂的",
      "pos": "v./adj.",
      "tag": "写作"
    },
    {
      "en": "eligible",
      "zh": "有资格的；合格的",
      "pos": "adj.",
      "tag": "规则"
    },
    {
      "en": "eliminate",
      "zh": "消除；淘汰",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "embrace",
      "zh": "接受；拥抱",
      "pos": "v.",
      "tag": "态度"
    },
    {
      "en": "empirical",
      "zh": "经验的；实证的",
      "pos": "adj.",
      "tag": "研究"
    },
    {
      "en": "encompass",
      "zh": "包含；围绕",
      "pos": "v.",
      "tag": "逻辑"
    },
    {
      "en": "enforce",
      "zh": "执行；强制实施",
      "pos": "v.",
      "tag": "法律"
    },
    {
      "en": "enhance",
      "zh": "提高；增强",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "enormous",
      "zh": "巨大的；庞大的",
      "pos": "adj.",
      "tag": "程度"
    },
    {
      "en": "enterprise",
      "zh": "企业；事业",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "enthusiasm",
      "zh": "热情；热心",
      "pos": "n.",
      "tag": "情绪"
    },
    {
      "en": "equivalent",
      "zh": "相等的；等价物",
      "pos": "adj./n.",
      "tag": "比较"
    },
    {
      "en": "era",
      "zh": "时代；纪元",
      "pos": "n.",
      "tag": "时间"
    },
    {
      "en": "establish",
      "zh": "建立；确立",
      "pos": "v.",
      "tag": "社会"
    },
    {
      "en": "estimate",
      "zh": "估计；估价",
      "pos": "v./n.",
      "tag": "研究"
    },
    {
      "en": "ethical",
      "zh": "道德的；伦理的",
      "pos": "adj.",
      "tag": "价值"
    },
    {
      "en": "evaluate",
      "zh": "评估；评价",
      "pos": "v.",
      "tag": "研究"
    },
    {
      "en": "eventually",
      "zh": "最终；终于",
      "pos": "adv.",
      "tag": "时间"
    },
    {
      "en": "exaggerate",
      "zh": "夸大；言过其实",
      "pos": "v.",
      "tag": "表达"
    },
    {
      "en": "exceed",
      "zh": "超过；超出",
      "pos": "v.",
      "tag": "数量"
    },
    {
      "en": "exclude",
      "zh": "排除；不包括",
      "pos": "v.",
      "tag": "逻辑"
    },
    {
      "en": "execute",
      "zh": "执行；处决",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "exempt",
      "zh": "免除；豁免",
      "pos": "v./adj.",
      "tag": "规则"
    },
    {
      "en": "exert",
      "zh": "施加；运用",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "expedition",
      "zh": "远征；探险",
      "pos": "n.",
      "tag": "旅行"
    },
    {
      "en": "explicit",
      "zh": "明确的；清楚的",
      "pos": "adj.",
      "tag": "表达"
    },
    {
      "en": "exploit",
      "zh": "利用；开采",
      "pos": "v.",
      "tag": "资源"
    },
    {
      "en": "facilitate",
      "zh": "促进；使便利",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "fluctuate",
      "zh": "波动；起伏",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "formulate",
      "zh": "制定；构想",
      "pos": "v.",
      "tag": "研究"
    },
    {
      "en": "forthcoming",
      "zh": "即将到来的；乐于提供的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "foundation",
      "zh": "基础；基金会",
      "pos": "n.",
      "tag": "组织"
    },
    {
      "en": "frustrate",
      "zh": "使沮丧；阻挠",
      "pos": "v.",
      "tag": "情绪"
    },
    {
      "en": "fundamental",
      "zh": "基本的；根本的",
      "pos": "adj.",
      "tag": "重要"
    },
    {
      "en": "genuine",
      "zh": "真正的；真诚的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "grant",
      "zh": "授予；拨款",
      "pos": "v./n.",
      "tag": "组织"
    },
    {
      "en": "gravitate",
      "zh": "受吸引；倾向于",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "guarantee",
      "zh": "保证；担保",
      "pos": "n./v.",
      "tag": "商业"
    },
    {
      "en": "hierarchy",
      "zh": "等级制度；层级",
      "pos": "n.",
      "tag": "组织"
    },
    {
      "en": "highlight",
      "zh": "突出；强调",
      "pos": "v./n.",
      "tag": "表达"
    },
    {
      "en": "identical",
      "zh": "完全相同的",
      "pos": "adj.",
      "tag": "比较"
    },
    {
      "en": "ideology",
      "zh": "意识形态；思想体系",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "implement",
      "zh": "实施；工具",
      "pos": "v./n.",
      "tag": "管理"
    },
    {
      "en": "implicit",
      "zh": "含蓄的；暗示的",
      "pos": "adj.",
      "tag": "表达"
    },
    {
      "en": "incentive",
      "zh": "激励；刺激",
      "pos": "n.",
      "tag": "管理"
    },
    {
      "en": "incidence",
      "zh": "发生率；影响范围",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "incline",
      "zh": "倾向于；斜坡",
      "pos": "v./n.",
      "tag": "态度"
    },
    {
      "en": "infrastructure",
      "zh": "基础设施",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "inherent",
      "zh": "固有的；内在的",
      "pos": "adj.",
      "tag": "属性"
    },
    {
      "en": "inhibit",
      "zh": "抑制；阻止",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "initial",
      "zh": "最初的；首字母",
      "pos": "adj./n.",
      "tag": "时间"
    },
    {
      "en": "innovation",
      "zh": "创新；革新",
      "pos": "n.",
      "tag": "科技"
    },
    {
      "en": "insight",
      "zh": "洞察；见解",
      "pos": "n.",
      "tag": "思考"
    },
    {
      "en": "integral",
      "zh": "必要的；完整的",
      "pos": "adj.",
      "tag": "逻辑"
    },
    {
      "en": "integrate",
      "zh": "整合；融入",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "intense",
      "zh": "强烈的；紧张的",
      "pos": "adj.",
      "tag": "程度"
    },
    {
      "en": "interact",
      "zh": "互动；相互作用",
      "pos": "v.",
      "tag": "关系"
    },
    {
      "en": "intermediate",
      "zh": "中间的；中级的",
      "pos": "adj.",
      "tag": "等级"
    },
    {
      "en": "interpret",
      "zh": "解释；口译",
      "pos": "v.",
      "tag": "语言"
    },
    {
      "en": "intervene",
      "zh": "干预；介入",
      "pos": "v.",
      "tag": "社会"
    },
    {
      "en": "intrinsic",
      "zh": "内在的；固有的",
      "pos": "adj.",
      "tag": "属性"
    },
    {
      "en": "investigate",
      "zh": "调查；研究",
      "pos": "v.",
      "tag": "研究"
    },
    {
      "en": "justify",
      "zh": "证明合理；为……辩护",
      "pos": "v.",
      "tag": "写作"
    },
    {
      "en": "legislation",
      "zh": "立法；法规",
      "pos": "n.",
      "tag": "法律"
    },
    {
      "en": "legitimate",
      "zh": "合法的；合理的",
      "pos": "adj.",
      "tag": "法律"
    },
    {
      "en": "likewise",
      "zh": "同样地；也",
      "pos": "adv.",
      "tag": "逻辑"
    },
    {
      "en": "manipulate",
      "zh": "操纵；巧妙处理",
      "pos": "v.",
      "tag": "管理"
    },
    {
      "en": "marginal",
      "zh": "边缘的；微小的",
      "pos": "adj.",
      "tag": "程度"
    },
    {
      "en": "mature",
      "zh": "成熟的；使成熟",
      "pos": "adj./v.",
      "tag": "发展"
    },
    {
      "en": "mechanism",
      "zh": "机制；机械装置",
      "pos": "n.",
      "tag": "科技"
    },
    {
      "en": "mediate",
      "zh": "调解；斡旋",
      "pos": "v.",
      "tag": "关系"
    },
    {
      "en": "migration",
      "zh": "迁移；移民",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "minimize",
      "zh": "使最小化；减少",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "modify",
      "zh": "修改；调整",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "monitor",
      "zh": "监测；显示器",
      "pos": "v./n.",
      "tag": "科技"
    },
    {
      "en": "mutual",
      "zh": "相互的；共同的",
      "pos": "adj.",
      "tag": "关系"
    },
    {
      "en": "nevertheless",
      "zh": "然而；不过",
      "pos": "adv.",
      "tag": "逻辑"
    },
    {
      "en": "notion",
      "zh": "概念；观念",
      "pos": "n.",
      "tag": "思考"
    },
    {
      "en": "objective",
      "zh": "客观的；目标",
      "pos": "adj./n.",
      "tag": "写作"
    },
    {
      "en": "obligation",
      "zh": "义务；责任",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "obtain",
      "zh": "获得；得到",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "occupy",
      "zh": "占据；占用",
      "pos": "v.",
      "tag": "空间"
    },
    {
      "en": "ongoing",
      "zh": "持续的；进行中的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "optimal",
      "zh": "最佳的；最优的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "orient",
      "zh": "使适应；确定方向",
      "pos": "v.",
      "tag": "方向"
    },
    {
      "en": "outcome",
      "zh": "结果；成果",
      "pos": "n.",
      "tag": "逻辑"
    },
    {
      "en": "outweigh",
      "zh": "比……重要；超过",
      "pos": "v.",
      "tag": "比较"
    },
    {
      "en": "paradigm",
      "zh": "范式；典型",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "parallel",
      "zh": "平行的；相似的",
      "pos": "adj./n.",
      "tag": "比较"
    },
    {
      "en": "parameter",
      "zh": "参数；范围",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "participate",
      "zh": "参与；参加",
      "pos": "v.",
      "tag": "社会"
    },
    {
      "en": "perceive",
      "zh": "察觉；认为",
      "pos": "v.",
      "tag": "思考"
    },
    {
      "en": "persist",
      "zh": "坚持；持续",
      "pos": "v.",
      "tag": "时间"
    },
    {
      "en": "perspective",
      "zh": "角度；观点",
      "pos": "n.",
      "tag": "观点"
    },
    {
      "en": "phase",
      "zh": "阶段；时期",
      "pos": "n.",
      "tag": "时间"
    },
    {
      "en": "phenomenon",
      "zh": "现象",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "plausible",
      "zh": "可信的；貌似合理的",
      "pos": "adj.",
      "tag": "判断"
    },
    {
      "en": "preliminary",
      "zh": "初步的；预备的",
      "pos": "adj.",
      "tag": "研究"
    },
    {
      "en": "presume",
      "zh": "假定；推测",
      "pos": "v.",
      "tag": "判断"
    },
    {
      "en": "priority",
      "zh": "优先事项；优先权",
      "pos": "n.",
      "tag": "管理"
    },
    {
      "en": "proceed",
      "zh": "继续进行；前进",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "prohibit",
      "zh": "禁止；阻止",
      "pos": "v.",
      "tag": "规则"
    },
    {
      "en": "prominent",
      "zh": "显著的；杰出的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "protocol",
      "zh": "协议；礼仪",
      "pos": "n.",
      "tag": "规则"
    },
    {
      "en": "qualify",
      "zh": "使有资格；符合条件",
      "pos": "v.",
      "tag": "规则"
    },
    {
      "en": "radical",
      "zh": "激进的；根本的",
      "pos": "adj.",
      "tag": "变化"
    },
    {
      "en": "random",
      "zh": "随机的；任意的",
      "pos": "adj.",
      "tag": "数学"
    },
    {
      "en": "ratio",
      "zh": "比率；比例",
      "pos": "n.",
      "tag": "数量"
    },
    {
      "en": "rational",
      "zh": "理性的；合理的",
      "pos": "adj.",
      "tag": "判断"
    },
    {
      "en": "reinforce",
      "zh": "加强；强化",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "reliable",
      "zh": "可靠的；可信赖的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "reluctant",
      "zh": "不情愿的；勉强的",
      "pos": "adj.",
      "tag": "态度"
    },
    {
      "en": "revenue",
      "zh": "收入；税收",
      "pos": "n.",
      "tag": "经济"
    },
    {
      "en": "reverse",
      "zh": "反转；相反的",
      "pos": "v./adj.",
      "tag": "变化"
    },
    {
      "en": "revise",
      "zh": "修改；复习",
      "pos": "v.",
      "tag": "学习"
    },
    {
      "en": "rigid",
      "zh": "僵硬的；严格的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "scenario",
      "zh": "情景；方案",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "scope",
      "zh": "范围；眼界",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "sequence",
      "zh": "顺序；连续",
      "pos": "n.",
      "tag": "结构"
    },
    {
      "en": "significant",
      "zh": "重要的；显著的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "simulate",
      "zh": "模拟；仿真",
      "pos": "v.",
      "tag": "科技"
    },
    {
      "en": "sole",
      "zh": "唯一的；鞋底",
      "pos": "adj./n.",
      "tag": "多义"
    },
    {
      "en": "specify",
      "zh": "明确说明；指定",
      "pos": "v.",
      "tag": "表达"
    },
    {
      "en": "subsequent",
      "zh": "随后的；后来的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "substitute",
      "zh": "替代；替代品",
      "pos": "v./n.",
      "tag": "变化"
    },
    {
      "en": "sufficient",
      "zh": "足够的；充分的",
      "pos": "adj.",
      "tag": "数量"
    },
    {
      "en": "supplement",
      "zh": "补充；增补",
      "pos": "n./v.",
      "tag": "学习"
    },
    {
      "en": "suspend",
      "zh": "暂停；悬挂",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "sustainable",
      "zh": "可持续的",
      "pos": "adj.",
      "tag": "环境"
    },
    {
      "en": "tentative",
      "zh": "暂定的；试探性的",
      "pos": "adj.",
      "tag": "判断"
    },
    {
      "en": "thereby",
      "zh": "因此；由此",
      "pos": "adv.",
      "tag": "逻辑"
    },
    {
      "en": "threshold",
      "zh": "门槛；阈值",
      "pos": "n.",
      "tag": "界限"
    },
    {
      "en": "tolerate",
      "zh": "容忍；忍受",
      "pos": "v.",
      "tag": "态度"
    },
    {
      "en": "trace",
      "zh": "追踪；痕迹",
      "pos": "v./n.",
      "tag": "研究"
    },
    {
      "en": "transition",
      "zh": "过渡；转变",
      "pos": "n.",
      "tag": "变化"
    },
    {
      "en": "underlying",
      "zh": "潜在的；根本的",
      "pos": "adj.",
      "tag": "分析"
    },
    {
      "en": "uniform",
      "zh": "统一的；制服",
      "pos": "adj./n.",
      "tag": "多义"
    },
    {
      "en": "utilize",
      "zh": "利用；使用",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "verify",
      "zh": "核实；证明",
      "pos": "v.",
      "tag": "研究"
    },
    {
      "en": "viable",
      "zh": "可行的；能存活的",
      "pos": "adj.",
      "tag": "判断"
    },
    {
      "en": "virtually",
      "zh": "几乎；实际上",
      "pos": "adv.",
      "tag": "程度"
    },
    {
      "en": "visualize",
      "zh": "想象；可视化",
      "pos": "v.",
      "tag": "表达"
    },
    {
      "en": "whereas",
      "zh": "然而；鉴于",
      "pos": "conj.",
      "tag": "逻辑"
    },
    {
      "en": "whereby",
      "zh": "凭借；借以",
      "pos": "adv.",
      "tag": "逻辑"
    }
  ],
  "IELTS": [
    {
      "en": "accommodation",
      "zh": "住宿；调节",
      "pos": "n.",
      "tag": "旅行"
    },
    {
      "en": "adaptation",
      "zh": "适应；改编",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "adolescent",
      "zh": "青少年；青春期的",
      "pos": "n./adj.",
      "tag": "社会"
    },
    {
      "en": "agriculture",
      "zh": "农业；农学",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "alleviate",
      "zh": "减轻；缓解",
      "pos": "v.",
      "tag": "问题"
    },
    {
      "en": "alternative",
      "zh": "替代方案；可替代的",
      "pos": "n./adj.",
      "tag": "写作"
    },
    {
      "en": "ancestor",
      "zh": "祖先；先人",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "annual",
      "zh": "每年的；年度的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "anthropology",
      "zh": "人类学",
      "pos": "n.",
      "tag": "学术"
    },
    {
      "en": "archaeology",
      "zh": "考古学",
      "pos": "n.",
      "tag": "学术"
    },
    {
      "en": "architecture",
      "zh": "建筑；建筑学",
      "pos": "n.",
      "tag": "城市"
    },
    {
      "en": "assessment",
      "zh": "评估；评价",
      "pos": "n.",
      "tag": "教育"
    },
    {
      "en": "biodiversity",
      "zh": "生物多样性",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "breakthrough",
      "zh": "突破；重大进展",
      "pos": "n.",
      "tag": "科技"
    },
    {
      "en": "campaign",
      "zh": "运动；宣传活动",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "carbon",
      "zh": "碳；碳元素",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "catastrophe",
      "zh": "灾难；大祸",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "civilization",
      "zh": "文明；社会",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "commerce",
      "zh": "商业；贸易",
      "pos": "n.",
      "tag": "经济"
    },
    {
      "en": "community",
      "zh": "社区；共同体",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "comparison",
      "zh": "比较；对照",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "compulsory",
      "zh": "强制的；必修的",
      "pos": "adj.",
      "tag": "教育"
    },
    {
      "en": "conservation",
      "zh": "保护；保存",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "consume",
      "zh": "消费；消耗",
      "pos": "v.",
      "tag": "经济"
    },
    {
      "en": "consumer",
      "zh": "消费者",
      "pos": "n.",
      "tag": "经济"
    },
    {
      "en": "contamination",
      "zh": "污染；玷污",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "contribution",
      "zh": "贡献；捐助",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "controversy",
      "zh": "争议；争论",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "creativity",
      "zh": "创造力；创意",
      "pos": "n.",
      "tag": "教育"
    },
    {
      "en": "curriculum",
      "zh": "课程；课程表",
      "pos": "n.",
      "tag": "教育"
    },
    {
      "en": "deforestation",
      "zh": "森林砍伐",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "demographic",
      "zh": "人口统计的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "dependency",
      "zh": "依赖；从属",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "desertification",
      "zh": "沙漠化",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "destination",
      "zh": "目的地；终点",
      "pos": "n.",
      "tag": "旅行"
    },
    {
      "en": "disposable",
      "zh": "一次性的；可丢弃的",
      "pos": "adj.",
      "tag": "环境"
    },
    {
      "en": "diversity",
      "zh": "多样性；差异",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "domestic",
      "zh": "国内的；家庭的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "ecosystem",
      "zh": "生态系统",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "educational",
      "zh": "教育的",
      "pos": "adj.",
      "tag": "教育"
    },
    {
      "en": "emission",
      "zh": "排放；散发",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "endangered",
      "zh": "濒危的",
      "pos": "adj.",
      "tag": "环境"
    },
    {
      "en": "entrepreneur",
      "zh": "企业家；创业者",
      "pos": "n.",
      "tag": "经济"
    },
    {
      "en": "equality",
      "zh": "平等；相等",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "equation",
      "zh": "方程；等式",
      "pos": "n.",
      "tag": "学术"
    },
    {
      "en": "evolution",
      "zh": "进化；演变",
      "pos": "n.",
      "tag": "科学"
    },
    {
      "en": "expenditure",
      "zh": "开支；支出",
      "pos": "n.",
      "tag": "经济"
    },
    {
      "en": "experiment",
      "zh": "实验；试验",
      "pos": "n.",
      "tag": "学术"
    },
    {
      "en": "extinction",
      "zh": "灭绝；消亡",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "facility",
      "zh": "设施；设备",
      "pos": "n.",
      "tag": "城市"
    },
    {
      "en": "fossil",
      "zh": "化石；化石的",
      "pos": "n./adj.",
      "tag": "环境"
    },
    {
      "en": "funding",
      "zh": "资金；拨款",
      "pos": "n.",
      "tag": "教育"
    },
    {
      "en": "genetic",
      "zh": "基因的；遗传的",
      "pos": "adj.",
      "tag": "科学"
    },
    {
      "en": "globalization",
      "zh": "全球化",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "governance",
      "zh": "治理；管理方式",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "greenhouse",
      "zh": "温室；温室的",
      "pos": "n./adj.",
      "tag": "环境"
    },
    {
      "en": "heritage",
      "zh": "遗产；传统",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "household",
      "zh": "家庭；家用的",
      "pos": "n./adj.",
      "tag": "生活"
    },
    {
      "en": "immigration",
      "zh": "移民；移居",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "indicator",
      "zh": "指标；指示物",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "indigenous",
      "zh": "本土的；土著的",
      "pos": "adj.",
      "tag": "文化"
    },
    {
      "en": "inequality",
      "zh": "不平等；差距",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "infrastructure",
      "zh": "基础设施",
      "pos": "n.",
      "tag": "城市"
    },
    {
      "en": "innovation",
      "zh": "创新；革新",
      "pos": "n.",
      "tag": "科技"
    },
    {
      "en": "interaction",
      "zh": "互动；相互作用",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "investment",
      "zh": "投资；投入",
      "pos": "n.",
      "tag": "经济"
    },
    {
      "en": "landscape",
      "zh": "风景；景观",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "livelihood",
      "zh": "生计；谋生方式",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "manufacture",
      "zh": "制造；制造业",
      "pos": "v./n.",
      "tag": "经济"
    },
    {
      "en": "marine",
      "zh": "海洋的；海军的",
      "pos": "adj.",
      "tag": "环境"
    },
    {
      "en": "measurement",
      "zh": "测量；衡量",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "migration",
      "zh": "迁移；移民",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "obesity",
      "zh": "肥胖；肥胖症",
      "pos": "n.",
      "tag": "健康"
    },
    {
      "en": "offspring",
      "zh": "后代；子女",
      "pos": "n.",
      "tag": "科学"
    },
    {
      "en": "outstanding",
      "zh": "杰出的；未解决的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "overpopulation",
      "zh": "人口过剩",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "participant",
      "zh": "参与者；参加者",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "pedestrian",
      "zh": "行人；步行者",
      "pos": "n.",
      "tag": "城市"
    },
    {
      "en": "pollutant",
      "zh": "污染物",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "preservation",
      "zh": "保护；保存",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "productivity",
      "zh": "生产率；效率",
      "pos": "n.",
      "tag": "经济"
    },
    {
      "en": "proportion",
      "zh": "比例；部分",
      "pos": "n.",
      "tag": "图表"
    },
    {
      "en": "prosperity",
      "zh": "繁荣；兴旺",
      "pos": "n.",
      "tag": "经济"
    },
    {
      "en": "psychology",
      "zh": "心理学；心理",
      "pos": "n.",
      "tag": "学术"
    },
    {
      "en": "recreation",
      "zh": "娱乐；消遣",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "recycling",
      "zh": "回收；再利用",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "renewable",
      "zh": "可再生的",
      "pos": "adj.",
      "tag": "环境"
    },
    {
      "en": "resident",
      "zh": "居民；住院医生",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "restriction",
      "zh": "限制；约束",
      "pos": "n.",
      "tag": "规则"
    },
    {
      "en": "rural",
      "zh": "农村的；乡村的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "sanitation",
      "zh": "卫生设施；环境卫生",
      "pos": "n.",
      "tag": "健康"
    },
    {
      "en": "shortage",
      "zh": "短缺；不足",
      "pos": "n.",
      "tag": "问题"
    },
    {
      "en": "species",
      "zh": "物种；种类",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "statistics",
      "zh": "统计数据；统计学",
      "pos": "n.",
      "tag": "学术"
    },
    {
      "en": "strategy",
      "zh": "策略；战略",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "subsidy",
      "zh": "补贴；津贴",
      "pos": "n.",
      "tag": "经济"
    },
    {
      "en": "survey",
      "zh": "调查；测量",
      "pos": "n./v.",
      "tag": "研究"
    },
    {
      "en": "symptom",
      "zh": "症状；征兆",
      "pos": "n.",
      "tag": "健康"
    },
    {
      "en": "tourism",
      "zh": "旅游业；观光",
      "pos": "n.",
      "tag": "旅行"
    },
    {
      "en": "trend",
      "zh": "趋势；潮流",
      "pos": "n.",
      "tag": "图表"
    },
    {
      "en": "urbanization",
      "zh": "城市化",
      "pos": "n.",
      "tag": "城市"
    },
    {
      "en": "vehicle",
      "zh": "车辆；交通工具",
      "pos": "n.",
      "tag": "交通"
    },
    {
      "en": "vocational",
      "zh": "职业的；职业教育的",
      "pos": "adj.",
      "tag": "教育"
    },
    {
      "en": "volunteer",
      "zh": "志愿者；自愿做",
      "pos": "n./v.",
      "tag": "社会"
    },
    {
      "en": "wildlife",
      "zh": "野生动物",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "workforce",
      "zh": "劳动力；员工队伍",
      "pos": "n.",
      "tag": "经济"
    }
  ],
  "高考核心": [
    {
      "en": "absent",
      "zh": "缺席的；心不在焉的",
      "pos": "adj.",
      "tag": "校园"
    },
    {
      "en": "accent",
      "zh": "口音；重音",
      "pos": "n.",
      "tag": "语言"
    },
    {
      "en": "ache",
      "zh": "疼痛；隐痛",
      "pos": "n./v.",
      "tag": "身体"
    },
    {
      "en": "achieve",
      "zh": "实现；达到",
      "pos": "v.",
      "tag": "目标"
    },
    {
      "en": "active",
      "zh": "积极的；活跃的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "address",
      "zh": "地址；演讲；处理",
      "pos": "n./v.",
      "tag": "多义"
    },
    {
      "en": "adventure",
      "zh": "冒险；奇遇",
      "pos": "n.",
      "tag": "阅读"
    },
    {
      "en": "afterward",
      "zh": "后来；之后",
      "pos": "adv.",
      "tag": "时间"
    },
    {
      "en": "against",
      "zh": "反对；倚着",
      "pos": "prep.",
      "tag": "方向"
    },
    {
      "en": "ahead",
      "zh": "在前面；提前",
      "pos": "adv.",
      "tag": "时间"
    },
    {
      "en": "aid",
      "zh": "帮助；援助",
      "pos": "n./v.",
      "tag": "社会"
    },
    {
      "en": "aim",
      "zh": "目标；瞄准",
      "pos": "n./v.",
      "tag": "目标"
    },
    {
      "en": "allow",
      "zh": "允许；准许",
      "pos": "v.",
      "tag": "规则"
    },
    {
      "en": "amaze",
      "zh": "使惊讶",
      "pos": "v.",
      "tag": "情绪"
    },
    {
      "en": "ancient",
      "zh": "古代的；古老的",
      "pos": "adj.",
      "tag": "历史"
    },
    {
      "en": "appear",
      "zh": "出现；似乎",
      "pos": "v.",
      "tag": "高频"
    },
    {
      "en": "area",
      "zh": "地区；面积",
      "pos": "n.",
      "tag": "高频"
    },
    {
      "en": "arrange",
      "zh": "安排；整理",
      "pos": "v.",
      "tag": "计划"
    },
    {
      "en": "article",
      "zh": "文章；物品",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "attend",
      "zh": "参加；出席",
      "pos": "v.",
      "tag": "校园"
    },
    {
      "en": "attention",
      "zh": "注意；关注",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "avoid",
      "zh": "避免；避开",
      "pos": "v.",
      "tag": "策略"
    },
    {
      "en": "basic",
      "zh": "基本的；基础的",
      "pos": "adj.",
      "tag": "学习"
    },
    {
      "en": "believe",
      "zh": "相信；认为",
      "pos": "v.",
      "tag": "观点"
    },
    {
      "en": "birthplace",
      "zh": "出生地；发源地",
      "pos": "n.",
      "tag": "人物"
    },
    {
      "en": "borrow",
      "zh": "借入；借用",
      "pos": "v.",
      "tag": "生活"
    },
    {
      "en": "brain",
      "zh": "大脑；智力",
      "pos": "n.",
      "tag": "身体"
    },
    {
      "en": "calendar",
      "zh": "日历；历法",
      "pos": "n.",
      "tag": "时间"
    },
    {
      "en": "cancel",
      "zh": "取消",
      "pos": "v.",
      "tag": "安排"
    },
    {
      "en": "careful",
      "zh": "仔细的；小心的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "cause",
      "zh": "原因；导致",
      "pos": "n./v.",
      "tag": "因果"
    },
    {
      "en": "certain",
      "zh": "确定的；某个",
      "pos": "adj.",
      "tag": "判断"
    },
    {
      "en": "chance",
      "zh": "机会；可能性",
      "pos": "n.",
      "tag": "抽象"
    },
    {
      "en": "choice",
      "zh": "选择；抉择",
      "pos": "n.",
      "tag": "决策"
    },
    {
      "en": "comfortable",
      "zh": "舒适的；自在的",
      "pos": "adj.",
      "tag": "生活"
    },
    {
      "en": "common",
      "zh": "常见的；共同的",
      "pos": "adj.",
      "tag": "高频"
    },
    {
      "en": "complete",
      "zh": "完成；完整的",
      "pos": "v./adj.",
      "tag": "任务"
    },
    {
      "en": "condition",
      "zh": "条件；状况",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "confidence",
      "zh": "信心；自信",
      "pos": "n.",
      "tag": "心理"
    },
    {
      "en": "consider",
      "zh": "考虑；认为",
      "pos": "v.",
      "tag": "思考"
    },
    {
      "en": "continue",
      "zh": "继续；持续",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "control",
      "zh": "控制；管理",
      "pos": "n./v.",
      "tag": "管理"
    },
    {
      "en": "culture",
      "zh": "文化；文明",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "curiosity",
      "zh": "好奇心",
      "pos": "n.",
      "tag": "心理"
    },
    {
      "en": "decision",
      "zh": "决定；决心",
      "pos": "n.",
      "tag": "决策"
    },
    {
      "en": "degree",
      "zh": "程度；学位",
      "pos": "n.",
      "tag": "多义"
    },
    {
      "en": "deliver",
      "zh": "递送；发表",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "department",
      "zh": "部门；系",
      "pos": "n.",
      "tag": "组织"
    },
    {
      "en": "describe",
      "zh": "描述；形容",
      "pos": "v.",
      "tag": "写作"
    },
    {
      "en": "develop",
      "zh": "发展；培养",
      "pos": "v.",
      "tag": "成长"
    },
    {
      "en": "difference",
      "zh": "差异；不同",
      "pos": "n.",
      "tag": "比较"
    },
    {
      "en": "direction",
      "zh": "方向；指导",
      "pos": "n.",
      "tag": "空间"
    },
    {
      "en": "disappoint",
      "zh": "使失望",
      "pos": "v.",
      "tag": "情绪"
    },
    {
      "en": "discover",
      "zh": "发现；发觉",
      "pos": "v.",
      "tag": "探索"
    },
    {
      "en": "distance",
      "zh": "距离；远方",
      "pos": "n.",
      "tag": "空间"
    },
    {
      "en": "divide",
      "zh": "分开；划分",
      "pos": "v.",
      "tag": "数学"
    },
    {
      "en": "education",
      "zh": "教育；培养",
      "pos": "n.",
      "tag": "校园"
    },
    {
      "en": "effort",
      "zh": "努力；尝试",
      "pos": "n.",
      "tag": "目标"
    },
    {
      "en": "encourage",
      "zh": "鼓励；促进",
      "pos": "v.",
      "tag": "关系"
    },
    {
      "en": "environment",
      "zh": "环境；周围状况",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "event",
      "zh": "事件；活动",
      "pos": "n.",
      "tag": "高频"
    },
    {
      "en": "excellent",
      "zh": "优秀的；极好的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "exercise",
      "zh": "锻炼；练习",
      "pos": "n./v.",
      "tag": "健康"
    },
    {
      "en": "expect",
      "zh": "期待；预计",
      "pos": "v.",
      "tag": "思考"
    },
    {
      "en": "experience",
      "zh": "经验；经历",
      "pos": "n./v.",
      "tag": "成长"
    },
    {
      "en": "explain",
      "zh": "解释；说明",
      "pos": "v.",
      "tag": "写作"
    },
    {
      "en": "express",
      "zh": "表达；快递",
      "pos": "v./n.",
      "tag": "多义"
    },
    {
      "en": "failure",
      "zh": "失败；失败的人",
      "pos": "n.",
      "tag": "成长"
    },
    {
      "en": "famous",
      "zh": "著名的",
      "pos": "adj.",
      "tag": "人物"
    },
    {
      "en": "festival",
      "zh": "节日；庆典",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "foreign",
      "zh": "外国的；陌生的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "forget",
      "zh": "忘记；忽略",
      "pos": "v.",
      "tag": "记忆"
    },
    {
      "en": "friendship",
      "zh": "友谊；友情",
      "pos": "n.",
      "tag": "关系"
    },
    {
      "en": "generous",
      "zh": "慷慨的；大方的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "government",
      "zh": "政府；治理",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "graduate",
      "zh": "毕业；毕业生",
      "pos": "v./n.",
      "tag": "校园"
    },
    {
      "en": "grateful",
      "zh": "感激的；感谢的",
      "pos": "adj.",
      "tag": "情感"
    },
    {
      "en": "habit",
      "zh": "习惯；习性",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "honest",
      "zh": "诚实的；正直的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "humorous",
      "zh": "幽默的；诙谐的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "imagine",
      "zh": "想象；设想",
      "pos": "v.",
      "tag": "思考"
    },
    {
      "en": "important",
      "zh": "重要的；有影响的",
      "pos": "adj.",
      "tag": "高频"
    },
    {
      "en": "improve",
      "zh": "提高；改善",
      "pos": "v.",
      "tag": "学习"
    },
    {
      "en": "include",
      "zh": "包括；包含",
      "pos": "v.",
      "tag": "逻辑"
    },
    {
      "en": "increase",
      "zh": "增加；增长",
      "pos": "v./n.",
      "tag": "数量"
    },
    {
      "en": "influence",
      "zh": "影响；作用",
      "pos": "n./v.",
      "tag": "关系"
    },
    {
      "en": "information",
      "zh": "信息；资料",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "interest",
      "zh": "兴趣；利益",
      "pos": "n./v.",
      "tag": "学习"
    },
    {
      "en": "introduce",
      "zh": "介绍；引入",
      "pos": "v.",
      "tag": "社交"
    },
    {
      "en": "journey",
      "zh": "旅行；历程",
      "pos": "n.",
      "tag": "阅读"
    },
    {
      "en": "knowledge",
      "zh": "知识；了解",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "language",
      "zh": "语言；表达方式",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "laughter",
      "zh": "笑声；欢笑",
      "pos": "n.",
      "tag": "情绪"
    },
    {
      "en": "lonely",
      "zh": "孤独的；偏僻的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "manage",
      "zh": "管理；设法做到",
      "pos": "v.",
      "tag": "能力"
    },
    {
      "en": "meaning",
      "zh": "意义；意思",
      "pos": "n.",
      "tag": "语言"
    },
    {
      "en": "medicine",
      "zh": "药；医学",
      "pos": "n.",
      "tag": "健康"
    },
    {
      "en": "memory",
      "zh": "记忆；回忆",
      "pos": "n.",
      "tag": "心理"
    },
    {
      "en": "method",
      "zh": "方法；办法",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "modern",
      "zh": "现代的；新式的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "natural",
      "zh": "自然的；天然的",
      "pos": "adj.",
      "tag": "环境"
    },
    {
      "en": "necessary",
      "zh": "必要的；必需的",
      "pos": "adj.",
      "tag": "判断"
    },
    {
      "en": "notice",
      "zh": "注意；通知",
      "pos": "n./v.",
      "tag": "社交"
    },
    {
      "en": "opinion",
      "zh": "意见；看法",
      "pos": "n.",
      "tag": "观点"
    },
    {
      "en": "opportunity",
      "zh": "机会；时机",
      "pos": "n.",
      "tag": "目标"
    },
    {
      "en": "ordinary",
      "zh": "普通的；平常的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "organize",
      "zh": "组织；安排",
      "pos": "v.",
      "tag": "能力"
    },
    {
      "en": "patient",
      "zh": "耐心的；病人",
      "pos": "adj./n.",
      "tag": "多义"
    },
    {
      "en": "perfect",
      "zh": "完美的；使完善",
      "pos": "adj./v.",
      "tag": "评价"
    },
    {
      "en": "perform",
      "zh": "表演；执行",
      "pos": "v.",
      "tag": "动作"
    },
    {
      "en": "physical",
      "zh": "身体的；物理的",
      "pos": "adj.",
      "tag": "科学"
    },
    {
      "en": "pleasant",
      "zh": "令人愉快的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "popular",
      "zh": "受欢迎的；流行的",
      "pos": "adj.",
      "tag": "社会"
    },
    {
      "en": "practice",
      "zh": "练习；实践",
      "pos": "n./v.",
      "tag": "学习"
    },
    {
      "en": "prepare",
      "zh": "准备；预备",
      "pos": "v.",
      "tag": "学习"
    },
    {
      "en": "pressure",
      "zh": "压力；压强",
      "pos": "n.",
      "tag": "心理"
    },
    {
      "en": "prevent",
      "zh": "阻止；预防",
      "pos": "v.",
      "tag": "安全"
    },
    {
      "en": "probably",
      "zh": "可能；大概",
      "pos": "adv.",
      "tag": "判断"
    },
    {
      "en": "progress",
      "zh": "进步；进展",
      "pos": "n./v.",
      "tag": "成长"
    },
    {
      "en": "protect",
      "zh": "保护；防护",
      "pos": "v.",
      "tag": "安全"
    },
    {
      "en": "provide",
      "zh": "提供；供应",
      "pos": "v.",
      "tag": "高频"
    },
    {
      "en": "purpose",
      "zh": "目的；意图",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "quality",
      "zh": "质量；品质",
      "pos": "n.",
      "tag": "评价"
    },
    {
      "en": "realize",
      "zh": "意识到；实现",
      "pos": "v.",
      "tag": "思考"
    },
    {
      "en": "receive",
      "zh": "收到；接待",
      "pos": "v.",
      "tag": "社交"
    },
    {
      "en": "recent",
      "zh": "最近的；近来的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "recognize",
      "zh": "认出；认可",
      "pos": "v.",
      "tag": "思考"
    },
    {
      "en": "recommend",
      "zh": "推荐；建议",
      "pos": "v.",
      "tag": "社交"
    },
    {
      "en": "reduce",
      "zh": "减少；降低",
      "pos": "v.",
      "tag": "数量"
    },
    {
      "en": "regular",
      "zh": "有规律的；定期的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "relation",
      "zh": "关系；联系",
      "pos": "n.",
      "tag": "关系"
    },
    {
      "en": "remember",
      "zh": "记得；想起",
      "pos": "v.",
      "tag": "记忆"
    },
    {
      "en": "remind",
      "zh": "提醒；使想起",
      "pos": "v.",
      "tag": "记忆"
    },
    {
      "en": "repair",
      "zh": "修理；修补",
      "pos": "v.",
      "tag": "生活"
    },
    {
      "en": "reply",
      "zh": "回答；答复",
      "pos": "v./n.",
      "tag": "社交"
    },
    {
      "en": "require",
      "zh": "要求；需要",
      "pos": "v.",
      "tag": "规则"
    },
    {
      "en": "research",
      "zh": "研究；调查",
      "pos": "n./v.",
      "tag": "学习"
    },
    {
      "en": "respect",
      "zh": "尊重；方面",
      "pos": "n./v.",
      "tag": "价值"
    },
    {
      "en": "responsible",
      "zh": "负责的；有责任的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "result",
      "zh": "结果；导致",
      "pos": "n./v.",
      "tag": "逻辑"
    },
    {
      "en": "return",
      "zh": "返回；归还",
      "pos": "v./n.",
      "tag": "动作"
    },
    {
      "en": "review",
      "zh": "复习；评论",
      "pos": "n./v.",
      "tag": "学习"
    },
    {
      "en": "science",
      "zh": "科学；学科",
      "pos": "n.",
      "tag": "学习"
    },
    {
      "en": "secret",
      "zh": "秘密；秘诀",
      "pos": "n./adj.",
      "tag": "阅读"
    },
    {
      "en": "separate",
      "zh": "分开的；分离",
      "pos": "adj./v.",
      "tag": "关系"
    },
    {
      "en": "serious",
      "zh": "严肃的；严重的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "service",
      "zh": "服务；维修",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "similar",
      "zh": "相似的；类似的",
      "pos": "adj.",
      "tag": "比较"
    },
    {
      "en": "society",
      "zh": "社会；社团",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "special",
      "zh": "特殊的；专门的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "speech",
      "zh": "演讲；说话",
      "pos": "n.",
      "tag": "表达"
    },
    {
      "en": "standard",
      "zh": "标准；标准的",
      "pos": "n./adj.",
      "tag": "规则"
    },
    {
      "en": "straight",
      "zh": "直的；直接地",
      "pos": "adj./adv.",
      "tag": "方向"
    },
    {
      "en": "stranger",
      "zh": "陌生人；外地人",
      "pos": "n.",
      "tag": "人物"
    },
    {
      "en": "success",
      "zh": "成功；成就",
      "pos": "n.",
      "tag": "目标"
    },
    {
      "en": "suggest",
      "zh": "建议；暗示",
      "pos": "v.",
      "tag": "表达"
    },
    {
      "en": "support",
      "zh": "支持；支撑",
      "pos": "n./v.",
      "tag": "关系"
    },
    {
      "en": "surprise",
      "zh": "惊讶；使惊讶",
      "pos": "n./v.",
      "tag": "情绪"
    },
    {
      "en": "technology",
      "zh": "技术；科技",
      "pos": "n.",
      "tag": "科技"
    },
    {
      "en": "terrible",
      "zh": "可怕的；很糟的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "through",
      "zh": "穿过；通过",
      "pos": "prep.",
      "tag": "方向"
    },
    {
      "en": "together",
      "zh": "一起；共同",
      "pos": "adv.",
      "tag": "关系"
    },
    {
      "en": "tradition",
      "zh": "传统；惯例",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "valuable",
      "zh": "有价值的；贵重的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "various",
      "zh": "各种各样的",
      "pos": "adj.",
      "tag": "数量"
    },
    {
      "en": "victory",
      "zh": "胜利；成功",
      "pos": "n.",
      "tag": "目标"
    },
    {
      "en": "visitor",
      "zh": "游客；来访者",
      "pos": "n.",
      "tag": "旅行"
    },
    {
      "en": "volunteer",
      "zh": "志愿者；自愿做",
      "pos": "n./v.",
      "tag": "社会"
    },
    {
      "en": "weather",
      "zh": "天气；气象",
      "pos": "n.",
      "tag": "自然"
    },
    {
      "en": "whether",
      "zh": "是否；不管",
      "pos": "conj.",
      "tag": "逻辑"
    },
    {
      "en": "wonder",
      "zh": "想知道；奇迹",
      "pos": "v./n.",
      "tag": "思考"
    },
    {
      "en": "worth",
      "zh": "值得的；价值",
      "pos": "adj./n.",
      "tag": "价值"
    }
  ],
  "商务职场": [
    {
      "en": "accounting",
      "zh": "会计；核算",
      "pos": "n.",
      "tag": "财务"
    },
    {
      "en": "agenda",
      "zh": "议程；日程",
      "pos": "n.",
      "tag": "会议"
    },
    {
      "en": "approval",
      "zh": "批准；认可",
      "pos": "n.",
      "tag": "流程"
    },
    {
      "en": "benchmark",
      "zh": "基准；标杆",
      "pos": "n.",
      "tag": "管理"
    },
    {
      "en": "briefing",
      "zh": "简报；情况介绍",
      "pos": "n.",
      "tag": "会议"
    },
    {
      "en": "budgeting",
      "zh": "预算编制",
      "pos": "n.",
      "tag": "财务"
    },
    {
      "en": "client",
      "zh": "客户；委托人",
      "pos": "n.",
      "tag": "客户"
    },
    {
      "en": "collaboration",
      "zh": "合作；协作",
      "pos": "n.",
      "tag": "团队"
    },
    {
      "en": "commission",
      "zh": "佣金；委员会",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "compliance",
      "zh": "合规；遵守",
      "pos": "n.",
      "tag": "规则"
    },
    {
      "en": "contractor",
      "zh": "承包商；合同工",
      "pos": "n.",
      "tag": "组织"
    },
    {
      "en": "coordination",
      "zh": "协调；配合",
      "pos": "n.",
      "tag": "管理"
    },
    {
      "en": "deadline",
      "zh": "截止日期",
      "pos": "n.",
      "tag": "项目"
    },
    {
      "en": "delegation",
      "zh": "授权；代表团",
      "pos": "n.",
      "tag": "管理"
    },
    {
      "en": "deliverable",
      "zh": "交付成果",
      "pos": "n.",
      "tag": "项目"
    },
    {
      "en": "depreciation",
      "zh": "折旧；贬值",
      "pos": "n.",
      "tag": "财务"
    },
    {
      "en": "distribution",
      "zh": "分发；分销",
      "pos": "n.",
      "tag": "运营"
    },
    {
      "en": "documentation",
      "zh": "文件资料；文档",
      "pos": "n.",
      "tag": "流程"
    },
    {
      "en": "efficiency",
      "zh": "效率；效能",
      "pos": "n.",
      "tag": "管理"
    },
    {
      "en": "enterprise",
      "zh": "企业；事业",
      "pos": "n.",
      "tag": "组织"
    },
    {
      "en": "feedback",
      "zh": "反馈；意见",
      "pos": "n.",
      "tag": "沟通"
    },
    {
      "en": "forecast",
      "zh": "预测；预报",
      "pos": "n./v.",
      "tag": "计划"
    },
    {
      "en": "headquarters",
      "zh": "总部；司令部",
      "pos": "n.",
      "tag": "组织"
    },
    {
      "en": "incentive",
      "zh": "激励；奖励",
      "pos": "n.",
      "tag": "人事"
    },
    {
      "en": "inventory",
      "zh": "库存；清单",
      "pos": "n.",
      "tag": "运营"
    },
    {
      "en": "invoice",
      "zh": "发票；账单",
      "pos": "n.",
      "tag": "财务"
    },
    {
      "en": "logistics",
      "zh": "物流；后勤",
      "pos": "n.",
      "tag": "运营"
    },
    {
      "en": "margin",
      "zh": "利润率；边缘",
      "pos": "n.",
      "tag": "财务"
    },
    {
      "en": "negotiation",
      "zh": "谈判；协商",
      "pos": "n.",
      "tag": "沟通"
    },
    {
      "en": "objective",
      "zh": "目标；客观的",
      "pos": "n./adj.",
      "tag": "管理"
    },
    {
      "en": "outsourcing",
      "zh": "外包",
      "pos": "n.",
      "tag": "运营"
    },
    {
      "en": "partnership",
      "zh": "合作关系；合伙",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "performance",
      "zh": "绩效；表现",
      "pos": "n.",
      "tag": "人事"
    },
    {
      "en": "portfolio",
      "zh": "作品集；投资组合",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "procurement",
      "zh": "采购；获取",
      "pos": "n.",
      "tag": "运营"
    },
    {
      "en": "proposal",
      "zh": "提案；建议",
      "pos": "n.",
      "tag": "沟通"
    },
    {
      "en": "recruitment",
      "zh": "招聘；招募",
      "pos": "n.",
      "tag": "人事"
    },
    {
      "en": "reimbursement",
      "zh": "报销；偿还",
      "pos": "n.",
      "tag": "财务"
    },
    {
      "en": "revenue",
      "zh": "收入；收益",
      "pos": "n.",
      "tag": "财务"
    },
    {
      "en": "stakeholder",
      "zh": "利益相关者",
      "pos": "n.",
      "tag": "管理"
    },
    {
      "en": "strategy",
      "zh": "战略；策略",
      "pos": "n.",
      "tag": "管理"
    },
    {
      "en": "supervisor",
      "zh": "主管；监督人",
      "pos": "n.",
      "tag": "人事"
    },
    {
      "en": "transaction",
      "zh": "交易；事务",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "turnover",
      "zh": "营业额；人员流动",
      "pos": "n.",
      "tag": "财务"
    },
    {
      "en": "vendor",
      "zh": "供应商；卖方",
      "pos": "n.",
      "tag": "商业"
    },
    {
      "en": "workflow",
      "zh": "工作流程",
      "pos": "n.",
      "tag": "流程"
    }
  ],
  "科技互联网": [
    {
      "en": "algorithm",
      "zh": "算法；运算法则",
      "pos": "n.",
      "tag": "AI"
    },
    {
      "en": "analytics",
      "zh": "数据分析",
      "pos": "n.",
      "tag": "数据"
    },
    {
      "en": "application",
      "zh": "应用；申请",
      "pos": "n.",
      "tag": "软件"
    },
    {
      "en": "automation",
      "zh": "自动化",
      "pos": "n.",
      "tag": "AI"
    },
    {
      "en": "bandwidth",
      "zh": "带宽；容量",
      "pos": "n.",
      "tag": "网络"
    },
    {
      "en": "browser",
      "zh": "浏览器",
      "pos": "n.",
      "tag": "软件"
    },
    {
      "en": "cache",
      "zh": "缓存；隐藏处",
      "pos": "n./v.",
      "tag": "系统"
    },
    {
      "en": "checksum",
      "zh": "校验和",
      "pos": "n.",
      "tag": "系统"
    },
    {
      "en": "cloud",
      "zh": "云；云计算",
      "pos": "n.",
      "tag": "网络"
    },
    {
      "en": "compiler",
      "zh": "编译器",
      "pos": "n.",
      "tag": "编程"
    },
    {
      "en": "component",
      "zh": "组件；组成部分",
      "pos": "n.",
      "tag": "软件"
    },
    {
      "en": "configuration",
      "zh": "配置；设置",
      "pos": "n.",
      "tag": "系统"
    },
    {
      "en": "dashboard",
      "zh": "仪表盘；控制面板",
      "pos": "n.",
      "tag": "产品"
    },
    {
      "en": "database",
      "zh": "数据库",
      "pos": "n.",
      "tag": "数据"
    },
    {
      "en": "debug",
      "zh": "调试；排错",
      "pos": "v.",
      "tag": "编程"
    },
    {
      "en": "deployment",
      "zh": "部署；展开",
      "pos": "n.",
      "tag": "系统"
    },
    {
      "en": "domain",
      "zh": "域名；领域",
      "pos": "n.",
      "tag": "网络"
    },
    {
      "en": "encryption",
      "zh": "加密",
      "pos": "n.",
      "tag": "安全"
    },
    {
      "en": "endpoint",
      "zh": "端点；接口",
      "pos": "n.",
      "tag": "网络"
    },
    {
      "en": "framework",
      "zh": "框架；结构",
      "pos": "n.",
      "tag": "编程"
    },
    {
      "en": "function",
      "zh": "函数；功能",
      "pos": "n.",
      "tag": "编程"
    },
    {
      "en": "hardware",
      "zh": "硬件",
      "pos": "n.",
      "tag": "设备"
    },
    {
      "en": "interface",
      "zh": "界面；接口",
      "pos": "n.",
      "tag": "产品"
    },
    {
      "en": "latency",
      "zh": "延迟；潜伏期",
      "pos": "n.",
      "tag": "网络"
    },
    {
      "en": "malware",
      "zh": "恶意软件",
      "pos": "n.",
      "tag": "安全"
    },
    {
      "en": "metadata",
      "zh": "元数据",
      "pos": "n.",
      "tag": "数据"
    },
    {
      "en": "module",
      "zh": "模块；单元",
      "pos": "n.",
      "tag": "编程"
    },
    {
      "en": "network",
      "zh": "网络；联网",
      "pos": "n./v.",
      "tag": "网络"
    },
    {
      "en": "password",
      "zh": "密码；口令",
      "pos": "n.",
      "tag": "安全"
    },
    {
      "en": "platform",
      "zh": "平台；站台",
      "pos": "n.",
      "tag": "产品"
    },
    {
      "en": "plugin",
      "zh": "插件；扩展",
      "pos": "n.",
      "tag": "软件"
    },
    {
      "en": "privacy",
      "zh": "隐私；私密",
      "pos": "n.",
      "tag": "安全"
    },
    {
      "en": "processor",
      "zh": "处理器；加工者",
      "pos": "n.",
      "tag": "硬件"
    },
    {
      "en": "protocol",
      "zh": "协议；礼仪",
      "pos": "n.",
      "tag": "网络"
    },
    {
      "en": "repository",
      "zh": "仓库；代码库",
      "pos": "n.",
      "tag": "编程"
    },
    {
      "en": "resolution",
      "zh": "分辨率；解决",
      "pos": "n.",
      "tag": "图像"
    },
    {
      "en": "runtime",
      "zh": "运行时；运行时间",
      "pos": "n.",
      "tag": "系统"
    },
    {
      "en": "scalability",
      "zh": "可扩展性",
      "pos": "n.",
      "tag": "架构"
    },
    {
      "en": "script",
      "zh": "脚本；剧本",
      "pos": "n.",
      "tag": "编程"
    },
    {
      "en": "server",
      "zh": "服务器；服务端",
      "pos": "n.",
      "tag": "网络"
    },
    {
      "en": "software",
      "zh": "软件",
      "pos": "n.",
      "tag": "软件"
    },
    {
      "en": "synchronization",
      "zh": "同步；同时发生",
      "pos": "n.",
      "tag": "系统"
    },
    {
      "en": "template",
      "zh": "模板；样板",
      "pos": "n.",
      "tag": "产品"
    },
    {
      "en": "token",
      "zh": "令牌；标志",
      "pos": "n.",
      "tag": "安全"
    },
    {
      "en": "upload",
      "zh": "上传；上传内容",
      "pos": "v./n.",
      "tag": "网络"
    },
    {
      "en": "virtual",
      "zh": "虚拟的；事实上的",
      "pos": "adj.",
      "tag": "系统"
    },
    {
      "en": "wireless",
      "zh": "无线的",
      "pos": "adj.",
      "tag": "网络"
    }
  ],
  "自然环境": [
    {
      "en": "acid",
      "zh": "酸；酸性的",
      "pos": "n./adj.",
      "tag": "科学"
    },
    {
      "en": "aquatic",
      "zh": "水生的；水中的",
      "pos": "adj.",
      "tag": "生态"
    },
    {
      "en": "atmospheric",
      "zh": "大气的；气氛的",
      "pos": "adj.",
      "tag": "气候"
    },
    {
      "en": "biomass",
      "zh": "生物量；生物质",
      "pos": "n.",
      "tag": "生态"
    },
    {
      "en": "canopy",
      "zh": "树冠；天篷",
      "pos": "n.",
      "tag": "森林"
    },
    {
      "en": "coastline",
      "zh": "海岸线",
      "pos": "n.",
      "tag": "地理"
    },
    {
      "en": "compost",
      "zh": "堆肥；制堆肥",
      "pos": "n./v.",
      "tag": "环保"
    },
    {
      "en": "conservation",
      "zh": "保护；保存",
      "pos": "n.",
      "tag": "环保"
    },
    {
      "en": "creek",
      "zh": "小溪；溪流",
      "pos": "n.",
      "tag": "水文"
    },
    {
      "en": "drought",
      "zh": "干旱；旱灾",
      "pos": "n.",
      "tag": "气候"
    },
    {
      "en": "earthquake",
      "zh": "地震",
      "pos": "n.",
      "tag": "灾害"
    },
    {
      "en": "ecology",
      "zh": "生态学",
      "pos": "n.",
      "tag": "生态"
    },
    {
      "en": "emission",
      "zh": "排放；散发",
      "pos": "n.",
      "tag": "气候"
    },
    {
      "en": "erosion",
      "zh": "侵蚀；腐蚀",
      "pos": "n.",
      "tag": "地理"
    },
    {
      "en": "estuary",
      "zh": "河口；入海口",
      "pos": "n.",
      "tag": "水文"
    },
    {
      "en": "evaporation",
      "zh": "蒸发；消散",
      "pos": "n.",
      "tag": "气候"
    },
    {
      "en": "fertile",
      "zh": "肥沃的；富饶的",
      "pos": "adj.",
      "tag": "土地"
    },
    {
      "en": "flood",
      "zh": "洪水；淹没",
      "pos": "n./v.",
      "tag": "灾害"
    },
    {
      "en": "geothermal",
      "zh": "地热的",
      "pos": "adj.",
      "tag": "能源"
    },
    {
      "en": "glacier",
      "zh": "冰川",
      "pos": "n.",
      "tag": "地理"
    },
    {
      "en": "habitat",
      "zh": "栖息地；居住地",
      "pos": "n.",
      "tag": "生态"
    },
    {
      "en": "hurricane",
      "zh": "飓风",
      "pos": "n.",
      "tag": "气象"
    },
    {
      "en": "landfill",
      "zh": "垃圾填埋场",
      "pos": "n.",
      "tag": "环保"
    },
    {
      "en": "meadow",
      "zh": "草地；牧场",
      "pos": "n.",
      "tag": "地貌"
    },
    {
      "en": "monsoon",
      "zh": "季风；雨季",
      "pos": "n.",
      "tag": "气候"
    },
    {
      "en": "organic",
      "zh": "有机的；自然的",
      "pos": "adj.",
      "tag": "环保"
    },
    {
      "en": "ozone",
      "zh": "臭氧；臭氧层",
      "pos": "n.",
      "tag": "气候"
    },
    {
      "en": "pollution",
      "zh": "污染；污染物",
      "pos": "n.",
      "tag": "环保"
    },
    {
      "en": "rainforest",
      "zh": "雨林；热带雨林",
      "pos": "n.",
      "tag": "森林"
    },
    {
      "en": "renewable",
      "zh": "可再生的",
      "pos": "adj.",
      "tag": "能源"
    },
    {
      "en": "reservoir",
      "zh": "水库；储备",
      "pos": "n.",
      "tag": "水文"
    },
    {
      "en": "savanna",
      "zh": "稀树草原",
      "pos": "n.",
      "tag": "地貌"
    },
    {
      "en": "sewage",
      "zh": "污水；下水道污物",
      "pos": "n.",
      "tag": "环保"
    },
    {
      "en": "sustainable",
      "zh": "可持续的",
      "pos": "adj.",
      "tag": "环保"
    },
    {
      "en": "temperature",
      "zh": "温度；体温",
      "pos": "n.",
      "tag": "气候"
    },
    {
      "en": "thunderstorm",
      "zh": "雷暴；雷雨",
      "pos": "n.",
      "tag": "气象"
    },
    {
      "en": "tide",
      "zh": "潮汐；趋势",
      "pos": "n.",
      "tag": "水文"
    },
    {
      "en": "tornado",
      "zh": "龙卷风",
      "pos": "n.",
      "tag": "气象"
    },
    {
      "en": "volcano",
      "zh": "火山",
      "pos": "n.",
      "tag": "地理"
    },
    {
      "en": "watershed",
      "zh": "流域；分水岭",
      "pos": "n.",
      "tag": "水文"
    }
  ],
  "旅行生活": [
    {
      "en": "accommodation",
      "zh": "住宿；住处",
      "pos": "n.",
      "tag": "住宿"
    },
    {
      "en": "backpack",
      "zh": "背包；背包旅行",
      "pos": "n./v.",
      "tag": "行李"
    },
    {
      "en": "boarding",
      "zh": "登机；寄宿",
      "pos": "n.",
      "tag": "交通"
    },
    {
      "en": "cafeteria",
      "zh": "自助餐厅；食堂",
      "pos": "n.",
      "tag": "餐饮"
    },
    {
      "en": "check-in",
      "zh": "登记入住；办理登机",
      "pos": "n./v.",
      "tag": "旅行"
    },
    {
      "en": "commute",
      "zh": "通勤；通勤路程",
      "pos": "v./n.",
      "tag": "交通"
    },
    {
      "en": "compartment",
      "zh": "隔间；车厢",
      "pos": "n.",
      "tag": "交通"
    },
    {
      "en": "currency",
      "zh": "货币；通用",
      "pos": "n.",
      "tag": "支付"
    },
    {
      "en": "departure",
      "zh": "离开；出发",
      "pos": "n.",
      "tag": "交通"
    },
    {
      "en": "destination",
      "zh": "目的地；终点",
      "pos": "n.",
      "tag": "旅行"
    },
    {
      "en": "downtown",
      "zh": "市中心；在市中心",
      "pos": "n./adv.",
      "tag": "城市"
    },
    {
      "en": "fare",
      "zh": "票价；费用",
      "pos": "n.",
      "tag": "交通"
    },
    {
      "en": "ferry",
      "zh": "渡船；运送",
      "pos": "n./v.",
      "tag": "交通"
    },
    {
      "en": "hostel",
      "zh": "青年旅舍",
      "pos": "n.",
      "tag": "住宿"
    },
    {
      "en": "itinerary",
      "zh": "行程；旅行计划",
      "pos": "n.",
      "tag": "计划"
    },
    {
      "en": "landmark",
      "zh": "地标；里程碑",
      "pos": "n.",
      "tag": "城市"
    },
    {
      "en": "luggage",
      "zh": "行李",
      "pos": "n.",
      "tag": "行李"
    },
    {
      "en": "passport",
      "zh": "护照",
      "pos": "n.",
      "tag": "证件"
    },
    {
      "en": "platform",
      "zh": "站台；平台",
      "pos": "n.",
      "tag": "交通"
    },
    {
      "en": "reservation",
      "zh": "预订；保留",
      "pos": "n.",
      "tag": "住宿"
    },
    {
      "en": "souvenir",
      "zh": "纪念品",
      "pos": "n.",
      "tag": "购物"
    },
    {
      "en": "subway",
      "zh": "地铁；地下通道",
      "pos": "n.",
      "tag": "交通"
    },
    {
      "en": "terminal",
      "zh": "航站楼；终点站",
      "pos": "n.",
      "tag": "交通"
    },
    {
      "en": "ticket",
      "zh": "票；罚单",
      "pos": "n.",
      "tag": "交通"
    },
    {
      "en": "tourist",
      "zh": "游客；观光者",
      "pos": "n.",
      "tag": "旅行"
    },
    {
      "en": "transfer",
      "zh": "转乘；转移",
      "pos": "v./n.",
      "tag": "交通"
    },
    {
      "en": "visa",
      "zh": "签证",
      "pos": "n.",
      "tag": "证件"
    }
  ],
  "学术写作": [
    {
      "en": "abstract",
      "zh": "摘要；抽象的",
      "pos": "n./adj.",
      "tag": "论文"
    },
    {
      "en": "accuracy",
      "zh": "准确性；精确度",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "argumentation",
      "zh": "论证；争辩",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "bibliography",
      "zh": "参考书目；文献目录",
      "pos": "n.",
      "tag": "论文"
    },
    {
      "en": "citation",
      "zh": "引用；引文",
      "pos": "n.",
      "tag": "论文"
    },
    {
      "en": "coherence",
      "zh": "连贯性；一致性",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "conclusion",
      "zh": "结论；结束",
      "pos": "n.",
      "tag": "论文"
    },
    {
      "en": "counterargument",
      "zh": "反论点；反驳理由",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "credibility",
      "zh": "可信度；可靠性",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "definition",
      "zh": "定义；释义",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "demonstration",
      "zh": "证明；演示",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "distribution",
      "zh": "分布；分配",
      "pos": "n.",
      "tag": "图表"
    },
    {
      "en": "draft",
      "zh": "草稿；起草",
      "pos": "n./v.",
      "tag": "写作"
    },
    {
      "en": "hypothesis",
      "zh": "假设；假说",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "implication",
      "zh": "含义；影响",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "methodology",
      "zh": "方法论；研究方法",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "paragraph",
      "zh": "段落",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "paraphrase",
      "zh": "改述；释义",
      "pos": "v./n.",
      "tag": "写作"
    },
    {
      "en": "reference",
      "zh": "参考；提及",
      "pos": "n./v.",
      "tag": "论文"
    },
    {
      "en": "revision",
      "zh": "修改；复习",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "thesis",
      "zh": "论文；论点",
      "pos": "n.",
      "tag": "论文"
    },
    {
      "en": "variable",
      "zh": "变量；可变的",
      "pos": "n./adj.",
      "tag": "研究"
    }
  ],
  "情绪性格": [
    {
      "en": "adaptable",
      "zh": "适应力强的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "ambitious",
      "zh": "有抱负的；雄心勃勃的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "anxiety",
      "zh": "焦虑；担忧",
      "pos": "n.",
      "tag": "情绪"
    },
    {
      "en": "ashamed",
      "zh": "羞愧的；惭愧的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "attentive",
      "zh": "专心的；体贴的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "bold",
      "zh": "大胆的；醒目的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "calmness",
      "zh": "平静；镇定",
      "pos": "n.",
      "tag": "情绪"
    },
    {
      "en": "confident",
      "zh": "自信的；确信的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "considerate",
      "zh": "体贴的；考虑周到的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "curiosity",
      "zh": "好奇心",
      "pos": "n.",
      "tag": "心理"
    },
    {
      "en": "determined",
      "zh": "坚定的；下定决心的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "diligent",
      "zh": "勤奋的；用功的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "empathetic",
      "zh": "有同理心的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "frustration",
      "zh": "挫败感；沮丧",
      "pos": "n.",
      "tag": "情绪"
    },
    {
      "en": "generosity",
      "zh": "慷慨；大方",
      "pos": "n.",
      "tag": "性格"
    },
    {
      "en": "grateful",
      "zh": "感激的；感谢的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "hesitant",
      "zh": "犹豫的；迟疑的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "impulsive",
      "zh": "冲动的；一时兴起的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "jealous",
      "zh": "嫉妒的；羡慕的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "optimistic",
      "zh": "乐观的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "patient",
      "zh": "耐心的；病人",
      "pos": "adj./n.",
      "tag": "性格"
    },
    {
      "en": "pessimistic",
      "zh": "悲观的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "reliable",
      "zh": "可靠的；可信赖的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "sensitive",
      "zh": "敏感的；体贴的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "sincere",
      "zh": "真诚的；诚挚的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "stubborn",
      "zh": "固执的；顽固的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "thoughtful",
      "zh": "体贴的；深思的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "uneasy",
      "zh": "不安的；担心的",
      "pos": "adj.",
      "tag": "情绪"
    }
  ],
  "医疗健康": [
    {
      "en": "allergy",
      "zh": "过敏；过敏反应",
      "pos": "n.",
      "tag": "症状"
    },
    {
      "en": "antibiotic",
      "zh": "抗生素；抗菌的",
      "pos": "n./adj.",
      "tag": "药物"
    },
    {
      "en": "appointment",
      "zh": "预约；约会",
      "pos": "n.",
      "tag": "就医"
    },
    {
      "en": "bloodstream",
      "zh": "血流；血液循环",
      "pos": "n.",
      "tag": "身体"
    },
    {
      "en": "clinic",
      "zh": "诊所；门诊",
      "pos": "n.",
      "tag": "就医"
    },
    {
      "en": "diagnosis",
      "zh": "诊断；判断",
      "pos": "n.",
      "tag": "就医"
    },
    {
      "en": "diet",
      "zh": "饮食；节食",
      "pos": "n./v.",
      "tag": "健康"
    },
    {
      "en": "dosage",
      "zh": "剂量；用量",
      "pos": "n.",
      "tag": "药物"
    },
    {
      "en": "emergency",
      "zh": "紧急情况；急诊",
      "pos": "n.",
      "tag": "就医"
    },
    {
      "en": "fatigue",
      "zh": "疲劳；乏力",
      "pos": "n.",
      "tag": "症状"
    },
    {
      "en": "fever",
      "zh": "发烧；发热",
      "pos": "n.",
      "tag": "症状"
    },
    {
      "en": "fracture",
      "zh": "骨折；裂缝",
      "pos": "n./v.",
      "tag": "伤病"
    },
    {
      "en": "hygiene",
      "zh": "卫生；卫生习惯",
      "pos": "n.",
      "tag": "预防"
    },
    {
      "en": "immunity",
      "zh": "免疫力；免除",
      "pos": "n.",
      "tag": "预防"
    },
    {
      "en": "infection",
      "zh": "感染；传染",
      "pos": "n.",
      "tag": "疾病"
    },
    {
      "en": "inflammation",
      "zh": "炎症；发炎",
      "pos": "n.",
      "tag": "疾病"
    },
    {
      "en": "nutrition",
      "zh": "营养；营养学",
      "pos": "n.",
      "tag": "健康"
    },
    {
      "en": "operation",
      "zh": "手术；操作",
      "pos": "n.",
      "tag": "就医"
    },
    {
      "en": "prescription",
      "zh": "处方；开药",
      "pos": "n.",
      "tag": "药物"
    },
    {
      "en": "recovery",
      "zh": "恢复；康复",
      "pos": "n.",
      "tag": "健康"
    },
    {
      "en": "surgery",
      "zh": "外科手术；外科学",
      "pos": "n.",
      "tag": "就医"
    },
    {
      "en": "symptom",
      "zh": "症状；征兆",
      "pos": "n.",
      "tag": "疾病"
    },
    {
      "en": "therapy",
      "zh": "治疗；疗法",
      "pos": "n.",
      "tag": "治疗"
    },
    {
      "en": "vaccine",
      "zh": "疫苗",
      "pos": "n.",
      "tag": "预防"
    },
    {
      "en": "vitamin",
      "zh": "维生素",
      "pos": "n.",
      "tag": "营养"
    }
  ],
  "新闻社会": [
    {
      "en": "administration",
      "zh": "政府；行政管理",
      "pos": "n.",
      "tag": "政治"
    },
    {
      "en": "authority",
      "zh": "权力；当局",
      "pos": "n.",
      "tag": "公共"
    },
    {
      "en": "broadcast",
      "zh": "广播；播送",
      "pos": "n./v.",
      "tag": "媒体"
    },
    {
      "en": "campaign",
      "zh": "运动；竞选",
      "pos": "n.",
      "tag": "政治"
    },
    {
      "en": "censorship",
      "zh": "审查；检查制度",
      "pos": "n.",
      "tag": "媒体"
    },
    {
      "en": "citizenship",
      "zh": "公民身份；公民权",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "coalition",
      "zh": "联盟；联合政府",
      "pos": "n.",
      "tag": "政治"
    },
    {
      "en": "constitution",
      "zh": "宪法；构成",
      "pos": "n.",
      "tag": "法律"
    },
    {
      "en": "crisis",
      "zh": "危机；紧要关头",
      "pos": "n.",
      "tag": "公共"
    },
    {
      "en": "debate",
      "zh": "辩论；讨论",
      "pos": "n./v.",
      "tag": "公共"
    },
    {
      "en": "diplomacy",
      "zh": "外交；外交手腕",
      "pos": "n.",
      "tag": "国际"
    },
    {
      "en": "election",
      "zh": "选举；当选",
      "pos": "n.",
      "tag": "政治"
    },
    {
      "en": "equality",
      "zh": "平等；相等",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "headline",
      "zh": "标题；新闻头条",
      "pos": "n.",
      "tag": "媒体"
    },
    {
      "en": "immigration",
      "zh": "移民；移居",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "investigation",
      "zh": "调查；侦查",
      "pos": "n.",
      "tag": "公共"
    },
    {
      "en": "justice",
      "zh": "正义；司法",
      "pos": "n.",
      "tag": "法律"
    },
    {
      "en": "legislation",
      "zh": "立法；法规",
      "pos": "n.",
      "tag": "法律"
    },
    {
      "en": "minority",
      "zh": "少数；少数群体",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "negotiation",
      "zh": "谈判；协商",
      "pos": "n.",
      "tag": "国际"
    },
    {
      "en": "parliament",
      "zh": "议会；国会",
      "pos": "n.",
      "tag": "政治"
    },
    {
      "en": "policy",
      "zh": "政策；方针",
      "pos": "n.",
      "tag": "公共"
    },
    {
      "en": "protest",
      "zh": "抗议；反对",
      "pos": "n./v.",
      "tag": "公共"
    },
    {
      "en": "refugee",
      "zh": "难民；避难者",
      "pos": "n.",
      "tag": "国际"
    },
    {
      "en": "regulation",
      "zh": "规定；监管",
      "pos": "n.",
      "tag": "法律"
    },
    {
      "en": "rights",
      "zh": "权利；权益",
      "pos": "n.",
      "tag": "法律"
    },
    {
      "en": "sanction",
      "zh": "制裁；批准",
      "pos": "n./v.",
      "tag": "国际"
    },
    {
      "en": "transparency",
      "zh": "透明度；透明性",
      "pos": "n.",
      "tag": "公共"
    }
  ],
  "艺术文化": [
    {
      "en": "acoustic",
      "zh": "原声的；声学的",
      "pos": "adj.",
      "tag": "音乐"
    },
    {
      "en": "adaptation",
      "zh": "改编；适应",
      "pos": "n.",
      "tag": "影视"
    },
    {
      "en": "aesthetic",
      "zh": "审美的；美学的",
      "pos": "adj.",
      "tag": "艺术"
    },
    {
      "en": "animation",
      "zh": "动画；动画片",
      "pos": "n.",
      "tag": "影视"
    },
    {
      "en": "architecture",
      "zh": "建筑；建筑学",
      "pos": "n.",
      "tag": "艺术"
    },
    {
      "en": "calligraphy",
      "zh": "书法；笔迹",
      "pos": "n.",
      "tag": "传统"
    },
    {
      "en": "choreography",
      "zh": "编舞；舞蹈设计",
      "pos": "n.",
      "tag": "舞蹈"
    },
    {
      "en": "cinema",
      "zh": "电影；电影院",
      "pos": "n.",
      "tag": "影视"
    },
    {
      "en": "composition",
      "zh": "作品；构图；作文",
      "pos": "n.",
      "tag": "艺术"
    },
    {
      "en": "curator",
      "zh": "策展人；馆长",
      "pos": "n.",
      "tag": "展览"
    },
    {
      "en": "dialogue",
      "zh": "对话；对白",
      "pos": "n.",
      "tag": "影视"
    },
    {
      "en": "exhibition",
      "zh": "展览；展出",
      "pos": "n.",
      "tag": "展览"
    },
    {
      "en": "folklore",
      "zh": "民间传说；民俗",
      "pos": "n.",
      "tag": "传统"
    },
    {
      "en": "gallery",
      "zh": "画廊；展馆",
      "pos": "n.",
      "tag": "展览"
    },
    {
      "en": "heritage",
      "zh": "遗产；传统",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "instrumental",
      "zh": "器乐的；有帮助的",
      "pos": "adj.",
      "tag": "音乐"
    },
    {
      "en": "literature",
      "zh": "文学；文献",
      "pos": "n.",
      "tag": "文学"
    },
    {
      "en": "masterpiece",
      "zh": "杰作；代表作",
      "pos": "n.",
      "tag": "艺术"
    },
    {
      "en": "melody",
      "zh": "旋律；曲调",
      "pos": "n.",
      "tag": "音乐"
    },
    {
      "en": "mythology",
      "zh": "神话；神话学",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "narrative",
      "zh": "叙事；故事",
      "pos": "n./adj.",
      "tag": "文学"
    },
    {
      "en": "orchestra",
      "zh": "管弦乐队",
      "pos": "n.",
      "tag": "音乐"
    },
    {
      "en": "portrait",
      "zh": "肖像；描绘",
      "pos": "n.",
      "tag": "艺术"
    },
    {
      "en": "sculpture",
      "zh": "雕塑；雕刻",
      "pos": "n.",
      "tag": "艺术"
    },
    {
      "en": "tradition",
      "zh": "传统；惯例",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "verse",
      "zh": "诗句；韵文",
      "pos": "n.",
      "tag": "文学"
    }
  ],
  "词根进阶": [
    {
      "en": "accumulate",
      "zh": "积累；堆积",
      "pos": "v.",
      "tag": "cum堆积"
    },
    {
      "en": "autobiography",
      "zh": "自传",
      "pos": "n.",
      "tag": "auto自己"
    },
    {
      "en": "biology",
      "zh": "生物学",
      "pos": "n.",
      "tag": "bio生命"
    },
    {
      "en": "chronological",
      "zh": "按时间顺序的",
      "pos": "adj.",
      "tag": "chron时间"
    },
    {
      "en": "contradict",
      "zh": "反驳；相矛盾",
      "pos": "v.",
      "tag": "dict说"
    },
    {
      "en": "dictionary",
      "zh": "词典；字典",
      "pos": "n.",
      "tag": "dict说"
    },
    {
      "en": "democracy",
      "zh": "民主；民主制度",
      "pos": "n.",
      "tag": "demo人民"
    },
    {
      "en": "geography",
      "zh": "地理；地理学",
      "pos": "n.",
      "tag": "geo地"
    },
    {
      "en": "hydrogen",
      "zh": "氢；氢气",
      "pos": "n.",
      "tag": "hydro水"
    },
    {
      "en": "international",
      "zh": "国际的",
      "pos": "adj.",
      "tag": "inter之间"
    },
    {
      "en": "microscope",
      "zh": "显微镜",
      "pos": "n.",
      "tag": "micro小"
    },
    {
      "en": "portable",
      "zh": "便携的；可携带的",
      "pos": "adj.",
      "tag": "port带"
    },
    {
      "en": "predict",
      "zh": "预测；预言",
      "pos": "v.",
      "tag": "dict说"
    },
    {
      "en": "recover",
      "zh": "恢复；重新获得",
      "pos": "v.",
      "tag": "re再"
    },
    {
      "en": "submarine",
      "zh": "潜艇；海底的",
      "pos": "n./adj.",
      "tag": "sub下"
    },
    {
      "en": "telephone",
      "zh": "电话",
      "pos": "n.",
      "tag": "tele远"
    },
    {
      "en": "transport",
      "zh": "运输；运送",
      "pos": "v./n.",
      "tag": "port带"
    },
    {
      "en": "uncover",
      "zh": "揭开；发现",
      "pos": "v.",
      "tag": "un反"
    },
    {
      "en": "visible",
      "zh": "可见的；明显的",
      "pos": "adj.",
      "tag": "vis看"
    }
  ],
  "中考基础": [
    {
      "en": "aunt",
      "zh": "姑母；姨母",
      "pos": "n.",
      "tag": "家庭"
    },
    {
      "en": "beach",
      "zh": "海滩；沙滩",
      "pos": "n.",
      "tag": "自然"
    },
    {
      "en": "bedroom",
      "zh": "卧室",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "bicycle",
      "zh": "自行车",
      "pos": "n.",
      "tag": "交通"
    },
    {
      "en": "birthday",
      "zh": "生日",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "bookstore",
      "zh": "书店",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "breakfast",
      "zh": "早餐",
      "pos": "n.",
      "tag": "食物"
    },
    {
      "en": "bridge",
      "zh": "桥；连接",
      "pos": "n./v.",
      "tag": "交通"
    },
    {
      "en": "brother",
      "zh": "兄弟；哥哥；弟弟",
      "pos": "n.",
      "tag": "家庭"
    },
    {
      "en": "camera",
      "zh": "照相机",
      "pos": "n.",
      "tag": "物品"
    },
    {
      "en": "classroom",
      "zh": "教室",
      "pos": "n.",
      "tag": "校园"
    },
    {
      "en": "cloudy",
      "zh": "多云的",
      "pos": "adj.",
      "tag": "天气"
    },
    {
      "en": "cousin",
      "zh": "堂兄弟；表亲",
      "pos": "n.",
      "tag": "家庭"
    },
    {
      "en": "daughter",
      "zh": "女儿",
      "pos": "n.",
      "tag": "家庭"
    },
    {
      "en": "delicious",
      "zh": "美味的",
      "pos": "adj.",
      "tag": "食物"
    },
    {
      "en": "dining",
      "zh": "用餐；餐厅的",
      "pos": "n./adj.",
      "tag": "食物"
    },
    {
      "en": "driver",
      "zh": "司机；驾驶员",
      "pos": "n.",
      "tag": "交通"
    },
    {
      "en": "elephant",
      "zh": "大象",
      "pos": "n.",
      "tag": "动物"
    },
    {
      "en": "exercise",
      "zh": "锻炼；练习",
      "pos": "n./v.",
      "tag": "健康"
    },
    {
      "en": "farmer",
      "zh": "农民；农场主",
      "pos": "n.",
      "tag": "职业"
    },
    {
      "en": "favorite",
      "zh": "最喜欢的",
      "pos": "adj./n.",
      "tag": "喜好"
    },
    {
      "en": "festival",
      "zh": "节日",
      "pos": "n.",
      "tag": "文化"
    },
    {
      "en": "football",
      "zh": "足球",
      "pos": "n.",
      "tag": "运动"
    },
    {
      "en": "grandparent",
      "zh": "祖父母；外祖父母",
      "pos": "n.",
      "tag": "家庭"
    },
    {
      "en": "hamburger",
      "zh": "汉堡包",
      "pos": "n.",
      "tag": "食物"
    },
    {
      "en": "homework",
      "zh": "家庭作业",
      "pos": "n.",
      "tag": "校园"
    },
    {
      "en": "hospital",
      "zh": "医院",
      "pos": "n.",
      "tag": "地点"
    },
    {
      "en": "kitchen",
      "zh": "厨房",
      "pos": "n.",
      "tag": "生活"
    },
    {
      "en": "library",
      "zh": "图书馆",
      "pos": "n.",
      "tag": "地点"
    },
    {
      "en": "mountain",
      "zh": "山；高山",
      "pos": "n.",
      "tag": "自然"
    },
    {
      "en": "newspaper",
      "zh": "报纸",
      "pos": "n.",
      "tag": "媒体"
    },
    {
      "en": "noodle",
      "zh": "面条",
      "pos": "n.",
      "tag": "食物"
    },
    {
      "en": "picture",
      "zh": "图片；照片",
      "pos": "n.",
      "tag": "物品"
    },
    {
      "en": "playground",
      "zh": "操场；游乐场",
      "pos": "n.",
      "tag": "校园"
    },
    {
      "en": "policeman",
      "zh": "警察",
      "pos": "n.",
      "tag": "职业"
    },
    {
      "en": "restaurant",
      "zh": "餐馆；饭店",
      "pos": "n.",
      "tag": "地点"
    },
    {
      "en": "Saturday",
      "zh": "星期六",
      "pos": "n.",
      "tag": "时间"
    },
    {
      "en": "science",
      "zh": "科学",
      "pos": "n.",
      "tag": "校园"
    },
    {
      "en": "shoulder",
      "zh": "肩膀",
      "pos": "n.",
      "tag": "身体"
    },
    {
      "en": "station",
      "zh": "车站；电台",
      "pos": "n.",
      "tag": "地点"
    },
    {
      "en": "strawberry",
      "zh": "草莓",
      "pos": "n.",
      "tag": "食物"
    },
    {
      "en": "supermarket",
      "zh": "超市",
      "pos": "n.",
      "tag": "地点"
    },
    {
      "en": "teacher",
      "zh": "教师；老师",
      "pos": "n.",
      "tag": "职业"
    },
    {
      "en": "Thursday",
      "zh": "星期四",
      "pos": "n.",
      "tag": "时间"
    },
    {
      "en": "tomorrow",
      "zh": "明天；未来",
      "pos": "n./adv.",
      "tag": "时间"
    },
    {
      "en": "umbrella",
      "zh": "雨伞",
      "pos": "n.",
      "tag": "物品"
    },
    {
      "en": "vegetable",
      "zh": "蔬菜",
      "pos": "n.",
      "tag": "食物"
    },
    {
      "en": "weekend",
      "zh": "周末",
      "pos": "n.",
      "tag": "时间"
    }
  ],
  "考研核心": [
    {
      "en": "abstract",
      "zh": "抽象的；摘要",
      "pos": "adj./n.",
      "tag": "学术"
    },
    {
      "en": "academic",
      "zh": "学术的；学院的",
      "pos": "adj.",
      "tag": "学术"
    },
    {
      "en": "adapt",
      "zh": "适应；改编",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "adequate",
      "zh": "足够的；适当的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "adjacent",
      "zh": "相邻的；邻近的",
      "pos": "adj.",
      "tag": "空间"
    },
    {
      "en": "advocate",
      "zh": "提倡；拥护者",
      "pos": "v./n.",
      "tag": "观点"
    },
    {
      "en": "allocate",
      "zh": "分配；拨给",
      "pos": "v.",
      "tag": "管理"
    },
    {
      "en": "ambiguous",
      "zh": "模糊的；有歧义的",
      "pos": "adj.",
      "tag": "语言"
    },
    {
      "en": "analysis",
      "zh": "分析；分解",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "approach",
      "zh": "方法；接近",
      "pos": "n./v.",
      "tag": "研究"
    },
    {
      "en": "assess",
      "zh": "评估；评价",
      "pos": "v.",
      "tag": "研究"
    },
    {
      "en": "assumption",
      "zh": "假设；设想",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "authority",
      "zh": "权威；当局",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "coherent",
      "zh": "连贯的；一致的",
      "pos": "adj.",
      "tag": "写作"
    },
    {
      "en": "collapse",
      "zh": "倒塌；崩溃",
      "pos": "v./n.",
      "tag": "变化"
    },
    {
      "en": "compile",
      "zh": "编纂；编译",
      "pos": "v.",
      "tag": "学术"
    },
    {
      "en": "comprehensive",
      "zh": "全面的；综合的",
      "pos": "adj.",
      "tag": "写作"
    },
    {
      "en": "conclude",
      "zh": "得出结论；结束",
      "pos": "v.",
      "tag": "写作"
    },
    {
      "en": "consistent",
      "zh": "一致的；持续的",
      "pos": "adj.",
      "tag": "逻辑"
    },
    {
      "en": "constitute",
      "zh": "构成；组成",
      "pos": "v.",
      "tag": "逻辑"
    },
    {
      "en": "context",
      "zh": "语境；背景",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "contrast",
      "zh": "对比；差异",
      "pos": "n./v.",
      "tag": "写作"
    },
    {
      "en": "convention",
      "zh": "惯例；会议",
      "pos": "n.",
      "tag": "社会"
    },
    {
      "en": "crucial",
      "zh": "关键的；至关重要的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "derive",
      "zh": "获得；源自",
      "pos": "v.",
      "tag": "逻辑"
    },
    {
      "en": "dimension",
      "zh": "维度；方面",
      "pos": "n.",
      "tag": "分析"
    },
    {
      "en": "distinct",
      "zh": "清楚的；不同的",
      "pos": "adj.",
      "tag": "比较"
    },
    {
      "en": "draft",
      "zh": "草稿；起草",
      "pos": "n./v.",
      "tag": "写作"
    },
    {
      "en": "emerge",
      "zh": "出现；显现",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "emphasis",
      "zh": "强调；重点",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "establish",
      "zh": "建立；确立",
      "pos": "v.",
      "tag": "学术"
    },
    {
      "en": "evaluate",
      "zh": "评估；评价",
      "pos": "v.",
      "tag": "研究"
    },
    {
      "en": "evidence",
      "zh": "证据；迹象",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "exclude",
      "zh": "排除；不包括",
      "pos": "v.",
      "tag": "逻辑"
    },
    {
      "en": "explicit",
      "zh": "明确的；清楚的",
      "pos": "adj.",
      "tag": "表达"
    },
    {
      "en": "factor",
      "zh": "因素；因子",
      "pos": "n.",
      "tag": "分析"
    },
    {
      "en": "framework",
      "zh": "框架；结构",
      "pos": "n.",
      "tag": "学术"
    },
    {
      "en": "hypothesis",
      "zh": "假设；假说",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "identify",
      "zh": "识别；确认",
      "pos": "v.",
      "tag": "研究"
    },
    {
      "en": "illustrate",
      "zh": "说明；举例说明",
      "pos": "v.",
      "tag": "写作"
    },
    {
      "en": "implication",
      "zh": "含义；影响",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "indicate",
      "zh": "表明；指出",
      "pos": "v.",
      "tag": "表达"
    },
    {
      "en": "interpret",
      "zh": "解释；口译",
      "pos": "v.",
      "tag": "语言"
    },
    {
      "en": "justify",
      "zh": "证明合理；辩护",
      "pos": "v.",
      "tag": "写作"
    },
    {
      "en": "literature",
      "zh": "文献；文学",
      "pos": "n.",
      "tag": "学术"
    },
    {
      "en": "methodology",
      "zh": "方法论",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "objective",
      "zh": "客观的；目标",
      "pos": "adj./n.",
      "tag": "写作"
    },
    {
      "en": "obtain",
      "zh": "获得；得到",
      "pos": "v.",
      "tag": "研究"
    },
    {
      "en": "perspective",
      "zh": "视角；观点",
      "pos": "n.",
      "tag": "写作"
    },
    {
      "en": "phenomenon",
      "zh": "现象",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "principle",
      "zh": "原则；原理",
      "pos": "n.",
      "tag": "学术"
    },
    {
      "en": "process",
      "zh": "过程；处理",
      "pos": "n./v.",
      "tag": "逻辑"
    },
    {
      "en": "proportion",
      "zh": "比例；部分",
      "pos": "n.",
      "tag": "图表"
    },
    {
      "en": "relevant",
      "zh": "相关的；切题的",
      "pos": "adj.",
      "tag": "写作"
    },
    {
      "en": "significant",
      "zh": "显著的；重要的",
      "pos": "adj.",
      "tag": "研究"
    },
    {
      "en": "source",
      "zh": "来源；出处",
      "pos": "n.",
      "tag": "研究"
    },
    {
      "en": "specific",
      "zh": "具体的；特定的",
      "pos": "adj.",
      "tag": "写作"
    },
    {
      "en": "structure",
      "zh": "结构；构造",
      "pos": "n.",
      "tag": "学术"
    },
    {
      "en": "sufficient",
      "zh": "足够的；充分的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "survey",
      "zh": "调查；测量",
      "pos": "n./v.",
      "tag": "研究"
    },
    {
      "en": "theory",
      "zh": "理论；学说",
      "pos": "n.",
      "tag": "学术"
    },
    {
      "en": "variable",
      "zh": "变量；可变的",
      "pos": "n./adj.",
      "tag": "研究"
    }
  ],
  "TOEFL学术": [
    {
      "en": "acidic",
      "zh": "酸性的；酸味的",
      "pos": "adj.",
      "tag": "科学"
    },
    {
      "en": "adaptation",
      "zh": "适应；改编",
      "pos": "n.",
      "tag": "生命科学"
    },
    {
      "en": "aquifer",
      "zh": "含水层；蓄水层",
      "pos": "n.",
      "tag": "地质"
    },
    {
      "en": "artifact",
      "zh": "人工制品；文物",
      "pos": "n.",
      "tag": "考古"
    },
    {
      "en": "astronomy",
      "zh": "天文学",
      "pos": "n.",
      "tag": "科学"
    },
    {
      "en": "basalt",
      "zh": "玄武岩",
      "pos": "n.",
      "tag": "地质"
    },
    {
      "en": "carnivore",
      "zh": "食肉动物",
      "pos": "n.",
      "tag": "生命科学"
    },
    {
      "en": "celestial",
      "zh": "天体的；天空的",
      "pos": "adj.",
      "tag": "天文"
    },
    {
      "en": "climate",
      "zh": "气候；风气",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "colonization",
      "zh": "殖民；定居",
      "pos": "n.",
      "tag": "历史"
    },
    {
      "en": "composition",
      "zh": "组成；作品",
      "pos": "n.",
      "tag": "学术"
    },
    {
      "en": "continental",
      "zh": "大陆的；洲的",
      "pos": "adj.",
      "tag": "地理"
    },
    {
      "en": "crust",
      "zh": "地壳；外壳",
      "pos": "n.",
      "tag": "地质"
    },
    {
      "en": "deposition",
      "zh": "沉积；沉淀",
      "pos": "n.",
      "tag": "地质"
    },
    {
      "en": "dinosaur",
      "zh": "恐龙",
      "pos": "n.",
      "tag": "古生物"
    },
    {
      "en": "distribution",
      "zh": "分布；分配",
      "pos": "n.",
      "tag": "图表"
    },
    {
      "en": "eclipse",
      "zh": "日食；月食",
      "pos": "n.",
      "tag": "天文"
    },
    {
      "en": "ecosystem",
      "zh": "生态系统",
      "pos": "n.",
      "tag": "环境"
    },
    {
      "en": "emperor",
      "zh": "皇帝；君主",
      "pos": "n.",
      "tag": "历史"
    },
    {
      "en": "eruption",
      "zh": "爆发；喷发",
      "pos": "n.",
      "tag": "地质"
    },
    {
      "en": "evolution",
      "zh": "进化；演变",
      "pos": "n.",
      "tag": "生命科学"
    },
    {
      "en": "fossilization",
      "zh": "化石化；石化",
      "pos": "n.",
      "tag": "古生物"
    },
    {
      "en": "glaciation",
      "zh": "冰川作用",
      "pos": "n.",
      "tag": "地质"
    },
    {
      "en": "gravitation",
      "zh": "引力；万有引力",
      "pos": "n.",
      "tag": "物理"
    },
    {
      "en": "habitat",
      "zh": "栖息地；居住地",
      "pos": "n.",
      "tag": "生态"
    },
    {
      "en": "herbivore",
      "zh": "食草动物",
      "pos": "n.",
      "tag": "生命科学"
    },
    {
      "en": "inscription",
      "zh": "铭文；题词",
      "pos": "n.",
      "tag": "考古"
    },
    {
      "en": "irrigation",
      "zh": "灌溉；水利",
      "pos": "n.",
      "tag": "农业"
    },
    {
      "en": "mammal",
      "zh": "哺乳动物",
      "pos": "n.",
      "tag": "生命科学"
    },
    {
      "en": "manuscript",
      "zh": "手稿；原稿",
      "pos": "n.",
      "tag": "历史"
    },
    {
      "en": "mineral",
      "zh": "矿物；矿物质",
      "pos": "n.",
      "tag": "地质"
    },
    {
      "en": "migration",
      "zh": "迁徙；移民",
      "pos": "n.",
      "tag": "生态"
    },
    {
      "en": "molecule",
      "zh": "分子",
      "pos": "n.",
      "tag": "化学"
    },
    {
      "en": "monument",
      "zh": "纪念碑；遗迹",
      "pos": "n.",
      "tag": "历史"
    },
    {
      "en": "orbit",
      "zh": "轨道；环绕",
      "pos": "n./v.",
      "tag": "天文"
    },
    {
      "en": "organism",
      "zh": "生物；有机体",
      "pos": "n.",
      "tag": "生命科学"
    },
    {
      "en": "photosynthesis",
      "zh": "光合作用",
      "pos": "n.",
      "tag": "生命科学"
    },
    {
      "en": "plateau",
      "zh": "高原；稳定期",
      "pos": "n.",
      "tag": "地理"
    },
    {
      "en": "predator",
      "zh": "捕食者；掠夺者",
      "pos": "n.",
      "tag": "生态"
    },
    {
      "en": "prehistoric",
      "zh": "史前的",
      "pos": "adj.",
      "tag": "历史"
    },
    {
      "en": "reservoir",
      "zh": "水库；储备",
      "pos": "n.",
      "tag": "地理"
    },
    {
      "en": "sediment",
      "zh": "沉积物；沉淀",
      "pos": "n.",
      "tag": "地质"
    },
    {
      "en": "solar",
      "zh": "太阳的；太阳能的",
      "pos": "adj.",
      "tag": "天文"
    },
    {
      "en": "species",
      "zh": "物种；种类",
      "pos": "n.",
      "tag": "生态"
    },
    {
      "en": "tectonic",
      "zh": "构造的；地壳构造的",
      "pos": "adj.",
      "tag": "地质"
    },
    {
      "en": "volcanic",
      "zh": "火山的",
      "pos": "adj.",
      "tag": "地质"
    }
  ],
  "GRE精选": [
    {
      "en": "aberrant",
      "zh": "异常的；偏离常规的",
      "pos": "adj.",
      "tag": "抽象"
    },
    {
      "en": "abstruse",
      "zh": "深奥的；难懂的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "acumen",
      "zh": "敏锐；洞察力",
      "pos": "n.",
      "tag": "能力"
    },
    {
      "en": "admonish",
      "zh": "告诫；责备",
      "pos": "v.",
      "tag": "态度"
    },
    {
      "en": "alacrity",
      "zh": "敏捷；欣然",
      "pos": "n.",
      "tag": "态度"
    },
    {
      "en": "ameliorate",
      "zh": "改善；改良",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "anomaly",
      "zh": "异常；反常现象",
      "pos": "n.",
      "tag": "判断"
    },
    {
      "en": "antipathy",
      "zh": "反感；厌恶",
      "pos": "n.",
      "tag": "情绪"
    },
    {
      "en": "apathy",
      "zh": "冷漠；无兴趣",
      "pos": "n.",
      "tag": "情绪"
    },
    {
      "en": "arbitrary",
      "zh": "任意的；武断的",
      "pos": "adj.",
      "tag": "判断"
    },
    {
      "en": "arduous",
      "zh": "艰巨的；费力的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "assuage",
      "zh": "缓和；减轻",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "audacious",
      "zh": "大胆的；鲁莽的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "austere",
      "zh": "朴素的；严厉的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "belie",
      "zh": "掩饰；与……不符",
      "pos": "v.",
      "tag": "判断"
    },
    {
      "en": "benign",
      "zh": "良性的；仁慈的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "bolster",
      "zh": "支持；加强",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "capricious",
      "zh": "反复无常的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "censure",
      "zh": "责难；批评",
      "pos": "v./n.",
      "tag": "评价"
    },
    {
      "en": "cogent",
      "zh": "有说服力的",
      "pos": "adj.",
      "tag": "写作"
    },
    {
      "en": "convoluted",
      "zh": "复杂难懂的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "corroborate",
      "zh": "证实；佐证",
      "pos": "v.",
      "tag": "研究"
    },
    {
      "en": "dearth",
      "zh": "缺乏；不足",
      "pos": "n.",
      "tag": "数量"
    },
    {
      "en": "delineate",
      "zh": "描绘；阐明",
      "pos": "v.",
      "tag": "表达"
    },
    {
      "en": "derivative",
      "zh": "派生的；衍生物",
      "pos": "adj./n.",
      "tag": "学术"
    },
    {
      "en": "disparate",
      "zh": "不同的；迥异的",
      "pos": "adj.",
      "tag": "比较"
    },
    {
      "en": "dissemble",
      "zh": "掩饰；假装",
      "pos": "v.",
      "tag": "态度"
    },
    {
      "en": "dogmatic",
      "zh": "教条的；武断的",
      "pos": "adj.",
      "tag": "观点"
    },
    {
      "en": "ebullient",
      "zh": "热情洋溢的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "eclectic",
      "zh": "折中的；博采众长的",
      "pos": "adj.",
      "tag": "风格"
    },
    {
      "en": "egregious",
      "zh": "极坏的；惊人的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "enervate",
      "zh": "使衰弱；削弱",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "ephemeral",
      "zh": "短暂的；瞬息的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "equivocal",
      "zh": "模棱两可的",
      "pos": "adj.",
      "tag": "语言"
    },
    {
      "en": "erudite",
      "zh": "博学的；有学问的",
      "pos": "adj.",
      "tag": "人物"
    },
    {
      "en": "exacerbate",
      "zh": "加剧；恶化",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "fastidious",
      "zh": "挑剔的；一丝不苟的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "fervent",
      "zh": "热切的；强烈的",
      "pos": "adj.",
      "tag": "情绪"
    },
    {
      "en": "hackneyed",
      "zh": "陈腐的；老套的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "imminent",
      "zh": "即将发生的",
      "pos": "adj.",
      "tag": "时间"
    },
    {
      "en": "inchoate",
      "zh": "初期的；未成形的",
      "pos": "adj.",
      "tag": "发展"
    },
    {
      "en": "laconic",
      "zh": "简洁的；言简意赅的",
      "pos": "adj.",
      "tag": "表达"
    },
    {
      "en": "loquacious",
      "zh": "健谈的；多话的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "mitigate",
      "zh": "缓和；减轻",
      "pos": "v.",
      "tag": "变化"
    },
    {
      "en": "obdurate",
      "zh": "顽固的；冷酷的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "opaque",
      "zh": "不透明的；难懂的",
      "pos": "adj.",
      "tag": "描述"
    },
    {
      "en": "paradoxical",
      "zh": "矛盾的；似是而非的",
      "pos": "adj.",
      "tag": "逻辑"
    },
    {
      "en": "pragmatic",
      "zh": "务实的；实际的",
      "pos": "adj.",
      "tag": "态度"
    },
    {
      "en": "prolific",
      "zh": "多产的；丰富的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "quiescent",
      "zh": "静止的；沉寂的",
      "pos": "adj.",
      "tag": "状态"
    },
    {
      "en": "recalcitrant",
      "zh": "倔强的；不服管教的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "rescind",
      "zh": "废除；取消",
      "pos": "v.",
      "tag": "规则"
    },
    {
      "en": "salient",
      "zh": "显著的；突出的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "scrupulous",
      "zh": "谨慎的；一丝不苟的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "spurious",
      "zh": "虚假的；伪造的",
      "pos": "adj.",
      "tag": "判断"
    },
    {
      "en": "squalid",
      "zh": "肮脏的；卑劣的",
      "pos": "adj.",
      "tag": "评价"
    },
    {
      "en": "succinct",
      "zh": "简明的；简洁的",
      "pos": "adj.",
      "tag": "表达"
    },
    {
      "en": "tenacious",
      "zh": "顽强的；坚持的",
      "pos": "adj.",
      "tag": "性格"
    },
    {
      "en": "trepidation",
      "zh": "惶恐；不安",
      "pos": "n.",
      "tag": "情绪"
    },
    {
      "en": "ubiquitous",
      "zh": "无处不在的",
      "pos": "adj.",
      "tag": "程度"
    },
    {
      "en": "vacillate",
      "zh": "犹豫；摇摆不定",
      "pos": "v.",
      "tag": "态度"
    },
    {
      "en": "venerate",
      "zh": "尊敬；崇敬",
      "pos": "v.",
      "tag": "态度"
    },
    {
      "en": "verbose",
      "zh": "冗长的；啰嗦的",
      "pos": "adj.",
      "tag": "表达"
    },
    {
      "en": "volatile",
      "zh": "易变的；挥发性的",
      "pos": "adj.",
      "tag": "变化"
    }
  ]
};
const WORD_BANK_META_V097 = {
  "中考基础": {
    "icon": "🏫",
    "desc": "初中常用生活、校园与基础阅读词",
    "color": "#8FBC8F"
  },
  "考研核心": {
    "icon": "🎯",
    "desc": "考研阅读、翻译与写作高频核心词",
    "color": "#C27BA0"
  },
  "TOEFL学术": {
    "icon": "🔬",
    "desc": "托福听读常见学科与校园学术词",
    "color": "#76A5AF"
  },
  "GRE精选": {
    "icon": "🧠",
    "desc": "GRE/进阶阅读中常见抽象难词精选",
    "color": "#674EA7"
  }
};
Object.assign(WORD_BANK_META, WORD_BANK_META_V097);

(function applyMegaWordBankV097() {
  Object.entries(WORD_BANK_MEGA_V097).forEach(([name, entries]) => {
    if (!WORD_BANKS[name]) WORD_BANKS[name] = [];
    const existed = new Set(WORD_BANKS[name].map((item) => String(item.en || '').trim().toLowerCase()));
    const additions = entries
      .filter((item) => item && item.en && item.zh)
      .map((item) => ({
        en: String(item.en).trim().toLowerCase(),
        zh: String(item.zh).trim(),
        pos: item.pos || 'n./v.',
        tag: item.tag || '补充',
        example: item.example || `Type '${String(item.en).trim().toLowerCase()}' when it appears to reinforce meaning and spelling.`,
        tip: item.tip || `分类：${name} · 标签：${item.tag || '补充'}`,
      }))
      .filter((item) => {
        const key = item.en.toLowerCase();
        if (existed.has(key)) return false;
        existed.add(key);
        return true;
      });
    WORD_BANKS[name] = WORD_BANKS[name].concat(additions);
  });
})();

(function polishLegacyMeaningsV097() {
  const corrections = {
    barren: '贫瘠的；不结果的',
    brisk: '轻快的；活跃的',
    clumsy: '笨拙的；不灵巧的',
    crisp: '脆的；清新的',
    dismay: '沮丧；使惊慌',
    dwell: '居住；细想',
    grim: '严厉的；阴森的',
    intact: '完整的；未受损的',
    mourn: '哀悼；忧伤',
    obscure: '模糊的；使费解',
    preach: '宣讲；布道',
    relish: '喜爱；风味',
    savage: '野蛮的；凶猛的',
    undergo: '经历；遭受',
    whereby: '凭借；借以',
  };
  Object.values(WORD_BANKS).forEach((entries) => {
    (entries || []).forEach((item) => {
      const key = String(item.en || '').trim().toLowerCase();
      if (corrections[key]) item.zh = corrections[key];
    });
  });
})();


/* v0.9.7：复合练习词库。把相近大类合并成更接近“半全量/大纲训练”的大包。 */
Object.assign(WORD_BANK_META, {
  '四级强化': { icon: '📚', desc: 'CET-4 + 高考/基础/生活主题混合强化', color: '#6FA8DC' },
  '六级强化': { icon: '📔', desc: 'CET-6 + 考研/学术/职场主题混合强化', color: '#F6B26B' },
  '雅思强化': { icon: '🌍', desc: 'IELTS + 托福学科/环境/社会主题混合强化', color: '#E06666' },
  '考试混合': { icon: '🎲', desc: '中考、高考、四六级、雅思、托福、考研、GRE 去重混合', color: '#5E7B62' },
});

function buildCompositeBankV097(name, sources) {
  const seen = new Set();
  const merged = [];
  sources.forEach((source) => {
    (WORD_BANKS[source] || []).forEach((item) => {
      const en = String(item?.en || '').trim().toLowerCase();
      if (!en || seen.has(en)) return;
      seen.add(en);
      merged.push({
        ...item,
        en,
        zh: item.zh || '词义待补充',
        sourceBank: item.sourceBank || source,
        tag: item.tag || source,
        tip: item.tip || `混合来源：${source}`,
      });
    });
  });
  WORD_BANKS[name] = merged;
}

buildCompositeBankV097('四级强化', ['CET-4', '高考核心', '中考基础', '旅行生活', '情绪性格', '医疗健康', '自然环境']);
buildCompositeBankV097('六级强化', ['CET-6', '考研核心', '学术写作', '商务职场', '科技互联网', '新闻社会', '词根进阶']);
buildCompositeBankV097('雅思强化', ['IELTS', 'TOEFL学术', '自然环境', '新闻社会', '学术写作', '医疗健康', '旅行生活', '艺术文化']);
buildCompositeBankV097('考试混合', ['中考基础', '高考核心', 'CET-4', 'CET-6', 'IELTS', '考研核心', 'TOEFL学术', 'GRE精选']);

function wordWhisperHash(str = '') {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

(function buildMixedWordBank() {
  const sources = Object.keys(WORD_BANKS).filter((name) => name !== '综合乱序');
  const seen = new Set();
  const mixed = [];
  sources.forEach((name) => {
    (WORD_BANKS[name] || []).forEach((item) => {
      const en = String(item?.en || '').trim().toLowerCase();
      if (!en || seen.has(en)) return;
      seen.add(en);
      mixed.push({
        ...item,
        en,
        zh: item.zh || '词义待补充',
        tag: item.tag || name,
        sourceBank: name,
        mixOrder: wordWhisperHash(`${en}-${name}-wordwhisper`),
      });
    });
  });
  WORD_BANKS['综合乱序'] = mixed
    .sort((a, b) => a.mixOrder - b.mixOrder)
    .map((item) => {
      const { mixOrder, ...clean } = item;
      clean.tip = clean.tip || `混合来源：${clean.sourceBank || '主题词库'}`;
      return clean;
    });
})();

// Export for module use
if (typeof window !== 'undefined') {
  window.WORD_BANKS = WORD_BANKS;
  window.WORD_BANK_META = WORD_BANK_META;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WORD_BANKS;
}
