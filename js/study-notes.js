/* ============================================================
   单词物语 · Word Whisper — 学习笔记缓存包 v0.9.5
   用途：把词库扩展到约 1MB 级别，并为后续复习/释义面板预留真实内容。
   游戏当前仍只读取 WORD_BANKS；此文件安全挂载到 window.WORD_STUDY_NOTES。
   ============================================================ */

const WORD_STUDY_NOTES = {
  "CET-4": {
    "abandon": {
      "zh": "放弃；抛弃",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•b•nd•n",
      "reviewPrompts": [
        "看到中文“放弃；抛弃”时，尝试立刻拼出 abandon。",
        "把 abandon 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，abandon适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word abandon when I talk about 放弃；抛弃.",
        "The word abandon is useful in CET-4 reading, listening, or writing practice.",
        "Try typing abandon three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：放弃。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“放弃”？",
        "answer": "abandon"
      }
    },
    "ability": {
      "zh": "能力；才能",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•b•l•ty",
      "reviewPrompts": [
        "看到中文“能力；才能”时，尝试立刻拼出 ability。",
        "把 ability 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，ability适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ability when I talk about 能力；才能.",
        "The word ability is useful in CET-4 reading, listening, or writing practice.",
        "Try typing ability three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-y。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：能力。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“能力”？",
        "answer": "ability"
      }
    },
    "absence": {
      "zh": "缺席；不在",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•bs•nc•",
      "reviewPrompts": [
        "看到中文“缺席；不在”时，尝试立刻拼出 absence。",
        "把 absence 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，absence适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word absence when I talk about 缺席；不在.",
        "The word absence is useful in CET-4 reading, listening, or writing practice.",
        "Try typing absence three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：缺席。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“缺席”？",
        "answer": "absence"
      }
    },
    "absolute": {
      "zh": "绝对的；完全的",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•bs•l•t•",
      "reviewPrompts": [
        "看到中文“绝对的；完全的”时，尝试立刻拼出 absolute。",
        "把 absolute 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，absolute适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word absolute when I talk about 绝对的；完全的.",
        "The word absolute is useful in CET-4 reading, listening, or writing practice.",
        "Try typing absolute three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 8，先记首尾字母 a-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：绝对的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“绝对的”？",
        "answer": "absolute"
      }
    },
    "absorb": {
      "zh": "吸收；吸引",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•bs•rb",
      "reviewPrompts": [
        "看到中文“吸收；吸引”时，尝试立刻拼出 absorb。",
        "把 absorb 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，absorb适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word absorb when I talk about 吸收；吸引.",
        "The word absorb is useful in CET-4 reading, listening, or writing practice.",
        "Try typing absorb three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-b。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：吸收。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“吸收”？",
        "answer": "absorb"
      }
    },
    "abstract": {
      "zh": "抽象的；摘要",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•bstr•ct",
      "reviewPrompts": [
        "看到中文“抽象的；摘要”时，尝试立刻拼出 abstract。",
        "把 abstract 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，abstract适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word abstract when I talk about 抽象的；摘要.",
        "The word abstract is useful in CET-4 reading, listening, or writing practice.",
        "Try typing abstract three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 8，先记首尾字母 a-t。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：抽象的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“抽象的”？",
        "answer": "abstract"
      }
    },
    "academic": {
      "zh": "学术的；学院的",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•c•d•m•c",
      "reviewPrompts": [
        "看到中文“学术的；学院的”时，尝试立刻拼出 academic。",
        "把 academic 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，academic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word academic when I talk about 学术的；学院的.",
        "The word academic is useful in CET-4 reading, listening, or writing practice.",
        "Try typing academic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 8，先记首尾字母 a-c。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：学术的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“学术的”？",
        "answer": "academic"
      }
    },
    "access": {
      "zh": "进入；通道",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•cc•ss",
      "reviewPrompts": [
        "看到中文“进入；通道”时，尝试立刻拼出 access。",
        "把 access 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，access适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word access when I talk about 进入；通道.",
        "The word access is useful in CET-4 reading, listening, or writing practice.",
        "Try typing access three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-s。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：进入。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“进入”？",
        "answer": "access"
      }
    },
    "account": {
      "zh": "账户；说明",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•cc••nt",
      "reviewPrompts": [
        "看到中文“账户；说明”时，尝试立刻拼出 account。",
        "把 account 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，account适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word account when I talk about 账户；说明.",
        "The word account is useful in CET-4 reading, listening, or writing practice.",
        "Try typing account three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：账户。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“账户”？",
        "answer": "account"
      }
    },
    "achieve": {
      "zh": "达到；实现",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•ch••v•",
      "reviewPrompts": [
        "看到中文“达到；实现”时，尝试立刻拼出 achieve。",
        "把 achieve 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，achieve适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word achieve when I talk about 达到；实现.",
        "The word achieve is useful in CET-4 reading, listening, or writing practice.",
        "Try typing achieve three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：达到。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“达到”？",
        "answer": "achieve"
      }
    },
    "acquire": {
      "zh": "获得；习得",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•cq••r•",
      "reviewPrompts": [
        "看到中文“获得；习得”时，尝试立刻拼出 acquire。",
        "把 acquire 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，acquire适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word acquire when I talk about 获得；习得.",
        "The word acquire is useful in CET-4 reading, listening, or writing practice.",
        "Try typing acquire three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：获得。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“获得”？",
        "answer": "acquire"
      }
    },
    "balance": {
      "zh": "平衡；余额",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "b•l•nc•",
      "reviewPrompts": [
        "看到中文“平衡；余额”时，尝试立刻拼出 balance。",
        "把 balance 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，balance适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word balance when I talk about 平衡；余额.",
        "The word balance is useful in CET-4 reading, listening, or writing practice.",
        "Try typing balance three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：平衡。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“平衡”？",
        "answer": "balance"
      }
    },
    "barrier": {
      "zh": "障碍；屏障",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "b•rr••r",
      "reviewPrompts": [
        "看到中文“障碍；屏障”时，尝试立刻拼出 barrier。",
        "把 barrier 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，barrier适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word barrier when I talk about 障碍；屏障.",
        "The word barrier is useful in CET-4 reading, listening, or writing practice.",
        "Try typing barrier three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-r。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：障碍。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“障碍”？",
        "answer": "barrier"
      }
    },
    "benefit": {
      "zh": "利益；好处",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "b•n•f•t",
      "reviewPrompts": [
        "看到中文“利益；好处”时，尝试立刻拼出 benefit。",
        "把 benefit 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，benefit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word benefit when I talk about 利益；好处.",
        "The word benefit is useful in CET-4 reading, listening, or writing practice.",
        "Try typing benefit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：利益。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“利益”？",
        "answer": "benefit"
      }
    },
    "blanket": {
      "zh": "毯子；覆盖",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "bl•nk•t",
      "reviewPrompts": [
        "看到中文“毯子；覆盖”时，尝试立刻拼出 blanket。",
        "把 blanket 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，blanket适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word blanket when I talk about 毯子；覆盖.",
        "The word blanket is useful in CET-4 reading, listening, or writing practice.",
        "Try typing blanket three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：毯子。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“毯子”？",
        "answer": "blanket"
      }
    },
    "boundary": {
      "zh": "边界；界限",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "b••nd•ry",
      "reviewPrompts": [
        "看到中文“边界；界限”时，尝试立刻拼出 boundary。",
        "把 boundary 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，boundary适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word boundary when I talk about 边界；界限.",
        "The word boundary is useful in CET-4 reading, listening, or writing practice.",
        "Try typing boundary three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 8，先记首尾字母 b-y。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：边界。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“边界”？",
        "answer": "boundary"
      }
    },
    "breathe": {
      "zh": "呼吸",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "br••th•",
      "reviewPrompts": [
        "看到中文“呼吸”时，尝试立刻拼出 breathe。",
        "把 breathe 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，breathe适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word breathe when I talk about 呼吸.",
        "The word breathe is useful in CET-4 reading, listening, or writing practice.",
        "Try typing breathe three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：呼吸。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“呼吸”？",
        "answer": "breathe"
      }
    },
    "breeze": {
      "zh": "微风；轻松通过",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "br••z•",
      "reviewPrompts": [
        "看到中文“微风；轻松通过”时，尝试立刻拼出 breeze。",
        "把 breeze 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，breeze适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word breeze when I talk about 微风；轻松通过.",
        "The word breeze is useful in CET-4 reading, listening, or writing practice.",
        "Try typing breeze three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 6，先记首尾字母 b-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：微风。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“微风”？",
        "answer": "breeze"
      }
    },
    "brilliant": {
      "zh": "杰出的；明亮的",
      "pos": "",
      "tag": "CET-4",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "br•ll••nt",
      "reviewPrompts": [
        "看到中文“杰出的；明亮的”时，尝试立刻拼出 brilliant。",
        "把 brilliant 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，brilliant适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word brilliant when I talk about 杰出的；明亮的.",
        "The word brilliant is useful in CET-4 reading, listening, or writing practice.",
        "Try typing brilliant three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 9，先记首尾字母 b-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：杰出的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“杰出的”？",
        "answer": "brilliant"
      }
    },
    "campus": {
      "zh": "校园；校区",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mp•s",
      "reviewPrompts": [
        "看到中文“校园；校区”时，尝试立刻拼出 campus。",
        "把 campus 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，campus适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word campus when I talk about 校园；校区.",
        "The word campus is useful in CET-4 reading, listening, or writing practice.",
        "Try typing campus three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-s。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：校园。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“校园”？",
        "answer": "campus"
      }
    },
    "capture": {
      "zh": "捕获；俘获",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•pt•r•",
      "reviewPrompts": [
        "看到中文“捕获；俘获”时，尝试立刻拼出 capture。",
        "把 capture 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，capture适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word capture when I talk about 捕获；俘获.",
        "The word capture is useful in CET-4 reading, listening, or writing practice.",
        "Try typing capture three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：捕获。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“捕获”？",
        "answer": "capture"
      }
    },
    "career": {
      "zh": "职业；生涯",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•r••r",
      "reviewPrompts": [
        "看到中文“职业；生涯”时，尝试立刻拼出 career。",
        "把 career 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，career适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word career when I talk about 职业；生涯.",
        "The word career is useful in CET-4 reading, listening, or writing practice.",
        "Try typing career three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-r。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：职业。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“职业”？",
        "answer": "career"
      }
    },
    "ceiling": {
      "zh": "天花板；上限",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c••l•ng",
      "reviewPrompts": [
        "看到中文“天花板；上限”时，尝试立刻拼出 ceiling。",
        "把 ceiling 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，ceiling适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ceiling when I talk about 天花板；上限.",
        "The word ceiling is useful in CET-4 reading, listening, or writing practice.",
        "Try typing ceiling three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-g。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：天花板。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“天花板”？",
        "answer": "ceiling"
      }
    },
    "channel": {
      "zh": "频道；渠道",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "ch•nn•l",
      "reviewPrompts": [
        "看到中文“频道；渠道”时，尝试立刻拼出 channel。",
        "把 channel 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，channel适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word channel when I talk about 频道；渠道.",
        "The word channel is useful in CET-4 reading, listening, or writing practice.",
        "Try typing channel three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-l。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：频道。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“频道”？",
        "answer": "channel"
      }
    },
    "chapter": {
      "zh": "章节；篇章",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "ch•pt•r",
      "reviewPrompts": [
        "看到中文“章节；篇章”时，尝试立刻拼出 chapter。",
        "把 chapter 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，chapter适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word chapter when I talk about 章节；篇章.",
        "The word chapter is useful in CET-4 reading, listening, or writing practice.",
        "Try typing chapter three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-r。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：章节。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“章节”？",
        "answer": "chapter"
      }
    },
    "climate": {
      "zh": "气候；风气",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "cl•m•t•",
      "reviewPrompts": [
        "看到中文“气候；风气”时，尝试立刻拼出 climate。",
        "把 climate 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，climate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word climate when I talk about 气候；风气.",
        "The word climate is useful in CET-4 reading, listening, or writing practice.",
        "Try typing climate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：气候。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“气候”？",
        "answer": "climate"
      }
    },
    "comfort": {
      "zh": "舒适；安慰",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mf•rt",
      "reviewPrompts": [
        "看到中文“舒适；安慰”时，尝试立刻拼出 comfort。",
        "把 comfort 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，comfort适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word comfort when I talk about 舒适；安慰.",
        "The word comfort is useful in CET-4 reading, listening, or writing practice.",
        "Try typing comfort three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：舒适。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“舒适”？",
        "answer": "comfort"
      }
    },
    "compare": {
      "zh": "比较；对比",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mp•r•",
      "reviewPrompts": [
        "看到中文“比较；对比”时，尝试立刻拼出 compare。",
        "把 compare 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，compare适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word compare when I talk about 比较；对比.",
        "The word compare is useful in CET-4 reading, listening, or writing practice.",
        "Try typing compare three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：比较。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“比较”？",
        "answer": "compare"
      }
    },
    "conquer": {
      "zh": "征服；克服",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nq••r",
      "reviewPrompts": [
        "看到中文“征服；克服”时，尝试立刻拼出 conquer。",
        "把 conquer 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，conquer适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word conquer when I talk about 征服；克服.",
        "The word conquer is useful in CET-4 reading, listening, or writing practice.",
        "Try typing conquer three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-r。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：征服。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“征服”？",
        "answer": "conquer"
      }
    },
    "context": {
      "zh": "语境；背景",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nt•xt",
      "reviewPrompts": [
        "看到中文“语境；背景”时，尝试立刻拼出 context。",
        "把 context 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，context适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word context when I talk about 语境；背景.",
        "The word context is useful in CET-4 reading, listening, or writing practice.",
        "Try typing context three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：语境。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“语境”？",
        "answer": "context"
      }
    },
    "cottage": {
      "zh": "小屋；村舍",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•tt•g•",
      "reviewPrompts": [
        "看到中文“小屋；村舍”时，尝试立刻拼出 cottage。",
        "把 cottage 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，cottage适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cottage when I talk about 小屋；村舍.",
        "The word cottage is useful in CET-4 reading, listening, or writing practice.",
        "Try typing cottage three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：小屋。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“小屋”？",
        "answer": "cottage"
      }
    },
    "courage": {
      "zh": "勇气；胆量",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c••r•g•",
      "reviewPrompts": [
        "看到中文“勇气；胆量”时，尝试立刻拼出 courage。",
        "把 courage 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，courage适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word courage when I talk about 勇气；胆量.",
        "The word courage is useful in CET-4 reading, listening, or writing practice.",
        "Try typing courage three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：勇气。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“勇气”？",
        "answer": "courage"
      }
    },
    "creature": {
      "zh": "生物；创造物",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "cr••t•r•",
      "reviewPrompts": [
        "看到中文“生物；创造物”时，尝试立刻拼出 creature。",
        "把 creature 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，creature适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word creature when I talk about 生物；创造物.",
        "The word creature is useful in CET-4 reading, listening, or writing practice.",
        "Try typing creature three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：生物。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“生物”？",
        "answer": "creature"
      }
    },
    "curtain": {
      "zh": "窗帘；幕布",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•rt••n",
      "reviewPrompts": [
        "看到中文“窗帘；幕布”时，尝试立刻拼出 curtain。",
        "把 curtain 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，curtain适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word curtain when I talk about 窗帘；幕布.",
        "The word curtain is useful in CET-4 reading, listening, or writing practice.",
        "Try typing curtain three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：窗帘。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“窗帘”？",
        "answer": "curtain"
      }
    },
    "delicate": {
      "zh": "精致的；脆弱的",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•l•c•t•",
      "reviewPrompts": [
        "看到中文“精致的；脆弱的”时，尝试立刻拼出 delicate。",
        "把 delicate 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，delicate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word delicate when I talk about 精致的；脆弱的.",
        "The word delicate is useful in CET-4 reading, listening, or writing practice.",
        "Try typing delicate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：精致的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“精致的”？",
        "answer": "delicate"
      }
    },
    "deserve": {
      "zh": "值得；应得",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "d•s•rv•",
      "reviewPrompts": [
        "看到中文“值得；应得”时，尝试立刻拼出 deserve。",
        "把 deserve 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，deserve适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word deserve when I talk about 值得；应得.",
        "The word deserve is useful in CET-4 reading, listening, or writing practice.",
        "Try typing deserve three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 7，先记首尾字母 d-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：值得。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“值得”？",
        "answer": "deserve"
      }
    },
    "diamond": {
      "zh": "钻石；菱形",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "d••m•nd",
      "reviewPrompts": [
        "看到中文“钻石；菱形”时，尝试立刻拼出 diamond。",
        "把 diamond 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，diamond适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word diamond when I talk about 钻石；菱形.",
        "The word diamond is useful in CET-4 reading, listening, or writing practice.",
        "Try typing diamond three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 7，先记首尾字母 d-d。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：钻石。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“钻石”？",
        "answer": "diamond"
      }
    },
    "discover": {
      "zh": "发现；发觉",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•sc•v•r",
      "reviewPrompts": [
        "看到中文“发现；发觉”时，尝试立刻拼出 discover。",
        "把 discover 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，discover适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word discover when I talk about 发现；发觉.",
        "The word discover is useful in CET-4 reading, listening, or writing practice.",
        "Try typing discover three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-r。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：发现。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“发现”？",
        "answer": "discover"
      }
    },
    "embrace": {
      "zh": "拥抱；包含",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•mbr•c•",
      "reviewPrompts": [
        "看到中文“拥抱；包含”时，尝试立刻拼出 embrace。",
        "把 embrace 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，embrace适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word embrace when I talk about 拥抱；包含.",
        "The word embrace is useful in CET-4 reading, listening, or writing practice.",
        "Try typing embrace three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：拥抱。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“拥抱”？",
        "answer": "embrace"
      }
    },
    "emotion": {
      "zh": "情感；情绪",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•m•t••n",
      "reviewPrompts": [
        "看到中文“情感；情绪”时，尝试立刻拼出 emotion。",
        "把 emotion 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，emotion适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word emotion when I talk about 情感；情绪.",
        "The word emotion is useful in CET-4 reading, listening, or writing practice.",
        "Try typing emotion three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-n。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：情感。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“情感”？",
        "answer": "emotion"
      }
    },
    "endless": {
      "zh": "无尽的；无限的",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•ndl•ss",
      "reviewPrompts": [
        "看到中文“无尽的；无限的”时，尝试立刻拼出 endless。",
        "把 endless 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，endless适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word endless when I talk about 无尽的；无限的.",
        "The word endless is useful in CET-4 reading, listening, or writing practice.",
        "Try typing endless three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-s。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：无尽的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“无尽的”？",
        "answer": "endless"
      }
    },
    "explore": {
      "zh": "探索；探究",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•xpl•r•",
      "reviewPrompts": [
        "看到中文“探索；探究”时，尝试立刻拼出 explore。",
        "把 explore 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，explore适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word explore when I talk about 探索；探究.",
        "The word explore is useful in CET-4 reading, listening, or writing practice.",
        "Try typing explore three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：探索。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“探索”？",
        "answer": "explore"
      }
    },
    "fashion": {
      "zh": "时尚；方式",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "f•sh••n",
      "reviewPrompts": [
        "看到中文“时尚；方式”时，尝试立刻拼出 fashion。",
        "把 fashion 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，fashion适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fashion when I talk about 时尚；方式.",
        "The word fashion is useful in CET-4 reading, listening, or writing practice.",
        "Try typing fashion three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 7，先记首尾字母 f-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：时尚。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“时尚”？",
        "answer": "fashion"
      }
    },
    "feather": {
      "zh": "羽毛；翎毛",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "f••th•r",
      "reviewPrompts": [
        "看到中文“羽毛；翎毛”时，尝试立刻拼出 feather。",
        "把 feather 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，feather适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word feather when I talk about 羽毛；翎毛.",
        "The word feather is useful in CET-4 reading, listening, or writing practice.",
        "Try typing feather three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 7，先记首尾字母 f-r。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：羽毛。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“羽毛”？",
        "answer": "feather"
      }
    },
    "fortune": {
      "zh": "财富；运气",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "f•rt•n•",
      "reviewPrompts": [
        "看到中文“财富；运气”时，尝试立刻拼出 fortune。",
        "把 fortune 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，fortune适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fortune when I talk about 财富；运气.",
        "The word fortune is useful in CET-4 reading, listening, or writing practice.",
        "Try typing fortune three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 7，先记首尾字母 f-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：财富。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“财富”？",
        "answer": "fortune"
      }
    },
    "freedom": {
      "zh": "自由；自主",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "fr••d•m",
      "reviewPrompts": [
        "看到中文“自由；自主”时，尝试立刻拼出 freedom。",
        "把 freedom 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，freedom适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word freedom when I talk about 自由；自主.",
        "The word freedom is useful in CET-4 reading, listening, or writing practice.",
        "Try typing freedom three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 7，先记首尾字母 f-m。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：自由。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“自由”？",
        "answer": "freedom"
      }
    },
    "gallery": {
      "zh": "画廊；走廊",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "g•ll•ry",
      "reviewPrompts": [
        "看到中文“画廊；走廊”时，尝试立刻拼出 gallery。",
        "把 gallery 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，gallery适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word gallery when I talk about 画廊；走廊.",
        "The word gallery is useful in CET-4 reading, listening, or writing practice.",
        "Try typing gallery three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 7，先记首尾字母 g-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：画廊。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“画廊”？",
        "answer": "gallery"
      }
    },
    "genuine": {
      "zh": "真实的；真诚的",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "g•n••n•",
      "reviewPrompts": [
        "看到中文“真实的；真诚的”时，尝试立刻拼出 genuine。",
        "把 genuine 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，genuine适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word genuine when I talk about 真实的；真诚的.",
        "The word genuine is useful in CET-4 reading, listening, or writing practice.",
        "Try typing genuine three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 7，先记首尾字母 g-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：真实的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“真实的”？",
        "answer": "genuine"
      }
    },
    "gentle": {
      "zh": "温和的；轻柔的",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "g•ntl•",
      "reviewPrompts": [
        "看到中文“温和的；轻柔的”时，尝试立刻拼出 gentle。",
        "把 gentle 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，gentle适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word gentle when I talk about 温和的；轻柔的.",
        "The word gentle is useful in CET-4 reading, listening, or writing practice.",
        "Try typing gentle three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 6，先记首尾字母 g-e。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：温和的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“温和的”？",
        "answer": "gentle"
      }
    },
    "gesture": {
      "zh": "手势；姿态",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "g•st•r•",
      "reviewPrompts": [
        "看到中文“手势；姿态”时，尝试立刻拼出 gesture。",
        "把 gesture 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，gesture适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word gesture when I talk about 手势；姿态.",
        "The word gesture is useful in CET-4 reading, listening, or writing practice.",
        "Try typing gesture three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 7，先记首尾字母 g-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：手势。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“手势”？",
        "answer": "gesture"
      }
    },
    "glimpse": {
      "zh": "一瞥；瞥见",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "gl•mps•",
      "reviewPrompts": [
        "看到中文“一瞥；瞥见”时，尝试立刻拼出 glimpse。",
        "把 glimpse 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，glimpse适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word glimpse when I talk about 一瞥；瞥见.",
        "The word glimpse is useful in CET-4 reading, listening, or writing practice.",
        "Try typing glimpse three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 7，先记首尾字母 g-e。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：一瞥。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“一瞥”？",
        "answer": "glimpse"
      }
    },
    "harvest": {
      "zh": "收获；收割",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "h•rv•st",
      "reviewPrompts": [
        "看到中文“收获；收割”时，尝试立刻拼出 harvest。",
        "把 harvest 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，harvest适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word harvest when I talk about 收获；收割.",
        "The word harvest is useful in CET-4 reading, listening, or writing practice.",
        "Try typing harvest three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 7，先记首尾字母 h-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：收获。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“收获”？",
        "answer": "harvest"
      }
    },
    "healthy": {
      "zh": "健康的",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "h••lthy",
      "reviewPrompts": [
        "看到中文“健康的”时，尝试立刻拼出 healthy。",
        "把 healthy 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，healthy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word healthy when I talk about 健康的.",
        "The word healthy is useful in CET-4 reading, listening, or writing practice.",
        "Try typing healthy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 7，先记首尾字母 h-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：健康的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“健康的”？",
        "answer": "healthy"
      }
    },
    "horizon": {
      "zh": "地平线；眼界",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "h•r•z•n",
      "reviewPrompts": [
        "看到中文“地平线；眼界”时，尝试立刻拼出 horizon。",
        "把 horizon 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，horizon适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word horizon when I talk about 地平线；眼界.",
        "The word horizon is useful in CET-4 reading, listening, or writing practice.",
        "Try typing horizon three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 7，先记首尾字母 h-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：地平线。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“地平线”？",
        "answer": "horizon"
      }
    },
    "journey": {
      "zh": "旅程；旅行",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "j••rn•y",
      "reviewPrompts": [
        "看到中文“旅程；旅行”时，尝试立刻拼出 journey。",
        "把 journey 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，journey适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word journey when I talk about 旅程；旅行.",
        "The word journey is useful in CET-4 reading, listening, or writing practice.",
        "Try typing journey three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "J 开头，长度 7，先记首尾字母 j-y。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：旅程。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“旅程”？",
        "answer": "journey"
      }
    },
    "justice": {
      "zh": "正义；公正",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "j•st•c•",
      "reviewPrompts": [
        "看到中文“正义；公正”时，尝试立刻拼出 justice。",
        "把 justice 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，justice适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word justice when I talk about 正义；公正.",
        "The word justice is useful in CET-4 reading, listening, or writing practice.",
        "Try typing justice three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "J 开头，长度 7，先记首尾字母 j-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：正义。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“正义”？",
        "answer": "justice"
      }
    },
    "kitchen": {
      "zh": "厨房",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "k•tch•n",
      "reviewPrompts": [
        "看到中文“厨房”时，尝试立刻拼出 kitchen。",
        "把 kitchen 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，kitchen适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word kitchen when I talk about 厨房.",
        "The word kitchen is useful in CET-4 reading, listening, or writing practice.",
        "Try typing kitchen three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "K 开头，长度 7，先记首尾字母 k-n。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：厨房。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“厨房”？",
        "answer": "kitchen"
      }
    },
    "lantern": {
      "zh": "灯笼；灯塔",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "l•nt•rn",
      "reviewPrompts": [
        "看到中文“灯笼；灯塔”时，尝试立刻拼出 lantern。",
        "把 lantern 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，lantern适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word lantern when I talk about 灯笼；灯塔.",
        "The word lantern is useful in CET-4 reading, listening, or writing practice.",
        "Try typing lantern three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 7，先记首尾字母 l-n。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：灯笼。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“灯笼”？",
        "answer": "lantern"
      }
    },
    "liberty": {
      "zh": "自由；解放",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "l•b•rty",
      "reviewPrompts": [
        "看到中文“自由；解放”时，尝试立刻拼出 liberty。",
        "把 liberty 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，liberty适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word liberty when I talk about 自由；解放.",
        "The word liberty is useful in CET-4 reading, listening, or writing practice.",
        "Try typing liberty three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 7，先记首尾字母 l-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：自由。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“自由”？",
        "answer": "liberty"
      }
    },
    "mansion": {
      "zh": "大厦；宅邸",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "m•ns••n",
      "reviewPrompts": [
        "看到中文“大厦；宅邸”时，尝试立刻拼出 mansion。",
        "把 mansion 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，mansion适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word mansion when I talk about 大厦；宅邸.",
        "The word mansion is useful in CET-4 reading, listening, or writing practice.",
        "Try typing mansion three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 7，先记首尾字母 m-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：大厦。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“大厦”？",
        "answer": "mansion"
      }
    },
    "meadow": {
      "zh": "草地；牧场",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m••d•w",
      "reviewPrompts": [
        "看到中文“草地；牧场”时，尝试立刻拼出 meadow。",
        "把 meadow 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，meadow适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word meadow when I talk about 草地；牧场.",
        "The word meadow is useful in CET-4 reading, listening, or writing practice.",
        "Try typing meadow three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-w。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：草地。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“草地”？",
        "answer": "meadow"
      }
    },
    "miracle": {
      "zh": "奇迹",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "m•r•cl•",
      "reviewPrompts": [
        "看到中文“奇迹”时，尝试立刻拼出 miracle。",
        "把 miracle 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，miracle适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word miracle when I talk about 奇迹.",
        "The word miracle is useful in CET-4 reading, listening, or writing practice.",
        "Try typing miracle three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 7，先记首尾字母 m-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：奇迹。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“奇迹”？",
        "answer": "miracle"
      }
    },
    "morning": {
      "zh": "早晨；上午",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "m•rn•ng",
      "reviewPrompts": [
        "看到中文“早晨；上午”时，尝试立刻拼出 morning。",
        "把 morning 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，morning适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word morning when I talk about 早晨；上午.",
        "The word morning is useful in CET-4 reading, listening, or writing practice.",
        "Try typing morning three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 7，先记首尾字母 m-g。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：早晨。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“早晨”？",
        "answer": "morning"
      }
    },
    "mystery": {
      "zh": "神秘；谜",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "myst•ry",
      "reviewPrompts": [
        "看到中文“神秘；谜”时，尝试立刻拼出 mystery。",
        "把 mystery 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，mystery适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word mystery when I talk about 神秘；谜.",
        "The word mystery is useful in CET-4 reading, listening, or writing practice.",
        "Try typing mystery three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 7，先记首尾字母 m-y。",
        "元音 1 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：神秘。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“神秘”？",
        "answer": "mystery"
      }
    },
    "neutral": {
      "zh": "中立的；中性的",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "n••tr•l",
      "reviewPrompts": [
        "看到中文“中立的；中性的”时，尝试立刻拼出 neutral。",
        "把 neutral 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，neutral适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word neutral when I talk about 中立的；中性的.",
        "The word neutral is useful in CET-4 reading, listening, or writing practice.",
        "Try typing neutral three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 7，先记首尾字母 n-l。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：中立的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“中立的”？",
        "answer": "neutral"
      }
    },
    "noble": {
      "zh": "高尚的；贵族",
      "pos": "",
      "tag": "CET-4",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "n•bl•",
      "reviewPrompts": [
        "看到中文“高尚的；贵族”时，尝试立刻拼出 noble。",
        "把 noble 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，noble适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word noble when I talk about 高尚的；贵族.",
        "The word noble is useful in CET-4 reading, listening, or writing practice.",
        "Try typing noble three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 5，先记首尾字母 n-e。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：高尚的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“高尚的”？",
        "answer": "noble"
      }
    },
    "observe": {
      "zh": "观察；遵守",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•bs•rv•",
      "reviewPrompts": [
        "看到中文“观察；遵守”时，尝试立刻拼出 observe。",
        "把 observe 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，observe适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word observe when I talk about 观察；遵守.",
        "The word observe is useful in CET-4 reading, listening, or writing practice.",
        "Try typing observe three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 7，先记首尾字母 o-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：观察。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“观察”？",
        "answer": "observe"
      }
    },
    "orchard": {
      "zh": "果园",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•rch•rd",
      "reviewPrompts": [
        "看到中文“果园”时，尝试立刻拼出 orchard。",
        "把 orchard 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，orchard适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word orchard when I talk about 果园.",
        "The word orchard is useful in CET-4 reading, listening, or writing practice.",
        "Try typing orchard three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 7，先记首尾字母 o-d。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：果园。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“果园”？",
        "answer": "orchard"
      }
    },
    "passion": {
      "zh": "热情；激情",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p•ss••n",
      "reviewPrompts": [
        "看到中文“热情；激情”时，尝试立刻拼出 passion。",
        "把 passion 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，passion适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word passion when I talk about 热情；激情.",
        "The word passion is useful in CET-4 reading, listening, or writing practice.",
        "Try typing passion three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：热情。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“热情”？",
        "answer": "passion"
      }
    },
    "patient": {
      "zh": "耐心的；病人",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p•t••nt",
      "reviewPrompts": [
        "看到中文“耐心的；病人”时，尝试立刻拼出 patient。",
        "把 patient 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，patient适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word patient when I talk about 耐心的；病人.",
        "The word patient is useful in CET-4 reading, listening, or writing practice.",
        "Try typing patient three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：耐心的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“耐心的”？",
        "answer": "patient"
      }
    },
    "peaceful": {
      "zh": "和平的；宁静的",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "p••c•f•l",
      "reviewPrompts": [
        "看到中文“和平的；宁静的”时，尝试立刻拼出 peaceful。",
        "把 peaceful 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，peaceful适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word peaceful when I talk about 和平的；宁静的.",
        "The word peaceful is useful in CET-4 reading, listening, or writing practice.",
        "Try typing peaceful three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-l。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：和平的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“和平的”？",
        "answer": "peaceful"
      }
    },
    "picture": {
      "zh": "图片；想象",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p•ct•r•",
      "reviewPrompts": [
        "看到中文“图片；想象”时，尝试立刻拼出 picture。",
        "把 picture 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，picture适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word picture when I talk about 图片；想象.",
        "The word picture is useful in CET-4 reading, listening, or writing practice.",
        "Try typing picture three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：图片。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“图片”？",
        "answer": "picture"
      }
    },
    "pioneer": {
      "zh": "先锋；先驱",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p••n••r",
      "reviewPrompts": [
        "看到中文“先锋；先驱”时，尝试立刻拼出 pioneer。",
        "把 pioneer 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，pioneer适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word pioneer when I talk about 先锋；先驱.",
        "The word pioneer is useful in CET-4 reading, listening, or writing practice.",
        "Try typing pioneer three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-r。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：先锋。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“先锋”？",
        "answer": "pioneer"
      }
    },
    "plastic": {
      "zh": "塑料的；可塑的",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "pl•st•c",
      "reviewPrompts": [
        "看到中文“塑料的；可塑的”时，尝试立刻拼出 plastic。",
        "把 plastic 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，plastic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word plastic when I talk about 塑料的；可塑的.",
        "The word plastic is useful in CET-4 reading, listening, or writing practice.",
        "Try typing plastic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-c。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：塑料的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“塑料的”？",
        "answer": "plastic"
      }
    },
    "pleasure": {
      "zh": "快乐；愉悦",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "pl••s•r•",
      "reviewPrompts": [
        "看到中文“快乐；愉悦”时，尝试立刻拼出 pleasure。",
        "把 pleasure 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，pleasure适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word pleasure when I talk about 快乐；愉悦.",
        "The word pleasure is useful in CET-4 reading, listening, or writing practice.",
        "Try typing pleasure three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：快乐。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“快乐”？",
        "answer": "pleasure"
      }
    },
    "portrait": {
      "zh": "肖像；描绘",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "p•rtr••t",
      "reviewPrompts": [
        "看到中文“肖像；描绘”时，尝试立刻拼出 portrait。",
        "把 portrait 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，portrait适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word portrait when I talk about 肖像；描绘.",
        "The word portrait is useful in CET-4 reading, listening, or writing practice.",
        "Try typing portrait three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：肖像。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“肖像”？",
        "answer": "portrait"
      }
    },
    "precious": {
      "zh": "珍贵的；宝贵的",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•c•••s",
      "reviewPrompts": [
        "看到中文“珍贵的；宝贵的”时，尝试立刻拼出 precious。",
        "把 precious 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，precious适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word precious when I talk about 珍贵的；宝贵的.",
        "The word precious is useful in CET-4 reading, listening, or writing practice.",
        "Try typing precious three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-s。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：珍贵的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“珍贵的”？",
        "answer": "precious"
      }
    },
    "pursuit": {
      "zh": "追求；追赶",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p•rs••t",
      "reviewPrompts": [
        "看到中文“追求；追赶”时，尝试立刻拼出 pursuit。",
        "把 pursuit 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，pursuit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word pursuit when I talk about 追求；追赶.",
        "The word pursuit is useful in CET-4 reading, listening, or writing practice.",
        "Try typing pursuit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：追求。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“追求”？",
        "answer": "pursuit"
      }
    },
    "quality": {
      "zh": "质量；品质",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "q••l•ty",
      "reviewPrompts": [
        "看到中文“质量；品质”时，尝试立刻拼出 quality。",
        "把 quality 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，quality适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word quality when I talk about 质量；品质.",
        "The word quality is useful in CET-4 reading, listening, or writing practice.",
        "Try typing quality three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "Q 开头，长度 7，先记首尾字母 q-y。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：质量。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“质量”？",
        "answer": "quality"
      }
    },
    "quest": {
      "zh": "探索；追求",
      "pos": "",
      "tag": "CET-4",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "q••st",
      "reviewPrompts": [
        "看到中文“探索；追求”时，尝试立刻拼出 quest。",
        "把 quest 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，quest适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word quest when I talk about 探索；追求.",
        "The word quest is useful in CET-4 reading, listening, or writing practice.",
        "Try typing quest three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "Q 开头，长度 5，先记首尾字母 q-t。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：探索。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“探索”？",
        "answer": "quest"
      }
    },
    "reality": {
      "zh": "现实；真实",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r••l•ty",
      "reviewPrompts": [
        "看到中文“现实；真实”时，尝试立刻拼出 reality。",
        "把 reality 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，reality适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word reality when I talk about 现实；真实.",
        "The word reality is useful in CET-4 reading, listening, or writing practice.",
        "Try typing reality three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-y。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：现实。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“现实”？",
        "answer": "reality"
      }
    },
    "reflect": {
      "zh": "反映；反射",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r•fl•ct",
      "reviewPrompts": [
        "看到中文“反映；反射”时，尝试立刻拼出 reflect。",
        "把 reflect 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，reflect适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word reflect when I talk about 反映；反射.",
        "The word reflect is useful in CET-4 reading, listening, or writing practice.",
        "Try typing reflect three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：反映。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“反映”？",
        "answer": "reflect"
      }
    },
    "rescue": {
      "zh": "救援；营救",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "r•sc••",
      "reviewPrompts": [
        "看到中文“救援；营救”时，尝试立刻拼出 rescue。",
        "把 rescue 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，rescue适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word rescue when I talk about 救援；营救.",
        "The word rescue is useful in CET-4 reading, listening, or writing practice.",
        "Try typing rescue three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：救援。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“救援”？",
        "answer": "rescue"
      }
    },
    "ripple": {
      "zh": "涟漪；波纹",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "r•ppl•",
      "reviewPrompts": [
        "看到中文“涟漪；波纹”时，尝试立刻拼出 ripple。",
        "把 ripple 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，ripple适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ripple when I talk about 涟漪；波纹.",
        "The word ripple is useful in CET-4 reading, listening, or writing practice.",
        "Try typing ripple three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-e。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：涟漪。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“涟漪”？",
        "answer": "ripple"
      }
    },
    "shelter": {
      "zh": "遮蔽；庇护所",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "sh•lt•r",
      "reviewPrompts": [
        "看到中文“遮蔽；庇护所”时，尝试立刻拼出 shelter。",
        "把 shelter 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，shelter适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word shelter when I talk about 遮蔽；庇护所.",
        "The word shelter is useful in CET-4 reading, listening, or writing practice.",
        "Try typing shelter three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-r。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：遮蔽。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“遮蔽”？",
        "answer": "shelter"
      }
    },
    "silence": {
      "zh": "沉默；寂静",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "s•l•nc•",
      "reviewPrompts": [
        "看到中文“沉默；寂静”时，尝试立刻拼出 silence。",
        "把 silence 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，silence适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word silence when I talk about 沉默；寂静.",
        "The word silence is useful in CET-4 reading, listening, or writing practice.",
        "Try typing silence three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：沉默。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“沉默”？",
        "answer": "silence"
      }
    },
    "sketch": {
      "zh": "素描；草图",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "sk•tch",
      "reviewPrompts": [
        "看到中文“素描；草图”时，尝试立刻拼出 sketch。",
        "把 sketch 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，sketch适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word sketch when I talk about 素描；草图.",
        "The word sketch is useful in CET-4 reading, listening, or writing practice.",
        "Try typing sketch three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-h。",
        "元音 1 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：素描。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“素描”？",
        "answer": "sketch"
      }
    },
    "splendid": {
      "zh": "辉煌的；壮丽的",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "spl•nd•d",
      "reviewPrompts": [
        "看到中文“辉煌的；壮丽的”时，尝试立刻拼出 splendid。",
        "把 splendid 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，splendid适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word splendid when I talk about 辉煌的；壮丽的.",
        "The word splendid is useful in CET-4 reading, listening, or writing practice.",
        "Try typing splendid three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-d。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：辉煌的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“辉煌的”？",
        "answer": "splendid"
      }
    },
    "stumble": {
      "zh": "绊倒；跌跌撞撞",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "st•mbl•",
      "reviewPrompts": [
        "看到中文“绊倒；跌跌撞撞”时，尝试立刻拼出 stumble。",
        "把 stumble 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，stumble适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word stumble when I talk about 绊倒；跌跌撞撞.",
        "The word stumble is useful in CET-4 reading, listening, or writing practice.",
        "Try typing stumble three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-e。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：绊倒。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“绊倒”？",
        "answer": "stumble"
      }
    },
    "sunrise": {
      "zh": "日出；黎明",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "s•nr•s•",
      "reviewPrompts": [
        "看到中文“日出；黎明”时，尝试立刻拼出 sunrise。",
        "把 sunrise 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，sunrise适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word sunrise when I talk about 日出；黎明.",
        "The word sunrise is useful in CET-4 reading, listening, or writing practice.",
        "Try typing sunrise three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：日出。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“日出”？",
        "answer": "sunrise"
      }
    },
    "sunset": {
      "zh": "日落；黄昏",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "s•ns•t",
      "reviewPrompts": [
        "看到中文“日落；黄昏”时，尝试立刻拼出 sunset。",
        "把 sunset 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，sunset适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word sunset when I talk about 日落；黄昏.",
        "The word sunset is useful in CET-4 reading, listening, or writing practice.",
        "Try typing sunset three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：日落。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“日落”？",
        "answer": "sunset"
      }
    },
    "temple": {
      "zh": "寺庙；太阳穴",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "t•mpl•",
      "reviewPrompts": [
        "看到中文“寺庙；太阳穴”时，尝试立刻拼出 temple。",
        "把 temple 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，temple适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word temple when I talk about 寺庙；太阳穴.",
        "The word temple is useful in CET-4 reading, listening, or writing practice.",
        "Try typing temple three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 6，先记首尾字母 t-e。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：寺庙。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“寺庙”？",
        "answer": "temple"
      }
    },
    "therapy": {
      "zh": "治疗；疗法",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "th•r•py",
      "reviewPrompts": [
        "看到中文“治疗；疗法”时，尝试立刻拼出 therapy。",
        "把 therapy 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，therapy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word therapy when I talk about 治疗；疗法.",
        "The word therapy is useful in CET-4 reading, listening, or writing practice.",
        "Try typing therapy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：治疗。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“治疗”？",
        "answer": "therapy"
      }
    },
    "tranquil": {
      "zh": "宁静的；平静的",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "tr•nq••l",
      "reviewPrompts": [
        "看到中文“宁静的；平静的”时，尝试立刻拼出 tranquil。",
        "把 tranquil 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，tranquil适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word tranquil when I talk about 宁静的；平静的.",
        "The word tranquil is useful in CET-4 reading, listening, or writing practice.",
        "Try typing tranquil three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 8，先记首尾字母 t-l。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：宁静的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“宁静的”？",
        "answer": "tranquil"
      }
    },
    "treasure": {
      "zh": "宝藏；珍视",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "tr••s•r•",
      "reviewPrompts": [
        "看到中文“宝藏；珍视”时，尝试立刻拼出 treasure。",
        "把 treasure 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，treasure适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word treasure when I talk about 宝藏；珍视.",
        "The word treasure is useful in CET-4 reading, listening, or writing practice.",
        "Try typing treasure three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 8，先记首尾字母 t-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：宝藏。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“宝藏”？",
        "answer": "treasure"
      }
    },
    "triumph": {
      "zh": "胜利；凯旋",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "tr••mph",
      "reviewPrompts": [
        "看到中文“胜利；凯旋”时，尝试立刻拼出 triumph。",
        "把 triumph 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，triumph适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word triumph when I talk about 胜利；凯旋.",
        "The word triumph is useful in CET-4 reading, listening, or writing practice.",
        "Try typing triumph three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-h。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：胜利。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“胜利”？",
        "answer": "triumph"
      }
    },
    "twinkle": {
      "zh": "闪烁；闪耀",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "tw•nkl•",
      "reviewPrompts": [
        "看到中文“闪烁；闪耀”时，尝试立刻拼出 twinkle。",
        "把 twinkle 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，twinkle适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word twinkle when I talk about 闪烁；闪耀.",
        "The word twinkle is useful in CET-4 reading, listening, or writing practice.",
        "Try typing twinkle three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-e。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：闪烁。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“闪烁”？",
        "answer": "twinkle"
      }
    },
    "umbrella": {
      "zh": "雨伞；保护伞",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•mbr•ll•",
      "reviewPrompts": [
        "看到中文“雨伞；保护伞”时，尝试立刻拼出 umbrella。",
        "把 umbrella 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，umbrella适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word umbrella when I talk about 雨伞；保护伞.",
        "The word umbrella is useful in CET-4 reading, listening, or writing practice.",
        "Try typing umbrella three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "U 开头，长度 8，先记首尾字母 u-a。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：雨伞。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“雨伞”？",
        "answer": "umbrella"
      }
    },
    "uniform": {
      "zh": "制服；统一的",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•n•f•rm",
      "reviewPrompts": [
        "看到中文“制服；统一的”时，尝试立刻拼出 uniform。",
        "把 uniform 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，uniform适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word uniform when I talk about 制服；统一的.",
        "The word uniform is useful in CET-4 reading, listening, or writing practice.",
        "Try typing uniform three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "U 开头，长度 7，先记首尾字母 u-m。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：制服。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“制服”？",
        "answer": "uniform"
      }
    },
    "universe": {
      "zh": "宇宙；世界",
      "pos": "",
      "tag": "CET-4",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•n•v•rs•",
      "reviewPrompts": [
        "看到中文“宇宙；世界”时，尝试立刻拼出 universe。",
        "把 universe 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，universe适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word universe when I talk about 宇宙；世界.",
        "The word universe is useful in CET-4 reading, listening, or writing practice.",
        "Try typing universe three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "U 开头，长度 8，先记首尾字母 u-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：宇宙。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“宇宙”？",
        "answer": "universe"
      }
    },
    "valley": {
      "zh": "山谷；流域",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "v•ll•y",
      "reviewPrompts": [
        "看到中文“山谷；流域”时，尝试立刻拼出 valley。",
        "把 valley 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，valley适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word valley when I talk about 山谷；流域.",
        "The word valley is useful in CET-4 reading, listening, or writing practice.",
        "Try typing valley three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 6，先记首尾字母 v-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：山谷。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“山谷”？",
        "answer": "valley"
      }
    },
    "vapor": {
      "zh": "蒸气；水汽",
      "pos": "",
      "tag": "CET-4",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "v•p•r",
      "reviewPrompts": [
        "看到中文“蒸气；水汽”时，尝试立刻拼出 vapor。",
        "把 vapor 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，vapor适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word vapor when I talk about 蒸气；水汽.",
        "The word vapor is useful in CET-4 reading, listening, or writing practice.",
        "Try typing vapor three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 5，先记首尾字母 v-r。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：蒸气。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“蒸气”？",
        "answer": "vapor"
      }
    },
    "venture": {
      "zh": "冒险；投机",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "v•nt•r•",
      "reviewPrompts": [
        "看到中文“冒险；投机”时，尝试立刻拼出 venture。",
        "把 venture 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，venture适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word venture when I talk about 冒险；投机.",
        "The word venture is useful in CET-4 reading, listening, or writing practice.",
        "Try typing venture three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 7，先记首尾字母 v-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：冒险。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“冒险”？",
        "answer": "venture"
      }
    },
    "village": {
      "zh": "村庄；乡村",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "v•ll•g•",
      "reviewPrompts": [
        "看到中文“村庄；乡村”时，尝试立刻拼出 village。",
        "把 village 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，village适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word village when I talk about 村庄；乡村.",
        "The word village is useful in CET-4 reading, listening, or writing practice.",
        "Try typing village three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 7，先记首尾字母 v-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：村庄。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“村庄”？",
        "answer": "village"
      }
    },
    "vintage": {
      "zh": "复古的；佳酿",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "v•nt•g•",
      "reviewPrompts": [
        "看到中文“复古的；佳酿”时，尝试立刻拼出 vintage。",
        "把 vintage 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，vintage适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word vintage when I talk about 复古的；佳酿.",
        "The word vintage is useful in CET-4 reading, listening, or writing practice.",
        "Try typing vintage three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 7，先记首尾字母 v-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：复古的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“复古的”？",
        "answer": "vintage"
      }
    },
    "visible": {
      "zh": "可见的；明显的",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "v•s•bl•",
      "reviewPrompts": [
        "看到中文“可见的；明显的”时，尝试立刻拼出 visible。",
        "把 visible 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，visible适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word visible when I talk about 可见的；明显的.",
        "The word visible is useful in CET-4 reading, listening, or writing practice.",
        "Try typing visible three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 7，先记首尾字母 v-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：可见的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“可见的”？",
        "answer": "visible"
      }
    },
    "wander": {
      "zh": "漫步；闲逛",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "w•nd•r",
      "reviewPrompts": [
        "看到中文“漫步；闲逛”时，尝试立刻拼出 wander。",
        "把 wander 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，wander适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word wander when I talk about 漫步；闲逛.",
        "The word wander is useful in CET-4 reading, listening, or writing practice.",
        "Try typing wander three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 6，先记首尾字母 w-r。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：漫步。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“漫步”？",
        "answer": "wander"
      }
    },
    "warmth": {
      "zh": "温暖；热情",
      "pos": "",
      "tag": "CET-4",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "w•rmth",
      "reviewPrompts": [
        "看到中文“温暖；热情”时，尝试立刻拼出 warmth。",
        "把 warmth 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，warmth适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word warmth when I talk about 温暖；热情.",
        "The word warmth is useful in CET-4 reading, listening, or writing practice.",
        "Try typing warmth three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 6，先记首尾字母 w-h。",
        "元音 1 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：温暖。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“温暖”？",
        "answer": "warmth"
      }
    },
    "whisper": {
      "zh": "耳语；低语",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "wh•sp•r",
      "reviewPrompts": [
        "看到中文“耳语；低语”时，尝试立刻拼出 whisper。",
        "把 whisper 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，whisper适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word whisper when I talk about 耳语；低语.",
        "The word whisper is useful in CET-4 reading, listening, or writing practice.",
        "Try typing whisper three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 7，先记首尾字母 w-r。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：耳语。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“耳语”？",
        "answer": "whisper"
      }
    },
    "witness": {
      "zh": "目击者；见证",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "w•tn•ss",
      "reviewPrompts": [
        "看到中文“目击者；见证”时，尝试立刻拼出 witness。",
        "把 witness 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，witness适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word witness when I talk about 目击者；见证.",
        "The word witness is useful in CET-4 reading, listening, or writing practice.",
        "Try typing witness three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 7，先记首尾字母 w-s。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：目击者。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“目击者”？",
        "answer": "witness"
      }
    },
    "wrinkle": {
      "zh": "皱纹；褶皱",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "wr•nkl•",
      "reviewPrompts": [
        "看到中文“皱纹；褶皱”时，尝试立刻拼出 wrinkle。",
        "把 wrinkle 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，wrinkle适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word wrinkle when I talk about 皱纹；褶皱.",
        "The word wrinkle is useful in CET-4 reading, listening, or writing practice.",
        "Try typing wrinkle three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 7，先记首尾字母 w-e。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：皱纹。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“皱纹”？",
        "answer": "wrinkle"
      }
    },
    "yield": {
      "zh": "产出；屈服",
      "pos": "",
      "tag": "CET-4",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "y••ld",
      "reviewPrompts": [
        "看到中文“产出；屈服”时，尝试立刻拼出 yield。",
        "把 yield 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，yield适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word yield when I talk about 产出；屈服.",
        "The word yield is useful in CET-4 reading, listening, or writing practice.",
        "Try typing yield three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "Y 开头，长度 5，先记首尾字母 y-d。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：产出。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“产出”？",
        "answer": "yield"
      }
    },
    "zealous": {
      "zh": "热情的；热心的",
      "pos": "",
      "tag": "CET-4",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "z••l••s",
      "reviewPrompts": [
        "看到中文“热情的；热心的”时，尝试立刻拼出 zealous。",
        "把 zealous 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，zealous适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word zealous when I talk about 热情的；热心的.",
        "The word zealous is useful in CET-4 reading, listening, or writing practice.",
        "Try typing zealous three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "Z 开头，长度 7，先记首尾字母 z-s。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：热情的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“热情的”？",
        "answer": "zealous"
      }
    },
    "accept": {
      "zh": "接受；认可",
      "pos": "v.",
      "tag": "态度",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•cc•pt",
      "reviewPrompts": [
        "看到中文“接受；认可”时，尝试立刻拼出 accept。",
        "把 accept 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，accept适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word accept when I talk about 接受；认可.",
        "The word accept is useful in CET-4 reading, listening, or writing practice.",
        "Try typing accept three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：接受。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“接受”？",
        "answer": "accept"
      }
    },
    "active": {
      "zh": "积极的；活跃的",
      "pos": "adj.",
      "tag": "性格",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•ct•v•",
      "reviewPrompts": [
        "看到中文“积极的；活跃的”时，尝试立刻拼出 active。",
        "把 active 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，active适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word active when I talk about 积极的；活跃的.",
        "The word active is useful in CET-4 reading, listening, or writing practice.",
        "Try typing active three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：积极的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“积极的”？",
        "answer": "active"
      }
    },
    "address": {
      "zh": "地址；演讲；处理",
      "pos": "n./v.",
      "tag": "多义",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•ddr•ss",
      "reviewPrompts": [
        "看到中文“地址；演讲；处理”时，尝试立刻拼出 address。",
        "把 address 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，address适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word address when I talk about 地址；演讲；处理.",
        "The word address is useful in CET-4 reading, listening, or writing practice.",
        "Try typing address three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-s。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：地址。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“地址”？",
        "answer": "address"
      }
    },
    "admire": {
      "zh": "钦佩；欣赏",
      "pos": "v.",
      "tag": "情感",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•dm•r•",
      "reviewPrompts": [
        "看到中文“钦佩；欣赏”时，尝试立刻拼出 admire。",
        "把 admire 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，admire适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word admire when I talk about 钦佩；欣赏.",
        "The word admire is useful in CET-4 reading, listening, or writing practice.",
        "Try typing admire three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：钦佩。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“钦佩”？",
        "answer": "admire"
      }
    },
    "advice": {
      "zh": "建议；忠告",
      "pos": "n.",
      "tag": "写作",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•dv•c•",
      "reviewPrompts": [
        "看到中文“建议；忠告”时，尝试立刻拼出 advice。",
        "把 advice 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，advice适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word advice when I talk about 建议；忠告.",
        "The word advice is useful in CET-4 reading, listening, or writing practice.",
        "Try typing advice three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：建议。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“建议”？",
        "answer": "advice"
      }
    },
    "afford": {
      "zh": "负担得起",
      "pos": "v.",
      "tag": "生活",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•ff•rd",
      "reviewPrompts": [
        "看到中文“负担得起”时，尝试立刻拼出 afford。",
        "把 afford 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，afford适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word afford when I talk about 负担得起.",
        "The word afford is useful in CET-4 reading, listening, or writing practice.",
        "Try typing afford three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-d。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：负担得起。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“负担得起”？",
        "answer": "afford"
      }
    },
    "allow": {
      "zh": "允许；准许",
      "pos": "v.",
      "tag": "规则",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•ll•w",
      "reviewPrompts": [
        "看到中文“允许；准许”时，尝试立刻拼出 allow。",
        "把 allow 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，allow适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word allow when I talk about 允许；准许.",
        "The word allow is useful in CET-4 reading, listening, or writing practice.",
        "Try typing allow three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-w。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：允许。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“允许”？",
        "answer": "allow"
      }
    },
    "amaze": {
      "zh": "使惊讶",
      "pos": "v.",
      "tag": "情绪",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•m•z•",
      "reviewPrompts": [
        "看到中文“使惊讶”时，尝试立刻拼出 amaze。",
        "把 amaze 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，amaze适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word amaze when I talk about 使惊讶.",
        "The word amaze is useful in CET-4 reading, listening, or writing practice.",
        "Try typing amaze three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-e。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：使惊讶。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“使惊讶”？",
        "answer": "amaze"
      }
    },
    "ancient": {
      "zh": "古代的",
      "pos": "adj.",
      "tag": "历史",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•nc••nt",
      "reviewPrompts": [
        "看到中文“古代的”时，尝试立刻拼出 ancient。",
        "把 ancient 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，ancient适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ancient when I talk about 古代的.",
        "The word ancient is useful in CET-4 reading, listening, or writing practice.",
        "Try typing ancient three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：古代的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“古代的”？",
        "answer": "ancient"
      }
    },
    "appear": {
      "zh": "出现；似乎",
      "pos": "v.",
      "tag": "高频",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•pp••r",
      "reviewPrompts": [
        "看到中文“出现；似乎”时，尝试立刻拼出 appear。",
        "把 appear 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，appear适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word appear when I talk about 出现；似乎.",
        "The word appear is useful in CET-4 reading, listening, or writing practice.",
        "Try typing appear three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-r。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：出现。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“出现”？",
        "answer": "appear"
      }
    },
    "arrange": {
      "zh": "安排；整理",
      "pos": "v.",
      "tag": "计划",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•rr•ng•",
      "reviewPrompts": [
        "看到中文“安排；整理”时，尝试立刻拼出 arrange。",
        "把 arrange 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，arrange适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word arrange when I talk about 安排；整理.",
        "The word arrange is useful in CET-4 reading, listening, or writing practice.",
        "Try typing arrange three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：安排。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“安排”？",
        "answer": "arrange"
      }
    },
    "attend": {
      "zh": "参加；出席",
      "pos": "v.",
      "tag": "校园",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•tt•nd",
      "reviewPrompts": [
        "看到中文“参加；出席”时，尝试立刻拼出 attend。",
        "把 attend 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，attend适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word attend when I talk about 参加；出席.",
        "The word attend is useful in CET-4 reading, listening, or writing practice.",
        "Try typing attend three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-d。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：参加。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“参加”？",
        "answer": "attend"
      }
    },
    "avoid": {
      "zh": "避免；避开",
      "pos": "v.",
      "tag": "策略",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•v••d",
      "reviewPrompts": [
        "看到中文“避免；避开”时，尝试立刻拼出 avoid。",
        "把 avoid 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，avoid适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word avoid when I talk about 避免；避开.",
        "The word avoid is useful in CET-4 reading, listening, or writing practice.",
        "Try typing avoid three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-d。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：避免。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“避免”？",
        "answer": "avoid"
      }
    },
    "basic": {
      "zh": "基本的；基础的",
      "pos": "adj.",
      "tag": "高频",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "b•s•c",
      "reviewPrompts": [
        "看到中文“基本的；基础的”时，尝试立刻拼出 basic。",
        "把 basic 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，basic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word basic when I talk about 基本的；基础的.",
        "The word basic is useful in CET-4 reading, listening, or writing practice.",
        "Try typing basic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 5，先记首尾字母 b-c。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：基本的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“基本的”？",
        "answer": "basic"
      }
    },
    "believe": {
      "zh": "相信；认为",
      "pos": "v.",
      "tag": "观点",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "b•l••v•",
      "reviewPrompts": [
        "看到中文“相信；认为”时，尝试立刻拼出 believe。",
        "把 believe 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，believe适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word believe when I talk about 相信；认为.",
        "The word believe is useful in CET-4 reading, listening, or writing practice.",
        "Try typing believe three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：相信。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“相信”？",
        "answer": "believe"
      }
    },
    "borrow": {
      "zh": "借入",
      "pos": "v.",
      "tag": "生活",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "b•rr•w",
      "reviewPrompts": [
        "看到中文“借入”时，尝试立刻拼出 borrow。",
        "把 borrow 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，borrow适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word borrow when I talk about 借入.",
        "The word borrow is useful in CET-4 reading, listening, or writing practice.",
        "Try typing borrow three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 6，先记首尾字母 b-w。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：借入。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“借入”？",
        "answer": "borrow"
      }
    },
    "brain": {
      "zh": "大脑；智力",
      "pos": "n.",
      "tag": "身体",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "br••n",
      "reviewPrompts": [
        "看到中文“大脑；智力”时，尝试立刻拼出 brain。",
        "把 brain 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，brain适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word brain when I talk about 大脑；智力.",
        "The word brain is useful in CET-4 reading, listening, or writing practice.",
        "Try typing brain three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 5，先记首尾字母 b-n。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：大脑。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“大脑”？",
        "answer": "brain"
      }
    },
    "cancel": {
      "zh": "取消",
      "pos": "v.",
      "tag": "安排",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nc•l",
      "reviewPrompts": [
        "看到中文“取消”时，尝试立刻拼出 cancel。",
        "把 cancel 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，cancel适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cancel when I talk about 取消.",
        "The word cancel is useful in CET-4 reading, listening, or writing practice.",
        "Try typing cancel three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-l。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：取消。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“取消”？",
        "answer": "cancel"
      }
    },
    "careful": {
      "zh": "仔细的；小心的",
      "pos": "adj.",
      "tag": "性格",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•r•f•l",
      "reviewPrompts": [
        "看到中文“仔细的；小心的”时，尝试立刻拼出 careful。",
        "把 careful 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，careful适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word careful when I talk about 仔细的；小心的.",
        "The word careful is useful in CET-4 reading, listening, or writing practice.",
        "Try typing careful three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-l。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：仔细的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“仔细的”？",
        "answer": "careful"
      }
    },
    "cause": {
      "zh": "原因；导致",
      "pos": "n./v.",
      "tag": "因果",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "c••s•",
      "reviewPrompts": [
        "看到中文“原因；导致”时，尝试立刻拼出 cause。",
        "把 cause 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，cause适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cause when I talk about 原因；导致.",
        "The word cause is useful in CET-4 reading, listening, or writing practice.",
        "Try typing cause three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-e。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：原因。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“原因”？",
        "answer": "cause"
      }
    },
    "certain": {
      "zh": "确定的；某个",
      "pos": "adj.",
      "tag": "判断",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•rt••n",
      "reviewPrompts": [
        "看到中文“确定的；某个”时，尝试立刻拼出 certain。",
        "把 certain 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，certain适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word certain when I talk about 确定的；某个.",
        "The word certain is useful in CET-4 reading, listening, or writing practice.",
        "Try typing certain three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：确定的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“确定的”？",
        "answer": "certain"
      }
    },
    "chance": {
      "zh": "机会；可能性",
      "pos": "n.",
      "tag": "抽象",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "ch•nc•",
      "reviewPrompts": [
        "看到中文“机会；可能性”时，尝试立刻拼出 chance。",
        "把 chance 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，chance适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word chance when I talk about 机会；可能性.",
        "The word chance is useful in CET-4 reading, listening, or writing practice.",
        "Try typing chance three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-e。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：机会。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“机会”？",
        "answer": "chance"
      }
    },
    "choice": {
      "zh": "选择",
      "pos": "n.",
      "tag": "决策",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "ch••c•",
      "reviewPrompts": [
        "看到中文“选择”时，尝试立刻拼出 choice。",
        "把 choice 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，choice适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word choice when I talk about 选择.",
        "The word choice is useful in CET-4 reading, listening, or writing practice.",
        "Try typing choice three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：选择。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“选择”？",
        "answer": "choice"
      }
    },
    "common": {
      "zh": "常见的；共同的",
      "pos": "adj.",
      "tag": "高频",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mm•n",
      "reviewPrompts": [
        "看到中文“常见的；共同的”时，尝试立刻拼出 common。",
        "把 common 拆成 2 个小节练习，减少漏键。",
        "在CET-4分类中，common适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word common when I talk about 常见的；共同的.",
        "The word common is useful in CET-4 reading, listening, or writing practice.",
        "Try typing common three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-n。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：常见的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“常见的”？",
        "answer": "common"
      }
    },
    "complete": {
      "zh": "完成；完整的",
      "pos": "v./adj.",
      "tag": "任务",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mpl•t•",
      "reviewPrompts": [
        "看到中文“完成；完整的”时，尝试立刻拼出 complete。",
        "把 complete 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，complete适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word complete when I talk about 完成；完整的.",
        "The word complete is useful in CET-4 reading, listening, or writing practice.",
        "Try typing complete three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：完成。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“完成”？",
        "answer": "complete"
      }
    },
    "condition": {
      "zh": "条件；状况",
      "pos": "n.",
      "tag": "环境",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "c•nd•t••n",
      "reviewPrompts": [
        "看到中文“条件；状况”时，尝试立刻拼出 condition。",
        "把 condition 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，condition适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word condition when I talk about 条件；状况.",
        "The word condition is useful in CET-4 reading, listening, or writing practice.",
        "Try typing condition three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 9，先记首尾字母 c-n。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：条件。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“条件”？",
        "answer": "condition"
      }
    },
    "consider": {
      "zh": "考虑；认为",
      "pos": "v.",
      "tag": "思考",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ns•d•r",
      "reviewPrompts": [
        "看到中文“考虑；认为”时，尝试立刻拼出 consider。",
        "把 consider 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，consider适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word consider when I talk about 考虑；认为.",
        "The word consider is useful in CET-4 reading, listening, or writing practice.",
        "Try typing consider three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-r。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：考虑。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“考虑”？",
        "answer": "consider"
      }
    },
    "continue": {
      "zh": "继续",
      "pos": "v.",
      "tag": "动作",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nt•n••",
      "reviewPrompts": [
        "看到中文“继续”时，尝试立刻拼出 continue。",
        "把 continue 拆成 3 个小节练习，减少漏键。",
        "在CET-4分类中，continue适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word continue when I talk about 继续.",
        "The word continue is useful in CET-4 reading, listening, or writing practice.",
        "Try typing continue three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：继续。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“继续”？",
        "answer": "continue"
      }
    }
  },
  "CET-6": {
    "abolish": {
      "zh": "废除；取消",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•b•l•sh",
      "reviewPrompts": [
        "看到中文“废除；取消”时，尝试立刻拼出 abolish。",
        "把 abolish 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，abolish适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word abolish when I talk about 废除；取消.",
        "The word abolish is useful in CET-6 reading, listening, or writing practice.",
        "Try typing abolish three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-h。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：废除。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“废除”？",
        "answer": "abolish"
      }
    },
    "absurd": {
      "zh": "荒谬的；可笑的",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•bs•rd",
      "reviewPrompts": [
        "看到中文“荒谬的；可笑的”时，尝试立刻拼出 absurd。",
        "把 absurd 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，absurd适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word absurd when I talk about 荒谬的；可笑的.",
        "The word absurd is useful in CET-6 reading, listening, or writing practice.",
        "Try typing absurd three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-d。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：荒谬的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“荒谬的”？",
        "answer": "absurd"
      }
    },
    "acknowledge": {
      "zh": "承认；确认",
      "pos": "",
      "tag": "CET-6",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "•ckn•wl•dg•",
      "reviewPrompts": [
        "看到中文“承认；确认”时，尝试立刻拼出 acknowledge。",
        "把 acknowledge 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，acknowledge适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word acknowledge when I talk about 承认；确认.",
        "The word acknowledge is useful in CET-6 reading, listening, or writing practice.",
        "Try typing acknowledge three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 11，先记首尾字母 a-e。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：承认。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“承认”？",
        "answer": "acknowledge"
      }
    },
    "acquaint": {
      "zh": "使熟悉；使认识",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•cq•••nt",
      "reviewPrompts": [
        "看到中文“使熟悉；使认识”时，尝试立刻拼出 acquaint。",
        "把 acquaint 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，acquaint适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word acquaint when I talk about 使熟悉；使认识.",
        "The word acquaint is useful in CET-6 reading, listening, or writing practice.",
        "Try typing acquaint three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 8，先记首尾字母 a-t。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：使熟悉。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“使熟悉”？",
        "answer": "acquaint"
      }
    },
    "agitate": {
      "zh": "煽动；搅动",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•g•t•t•",
      "reviewPrompts": [
        "看到中文“煽动；搅动”时，尝试立刻拼出 agitate。",
        "把 agitate 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，agitate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word agitate when I talk about 煽动；搅动.",
        "The word agitate is useful in CET-6 reading, listening, or writing practice.",
        "Try typing agitate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：煽动。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“煽动”？",
        "answer": "agitate"
      }
    },
    "alienate": {
      "zh": "疏远；离间",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•l••n•t•",
      "reviewPrompts": [
        "看到中文“疏远；离间”时，尝试立刻拼出 alienate。",
        "把 alienate 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，alienate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word alienate when I talk about 疏远；离间.",
        "The word alienate is useful in CET-6 reading, listening, or writing practice.",
        "Try typing alienate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 8，先记首尾字母 a-e。",
        "元音 5 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：疏远。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“疏远”？",
        "answer": "alienate"
      }
    },
    "ambiguous": {
      "zh": "模糊的；模棱两可的",
      "pos": "",
      "tag": "CET-6",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•mb•g•••s",
      "reviewPrompts": [
        "看到中文“模糊的；模棱两可的”时，尝试立刻拼出 ambiguous。",
        "把 ambiguous 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，ambiguous适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ambiguous when I talk about 模糊的；模棱两可的.",
        "The word ambiguous is useful in CET-6 reading, listening, or writing practice.",
        "Try typing ambiguous three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-s。",
        "元音 5 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：模糊的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“模糊的”？",
        "answer": "ambiguous"
      }
    },
    "anonymous": {
      "zh": "匿名的；无名的",
      "pos": "",
      "tag": "CET-6",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•n•nym••s",
      "reviewPrompts": [
        "看到中文“匿名的；无名的”时，尝试立刻拼出 anonymous。",
        "把 anonymous 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，anonymous适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word anonymous when I talk about 匿名的；无名的.",
        "The word anonymous is useful in CET-6 reading, listening, or writing practice.",
        "Try typing anonymous three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-s。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：匿名的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“匿名的”？",
        "answer": "anonymous"
      }
    },
    "applaud": {
      "zh": "鼓掌；称赞",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•ppl••d",
      "reviewPrompts": [
        "看到中文“鼓掌；称赞”时，尝试立刻拼出 applaud。",
        "把 applaud 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，applaud适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word applaud when I talk about 鼓掌；称赞.",
        "The word applaud is useful in CET-6 reading, listening, or writing practice.",
        "Try typing applaud three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-d。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：鼓掌。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“鼓掌”？",
        "answer": "applaud"
      }
    },
    "aspire": {
      "zh": "渴望；立志",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•sp•r•",
      "reviewPrompts": [
        "看到中文“渴望；立志”时，尝试立刻拼出 aspire。",
        "把 aspire 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，aspire适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word aspire when I talk about 渴望；立志.",
        "The word aspire is useful in CET-6 reading, listening, or writing practice.",
        "Try typing aspire three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：渴望。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“渴望”？",
        "answer": "aspire"
      }
    },
    "barren": {
      "zh": "贫瘠的； barren",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "b•rr•n",
      "reviewPrompts": [
        "看到中文“贫瘠的； barren”时，尝试立刻拼出 barren。",
        "把 barren 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，barren适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word barren when I talk about 贫瘠的； barren.",
        "The word barren is useful in CET-6 reading, listening, or writing practice.",
        "Try typing barren three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 6，先记首尾字母 b-n。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：贫瘠的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“贫瘠的”？",
        "answer": "barren"
      }
    },
    "beforehand": {
      "zh": "预先；事先",
      "pos": "",
      "tag": "CET-6",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "b•f•r•h•nd",
      "reviewPrompts": [
        "看到中文“预先；事先”时，尝试立刻拼出 beforehand。",
        "把 beforehand 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，beforehand适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word beforehand when I talk about 预先；事先.",
        "The word beforehand is useful in CET-6 reading, listening, or writing practice.",
        "Try typing beforehand three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 10，先记首尾字母 b-d。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：预先。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“预先”？",
        "answer": "beforehand"
      }
    },
    "betray": {
      "zh": "背叛；出卖",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "b•tr•y",
      "reviewPrompts": [
        "看到中文“背叛；出卖”时，尝试立刻拼出 betray。",
        "把 betray 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，betray适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word betray when I talk about 背叛；出卖.",
        "The word betray is useful in CET-6 reading, listening, or writing practice.",
        "Try typing betray three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 6，先记首尾字母 b-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：背叛。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“背叛”？",
        "answer": "betray"
      }
    },
    "bewilder": {
      "zh": "使迷惑；使困惑",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "b•w•ld•r",
      "reviewPrompts": [
        "看到中文“使迷惑；使困惑”时，尝试立刻拼出 bewilder。",
        "把 bewilder 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，bewilder适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word bewilder when I talk about 使迷惑；使困惑.",
        "The word bewilder is useful in CET-6 reading, listening, or writing practice.",
        "Try typing bewilder three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 8，先记首尾字母 b-r。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：使迷惑。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“使迷惑”？",
        "answer": "bewilder"
      }
    },
    "blossom": {
      "zh": "开花；繁荣",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "bl•ss•m",
      "reviewPrompts": [
        "看到中文“开花；繁荣”时，尝试立刻拼出 blossom。",
        "把 blossom 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，blossom适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word blossom when I talk about 开花；繁荣.",
        "The word blossom is useful in CET-6 reading, listening, or writing practice.",
        "Try typing blossom three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-m。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：开花。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“开花”？",
        "answer": "blossom"
      }
    },
    "boycott": {
      "zh": "抵制；联合抵制",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "b•yc•tt",
      "reviewPrompts": [
        "看到中文“抵制；联合抵制”时，尝试立刻拼出 boycott。",
        "把 boycott 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，boycott适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word boycott when I talk about 抵制；联合抵制.",
        "The word boycott is useful in CET-6 reading, listening, or writing practice.",
        "Try typing boycott three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：抵制。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“抵制”？",
        "answer": "boycott"
      }
    },
    "brisk": {
      "zh": "轻快的； brisk",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "br•sk",
      "reviewPrompts": [
        "看到中文“轻快的； brisk”时，尝试立刻拼出 brisk。",
        "把 brisk 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，brisk适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word brisk when I talk about 轻快的； brisk.",
        "The word brisk is useful in CET-6 reading, listening, or writing practice.",
        "Try typing brisk three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 5，先记首尾字母 b-k。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：轻快的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“轻快的”？",
        "answer": "brisk"
      }
    },
    "brutal": {
      "zh": "残忍的；野蛮的",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "br•t•l",
      "reviewPrompts": [
        "看到中文“残忍的；野蛮的”时，尝试立刻拼出 brutal。",
        "把 brutal 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，brutal适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word brutal when I talk about 残忍的；野蛮的.",
        "The word brutal is useful in CET-6 reading, listening, or writing practice.",
        "Try typing brutal three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 6，先记首尾字母 b-l。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：残忍的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“残忍的”？",
        "answer": "brutal"
      }
    },
    "capsule": {
      "zh": "胶囊；太空舱",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ps•l•",
      "reviewPrompts": [
        "看到中文“胶囊；太空舱”时，尝试立刻拼出 capsule。",
        "把 capsule 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，capsule适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word capsule when I talk about 胶囊；太空舱.",
        "The word capsule is useful in CET-6 reading, listening, or writing practice.",
        "Try typing capsule three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：胶囊。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“胶囊”？",
        "answer": "capsule"
      }
    },
    "cathedral": {
      "zh": "大教堂",
      "pos": "",
      "tag": "CET-6",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "c•th•dr•l",
      "reviewPrompts": [
        "看到中文“大教堂”时，尝试立刻拼出 cathedral。",
        "把 cathedral 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，cathedral适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cathedral when I talk about 大教堂.",
        "The word cathedral is useful in CET-6 reading, listening, or writing practice.",
        "Try typing cathedral three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 9，先记首尾字母 c-l。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：大教堂。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“大教堂”？",
        "answer": "cathedral"
      }
    },
    "cherish": {
      "zh": "珍爱；珍惜",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "ch•r•sh",
      "reviewPrompts": [
        "看到中文“珍爱；珍惜”时，尝试立刻拼出 cherish。",
        "把 cherish 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，cherish适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cherish when I talk about 珍爱；珍惜.",
        "The word cherish is useful in CET-6 reading, listening, or writing practice.",
        "Try typing cherish three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-h。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：珍爱。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“珍爱”？",
        "answer": "cherish"
      }
    },
    "chronic": {
      "zh": "慢性的；长期的",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "chr•n•c",
      "reviewPrompts": [
        "看到中文“慢性的；长期的”时，尝试立刻拼出 chronic。",
        "把 chronic 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，chronic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word chronic when I talk about 慢性的；长期的.",
        "The word chronic is useful in CET-6 reading, listening, or writing practice.",
        "Try typing chronic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-c。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：慢性的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“慢性的”？",
        "answer": "chronic"
      }
    },
    "clumsy": {
      "zh": "笨拙的； clumsy",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "cl•msy",
      "reviewPrompts": [
        "看到中文“笨拙的； clumsy”时，尝试立刻拼出 clumsy。",
        "把 clumsy 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，clumsy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word clumsy when I talk about 笨拙的； clumsy.",
        "The word clumsy is useful in CET-6 reading, listening, or writing practice.",
        "Try typing clumsy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-y。",
        "元音 1 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：笨拙的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“笨拙的”？",
        "answer": "clumsy"
      }
    },
    "coincide": {
      "zh": "同时发生；巧合",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c••nc•d•",
      "reviewPrompts": [
        "看到中文“同时发生；巧合”时，尝试立刻拼出 coincide。",
        "把 coincide 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，coincide适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word coincide when I talk about 同时发生；巧合.",
        "The word coincide is useful in CET-6 reading, listening, or writing practice.",
        "Try typing coincide three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：同时发生。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“同时发生”？",
        "answer": "coincide"
      }
    },
    "colonial": {
      "zh": "殖民地的",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•l•n••l",
      "reviewPrompts": [
        "看到中文“殖民地的”时，尝试立刻拼出 colonial。",
        "把 colonial 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，colonial适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word colonial when I talk about 殖民地的.",
        "The word colonial is useful in CET-6 reading, listening, or writing practice.",
        "Try typing colonial three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-l。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：殖民地的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“殖民地的”？",
        "answer": "colonial"
      }
    },
    "compact": {
      "zh": "紧凑的；小巧的",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mp•ct",
      "reviewPrompts": [
        "看到中文“紧凑的；小巧的”时，尝试立刻拼出 compact。",
        "把 compact 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，compact适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word compact when I talk about 紧凑的；小巧的.",
        "The word compact is useful in CET-6 reading, listening, or writing practice.",
        "Try typing compact three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：紧凑的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“紧凑的”？",
        "answer": "compact"
      }
    },
    "compile": {
      "zh": "编译；编纂",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mp•l•",
      "reviewPrompts": [
        "看到中文“编译；编纂”时，尝试立刻拼出 compile。",
        "把 compile 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，compile适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word compile when I talk about 编译；编纂.",
        "The word compile is useful in CET-6 reading, listening, or writing practice.",
        "Try typing compile three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：编译。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“编译”？",
        "answer": "compile"
      }
    },
    "comply": {
      "zh": "遵守；服从",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mply",
      "reviewPrompts": [
        "看到中文“遵守；服从”时，尝试立刻拼出 comply。",
        "把 comply 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，comply适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word comply when I talk about 遵守；服从.",
        "The word comply is useful in CET-6 reading, listening, or writing practice.",
        "Try typing comply three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-y。",
        "元音 1 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：遵守。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“遵守”？",
        "answer": "comply"
      }
    },
    "conceive": {
      "zh": "构思；怀孕",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nc••v•",
      "reviewPrompts": [
        "看到中文“构思；怀孕”时，尝试立刻拼出 conceive。",
        "把 conceive 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，conceive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word conceive when I talk about 构思；怀孕.",
        "The word conceive is useful in CET-6 reading, listening, or writing practice.",
        "Try typing conceive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：构思。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“构思”？",
        "answer": "conceive"
      }
    },
    "conscience": {
      "zh": "良心；良知",
      "pos": "",
      "tag": "CET-6",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "c•nsc••nc•",
      "reviewPrompts": [
        "看到中文“良心；良知”时，尝试立刻拼出 conscience。",
        "把 conscience 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，conscience适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word conscience when I talk about 良心；良知.",
        "The word conscience is useful in CET-6 reading, listening, or writing practice.",
        "Try typing conscience three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 10，先记首尾字母 c-e。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：良心。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“良心”？",
        "answer": "conscience"
      }
    },
    "console": {
      "zh": "安慰；控制台",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ns•l•",
      "reviewPrompts": [
        "看到中文“安慰；控制台”时，尝试立刻拼出 console。",
        "把 console 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，console适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word console when I talk about 安慰；控制台.",
        "The word console is useful in CET-6 reading, listening, or writing practice.",
        "Try typing console three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：安慰。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“安慰”？",
        "answer": "console"
      }
    },
    "contempt": {
      "zh": "蔑视；轻视",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nt•mpt",
      "reviewPrompts": [
        "看到中文“蔑视；轻视”时，尝试立刻拼出 contempt。",
        "把 contempt 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，contempt适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word contempt when I talk about 蔑视；轻视.",
        "The word contempt is useful in CET-6 reading, listening, or writing practice.",
        "Try typing contempt three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-t。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：蔑视。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“蔑视”？",
        "answer": "contempt"
      }
    },
    "corrode": {
      "zh": "腐蚀；侵蚀",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•rr•d•",
      "reviewPrompts": [
        "看到中文“腐蚀；侵蚀”时，尝试立刻拼出 corrode。",
        "把 corrode 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，corrode适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word corrode when I talk about 腐蚀；侵蚀.",
        "The word corrode is useful in CET-6 reading, listening, or writing practice.",
        "Try typing corrode three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：腐蚀。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“腐蚀”？",
        "answer": "corrode"
      }
    },
    "crisp": {
      "zh": "脆的； crisp",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "cr•sp",
      "reviewPrompts": [
        "看到中文“脆的； crisp”时，尝试立刻拼出 crisp。",
        "把 crisp 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，crisp适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word crisp when I talk about 脆的； crisp.",
        "The word crisp is useful in CET-6 reading, listening, or writing practice.",
        "Try typing crisp three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-p。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：脆的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“脆的”？",
        "answer": "crisp"
      }
    },
    "dedicate": {
      "zh": "奉献；致力于",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•d•c•t•",
      "reviewPrompts": [
        "看到中文“奉献；致力于”时，尝试立刻拼出 dedicate。",
        "把 dedicate 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，dedicate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word dedicate when I talk about 奉献；致力于.",
        "The word dedicate is useful in CET-6 reading, listening, or writing practice.",
        "Try typing dedicate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：奉献。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“奉献”？",
        "answer": "dedicate"
      }
    },
    "defy": {
      "zh": "违抗；藐视",
      "pos": "",
      "tag": "CET-6",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "d•fy",
      "reviewPrompts": [
        "看到中文“违抗；藐视”时，尝试立刻拼出 defy。",
        "把 defy 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，defy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word defy when I talk about 违抗；藐视.",
        "The word defy is useful in CET-6 reading, listening, or writing practice.",
        "Try typing defy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 4，先记首尾字母 d-y。",
        "元音 1 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：违抗。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“违抗”？",
        "answer": "defy"
      }
    },
    "deprive": {
      "zh": "剥夺；使丧失",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "d•pr•v•",
      "reviewPrompts": [
        "看到中文“剥夺；使丧失”时，尝试立刻拼出 deprive。",
        "把 deprive 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，deprive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word deprive when I talk about 剥夺；使丧失.",
        "The word deprive is useful in CET-6 reading, listening, or writing practice.",
        "Try typing deprive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 7，先记首尾字母 d-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：剥夺。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“剥夺”？",
        "answer": "deprive"
      }
    },
    "destiny": {
      "zh": "命运；天命",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "d•st•ny",
      "reviewPrompts": [
        "看到中文“命运；天命”时，尝试立刻拼出 destiny。",
        "把 destiny 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，destiny适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word destiny when I talk about 命运；天命.",
        "The word destiny is useful in CET-6 reading, listening, or writing practice.",
        "Try typing destiny three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 7，先记首尾字母 d-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：命运。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“命运”？",
        "answer": "destiny"
      }
    },
    "dilemma": {
      "zh": "困境；两难",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "d•l•mm•",
      "reviewPrompts": [
        "看到中文“困境；两难”时，尝试立刻拼出 dilemma。",
        "把 dilemma 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，dilemma适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word dilemma when I talk about 困境；两难.",
        "The word dilemma is useful in CET-6 reading, listening, or writing practice.",
        "Try typing dilemma three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 7，先记首尾字母 d-a。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：困境。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“困境”？",
        "answer": "dilemma"
      }
    },
    "dilute": {
      "zh": "稀释；冲淡",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•l•t•",
      "reviewPrompts": [
        "看到中文“稀释；冲淡”时，尝试立刻拼出 dilute。",
        "把 dilute 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，dilute适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word dilute when I talk about 稀释；冲淡.",
        "The word dilute is useful in CET-6 reading, listening, or writing practice.",
        "Try typing dilute three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：稀释。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“稀释”？",
        "answer": "dilute"
      }
    },
    "dismay": {
      "zh": "使沮丧； dismay",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•sm•y",
      "reviewPrompts": [
        "看到中文“使沮丧； dismay”时，尝试立刻拼出 dismay。",
        "把 dismay 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，dismay适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word dismay when I talk about 使沮丧； dismay.",
        "The word dismay is useful in CET-6 reading, listening, or writing practice.",
        "Try typing dismay three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：使沮丧。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“使沮丧”？",
        "answer": "dismay"
      }
    },
    "disperse": {
      "zh": "分散；驱散",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•sp•rs•",
      "reviewPrompts": [
        "看到中文“分散；驱散”时，尝试立刻拼出 disperse。",
        "把 disperse 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，disperse适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word disperse when I talk about 分散；驱散.",
        "The word disperse is useful in CET-6 reading, listening, or writing practice.",
        "Try typing disperse three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：分散。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“分散”？",
        "answer": "disperse"
      }
    },
    "drought": {
      "zh": "干旱；旱灾",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "dr••ght",
      "reviewPrompts": [
        "看到中文“干旱；旱灾”时，尝试立刻拼出 drought。",
        "把 drought 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，drought适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word drought when I talk about 干旱；旱灾.",
        "The word drought is useful in CET-6 reading, listening, or writing practice.",
        "Try typing drought three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 7，先记首尾字母 d-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：干旱。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“干旱”？",
        "answer": "drought"
      }
    },
    "dwell": {
      "zh": "居住； dwell",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "dw•ll",
      "reviewPrompts": [
        "看到中文“居住； dwell”时，尝试立刻拼出 dwell。",
        "把 dwell 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，dwell适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word dwell when I talk about 居住； dwell.",
        "The word dwell is useful in CET-6 reading, listening, or writing practice.",
        "Try typing dwell three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 5，先记首尾字母 d-l。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：居住。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“居住”？",
        "answer": "dwell"
      }
    },
    "eclipse": {
      "zh": "日食；月食；黯然失色",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•cl•ps•",
      "reviewPrompts": [
        "看到中文“日食；月食；黯然失色”时，尝试立刻拼出 eclipse。",
        "把 eclipse 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，eclipse适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word eclipse when I talk about 日食；月食；黯然失色.",
        "The word eclipse is useful in CET-6 reading, listening, or writing practice.",
        "Try typing eclipse three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：日食。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“日食”？",
        "answer": "eclipse"
      }
    },
    "elapse": {
      "zh": "流逝；消逝",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•l•ps•",
      "reviewPrompts": [
        "看到中文“流逝；消逝”时，尝试立刻拼出 elapse。",
        "把 elapse 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，elapse适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word elapse when I talk about 流逝；消逝.",
        "The word elapse is useful in CET-6 reading, listening, or writing practice.",
        "Try typing elapse three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 6，先记首尾字母 e-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：流逝。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“流逝”？",
        "answer": "elapse"
      }
    },
    "eloquent": {
      "zh": "雄辩的；有口才的",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•l•q••nt",
      "reviewPrompts": [
        "看到中文“雄辩的；有口才的”时，尝试立刻拼出 eloquent。",
        "把 eloquent 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，eloquent适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word eloquent when I talk about 雄辩的；有口才的.",
        "The word eloquent is useful in CET-6 reading, listening, or writing practice.",
        "Try typing eloquent three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-t。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：雄辩的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“雄辩的”？",
        "answer": "eloquent"
      }
    },
    "enchant": {
      "zh": "使着迷；施魔法",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•nch•nt",
      "reviewPrompts": [
        "看到中文“使着迷；施魔法”时，尝试立刻拼出 enchant。",
        "把 enchant 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，enchant适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word enchant when I talk about 使着迷；施魔法.",
        "The word enchant is useful in CET-6 reading, listening, or writing practice.",
        "Try typing enchant three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：使着迷。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“使着迷”？",
        "answer": "enchant"
      }
    },
    "eternal": {
      "zh": "永恒的；不朽的",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•t•rn•l",
      "reviewPrompts": [
        "看到中文“永恒的；不朽的”时，尝试立刻拼出 eternal。",
        "把 eternal 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，eternal适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word eternal when I talk about 永恒的；不朽的.",
        "The word eternal is useful in CET-6 reading, listening, or writing practice.",
        "Try typing eternal three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-l。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：永恒的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“永恒的”？",
        "answer": "eternal"
      }
    },
    "exile": {
      "zh": "流放；放逐",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•x•l•",
      "reviewPrompts": [
        "看到中文“流放；放逐”时，尝试立刻拼出 exile。",
        "把 exile 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，exile适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word exile when I talk about 流放；放逐.",
        "The word exile is useful in CET-6 reading, listening, or writing practice.",
        "Try typing exile three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 5，先记首尾字母 e-e。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：流放。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“流放”？",
        "answer": "exile"
      }
    },
    "fable": {
      "zh": "寓言；传说",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "f•bl•",
      "reviewPrompts": [
        "看到中文“寓言；传说”时，尝试立刻拼出 fable。",
        "把 fable 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，fable适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fable when I talk about 寓言；传说.",
        "The word fable is useful in CET-6 reading, listening, or writing practice.",
        "Try typing fable three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 5，先记首尾字母 f-e。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：寓言。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“寓言”？",
        "answer": "fable"
      }
    },
    "feeble": {
      "zh": "虚弱的；无力的",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "f••bl•",
      "reviewPrompts": [
        "看到中文“虚弱的；无力的”时，尝试立刻拼出 feeble。",
        "把 feeble 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，feeble适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word feeble when I talk about 虚弱的；无力的.",
        "The word feeble is useful in CET-6 reading, listening, or writing practice.",
        "Try typing feeble three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 6，先记首尾字母 f-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：虚弱的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“虚弱的”？",
        "answer": "feeble"
      }
    },
    "flaw": {
      "zh": "瑕疵；缺陷",
      "pos": "",
      "tag": "CET-6",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "fl•w",
      "reviewPrompts": [
        "看到中文“瑕疵；缺陷”时，尝试立刻拼出 flaw。",
        "把 flaw 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，flaw适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word flaw when I talk about 瑕疵；缺陷.",
        "The word flaw is useful in CET-6 reading, listening, or writing practice.",
        "Try typing flaw three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 4，先记首尾字母 f-w。",
        "元音 1 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：瑕疵。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“瑕疵”？",
        "answer": "flaw"
      }
    },
    "fragile": {
      "zh": "脆弱的；易碎的",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "fr•g•l•",
      "reviewPrompts": [
        "看到中文“脆弱的；易碎的”时，尝试立刻拼出 fragile。",
        "把 fragile 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，fragile适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fragile when I talk about 脆弱的；易碎的.",
        "The word fragile is useful in CET-6 reading, listening, or writing practice.",
        "Try typing fragile three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 7，先记首尾字母 f-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：脆弱的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“脆弱的”？",
        "answer": "fragile"
      }
    },
    "friction": {
      "zh": "摩擦；冲突",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "fr•ct••n",
      "reviewPrompts": [
        "看到中文“摩擦；冲突”时，尝试立刻拼出 friction。",
        "把 friction 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，friction适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word friction when I talk about 摩擦；冲突.",
        "The word friction is useful in CET-6 reading, listening, or writing practice.",
        "Try typing friction three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 8，先记首尾字母 f-n。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：摩擦。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“摩擦”？",
        "answer": "friction"
      }
    },
    "gasp": {
      "zh": "喘息；倒抽气",
      "pos": "",
      "tag": "CET-6",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "g•sp",
      "reviewPrompts": [
        "看到中文“喘息；倒抽气”时，尝试立刻拼出 gasp。",
        "把 gasp 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，gasp适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word gasp when I talk about 喘息；倒抽气.",
        "The word gasp is useful in CET-6 reading, listening, or writing practice.",
        "Try typing gasp three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 4，先记首尾字母 g-p。",
        "元音 1 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：喘息。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“喘息”？",
        "answer": "gasp"
      }
    },
    "glitter": {
      "zh": "闪光；闪烁",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "gl•tt•r",
      "reviewPrompts": [
        "看到中文“闪光；闪烁”时，尝试立刻拼出 glitter。",
        "把 glitter 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，glitter适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word glitter when I talk about 闪光；闪烁.",
        "The word glitter is useful in CET-6 reading, listening, or writing practice.",
        "Try typing glitter three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 7，先记首尾字母 g-r。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：闪光。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“闪光”？",
        "answer": "glitter"
      }
    },
    "gloom": {
      "zh": "忧郁；阴暗",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "gl••m",
      "reviewPrompts": [
        "看到中文“忧郁；阴暗”时，尝试立刻拼出 gloom。",
        "把 gloom 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，gloom适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word gloom when I talk about 忧郁；阴暗.",
        "The word gloom is useful in CET-6 reading, listening, or writing practice.",
        "Try typing gloom three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 5，先记首尾字母 g-m。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：忧郁。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“忧郁”？",
        "answer": "gloom"
      }
    },
    "gracious": {
      "zh": "亲切的；仁慈的",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "gr•c•••s",
      "reviewPrompts": [
        "看到中文“亲切的；仁慈的”时，尝试立刻拼出 gracious。",
        "把 gracious 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，gracious适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word gracious when I talk about 亲切的；仁慈的.",
        "The word gracious is useful in CET-6 reading, listening, or writing practice.",
        "Try typing gracious three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 8，先记首尾字母 g-s。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：亲切的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“亲切的”？",
        "answer": "gracious"
      }
    },
    "grim": {
      "zh": "严厉的； grim",
      "pos": "",
      "tag": "CET-6",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "gr•m",
      "reviewPrompts": [
        "看到中文“严厉的； grim”时，尝试立刻拼出 grim。",
        "把 grim 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，grim适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word grim when I talk about 严厉的； grim.",
        "The word grim is useful in CET-6 reading, listening, or writing practice.",
        "Try typing grim three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 4，先记首尾字母 g-m。",
        "元音 1 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：严厉的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“严厉的”？",
        "answer": "grim"
      }
    },
    "handicap": {
      "zh": "障碍；残疾",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "h•nd•c•p",
      "reviewPrompts": [
        "看到中文“障碍；残疾”时，尝试立刻拼出 handicap。",
        "把 handicap 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，handicap适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word handicap when I talk about 障碍；残疾.",
        "The word handicap is useful in CET-6 reading, listening, or writing practice.",
        "Try typing handicap three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 8，先记首尾字母 h-p。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：障碍。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“障碍”？",
        "answer": "handicap"
      }
    },
    "haunt": {
      "zh": "萦绕；出没",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "h••nt",
      "reviewPrompts": [
        "看到中文“萦绕；出没”时，尝试立刻拼出 haunt。",
        "把 haunt 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，haunt适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word haunt when I talk about 萦绕；出没.",
        "The word haunt is useful in CET-6 reading, listening, or writing practice.",
        "Try typing haunt three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 5，先记首尾字母 h-t。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：萦绕。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“萦绕”？",
        "answer": "haunt"
      }
    },
    "hinder": {
      "zh": "阻碍；妨碍",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "h•nd•r",
      "reviewPrompts": [
        "看到中文“阻碍；妨碍”时，尝试立刻拼出 hinder。",
        "把 hinder 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，hinder适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word hinder when I talk about 阻碍；妨碍.",
        "The word hinder is useful in CET-6 reading, listening, or writing practice.",
        "Try typing hinder three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 6，先记首尾字母 h-r。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：阻碍。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“阻碍”？",
        "answer": "hinder"
      }
    },
    "humiliate": {
      "zh": "羞辱；使丢脸",
      "pos": "",
      "tag": "CET-6",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "h•m•l••t•",
      "reviewPrompts": [
        "看到中文“羞辱；使丢脸”时，尝试立刻拼出 humiliate。",
        "把 humiliate 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，humiliate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word humiliate when I talk about 羞辱；使丢脸.",
        "The word humiliate is useful in CET-6 reading, listening, or writing practice.",
        "Try typing humiliate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 9，先记首尾字母 h-e。",
        "元音 5 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：羞辱。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“羞辱”？",
        "answer": "humiliate"
      }
    },
    "illusion": {
      "zh": "幻觉；错觉",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•ll•s••n",
      "reviewPrompts": [
        "看到中文“幻觉；错觉”时，尝试立刻拼出 illusion。",
        "把 illusion 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，illusion适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word illusion when I talk about 幻觉；错觉.",
        "The word illusion is useful in CET-6 reading, listening, or writing practice.",
        "Try typing illusion three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 8，先记首尾字母 i-n。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：幻觉。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“幻觉”？",
        "answer": "illusion"
      }
    },
    "imitate": {
      "zh": "模仿；仿效",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•m•t•t•",
      "reviewPrompts": [
        "看到中文“模仿；仿效”时，尝试立刻拼出 imitate。",
        "把 imitate 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，imitate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word imitate when I talk about 模仿；仿效.",
        "The word imitate is useful in CET-6 reading, listening, or writing practice.",
        "Try typing imitate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 7，先记首尾字母 i-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：模仿。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“模仿”？",
        "answer": "imitate"
      }
    },
    "indignant": {
      "zh": "愤慨的；愤怒的",
      "pos": "",
      "tag": "CET-6",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•nd•gn•nt",
      "reviewPrompts": [
        "看到中文“愤慨的；愤怒的”时，尝试立刻拼出 indignant。",
        "把 indignant 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，indignant适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word indignant when I talk about 愤慨的；愤怒的.",
        "The word indignant is useful in CET-6 reading, listening, or writing practice.",
        "Try typing indignant three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：愤慨的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“愤慨的”？",
        "answer": "indignant"
      }
    },
    "intact": {
      "zh": "完整的； intact",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•nt•ct",
      "reviewPrompts": [
        "看到中文“完整的； intact”时，尝试立刻拼出 intact。",
        "把 intact 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，intact适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word intact when I talk about 完整的； intact.",
        "The word intact is useful in CET-6 reading, listening, or writing practice.",
        "Try typing intact three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 6，先记首尾字母 i-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：完整的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“完整的”？",
        "answer": "intact"
      }
    },
    "intricate": {
      "zh": "复杂的；错综的",
      "pos": "",
      "tag": "CET-6",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•ntr•c•t•",
      "reviewPrompts": [
        "看到中文“复杂的；错综的”时，尝试立刻拼出 intricate。",
        "把 intricate 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，intricate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word intricate when I talk about 复杂的；错综的.",
        "The word intricate is useful in CET-6 reading, listening, or writing practice.",
        "Try typing intricate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：复杂的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“复杂的”？",
        "answer": "intricate"
      }
    },
    "knit": {
      "zh": "编织； knit",
      "pos": "",
      "tag": "CET-6",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "kn•t",
      "reviewPrompts": [
        "看到中文“编织； knit”时，尝试立刻拼出 knit。",
        "把 knit 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，knit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word knit when I talk about 编织； knit.",
        "The word knit is useful in CET-6 reading, listening, or writing practice.",
        "Try typing knit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "K 开头，长度 4，先记首尾字母 k-t。",
        "元音 1 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：编织。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“编织”？",
        "answer": "knit"
      }
    },
    "linger": {
      "zh": "徘徊；逗留",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "l•ng•r",
      "reviewPrompts": [
        "看到中文“徘徊；逗留”时，尝试立刻拼出 linger。",
        "把 linger 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，linger适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word linger when I talk about 徘徊；逗留.",
        "The word linger is useful in CET-6 reading, listening, or writing practice.",
        "Try typing linger three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 6，先记首尾字母 l-r。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：徘徊。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“徘徊”？",
        "answer": "linger"
      }
    },
    "luminous": {
      "zh": "发光的；明亮的",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "l•m•n••s",
      "reviewPrompts": [
        "看到中文“发光的；明亮的”时，尝试立刻拼出 luminous。",
        "把 luminous 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，luminous适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word luminous when I talk about 发光的；明亮的.",
        "The word luminous is useful in CET-6 reading, listening, or writing practice.",
        "Try typing luminous three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 8，先记首尾字母 l-s。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：发光的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“发光的”？",
        "answer": "luminous"
      }
    },
    "majestic": {
      "zh": "雄伟的；壮丽的",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "m•j•st•c",
      "reviewPrompts": [
        "看到中文“雄伟的；壮丽的”时，尝试立刻拼出 majestic。",
        "把 majestic 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，majestic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word majestic when I talk about 雄伟的；壮丽的.",
        "The word majestic is useful in CET-6 reading, listening, or writing practice.",
        "Try typing majestic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 8，先记首尾字母 m-c。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：雄伟的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“雄伟的”？",
        "answer": "majestic"
      }
    },
    "menace": {
      "zh": "威胁；恐吓",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m•n•c•",
      "reviewPrompts": [
        "看到中文“威胁；恐吓”时，尝试立刻拼出 menace。",
        "把 menace 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，menace适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word menace when I talk about 威胁；恐吓.",
        "The word menace is useful in CET-6 reading, listening, or writing practice.",
        "Try typing menace three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：威胁。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“威胁”？",
        "answer": "menace"
      }
    },
    "mingle": {
      "zh": "混合；交往",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m•ngl•",
      "reviewPrompts": [
        "看到中文“混合；交往”时，尝试立刻拼出 mingle。",
        "把 mingle 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，mingle适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word mingle when I talk about 混合；交往.",
        "The word mingle is useful in CET-6 reading, listening, or writing practice.",
        "Try typing mingle three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-e。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：混合。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“混合”？",
        "answer": "mingle"
      }
    },
    "mourn": {
      "zh": "哀悼； mourn",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "m••rn",
      "reviewPrompts": [
        "看到中文“哀悼； mourn”时，尝试立刻拼出 mourn。",
        "把 mourn 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，mourn适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word mourn when I talk about 哀悼； mourn.",
        "The word mourn is useful in CET-6 reading, listening, or writing practice.",
        "Try typing mourn three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 5，先记首尾字母 m-n。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：哀悼。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“哀悼”？",
        "answer": "mourn"
      }
    },
    "neglect": {
      "zh": "忽视；疏忽",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "n•gl•ct",
      "reviewPrompts": [
        "看到中文“忽视；疏忽”时，尝试立刻拼出 neglect。",
        "把 neglect 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，neglect适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word neglect when I talk about 忽视；疏忽.",
        "The word neglect is useful in CET-6 reading, listening, or writing practice.",
        "Try typing neglect three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 7，先记首尾字母 n-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：忽视。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“忽视”？",
        "answer": "neglect"
      }
    },
    "notorious": {
      "zh": "声名狼藉的；臭名昭著的",
      "pos": "",
      "tag": "CET-6",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "n•t•r•••s",
      "reviewPrompts": [
        "看到中文“声名狼藉的；臭名昭著的”时，尝试立刻拼出 notorious。",
        "把 notorious 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，notorious适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word notorious when I talk about 声名狼藉的；臭名昭著的.",
        "The word notorious is useful in CET-6 reading, listening, or writing practice.",
        "Try typing notorious three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 9，先记首尾字母 n-s。",
        "元音 5 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：声名狼藉的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“声名狼藉的”？",
        "answer": "notorious"
      }
    },
    "obscure": {
      "zh": "模糊的； obscure",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•bsc•r•",
      "reviewPrompts": [
        "看到中文“模糊的； obscure”时，尝试立刻拼出 obscure。",
        "把 obscure 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，obscure适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word obscure when I talk about 模糊的； obscure.",
        "The word obscure is useful in CET-6 reading, listening, or writing practice.",
        "Try typing obscure three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 7，先记首尾字母 o-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：模糊的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“模糊的”？",
        "answer": "obscure"
      }
    },
    "ornament": {
      "zh": "装饰品；点缀",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•rn•m•nt",
      "reviewPrompts": [
        "看到中文“装饰品；点缀”时，尝试立刻拼出 ornament。",
        "把 ornament 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，ornament适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ornament when I talk about 装饰品；点缀.",
        "The word ornament is useful in CET-6 reading, listening, or writing practice.",
        "Try typing ornament three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 8，先记首尾字母 o-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：装饰品。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“装饰品”？",
        "answer": "ornament"
      }
    },
    "paradox": {
      "zh": "悖论；矛盾",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p•r•d•x",
      "reviewPrompts": [
        "看到中文“悖论；矛盾”时，尝试立刻拼出 paradox。",
        "把 paradox 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，paradox适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word paradox when I talk about 悖论；矛盾.",
        "The word paradox is useful in CET-6 reading, listening, or writing practice.",
        "Try typing paradox three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-x。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：悖论。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“悖论”？",
        "answer": "paradox"
      }
    },
    "pasture": {
      "zh": "牧场；草原",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p•st•r•",
      "reviewPrompts": [
        "看到中文“牧场；草原”时，尝试立刻拼出 pasture。",
        "把 pasture 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，pasture适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word pasture when I talk about 牧场；草原.",
        "The word pasture is useful in CET-6 reading, listening, or writing practice.",
        "Try typing pasture three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：牧场。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“牧场”？",
        "answer": "pasture"
      }
    },
    "perish": {
      "zh": "灭亡；消亡",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "p•r•sh",
      "reviewPrompts": [
        "看到中文“灭亡；消亡”时，尝试立刻拼出 perish。",
        "把 perish 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，perish适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word perish when I talk about 灭亡；消亡.",
        "The word perish is useful in CET-6 reading, listening, or writing practice.",
        "Try typing perish three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 6，先记首尾字母 p-h。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：灭亡。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“灭亡”？",
        "answer": "perish"
      }
    },
    "plead": {
      "zh": "恳求；辩护",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "pl••d",
      "reviewPrompts": [
        "看到中文“恳求；辩护”时，尝试立刻拼出 plead。",
        "把 plead 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，plead适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word plead when I talk about 恳求；辩护.",
        "The word plead is useful in CET-6 reading, listening, or writing practice.",
        "Try typing plead three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 5，先记首尾字母 p-d。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：恳求。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“恳求”？",
        "answer": "plead"
      }
    },
    "ponder": {
      "zh": "沉思；考虑",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "p•nd•r",
      "reviewPrompts": [
        "看到中文“沉思；考虑”时，尝试立刻拼出 ponder。",
        "把 ponder 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，ponder适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ponder when I talk about 沉思；考虑.",
        "The word ponder is useful in CET-6 reading, listening, or writing practice.",
        "Try typing ponder three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 6，先记首尾字母 p-r。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：沉思。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“沉思”？",
        "answer": "ponder"
      }
    },
    "preach": {
      "zh": " preach",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "pr••ch",
      "reviewPrompts": [
        "看到中文“ preach”时，尝试立刻拼出 preach。",
        "把 preach 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，preach适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word preach when I talk about  preach.",
        "The word preach is useful in CET-6 reading, listening, or writing practice.",
        "Try typing preach three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 6，先记首尾字母 p-h。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词： preach。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ preach”？",
        "answer": "preach"
      }
    },
    "precede": {
      "zh": "先于；在之前",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•c•d•",
      "reviewPrompts": [
        "看到中文“先于；在之前”时，尝试立刻拼出 precede。",
        "把 precede 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，precede适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word precede when I talk about 先于；在之前.",
        "The word precede is useful in CET-6 reading, listening, or writing practice.",
        "Try typing precede three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：先于。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“先于”？",
        "answer": "precede"
      }
    },
    "prophet": {
      "zh": "先知；预言家",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•ph•t",
      "reviewPrompts": [
        "看到中文“先知；预言家”时，尝试立刻拼出 prophet。",
        "把 prophet 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，prophet适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word prophet when I talk about 先知；预言家.",
        "The word prophet is useful in CET-6 reading, listening, or writing practice.",
        "Try typing prophet three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：先知。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“先知”？",
        "answer": "prophet"
      }
    },
    "radiant": {
      "zh": "光芒四射的；容光焕发的",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r•d••nt",
      "reviewPrompts": [
        "看到中文“光芒四射的；容光焕发的”时，尝试立刻拼出 radiant。",
        "把 radiant 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，radiant适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word radiant when I talk about 光芒四射的；容光焕发的.",
        "The word radiant is useful in CET-6 reading, listening, or writing practice.",
        "Try typing radiant three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：光芒四射的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“光芒四射的”？",
        "answer": "radiant"
      }
    },
    "realm": {
      "zh": "领域；王国",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "r••lm",
      "reviewPrompts": [
        "看到中文“领域；王国”时，尝试立刻拼出 realm。",
        "把 realm 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，realm适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word realm when I talk about 领域；王国.",
        "The word realm is useful in CET-6 reading, listening, or writing practice.",
        "Try typing realm three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 5，先记首尾字母 r-m。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：领域。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“领域”？",
        "answer": "realm"
      }
    },
    "reap": {
      "zh": "收获；收割",
      "pos": "",
      "tag": "CET-6",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "r••p",
      "reviewPrompts": [
        "看到中文“收获；收割”时，尝试立刻拼出 reap。",
        "把 reap 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，reap适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word reap when I talk about 收获；收割.",
        "The word reap is useful in CET-6 reading, listening, or writing practice.",
        "Try typing reap three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 4，先记首尾字母 r-p。",
        "元音 2 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：收获。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“收获”？",
        "answer": "reap"
      }
    },
    "rejoice": {
      "zh": "喜悦；高兴",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r•j••c•",
      "reviewPrompts": [
        "看到中文“喜悦；高兴”时，尝试立刻拼出 rejoice。",
        "把 rejoice 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，rejoice适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word rejoice when I talk about 喜悦；高兴.",
        "The word rejoice is useful in CET-6 reading, listening, or writing practice.",
        "Try typing rejoice three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：喜悦。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“喜悦”？",
        "answer": "rejoice"
      }
    },
    "relish": {
      "zh": " relish",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "r•l•sh",
      "reviewPrompts": [
        "看到中文“ relish”时，尝试立刻拼出 relish。",
        "把 relish 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，relish适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word relish when I talk about  relish.",
        "The word relish is useful in CET-6 reading, listening, or writing practice.",
        "Try typing relish three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-h。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词： relish。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ relish”？",
        "answer": "relish"
      }
    },
    "savage": {
      "zh": "野蛮的； savage",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "s•v•g•",
      "reviewPrompts": [
        "看到中文“野蛮的； savage”时，尝试立刻拼出 savage。",
        "把 savage 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，savage适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word savage when I talk about 野蛮的； savage.",
        "The word savage is useful in CET-6 reading, listening, or writing practice.",
        "Try typing savage three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：野蛮的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“野蛮的”？",
        "answer": "savage"
      }
    },
    "scorn": {
      "zh": "蔑视；嘲笑",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "sc•rn",
      "reviewPrompts": [
        "看到中文“蔑视；嘲笑”时，尝试立刻拼出 scorn。",
        "把 scorn 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，scorn适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word scorn when I talk about 蔑视；嘲笑.",
        "The word scorn is useful in CET-6 reading, listening, or writing practice.",
        "Try typing scorn three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 5，先记首尾字母 s-n。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：蔑视。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“蔑视”？",
        "answer": "scorn"
      }
    },
    "serene": {
      "zh": "宁静的；安详的",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "s•r•n•",
      "reviewPrompts": [
        "看到中文“宁静的；安详的”时，尝试立刻拼出 serene。",
        "把 serene 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，serene适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word serene when I talk about 宁静的；安详的.",
        "The word serene is useful in CET-6 reading, listening, or writing practice.",
        "Try typing serene three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：宁静的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“宁静的”？",
        "answer": "serene"
      }
    },
    "shrewd": {
      "zh": "精明的； shrewd",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "shr•wd",
      "reviewPrompts": [
        "看到中文“精明的； shrewd”时，尝试立刻拼出 shrewd。",
        "把 shrewd 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，shrewd适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word shrewd when I talk about 精明的； shrewd.",
        "The word shrewd is useful in CET-6 reading, listening, or writing practice.",
        "Try typing shrewd three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-d。",
        "元音 1 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：精明的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“精明的”？",
        "answer": "shrewd"
      }
    },
    "soar": {
      "zh": "翱翔；高飞",
      "pos": "",
      "tag": "CET-6",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "s••r",
      "reviewPrompts": [
        "看到中文“翱翔；高飞”时，尝试立刻拼出 soar。",
        "把 soar 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，soar适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word soar when I talk about 翱翔；高飞.",
        "The word soar is useful in CET-6 reading, listening, or writing practice.",
        "Try typing soar three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 4，先记首尾字母 s-r。",
        "元音 2 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：翱翔。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“翱翔”？",
        "answer": "soar"
      }
    },
    "solitude": {
      "zh": "孤独； solitude",
      "pos": "",
      "tag": "CET-6",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "s•l•t•d•",
      "reviewPrompts": [
        "看到中文“孤独； solitude”时，尝试立刻拼出 solitude。",
        "把 solitude 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，solitude适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word solitude when I talk about 孤独； solitude.",
        "The word solitude is useful in CET-6 reading, listening, or writing practice.",
        "Try typing solitude three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：孤独。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“孤独”？",
        "answer": "solitude"
      }
    },
    "sparkle": {
      "zh": "闪闪发光",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "sp•rkl•",
      "reviewPrompts": [
        "看到中文“闪闪发光”时，尝试立刻拼出 sparkle。",
        "把 sparkle 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，sparkle适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word sparkle when I talk about 闪闪发光.",
        "The word sparkle is useful in CET-6 reading, listening, or writing practice.",
        "Try typing sparkle three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-e。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：闪闪发光。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“闪闪发光”？",
        "answer": "sparkle"
      }
    },
    "stroll": {
      "zh": "漫步；闲逛",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "str•ll",
      "reviewPrompts": [
        "看到中文“漫步；闲逛”时，尝试立刻拼出 stroll。",
        "把 stroll 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，stroll适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word stroll when I talk about 漫步；闲逛.",
        "The word stroll is useful in CET-6 reading, listening, or writing practice.",
        "Try typing stroll three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-l。",
        "元音 1 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：漫步。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“漫步”？",
        "answer": "stroll"
      }
    },
    "swamp": {
      "zh": "沼泽； swamp",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "sw•mp",
      "reviewPrompts": [
        "看到中文“沼泽； swamp”时，尝试立刻拼出 swamp。",
        "把 swamp 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，swamp适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word swamp when I talk about 沼泽； swamp.",
        "The word swamp is useful in CET-6 reading, listening, or writing practice.",
        "Try typing swamp three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 5，先记首尾字母 s-p。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：沼泽。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“沼泽”？",
        "answer": "swamp"
      }
    },
    "swift": {
      "zh": "迅速的； swift",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "sw•ft",
      "reviewPrompts": [
        "看到中文“迅速的； swift”时，尝试立刻拼出 swift。",
        "把 swift 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，swift适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word swift when I talk about 迅速的； swift.",
        "The word swift is useful in CET-6 reading, listening, or writing practice.",
        "Try typing swift three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 5，先记首尾字母 s-t。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：迅速的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“迅速的”？",
        "answer": "swift"
      }
    },
    "tangle": {
      "zh": "纠缠； tangle",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "t•ngl•",
      "reviewPrompts": [
        "看到中文“纠缠； tangle”时，尝试立刻拼出 tangle。",
        "把 tangle 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，tangle适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word tangle when I talk about 纠缠； tangle.",
        "The word tangle is useful in CET-6 reading, listening, or writing practice.",
        "Try typing tangle three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 6，先记首尾字母 t-e。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：纠缠。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“纠缠”？",
        "answer": "tangle"
      }
    },
    "thrive": {
      "zh": "繁荣；兴旺",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "thr•v•",
      "reviewPrompts": [
        "看到中文“繁荣；兴旺”时，尝试立刻拼出 thrive。",
        "把 thrive 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，thrive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word thrive when I talk about 繁荣；兴旺.",
        "The word thrive is useful in CET-6 reading, listening, or writing practice.",
        "Try typing thrive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 6，先记首尾字母 t-e。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：繁荣。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“繁荣”？",
        "answer": "thrive"
      }
    },
    "timid": {
      "zh": "胆小的；害羞的",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "t•m•d",
      "reviewPrompts": [
        "看到中文“胆小的；害羞的”时，尝试立刻拼出 timid。",
        "把 timid 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，timid适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word timid when I talk about 胆小的；害羞的.",
        "The word timid is useful in CET-6 reading, listening, or writing practice.",
        "Try typing timid three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 5，先记首尾字母 t-d。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：胆小的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“胆小的”？",
        "answer": "timid"
      }
    },
    "torture": {
      "zh": "折磨；酷刑",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "t•rt•r•",
      "reviewPrompts": [
        "看到中文“折磨；酷刑”时，尝试立刻拼出 torture。",
        "把 torture 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，torture适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word torture when I talk about 折磨；酷刑.",
        "The word torture is useful in CET-6 reading, listening, or writing practice.",
        "Try typing torture three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：折磨。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“折磨”？",
        "answer": "torture"
      }
    },
    "tribute": {
      "zh": " tribute",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "tr•b•t•",
      "reviewPrompts": [
        "看到中文“ tribute”时，尝试立刻拼出 tribute。",
        "把 tribute 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，tribute适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word tribute when I talk about  tribute.",
        "The word tribute is useful in CET-6 reading, listening, or writing practice.",
        "Try typing tribute three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词： tribute。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ tribute”？",
        "answer": "tribute"
      }
    },
    "trigger": {
      "zh": "触发；引起",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "tr•gg•r",
      "reviewPrompts": [
        "看到中文“触发；引起”时，尝试立刻拼出 trigger。",
        "把 trigger 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，trigger适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word trigger when I talk about 触发；引起.",
        "The word trigger is useful in CET-6 reading, listening, or writing practice.",
        "Try typing trigger three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-r。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：触发。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“触发”？",
        "answer": "trigger"
      }
    },
    "uphold": {
      "zh": "维护； uphold",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•ph•ld",
      "reviewPrompts": [
        "看到中文“维护； uphold”时，尝试立刻拼出 uphold。",
        "把 uphold 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，uphold适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word uphold when I talk about 维护； uphold.",
        "The word uphold is useful in CET-6 reading, listening, or writing practice.",
        "Try typing uphold three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "U 开头，长度 6，先记首尾字母 u-d。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：维护。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“维护”？",
        "answer": "uphold"
      }
    },
    "vigor": {
      "zh": "活力；精力",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "v•g•r",
      "reviewPrompts": [
        "看到中文“活力；精力”时，尝试立刻拼出 vigor。",
        "把 vigor 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，vigor适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word vigor when I talk about 活力；精力.",
        "The word vigor is useful in CET-6 reading, listening, or writing practice.",
        "Try typing vigor three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 5，先记首尾字母 v-r。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：活力。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“活力”？",
        "answer": "vigor"
      }
    },
    "vivid": {
      "zh": "生动的；鲜明的",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "v•v•d",
      "reviewPrompts": [
        "看到中文“生动的；鲜明的”时，尝试立刻拼出 vivid。",
        "把 vivid 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，vivid适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word vivid when I talk about 生动的；鲜明的.",
        "The word vivid is useful in CET-6 reading, listening, or writing practice.",
        "Try typing vivid three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 5，先记首尾字母 v-d。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：生动的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“生动的”？",
        "answer": "vivid"
      }
    },
    "vulnerable": {
      "zh": "脆弱的；易受伤的",
      "pos": "",
      "tag": "CET-6",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "v•ln•r•bl•",
      "reviewPrompts": [
        "看到中文“脆弱的；易受伤的”时，尝试立刻拼出 vulnerable。",
        "把 vulnerable 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，vulnerable适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word vulnerable when I talk about 脆弱的；易受伤的.",
        "The word vulnerable is useful in CET-6 reading, listening, or writing practice.",
        "Try typing vulnerable three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 10，先记首尾字母 v-e。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：脆弱的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“脆弱的”？",
        "answer": "vulnerable"
      }
    },
    "warrant": {
      "zh": " warrant",
      "pos": "",
      "tag": "CET-6",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "w•rr•nt",
      "reviewPrompts": [
        "看到中文“ warrant”时，尝试立刻拼出 warrant。",
        "把 warrant 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，warrant适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word warrant when I talk about  warrant.",
        "The word warrant is useful in CET-6 reading, listening, or writing practice.",
        "Try typing warrant three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 7，先记首尾字母 w-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词： warrant。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ warrant”？",
        "answer": "warrant"
      }
    },
    "weary": {
      "zh": "疲倦的；厌倦的",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "w••ry",
      "reviewPrompts": [
        "看到中文“疲倦的；厌倦的”时，尝试立刻拼出 weary。",
        "把 weary 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，weary适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word weary when I talk about 疲倦的；厌倦的.",
        "The word weary is useful in CET-6 reading, listening, or writing practice.",
        "Try typing weary three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 5，先记首尾字母 w-y。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：疲倦的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“疲倦的”？",
        "answer": "weary"
      }
    },
    "wither": {
      "zh": "枯萎；凋谢",
      "pos": "",
      "tag": "CET-6",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "w•th•r",
      "reviewPrompts": [
        "看到中文“枯萎；凋谢”时，尝试立刻拼出 wither。",
        "把 wither 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，wither适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word wither when I talk about 枯萎；凋谢.",
        "The word wither is useful in CET-6 reading, listening, or writing practice.",
        "Try typing wither three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 6，先记首尾字母 w-r。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：枯萎。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“枯萎”？",
        "answer": "wither"
      }
    },
    "wreck": {
      "zh": " wreck",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "wr•ck",
      "reviewPrompts": [
        "看到中文“ wreck”时，尝试立刻拼出 wreck。",
        "把 wreck 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，wreck适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word wreck when I talk about  wreck.",
        "The word wreck is useful in CET-6 reading, listening, or writing practice.",
        "Try typing wreck three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 5，先记首尾字母 w-k。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词： wreck。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ wreck”？",
        "answer": "wreck"
      }
    },
    "yearn": {
      "zh": "渴望； yearning",
      "pos": "",
      "tag": "CET-6",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "y••rn",
      "reviewPrompts": [
        "看到中文“渴望； yearning”时，尝试立刻拼出 yearn。",
        "把 yearn 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，yearn适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word yearn when I talk about 渴望； yearning.",
        "The word yearn is useful in CET-6 reading, listening, or writing practice.",
        "Try typing yearn three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "Y 开头，长度 5，先记首尾字母 y-n。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：渴望。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“渴望”？",
        "answer": "yearn"
      }
    },
    "zeal": {
      "zh": "热情；热心",
      "pos": "",
      "tag": "CET-6",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "z••l",
      "reviewPrompts": [
        "看到中文“热情；热心”时，尝试立刻拼出 zeal。",
        "把 zeal 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，zeal适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word zeal when I talk about 热情；热心.",
        "The word zeal is useful in CET-6 reading, listening, or writing practice.",
        "Try typing zeal three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "Z 开头，长度 4，先记首尾字母 z-l。",
        "元音 2 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：热情。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“热情”？",
        "answer": "zeal"
      }
    },
    "abstract": {
      "zh": "摘要；抽象的",
      "pos": "n./adj.",
      "tag": "论文",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•bstr•ct",
      "reviewPrompts": [
        "看到中文“摘要；抽象的”时，尝试立刻拼出 abstract。",
        "把 abstract 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，abstract适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word abstract when I talk about 摘要；抽象的.",
        "The word abstract is useful in CET-6 reading, listening, or writing practice.",
        "Try typing abstract three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 8，先记首尾字母 a-t。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：摘要。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“摘要”？",
        "answer": "abstract"
      }
    },
    "analysis": {
      "zh": "分析",
      "pos": "n.",
      "tag": "研究",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•n•lys•s",
      "reviewPrompts": [
        "看到中文“分析”时，尝试立刻拼出 analysis。",
        "把 analysis 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，analysis适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word analysis when I talk about 分析.",
        "The word analysis is useful in CET-6 reading, listening, or writing practice.",
        "Try typing analysis three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 8，先记首尾字母 a-s。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：分析。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“分析”？",
        "answer": "analysis"
      }
    },
    "argue": {
      "zh": "论证；争辩",
      "pos": "v.",
      "tag": "议论",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•rg••",
      "reviewPrompts": [
        "看到中文“论证；争辩”时，尝试立刻拼出 argue。",
        "把 argue 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，argue适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word argue when I talk about 论证；争辩.",
        "The word argue is useful in CET-6 reading, listening, or writing practice.",
        "Try typing argue three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-e。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：论证。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“论证”？",
        "answer": "argue"
      }
    },
    "assumption": {
      "zh": "假设；前提",
      "pos": "n.",
      "tag": "逻辑",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•ss•mpt••n",
      "reviewPrompts": [
        "看到中文“假设；前提”时，尝试立刻拼出 assumption。",
        "把 assumption 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，assumption适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word assumption when I talk about 假设；前提.",
        "The word assumption is useful in CET-6 reading, listening, or writing practice.",
        "Try typing assumption three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 10，先记首尾字母 a-n。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：假设。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“假设”？",
        "answer": "assumption"
      }
    },
    "cite": {
      "zh": "引用；举例",
      "pos": "v.",
      "tag": "论文",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "c•t•",
      "reviewPrompts": [
        "看到中文“引用；举例”时，尝试立刻拼出 cite。",
        "把 cite 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，cite适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cite when I talk about 引用；举例.",
        "The word cite is useful in CET-6 reading, listening, or writing practice.",
        "Try typing cite three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 4，先记首尾字母 c-e。",
        "元音 2 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：引用。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“引用”？",
        "answer": "cite"
      }
    },
    "clarify": {
      "zh": "澄清；阐明",
      "pos": "v.",
      "tag": "表达",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "cl•r•fy",
      "reviewPrompts": [
        "看到中文“澄清；阐明”时，尝试立刻拼出 clarify。",
        "把 clarify 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，clarify适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word clarify when I talk about 澄清；阐明.",
        "The word clarify is useful in CET-6 reading, listening, or writing practice.",
        "Try typing clarify three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：澄清。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“澄清”？",
        "answer": "clarify"
      }
    },
    "coherent": {
      "zh": "连贯的；一致的",
      "pos": "adj.",
      "tag": "写作",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•h•r•nt",
      "reviewPrompts": [
        "看到中文“连贯的；一致的”时，尝试立刻拼出 coherent。",
        "把 coherent 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，coherent适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word coherent when I talk about 连贯的；一致的.",
        "The word coherent is useful in CET-6 reading, listening, or writing practice.",
        "Try typing coherent three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：连贯的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“连贯的”？",
        "answer": "coherent"
      }
    },
    "compare": {
      "zh": "比较；对照",
      "pos": "v.",
      "tag": "论证",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mp•r•",
      "reviewPrompts": [
        "看到中文“比较；对照”时，尝试立刻拼出 compare。",
        "把 compare 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，compare适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word compare when I talk about 比较；对照.",
        "The word compare is useful in CET-6 reading, listening, or writing practice.",
        "Try typing compare three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：比较。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“比较”？",
        "answer": "compare"
      }
    },
    "conclude": {
      "zh": "总结；断定",
      "pos": "v.",
      "tag": "结论",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ncl•d•",
      "reviewPrompts": [
        "看到中文“总结；断定”时，尝试立刻拼出 conclude。",
        "把 conclude 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，conclude适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word conclude when I talk about 总结；断定.",
        "The word conclude is useful in CET-6 reading, listening, or writing practice.",
        "Try typing conclude three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：总结。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“总结”？",
        "answer": "conclude"
      }
    },
    "contrast": {
      "zh": "对比；差异",
      "pos": "n./v.",
      "tag": "论证",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ntr•st",
      "reviewPrompts": [
        "看到中文“对比；差异”时，尝试立刻拼出 contrast。",
        "把 contrast 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，contrast适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word contrast when I talk about 对比；差异.",
        "The word contrast is useful in CET-6 reading, listening, or writing practice.",
        "Try typing contrast three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-t。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：对比。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“对比”？",
        "answer": "contrast"
      }
    },
    "correlation": {
      "zh": "相关性",
      "pos": "n.",
      "tag": "统计",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "c•rr•l•t••n",
      "reviewPrompts": [
        "看到中文“相关性”时，尝试立刻拼出 correlation。",
        "把 correlation 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，correlation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word correlation when I talk about 相关性.",
        "The word correlation is useful in CET-6 reading, listening, or writing practice.",
        "Try typing correlation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 11，先记首尾字母 c-n。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：相关性。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“相关性”？",
        "answer": "correlation"
      }
    },
    "data": {
      "zh": "数据",
      "pos": "n.",
      "tag": "研究",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "d•t•",
      "reviewPrompts": [
        "看到中文“数据”时，尝试立刻拼出 data。",
        "把 data 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，data适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word data when I talk about 数据.",
        "The word data is useful in CET-6 reading, listening, or writing practice.",
        "Try typing data three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 4，先记首尾字母 d-a。",
        "元音 2 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：数据。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“数据”？",
        "answer": "data"
      }
    },
    "define": {
      "zh": "定义；说明",
      "pos": "v.",
      "tag": "论文",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•f•n•",
      "reviewPrompts": [
        "看到中文“定义；说明”时，尝试立刻拼出 define。",
        "把 define 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，define适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word define when I talk about 定义；说明.",
        "The word define is useful in CET-6 reading, listening, or writing practice.",
        "Try typing define three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：定义。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“定义”？",
        "answer": "define"
      }
    },
    "demonstrate": {
      "zh": "证明；展示",
      "pos": "v.",
      "tag": "论证",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "d•m•nstr•t•",
      "reviewPrompts": [
        "看到中文“证明；展示”时，尝试立刻拼出 demonstrate。",
        "把 demonstrate 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，demonstrate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word demonstrate when I talk about 证明；展示.",
        "The word demonstrate is useful in CET-6 reading, listening, or writing practice.",
        "Try typing demonstrate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 11，先记首尾字母 d-e。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：证明。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“证明”？",
        "answer": "demonstrate"
      }
    },
    "derive": {
      "zh": "得到；起源于",
      "pos": "v.",
      "tag": "逻辑",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•r•v•",
      "reviewPrompts": [
        "看到中文“得到；起源于”时，尝试立刻拼出 derive。",
        "把 derive 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，derive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word derive when I talk about 得到；起源于.",
        "The word derive is useful in CET-6 reading, listening, or writing practice.",
        "Try typing derive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：得到。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“得到”？",
        "answer": "derive"
      }
    },
    "evidence": {
      "zh": "证据",
      "pos": "n.",
      "tag": "论证",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•v•d•nc•",
      "reviewPrompts": [
        "看到中文“证据”时，尝试立刻拼出 evidence。",
        "把 evidence 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，evidence适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word evidence when I talk about 证据.",
        "The word evidence is useful in CET-6 reading, listening, or writing practice.",
        "Try typing evidence three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：证据。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“证据”？",
        "answer": "evidence"
      }
    },
    "hypothesis": {
      "zh": "假设",
      "pos": "n.",
      "tag": "研究",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "hyp•th•s•s",
      "reviewPrompts": [
        "看到中文“假设”时，尝试立刻拼出 hypothesis。",
        "把 hypothesis 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，hypothesis适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word hypothesis when I talk about 假设.",
        "The word hypothesis is useful in CET-6 reading, listening, or writing practice.",
        "Try typing hypothesis three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 10，先记首尾字母 h-s。",
        "元音 3 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：假设。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“假设”？",
        "answer": "hypothesis"
      }
    },
    "illustrate": {
      "zh": "说明；阐明",
      "pos": "v.",
      "tag": "举例",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•ll•str•t•",
      "reviewPrompts": [
        "看到中文“说明；阐明”时，尝试立刻拼出 illustrate。",
        "把 illustrate 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，illustrate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word illustrate when I talk about 说明；阐明.",
        "The word illustrate is useful in CET-6 reading, listening, or writing practice.",
        "Try typing illustrate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 10，先记首尾字母 i-e。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：说明。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“说明”？",
        "answer": "illustrate"
      }
    },
    "imply": {
      "zh": "暗示；意味着",
      "pos": "v.",
      "tag": "逻辑",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•mply",
      "reviewPrompts": [
        "看到中文“暗示；意味着”时，尝试立刻拼出 imply。",
        "把 imply 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，imply适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word imply when I talk about 暗示；意味着.",
        "The word imply is useful in CET-6 reading, listening, or writing practice.",
        "Try typing imply three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 5，先记首尾字母 i-y。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：暗示。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“暗示”？",
        "answer": "imply"
      }
    },
    "indicate": {
      "zh": "表明；指出",
      "pos": "v.",
      "tag": "图表",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•nd•c•t•",
      "reviewPrompts": [
        "看到中文“表明；指出”时，尝试立刻拼出 indicate。",
        "把 indicate 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，indicate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word indicate when I talk about 表明；指出.",
        "The word indicate is useful in CET-6 reading, listening, or writing practice.",
        "Try typing indicate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 8，先记首尾字母 i-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：表明。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“表明”？",
        "answer": "indicate"
      }
    },
    "interpret": {
      "zh": "解释；口译",
      "pos": "v.",
      "tag": "研究",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•nt•rpr•t",
      "reviewPrompts": [
        "看到中文“解释；口译”时，尝试立刻拼出 interpret。",
        "把 interpret 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，interpret适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word interpret when I talk about 解释；口译.",
        "The word interpret is useful in CET-6 reading, listening, or writing practice.",
        "Try typing interpret three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：解释。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“解释”？",
        "answer": "interpret"
      }
    },
    "methodology": {
      "zh": "方法论",
      "pos": "n.",
      "tag": "研究",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "m•th•d•l•gy",
      "reviewPrompts": [
        "看到中文“方法论”时，尝试立刻拼出 methodology。",
        "把 methodology 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，methodology适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word methodology when I talk about 方法论.",
        "The word methodology is useful in CET-6 reading, listening, or writing practice.",
        "Try typing methodology three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 11，先记首尾字母 m-y。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：方法论。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“方法论”？",
        "answer": "methodology"
      }
    },
    "objective": {
      "zh": "客观的；目标",
      "pos": "adj./n.",
      "tag": "论文",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•bj•ct•v•",
      "reviewPrompts": [
        "看到中文“客观的；目标”时，尝试立刻拼出 objective。",
        "把 objective 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，objective适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word objective when I talk about 客观的；目标.",
        "The word objective is useful in CET-6 reading, listening, or writing practice.",
        "Try typing objective three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 9，先记首尾字母 o-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：客观的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“客观的”？",
        "answer": "objective"
      }
    },
    "paragraph": {
      "zh": "段落",
      "pos": "n.",
      "tag": "写作",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "p•r•gr•ph",
      "reviewPrompts": [
        "看到中文“段落”时，尝试立刻拼出 paragraph。",
        "把 paragraph 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，paragraph适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word paragraph when I talk about 段落.",
        "The word paragraph is useful in CET-6 reading, listening, or writing practice.",
        "Try typing paragraph three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 9，先记首尾字母 p-h。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：段落。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“段落”？",
        "answer": "paragraph"
      }
    },
    "agenda": {
      "zh": "议程；待办事项",
      "pos": "n.",
      "tag": "会议",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•g•nd•",
      "reviewPrompts": [
        "看到中文“议程；待办事项”时，尝试立刻拼出 agenda。",
        "把 agenda 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，agenda适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word agenda when I talk about 议程；待办事项.",
        "The word agenda is useful in CET-6 reading, listening, or writing practice.",
        "Try typing agenda three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-a。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：议程。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“议程”？",
        "answer": "agenda"
      }
    },
    "align": {
      "zh": "使一致；对齐",
      "pos": "v.",
      "tag": "协作",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•l•gn",
      "reviewPrompts": [
        "看到中文“使一致；对齐”时，尝试立刻拼出 align。",
        "把 align 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，align适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word align when I talk about 使一致；对齐.",
        "The word align is useful in CET-6 reading, listening, or writing practice.",
        "Try typing align three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-n。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：使一致。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“使一致”？",
        "answer": "align"
      }
    },
    "annual": {
      "zh": "年度的",
      "pos": "adj.",
      "tag": "时间",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•nn••l",
      "reviewPrompts": [
        "看到中文“年度的”时，尝试立刻拼出 annual。",
        "把 annual 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，annual适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word annual when I talk about 年度的.",
        "The word annual is useful in CET-6 reading, listening, or writing practice.",
        "Try typing annual three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-l。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：年度的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“年度的”？",
        "answer": "annual"
      }
    },
    "approve": {
      "zh": "批准；认可",
      "pos": "v.",
      "tag": "流程",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•ppr•v•",
      "reviewPrompts": [
        "看到中文“批准；认可”时，尝试立刻拼出 approve。",
        "把 approve 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，approve适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word approve when I talk about 批准；认可.",
        "The word approve is useful in CET-6 reading, listening, or writing practice.",
        "Try typing approve three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：批准。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“批准”？",
        "answer": "approve"
      }
    },
    "asset": {
      "zh": "资产；有价值的人",
      "pos": "n.",
      "tag": "财务",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•ss•t",
      "reviewPrompts": [
        "看到中文“资产；有价值的人”时，尝试立刻拼出 asset。",
        "把 asset 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，asset适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word asset when I talk about 资产；有价值的人.",
        "The word asset is useful in CET-6 reading, listening, or writing practice.",
        "Try typing asset three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-t。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：资产。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“资产”？",
        "answer": "asset"
      }
    },
    "audit": {
      "zh": "审计；检查",
      "pos": "n./v.",
      "tag": "财务",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "••d•t",
      "reviewPrompts": [
        "看到中文“审计；检查”时，尝试立刻拼出 audit。",
        "把 audit 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，audit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word audit when I talk about 审计；检查.",
        "The word audit is useful in CET-6 reading, listening, or writing practice.",
        "Try typing audit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-t。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：审计。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“审计”？",
        "answer": "audit"
      }
    },
    "budget": {
      "zh": "预算",
      "pos": "n.",
      "tag": "财务",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "b•dg•t",
      "reviewPrompts": [
        "看到中文“预算”时，尝试立刻拼出 budget。",
        "把 budget 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，budget适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word budget when I talk about 预算.",
        "The word budget is useful in CET-6 reading, listening, or writing practice.",
        "Try typing budget three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 6，先记首尾字母 b-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：预算。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“预算”？",
        "answer": "budget"
      }
    },
    "campaign": {
      "zh": "活动；营销战役",
      "pos": "n.",
      "tag": "市场",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mp••gn",
      "reviewPrompts": [
        "看到中文“活动；营销战役”时，尝试立刻拼出 campaign。",
        "把 campaign 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，campaign适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word campaign when I talk about 活动；营销战役.",
        "The word campaign is useful in CET-6 reading, listening, or writing practice.",
        "Try typing campaign three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-n。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：活动。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“活动”？",
        "answer": "campaign"
      }
    },
    "capacity": {
      "zh": "容量；能力",
      "pos": "n.",
      "tag": "资源",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•p•c•ty",
      "reviewPrompts": [
        "看到中文“容量；能力”时，尝试立刻拼出 capacity。",
        "把 capacity 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，capacity适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word capacity when I talk about 容量；能力.",
        "The word capacity is useful in CET-6 reading, listening, or writing practice.",
        "Try typing capacity three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-y。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：容量。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“容量”？",
        "answer": "capacity"
      }
    },
    "client": {
      "zh": "客户",
      "pos": "n.",
      "tag": "商务",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "cl••nt",
      "reviewPrompts": [
        "看到中文“客户”时，尝试立刻拼出 client。",
        "把 client 拆成 2 个小节练习，减少漏键。",
        "在CET-6分类中，client适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word client when I talk about 客户.",
        "The word client is useful in CET-6 reading, listening, or writing practice.",
        "Try typing client three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：客户。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“客户”？",
        "answer": "client"
      }
    },
    "collaborate": {
      "zh": "合作；协作",
      "pos": "v.",
      "tag": "团队",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "c•ll•b•r•t•",
      "reviewPrompts": [
        "看到中文“合作；协作”时，尝试立刻拼出 collaborate。",
        "把 collaborate 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，collaborate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word collaborate when I talk about 合作；协作.",
        "The word collaborate is useful in CET-6 reading, listening, or writing practice.",
        "Try typing collaborate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 11，先记首尾字母 c-e。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：合作。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“合作”？",
        "answer": "collaborate"
      }
    },
    "commission": {
      "zh": "佣金；委员会",
      "pos": "n.",
      "tag": "商务",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "c•mm•ss••n",
      "reviewPrompts": [
        "看到中文“佣金；委员会”时，尝试立刻拼出 commission。",
        "把 commission 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，commission适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word commission when I talk about 佣金；委员会.",
        "The word commission is useful in CET-6 reading, listening, or writing practice.",
        "Try typing commission three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 10，先记首尾字母 c-n。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：佣金。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“佣金”？",
        "answer": "commission"
      }
    },
    "contract": {
      "zh": "合同；订立合同",
      "pos": "n./v.",
      "tag": "法律",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ntr•ct",
      "reviewPrompts": [
        "看到中文“合同；订立合同”时，尝试立刻拼出 contract。",
        "把 contract 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，contract适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word contract when I talk about 合同；订立合同.",
        "The word contract is useful in CET-6 reading, listening, or writing practice.",
        "Try typing contract three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-t。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：合同。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“合同”？",
        "answer": "contract"
      }
    },
    "deadline": {
      "zh": "截止日期",
      "pos": "n.",
      "tag": "项目",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d••dl•n•",
      "reviewPrompts": [
        "看到中文“截止日期”时，尝试立刻拼出 deadline。",
        "把 deadline 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，deadline适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word deadline when I talk about 截止日期.",
        "The word deadline is useful in CET-6 reading, listening, or writing practice.",
        "Try typing deadline three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：截止日期。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“截止日期”？",
        "answer": "deadline"
      }
    },
    "delegate": {
      "zh": "委派；代表",
      "pos": "v./n.",
      "tag": "管理",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•l•g•t•",
      "reviewPrompts": [
        "看到中文“委派；代表”时，尝试立刻拼出 delegate。",
        "把 delegate 拆成 3 个小节练习，减少漏键。",
        "在CET-6分类中，delegate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word delegate when I talk about 委派；代表.",
        "The word delegate is useful in CET-6 reading, listening, or writing practice.",
        "Try typing delegate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：委派。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“委派”？",
        "answer": "delegate"
      }
    },
    "deliverable": {
      "zh": "交付成果",
      "pos": "n.",
      "tag": "项目",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "d•l•v•r•bl•",
      "reviewPrompts": [
        "看到中文“交付成果”时，尝试立刻拼出 deliverable。",
        "把 deliverable 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，deliverable适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word deliverable when I talk about 交付成果.",
        "The word deliverable is useful in CET-6 reading, listening, or writing practice.",
        "Try typing deliverable three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 11，先记首尾字母 d-e。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：交付成果。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“交付成果”？",
        "answer": "deliverable"
      }
    },
    "department": {
      "zh": "部门",
      "pos": "n.",
      "tag": "组织",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "d•p•rtm•nt",
      "reviewPrompts": [
        "看到中文“部门”时，尝试立刻拼出 department。",
        "把 department 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，department适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word department when I talk about 部门.",
        "The word department is useful in CET-6 reading, listening, or writing practice.",
        "Try typing department three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 10，先记首尾字母 d-t。",
        "元音 3 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：部门。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“部门”？",
        "answer": "department"
      }
    },
    "efficiency": {
      "zh": "效率",
      "pos": "n.",
      "tag": "管理",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•ff•c••ncy",
      "reviewPrompts": [
        "看到中文“效率”时，尝试立刻拼出 efficiency。",
        "把 efficiency 拆成 4 个小节练习，减少漏键。",
        "在CET-6分类中，efficiency适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word efficiency when I talk about 效率.",
        "The word efficiency is useful in CET-6 reading, listening, or writing practice.",
        "Try typing efficiency three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 10，先记首尾字母 e-y。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：效率。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“效率”？",
        "answer": "efficiency"
      }
    }
  },
  "IELTS": {
    "abundance": {
      "zh": "丰富；充裕",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•b•nd•nc•",
      "reviewPrompts": [
        "看到中文“丰富；充裕”时，尝试立刻拼出 abundance。",
        "把 abundance 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，abundance适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word abundance when I talk about 丰富；充裕.",
        "The word abundance is useful in IELTS reading, listening, or writing practice.",
        "Try typing abundance three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：丰富。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“丰富”？",
        "answer": "abundance"
      }
    },
    "accommodate": {
      "zh": "容纳；提供住宿",
      "pos": "",
      "tag": "IELTS",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "•cc•mm•d•t•",
      "reviewPrompts": [
        "看到中文“容纳；提供住宿”时，尝试立刻拼出 accommodate。",
        "把 accommodate 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，accommodate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word accommodate when I talk about 容纳；提供住宿.",
        "The word accommodate is useful in IELTS reading, listening, or writing practice.",
        "Try typing accommodate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 11，先记首尾字母 a-e。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：容纳。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“容纳”？",
        "answer": "accommodate"
      }
    },
    "adolescent": {
      "zh": "青少年",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•d•l•sc•nt",
      "reviewPrompts": [
        "看到中文“青少年”时，尝试立刻拼出 adolescent。",
        "把 adolescent 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，adolescent适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word adolescent when I talk about 青少年.",
        "The word adolescent is useful in IELTS reading, listening, or writing practice.",
        "Try typing adolescent three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 10，先记首尾字母 a-t。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：青少年。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“青少年”？",
        "answer": "adolescent"
      }
    },
    "advocate": {
      "zh": "提倡；倡导者",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•dv•c•t•",
      "reviewPrompts": [
        "看到中文“提倡；倡导者”时，尝试立刻拼出 advocate。",
        "把 advocate 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，advocate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word advocate when I talk about 提倡；倡导者.",
        "The word advocate is useful in IELTS reading, listening, or writing practice.",
        "Try typing advocate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 8，先记首尾字母 a-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：提倡。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“提倡”？",
        "answer": "advocate"
      }
    },
    "aesthetic": {
      "zh": "美学的；审美的",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "••sth•t•c",
      "reviewPrompts": [
        "看到中文“美学的；审美的”时，尝试立刻拼出 aesthetic。",
        "把 aesthetic 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，aesthetic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word aesthetic when I talk about 美学的；审美的.",
        "The word aesthetic is useful in IELTS reading, listening, or writing practice.",
        "Try typing aesthetic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-c。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：美学的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“美学的”？",
        "answer": "aesthetic"
      }
    },
    "alleviate": {
      "zh": "减轻；缓解",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•ll•v••t•",
      "reviewPrompts": [
        "看到中文“减轻；缓解”时，尝试立刻拼出 alleviate。",
        "把 alleviate 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，alleviate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word alleviate when I talk about 减轻；缓解.",
        "The word alleviate is useful in IELTS reading, listening, or writing practice.",
        "Try typing alleviate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-e。",
        "元音 5 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：减轻。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“减轻”？",
        "answer": "alleviate"
      }
    },
    "analogy": {
      "zh": "类比；比喻",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•n•l•gy",
      "reviewPrompts": [
        "看到中文“类比；比喻”时，尝试立刻拼出 analogy。",
        "把 analogy 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，analogy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word analogy when I talk about 类比；比喻.",
        "The word analogy is useful in IELTS reading, listening, or writing practice.",
        "Try typing analogy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-y。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：类比。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“类比”？",
        "answer": "analogy"
      }
    },
    "apparatus": {
      "zh": "仪器；设备",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•pp•r•t•s",
      "reviewPrompts": [
        "看到中文“仪器；设备”时，尝试立刻拼出 apparatus。",
        "把 apparatus 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，apparatus适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word apparatus when I talk about 仪器；设备.",
        "The word apparatus is useful in IELTS reading, listening, or writing practice.",
        "Try typing apparatus three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-s。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：仪器。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“仪器”？",
        "answer": "apparatus"
      }
    },
    "articulate": {
      "zh": "清晰表达的；口齿伶俐的",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•rt•c•l•t•",
      "reviewPrompts": [
        "看到中文“清晰表达的；口齿伶俐的”时，尝试立刻拼出 articulate。",
        "把 articulate 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，articulate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word articulate when I talk about 清晰表达的；口齿伶俐的.",
        "The word articulate is useful in IELTS reading, listening, or writing practice.",
        "Try typing articulate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 10，先记首尾字母 a-e。",
        "元音 5 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：清晰表达的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“清晰表达的”？",
        "answer": "articulate"
      }
    },
    "ascertain": {
      "zh": "查明；确定",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•sc•rt••n",
      "reviewPrompts": [
        "看到中文“查明；确定”时，尝试立刻拼出 ascertain。",
        "把 ascertain 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，ascertain适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ascertain when I talk about 查明；确定.",
        "The word ascertain is useful in IELTS reading, listening, or writing practice.",
        "Try typing ascertain three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-n。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：查明。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“查明”？",
        "answer": "ascertain"
      }
    },
    "bias": {
      "zh": "偏见；偏向",
      "pos": "",
      "tag": "IELTS",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "b••s",
      "reviewPrompts": [
        "看到中文“偏见；偏向”时，尝试立刻拼出 bias。",
        "把 bias 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，bias适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word bias when I talk about 偏见；偏向.",
        "The word bias is useful in IELTS reading, listening, or writing practice.",
        "Try typing bias three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 4，先记首尾字母 b-s。",
        "元音 2 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：偏见。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“偏见”？",
        "answer": "bias"
      }
    },
    "bureaucracy": {
      "zh": "官僚体制",
      "pos": "",
      "tag": "IELTS",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "b•r•••cr•cy",
      "reviewPrompts": [
        "看到中文“官僚体制”时，尝试立刻拼出 bureaucracy。",
        "把 bureaucracy 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，bureaucracy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word bureaucracy when I talk about 官僚体制.",
        "The word bureaucracy is useful in IELTS reading, listening, or writing practice.",
        "Try typing bureaucracy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 11，先记首尾字母 b-y。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：官僚体制。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“官僚体制”？",
        "answer": "bureaucracy"
      }
    },
    "chancellor": {
      "zh": "总理；大臣",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "ch•nc•ll•r",
      "reviewPrompts": [
        "看到中文“总理；大臣”时，尝试立刻拼出 chancellor。",
        "把 chancellor 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，chancellor适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word chancellor when I talk about 总理；大臣.",
        "The word chancellor is useful in IELTS reading, listening, or writing practice.",
        "Try typing chancellor three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 10，先记首尾字母 c-r。",
        "元音 3 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：总理。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“总理”？",
        "answer": "chancellor"
      }
    },
    "coherent": {
      "zh": "连贯的；一致的",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•h•r•nt",
      "reviewPrompts": [
        "看到中文“连贯的；一致的”时，尝试立刻拼出 coherent。",
        "把 coherent 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，coherent适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word coherent when I talk about 连贯的；一致的.",
        "The word coherent is useful in IELTS reading, listening, or writing practice.",
        "Try typing coherent three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：连贯的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“连贯的”？",
        "answer": "coherent"
      }
    },
    "commence": {
      "zh": "开始；着手",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mm•nc•",
      "reviewPrompts": [
        "看到中文“开始；着手”时，尝试立刻拼出 commence。",
        "把 commence 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，commence适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word commence when I talk about 开始；着手.",
        "The word commence is useful in IELTS reading, listening, or writing practice.",
        "Try typing commence three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：开始。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“开始”？",
        "answer": "commence"
      }
    },
    "commodity": {
      "zh": "商品；货物",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "c•mm•d•ty",
      "reviewPrompts": [
        "看到中文“商品；货物”时，尝试立刻拼出 commodity。",
        "把 commodity 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，commodity适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word commodity when I talk about 商品；货物.",
        "The word commodity is useful in IELTS reading, listening, or writing practice.",
        "Try typing commodity three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 9，先记首尾字母 c-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：商品。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“商品”？",
        "answer": "commodity"
      }
    },
    "compensate": {
      "zh": "补偿；赔偿",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "c•mp•ns•t•",
      "reviewPrompts": [
        "看到中文“补偿；赔偿”时，尝试立刻拼出 compensate。",
        "把 compensate 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，compensate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word compensate when I talk about 补偿；赔偿.",
        "The word compensate is useful in IELTS reading, listening, or writing practice.",
        "Try typing compensate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 10，先记首尾字母 c-e。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：补偿。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“补偿”？",
        "answer": "compensate"
      }
    },
    "component": {
      "zh": "组成部分；成分",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "c•mp•n•nt",
      "reviewPrompts": [
        "看到中文“组成部分；成分”时，尝试立刻拼出 component。",
        "把 component 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，component适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word component when I talk about 组成部分；成分.",
        "The word component is useful in IELTS reading, listening, or writing practice.",
        "Try typing component three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 9，先记首尾字母 c-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：组成部分。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“组成部分”？",
        "answer": "component"
      }
    },
    "comprehensive": {
      "zh": "全面的；综合的",
      "pos": "",
      "tag": "IELTS",
      "length": 13,
      "rhythm": "长词分段打",
      "typingPattern": "c•mpr•h•ns•v•",
      "reviewPrompts": [
        "看到中文“全面的；综合的”时，尝试立刻拼出 comprehensive。",
        "把 comprehensive 拆成 5 个小节练习，减少漏键。",
        "在IELTS分类中，comprehensive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word comprehensive when I talk about 全面的；综合的.",
        "The word comprehensive is useful in IELTS reading, listening, or writing practice.",
        "Try typing comprehensive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 13，先记首尾字母 c-e。",
        "元音 5 个，辅音 8 个；打字时注意节奏。",
        "中文释义关键词：全面的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“全面的”？",
        "answer": "comprehensive"
      }
    },
    "conceive": {
      "zh": "构思；设想",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nc••v•",
      "reviewPrompts": [
        "看到中文“构思；设想”时，尝试立刻拼出 conceive。",
        "把 conceive 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，conceive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word conceive when I talk about 构思；设想.",
        "The word conceive is useful in IELTS reading, listening, or writing practice.",
        "Try typing conceive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：构思。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“构思”？",
        "answer": "conceive"
      }
    },
    "confer": {
      "zh": "授予；协商",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nf•r",
      "reviewPrompts": [
        "看到中文“授予；协商”时，尝试立刻拼出 confer。",
        "把 confer 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，confer适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word confer when I talk about 授予；协商.",
        "The word confer is useful in IELTS reading, listening, or writing practice.",
        "Try typing confer three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-r。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：授予。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“授予”？",
        "answer": "confer"
      }
    },
    "consensus": {
      "zh": "共识；一致意见",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "c•ns•ns•s",
      "reviewPrompts": [
        "看到中文“共识；一致意见”时，尝试立刻拼出 consensus。",
        "把 consensus 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，consensus适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word consensus when I talk about 共识；一致意见.",
        "The word consensus is useful in IELTS reading, listening, or writing practice.",
        "Try typing consensus three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 9，先记首尾字母 c-s。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：共识。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“共识”？",
        "answer": "consensus"
      }
    },
    "constitute": {
      "zh": "构成；组成",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "c•nst•t•t•",
      "reviewPrompts": [
        "看到中文“构成；组成”时，尝试立刻拼出 constitute。",
        "把 constitute 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，constitute适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word constitute when I talk about 构成；组成.",
        "The word constitute is useful in IELTS reading, listening, or writing practice.",
        "Try typing constitute three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 10，先记首尾字母 c-e。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：构成。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“构成”？",
        "answer": "constitute"
      }
    },
    "contemporary": {
      "zh": "当代的；同时代的",
      "pos": "",
      "tag": "IELTS",
      "length": 12,
      "rhythm": "长词分段打",
      "typingPattern": "c•nt•mp•r•ry",
      "reviewPrompts": [
        "看到中文“当代的；同时代的”时，尝试立刻拼出 contemporary。",
        "把 contemporary 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，contemporary适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word contemporary when I talk about 当代的；同时代的.",
        "The word contemporary is useful in IELTS reading, listening, or writing practice.",
        "Try typing contemporary three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 12，先记首尾字母 c-y。",
        "元音 4 个，辅音 8 个；打字时注意节奏。",
        "中文释义关键词：当代的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“当代的”？",
        "answer": "contemporary"
      }
    },
    "contradict": {
      "zh": "矛盾；反驳",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "c•ntr•d•ct",
      "reviewPrompts": [
        "看到中文“矛盾；反驳”时，尝试立刻拼出 contradict。",
        "把 contradict 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，contradict适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word contradict when I talk about 矛盾；反驳.",
        "The word contradict is useful in IELTS reading, listening, or writing practice.",
        "Try typing contradict three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 10，先记首尾字母 c-t。",
        "元音 3 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：矛盾。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“矛盾”？",
        "answer": "contradict"
      }
    },
    "controversy": {
      "zh": "争议；争论",
      "pos": "",
      "tag": "IELTS",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "c•ntr•v•rsy",
      "reviewPrompts": [
        "看到中文“争议；争论”时，尝试立刻拼出 controversy。",
        "把 controversy 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，controversy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word controversy when I talk about 争议；争论.",
        "The word controversy is useful in IELTS reading, listening, or writing practice.",
        "Try typing controversy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 11，先记首尾字母 c-y。",
        "元音 3 个，辅音 8 个；打字时注意节奏。",
        "中文释义关键词：争议。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“争议”？",
        "answer": "controversy"
      }
    },
    "coordinate": {
      "zh": "协调；坐标",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "c••rd•n•t•",
      "reviewPrompts": [
        "看到中文“协调；坐标”时，尝试立刻拼出 coordinate。",
        "把 coordinate 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，coordinate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word coordinate when I talk about 协调；坐标.",
        "The word coordinate is useful in IELTS reading, listening, or writing practice.",
        "Try typing coordinate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 10，先记首尾字母 c-e。",
        "元音 5 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：协调。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“协调”？",
        "answer": "coordinate"
      }
    },
    "criteria": {
      "zh": "标准；准则",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "cr•t•r••",
      "reviewPrompts": [
        "看到中文“标准；准则”时，尝试立刻拼出 criteria。",
        "把 criteria 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，criteria适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word criteria when I talk about 标准；准则.",
        "The word criteria is useful in IELTS reading, listening, or writing practice.",
        "Try typing criteria three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-a。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：标准。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“标准”？",
        "answer": "criteria"
      }
    },
    "definite": {
      "zh": "明确的；确定的",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•f•n•t•",
      "reviewPrompts": [
        "看到中文“明确的；确定的”时，尝试立刻拼出 definite。",
        "把 definite 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，definite适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word definite when I talk about 明确的；确定的.",
        "The word definite is useful in IELTS reading, listening, or writing practice.",
        "Try typing definite three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：明确的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“明确的”？",
        "answer": "definite"
      }
    },
    "demographic": {
      "zh": "人口统计的",
      "pos": "",
      "tag": "IELTS",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "d•m•gr•ph•c",
      "reviewPrompts": [
        "看到中文“人口统计的”时，尝试立刻拼出 demographic。",
        "把 demographic 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，demographic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word demographic when I talk about 人口统计的.",
        "The word demographic is useful in IELTS reading, listening, or writing practice.",
        "Try typing demographic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 11，先记首尾字母 d-c。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：人口统计的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“人口统计的”？",
        "answer": "demographic"
      }
    },
    "denote": {
      "zh": "表示；指示",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•n•t•",
      "reviewPrompts": [
        "看到中文“表示；指示”时，尝试立刻拼出 denote。",
        "把 denote 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，denote适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word denote when I talk about 表示；指示.",
        "The word denote is useful in IELTS reading, listening, or writing practice.",
        "Try typing denote three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：表示。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“表示”？",
        "answer": "denote"
      }
    },
    "depict": {
      "zh": "描述；描绘",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•p•ct",
      "reviewPrompts": [
        "看到中文“描述；描绘”时，尝试立刻拼出 depict。",
        "把 depict 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，depict适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word depict when I talk about 描述；描绘.",
        "The word depict is useful in IELTS reading, listening, or writing practice.",
        "Try typing depict three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：描述。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“描述”？",
        "answer": "depict"
      }
    },
    "derive": {
      "zh": "得到；源自",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•r•v•",
      "reviewPrompts": [
        "看到中文“得到；源自”时，尝试立刻拼出 derive。",
        "把 derive 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，derive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word derive when I talk about 得到；源自.",
        "The word derive is useful in IELTS reading, listening, or writing practice.",
        "Try typing derive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：得到。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“得到”？",
        "answer": "derive"
      }
    },
    "diminish": {
      "zh": "减少；缩小",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•m•n•sh",
      "reviewPrompts": [
        "看到中文“减少；缩小”时，尝试立刻拼出 diminish。",
        "把 diminish 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，diminish适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word diminish when I talk about 减少；缩小.",
        "The word diminish is useful in IELTS reading, listening, or writing practice.",
        "Try typing diminish three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-h。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：减少。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“减少”？",
        "answer": "diminish"
      }
    },
    "discrete": {
      "zh": "离散的；分离的",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•scr•t•",
      "reviewPrompts": [
        "看到中文“离散的；分离的”时，尝试立刻拼出 discrete。",
        "把 discrete 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，discrete适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word discrete when I talk about 离散的；分离的.",
        "The word discrete is useful in IELTS reading, listening, or writing practice.",
        "Try typing discrete three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：离散的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“离散的”？",
        "answer": "discrete"
      }
    },
    "discriminate": {
      "zh": "歧视；区分",
      "pos": "",
      "tag": "IELTS",
      "length": 12,
      "rhythm": "长词分段打",
      "typingPattern": "d•scr•m•n•t•",
      "reviewPrompts": [
        "看到中文“歧视；区分”时，尝试立刻拼出 discriminate。",
        "把 discriminate 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，discriminate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word discriminate when I talk about 歧视；区分.",
        "The word discriminate is useful in IELTS reading, listening, or writing practice.",
        "Try typing discriminate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 12，先记首尾字母 d-e。",
        "元音 5 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：歧视。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“歧视”？",
        "answer": "discriminate"
      }
    },
    "displace": {
      "zh": "取代； displaced",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•spl•c•",
      "reviewPrompts": [
        "看到中文“取代； displaced”时，尝试立刻拼出 displace。",
        "把 displace 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，displace适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word displace when I talk about 取代； displaced.",
        "The word displace is useful in IELTS reading, listening, or writing practice.",
        "Try typing displace three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：取代。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“取代”？",
        "answer": "displace"
      }
    },
    "domain": {
      "zh": "领域；范围",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•m••n",
      "reviewPrompts": [
        "看到中文“领域；范围”时，尝试立刻拼出 domain。",
        "把 domain 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，domain适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word domain when I talk about 领域；范围.",
        "The word domain is useful in IELTS reading, listening, or writing practice.",
        "Try typing domain three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-n。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：领域。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“领域”？",
        "answer": "domain"
      }
    },
    "draft": {
      "zh": " draft",
      "pos": "",
      "tag": "IELTS",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "dr•ft",
      "reviewPrompts": [
        "看到中文“ draft”时，尝试立刻拼出 draft。",
        "把 draft 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，draft适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word draft when I talk about  draft.",
        "The word draft is useful in IELTS reading, listening, or writing practice.",
        "Try typing draft three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 5，先记首尾字母 d-t。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词： draft。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ draft”？",
        "answer": "draft"
      }
    },
    "elicit": {
      "zh": "引出； eliciting",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•l•c•t",
      "reviewPrompts": [
        "看到中文“引出； eliciting”时，尝试立刻拼出 elicit。",
        "把 elicit 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，elicit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word elicit when I talk about 引出； eliciting.",
        "The word elicit is useful in IELTS reading, listening, or writing practice.",
        "Try typing elicit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 6，先记首尾字母 e-t。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：引出。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“引出”？",
        "answer": "elicit"
      }
    },
    "empirical": {
      "zh": "经验的；实证的",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•mp•r•c•l",
      "reviewPrompts": [
        "看到中文“经验的；实证的”时，尝试立刻拼出 empirical。",
        "把 empirical 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，empirical适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word empirical when I talk about 经验的；实证的.",
        "The word empirical is useful in IELTS reading, listening, or writing practice.",
        "Try typing empirical three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 9，先记首尾字母 e-l。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：经验的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“经验的”？",
        "answer": "empirical"
      }
    },
    "enhance": {
      "zh": "增强；提高",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•nh•nc•",
      "reviewPrompts": [
        "看到中文“增强；提高”时，尝试立刻拼出 enhance。",
        "把 enhance 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，enhance适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word enhance when I talk about 增强；提高.",
        "The word enhance is useful in IELTS reading, listening, or writing practice.",
        "Try typing enhance three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：增强。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“增强”？",
        "answer": "enhance"
      }
    },
    "enormous": {
      "zh": "巨大的；庞大的",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•n•rm••s",
      "reviewPrompts": [
        "看到中文“巨大的；庞大的”时，尝试立刻拼出 enormous。",
        "把 enormous 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，enormous适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word enormous when I talk about 巨大的；庞大的.",
        "The word enormous is useful in IELTS reading, listening, or writing practice.",
        "Try typing enormous three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-s。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：巨大的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“巨大的”？",
        "answer": "enormous"
      }
    },
    "entity": {
      "zh": "实体；存在",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•nt•ty",
      "reviewPrompts": [
        "看到中文“实体；存在”时，尝试立刻拼出 entity。",
        "把 entity 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，entity适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word entity when I talk about 实体；存在.",
        "The word entity is useful in IELTS reading, listening, or writing practice.",
        "Try typing entity three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 6，先记首尾字母 e-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：实体。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“实体”？",
        "answer": "entity"
      }
    },
    "equilibrium": {
      "zh": "平衡；均衡",
      "pos": "",
      "tag": "IELTS",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "•q••l•br••m",
      "reviewPrompts": [
        "看到中文“平衡；均衡”时，尝试立刻拼出 equilibrium。",
        "把 equilibrium 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，equilibrium适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word equilibrium when I talk about 平衡；均衡.",
        "The word equilibrium is useful in IELTS reading, listening, or writing practice.",
        "Try typing equilibrium three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 11，先记首尾字母 e-m。",
        "元音 6 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：平衡。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“平衡”？",
        "answer": "equilibrium"
      }
    },
    "erode": {
      "zh": "侵蚀；腐蚀",
      "pos": "",
      "tag": "IELTS",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•r•d•",
      "reviewPrompts": [
        "看到中文“侵蚀；腐蚀”时，尝试立刻拼出 erode。",
        "把 erode 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，erode适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word erode when I talk about 侵蚀；腐蚀.",
        "The word erode is useful in IELTS reading, listening, or writing practice.",
        "Try typing erode three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 5，先记首尾字母 e-e。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：侵蚀。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“侵蚀”？",
        "answer": "erode"
      }
    },
    "ethnic": {
      "zh": "种族的；民族的",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•thn•c",
      "reviewPrompts": [
        "看到中文“种族的；民族的”时，尝试立刻拼出 ethnic。",
        "把 ethnic 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，ethnic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ethnic when I talk about 种族的；民族的.",
        "The word ethnic is useful in IELTS reading, listening, or writing practice.",
        "Try typing ethnic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 6，先记首尾字母 e-c。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：种族的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“种族的”？",
        "answer": "ethnic"
      }
    },
    "evolve": {
      "zh": "发展；进化",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•v•lv•",
      "reviewPrompts": [
        "看到中文“发展；进化”时，尝试立刻拼出 evolve。",
        "把 evolve 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，evolve适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word evolve when I talk about 发展；进化.",
        "The word evolve is useful in IELTS reading, listening, or writing practice.",
        "Try typing evolve three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 6，先记首尾字母 e-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：发展。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“发展”？",
        "answer": "evolve"
      }
    },
    "explicit": {
      "zh": "明确的；直截了当的",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•xpl•c•t",
      "reviewPrompts": [
        "看到中文“明确的；直截了当的”时，尝试立刻拼出 explicit。",
        "把 explicit 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，explicit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word explicit when I talk about 明确的；直截了当的.",
        "The word explicit is useful in IELTS reading, listening, or writing practice.",
        "Try typing explicit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：明确的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“明确的”？",
        "answer": "explicit"
      }
    },
    "exploit": {
      "zh": "开发；利用",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•xpl••t",
      "reviewPrompts": [
        "看到中文“开发；利用”时，尝试立刻拼出 exploit。",
        "把 exploit 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，exploit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word exploit when I talk about 开发；利用.",
        "The word exploit is useful in IELTS reading, listening, or writing practice.",
        "Try typing exploit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：开发。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“开发”？",
        "answer": "exploit"
      }
    },
    "facilitate": {
      "zh": "促进；使便利",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "f•c•l•t•t•",
      "reviewPrompts": [
        "看到中文“促进；使便利”时，尝试立刻拼出 facilitate。",
        "把 facilitate 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，facilitate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word facilitate when I talk about 促进；使便利.",
        "The word facilitate is useful in IELTS reading, listening, or writing practice.",
        "Try typing facilitate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 10，先记首尾字母 f-e。",
        "元音 5 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：促进。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“促进”？",
        "answer": "facilitate"
      }
    },
    "fluctuate": {
      "zh": "波动；涨落",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "fl•ct••t•",
      "reviewPrompts": [
        "看到中文“波动；涨落”时，尝试立刻拼出 fluctuate。",
        "把 fluctuate 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，fluctuate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fluctuate when I talk about 波动；涨落.",
        "The word fluctuate is useful in IELTS reading, listening, or writing practice.",
        "Try typing fluctuate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 9，先记首尾字母 f-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：波动。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“波动”？",
        "answer": "fluctuate"
      }
    },
    "formulate": {
      "zh": "规划；制定",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "f•rm•l•t•",
      "reviewPrompts": [
        "看到中文“规划；制定”时，尝试立刻拼出 formulate。",
        "把 formulate 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，formulate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word formulate when I talk about 规划；制定.",
        "The word formulate is useful in IELTS reading, listening, or writing practice.",
        "Try typing formulate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 9，先记首尾字母 f-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：规划。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“规划”？",
        "answer": "formulate"
      }
    },
    "fossil": {
      "zh": "化石；守旧的人",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "f•ss•l",
      "reviewPrompts": [
        "看到中文“化石；守旧的人”时，尝试立刻拼出 fossil。",
        "把 fossil 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，fossil适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fossil when I talk about 化石；守旧的人.",
        "The word fossil is useful in IELTS reading, listening, or writing practice.",
        "Try typing fossil three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 6，先记首尾字母 f-l。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：化石。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“化石”？",
        "answer": "fossil"
      }
    },
    "framework": {
      "zh": "框架；结构",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "fr•m•w•rk",
      "reviewPrompts": [
        "看到中文“框架；结构”时，尝试立刻拼出 framework。",
        "把 framework 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，framework适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word framework when I talk about 框架；结构.",
        "The word framework is useful in IELTS reading, listening, or writing practice.",
        "Try typing framework three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 9，先记首尾字母 f-k。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：框架。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“框架”？",
        "answer": "framework"
      }
    },
    "genome": {
      "zh": "基因组",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "g•n•m•",
      "reviewPrompts": [
        "看到中文“基因组”时，尝试立刻拼出 genome。",
        "把 genome 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，genome适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word genome when I talk about 基因组.",
        "The word genome is useful in IELTS reading, listening, or writing practice.",
        "Try typing genome three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 6，先记首尾字母 g-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：基因组。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“基因组”？",
        "answer": "genome"
      }
    },
    "habitat": {
      "zh": "栖息地",
      "pos": "n.",
      "tag": "生态",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "h•b•t•t",
      "reviewPrompts": [
        "看到中文“栖息地”时，尝试立刻拼出 habitat。",
        "把 habitat 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，habitat适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word habitat when I talk about 栖息地.",
        "The word habitat is useful in IELTS reading, listening, or writing practice.",
        "Try typing habitat three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 7，先记首尾字母 h-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：栖息地。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“栖息地”？",
        "answer": "habitat"
      }
    },
    "hierarchy": {
      "zh": "等级制度；层次",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "h••r•rchy",
      "reviewPrompts": [
        "看到中文“等级制度；层次”时，尝试立刻拼出 hierarchy。",
        "把 hierarchy 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，hierarchy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word hierarchy when I talk about 等级制度；层次.",
        "The word hierarchy is useful in IELTS reading, listening, or writing practice.",
        "Try typing hierarchy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 9，先记首尾字母 h-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：等级制度。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“等级制度”？",
        "answer": "hierarchy"
      }
    },
    "ideology": {
      "zh": "意识形态；思想体系",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•d••l•gy",
      "reviewPrompts": [
        "看到中文“意识形态；思想体系”时，尝试立刻拼出 ideology。",
        "把 ideology 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，ideology适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ideology when I talk about 意识形态；思想体系.",
        "The word ideology is useful in IELTS reading, listening, or writing practice.",
        "Try typing ideology three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 8，先记首尾字母 i-y。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：意识形态。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“意识形态”？",
        "answer": "ideology"
      }
    },
    "immerse": {
      "zh": " immerse",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•mm•rs•",
      "reviewPrompts": [
        "看到中文“ immerse”时，尝试立刻拼出 immerse。",
        "把 immerse 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，immerse适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word immerse when I talk about  immerse.",
        "The word immerse is useful in IELTS reading, listening, or writing practice.",
        "Try typing immerse three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 7，先记首尾字母 i-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词： immerse。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ immerse”？",
        "answer": "immerse"
      }
    },
    "immigrant": {
      "zh": "移民；外来者",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•mm•gr•nt",
      "reviewPrompts": [
        "看到中文“移民；外来者”时，尝试立刻拼出 immigrant。",
        "把 immigrant 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，immigrant适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word immigrant when I talk about 移民；外来者.",
        "The word immigrant is useful in IELTS reading, listening, or writing practice.",
        "Try typing immigrant three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：移民。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“移民”？",
        "answer": "immigrant"
      }
    },
    "implement": {
      "zh": "实施；执行",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•mpl•m•nt",
      "reviewPrompts": [
        "看到中文“实施；执行”时，尝试立刻拼出 implement。",
        "把 implement 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，implement适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word implement when I talk about 实施；执行.",
        "The word implement is useful in IELTS reading, listening, or writing practice.",
        "Try typing implement three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：实施。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“实施”？",
        "answer": "implement"
      }
    },
    "implicit": {
      "zh": "含蓄的；暗示的",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•mpl•c•t",
      "reviewPrompts": [
        "看到中文“含蓄的；暗示的”时，尝试立刻拼出 implicit。",
        "把 implicit 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，implicit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word implicit when I talk about 含蓄的；暗示的.",
        "The word implicit is useful in IELTS reading, listening, or writing practice.",
        "Try typing implicit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 8，先记首尾字母 i-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：含蓄的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“含蓄的”？",
        "answer": "implicit"
      }
    },
    "impose": {
      "zh": " impose",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•mp•s•",
      "reviewPrompts": [
        "看到中文“ impose”时，尝试立刻拼出 impose。",
        "把 impose 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，impose适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word impose when I talk about  impose.",
        "The word impose is useful in IELTS reading, listening, or writing practice.",
        "Try typing impose three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 6，先记首尾字母 i-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词： impose。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ impose”？",
        "answer": "impose"
      }
    },
    "incentive": {
      "zh": "激励；奖励",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•nc•nt•v•",
      "reviewPrompts": [
        "看到中文“激励；奖励”时，尝试立刻拼出 incentive。",
        "把 incentive 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，incentive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word incentive when I talk about 激励；奖励.",
        "The word incentive is useful in IELTS reading, listening, or writing practice.",
        "Try typing incentive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：激励。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“激励”？",
        "answer": "incentive"
      }
    },
    "indigenous": {
      "zh": "土著的；本地的",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•nd•g•n••s",
      "reviewPrompts": [
        "看到中文“土著的；本地的”时，尝试立刻拼出 indigenous。",
        "把 indigenous 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，indigenous适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word indigenous when I talk about 土著的；本地的.",
        "The word indigenous is useful in IELTS reading, listening, or writing practice.",
        "Try typing indigenous three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 10，先记首尾字母 i-s。",
        "元音 5 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：土著的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“土著的”？",
        "answer": "indigenous"
      }
    },
    "infrastructure": {
      "zh": "基础设施",
      "pos": "",
      "tag": "IELTS",
      "length": 14,
      "rhythm": "长词分段打",
      "typingPattern": "•nfr•str•ct•r•",
      "reviewPrompts": [
        "看到中文“基础设施”时，尝试立刻拼出 infrastructure。",
        "把 infrastructure 拆成 5 个小节练习，减少漏键。",
        "在IELTS分类中，infrastructure适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word infrastructure when I talk about 基础设施.",
        "The word infrastructure is useful in IELTS reading, listening, or writing practice.",
        "Try typing infrastructure three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 14，先记首尾字母 i-e。",
        "元音 5 个，辅音 9 个；打字时注意节奏。",
        "中文释义关键词：基础设施。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“基础设施”？",
        "answer": "infrastructure"
      }
    },
    "inherent": {
      "zh": "固有的；内在的",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•nh•r•nt",
      "reviewPrompts": [
        "看到中文“固有的；内在的”时，尝试立刻拼出 inherent。",
        "把 inherent 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，inherent适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word inherent when I talk about 固有的；内在的.",
        "The word inherent is useful in IELTS reading, listening, or writing practice.",
        "Try typing inherent three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 8，先记首尾字母 i-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：固有的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“固有的”？",
        "answer": "inherent"
      }
    },
    "innovation": {
      "zh": "创新；革新",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•nn•v•t••n",
      "reviewPrompts": [
        "看到中文“创新；革新”时，尝试立刻拼出 innovation。",
        "把 innovation 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，innovation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word innovation when I talk about 创新；革新.",
        "The word innovation is useful in IELTS reading, listening, or writing practice.",
        "Try typing innovation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 10，先记首尾字母 i-n。",
        "元音 5 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：创新。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“创新”？",
        "answer": "innovation"
      }
    },
    "integrate": {
      "zh": "整合；融合",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•nt•gr•t•",
      "reviewPrompts": [
        "看到中文“整合；融合”时，尝试立刻拼出 integrate。",
        "把 integrate 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，integrate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word integrate when I talk about 整合；融合.",
        "The word integrate is useful in IELTS reading, listening, or writing practice.",
        "Try typing integrate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：整合。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“整合”？",
        "answer": "integrate"
      }
    },
    "interpret": {
      "zh": "解释；口译",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•nt•rpr•t",
      "reviewPrompts": [
        "看到中文“解释；口译”时，尝试立刻拼出 interpret。",
        "把 interpret 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，interpret适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word interpret when I talk about 解释；口译.",
        "The word interpret is useful in IELTS reading, listening, or writing practice.",
        "Try typing interpret three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：解释。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“解释”？",
        "answer": "interpret"
      }
    },
    "justify": {
      "zh": " justify",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "j•st•fy",
      "reviewPrompts": [
        "看到中文“ justify”时，尝试立刻拼出 justify。",
        "把 justify 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，justify适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word justify when I talk about  justify.",
        "The word justify is useful in IELTS reading, listening, or writing practice.",
        "Try typing justify three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "J 开头，长度 7，先记首尾字母 j-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词： justify。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ justify”？",
        "answer": "justify"
      }
    },
    "legislate": {
      "zh": "立法；制定法律",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "l•g•sl•t•",
      "reviewPrompts": [
        "看到中文“立法；制定法律”时，尝试立刻拼出 legislate。",
        "把 legislate 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，legislate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word legislate when I talk about 立法；制定法律.",
        "The word legislate is useful in IELTS reading, listening, or writing practice.",
        "Try typing legislate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 9，先记首尾字母 l-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：立法。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“立法”？",
        "answer": "legislate"
      }
    },
    "levy": {
      "zh": " levy",
      "pos": "",
      "tag": "IELTS",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "l•vy",
      "reviewPrompts": [
        "看到中文“ levy”时，尝试立刻拼出 levy。",
        "把 levy 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，levy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word levy when I talk about  levy.",
        "The word levy is useful in IELTS reading, listening, or writing practice.",
        "Try typing levy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 4，先记首尾字母 l-y。",
        "元音 1 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词： levy。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ levy”？",
        "answer": "levy"
      }
    },
    "mechanism": {
      "zh": "机制；原理",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "m•ch•n•sm",
      "reviewPrompts": [
        "看到中文“机制；原理”时，尝试立刻拼出 mechanism。",
        "把 mechanism 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，mechanism适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word mechanism when I talk about 机制；原理.",
        "The word mechanism is useful in IELTS reading, listening, or writing practice.",
        "Try typing mechanism three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 9，先记首尾字母 m-m。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：机制。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“机制”？",
        "answer": "mechanism"
      }
    },
    "migrate": {
      "zh": "迁移；移居",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "m•gr•t•",
      "reviewPrompts": [
        "看到中文“迁移；移居”时，尝试立刻拼出 migrate。",
        "把 migrate 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，migrate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word migrate when I talk about 迁移；移居.",
        "The word migrate is useful in IELTS reading, listening, or writing practice.",
        "Try typing migrate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 7，先记首尾字母 m-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：迁移。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“迁移”？",
        "answer": "migrate"
      }
    },
    "negotiate": {
      "zh": "谈判；协商",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "n•g•t••t•",
      "reviewPrompts": [
        "看到中文“谈判；协商”时，尝试立刻拼出 negotiate。",
        "把 negotiate 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，negotiate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word negotiate when I talk about 谈判；协商.",
        "The word negotiate is useful in IELTS reading, listening, or writing practice.",
        "Try typing negotiate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 9，先记首尾字母 n-e。",
        "元音 5 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：谈判。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“谈判”？",
        "answer": "negotiate"
      }
    },
    "notion": {
      "zh": "概念；观念",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "n•t••n",
      "reviewPrompts": [
        "看到中文“概念；观念”时，尝试立刻拼出 notion。",
        "把 notion 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，notion适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word notion when I talk about 概念；观念.",
        "The word notion is useful in IELTS reading, listening, or writing practice.",
        "Try typing notion three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 6，先记首尾字母 n-n。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：概念。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“概念”？",
        "answer": "notion"
      }
    },
    "outcome": {
      "zh": "结果；成果",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "••tc•m•",
      "reviewPrompts": [
        "看到中文“结果；成果”时，尝试立刻拼出 outcome。",
        "把 outcome 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，outcome适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word outcome when I talk about 结果；成果.",
        "The word outcome is useful in IELTS reading, listening, or writing practice.",
        "Try typing outcome three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 7，先记首尾字母 o-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：结果。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“结果”？",
        "answer": "outcome"
      }
    },
    "paradigm": {
      "zh": "范例；范式",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "p•r•d•gm",
      "reviewPrompts": [
        "看到中文“范例；范式”时，尝试立刻拼出 paradigm。",
        "把 paradigm 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，paradigm适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word paradigm when I talk about 范例；范式.",
        "The word paradigm is useful in IELTS reading, listening, or writing practice.",
        "Try typing paradigm three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-m。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：范例。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“范例”？",
        "answer": "paradigm"
      }
    },
    "perceive": {
      "zh": "感知；察觉",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "p•rc••v•",
      "reviewPrompts": [
        "看到中文“感知；察觉”时，尝试立刻拼出 perceive。",
        "把 perceive 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，perceive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word perceive when I talk about 感知；察觉.",
        "The word perceive is useful in IELTS reading, listening, or writing practice.",
        "Try typing perceive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：感知。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“感知”？",
        "answer": "perceive"
      }
    },
    "phenomenon": {
      "zh": "现象；奇迹",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "ph•n•m•n•n",
      "reviewPrompts": [
        "看到中文“现象；奇迹”时，尝试立刻拼出 phenomenon。",
        "把 phenomenon 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，phenomenon适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word phenomenon when I talk about 现象；奇迹.",
        "The word phenomenon is useful in IELTS reading, listening, or writing practice.",
        "Try typing phenomenon three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 10，先记首尾字母 p-n。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：现象。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“现象”？",
        "answer": "phenomenon"
      }
    },
    "philosophy": {
      "zh": "哲学；理念",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "ph•l•s•phy",
      "reviewPrompts": [
        "看到中文“哲学；理念”时，尝试立刻拼出 philosophy。",
        "把 philosophy 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，philosophy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word philosophy when I talk about 哲学；理念.",
        "The word philosophy is useful in IELTS reading, listening, or writing practice.",
        "Try typing philosophy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 10，先记首尾字母 p-y。",
        "元音 3 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：哲学。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“哲学”？",
        "answer": "philosophy"
      }
    },
    "plausible": {
      "zh": "看似合理的",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "pl••s•bl•",
      "reviewPrompts": [
        "看到中文“看似合理的”时，尝试立刻拼出 plausible。",
        "把 plausible 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，plausible适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word plausible when I talk about 看似合理的.",
        "The word plausible is useful in IELTS reading, listening, or writing practice.",
        "Try typing plausible three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 9，先记首尾字母 p-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：看似合理的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“看似合理的”？",
        "answer": "plausible"
      }
    },
    "polarize": {
      "zh": " polarize",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "p•l•r•z•",
      "reviewPrompts": [
        "看到中文“ polarize”时，尝试立刻拼出 polarize。",
        "把 polarize 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，polarize适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word polarize when I talk about  polarize.",
        "The word polarize is useful in IELTS reading, listening, or writing practice.",
        "Try typing polarize three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词： polarize。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ polarize”？",
        "answer": "polarize"
      }
    },
    "potential": {
      "zh": "潜力；潜在的",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "p•t•nt••l",
      "reviewPrompts": [
        "看到中文“潜力；潜在的”时，尝试立刻拼出 potential。",
        "把 potential 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，potential适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word potential when I talk about 潜力；潜在的.",
        "The word potential is useful in IELTS reading, listening, or writing practice.",
        "Try typing potential three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 9，先记首尾字母 p-l。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：潜力。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“潜力”？",
        "answer": "potential"
      }
    },
    "predominant": {
      "zh": "主导的；优势的",
      "pos": "",
      "tag": "IELTS",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "pr•d•m•n•nt",
      "reviewPrompts": [
        "看到中文“主导的；优势的”时，尝试立刻拼出 predominant。",
        "把 predominant 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，predominant适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word predominant when I talk about 主导的；优势的.",
        "The word predominant is useful in IELTS reading, listening, or writing practice.",
        "Try typing predominant three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 11，先记首尾字母 p-t。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：主导的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“主导的”？",
        "answer": "predominant"
      }
    },
    "preliminary": {
      "zh": "初步的；预备的",
      "pos": "",
      "tag": "IELTS",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "pr•l•m•n•ry",
      "reviewPrompts": [
        "看到中文“初步的；预备的”时，尝试立刻拼出 preliminary。",
        "把 preliminary 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，preliminary适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word preliminary when I talk about 初步的；预备的.",
        "The word preliminary is useful in IELTS reading, listening, or writing practice.",
        "Try typing preliminary three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 11，先记首尾字母 p-y。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：初步的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“初步的”？",
        "answer": "preliminary"
      }
    },
    "presume": {
      "zh": " presume",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•s•m•",
      "reviewPrompts": [
        "看到中文“ presume”时，尝试立刻拼出 presume。",
        "把 presume 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，presume适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word presume when I talk about  presume.",
        "The word presume is useful in IELTS reading, listening, or writing practice.",
        "Try typing presume three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词： presume。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ presume”？",
        "answer": "presume"
      }
    },
    "profound": {
      "zh": "深刻的；深远的",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•f••nd",
      "reviewPrompts": [
        "看到中文“深刻的；深远的”时，尝试立刻拼出 profound。",
        "把 profound 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，profound适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word profound when I talk about 深刻的；深远的.",
        "The word profound is useful in IELTS reading, listening, or writing practice.",
        "Try typing profound three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-d。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：深刻的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“深刻的”？",
        "answer": "profound"
      }
    },
    "prohibit": {
      "zh": "禁止；阻止",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•h•b•t",
      "reviewPrompts": [
        "看到中文“禁止；阻止”时，尝试立刻拼出 prohibit。",
        "把 prohibit 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，prohibit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word prohibit when I talk about 禁止；阻止.",
        "The word prohibit is useful in IELTS reading, listening, or writing practice.",
        "Try typing prohibit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：禁止。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“禁止”？",
        "answer": "prohibit"
      }
    },
    "proportion": {
      "zh": "比例；部分",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "pr•p•rt••n",
      "reviewPrompts": [
        "看到中文“比例；部分”时，尝试立刻拼出 proportion。",
        "把 proportion 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，proportion适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word proportion when I talk about 比例；部分.",
        "The word proportion is useful in IELTS reading, listening, or writing practice.",
        "Try typing proportion three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 10，先记首尾字母 p-n。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：比例。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“比例”？",
        "answer": "proportion"
      }
    },
    "protocol": {
      "zh": "协议；礼仪",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•t•c•l",
      "reviewPrompts": [
        "看到中文“协议；礼仪”时，尝试立刻拼出 protocol。",
        "把 protocol 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，protocol适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word protocol when I talk about 协议；礼仪.",
        "The word protocol is useful in IELTS reading, listening, or writing practice.",
        "Try typing protocol three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-l。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：协议。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“协议”？",
        "answer": "protocol"
      }
    },
    "qualitative": {
      "zh": "定性的；质的",
      "pos": "",
      "tag": "IELTS",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "q••l•t•t•v•",
      "reviewPrompts": [
        "看到中文“定性的；质的”时，尝试立刻拼出 qualitative。",
        "把 qualitative 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，qualitative适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word qualitative when I talk about 定性的；质的.",
        "The word qualitative is useful in IELTS reading, listening, or writing practice.",
        "Try typing qualitative three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "Q 开头，长度 11，先记首尾字母 q-e。",
        "元音 6 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：定性的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“定性的”？",
        "answer": "qualitative"
      }
    },
    "rational": {
      "zh": "理性的；合理的",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "r•t••n•l",
      "reviewPrompts": [
        "看到中文“理性的；合理的”时，尝试立刻拼出 rational。",
        "把 rational 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，rational适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word rational when I talk about 理性的；合理的.",
        "The word rational is useful in IELTS reading, listening, or writing practice.",
        "Try typing rational three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 8，先记首尾字母 r-l。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：理性的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“理性的”？",
        "answer": "rational"
      }
    },
    "refine": {
      "zh": "精炼；改进",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "r•f•n•",
      "reviewPrompts": [
        "看到中文“精炼；改进”时，尝试立刻拼出 refine。",
        "把 refine 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，refine适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word refine when I talk about 精炼；改进.",
        "The word refine is useful in IELTS reading, listening, or writing practice.",
        "Try typing refine three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：精炼。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“精炼”？",
        "answer": "refine"
      }
    },
    "regime": {
      "zh": "政权；制度",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "r•g•m•",
      "reviewPrompts": [
        "看到中文“政权；制度”时，尝试立刻拼出 regime。",
        "把 regime 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，regime适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word regime when I talk about 政权；制度.",
        "The word regime is useful in IELTS reading, listening, or writing practice.",
        "Try typing regime three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：政权。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“政权”？",
        "answer": "regime"
      }
    },
    "reluctant": {
      "zh": "不情愿的；勉强的",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "r•l•ct•nt",
      "reviewPrompts": [
        "看到中文“不情愿的；勉强的”时，尝试立刻拼出 reluctant。",
        "把 reluctant 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，reluctant适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word reluctant when I talk about 不情愿的；勉强的.",
        "The word reluctant is useful in IELTS reading, listening, or writing practice.",
        "Try typing reluctant three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 9，先记首尾字母 r-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：不情愿的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“不情愿的”？",
        "answer": "reluctant"
      }
    },
    "revenue": {
      "zh": "收入；税收",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r•v•n••",
      "reviewPrompts": [
        "看到中文“收入；税收”时，尝试立刻拼出 revenue。",
        "把 revenue 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，revenue适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word revenue when I talk about 收入；税收.",
        "The word revenue is useful in IELTS reading, listening, or writing practice.",
        "Try typing revenue three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：收入。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“收入”？",
        "answer": "revenue"
      }
    },
    "revolution": {
      "zh": "革命；变革",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "r•v•l•t••n",
      "reviewPrompts": [
        "看到中文“革命；变革”时，尝试立刻拼出 revolution。",
        "把 revolution 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，revolution适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word revolution when I talk about 革命；变革.",
        "The word revolution is useful in IELTS reading, listening, or writing practice.",
        "Try typing revolution three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 10，先记首尾字母 r-n。",
        "元音 5 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：革命。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“革命”？",
        "answer": "revolution"
      }
    },
    "scenario": {
      "zh": "场景；方案",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "sc•n•r••",
      "reviewPrompts": [
        "看到中文“场景；方案”时，尝试立刻拼出 scenario。",
        "把 scenario 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，scenario适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word scenario when I talk about 场景；方案.",
        "The word scenario is useful in IELTS reading, listening, or writing practice.",
        "Try typing scenario three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-o。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：场景。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“场景”？",
        "answer": "scenario"
      }
    },
    "scheme": {
      "zh": "方案；计划",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "sch•m•",
      "reviewPrompts": [
        "看到中文“方案；计划”时，尝试立刻拼出 scheme。",
        "把 scheme 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，scheme适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word scheme when I talk about 方案；计划.",
        "The word scheme is useful in IELTS reading, listening, or writing practice.",
        "Try typing scheme three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-e。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：方案。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“方案”？",
        "answer": "scheme"
      }
    },
    "simulate": {
      "zh": "模拟；仿真",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "s•m•l•t•",
      "reviewPrompts": [
        "看到中文“模拟；仿真”时，尝试立刻拼出 simulate。",
        "把 simulate 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，simulate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word simulate when I talk about 模拟；仿真.",
        "The word simulate is useful in IELTS reading, listening, or writing practice.",
        "Try typing simulate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：模拟。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“模拟”？",
        "answer": "simulate"
      }
    },
    "sophisticated": {
      "zh": "复杂的；精密的",
      "pos": "",
      "tag": "IELTS",
      "length": 13,
      "rhythm": "长词分段打",
      "typingPattern": "s•ph•st•c•t•d",
      "reviewPrompts": [
        "看到中文“复杂的；精密的”时，尝试立刻拼出 sophisticated。",
        "把 sophisticated 拆成 5 个小节练习，减少漏键。",
        "在IELTS分类中，sophisticated适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word sophisticated when I talk about 复杂的；精密的.",
        "The word sophisticated is useful in IELTS reading, listening, or writing practice.",
        "Try typing sophisticated three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 13，先记首尾字母 s-d。",
        "元音 5 个，辅音 8 个；打字时注意节奏。",
        "中文释义关键词：复杂的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“复杂的”？",
        "answer": "sophisticated"
      }
    },
    "statistics": {
      "zh": "统计学；数据",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "st•t•st•cs",
      "reviewPrompts": [
        "看到中文“统计学；数据”时，尝试立刻拼出 statistics。",
        "把 statistics 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，statistics适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word statistics when I talk about 统计学；数据.",
        "The word statistics is useful in IELTS reading, listening, or writing practice.",
        "Try typing statistics three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 10，先记首尾字母 s-s。",
        "元音 3 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：统计学。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“统计学”？",
        "answer": "statistics"
      }
    },
    "stimulus": {
      "zh": "刺激；激励",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "st•m•l•s",
      "reviewPrompts": [
        "看到中文“刺激；激励”时，尝试立刻拼出 stimulus。",
        "把 stimulus 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，stimulus适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word stimulus when I talk about 刺激；激励.",
        "The word stimulus is useful in IELTS reading, listening, or writing practice.",
        "Try typing stimulus three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-s。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：刺激。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“刺激”？",
        "answer": "stimulus"
      }
    },
    "subordinate": {
      "zh": "下属的；从属的",
      "pos": "",
      "tag": "IELTS",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "s•b•rd•n•t•",
      "reviewPrompts": [
        "看到中文“下属的；从属的”时，尝试立刻拼出 subordinate。",
        "把 subordinate 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，subordinate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word subordinate when I talk about 下属的；从属的.",
        "The word subordinate is useful in IELTS reading, listening, or writing practice.",
        "Try typing subordinate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 11，先记首尾字母 s-e。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：下属的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“下属的”？",
        "answer": "subordinate"
      }
    },
    "sustain": {
      "zh": "维持；支撑",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "s•st••n",
      "reviewPrompts": [
        "看到中文“维持；支撑”时，尝试立刻拼出 sustain。",
        "把 sustain 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，sustain适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word sustain when I talk about 维持；支撑.",
        "The word sustain is useful in IELTS reading, listening, or writing practice.",
        "Try typing sustain three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：维持。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“维持”？",
        "answer": "sustain"
      }
    },
    "synthesis": {
      "zh": "综合；合成",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "synth•s•s",
      "reviewPrompts": [
        "看到中文“综合；合成”时，尝试立刻拼出 synthesis。",
        "把 synthesis 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，synthesis适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word synthesis when I talk about 综合；合成.",
        "The word synthesis is useful in IELTS reading, listening, or writing practice.",
        "Try typing synthesis three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 9，先记首尾字母 s-s。",
        "元音 2 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：综合。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“综合”？",
        "answer": "synthesis"
      }
    },
    "tension": {
      "zh": "紧张；张力",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "t•ns••n",
      "reviewPrompts": [
        "看到中文“紧张；张力”时，尝试立刻拼出 tension。",
        "把 tension 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，tension适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word tension when I talk about 紧张；张力.",
        "The word tension is useful in IELTS reading, listening, or writing practice.",
        "Try typing tension three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：紧张。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“紧张”？",
        "answer": "tension"
      }
    },
    "terminal": {
      "zh": "终端的；末端的",
      "pos": "",
      "tag": "IELTS",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "t•rm•n•l",
      "reviewPrompts": [
        "看到中文“终端的；末端的”时，尝试立刻拼出 terminal。",
        "把 terminal 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，terminal适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word terminal when I talk about 终端的；末端的.",
        "The word terminal is useful in IELTS reading, listening, or writing practice.",
        "Try typing terminal three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 8，先记首尾字母 t-l。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：终端的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“终端的”？",
        "answer": "terminal"
      }
    },
    "transit": {
      "zh": "运输；中转",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "tr•ns•t",
      "reviewPrompts": [
        "看到中文“运输；中转”时，尝试立刻拼出 transit。",
        "把 transit 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，transit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word transit when I talk about 运输；中转.",
        "The word transit is useful in IELTS reading, listening, or writing practice.",
        "Try typing transit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：运输。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“运输”？",
        "answer": "transit"
      }
    },
    "treaty": {
      "zh": "条约；协议",
      "pos": "",
      "tag": "IELTS",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "tr••ty",
      "reviewPrompts": [
        "看到中文“条约；协议”时，尝试立刻拼出 treaty。",
        "把 treaty 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，treaty适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word treaty when I talk about 条约；协议.",
        "The word treaty is useful in IELTS reading, listening, or writing practice.",
        "Try typing treaty three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 6，先记首尾字母 t-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：条约。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“条约”？",
        "answer": "treaty"
      }
    },
    "undermine": {
      "zh": "削弱；破坏",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•nd•rm•n•",
      "reviewPrompts": [
        "看到中文“削弱；破坏”时，尝试立刻拼出 undermine。",
        "把 undermine 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，undermine适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word undermine when I talk about 削弱；破坏.",
        "The word undermine is useful in IELTS reading, listening, or writing practice.",
        "Try typing undermine three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "U 开头，长度 9，先记首尾字母 u-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：削弱。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“削弱”？",
        "answer": "undermine"
      }
    },
    "undergo": {
      "zh": "经历； undergo",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•nd•rg•",
      "reviewPrompts": [
        "看到中文“经历； undergo”时，尝试立刻拼出 undergo。",
        "把 undergo 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，undergo适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word undergo when I talk about 经历； undergo.",
        "The word undergo is useful in IELTS reading, listening, or writing practice.",
        "Try typing undergo three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "U 开头，长度 7，先记首尾字母 u-o。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：经历。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“经历”？",
        "answer": "undergo"
      }
    },
    "valid": {
      "zh": "有效的；合理的",
      "pos": "",
      "tag": "IELTS",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "v•l•d",
      "reviewPrompts": [
        "看到中文“有效的；合理的”时，尝试立刻拼出 valid。",
        "把 valid 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，valid适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word valid when I talk about 有效的；合理的.",
        "The word valid is useful in IELTS reading, listening, or writing practice.",
        "Try typing valid three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 5，先记首尾字母 v-d。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：有效的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“有效的”？",
        "answer": "valid"
      }
    },
    "voluntary": {
      "zh": "自愿的；志愿的",
      "pos": "",
      "tag": "IELTS",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "v•l•nt•ry",
      "reviewPrompts": [
        "看到中文“自愿的；志愿的”时，尝试立刻拼出 voluntary。",
        "把 voluntary 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，voluntary适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word voluntary when I talk about 自愿的；志愿的.",
        "The word voluntary is useful in IELTS reading, listening, or writing practice.",
        "Try typing voluntary three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 9，先记首尾字母 v-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：自愿的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“自愿的”？",
        "answer": "voluntary"
      }
    },
    "whereby": {
      "zh": " whereby",
      "pos": "",
      "tag": "IELTS",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "wh•r•by",
      "reviewPrompts": [
        "看到中文“ whereby”时，尝试立刻拼出 whereby。",
        "把 whereby 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，whereby适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word whereby when I talk about  whereby.",
        "The word whereby is useful in IELTS reading, listening, or writing practice.",
        "Try typing whereby three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 7，先记首尾字母 w-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词： whereby。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“ whereby”？",
        "answer": "whereby"
      }
    },
    "widespread": {
      "zh": "广泛的；普遍的",
      "pos": "",
      "tag": "IELTS",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "w•d•spr••d",
      "reviewPrompts": [
        "看到中文“广泛的；普遍的”时，尝试立刻拼出 widespread。",
        "把 widespread 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，widespread适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word widespread when I talk about 广泛的；普遍的.",
        "The word widespread is useful in IELTS reading, listening, or writing practice.",
        "Try typing widespread three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 10，先记首尾字母 w-d。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：广泛的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“广泛的”？",
        "answer": "widespread"
      }
    },
    "atmosphere": {
      "zh": "大气；氛围",
      "pos": "n.",
      "tag": "气候",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•tm•sph•r•",
      "reviewPrompts": [
        "看到中文“大气；氛围”时，尝试立刻拼出 atmosphere。",
        "把 atmosphere 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，atmosphere适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word atmosphere when I talk about 大气；氛围.",
        "The word atmosphere is useful in IELTS reading, listening, or writing practice.",
        "Try typing atmosphere three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 10，先记首尾字母 a-e。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：大气。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“大气”？",
        "answer": "atmosphere"
      }
    },
    "biodiversity": {
      "zh": "生物多样性",
      "pos": "n.",
      "tag": "生态",
      "length": 12,
      "rhythm": "长词分段打",
      "typingPattern": "b••d•v•rs•ty",
      "reviewPrompts": [
        "看到中文“生物多样性”时，尝试立刻拼出 biodiversity。",
        "把 biodiversity 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，biodiversity适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word biodiversity when I talk about 生物多样性.",
        "The word biodiversity is useful in IELTS reading, listening, or writing practice.",
        "Try typing biodiversity three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 12，先记首尾字母 b-y。",
        "元音 5 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：生物多样性。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“生物多样性”？",
        "answer": "biodiversity"
      }
    },
    "blizzard": {
      "zh": "暴风雪",
      "pos": "n.",
      "tag": "天气",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "bl•zz•rd",
      "reviewPrompts": [
        "看到中文“暴风雪”时，尝试立刻拼出 blizzard。",
        "把 blizzard 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，blizzard适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word blizzard when I talk about 暴风雪.",
        "The word blizzard is useful in IELTS reading, listening, or writing practice.",
        "Try typing blizzard three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 8，先记首尾字母 b-d。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：暴风雪。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“暴风雪”？",
        "answer": "blizzard"
      }
    },
    "canyon": {
      "zh": "峡谷",
      "pos": "n.",
      "tag": "地理",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ny•n",
      "reviewPrompts": [
        "看到中文“峡谷”时，尝试立刻拼出 canyon。",
        "把 canyon 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，canyon适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word canyon when I talk about 峡谷.",
        "The word canyon is useful in IELTS reading, listening, or writing practice.",
        "Try typing canyon three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-n。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：峡谷。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“峡谷”？",
        "answer": "canyon"
      }
    },
    "carbon": {
      "zh": "碳",
      "pos": "n.",
      "tag": "科学",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•rb•n",
      "reviewPrompts": [
        "看到中文“碳”时，尝试立刻拼出 carbon。",
        "把 carbon 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，carbon适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word carbon when I talk about 碳.",
        "The word carbon is useful in IELTS reading, listening, or writing practice.",
        "Try typing carbon three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-n。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：碳。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“碳”？",
        "answer": "carbon"
      }
    },
    "cliff": {
      "zh": "悬崖",
      "pos": "n.",
      "tag": "地理",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "cl•ff",
      "reviewPrompts": [
        "看到中文“悬崖”时，尝试立刻拼出 cliff。",
        "把 cliff 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，cliff适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cliff when I talk about 悬崖.",
        "The word cliff is useful in IELTS reading, listening, or writing practice.",
        "Try typing cliff three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-f。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：悬崖。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“悬崖”？",
        "answer": "cliff"
      }
    },
    "conservation": {
      "zh": "保护；保存",
      "pos": "n.",
      "tag": "环保",
      "length": 12,
      "rhythm": "长词分段打",
      "typingPattern": "c•ns•rv•t••n",
      "reviewPrompts": [
        "看到中文“保护；保存”时，尝试立刻拼出 conservation。",
        "把 conservation 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，conservation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word conservation when I talk about 保护；保存.",
        "The word conservation is useful in IELTS reading, listening, or writing practice.",
        "Try typing conservation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 12，先记首尾字母 c-n。",
        "元音 5 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：保护。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“保护”？",
        "answer": "conservation"
      }
    },
    "coral": {
      "zh": "珊瑚",
      "pos": "n.",
      "tag": "海洋",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "c•r•l",
      "reviewPrompts": [
        "看到中文“珊瑚”时，尝试立刻拼出 coral。",
        "把 coral 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，coral适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word coral when I talk about 珊瑚.",
        "The word coral is useful in IELTS reading, listening, or writing practice.",
        "Try typing coral three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-l。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：珊瑚。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“珊瑚”？",
        "answer": "coral"
      }
    },
    "creek": {
      "zh": "小溪",
      "pos": "n.",
      "tag": "水文",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "cr••k",
      "reviewPrompts": [
        "看到中文“小溪”时，尝试立刻拼出 creek。",
        "把 creek 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，creek适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word creek when I talk about 小溪.",
        "The word creek is useful in IELTS reading, listening, or writing practice.",
        "Try typing creek three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-k。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：小溪。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“小溪”？",
        "answer": "creek"
      }
    },
    "drought": {
      "zh": "干旱",
      "pos": "n.",
      "tag": "气候",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "dr••ght",
      "reviewPrompts": [
        "看到中文“干旱”时，尝试立刻拼出 drought。",
        "把 drought 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，drought适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word drought when I talk about 干旱.",
        "The word drought is useful in IELTS reading, listening, or writing practice.",
        "Try typing drought three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 7，先记首尾字母 d-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：干旱。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“干旱”？",
        "answer": "drought"
      }
    },
    "ecosystem": {
      "zh": "生态系统",
      "pos": "n.",
      "tag": "生态",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•c•syst•m",
      "reviewPrompts": [
        "看到中文“生态系统”时，尝试立刻拼出 ecosystem。",
        "把 ecosystem 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，ecosystem适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ecosystem when I talk about 生态系统.",
        "The word ecosystem is useful in IELTS reading, listening, or writing practice.",
        "Try typing ecosystem three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 9，先记首尾字母 e-m。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：生态系统。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“生态系统”？",
        "answer": "ecosystem"
      }
    },
    "emission": {
      "zh": "排放；散发",
      "pos": "n.",
      "tag": "环保",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•m•ss••n",
      "reviewPrompts": [
        "看到中文“排放；散发”时，尝试立刻拼出 emission。",
        "把 emission 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，emission适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word emission when I talk about 排放；散发.",
        "The word emission is useful in IELTS reading, listening, or writing practice.",
        "Try typing emission three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-n。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：排放。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“排放”？",
        "answer": "emission"
      }
    },
    "endangered": {
      "zh": "濒危的",
      "pos": "adj.",
      "tag": "生态",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•nd•ng•r•d",
      "reviewPrompts": [
        "看到中文“濒危的”时，尝试立刻拼出 endangered。",
        "把 endangered 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，endangered适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word endangered when I talk about 濒危的.",
        "The word endangered is useful in IELTS reading, listening, or writing practice.",
        "Try typing endangered three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 10，先记首尾字母 e-d。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：濒危的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“濒危的”？",
        "answer": "endangered"
      }
    },
    "erosion": {
      "zh": "侵蚀；腐蚀",
      "pos": "n.",
      "tag": "地理",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•r•s••n",
      "reviewPrompts": [
        "看到中文“侵蚀；腐蚀”时，尝试立刻拼出 erosion。",
        "把 erosion 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，erosion适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word erosion when I talk about 侵蚀；腐蚀.",
        "The word erosion is useful in IELTS reading, listening, or writing practice.",
        "Try typing erosion three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-n。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：侵蚀。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“侵蚀”？",
        "answer": "erosion"
      }
    },
    "extinct": {
      "zh": "灭绝的",
      "pos": "adj.",
      "tag": "生态",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•xt•nct",
      "reviewPrompts": [
        "看到中文“灭绝的”时，尝试立刻拼出 extinct。",
        "把 extinct 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，extinct适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word extinct when I talk about 灭绝的.",
        "The word extinct is useful in IELTS reading, listening, or writing practice.",
        "Try typing extinct three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：灭绝的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“灭绝的”？",
        "answer": "extinct"
      }
    },
    "fertile": {
      "zh": "肥沃的；多产的",
      "pos": "adj.",
      "tag": "土地",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "f•rt•l•",
      "reviewPrompts": [
        "看到中文“肥沃的；多产的”时，尝试立刻拼出 fertile。",
        "把 fertile 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，fertile适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fertile when I talk about 肥沃的；多产的.",
        "The word fertile is useful in IELTS reading, listening, or writing practice.",
        "Try typing fertile three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 7，先记首尾字母 f-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：肥沃的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“肥沃的”？",
        "answer": "fertile"
      }
    },
    "glacier": {
      "zh": "冰川",
      "pos": "n.",
      "tag": "地理",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "gl•c••r",
      "reviewPrompts": [
        "看到中文“冰川”时，尝试立刻拼出 glacier。",
        "把 glacier 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，glacier适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word glacier when I talk about 冰川.",
        "The word glacier is useful in IELTS reading, listening, or writing practice.",
        "Try typing glacier three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 7，先记首尾字母 g-r。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：冰川。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“冰川”？",
        "answer": "glacier"
      }
    },
    "hurricane": {
      "zh": "飓风",
      "pos": "n.",
      "tag": "天气",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "h•rr•c•n•",
      "reviewPrompts": [
        "看到中文“飓风”时，尝试立刻拼出 hurricane。",
        "把 hurricane 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，hurricane适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word hurricane when I talk about 飓风.",
        "The word hurricane is useful in IELTS reading, listening, or writing practice.",
        "Try typing hurricane three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 9，先记首尾字母 h-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：飓风。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“飓风”？",
        "answer": "hurricane"
      }
    },
    "landscape": {
      "zh": "风景；地形",
      "pos": "n.",
      "tag": "地理",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "l•ndsc•p•",
      "reviewPrompts": [
        "看到中文“风景；地形”时，尝试立刻拼出 landscape。",
        "把 landscape 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，landscape适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word landscape when I talk about 风景；地形.",
        "The word landscape is useful in IELTS reading, listening, or writing practice.",
        "Try typing landscape three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 9，先记首尾字母 l-e。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：风景。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“风景”？",
        "answer": "landscape"
      }
    },
    "meadow": {
      "zh": "草地；牧场",
      "pos": "n.",
      "tag": "地貌",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m••d•w",
      "reviewPrompts": [
        "看到中文“草地；牧场”时，尝试立刻拼出 meadow。",
        "把 meadow 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，meadow适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word meadow when I talk about 草地；牧场.",
        "The word meadow is useful in IELTS reading, listening, or writing practice.",
        "Try typing meadow three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-w。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：草地。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“草地”？",
        "answer": "meadow"
      }
    },
    "mineral": {
      "zh": "矿物；矿物质",
      "pos": "n.",
      "tag": "科学",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "m•n•r•l",
      "reviewPrompts": [
        "看到中文“矿物；矿物质”时，尝试立刻拼出 mineral。",
        "把 mineral 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，mineral适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word mineral when I talk about 矿物；矿物质.",
        "The word mineral is useful in IELTS reading, listening, or writing practice.",
        "Try typing mineral three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 7，先记首尾字母 m-l。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：矿物。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“矿物”？",
        "answer": "mineral"
      }
    },
    "authority": {
      "zh": "权威；当局",
      "pos": "n.",
      "tag": "政治",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "••th•r•ty",
      "reviewPrompts": [
        "看到中文“权威；当局”时，尝试立刻拼出 authority。",
        "把 authority 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，authority适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word authority when I talk about 权威；当局.",
        "The word authority is useful in IELTS reading, listening, or writing practice.",
        "Try typing authority three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-y。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：权威。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“权威”？",
        "answer": "authority"
      }
    },
    "campaign": {
      "zh": "运动；竞选",
      "pos": "n.",
      "tag": "社会",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mp••gn",
      "reviewPrompts": [
        "看到中文“运动；竞选”时，尝试立刻拼出 campaign。",
        "把 campaign 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，campaign适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word campaign when I talk about 运动；竞选.",
        "The word campaign is useful in IELTS reading, listening, or writing practice.",
        "Try typing campaign three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-n。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：运动。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“运动”？",
        "answer": "campaign"
      }
    },
    "citizen": {
      "zh": "公民；市民",
      "pos": "n.",
      "tag": "社会",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•t•z•n",
      "reviewPrompts": [
        "看到中文“公民；市民”时，尝试立刻拼出 citizen。",
        "把 citizen 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，citizen适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word citizen when I talk about 公民；市民.",
        "The word citizen is useful in IELTS reading, listening, or writing practice.",
        "Try typing citizen three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：公民。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“公民”？",
        "answer": "citizen"
      }
    },
    "community": {
      "zh": "社区；群体",
      "pos": "n.",
      "tag": "社会",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "c•mm•n•ty",
      "reviewPrompts": [
        "看到中文“社区；群体”时，尝试立刻拼出 community。",
        "把 community 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，community适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word community when I talk about 社区；群体.",
        "The word community is useful in IELTS reading, listening, or writing practice.",
        "Try typing community three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 9，先记首尾字母 c-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：社区。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“社区”？",
        "answer": "community"
      }
    },
    "conflict": {
      "zh": "冲突；矛盾",
      "pos": "n.",
      "tag": "社会",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nfl•ct",
      "reviewPrompts": [
        "看到中文“冲突；矛盾”时，尝试立刻拼出 conflict。",
        "把 conflict 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，conflict适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word conflict when I talk about 冲突；矛盾.",
        "The word conflict is useful in IELTS reading, listening, or writing practice.",
        "Try typing conflict three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-t。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：冲突。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“冲突”？",
        "answer": "conflict"
      }
    },
    "constitution": {
      "zh": "宪法；构成",
      "pos": "n.",
      "tag": "法律",
      "length": 12,
      "rhythm": "长词分段打",
      "typingPattern": "c•nst•t•t••n",
      "reviewPrompts": [
        "看到中文“宪法；构成”时，尝试立刻拼出 constitution。",
        "把 constitution 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，constitution适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word constitution when I talk about 宪法；构成.",
        "The word constitution is useful in IELTS reading, listening, or writing practice.",
        "Try typing constitution three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 12，先记首尾字母 c-n。",
        "元音 5 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：宪法。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“宪法”？",
        "answer": "constitution"
      }
    },
    "debate": {
      "zh": "辩论；争论",
      "pos": "n./v.",
      "tag": "媒体",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•b•t•",
      "reviewPrompts": [
        "看到中文“辩论；争论”时，尝试立刻拼出 debate。",
        "把 debate 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，debate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word debate when I talk about 辩论；争论.",
        "The word debate is useful in IELTS reading, listening, or writing practice.",
        "Try typing debate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：辩论。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“辩论”？",
        "answer": "debate"
      }
    },
    "democracy": {
      "zh": "民主；民主制",
      "pos": "n.",
      "tag": "政治",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "d•m•cr•cy",
      "reviewPrompts": [
        "看到中文“民主；民主制”时，尝试立刻拼出 democracy。",
        "把 democracy 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，democracy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word democracy when I talk about 民主；民主制.",
        "The word democracy is useful in IELTS reading, listening, or writing practice.",
        "Try typing democracy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 9，先记首尾字母 d-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：民主。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“民主”？",
        "answer": "democracy"
      }
    },
    "economy": {
      "zh": "经济",
      "pos": "n.",
      "tag": "社会",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•c•n•my",
      "reviewPrompts": [
        "看到中文“经济”时，尝试立刻拼出 economy。",
        "把 economy 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，economy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word economy when I talk about 经济.",
        "The word economy is useful in IELTS reading, listening, or writing practice.",
        "Try typing economy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-y。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：经济。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“经济”？",
        "answer": "economy"
      }
    },
    "election": {
      "zh": "选举",
      "pos": "n.",
      "tag": "政治",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•l•ct••n",
      "reviewPrompts": [
        "看到中文“选举”时，尝试立刻拼出 election。",
        "把 election 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，election适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word election when I talk about 选举.",
        "The word election is useful in IELTS reading, listening, or writing practice.",
        "Try typing election three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-n。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：选举。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“选举”？",
        "answer": "election"
      }
    },
    "equality": {
      "zh": "平等",
      "pos": "n.",
      "tag": "社会",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•q••l•ty",
      "reviewPrompts": [
        "看到中文“平等”时，尝试立刻拼出 equality。",
        "把 equality 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，equality适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word equality when I talk about 平等.",
        "The word equality is useful in IELTS reading, listening, or writing practice.",
        "Try typing equality three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-y。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：平等。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“平等”？",
        "answer": "equality"
      }
    },
    "evidence": {
      "zh": "证据",
      "pos": "n.",
      "tag": "法律",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•v•d•nc•",
      "reviewPrompts": [
        "看到中文“证据”时，尝试立刻拼出 evidence。",
        "把 evidence 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，evidence适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word evidence when I talk about 证据.",
        "The word evidence is useful in IELTS reading, listening, or writing practice.",
        "Try typing evidence three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：证据。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“证据”？",
        "answer": "evidence"
      }
    },
    "global": {
      "zh": "全球的",
      "pos": "adj.",
      "tag": "国际",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "gl•b•l",
      "reviewPrompts": [
        "看到中文“全球的”时，尝试立刻拼出 global。",
        "把 global 拆成 2 个小节练习，减少漏键。",
        "在IELTS分类中，global适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word global when I talk about 全球的.",
        "The word global is useful in IELTS reading, listening, or writing practice.",
        "Try typing global three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 6，先记首尾字母 g-l。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：全球的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“全球的”？",
        "answer": "global"
      }
    },
    "headline": {
      "zh": "标题；头条",
      "pos": "n.",
      "tag": "媒体",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "h••dl•n•",
      "reviewPrompts": [
        "看到中文“标题；头条”时，尝试立刻拼出 headline。",
        "把 headline 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，headline适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word headline when I talk about 标题；头条.",
        "The word headline is useful in IELTS reading, listening, or writing practice.",
        "Try typing headline three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 8，先记首尾字母 h-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：标题。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“标题”？",
        "answer": "headline"
      }
    },
    "immigration": {
      "zh": "移民；移居",
      "pos": "n.",
      "tag": "社会",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "•mm•gr•t••n",
      "reviewPrompts": [
        "看到中文“移民；移居”时，尝试立刻拼出 immigration。",
        "把 immigration 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，immigration适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word immigration when I talk about 移民；移居.",
        "The word immigration is useful in IELTS reading, listening, or writing practice.",
        "Try typing immigration three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 11，先记首尾字母 i-n。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：移民。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“移民”？",
        "answer": "immigration"
      }
    },
    "incident": {
      "zh": "事件；事变",
      "pos": "n.",
      "tag": "新闻",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•nc•d•nt",
      "reviewPrompts": [
        "看到中文“事件；事变”时，尝试立刻拼出 incident。",
        "把 incident 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，incident适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word incident when I talk about 事件；事变.",
        "The word incident is useful in IELTS reading, listening, or writing practice.",
        "Try typing incident three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 8，先记首尾字母 i-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：事件。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“事件”？",
        "answer": "incident"
      }
    },
    "justice": {
      "zh": "正义；司法",
      "pos": "n.",
      "tag": "法律",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "j•st•c•",
      "reviewPrompts": [
        "看到中文“正义；司法”时，尝试立刻拼出 justice。",
        "把 justice 拆成 3 个小节练习，减少漏键。",
        "在IELTS分类中，justice适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word justice when I talk about 正义；司法.",
        "The word justice is useful in IELTS reading, listening, or writing practice.",
        "Try typing justice three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "J 开头，长度 7，先记首尾字母 j-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：正义。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“正义”？",
        "answer": "justice"
      }
    },
    "legislation": {
      "zh": "立法；法律",
      "pos": "n.",
      "tag": "法律",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "l•g•sl•t••n",
      "reviewPrompts": [
        "看到中文“立法；法律”时，尝试立刻拼出 legislation。",
        "把 legislation 拆成 4 个小节练习，减少漏键。",
        "在IELTS分类中，legislation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word legislation when I talk about 立法；法律.",
        "The word legislation is useful in IELTS reading, listening, or writing practice.",
        "Try typing legislation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 11，先记首尾字母 l-n。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：立法。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“立法”？",
        "answer": "legislation"
      }
    }
  },
  "高考核心": {
    "accept": {
      "zh": "接受；认可",
      "pos": "v.",
      "tag": "态度",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•cc•pt",
      "reviewPrompts": [
        "看到中文“接受；认可”时，尝试立刻拼出 accept。",
        "把 accept 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，accept适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word accept when I talk about 接受；认可.",
        "The word accept is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing accept three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：接受。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“接受”？",
        "answer": "accept"
      }
    },
    "active": {
      "zh": "积极的；活跃的",
      "pos": "adj.",
      "tag": "性格",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•ct•v•",
      "reviewPrompts": [
        "看到中文“积极的；活跃的”时，尝试立刻拼出 active。",
        "把 active 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，active适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word active when I talk about 积极的；活跃的.",
        "The word active is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing active three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：积极的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“积极的”？",
        "answer": "active"
      }
    },
    "address": {
      "zh": "地址；演讲；处理",
      "pos": "n./v.",
      "tag": "多义",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•ddr•ss",
      "reviewPrompts": [
        "看到中文“地址；演讲；处理”时，尝试立刻拼出 address。",
        "把 address 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，address适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word address when I talk about 地址；演讲；处理.",
        "The word address is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing address three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-s。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：地址。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“地址”？",
        "answer": "address"
      }
    },
    "admire": {
      "zh": "钦佩；欣赏",
      "pos": "v.",
      "tag": "情感",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•dm•r•",
      "reviewPrompts": [
        "看到中文“钦佩；欣赏”时，尝试立刻拼出 admire。",
        "把 admire 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，admire适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word admire when I talk about 钦佩；欣赏.",
        "The word admire is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing admire three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：钦佩。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“钦佩”？",
        "answer": "admire"
      }
    },
    "advice": {
      "zh": "建议；忠告",
      "pos": "n.",
      "tag": "写作",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•dv•c•",
      "reviewPrompts": [
        "看到中文“建议；忠告”时，尝试立刻拼出 advice。",
        "把 advice 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，advice适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word advice when I talk about 建议；忠告.",
        "The word advice is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing advice three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：建议。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“建议”？",
        "answer": "advice"
      }
    },
    "afford": {
      "zh": "负担得起",
      "pos": "v.",
      "tag": "生活",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•ff•rd",
      "reviewPrompts": [
        "看到中文“负担得起”时，尝试立刻拼出 afford。",
        "把 afford 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，afford适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word afford when I talk about 负担得起.",
        "The word afford is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing afford three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-d。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：负担得起。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“负担得起”？",
        "answer": "afford"
      }
    },
    "allow": {
      "zh": "允许；准许",
      "pos": "v.",
      "tag": "规则",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•ll•w",
      "reviewPrompts": [
        "看到中文“允许；准许”时，尝试立刻拼出 allow。",
        "把 allow 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，allow适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word allow when I talk about 允许；准许.",
        "The word allow is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing allow three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-w。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：允许。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“允许”？",
        "answer": "allow"
      }
    },
    "amaze": {
      "zh": "使惊讶",
      "pos": "v.",
      "tag": "情绪",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•m•z•",
      "reviewPrompts": [
        "看到中文“使惊讶”时，尝试立刻拼出 amaze。",
        "把 amaze 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，amaze适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word amaze when I talk about 使惊讶.",
        "The word amaze is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing amaze three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-e。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：使惊讶。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“使惊讶”？",
        "answer": "amaze"
      }
    },
    "ancient": {
      "zh": "古代的",
      "pos": "adj.",
      "tag": "历史",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•nc••nt",
      "reviewPrompts": [
        "看到中文“古代的”时，尝试立刻拼出 ancient。",
        "把 ancient 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，ancient适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ancient when I talk about 古代的.",
        "The word ancient is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing ancient three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：古代的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“古代的”？",
        "answer": "ancient"
      }
    },
    "appear": {
      "zh": "出现；似乎",
      "pos": "v.",
      "tag": "高频",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•pp••r",
      "reviewPrompts": [
        "看到中文“出现；似乎”时，尝试立刻拼出 appear。",
        "把 appear 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，appear适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word appear when I talk about 出现；似乎.",
        "The word appear is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing appear three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-r。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：出现。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“出现”？",
        "answer": "appear"
      }
    },
    "arrange": {
      "zh": "安排；整理",
      "pos": "v.",
      "tag": "计划",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•rr•ng•",
      "reviewPrompts": [
        "看到中文“安排；整理”时，尝试立刻拼出 arrange。",
        "把 arrange 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，arrange适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word arrange when I talk about 安排；整理.",
        "The word arrange is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing arrange three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：安排。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“安排”？",
        "answer": "arrange"
      }
    },
    "attend": {
      "zh": "参加；出席",
      "pos": "v.",
      "tag": "校园",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•tt•nd",
      "reviewPrompts": [
        "看到中文“参加；出席”时，尝试立刻拼出 attend。",
        "把 attend 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，attend适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word attend when I talk about 参加；出席.",
        "The word attend is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing attend three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-d。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：参加。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“参加”？",
        "answer": "attend"
      }
    },
    "avoid": {
      "zh": "避免；避开",
      "pos": "v.",
      "tag": "策略",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•v••d",
      "reviewPrompts": [
        "看到中文“避免；避开”时，尝试立刻拼出 avoid。",
        "把 avoid 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，avoid适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word avoid when I talk about 避免；避开.",
        "The word avoid is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing avoid three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-d。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：避免。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“避免”？",
        "answer": "avoid"
      }
    },
    "basic": {
      "zh": "基本的；基础的",
      "pos": "adj.",
      "tag": "高频",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "b•s•c",
      "reviewPrompts": [
        "看到中文“基本的；基础的”时，尝试立刻拼出 basic。",
        "把 basic 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，basic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word basic when I talk about 基本的；基础的.",
        "The word basic is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing basic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 5，先记首尾字母 b-c。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：基本的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“基本的”？",
        "answer": "basic"
      }
    },
    "believe": {
      "zh": "相信；认为",
      "pos": "v.",
      "tag": "观点",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "b•l••v•",
      "reviewPrompts": [
        "看到中文“相信；认为”时，尝试立刻拼出 believe。",
        "把 believe 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，believe适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word believe when I talk about 相信；认为.",
        "The word believe is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing believe three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：相信。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“相信”？",
        "answer": "believe"
      }
    },
    "borrow": {
      "zh": "借入",
      "pos": "v.",
      "tag": "生活",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "b•rr•w",
      "reviewPrompts": [
        "看到中文“借入”时，尝试立刻拼出 borrow。",
        "把 borrow 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，borrow适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word borrow when I talk about 借入.",
        "The word borrow is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing borrow three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 6，先记首尾字母 b-w。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：借入。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“借入”？",
        "answer": "borrow"
      }
    },
    "brain": {
      "zh": "大脑；智力",
      "pos": "n.",
      "tag": "身体",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "br••n",
      "reviewPrompts": [
        "看到中文“大脑；智力”时，尝试立刻拼出 brain。",
        "把 brain 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，brain适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word brain when I talk about 大脑；智力.",
        "The word brain is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing brain three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 5，先记首尾字母 b-n。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：大脑。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“大脑”？",
        "answer": "brain"
      }
    },
    "cancel": {
      "zh": "取消",
      "pos": "v.",
      "tag": "安排",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nc•l",
      "reviewPrompts": [
        "看到中文“取消”时，尝试立刻拼出 cancel。",
        "把 cancel 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，cancel适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cancel when I talk about 取消.",
        "The word cancel is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing cancel three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-l。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：取消。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“取消”？",
        "answer": "cancel"
      }
    },
    "careful": {
      "zh": "仔细的；小心的",
      "pos": "adj.",
      "tag": "性格",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•r•f•l",
      "reviewPrompts": [
        "看到中文“仔细的；小心的”时，尝试立刻拼出 careful。",
        "把 careful 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，careful适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word careful when I talk about 仔细的；小心的.",
        "The word careful is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing careful three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-l。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：仔细的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“仔细的”？",
        "answer": "careful"
      }
    },
    "cause": {
      "zh": "原因；导致",
      "pos": "n./v.",
      "tag": "因果",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "c••s•",
      "reviewPrompts": [
        "看到中文“原因；导致”时，尝试立刻拼出 cause。",
        "把 cause 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，cause适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cause when I talk about 原因；导致.",
        "The word cause is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing cause three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-e。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：原因。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“原因”？",
        "answer": "cause"
      }
    },
    "certain": {
      "zh": "确定的；某个",
      "pos": "adj.",
      "tag": "判断",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•rt••n",
      "reviewPrompts": [
        "看到中文“确定的；某个”时，尝试立刻拼出 certain。",
        "把 certain 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，certain适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word certain when I talk about 确定的；某个.",
        "The word certain is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing certain three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：确定的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“确定的”？",
        "answer": "certain"
      }
    },
    "chance": {
      "zh": "机会；可能性",
      "pos": "n.",
      "tag": "抽象",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "ch•nc•",
      "reviewPrompts": [
        "看到中文“机会；可能性”时，尝试立刻拼出 chance。",
        "把 chance 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，chance适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word chance when I talk about 机会；可能性.",
        "The word chance is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing chance three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-e。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：机会。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“机会”？",
        "answer": "chance"
      }
    },
    "choice": {
      "zh": "选择",
      "pos": "n.",
      "tag": "决策",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "ch••c•",
      "reviewPrompts": [
        "看到中文“选择”时，尝试立刻拼出 choice。",
        "把 choice 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，choice适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word choice when I talk about 选择.",
        "The word choice is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing choice three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：选择。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“选择”？",
        "answer": "choice"
      }
    },
    "common": {
      "zh": "常见的；共同的",
      "pos": "adj.",
      "tag": "高频",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mm•n",
      "reviewPrompts": [
        "看到中文“常见的；共同的”时，尝试立刻拼出 common。",
        "把 common 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，common适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word common when I talk about 常见的；共同的.",
        "The word common is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing common three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-n。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：常见的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“常见的”？",
        "answer": "common"
      }
    },
    "complete": {
      "zh": "完成；完整的",
      "pos": "v./adj.",
      "tag": "任务",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mpl•t•",
      "reviewPrompts": [
        "看到中文“完成；完整的”时，尝试立刻拼出 complete。",
        "把 complete 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，complete适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word complete when I talk about 完成；完整的.",
        "The word complete is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing complete three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：完成。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“完成”？",
        "answer": "complete"
      }
    },
    "condition": {
      "zh": "条件；状况",
      "pos": "n.",
      "tag": "环境",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "c•nd•t••n",
      "reviewPrompts": [
        "看到中文“条件；状况”时，尝试立刻拼出 condition。",
        "把 condition 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，condition适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word condition when I talk about 条件；状况.",
        "The word condition is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing condition three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 9，先记首尾字母 c-n。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：条件。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“条件”？",
        "answer": "condition"
      }
    },
    "consider": {
      "zh": "考虑；认为",
      "pos": "v.",
      "tag": "思考",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ns•d•r",
      "reviewPrompts": [
        "看到中文“考虑；认为”时，尝试立刻拼出 consider。",
        "把 consider 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，consider适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word consider when I talk about 考虑；认为.",
        "The word consider is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing consider three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-r。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：考虑。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“考虑”？",
        "answer": "consider"
      }
    },
    "continue": {
      "zh": "继续",
      "pos": "v.",
      "tag": "动作",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nt•n••",
      "reviewPrompts": [
        "看到中文“继续”时，尝试立刻拼出 continue。",
        "把 continue 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，continue适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word continue when I talk about 继续.",
        "The word continue is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing continue three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：继续。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“继续”？",
        "answer": "continue"
      }
    },
    "control": {
      "zh": "控制；管理",
      "pos": "n./v.",
      "tag": "管理",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ntr•l",
      "reviewPrompts": [
        "看到中文“控制；管理”时，尝试立刻拼出 control。",
        "把 control 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，control适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word control when I talk about 控制；管理.",
        "The word control is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing control three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-l。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：控制。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“控制”？",
        "answer": "control"
      }
    },
    "culture": {
      "zh": "文化",
      "pos": "n.",
      "tag": "社会",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•lt•r•",
      "reviewPrompts": [
        "看到中文“文化”时，尝试立刻拼出 culture。",
        "把 culture 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，culture适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word culture when I talk about 文化.",
        "The word culture is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing culture three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：文化。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“文化”？",
        "answer": "culture"
      }
    },
    "decision": {
      "zh": "决定",
      "pos": "n.",
      "tag": "决策",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•c•s••n",
      "reviewPrompts": [
        "看到中文“决定”时，尝试立刻拼出 decision。",
        "把 decision 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，decision适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word decision when I talk about 决定.",
        "The word decision is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing decision three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-n。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：决定。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“决定”？",
        "answer": "decision"
      }
    },
    "develop": {
      "zh": "发展；培养",
      "pos": "v.",
      "tag": "成长",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "d•v•l•p",
      "reviewPrompts": [
        "看到中文“发展；培养”时，尝试立刻拼出 develop。",
        "把 develop 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，develop适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word develop when I talk about 发展；培养.",
        "The word develop is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing develop three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 7，先记首尾字母 d-p。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：发展。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“发展”？",
        "answer": "develop"
      }
    },
    "difference": {
      "zh": "差异；不同",
      "pos": "n.",
      "tag": "比较",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "d•ff•r•nc•",
      "reviewPrompts": [
        "看到中文“差异；不同”时，尝试立刻拼出 difference。",
        "把 difference 拆成 4 个小节练习，减少漏键。",
        "在高考核心分类中，difference适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word difference when I talk about 差异；不同.",
        "The word difference is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing difference three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 10，先记首尾字母 d-e。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：差异。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“差异”？",
        "answer": "difference"
      }
    },
    "direction": {
      "zh": "方向；指导",
      "pos": "n.",
      "tag": "空间",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "d•r•ct••n",
      "reviewPrompts": [
        "看到中文“方向；指导”时，尝试立刻拼出 direction。",
        "把 direction 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，direction适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word direction when I talk about 方向；指导.",
        "The word direction is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing direction three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 9，先记首尾字母 d-n。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：方向。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“方向”？",
        "answer": "direction"
      }
    },
    "discover": {
      "zh": "发现",
      "pos": "v.",
      "tag": "探索",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•sc•v•r",
      "reviewPrompts": [
        "看到中文“发现”时，尝试立刻拼出 discover。",
        "把 discover 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，discover适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word discover when I talk about 发现.",
        "The word discover is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing discover three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-r。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：发现。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“发现”？",
        "answer": "discover"
      }
    },
    "distance": {
      "zh": "距离；远方",
      "pos": "n.",
      "tag": "空间",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•st•nc•",
      "reviewPrompts": [
        "看到中文“距离；远方”时，尝试立刻拼出 distance。",
        "把 distance 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，distance适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word distance when I talk about 距离；远方.",
        "The word distance is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing distance three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：距离。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“距离”？",
        "answer": "distance"
      }
    },
    "education": {
      "zh": "教育",
      "pos": "n.",
      "tag": "校园",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•d•c•t••n",
      "reviewPrompts": [
        "看到中文“教育”时，尝试立刻拼出 education。",
        "把 education 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，education适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word education when I talk about 教育.",
        "The word education is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing education three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 9，先记首尾字母 e-n。",
        "元音 5 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：教育。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“教育”？",
        "answer": "education"
      }
    },
    "effort": {
      "zh": "努力",
      "pos": "n.",
      "tag": "品质",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•ff•rt",
      "reviewPrompts": [
        "看到中文“努力”时，尝试立刻拼出 effort。",
        "把 effort 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，effort适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word effort when I talk about 努力.",
        "The word effort is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing effort three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 6，先记首尾字母 e-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：努力。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“努力”？",
        "answer": "effort"
      }
    },
    "encourage": {
      "zh": "鼓励",
      "pos": "v.",
      "tag": "社交",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•nc••r•g•",
      "reviewPrompts": [
        "看到中文“鼓励”时，尝试立刻拼出 encourage。",
        "把 encourage 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，encourage适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word encourage when I talk about 鼓励.",
        "The word encourage is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing encourage three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 9，先记首尾字母 e-e。",
        "元音 5 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：鼓励。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“鼓励”？",
        "answer": "encourage"
      }
    },
    "energy": {
      "zh": "能量；精力",
      "pos": "n.",
      "tag": "科学",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•n•rgy",
      "reviewPrompts": [
        "看到中文“能量；精力”时，尝试立刻拼出 energy。",
        "把 energy 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，energy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word energy when I talk about 能量；精力.",
        "The word energy is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing energy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 6，先记首尾字母 e-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：能量。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“能量”？",
        "answer": "energy"
      }
    },
    "environment": {
      "zh": "环境",
      "pos": "n.",
      "tag": "自然",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "•nv•r•nm•nt",
      "reviewPrompts": [
        "看到中文“环境”时，尝试立刻拼出 environment。",
        "把 environment 拆成 4 个小节练习，减少漏键。",
        "在高考核心分类中，environment适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word environment when I talk about 环境.",
        "The word environment is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing environment three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 11，先记首尾字母 e-t。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：环境。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“环境”？",
        "answer": "environment"
      }
    },
    "especially": {
      "zh": "尤其；特别",
      "pos": "adv.",
      "tag": "强调",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•sp•c••lly",
      "reviewPrompts": [
        "看到中文“尤其；特别”时，尝试立刻拼出 especially。",
        "把 especially 拆成 4 个小节练习，减少漏键。",
        "在高考核心分类中，especially适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word especially when I talk about 尤其；特别.",
        "The word especially is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing especially three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 10，先记首尾字母 e-y。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：尤其。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“尤其”？",
        "answer": "especially"
      }
    },
    "example": {
      "zh": "例子；榜样",
      "pos": "n.",
      "tag": "写作",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•x•mpl•",
      "reviewPrompts": [
        "看到中文“例子；榜样”时，尝试立刻拼出 example。",
        "把 example 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，example适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word example when I talk about 例子；榜样.",
        "The word example is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing example three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：例子。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“例子”？",
        "answer": "example"
      }
    },
    "excellent": {
      "zh": "优秀的",
      "pos": "adj.",
      "tag": "评价",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•xc•ll•nt",
      "reviewPrompts": [
        "看到中文“优秀的”时，尝试立刻拼出 excellent。",
        "把 excellent 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，excellent适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word excellent when I talk about 优秀的.",
        "The word excellent is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing excellent three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 9，先记首尾字母 e-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：优秀的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“优秀的”？",
        "answer": "excellent"
      }
    },
    "experience": {
      "zh": "经验；经历",
      "pos": "n./v.",
      "tag": "成长",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•xp•r••nc•",
      "reviewPrompts": [
        "看到中文“经验；经历”时，尝试立刻拼出 experience。",
        "把 experience 拆成 4 个小节练习，减少漏键。",
        "在高考核心分类中，experience适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word experience when I talk about 经验；经历.",
        "The word experience is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing experience three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 10，先记首尾字母 e-e。",
        "元音 5 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：经验。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“经验”？",
        "answer": "experience"
      }
    },
    "explain": {
      "zh": "解释；说明",
      "pos": "v.",
      "tag": "表达",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•xpl••n",
      "reviewPrompts": [
        "看到中文“解释；说明”时，尝试立刻拼出 explain。",
        "把 explain 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，explain适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word explain when I talk about 解释；说明.",
        "The word explain is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing explain three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：解释。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“解释”？",
        "answer": "explain"
      }
    },
    "famous": {
      "zh": "著名的",
      "pos": "adj.",
      "tag": "人物",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "f•m••s",
      "reviewPrompts": [
        "看到中文“著名的”时，尝试立刻拼出 famous。",
        "把 famous 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，famous适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word famous when I talk about 著名的.",
        "The word famous is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing famous three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 6，先记首尾字母 f-s。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：著名的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“著名的”？",
        "answer": "famous"
      }
    },
    "foreign": {
      "zh": "外国的；陌生的",
      "pos": "adj.",
      "tag": "文化",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "f•r••gn",
      "reviewPrompts": [
        "看到中文“外国的；陌生的”时，尝试立刻拼出 foreign。",
        "把 foreign 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，foreign适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word foreign when I talk about 外国的；陌生的.",
        "The word foreign is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing foreign three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 7，先记首尾字母 f-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：外国的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“外国的”？",
        "answer": "foreign"
      }
    },
    "future": {
      "zh": "未来；将来",
      "pos": "n.",
      "tag": "时间",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "f•t•r•",
      "reviewPrompts": [
        "看到中文“未来；将来”时，尝试立刻拼出 future。",
        "把 future 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，future适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word future when I talk about 未来；将来.",
        "The word future is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing future three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 6，先记首尾字母 f-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：未来。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“未来”？",
        "answer": "future"
      }
    },
    "habit": {
      "zh": "习惯",
      "pos": "n.",
      "tag": "生活",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "h•b•t",
      "reviewPrompts": [
        "看到中文“习惯”时，尝试立刻拼出 habit。",
        "把 habit 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，habit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word habit when I talk about 习惯.",
        "The word habit is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing habit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 5，先记首尾字母 h-t。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：习惯。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“习惯”？",
        "answer": "habit"
      }
    },
    "improve": {
      "zh": "改进；提高",
      "pos": "v.",
      "tag": "学习",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•mpr•v•",
      "reviewPrompts": [
        "看到中文“改进；提高”时，尝试立刻拼出 improve。",
        "把 improve 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，improve适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word improve when I talk about 改进；提高.",
        "The word improve is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing improve three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 7，先记首尾字母 i-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：改进。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“改进”？",
        "answer": "improve"
      }
    },
    "include": {
      "zh": "包括；包含",
      "pos": "v.",
      "tag": "逻辑",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•ncl•d•",
      "reviewPrompts": [
        "看到中文“包括；包含”时，尝试立刻拼出 include。",
        "把 include 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，include适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word include when I talk about 包括；包含.",
        "The word include is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing include three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 7，先记首尾字母 i-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：包括。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“包括”？",
        "answer": "include"
      }
    },
    "instead": {
      "zh": "代替；反而",
      "pos": "adv.",
      "tag": "转折",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•nst••d",
      "reviewPrompts": [
        "看到中文“代替；反而”时，尝试立刻拼出 instead。",
        "把 instead 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，instead适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word instead when I talk about 代替；反而.",
        "The word instead is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing instead three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 7，先记首尾字母 i-d。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：代替。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“代替”？",
        "answer": "instead"
      }
    },
    "interest": {
      "zh": "兴趣；利益",
      "pos": "n.",
      "tag": "情感",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•nt•r•st",
      "reviewPrompts": [
        "看到中文“兴趣；利益”时，尝试立刻拼出 interest。",
        "把 interest 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，interest适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word interest when I talk about 兴趣；利益.",
        "The word interest is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing interest three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 8，先记首尾字母 i-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：兴趣。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“兴趣”？",
        "answer": "interest"
      }
    },
    "knowledge": {
      "zh": "知识",
      "pos": "n.",
      "tag": "学习",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "kn•wl•dg•",
      "reviewPrompts": [
        "看到中文“知识”时，尝试立刻拼出 knowledge。",
        "把 knowledge 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，knowledge适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word knowledge when I talk about 知识.",
        "The word knowledge is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing knowledge three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "K 开头，长度 9，先记首尾字母 k-e。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：知识。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“知识”？",
        "answer": "knowledge"
      }
    },
    "language": {
      "zh": "语言",
      "pos": "n.",
      "tag": "学习",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "l•ng••g•",
      "reviewPrompts": [
        "看到中文“语言”时，尝试立刻拼出 language。",
        "把 language 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，language适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word language when I talk about 语言.",
        "The word language is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing language three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 8，先记首尾字母 l-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：语言。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“语言”？",
        "answer": "language"
      }
    },
    "meaning": {
      "zh": "意义；意思",
      "pos": "n.",
      "tag": "理解",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "m••n•ng",
      "reviewPrompts": [
        "看到中文“意义；意思”时，尝试立刻拼出 meaning。",
        "把 meaning 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，meaning适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word meaning when I talk about 意义；意思.",
        "The word meaning is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing meaning three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 7，先记首尾字母 m-g。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：意义。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“意义”？",
        "answer": "meaning"
      }
    },
    "method": {
      "zh": "方法",
      "pos": "n.",
      "tag": "学习",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m•th•d",
      "reviewPrompts": [
        "看到中文“方法”时，尝试立刻拼出 method。",
        "把 method 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，method适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word method when I talk about 方法.",
        "The word method is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing method three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-d。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：方法。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“方法”？",
        "answer": "method"
      }
    },
    "modern": {
      "zh": "现代的",
      "pos": "adj.",
      "tag": "时间",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m•d•rn",
      "reviewPrompts": [
        "看到中文“现代的”时，尝试立刻拼出 modern。",
        "把 modern 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，modern适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word modern when I talk about 现代的.",
        "The word modern is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing modern three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-n。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：现代的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“现代的”？",
        "answer": "modern"
      }
    },
    "necessary": {
      "zh": "必要的",
      "pos": "adj.",
      "tag": "判断",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "n•c•ss•ry",
      "reviewPrompts": [
        "看到中文“必要的”时，尝试立刻拼出 necessary。",
        "把 necessary 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，necessary适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word necessary when I talk about 必要的.",
        "The word necessary is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing necessary three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 9，先记首尾字母 n-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：必要的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“必要的”？",
        "answer": "necessary"
      }
    },
    "notice": {
      "zh": "注意；通知",
      "pos": "n./v.",
      "tag": "观察",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "n•t•c•",
      "reviewPrompts": [
        "看到中文“注意；通知”时，尝试立刻拼出 notice。",
        "把 notice 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，notice适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word notice when I talk about 注意；通知.",
        "The word notice is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing notice three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 6，先记首尾字母 n-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：注意。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“注意”？",
        "answer": "notice"
      }
    },
    "opinion": {
      "zh": "观点；看法",
      "pos": "n.",
      "tag": "表达",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•p•n••n",
      "reviewPrompts": [
        "看到中文“观点；看法”时，尝试立刻拼出 opinion。",
        "把 opinion 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，opinion适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word opinion when I talk about 观点；看法.",
        "The word opinion is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing opinion three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 7，先记首尾字母 o-n。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：观点。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“观点”？",
        "answer": "opinion"
      }
    },
    "ordinary": {
      "zh": "普通的；平常的",
      "pos": "adj.",
      "tag": "描述",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•rd•n•ry",
      "reviewPrompts": [
        "看到中文“普通的；平常的”时，尝试立刻拼出 ordinary。",
        "把 ordinary 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，ordinary适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ordinary when I talk about 普通的；平常的.",
        "The word ordinary is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing ordinary three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 8，先记首尾字母 o-y。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：普通的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“普通的”？",
        "answer": "ordinary"
      }
    },
    "perfect": {
      "zh": "完美的",
      "pos": "adj.",
      "tag": "评价",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p•rf•ct",
      "reviewPrompts": [
        "看到中文“完美的”时，尝试立刻拼出 perfect。",
        "把 perfect 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，perfect适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word perfect when I talk about 完美的.",
        "The word perfect is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing perfect three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：完美的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“完美的”？",
        "answer": "perfect"
      }
    },
    "prepare": {
      "zh": "准备",
      "pos": "v.",
      "tag": "计划",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•p•r•",
      "reviewPrompts": [
        "看到中文“准备”时，尝试立刻拼出 prepare。",
        "把 prepare 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，prepare适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word prepare when I talk about 准备.",
        "The word prepare is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing prepare three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：准备。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“准备”？",
        "answer": "prepare"
      }
    },
    "protect": {
      "zh": "保护",
      "pos": "v.",
      "tag": "安全",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•t•ct",
      "reviewPrompts": [
        "看到中文“保护”时，尝试立刻拼出 protect。",
        "把 protect 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，protect适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word protect when I talk about 保护.",
        "The word protect is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing protect three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：保护。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“保护”？",
        "answer": "protect"
      }
    },
    "purpose": {
      "zh": "目的；意图",
      "pos": "n.",
      "tag": "写作",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p•rp•s•",
      "reviewPrompts": [
        "看到中文“目的；意图”时，尝试立刻拼出 purpose。",
        "把 purpose 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，purpose适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word purpose when I talk about 目的；意图.",
        "The word purpose is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing purpose three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：目的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“目的”？",
        "answer": "purpose"
      }
    },
    "realize": {
      "zh": "意识到；实现",
      "pos": "v.",
      "tag": "认知",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r••l•z•",
      "reviewPrompts": [
        "看到中文“意识到；实现”时，尝试立刻拼出 realize。",
        "把 realize 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，realize适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word realize when I talk about 意识到；实现.",
        "The word realize is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing realize three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：意识到。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“意识到”？",
        "answer": "realize"
      }
    },
    "reason": {
      "zh": "理由；原因",
      "pos": "n.",
      "tag": "因果",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "r••s•n",
      "reviewPrompts": [
        "看到中文“理由；原因”时，尝试立刻拼出 reason。",
        "把 reason 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，reason适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word reason when I talk about 理由；原因.",
        "The word reason is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing reason three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-n。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：理由。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“理由”？",
        "answer": "reason"
      }
    },
    "receive": {
      "zh": "收到；接待",
      "pos": "v.",
      "tag": "交流",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r•c••v•",
      "reviewPrompts": [
        "看到中文“收到；接待”时，尝试立刻拼出 receive。",
        "把 receive 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，receive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word receive when I talk about 收到；接待.",
        "The word receive is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing receive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：收到。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“收到”？",
        "answer": "receive"
      }
    },
    "remember": {
      "zh": "记得；记住",
      "pos": "v.",
      "tag": "学习",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "r•m•mb•r",
      "reviewPrompts": [
        "看到中文“记得；记住”时，尝试立刻拼出 remember。",
        "把 remember 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，remember适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word remember when I talk about 记得；记住.",
        "The word remember is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing remember three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 8，先记首尾字母 r-r。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：记得。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“记得”？",
        "answer": "remember"
      }
    },
    "require": {
      "zh": "要求；需要",
      "pos": "v.",
      "tag": "规则",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r•q••r•",
      "reviewPrompts": [
        "看到中文“要求；需要”时，尝试立刻拼出 require。",
        "把 require 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，require适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word require when I talk about 要求；需要.",
        "The word require is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing require three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：要求。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“要求”？",
        "answer": "require"
      }
    },
    "result": {
      "zh": "结果；成绩",
      "pos": "n.",
      "tag": "因果",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "r•s•lt",
      "reviewPrompts": [
        "看到中文“结果；成绩”时，尝试立刻拼出 result。",
        "把 result 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，result适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word result when I talk about 结果；成绩.",
        "The word result is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing result three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：结果。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“结果”？",
        "answer": "result"
      }
    },
    "science": {
      "zh": "科学",
      "pos": "n.",
      "tag": "学科",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "sc••nc•",
      "reviewPrompts": [
        "看到中文“科学”时，尝试立刻拼出 science。",
        "把 science 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，science适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word science when I talk about 科学.",
        "The word science is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing science three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：科学。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“科学”？",
        "answer": "science"
      }
    },
    "serious": {
      "zh": "严肃的；严重的",
      "pos": "adj.",
      "tag": "程度",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "s•r•••s",
      "reviewPrompts": [
        "看到中文“严肃的；严重的”时，尝试立刻拼出 serious。",
        "把 serious 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，serious适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word serious when I talk about 严肃的；严重的.",
        "The word serious is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing serious three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-s。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：严肃的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“严肃的”？",
        "answer": "serious"
      }
    },
    "similar": {
      "zh": "相似的",
      "pos": "adj.",
      "tag": "比较",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "s•m•l•r",
      "reviewPrompts": [
        "看到中文“相似的”时，尝试立刻拼出 similar。",
        "把 similar 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，similar适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word similar when I talk about 相似的.",
        "The word similar is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing similar three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-r。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：相似的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“相似的”？",
        "answer": "similar"
      }
    },
    "society": {
      "zh": "社会",
      "pos": "n.",
      "tag": "群体",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "s•c••ty",
      "reviewPrompts": [
        "看到中文“社会”时，尝试立刻拼出 society。",
        "把 society 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，society适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word society when I talk about 社会.",
        "The word society is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing society three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-y。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：社会。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“社会”？",
        "answer": "society"
      }
    },
    "special": {
      "zh": "特别的；专门的",
      "pos": "adj.",
      "tag": "描述",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "sp•c••l",
      "reviewPrompts": [
        "看到中文“特别的；专门的”时，尝试立刻拼出 special。",
        "把 special 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，special适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word special when I talk about 特别的；专门的.",
        "The word special is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing special three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-l。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：特别的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“特别的”？",
        "answer": "special"
      }
    },
    "success": {
      "zh": "成功",
      "pos": "n.",
      "tag": "目标",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "s•cc•ss",
      "reviewPrompts": [
        "看到中文“成功”时，尝试立刻拼出 success。",
        "把 success 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，success适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word success when I talk about 成功.",
        "The word success is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing success three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-s。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：成功。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“成功”？",
        "answer": "success"
      }
    },
    "suggest": {
      "zh": "建议；暗示",
      "pos": "v.",
      "tag": "表达",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "s•gg•st",
      "reviewPrompts": [
        "看到中文“建议；暗示”时，尝试立刻拼出 suggest。",
        "把 suggest 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，suggest适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word suggest when I talk about 建议；暗示.",
        "The word suggest is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing suggest three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：建议。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“建议”？",
        "answer": "suggest"
      }
    },
    "support": {
      "zh": "支持；支撑",
      "pos": "v./n.",
      "tag": "社交",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "s•pp•rt",
      "reviewPrompts": [
        "看到中文“支持；支撑”时，尝试立刻拼出 support。",
        "把 support 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，support适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word support when I talk about 支持；支撑.",
        "The word support is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing support three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：支持。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“支持”？",
        "answer": "support"
      }
    },
    "surprise": {
      "zh": "惊喜；使惊讶",
      "pos": "n./v.",
      "tag": "情绪",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "s•rpr•s•",
      "reviewPrompts": [
        "看到中文“惊喜；使惊讶”时，尝试立刻拼出 surprise。",
        "把 surprise 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，surprise适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word surprise when I talk about 惊喜；使惊讶.",
        "The word surprise is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing surprise three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：惊喜。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“惊喜”？",
        "answer": "surprise"
      }
    },
    "technology": {
      "zh": "技术",
      "pos": "n.",
      "tag": "科技",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "t•chn•l•gy",
      "reviewPrompts": [
        "看到中文“技术”时，尝试立刻拼出 technology。",
        "把 technology 拆成 4 个小节练习，减少漏键。",
        "在高考核心分类中，technology适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word technology when I talk about 技术.",
        "The word technology is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing technology three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 10，先记首尾字母 t-y。",
        "元音 3 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：技术。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“技术”？",
        "answer": "technology"
      }
    },
    "though": {
      "zh": "虽然；不过",
      "pos": "conj.",
      "tag": "转折",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "th••gh",
      "reviewPrompts": [
        "看到中文“虽然；不过”时，尝试立刻拼出 though。",
        "把 though 拆成 2 个小节练习，减少漏键。",
        "在高考核心分类中，though适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word though when I talk about 虽然；不过.",
        "The word though is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing though three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 6，先记首尾字母 t-h。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：虽然。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“虽然”？",
        "answer": "though"
      }
    },
    "traffic": {
      "zh": "交通",
      "pos": "n.",
      "tag": "城市",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "tr•ff•c",
      "reviewPrompts": [
        "看到中文“交通”时，尝试立刻拼出 traffic。",
        "把 traffic 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，traffic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word traffic when I talk about 交通.",
        "The word traffic is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing traffic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-c。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：交通。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“交通”？",
        "answer": "traffic"
      }
    },
    "valuable": {
      "zh": "有价值的",
      "pos": "adj.",
      "tag": "评价",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "v•l••bl•",
      "reviewPrompts": [
        "看到中文“有价值的”时，尝试立刻拼出 valuable。",
        "把 valuable 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，valuable适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word valuable when I talk about 有价值的.",
        "The word valuable is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing valuable three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 8，先记首尾字母 v-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：有价值的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“有价值的”？",
        "answer": "valuable"
      }
    },
    "volunteer": {
      "zh": "志愿者；自愿做",
      "pos": "n./v.",
      "tag": "社会",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "v•l•nt••r",
      "reviewPrompts": [
        "看到中文“志愿者；自愿做”时，尝试立刻拼出 volunteer。",
        "把 volunteer 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，volunteer适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word volunteer when I talk about 志愿者；自愿做.",
        "The word volunteer is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing volunteer three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 9，先记首尾字母 v-r。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：志愿者。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“志愿者”？",
        "answer": "volunteer"
      }
    },
    "weather": {
      "zh": "天气",
      "pos": "n.",
      "tag": "自然",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "w••th•r",
      "reviewPrompts": [
        "看到中文“天气”时，尝试立刻拼出 weather。",
        "把 weather 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，weather适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word weather when I talk about 天气.",
        "The word weather is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing weather three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 7，先记首尾字母 w-r。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：天气。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“天气”？",
        "answer": "weather"
      }
    },
    "wonderful": {
      "zh": "精彩的；极好的",
      "pos": "adj.",
      "tag": "评价",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "w•nd•rf•l",
      "reviewPrompts": [
        "看到中文“精彩的；极好的”时，尝试立刻拼出 wonderful。",
        "把 wonderful 拆成 3 个小节练习，减少漏键。",
        "在高考核心分类中，wonderful适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word wonderful when I talk about 精彩的；极好的.",
        "The word wonderful is useful in 高考核心 reading, listening, or writing practice.",
        "Try typing wonderful three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 9，先记首尾字母 w-l。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：精彩的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“精彩的”？",
        "answer": "wonderful"
      }
    }
  },
  "商务职场": {
    "agenda": {
      "zh": "议程；待办事项",
      "pos": "n.",
      "tag": "会议",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•g•nd•",
      "reviewPrompts": [
        "看到中文“议程；待办事项”时，尝试立刻拼出 agenda。",
        "把 agenda 拆成 2 个小节练习，减少漏键。",
        "在商务职场分类中，agenda适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word agenda when I talk about 议程；待办事项.",
        "The word agenda is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing agenda three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-a。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：议程。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“议程”？",
        "answer": "agenda"
      }
    },
    "align": {
      "zh": "使一致；对齐",
      "pos": "v.",
      "tag": "协作",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•l•gn",
      "reviewPrompts": [
        "看到中文“使一致；对齐”时，尝试立刻拼出 align。",
        "把 align 拆成 2 个小节练习，减少漏键。",
        "在商务职场分类中，align适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word align when I talk about 使一致；对齐.",
        "The word align is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing align three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-n。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：使一致。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“使一致”？",
        "answer": "align"
      }
    },
    "annual": {
      "zh": "年度的",
      "pos": "adj.",
      "tag": "时间",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•nn••l",
      "reviewPrompts": [
        "看到中文“年度的”时，尝试立刻拼出 annual。",
        "把 annual 拆成 2 个小节练习，减少漏键。",
        "在商务职场分类中，annual适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word annual when I talk about 年度的.",
        "The word annual is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing annual three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 6，先记首尾字母 a-l。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：年度的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“年度的”？",
        "answer": "annual"
      }
    },
    "approve": {
      "zh": "批准；认可",
      "pos": "v.",
      "tag": "流程",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•ppr•v•",
      "reviewPrompts": [
        "看到中文“批准；认可”时，尝试立刻拼出 approve。",
        "把 approve 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，approve适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word approve when I talk about 批准；认可.",
        "The word approve is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing approve three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：批准。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“批准”？",
        "answer": "approve"
      }
    },
    "asset": {
      "zh": "资产；有价值的人",
      "pos": "n.",
      "tag": "财务",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•ss•t",
      "reviewPrompts": [
        "看到中文“资产；有价值的人”时，尝试立刻拼出 asset。",
        "把 asset 拆成 2 个小节练习，减少漏键。",
        "在商务职场分类中，asset适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word asset when I talk about 资产；有价值的人.",
        "The word asset is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing asset three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-t。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：资产。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“资产”？",
        "answer": "asset"
      }
    },
    "audit": {
      "zh": "审计；检查",
      "pos": "n./v.",
      "tag": "财务",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "••d•t",
      "reviewPrompts": [
        "看到中文“审计；检查”时，尝试立刻拼出 audit。",
        "把 audit 拆成 2 个小节练习，减少漏键。",
        "在商务职场分类中，audit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word audit when I talk about 审计；检查.",
        "The word audit is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing audit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-t。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：审计。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“审计”？",
        "answer": "audit"
      }
    },
    "budget": {
      "zh": "预算",
      "pos": "n.",
      "tag": "财务",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "b•dg•t",
      "reviewPrompts": [
        "看到中文“预算”时，尝试立刻拼出 budget。",
        "把 budget 拆成 2 个小节练习，减少漏键。",
        "在商务职场分类中，budget适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word budget when I talk about 预算.",
        "The word budget is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing budget three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 6，先记首尾字母 b-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：预算。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“预算”？",
        "answer": "budget"
      }
    },
    "campaign": {
      "zh": "活动；营销战役",
      "pos": "n.",
      "tag": "市场",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mp••gn",
      "reviewPrompts": [
        "看到中文“活动；营销战役”时，尝试立刻拼出 campaign。",
        "把 campaign 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，campaign适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word campaign when I talk about 活动；营销战役.",
        "The word campaign is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing campaign three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-n。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：活动。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“活动”？",
        "answer": "campaign"
      }
    },
    "capacity": {
      "zh": "容量；能力",
      "pos": "n.",
      "tag": "资源",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•p•c•ty",
      "reviewPrompts": [
        "看到中文“容量；能力”时，尝试立刻拼出 capacity。",
        "把 capacity 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，capacity适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word capacity when I talk about 容量；能力.",
        "The word capacity is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing capacity three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-y。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：容量。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“容量”？",
        "answer": "capacity"
      }
    },
    "client": {
      "zh": "客户",
      "pos": "n.",
      "tag": "商务",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "cl••nt",
      "reviewPrompts": [
        "看到中文“客户”时，尝试立刻拼出 client。",
        "把 client 拆成 2 个小节练习，减少漏键。",
        "在商务职场分类中，client适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word client when I talk about 客户.",
        "The word client is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing client three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：客户。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“客户”？",
        "answer": "client"
      }
    },
    "collaborate": {
      "zh": "合作；协作",
      "pos": "v.",
      "tag": "团队",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "c•ll•b•r•t•",
      "reviewPrompts": [
        "看到中文“合作；协作”时，尝试立刻拼出 collaborate。",
        "把 collaborate 拆成 4 个小节练习，减少漏键。",
        "在商务职场分类中，collaborate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word collaborate when I talk about 合作；协作.",
        "The word collaborate is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing collaborate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 11，先记首尾字母 c-e。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：合作。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“合作”？",
        "answer": "collaborate"
      }
    },
    "commission": {
      "zh": "佣金；委员会",
      "pos": "n.",
      "tag": "商务",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "c•mm•ss••n",
      "reviewPrompts": [
        "看到中文“佣金；委员会”时，尝试立刻拼出 commission。",
        "把 commission 拆成 4 个小节练习，减少漏键。",
        "在商务职场分类中，commission适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word commission when I talk about 佣金；委员会.",
        "The word commission is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing commission three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 10，先记首尾字母 c-n。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：佣金。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“佣金”？",
        "answer": "commission"
      }
    },
    "contract": {
      "zh": "合同；订立合同",
      "pos": "n./v.",
      "tag": "法律",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ntr•ct",
      "reviewPrompts": [
        "看到中文“合同；订立合同”时，尝试立刻拼出 contract。",
        "把 contract 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，contract适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word contract when I talk about 合同；订立合同.",
        "The word contract is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing contract three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-t。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：合同。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“合同”？",
        "answer": "contract"
      }
    },
    "deadline": {
      "zh": "截止日期",
      "pos": "n.",
      "tag": "项目",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d••dl•n•",
      "reviewPrompts": [
        "看到中文“截止日期”时，尝试立刻拼出 deadline。",
        "把 deadline 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，deadline适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word deadline when I talk about 截止日期.",
        "The word deadline is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing deadline three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：截止日期。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“截止日期”？",
        "answer": "deadline"
      }
    },
    "delegate": {
      "zh": "委派；代表",
      "pos": "v./n.",
      "tag": "管理",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•l•g•t•",
      "reviewPrompts": [
        "看到中文“委派；代表”时，尝试立刻拼出 delegate。",
        "把 delegate 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，delegate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word delegate when I talk about 委派；代表.",
        "The word delegate is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing delegate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：委派。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“委派”？",
        "answer": "delegate"
      }
    },
    "deliverable": {
      "zh": "交付成果",
      "pos": "n.",
      "tag": "项目",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "d•l•v•r•bl•",
      "reviewPrompts": [
        "看到中文“交付成果”时，尝试立刻拼出 deliverable。",
        "把 deliverable 拆成 4 个小节练习，减少漏键。",
        "在商务职场分类中，deliverable适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word deliverable when I talk about 交付成果.",
        "The word deliverable is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing deliverable three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 11，先记首尾字母 d-e。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：交付成果。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“交付成果”？",
        "answer": "deliverable"
      }
    },
    "department": {
      "zh": "部门",
      "pos": "n.",
      "tag": "组织",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "d•p•rtm•nt",
      "reviewPrompts": [
        "看到中文“部门”时，尝试立刻拼出 department。",
        "把 department 拆成 4 个小节练习，减少漏键。",
        "在商务职场分类中，department适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word department when I talk about 部门.",
        "The word department is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing department three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 10，先记首尾字母 d-t。",
        "元音 3 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：部门。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“部门”？",
        "answer": "department"
      }
    },
    "efficiency": {
      "zh": "效率",
      "pos": "n.",
      "tag": "管理",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•ff•c••ncy",
      "reviewPrompts": [
        "看到中文“效率”时，尝试立刻拼出 efficiency。",
        "把 efficiency 拆成 4 个小节练习，减少漏键。",
        "在商务职场分类中，efficiency适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word efficiency when I talk about 效率.",
        "The word efficiency is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing efficiency three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 10，先记首尾字母 e-y。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：效率。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“效率”？",
        "answer": "efficiency"
      }
    },
    "enterprise": {
      "zh": "企业；事业",
      "pos": "n.",
      "tag": "组织",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•nt•rpr•s•",
      "reviewPrompts": [
        "看到中文“企业；事业”时，尝试立刻拼出 enterprise。",
        "把 enterprise 拆成 4 个小节练习，减少漏键。",
        "在商务职场分类中，enterprise适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word enterprise when I talk about 企业；事业.",
        "The word enterprise is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing enterprise three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 10，先记首尾字母 e-e。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：企业。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“企业”？",
        "answer": "enterprise"
      }
    },
    "estimate": {
      "zh": "估计；报价",
      "pos": "v./n.",
      "tag": "项目",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•st•m•t•",
      "reviewPrompts": [
        "看到中文“估计；报价”时，尝试立刻拼出 estimate。",
        "把 estimate 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，estimate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word estimate when I talk about 估计；报价.",
        "The word estimate is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing estimate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：估计。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“估计”？",
        "answer": "estimate"
      }
    },
    "feedback": {
      "zh": "反馈",
      "pos": "n.",
      "tag": "沟通",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "f••db•ck",
      "reviewPrompts": [
        "看到中文“反馈”时，尝试立刻拼出 feedback。",
        "把 feedback 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，feedback适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word feedback when I talk about 反馈.",
        "The word feedback is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing feedback three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 8，先记首尾字母 f-k。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：反馈。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“反馈”？",
        "answer": "feedback"
      }
    },
    "finance": {
      "zh": "金融；财务",
      "pos": "n.",
      "tag": "财务",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "f•n•nc•",
      "reviewPrompts": [
        "看到中文“金融；财务”时，尝试立刻拼出 finance。",
        "把 finance 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，finance适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word finance when I talk about 金融；财务.",
        "The word finance is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing finance three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 7，先记首尾字母 f-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：金融。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“金融”？",
        "answer": "finance"
      }
    },
    "forecast": {
      "zh": "预测；预报",
      "pos": "n./v.",
      "tag": "规划",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "f•r•c•st",
      "reviewPrompts": [
        "看到中文“预测；预报”时，尝试立刻拼出 forecast。",
        "把 forecast 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，forecast适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word forecast when I talk about 预测；预报.",
        "The word forecast is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing forecast three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 8，先记首尾字母 f-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：预测。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“预测”？",
        "answer": "forecast"
      }
    },
    "invoice": {
      "zh": "发票；开票",
      "pos": "n./v.",
      "tag": "财务",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•nv••c•",
      "reviewPrompts": [
        "看到中文“发票；开票”时，尝试立刻拼出 invoice。",
        "把 invoice 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，invoice适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word invoice when I talk about 发票；开票.",
        "The word invoice is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing invoice three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 7，先记首尾字母 i-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：发票。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“发票”？",
        "answer": "invoice"
      }
    },
    "launch": {
      "zh": "发布；启动",
      "pos": "v./n.",
      "tag": "产品",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "l••nch",
      "reviewPrompts": [
        "看到中文“发布；启动”时，尝试立刻拼出 launch。",
        "把 launch 拆成 2 个小节练习，减少漏键。",
        "在商务职场分类中，launch适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word launch when I talk about 发布；启动.",
        "The word launch is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing launch three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 6，先记首尾字母 l-h。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：发布。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“发布”？",
        "answer": "launch"
      }
    },
    "leadership": {
      "zh": "领导力",
      "pos": "n.",
      "tag": "管理",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "l••d•rsh•p",
      "reviewPrompts": [
        "看到中文“领导力”时，尝试立刻拼出 leadership。",
        "把 leadership 拆成 4 个小节练习，减少漏键。",
        "在商务职场分类中，leadership适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word leadership when I talk about 领导力.",
        "The word leadership is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing leadership three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 10，先记首尾字母 l-p。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：领导力。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“领导力”？",
        "answer": "leadership"
      }
    },
    "margin": {
      "zh": "利润率；边缘",
      "pos": "n.",
      "tag": "财务",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m•rg•n",
      "reviewPrompts": [
        "看到中文“利润率；边缘”时，尝试立刻拼出 margin。",
        "把 margin 拆成 2 个小节练习，减少漏键。",
        "在商务职场分类中，margin适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word margin when I talk about 利润率；边缘.",
        "The word margin is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing margin three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-n。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：利润率。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“利润率”？",
        "answer": "margin"
      }
    },
    "meeting": {
      "zh": "会议；会面",
      "pos": "n.",
      "tag": "会议",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "m••t•ng",
      "reviewPrompts": [
        "看到中文“会议；会面”时，尝试立刻拼出 meeting。",
        "把 meeting 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，meeting适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word meeting when I talk about 会议；会面.",
        "The word meeting is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing meeting three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 7，先记首尾字母 m-g。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：会议。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“会议”？",
        "answer": "meeting"
      }
    },
    "negotiate": {
      "zh": "谈判；协商",
      "pos": "v.",
      "tag": "沟通",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "n•g•t••t•",
      "reviewPrompts": [
        "看到中文“谈判；协商”时，尝试立刻拼出 negotiate。",
        "把 negotiate 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，negotiate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word negotiate when I talk about 谈判；协商.",
        "The word negotiate is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing negotiate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 9，先记首尾字母 n-e。",
        "元音 5 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：谈判。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“谈判”？",
        "answer": "negotiate"
      }
    },
    "objective": {
      "zh": "目标；客观的",
      "pos": "n./adj.",
      "tag": "规划",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•bj•ct•v•",
      "reviewPrompts": [
        "看到中文“目标；客观的”时，尝试立刻拼出 objective。",
        "把 objective 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，objective适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word objective when I talk about 目标；客观的.",
        "The word objective is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing objective three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 9，先记首尾字母 o-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：目标。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“目标”？",
        "answer": "objective"
      }
    },
    "operation": {
      "zh": "运营；操作",
      "pos": "n.",
      "tag": "管理",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•p•r•t••n",
      "reviewPrompts": [
        "看到中文“运营；操作”时，尝试立刻拼出 operation。",
        "把 operation 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，operation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word operation when I talk about 运营；操作.",
        "The word operation is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing operation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 9，先记首尾字母 o-n。",
        "元音 5 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：运营。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“运营”？",
        "answer": "operation"
      }
    },
    "partnership": {
      "zh": "合作关系",
      "pos": "n.",
      "tag": "商务",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "p•rtn•rsh•p",
      "reviewPrompts": [
        "看到中文“合作关系”时，尝试立刻拼出 partnership。",
        "把 partnership 拆成 4 个小节练习，减少漏键。",
        "在商务职场分类中，partnership适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word partnership when I talk about 合作关系.",
        "The word partnership is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing partnership three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 11，先记首尾字母 p-p。",
        "元音 3 个，辅音 8 个；打字时注意节奏。",
        "中文释义关键词：合作关系。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“合作关系”？",
        "answer": "partnership"
      }
    },
    "pipeline": {
      "zh": "业务管线；流程",
      "pos": "n.",
      "tag": "销售",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "p•p•l•n•",
      "reviewPrompts": [
        "看到中文“业务管线；流程”时，尝试立刻拼出 pipeline。",
        "把 pipeline 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，pipeline适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word pipeline when I talk about 业务管线；流程.",
        "The word pipeline is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing pipeline three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：业务管线。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“业务管线”？",
        "answer": "pipeline"
      }
    },
    "priority": {
      "zh": "优先事项",
      "pos": "n.",
      "tag": "管理",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "pr••r•ty",
      "reviewPrompts": [
        "看到中文“优先事项”时，尝试立刻拼出 priority。",
        "把 priority 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，priority适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word priority when I talk about 优先事项.",
        "The word priority is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing priority three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-y。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：优先事项。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“优先事项”？",
        "answer": "priority"
      }
    },
    "proposal": {
      "zh": "提案；建议书",
      "pos": "n.",
      "tag": "写作",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•p•s•l",
      "reviewPrompts": [
        "看到中文“提案；建议书”时，尝试立刻拼出 proposal。",
        "把 proposal 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，proposal适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word proposal when I talk about 提案；建议书.",
        "The word proposal is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing proposal three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-l。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：提案。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“提案”？",
        "answer": "proposal"
      }
    },
    "quarterly": {
      "zh": "季度的",
      "pos": "adj.",
      "tag": "时间",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "q••rt•rly",
      "reviewPrompts": [
        "看到中文“季度的”时，尝试立刻拼出 quarterly。",
        "把 quarterly 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，quarterly适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word quarterly when I talk about 季度的.",
        "The word quarterly is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing quarterly three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "Q 开头，长度 9，先记首尾字母 q-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：季度的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“季度的”？",
        "answer": "quarterly"
      }
    },
    "recruit": {
      "zh": "招聘；新成员",
      "pos": "v./n.",
      "tag": "人事",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r•cr••t",
      "reviewPrompts": [
        "看到中文“招聘；新成员”时，尝试立刻拼出 recruit。",
        "把 recruit 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，recruit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word recruit when I talk about 招聘；新成员.",
        "The word recruit is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing recruit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：招聘。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“招聘”？",
        "answer": "recruit"
      }
    },
    "refund": {
      "zh": "退款",
      "pos": "n./v.",
      "tag": "交易",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "r•f•nd",
      "reviewPrompts": [
        "看到中文“退款”时，尝试立刻拼出 refund。",
        "把 refund 拆成 2 个小节练习，减少漏键。",
        "在商务职场分类中，refund适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word refund when I talk about 退款.",
        "The word refund is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing refund three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-d。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：退款。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“退款”？",
        "answer": "refund"
      }
    },
    "revenue": {
      "zh": "收入",
      "pos": "n.",
      "tag": "财务",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r•v•n••",
      "reviewPrompts": [
        "看到中文“收入”时，尝试立刻拼出 revenue。",
        "把 revenue 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，revenue适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word revenue when I talk about 收入.",
        "The word revenue is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing revenue three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：收入。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“收入”？",
        "answer": "revenue"
      }
    },
    "schedule": {
      "zh": "日程；安排",
      "pos": "n./v.",
      "tag": "时间",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "sch•d•l•",
      "reviewPrompts": [
        "看到中文“日程；安排”时，尝试立刻拼出 schedule。",
        "把 schedule 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，schedule适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word schedule when I talk about 日程；安排.",
        "The word schedule is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing schedule three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：日程。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“日程”？",
        "answer": "schedule"
      }
    },
    "stakeholder": {
      "zh": "利益相关者",
      "pos": "n.",
      "tag": "项目",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "st•k•h•ld•r",
      "reviewPrompts": [
        "看到中文“利益相关者”时，尝试立刻拼出 stakeholder。",
        "把 stakeholder 拆成 4 个小节练习，减少漏键。",
        "在商务职场分类中，stakeholder适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word stakeholder when I talk about 利益相关者.",
        "The word stakeholder is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing stakeholder three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 11，先记首尾字母 s-r。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：利益相关者。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“利益相关者”？",
        "answer": "stakeholder"
      }
    },
    "strategy": {
      "zh": "战略；策略",
      "pos": "n.",
      "tag": "规划",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "str•t•gy",
      "reviewPrompts": [
        "看到中文“战略；策略”时，尝试立刻拼出 strategy。",
        "把 strategy 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，strategy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word strategy when I talk about 战略；策略.",
        "The word strategy is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing strategy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-y。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：战略。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“战略”？",
        "answer": "strategy"
      }
    },
    "supervise": {
      "zh": "监督；管理",
      "pos": "v.",
      "tag": "管理",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "s•p•rv•s•",
      "reviewPrompts": [
        "看到中文“监督；管理”时，尝试立刻拼出 supervise。",
        "把 supervise 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，supervise适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word supervise when I talk about 监督；管理.",
        "The word supervise is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing supervise three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 9，先记首尾字母 s-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：监督。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“监督”？",
        "answer": "supervise"
      }
    },
    "supplier": {
      "zh": "供应商",
      "pos": "n.",
      "tag": "供应链",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "s•ppl••r",
      "reviewPrompts": [
        "看到中文“供应商”时，尝试立刻拼出 supplier。",
        "把 supplier 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，supplier适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word supplier when I talk about 供应商.",
        "The word supplier is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing supplier three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-r。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：供应商。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“供应商”？",
        "answer": "supplier"
      }
    },
    "target": {
      "zh": "目标；对象",
      "pos": "n./v.",
      "tag": "市场",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "t•rg•t",
      "reviewPrompts": [
        "看到中文“目标；对象”时，尝试立刻拼出 target。",
        "把 target 拆成 2 个小节练习，减少漏键。",
        "在商务职场分类中，target适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word target when I talk about 目标；对象.",
        "The word target is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing target three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 6，先记首尾字母 t-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：目标。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“目标”？",
        "answer": "target"
      }
    },
    "transaction": {
      "zh": "交易；事务",
      "pos": "n.",
      "tag": "财务",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "tr•ns•ct••n",
      "reviewPrompts": [
        "看到中文“交易；事务”时，尝试立刻拼出 transaction。",
        "把 transaction 拆成 4 个小节练习，减少漏键。",
        "在商务职场分类中，transaction适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word transaction when I talk about 交易；事务.",
        "The word transaction is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing transaction three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 11，先记首尾字母 t-n。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：交易。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“交易”？",
        "answer": "transaction"
      }
    },
    "workflow": {
      "zh": "工作流程",
      "pos": "n.",
      "tag": "项目",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "w•rkfl•w",
      "reviewPrompts": [
        "看到中文“工作流程”时，尝试立刻拼出 workflow。",
        "把 workflow 拆成 3 个小节练习，减少漏键。",
        "在商务职场分类中，workflow适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word workflow when I talk about 工作流程.",
        "The word workflow is useful in 商务职场 reading, listening, or writing practice.",
        "Try typing workflow three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 8，先记首尾字母 w-w。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：工作流程。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“工作流程”？",
        "answer": "workflow"
      }
    }
  },
  "科技互联网": {
    "algorithm": {
      "zh": "算法",
      "pos": "n.",
      "tag": "AI",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•lg•r•thm",
      "reviewPrompts": [
        "看到中文“算法”时，尝试立刻拼出 algorithm。",
        "把 algorithm 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，algorithm适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word algorithm when I talk about 算法.",
        "The word algorithm is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing algorithm three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-m。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：算法。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“算法”？",
        "answer": "algorithm"
      }
    },
    "analytics": {
      "zh": "数据分析",
      "pos": "n.",
      "tag": "数据",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•n•lyt•cs",
      "reviewPrompts": [
        "看到中文“数据分析”时，尝试立刻拼出 analytics。",
        "把 analytics 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，analytics适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word analytics when I talk about 数据分析.",
        "The word analytics is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing analytics three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-s。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：数据分析。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“数据分析”？",
        "answer": "analytics"
      }
    },
    "archive": {
      "zh": "归档；档案",
      "pos": "n./v.",
      "tag": "数据",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•rch•v•",
      "reviewPrompts": [
        "看到中文“归档；档案”时，尝试立刻拼出 archive。",
        "把 archive 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，archive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word archive when I talk about 归档；档案.",
        "The word archive is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing archive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：归档。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“归档”？",
        "answer": "archive"
      }
    },
    "automation": {
      "zh": "自动化",
      "pos": "n.",
      "tag": "效率",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "••t•m•t••n",
      "reviewPrompts": [
        "看到中文“自动化”时，尝试立刻拼出 automation。",
        "把 automation 拆成 4 个小节练习，减少漏键。",
        "在科技互联网分类中，automation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word automation when I talk about 自动化.",
        "The word automation is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing automation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 10，先记首尾字母 a-n。",
        "元音 6 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：自动化。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“自动化”？",
        "answer": "automation"
      }
    },
    "bandwidth": {
      "zh": "带宽；处理能力",
      "pos": "n.",
      "tag": "网络",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "b•ndw•dth",
      "reviewPrompts": [
        "看到中文“带宽；处理能力”时，尝试立刻拼出 bandwidth。",
        "把 bandwidth 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，bandwidth适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word bandwidth when I talk about 带宽；处理能力.",
        "The word bandwidth is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing bandwidth three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 9，先记首尾字母 b-h。",
        "元音 2 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：带宽。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“带宽”？",
        "answer": "bandwidth"
      }
    },
    "browser": {
      "zh": "浏览器",
      "pos": "n.",
      "tag": "网络",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "br•ws•r",
      "reviewPrompts": [
        "看到中文“浏览器”时，尝试立刻拼出 browser。",
        "把 browser 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，browser适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word browser when I talk about 浏览器.",
        "The word browser is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing browser three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-r。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：浏览器。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“浏览器”？",
        "answer": "browser"
      }
    },
    "cache": {
      "zh": "缓存",
      "pos": "n./v.",
      "tag": "系统",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "c•ch•",
      "reviewPrompts": [
        "看到中文“缓存”时，尝试立刻拼出 cache。",
        "把 cache 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，cache适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cache when I talk about 缓存.",
        "The word cache is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing cache three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-e。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：缓存。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“缓存”？",
        "answer": "cache"
      }
    },
    "cloud": {
      "zh": "云；云端服务",
      "pos": "n.",
      "tag": "网络",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "cl••d",
      "reviewPrompts": [
        "看到中文“云；云端服务”时，尝试立刻拼出 cloud。",
        "把 cloud 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，cloud适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cloud when I talk about 云；云端服务.",
        "The word cloud is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing cloud three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-d。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：云。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“云”？",
        "answer": "cloud"
      }
    },
    "compile": {
      "zh": "编译；汇编",
      "pos": "v.",
      "tag": "开发",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mp•l•",
      "reviewPrompts": [
        "看到中文“编译；汇编”时，尝试立刻拼出 compile。",
        "把 compile 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，compile适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word compile when I talk about 编译；汇编.",
        "The word compile is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing compile three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：编译。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“编译”？",
        "answer": "compile"
      }
    },
    "component": {
      "zh": "组件；组成部分",
      "pos": "n.",
      "tag": "开发",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "c•mp•n•nt",
      "reviewPrompts": [
        "看到中文“组件；组成部分”时，尝试立刻拼出 component。",
        "把 component 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，component适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word component when I talk about 组件；组成部分.",
        "The word component is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing component three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 9，先记首尾字母 c-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：组件。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“组件”？",
        "answer": "component"
      }
    },
    "console": {
      "zh": "控制台；安慰",
      "pos": "n./v.",
      "tag": "开发",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ns•l•",
      "reviewPrompts": [
        "看到中文“控制台；安慰”时，尝试立刻拼出 console。",
        "把 console 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，console适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word console when I talk about 控制台；安慰.",
        "The word console is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing console three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：控制台。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“控制台”？",
        "answer": "console"
      }
    },
    "database": {
      "zh": "数据库",
      "pos": "n.",
      "tag": "数据",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•t•b•s•",
      "reviewPrompts": [
        "看到中文“数据库”时，尝试立刻拼出 database。",
        "把 database 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，database适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word database when I talk about 数据库.",
        "The word database is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing database three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：数据库。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“数据库”？",
        "answer": "database"
      }
    },
    "debug": {
      "zh": "调试",
      "pos": "v.",
      "tag": "开发",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "d•b•g",
      "reviewPrompts": [
        "看到中文“调试”时，尝试立刻拼出 debug。",
        "把 debug 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，debug适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word debug when I talk about 调试.",
        "The word debug is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing debug three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 5，先记首尾字母 d-g。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：调试。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“调试”？",
        "answer": "debug"
      }
    },
    "deploy": {
      "zh": "部署；展开",
      "pos": "v.",
      "tag": "开发",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•pl•y",
      "reviewPrompts": [
        "看到中文“部署；展开”时，尝试立刻拼出 deploy。",
        "把 deploy 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，deploy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word deploy when I talk about 部署；展开.",
        "The word deploy is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing deploy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：部署。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“部署”？",
        "answer": "deploy"
      }
    },
    "device": {
      "zh": "设备；装置",
      "pos": "n.",
      "tag": "硬件",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•v•c•",
      "reviewPrompts": [
        "看到中文“设备；装置”时，尝试立刻拼出 device。",
        "把 device 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，device适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word device when I talk about 设备；装置.",
        "The word device is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing device three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：设备。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“设备”？",
        "answer": "device"
      }
    },
    "digital": {
      "zh": "数字的",
      "pos": "adj.",
      "tag": "科技",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "d•g•t•l",
      "reviewPrompts": [
        "看到中文“数字的”时，尝试立刻拼出 digital。",
        "把 digital 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，digital适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word digital when I talk about 数字的.",
        "The word digital is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing digital three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 7，先记首尾字母 d-l。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：数字的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“数字的”？",
        "answer": "digital"
      }
    },
    "encrypt": {
      "zh": "加密",
      "pos": "v.",
      "tag": "安全",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•ncrypt",
      "reviewPrompts": [
        "看到中文“加密”时，尝试立刻拼出 encrypt。",
        "把 encrypt 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，encrypt适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word encrypt when I talk about 加密.",
        "The word encrypt is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing encrypt three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-t。",
        "元音 1 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：加密。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“加密”？",
        "answer": "encrypt"
      }
    },
    "framework": {
      "zh": "框架；结构",
      "pos": "n.",
      "tag": "开发",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "fr•m•w•rk",
      "reviewPrompts": [
        "看到中文“框架；结构”时，尝试立刻拼出 framework。",
        "把 framework 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，framework适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word framework when I talk about 框架；结构.",
        "The word framework is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing framework three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 9，先记首尾字母 f-k。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：框架。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“框架”？",
        "answer": "framework"
      }
    },
    "interface": {
      "zh": "界面；接口",
      "pos": "n.",
      "tag": "产品",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•nt•rf•c•",
      "reviewPrompts": [
        "看到中文“界面；接口”时，尝试立刻拼出 interface。",
        "把 interface 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，interface适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word interface when I talk about 界面；接口.",
        "The word interface is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing interface three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：界面。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“界面”？",
        "answer": "interface"
      }
    },
    "latency": {
      "zh": "延迟",
      "pos": "n.",
      "tag": "网络",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "l•t•ncy",
      "reviewPrompts": [
        "看到中文“延迟”时，尝试立刻拼出 latency。",
        "把 latency 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，latency适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word latency when I talk about 延迟.",
        "The word latency is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing latency three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 7，先记首尾字母 l-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：延迟。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“延迟”？",
        "answer": "latency"
      }
    },
    "login": {
      "zh": "登录",
      "pos": "n./v.",
      "tag": "账户",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "l•g•n",
      "reviewPrompts": [
        "看到中文“登录”时，尝试立刻拼出 login。",
        "把 login 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，login适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word login when I talk about 登录.",
        "The word login is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing login three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 5，先记首尾字母 l-n。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：登录。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“登录”？",
        "answer": "login"
      }
    },
    "module": {
      "zh": "模块",
      "pos": "n.",
      "tag": "开发",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m•d•l•",
      "reviewPrompts": [
        "看到中文“模块”时，尝试立刻拼出 module。",
        "把 module 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，module适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word module when I talk about 模块.",
        "The word module is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing module three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：模块。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“模块”？",
        "answer": "module"
      }
    },
    "network": {
      "zh": "网络；人脉",
      "pos": "n.",
      "tag": "网络",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "n•tw•rk",
      "reviewPrompts": [
        "看到中文“网络；人脉”时，尝试立刻拼出 network。",
        "把 network 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，network适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word network when I talk about 网络；人脉.",
        "The word network is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing network three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 7，先记首尾字母 n-k。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：网络。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“网络”？",
        "answer": "network"
      }
    },
    "platform": {
      "zh": "平台",
      "pos": "n.",
      "tag": "产品",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "pl•tf•rm",
      "reviewPrompts": [
        "看到中文“平台”时，尝试立刻拼出 platform。",
        "把 platform 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，platform适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word platform when I talk about 平台.",
        "The word platform is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing platform three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-m。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：平台。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“平台”？",
        "answer": "platform"
      }
    },
    "privacy": {
      "zh": "隐私",
      "pos": "n.",
      "tag": "安全",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•v•cy",
      "reviewPrompts": [
        "看到中文“隐私”时，尝试立刻拼出 privacy。",
        "把 privacy 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，privacy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word privacy when I talk about 隐私.",
        "The word privacy is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing privacy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：隐私。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“隐私”？",
        "answer": "privacy"
      }
    },
    "processor": {
      "zh": "处理器",
      "pos": "n.",
      "tag": "硬件",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "pr•c•ss•r",
      "reviewPrompts": [
        "看到中文“处理器”时，尝试立刻拼出 processor。",
        "把 processor 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，processor适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word processor when I talk about 处理器.",
        "The word processor is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing processor three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 9，先记首尾字母 p-r。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：处理器。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“处理器”？",
        "answer": "processor"
      }
    },
    "protocol": {
      "zh": "协议；礼仪",
      "pos": "n.",
      "tag": "网络",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•t•c•l",
      "reviewPrompts": [
        "看到中文“协议；礼仪”时，尝试立刻拼出 protocol。",
        "把 protocol 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，protocol适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word protocol when I talk about 协议；礼仪.",
        "The word protocol is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing protocol three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-l。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：协议。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“协议”？",
        "answer": "protocol"
      }
    },
    "query": {
      "zh": "查询；问题",
      "pos": "n./v.",
      "tag": "数据",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "q••ry",
      "reviewPrompts": [
        "看到中文“查询；问题”时，尝试立刻拼出 query。",
        "把 query 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，query适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word query when I talk about 查询；问题.",
        "The word query is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing query three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "Q 开头，长度 5，先记首尾字母 q-y。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：查询。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“查询”？",
        "answer": "query"
      }
    },
    "render": {
      "zh": "渲染；呈现",
      "pos": "v.",
      "tag": "界面",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "r•nd•r",
      "reviewPrompts": [
        "看到中文“渲染；呈现”时，尝试立刻拼出 render。",
        "把 render 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，render适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word render when I talk about 渲染；呈现.",
        "The word render is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing render three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-r。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：渲染。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“渲染”？",
        "answer": "render"
      }
    },
    "repository": {
      "zh": "代码仓库；资料库",
      "pos": "n.",
      "tag": "开发",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "r•p•s•t•ry",
      "reviewPrompts": [
        "看到中文“代码仓库；资料库”时，尝试立刻拼出 repository。",
        "把 repository 拆成 4 个小节练习，减少漏键。",
        "在科技互联网分类中，repository适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word repository when I talk about 代码仓库；资料库.",
        "The word repository is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing repository three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 10，先记首尾字母 r-y。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：代码仓库。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“代码仓库”？",
        "answer": "repository"
      }
    },
    "responsive": {
      "zh": "响应式的；反应快的",
      "pos": "adj.",
      "tag": "界面",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "r•sp•ns•v•",
      "reviewPrompts": [
        "看到中文“响应式的；反应快的”时，尝试立刻拼出 responsive。",
        "把 responsive 拆成 4 个小节练习，减少漏键。",
        "在科技互联网分类中，responsive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word responsive when I talk about 响应式的；反应快的.",
        "The word responsive is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing responsive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 10，先记首尾字母 r-e。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：响应式的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“响应式的”？",
        "answer": "responsive"
      }
    },
    "script": {
      "zh": "脚本；剧本",
      "pos": "n.",
      "tag": "开发",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "scr•pt",
      "reviewPrompts": [
        "看到中文“脚本；剧本”时，尝试立刻拼出 script。",
        "把 script 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，script适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word script when I talk about 脚本；剧本.",
        "The word script is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing script three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-t。",
        "元音 1 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：脚本。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“脚本”？",
        "answer": "script"
      }
    },
    "server": {
      "zh": "服务器",
      "pos": "n.",
      "tag": "网络",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "s•rv•r",
      "reviewPrompts": [
        "看到中文“服务器”时，尝试立刻拼出 server。",
        "把 server 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，server适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word server when I talk about 服务器.",
        "The word server is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing server three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-r。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：服务器。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“服务器”？",
        "answer": "server"
      }
    },
    "session": {
      "zh": "会话；阶段",
      "pos": "n.",
      "tag": "系统",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "s•ss••n",
      "reviewPrompts": [
        "看到中文“会话；阶段”时，尝试立刻拼出 session。",
        "把 session 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，session适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word session when I talk about 会话；阶段.",
        "The word session is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing session three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：会话。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“会话”？",
        "answer": "session"
      }
    },
    "software": {
      "zh": "软件",
      "pos": "n.",
      "tag": "开发",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "s•ftw•r•",
      "reviewPrompts": [
        "看到中文“软件”时，尝试立刻拼出 software。",
        "把 software 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，software适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word software when I talk about 软件.",
        "The word software is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing software three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：软件。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“软件”？",
        "answer": "software"
      }
    },
    "storage": {
      "zh": "存储；仓库",
      "pos": "n.",
      "tag": "数据",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "st•r•g•",
      "reviewPrompts": [
        "看到中文“存储；仓库”时，尝试立刻拼出 storage。",
        "把 storage 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，storage适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word storage when I talk about 存储；仓库.",
        "The word storage is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing storage three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：存储。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“存储”？",
        "answer": "storage"
      }
    },
    "stream": {
      "zh": "流；播放",
      "pos": "n./v.",
      "tag": "媒体",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "str••m",
      "reviewPrompts": [
        "看到中文“流；播放”时，尝试立刻拼出 stream。",
        "把 stream 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，stream适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word stream when I talk about 流；播放.",
        "The word stream is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing stream three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-m。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：流。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“流”？",
        "answer": "stream"
      }
    },
    "synchronize": {
      "zh": "同步",
      "pos": "v.",
      "tag": "系统",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "synchr•n•z•",
      "reviewPrompts": [
        "看到中文“同步”时，尝试立刻拼出 synchronize。",
        "把 synchronize 拆成 4 个小节练习，减少漏键。",
        "在科技互联网分类中，synchronize适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word synchronize when I talk about 同步.",
        "The word synchronize is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing synchronize three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 11，先记首尾字母 s-e。",
        "元音 3 个，辅音 8 个；打字时注意节奏。",
        "中文释义关键词：同步。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“同步”？",
        "answer": "synchronize"
      }
    },
    "template": {
      "zh": "模板",
      "pos": "n.",
      "tag": "设计",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "t•mpl•t•",
      "reviewPrompts": [
        "看到中文“模板”时，尝试立刻拼出 template。",
        "把 template 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，template适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word template when I talk about 模板.",
        "The word template is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing template three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 8，先记首尾字母 t-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：模板。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“模板”？",
        "answer": "template"
      }
    },
    "terminal": {
      "zh": "终端；末端的",
      "pos": "n./adj.",
      "tag": "开发",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "t•rm•n•l",
      "reviewPrompts": [
        "看到中文“终端；末端的”时，尝试立刻拼出 terminal。",
        "把 terminal 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，terminal适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word terminal when I talk about 终端；末端的.",
        "The word terminal is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing terminal three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 8，先记首尾字母 t-l。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：终端。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“终端”？",
        "answer": "terminal"
      }
    },
    "token": {
      "zh": "令牌；标记",
      "pos": "n.",
      "tag": "安全",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "t•k•n",
      "reviewPrompts": [
        "看到中文“令牌；标记”时，尝试立刻拼出 token。",
        "把 token 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，token适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word token when I talk about 令牌；标记.",
        "The word token is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing token three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 5，先记首尾字母 t-n。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：令牌。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“令牌”？",
        "answer": "token"
      }
    },
    "upload": {
      "zh": "上传",
      "pos": "v.",
      "tag": "网络",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•pl••d",
      "reviewPrompts": [
        "看到中文“上传”时，尝试立刻拼出 upload。",
        "把 upload 拆成 2 个小节练习，减少漏键。",
        "在科技互联网分类中，upload适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word upload when I talk about 上传.",
        "The word upload is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing upload three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "U 开头，长度 6，先记首尾字母 u-d。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：上传。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“上传”？",
        "answer": "upload"
      }
    },
    "username": {
      "zh": "用户名",
      "pos": "n.",
      "tag": "账户",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•s•rn•m•",
      "reviewPrompts": [
        "看到中文“用户名”时，尝试立刻拼出 username。",
        "把 username 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，username适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word username when I talk about 用户名.",
        "The word username is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing username three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "U 开头，长度 8，先记首尾字母 u-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：用户名。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“用户名”？",
        "answer": "username"
      }
    },
    "virtual": {
      "zh": "虚拟的；实际上的",
      "pos": "adj.",
      "tag": "科技",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "v•rt••l",
      "reviewPrompts": [
        "看到中文“虚拟的；实际上的”时，尝试立刻拼出 virtual。",
        "把 virtual 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，virtual适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word virtual when I talk about 虚拟的；实际上的.",
        "The word virtual is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing virtual three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 7，先记首尾字母 v-l。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：虚拟的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“虚拟的”？",
        "answer": "virtual"
      }
    },
    "wireless": {
      "zh": "无线的",
      "pos": "adj.",
      "tag": "网络",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "w•r•l•ss",
      "reviewPrompts": [
        "看到中文“无线的”时，尝试立刻拼出 wireless。",
        "把 wireless 拆成 3 个小节练习，减少漏键。",
        "在科技互联网分类中，wireless适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word wireless when I talk about 无线的.",
        "The word wireless is useful in 科技互联网 reading, listening, or writing practice.",
        "Try typing wireless three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 8，先记首尾字母 w-s。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：无线的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“无线的”？",
        "answer": "wireless"
      }
    }
  },
  "自然环境": {
    "atmosphere": {
      "zh": "大气；氛围",
      "pos": "n.",
      "tag": "气候",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•tm•sph•r•",
      "reviewPrompts": [
        "看到中文“大气；氛围”时，尝试立刻拼出 atmosphere。",
        "把 atmosphere 拆成 4 个小节练习，减少漏键。",
        "在自然环境分类中，atmosphere适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word atmosphere when I talk about 大气；氛围.",
        "The word atmosphere is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing atmosphere three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 10，先记首尾字母 a-e。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：大气。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“大气”？",
        "answer": "atmosphere"
      }
    },
    "biodiversity": {
      "zh": "生物多样性",
      "pos": "n.",
      "tag": "生态",
      "length": 12,
      "rhythm": "长词分段打",
      "typingPattern": "b••d•v•rs•ty",
      "reviewPrompts": [
        "看到中文“生物多样性”时，尝试立刻拼出 biodiversity。",
        "把 biodiversity 拆成 4 个小节练习，减少漏键。",
        "在自然环境分类中，biodiversity适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word biodiversity when I talk about 生物多样性.",
        "The word biodiversity is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing biodiversity three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 12，先记首尾字母 b-y。",
        "元音 5 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：生物多样性。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“生物多样性”？",
        "answer": "biodiversity"
      }
    },
    "blizzard": {
      "zh": "暴风雪",
      "pos": "n.",
      "tag": "天气",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "bl•zz•rd",
      "reviewPrompts": [
        "看到中文“暴风雪”时，尝试立刻拼出 blizzard。",
        "把 blizzard 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，blizzard适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word blizzard when I talk about 暴风雪.",
        "The word blizzard is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing blizzard three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 8，先记首尾字母 b-d。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：暴风雪。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“暴风雪”？",
        "answer": "blizzard"
      }
    },
    "canyon": {
      "zh": "峡谷",
      "pos": "n.",
      "tag": "地理",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ny•n",
      "reviewPrompts": [
        "看到中文“峡谷”时，尝试立刻拼出 canyon。",
        "把 canyon 拆成 2 个小节练习，减少漏键。",
        "在自然环境分类中，canyon适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word canyon when I talk about 峡谷.",
        "The word canyon is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing canyon three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-n。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：峡谷。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“峡谷”？",
        "answer": "canyon"
      }
    },
    "carbon": {
      "zh": "碳",
      "pos": "n.",
      "tag": "科学",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•rb•n",
      "reviewPrompts": [
        "看到中文“碳”时，尝试立刻拼出 carbon。",
        "把 carbon 拆成 2 个小节练习，减少漏键。",
        "在自然环境分类中，carbon适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word carbon when I talk about 碳.",
        "The word carbon is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing carbon three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-n。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：碳。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“碳”？",
        "answer": "carbon"
      }
    },
    "cliff": {
      "zh": "悬崖",
      "pos": "n.",
      "tag": "地理",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "cl•ff",
      "reviewPrompts": [
        "看到中文“悬崖”时，尝试立刻拼出 cliff。",
        "把 cliff 拆成 2 个小节练习，减少漏键。",
        "在自然环境分类中，cliff适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cliff when I talk about 悬崖.",
        "The word cliff is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing cliff three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-f。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：悬崖。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“悬崖”？",
        "answer": "cliff"
      }
    },
    "conservation": {
      "zh": "保护；保存",
      "pos": "n.",
      "tag": "环保",
      "length": 12,
      "rhythm": "长词分段打",
      "typingPattern": "c•ns•rv•t••n",
      "reviewPrompts": [
        "看到中文“保护；保存”时，尝试立刻拼出 conservation。",
        "把 conservation 拆成 4 个小节练习，减少漏键。",
        "在自然环境分类中，conservation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word conservation when I talk about 保护；保存.",
        "The word conservation is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing conservation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 12，先记首尾字母 c-n。",
        "元音 5 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：保护。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“保护”？",
        "answer": "conservation"
      }
    },
    "coral": {
      "zh": "珊瑚",
      "pos": "n.",
      "tag": "海洋",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "c•r•l",
      "reviewPrompts": [
        "看到中文“珊瑚”时，尝试立刻拼出 coral。",
        "把 coral 拆成 2 个小节练习，减少漏键。",
        "在自然环境分类中，coral适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word coral when I talk about 珊瑚.",
        "The word coral is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing coral three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-l。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：珊瑚。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“珊瑚”？",
        "answer": "coral"
      }
    },
    "creek": {
      "zh": "小溪",
      "pos": "n.",
      "tag": "水文",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "cr••k",
      "reviewPrompts": [
        "看到中文“小溪”时，尝试立刻拼出 creek。",
        "把 creek 拆成 2 个小节练习，减少漏键。",
        "在自然环境分类中，creek适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word creek when I talk about 小溪.",
        "The word creek is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing creek three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-k。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：小溪。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“小溪”？",
        "answer": "creek"
      }
    },
    "drought": {
      "zh": "干旱",
      "pos": "n.",
      "tag": "气候",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "dr••ght",
      "reviewPrompts": [
        "看到中文“干旱”时，尝试立刻拼出 drought。",
        "把 drought 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，drought适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word drought when I talk about 干旱.",
        "The word drought is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing drought three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 7，先记首尾字母 d-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：干旱。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“干旱”？",
        "answer": "drought"
      }
    },
    "ecosystem": {
      "zh": "生态系统",
      "pos": "n.",
      "tag": "生态",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•c•syst•m",
      "reviewPrompts": [
        "看到中文“生态系统”时，尝试立刻拼出 ecosystem。",
        "把 ecosystem 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，ecosystem适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ecosystem when I talk about 生态系统.",
        "The word ecosystem is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing ecosystem three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 9，先记首尾字母 e-m。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：生态系统。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“生态系统”？",
        "answer": "ecosystem"
      }
    },
    "emission": {
      "zh": "排放；散发",
      "pos": "n.",
      "tag": "环保",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•m•ss••n",
      "reviewPrompts": [
        "看到中文“排放；散发”时，尝试立刻拼出 emission。",
        "把 emission 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，emission适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word emission when I talk about 排放；散发.",
        "The word emission is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing emission three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-n。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：排放。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“排放”？",
        "answer": "emission"
      }
    },
    "endangered": {
      "zh": "濒危的",
      "pos": "adj.",
      "tag": "生态",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•nd•ng•r•d",
      "reviewPrompts": [
        "看到中文“濒危的”时，尝试立刻拼出 endangered。",
        "把 endangered 拆成 4 个小节练习，减少漏键。",
        "在自然环境分类中，endangered适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word endangered when I talk about 濒危的.",
        "The word endangered is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing endangered three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 10，先记首尾字母 e-d。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：濒危的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“濒危的”？",
        "answer": "endangered"
      }
    },
    "erosion": {
      "zh": "侵蚀；腐蚀",
      "pos": "n.",
      "tag": "地理",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•r•s••n",
      "reviewPrompts": [
        "看到中文“侵蚀；腐蚀”时，尝试立刻拼出 erosion。",
        "把 erosion 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，erosion适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word erosion when I talk about 侵蚀；腐蚀.",
        "The word erosion is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing erosion three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-n。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：侵蚀。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“侵蚀”？",
        "answer": "erosion"
      }
    },
    "extinct": {
      "zh": "灭绝的",
      "pos": "adj.",
      "tag": "生态",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•xt•nct",
      "reviewPrompts": [
        "看到中文“灭绝的”时，尝试立刻拼出 extinct。",
        "把 extinct 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，extinct适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word extinct when I talk about 灭绝的.",
        "The word extinct is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing extinct three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：灭绝的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“灭绝的”？",
        "answer": "extinct"
      }
    },
    "fertile": {
      "zh": "肥沃的；多产的",
      "pos": "adj.",
      "tag": "土地",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "f•rt•l•",
      "reviewPrompts": [
        "看到中文“肥沃的；多产的”时，尝试立刻拼出 fertile。",
        "把 fertile 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，fertile适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fertile when I talk about 肥沃的；多产的.",
        "The word fertile is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing fertile three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 7，先记首尾字母 f-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：肥沃的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“肥沃的”？",
        "answer": "fertile"
      }
    },
    "glacier": {
      "zh": "冰川",
      "pos": "n.",
      "tag": "地理",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "gl•c••r",
      "reviewPrompts": [
        "看到中文“冰川”时，尝试立刻拼出 glacier。",
        "把 glacier 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，glacier适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word glacier when I talk about 冰川.",
        "The word glacier is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing glacier three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 7，先记首尾字母 g-r。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：冰川。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“冰川”？",
        "answer": "glacier"
      }
    },
    "habitat": {
      "zh": "栖息地",
      "pos": "n.",
      "tag": "生态",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "h•b•t•t",
      "reviewPrompts": [
        "看到中文“栖息地”时，尝试立刻拼出 habitat。",
        "把 habitat 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，habitat适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word habitat when I talk about 栖息地.",
        "The word habitat is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing habitat three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 7，先记首尾字母 h-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：栖息地。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“栖息地”？",
        "answer": "habitat"
      }
    },
    "hurricane": {
      "zh": "飓风",
      "pos": "n.",
      "tag": "天气",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "h•rr•c•n•",
      "reviewPrompts": [
        "看到中文“飓风”时，尝试立刻拼出 hurricane。",
        "把 hurricane 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，hurricane适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word hurricane when I talk about 飓风.",
        "The word hurricane is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing hurricane three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 9，先记首尾字母 h-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：飓风。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“飓风”？",
        "answer": "hurricane"
      }
    },
    "landscape": {
      "zh": "风景；地形",
      "pos": "n.",
      "tag": "地理",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "l•ndsc•p•",
      "reviewPrompts": [
        "看到中文“风景；地形”时，尝试立刻拼出 landscape。",
        "把 landscape 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，landscape适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word landscape when I talk about 风景；地形.",
        "The word landscape is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing landscape three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 9，先记首尾字母 l-e。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：风景。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“风景”？",
        "answer": "landscape"
      }
    },
    "meadow": {
      "zh": "草地；牧场",
      "pos": "n.",
      "tag": "地貌",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m••d•w",
      "reviewPrompts": [
        "看到中文“草地；牧场”时，尝试立刻拼出 meadow。",
        "把 meadow 拆成 2 个小节练习，减少漏键。",
        "在自然环境分类中，meadow适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word meadow when I talk about 草地；牧场.",
        "The word meadow is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing meadow three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-w。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：草地。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“草地”？",
        "answer": "meadow"
      }
    },
    "mineral": {
      "zh": "矿物；矿物质",
      "pos": "n.",
      "tag": "科学",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "m•n•r•l",
      "reviewPrompts": [
        "看到中文“矿物；矿物质”时，尝试立刻拼出 mineral。",
        "把 mineral 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，mineral适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word mineral when I talk about 矿物；矿物质.",
        "The word mineral is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing mineral three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 7，先记首尾字母 m-l。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：矿物。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“矿物”？",
        "answer": "mineral"
      }
    },
    "mist": {
      "zh": "薄雾",
      "pos": "n.",
      "tag": "天气",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "m•st",
      "reviewPrompts": [
        "看到中文“薄雾”时，尝试立刻拼出 mist。",
        "把 mist 拆成 2 个小节练习，减少漏键。",
        "在自然环境分类中，mist适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word mist when I talk about 薄雾.",
        "The word mist is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing mist three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 4，先记首尾字母 m-t。",
        "元音 1 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：薄雾。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“薄雾”？",
        "answer": "mist"
      }
    },
    "oasis": {
      "zh": "绿洲",
      "pos": "n.",
      "tag": "地理",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "••s•s",
      "reviewPrompts": [
        "看到中文“绿洲”时，尝试立刻拼出 oasis。",
        "把 oasis 拆成 2 个小节练习，减少漏键。",
        "在自然环境分类中，oasis适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word oasis when I talk about 绿洲.",
        "The word oasis is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing oasis three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 5，先记首尾字母 o-s。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：绿洲。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“绿洲”？",
        "answer": "oasis"
      }
    },
    "organic": {
      "zh": "有机的；器官的",
      "pos": "adj.",
      "tag": "科学",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•rg•n•c",
      "reviewPrompts": [
        "看到中文“有机的；器官的”时，尝试立刻拼出 organic。",
        "把 organic 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，organic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word organic when I talk about 有机的；器官的.",
        "The word organic is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing organic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 7，先记首尾字母 o-c。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：有机的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“有机的”？",
        "answer": "organic"
      }
    },
    "pollution": {
      "zh": "污染",
      "pos": "n.",
      "tag": "环保",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "p•ll•t••n",
      "reviewPrompts": [
        "看到中文“污染”时，尝试立刻拼出 pollution。",
        "把 pollution 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，pollution适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word pollution when I talk about 污染.",
        "The word pollution is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing pollution three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 9，先记首尾字母 p-n。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：污染。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“污染”？",
        "answer": "pollution"
      }
    },
    "rainforest": {
      "zh": "雨林",
      "pos": "n.",
      "tag": "生态",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "r••nf•r•st",
      "reviewPrompts": [
        "看到中文“雨林”时，尝试立刻拼出 rainforest。",
        "把 rainforest 拆成 4 个小节练习，减少漏键。",
        "在自然环境分类中，rainforest适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word rainforest when I talk about 雨林.",
        "The word rainforest is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing rainforest three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 10，先记首尾字母 r-t。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：雨林。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“雨林”？",
        "answer": "rainforest"
      }
    },
    "recycle": {
      "zh": "回收利用",
      "pos": "v.",
      "tag": "环保",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r•cycl•",
      "reviewPrompts": [
        "看到中文“回收利用”时，尝试立刻拼出 recycle。",
        "把 recycle 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，recycle适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word recycle when I talk about 回收利用.",
        "The word recycle is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing recycle three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-e。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：回收利用。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“回收利用”？",
        "answer": "recycle"
      }
    },
    "renewable": {
      "zh": "可再生的",
      "pos": "adj.",
      "tag": "能源",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "r•n•w•bl•",
      "reviewPrompts": [
        "看到中文“可再生的”时，尝试立刻拼出 renewable。",
        "把 renewable 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，renewable适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word renewable when I talk about 可再生的.",
        "The word renewable is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing renewable three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 9，先记首尾字母 r-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：可再生的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“可再生的”？",
        "answer": "renewable"
      }
    },
    "reservoir": {
      "zh": "水库；储备",
      "pos": "n.",
      "tag": "水文",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "r•s•rv••r",
      "reviewPrompts": [
        "看到中文“水库；储备”时，尝试立刻拼出 reservoir。",
        "把 reservoir 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，reservoir适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word reservoir when I talk about 水库；储备.",
        "The word reservoir is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing reservoir three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 9，先记首尾字母 r-r。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：水库。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“水库”？",
        "answer": "reservoir"
      }
    },
    "resource": {
      "zh": "资源",
      "pos": "n.",
      "tag": "环保",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "r•s••rc•",
      "reviewPrompts": [
        "看到中文“资源”时，尝试立刻拼出 resource。",
        "把 resource 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，resource适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word resource when I talk about 资源.",
        "The word resource is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing resource three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 8，先记首尾字母 r-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：资源。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“资源”？",
        "answer": "resource"
      }
    },
    "savanna": {
      "zh": "热带草原",
      "pos": "n.",
      "tag": "地理",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "s•v•nn•",
      "reviewPrompts": [
        "看到中文“热带草原”时，尝试立刻拼出 savanna。",
        "把 savanna 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，savanna适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word savanna when I talk about 热带草原.",
        "The word savanna is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing savanna three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-a。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：热带草原。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“热带草原”？",
        "answer": "savanna"
      }
    },
    "species": {
      "zh": "物种",
      "pos": "n.",
      "tag": "生态",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "sp•c••s",
      "reviewPrompts": [
        "看到中文“物种”时，尝试立刻拼出 species。",
        "把 species 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，species适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word species when I talk about 物种.",
        "The word species is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing species three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-s。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：物种。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“物种”？",
        "answer": "species"
      }
    },
    "stream": {
      "zh": "溪流；流动",
      "pos": "n./v.",
      "tag": "水文",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "str••m",
      "reviewPrompts": [
        "看到中文“溪流；流动”时，尝试立刻拼出 stream。",
        "把 stream 拆成 2 个小节练习，减少漏键。",
        "在自然环境分类中，stream适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word stream when I talk about 溪流；流动.",
        "The word stream is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing stream three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-m。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：溪流。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“溪流”？",
        "answer": "stream"
      }
    },
    "sustainable": {
      "zh": "可持续的",
      "pos": "adj.",
      "tag": "环保",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "s•st••n•bl•",
      "reviewPrompts": [
        "看到中文“可持续的”时，尝试立刻拼出 sustainable。",
        "把 sustainable 拆成 4 个小节练习，减少漏键。",
        "在自然环境分类中，sustainable适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word sustainable when I talk about 可持续的.",
        "The word sustainable is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing sustainable three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 11，先记首尾字母 s-e。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：可持续的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“可持续的”？",
        "answer": "sustainable"
      }
    },
    "terrain": {
      "zh": "地形；地势",
      "pos": "n.",
      "tag": "地理",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "t•rr••n",
      "reviewPrompts": [
        "看到中文“地形；地势”时，尝试立刻拼出 terrain。",
        "把 terrain 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，terrain适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word terrain when I talk about 地形；地势.",
        "The word terrain is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing terrain three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：地形。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“地形”？",
        "answer": "terrain"
      }
    },
    "thunder": {
      "zh": "雷；雷声",
      "pos": "n.",
      "tag": "天气",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "th•nd•r",
      "reviewPrompts": [
        "看到中文“雷；雷声”时，尝试立刻拼出 thunder。",
        "把 thunder 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，thunder适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word thunder when I talk about 雷；雷声.",
        "The word thunder is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing thunder three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-r。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：雷。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“雷”？",
        "answer": "thunder"
      }
    },
    "valley": {
      "zh": "山谷",
      "pos": "n.",
      "tag": "地理",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "v•ll•y",
      "reviewPrompts": [
        "看到中文“山谷”时，尝试立刻拼出 valley。",
        "把 valley 拆成 2 个小节练习，减少漏键。",
        "在自然环境分类中，valley适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word valley when I talk about 山谷.",
        "The word valley is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing valley three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 6，先记首尾字母 v-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：山谷。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“山谷”？",
        "answer": "valley"
      }
    },
    "vegetation": {
      "zh": "植被",
      "pos": "n.",
      "tag": "生态",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "v•g•t•t••n",
      "reviewPrompts": [
        "看到中文“植被”时，尝试立刻拼出 vegetation。",
        "把 vegetation 拆成 4 个小节练习，减少漏键。",
        "在自然环境分类中，vegetation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word vegetation when I talk about 植被.",
        "The word vegetation is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing vegetation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 10，先记首尾字母 v-n。",
        "元音 5 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：植被。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“植被”？",
        "answer": "vegetation"
      }
    },
    "volcano": {
      "zh": "火山",
      "pos": "n.",
      "tag": "地理",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "v•lc•n•",
      "reviewPrompts": [
        "看到中文“火山”时，尝试立刻拼出 volcano。",
        "把 volcano 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，volcano适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word volcano when I talk about 火山.",
        "The word volcano is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing volcano three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 7，先记首尾字母 v-o。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：火山。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“火山”？",
        "answer": "volcano"
      }
    },
    "wilderness": {
      "zh": "荒野",
      "pos": "n.",
      "tag": "自然",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "w•ld•rn•ss",
      "reviewPrompts": [
        "看到中文“荒野”时，尝试立刻拼出 wilderness。",
        "把 wilderness 拆成 4 个小节练习，减少漏键。",
        "在自然环境分类中，wilderness适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word wilderness when I talk about 荒野.",
        "The word wilderness is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing wilderness three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 10，先记首尾字母 w-s。",
        "元音 3 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：荒野。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“荒野”？",
        "answer": "wilderness"
      }
    },
    "wildlife": {
      "zh": "野生动物",
      "pos": "n.",
      "tag": "生态",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "w•ldl•f•",
      "reviewPrompts": [
        "看到中文“野生动物”时，尝试立刻拼出 wildlife。",
        "把 wildlife 拆成 3 个小节练习，减少漏键。",
        "在自然环境分类中，wildlife适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word wildlife when I talk about 野生动物.",
        "The word wildlife is useful in 自然环境 reading, listening, or writing practice.",
        "Try typing wildlife three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 8，先记首尾字母 w-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：野生动物。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“野生动物”？",
        "answer": "wildlife"
      }
    }
  },
  "旅行生活": {
    "accommodation": {
      "zh": "住宿",
      "pos": "n.",
      "tag": "旅行",
      "length": 13,
      "rhythm": "长词分段打",
      "typingPattern": "•cc•mm•d•t••n",
      "reviewPrompts": [
        "看到中文“住宿”时，尝试立刻拼出 accommodation。",
        "把 accommodation 拆成 5 个小节练习，减少漏键。",
        "在旅行生活分类中，accommodation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word accommodation when I talk about 住宿.",
        "The word accommodation is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing accommodation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 13，先记首尾字母 a-n。",
        "元音 6 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：住宿。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“住宿”？",
        "answer": "accommodation"
      }
    },
    "aisle": {
      "zh": "过道；通道",
      "pos": "n.",
      "tag": "交通",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "••sl•",
      "reviewPrompts": [
        "看到中文“过道；通道”时，尝试立刻拼出 aisle。",
        "把 aisle 拆成 2 个小节练习，减少漏键。",
        "在旅行生活分类中，aisle适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word aisle when I talk about 过道；通道.",
        "The word aisle is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing aisle three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-e。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：过道。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“过道”？",
        "answer": "aisle"
      }
    },
    "arrival": {
      "zh": "到达；到来",
      "pos": "n.",
      "tag": "交通",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•rr•v•l",
      "reviewPrompts": [
        "看到中文“到达；到来”时，尝试立刻拼出 arrival。",
        "把 arrival 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，arrival适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word arrival when I talk about 到达；到来.",
        "The word arrival is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing arrival three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-l。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：到达。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“到达”？",
        "answer": "arrival"
      }
    },
    "baggage": {
      "zh": "行李",
      "pos": "n.",
      "tag": "旅行",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "b•gg•g•",
      "reviewPrompts": [
        "看到中文“行李”时，尝试立刻拼出 baggage。",
        "把 baggage 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，baggage适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word baggage when I talk about 行李.",
        "The word baggage is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing baggage three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：行李。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“行李”？",
        "answer": "baggage"
      }
    },
    "boarding": {
      "zh": "登机；寄宿",
      "pos": "n.",
      "tag": "交通",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "b••rd•ng",
      "reviewPrompts": [
        "看到中文“登机；寄宿”时，尝试立刻拼出 boarding。",
        "把 boarding 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，boarding适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word boarding when I talk about 登机；寄宿.",
        "The word boarding is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing boarding three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 8，先记首尾字母 b-g。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：登机。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“登机”？",
        "answer": "boarding"
      }
    },
    "booking": {
      "zh": "预订",
      "pos": "n.",
      "tag": "安排",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "b••k•ng",
      "reviewPrompts": [
        "看到中文“预订”时，尝试立刻拼出 booking。",
        "把 booking 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，booking适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word booking when I talk about 预订.",
        "The word booking is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing booking three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-g。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：预订。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“预订”？",
        "answer": "booking"
      }
    },
    "brochure": {
      "zh": "宣传册",
      "pos": "n.",
      "tag": "旅游",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "br•ch•r•",
      "reviewPrompts": [
        "看到中文“宣传册”时，尝试立刻拼出 brochure。",
        "把 brochure 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，brochure适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word brochure when I talk about 宣传册.",
        "The word brochure is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing brochure three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 8，先记首尾字母 b-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：宣传册。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“宣传册”？",
        "answer": "brochure"
      }
    },
    "cabin": {
      "zh": "客舱；小屋",
      "pos": "n.",
      "tag": "交通",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "c•b•n",
      "reviewPrompts": [
        "看到中文“客舱；小屋”时，尝试立刻拼出 cabin。",
        "把 cabin 拆成 2 个小节练习，减少漏键。",
        "在旅行生活分类中，cabin适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cabin when I talk about 客舱；小屋.",
        "The word cabin is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing cabin three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-n。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：客舱。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“客舱”？",
        "answer": "cabin"
      }
    },
    "cashier": {
      "zh": "收银员",
      "pos": "n.",
      "tag": "购物",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•sh••r",
      "reviewPrompts": [
        "看到中文“收银员”时，尝试立刻拼出 cashier。",
        "把 cashier 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，cashier适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cashier when I talk about 收银员.",
        "The word cashier is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing cashier three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-r。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：收银员。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“收银员”？",
        "answer": "cashier"
      }
    },
    "checkout": {
      "zh": "结账；退房",
      "pos": "n.",
      "tag": "住宿",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "ch•ck••t",
      "reviewPrompts": [
        "看到中文“结账；退房”时，尝试立刻拼出 checkout。",
        "把 checkout 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，checkout适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word checkout when I talk about 结账；退房.",
        "The word checkout is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing checkout three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：结账。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“结账”？",
        "answer": "checkout"
      }
    },
    "commute": {
      "zh": "通勤",
      "pos": "v./n.",
      "tag": "城市",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mm•t•",
      "reviewPrompts": [
        "看到中文“通勤”时，尝试立刻拼出 commute。",
        "把 commute 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，commute适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word commute when I talk about 通勤.",
        "The word commute is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing commute three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：通勤。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“通勤”？",
        "answer": "commute"
      }
    },
    "cuisine": {
      "zh": "菜肴；烹饪风格",
      "pos": "n.",
      "tag": "饮食",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c••s•n•",
      "reviewPrompts": [
        "看到中文“菜肴；烹饪风格”时，尝试立刻拼出 cuisine。",
        "把 cuisine 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，cuisine适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cuisine when I talk about 菜肴；烹饪风格.",
        "The word cuisine is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing cuisine three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：菜肴。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“菜肴”？",
        "answer": "cuisine"
      }
    },
    "customs": {
      "zh": "海关；习俗",
      "pos": "n.",
      "tag": "旅行",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•st•ms",
      "reviewPrompts": [
        "看到中文“海关；习俗”时，尝试立刻拼出 customs。",
        "把 customs 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，customs适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word customs when I talk about 海关；习俗.",
        "The word customs is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing customs three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-s。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：海关。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“海关”？",
        "answer": "customs"
      }
    },
    "delay": {
      "zh": "延误；推迟",
      "pos": "n./v.",
      "tag": "交通",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "d•l•y",
      "reviewPrompts": [
        "看到中文“延误；推迟”时，尝试立刻拼出 delay。",
        "把 delay 拆成 2 个小节练习，减少漏键。",
        "在旅行生活分类中，delay适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word delay when I talk about 延误；推迟.",
        "The word delay is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing delay three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 5，先记首尾字母 d-y。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：延误。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“延误”？",
        "answer": "delay"
      }
    },
    "departure": {
      "zh": "离开；出发",
      "pos": "n.",
      "tag": "交通",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "d•p•rt•r•",
      "reviewPrompts": [
        "看到中文“离开；出发”时，尝试立刻拼出 departure。",
        "把 departure 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，departure适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word departure when I talk about 离开；出发.",
        "The word departure is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing departure three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 9，先记首尾字母 d-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：离开。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“离开”？",
        "answer": "departure"
      }
    },
    "destination": {
      "zh": "目的地",
      "pos": "n.",
      "tag": "旅行",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "d•st•n•t••n",
      "reviewPrompts": [
        "看到中文“目的地”时，尝试立刻拼出 destination。",
        "把 destination 拆成 4 个小节练习，减少漏键。",
        "在旅行生活分类中，destination适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word destination when I talk about 目的地.",
        "The word destination is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing destination three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 11，先记首尾字母 d-n。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：目的地。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“目的地”？",
        "answer": "destination"
      }
    },
    "downtown": {
      "zh": "市中心",
      "pos": "n./adv.",
      "tag": "城市",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•wnt•wn",
      "reviewPrompts": [
        "看到中文“市中心”时，尝试立刻拼出 downtown。",
        "把 downtown 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，downtown适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word downtown when I talk about 市中心.",
        "The word downtown is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing downtown three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-n。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：市中心。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“市中心”？",
        "answer": "downtown"
      }
    },
    "fare": {
      "zh": "票价；车费",
      "pos": "n.",
      "tag": "交通",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "f•r•",
      "reviewPrompts": [
        "看到中文“票价；车费”时，尝试立刻拼出 fare。",
        "把 fare 拆成 2 个小节练习，减少漏键。",
        "在旅行生活分类中，fare适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fare when I talk about 票价；车费.",
        "The word fare is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing fare three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 4，先记首尾字母 f-e。",
        "元音 2 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：票价。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“票价”？",
        "answer": "fare"
      }
    },
    "ferry": {
      "zh": "渡船",
      "pos": "n.",
      "tag": "交通",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "f•rry",
      "reviewPrompts": [
        "看到中文“渡船”时，尝试立刻拼出 ferry。",
        "把 ferry 拆成 2 个小节练习，减少漏键。",
        "在旅行生活分类中，ferry适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ferry when I talk about 渡船.",
        "The word ferry is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing ferry three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 5，先记首尾字母 f-y。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：渡船。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“渡船”？",
        "answer": "ferry"
      }
    },
    "itinerary": {
      "zh": "行程安排",
      "pos": "n.",
      "tag": "旅行",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•t•n•r•ry",
      "reviewPrompts": [
        "看到中文“行程安排”时，尝试立刻拼出 itinerary。",
        "把 itinerary 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，itinerary适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word itinerary when I talk about 行程安排.",
        "The word itinerary is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing itinerary three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-y。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：行程安排。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“行程安排”？",
        "answer": "itinerary"
      }
    },
    "landmark": {
      "zh": "地标；里程碑",
      "pos": "n.",
      "tag": "城市",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "l•ndm•rk",
      "reviewPrompts": [
        "看到中文“地标；里程碑”时，尝试立刻拼出 landmark。",
        "把 landmark 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，landmark适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word landmark when I talk about 地标；里程碑.",
        "The word landmark is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing landmark three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 8，先记首尾字母 l-k。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：地标。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“地标”？",
        "answer": "landmark"
      }
    },
    "laundry": {
      "zh": "洗衣物；洗衣店",
      "pos": "n.",
      "tag": "生活",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "l••ndry",
      "reviewPrompts": [
        "看到中文“洗衣物；洗衣店”时，尝试立刻拼出 laundry。",
        "把 laundry 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，laundry适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word laundry when I talk about 洗衣物；洗衣店.",
        "The word laundry is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing laundry three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 7，先记首尾字母 l-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：洗衣物。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“洗衣物”？",
        "answer": "laundry"
      }
    },
    "luggage": {
      "zh": "行李",
      "pos": "n.",
      "tag": "旅行",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "l•gg•g•",
      "reviewPrompts": [
        "看到中文“行李”时，尝试立刻拼出 luggage。",
        "把 luggage 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，luggage适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word luggage when I talk about 行李.",
        "The word luggage is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing luggage three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 7，先记首尾字母 l-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：行李。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“行李”？",
        "answer": "luggage"
      }
    },
    "menu": {
      "zh": "菜单",
      "pos": "n.",
      "tag": "饮食",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "m•n•",
      "reviewPrompts": [
        "看到中文“菜单”时，尝试立刻拼出 menu。",
        "把 menu 拆成 2 个小节练习，减少漏键。",
        "在旅行生活分类中，menu适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word menu when I talk about 菜单.",
        "The word menu is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing menu three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 4，先记首尾字母 m-u。",
        "元音 2 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：菜单。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“菜单”？",
        "answer": "menu"
      }
    },
    "museum": {
      "zh": "博物馆",
      "pos": "n.",
      "tag": "文化",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m•s••m",
      "reviewPrompts": [
        "看到中文“博物馆”时，尝试立刻拼出 museum。",
        "把 museum 拆成 2 个小节练习，减少漏键。",
        "在旅行生活分类中，museum适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word museum when I talk about 博物馆.",
        "The word museum is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing museum three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-m。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：博物馆。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“博物馆”？",
        "answer": "museum"
      }
    },
    "passport": {
      "zh": "护照",
      "pos": "n.",
      "tag": "旅行",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "p•ssp•rt",
      "reviewPrompts": [
        "看到中文“护照”时，尝试立刻拼出 passport。",
        "把 passport 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，passport适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word passport when I talk about 护照.",
        "The word passport is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing passport three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-t。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：护照。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“护照”？",
        "answer": "passport"
      }
    },
    "receipt": {
      "zh": "收据",
      "pos": "n.",
      "tag": "购物",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r•c••pt",
      "reviewPrompts": [
        "看到中文“收据”时，尝试立刻拼出 receipt。",
        "把 receipt 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，receipt适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word receipt when I talk about 收据.",
        "The word receipt is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing receipt three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：收据。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“收据”？",
        "answer": "receipt"
      }
    },
    "reservation": {
      "zh": "预订；保留",
      "pos": "n.",
      "tag": "安排",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "r•s•rv•t••n",
      "reviewPrompts": [
        "看到中文“预订；保留”时，尝试立刻拼出 reservation。",
        "把 reservation 拆成 4 个小节练习，减少漏键。",
        "在旅行生活分类中，reservation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word reservation when I talk about 预订；保留.",
        "The word reservation is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing reservation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 11，先记首尾字母 r-n。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：预订。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“预订”？",
        "answer": "reservation"
      }
    },
    "souvenir": {
      "zh": "纪念品",
      "pos": "n.",
      "tag": "旅行",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "s••v•n•r",
      "reviewPrompts": [
        "看到中文“纪念品”时，尝试立刻拼出 souvenir。",
        "把 souvenir 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，souvenir适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word souvenir when I talk about 纪念品.",
        "The word souvenir is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing souvenir three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-r。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：纪念品。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“纪念品”？",
        "answer": "souvenir"
      }
    },
    "subway": {
      "zh": "地铁；地下通道",
      "pos": "n.",
      "tag": "交通",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "s•bw•y",
      "reviewPrompts": [
        "看到中文“地铁；地下通道”时，尝试立刻拼出 subway。",
        "把 subway 拆成 2 个小节练习，减少漏键。",
        "在旅行生活分类中，subway适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word subway when I talk about 地铁；地下通道.",
        "The word subway is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing subway three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：地铁。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“地铁”？",
        "answer": "subway"
      }
    },
    "suitcase": {
      "zh": "手提箱",
      "pos": "n.",
      "tag": "旅行",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "s••tc•s•",
      "reviewPrompts": [
        "看到中文“手提箱”时，尝试立刻拼出 suitcase。",
        "把 suitcase 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，suitcase适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word suitcase when I talk about 手提箱.",
        "The word suitcase is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing suitcase three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：手提箱。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“手提箱”？",
        "answer": "suitcase"
      }
    },
    "terminal": {
      "zh": "航站楼；终点",
      "pos": "n.",
      "tag": "交通",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "t•rm•n•l",
      "reviewPrompts": [
        "看到中文“航站楼；终点”时，尝试立刻拼出 terminal。",
        "把 terminal 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，terminal适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word terminal when I talk about 航站楼；终点.",
        "The word terminal is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing terminal three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 8，先记首尾字母 t-l。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：航站楼。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“航站楼”？",
        "answer": "terminal"
      }
    },
    "ticket": {
      "zh": "票；罚单",
      "pos": "n.",
      "tag": "交通",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "t•ck•t",
      "reviewPrompts": [
        "看到中文“票；罚单”时，尝试立刻拼出 ticket。",
        "把 ticket 拆成 2 个小节练习，减少漏键。",
        "在旅行生活分类中，ticket适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ticket when I talk about 票；罚单.",
        "The word ticket is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing ticket three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 6，先记首尾字母 t-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：票。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“票”？",
        "answer": "ticket"
      }
    },
    "tourist": {
      "zh": "游客",
      "pos": "n.",
      "tag": "旅行",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "t••r•st",
      "reviewPrompts": [
        "看到中文“游客”时，尝试立刻拼出 tourist。",
        "把 tourist 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，tourist适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word tourist when I talk about 游客.",
        "The word tourist is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing tourist three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：游客。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“游客”？",
        "answer": "tourist"
      }
    },
    "traffic": {
      "zh": "交通；车流",
      "pos": "n.",
      "tag": "城市",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "tr•ff•c",
      "reviewPrompts": [
        "看到中文“交通；车流”时，尝试立刻拼出 traffic。",
        "把 traffic 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，traffic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word traffic when I talk about 交通；车流.",
        "The word traffic is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing traffic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-c。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：交通。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“交通”？",
        "answer": "traffic"
      }
    },
    "transfer": {
      "zh": "换乘；转移",
      "pos": "v./n.",
      "tag": "交通",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "tr•nsf•r",
      "reviewPrompts": [
        "看到中文“换乘；转移”时，尝试立刻拼出 transfer。",
        "把 transfer 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，transfer适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word transfer when I talk about 换乘；转移.",
        "The word transfer is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing transfer three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 8，先记首尾字母 t-r。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：换乘。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“换乘”？",
        "answer": "transfer"
      }
    },
    "vacation": {
      "zh": "假期",
      "pos": "n.",
      "tag": "生活",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "v•c•t••n",
      "reviewPrompts": [
        "看到中文“假期”时，尝试立刻拼出 vacation。",
        "把 vacation 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，vacation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word vacation when I talk about 假期.",
        "The word vacation is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing vacation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 8，先记首尾字母 v-n。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：假期。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“假期”？",
        "answer": "vacation"
      }
    },
    "vehicle": {
      "zh": "车辆；交通工具",
      "pos": "n.",
      "tag": "交通",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "v•h•cl•",
      "reviewPrompts": [
        "看到中文“车辆；交通工具”时，尝试立刻拼出 vehicle。",
        "把 vehicle 拆成 3 个小节练习，减少漏键。",
        "在旅行生活分类中，vehicle适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word vehicle when I talk about 车辆；交通工具.",
        "The word vehicle is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing vehicle three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 7，先记首尾字母 v-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：车辆。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“车辆”？",
        "answer": "vehicle"
      }
    },
    "visa": {
      "zh": "签证",
      "pos": "n.",
      "tag": "旅行",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "v•s•",
      "reviewPrompts": [
        "看到中文“签证”时，尝试立刻拼出 visa。",
        "把 visa 拆成 2 个小节练习，减少漏键。",
        "在旅行生活分类中，visa适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word visa when I talk about 签证.",
        "The word visa is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing visa three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 4，先记首尾字母 v-a。",
        "元音 2 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：签证。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“签证”？",
        "answer": "visa"
      }
    },
    "wallet": {
      "zh": "钱包",
      "pos": "n.",
      "tag": "生活",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "w•ll•t",
      "reviewPrompts": [
        "看到中文“钱包”时，尝试立刻拼出 wallet。",
        "把 wallet 拆成 2 个小节练习，减少漏键。",
        "在旅行生活分类中，wallet适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word wallet when I talk about 钱包.",
        "The word wallet is useful in 旅行生活 reading, listening, or writing practice.",
        "Try typing wallet three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 6，先记首尾字母 w-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：钱包。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“钱包”？",
        "answer": "wallet"
      }
    }
  },
  "学术写作": {
    "abstract": {
      "zh": "摘要；抽象的",
      "pos": "n./adj.",
      "tag": "论文",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•bstr•ct",
      "reviewPrompts": [
        "看到中文“摘要；抽象的”时，尝试立刻拼出 abstract。",
        "把 abstract 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，abstract适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word abstract when I talk about 摘要；抽象的.",
        "The word abstract is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing abstract three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 8，先记首尾字母 a-t。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：摘要。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“摘要”？",
        "answer": "abstract"
      }
    },
    "analysis": {
      "zh": "分析",
      "pos": "n.",
      "tag": "研究",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•n•lys•s",
      "reviewPrompts": [
        "看到中文“分析”时，尝试立刻拼出 analysis。",
        "把 analysis 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，analysis适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word analysis when I talk about 分析.",
        "The word analysis is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing analysis three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 8，先记首尾字母 a-s。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：分析。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“分析”？",
        "answer": "analysis"
      }
    },
    "argue": {
      "zh": "论证；争辩",
      "pos": "v.",
      "tag": "议论",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•rg••",
      "reviewPrompts": [
        "看到中文“论证；争辩”时，尝试立刻拼出 argue。",
        "把 argue 拆成 2 个小节练习，减少漏键。",
        "在学术写作分类中，argue适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word argue when I talk about 论证；争辩.",
        "The word argue is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing argue three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 5，先记首尾字母 a-e。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：论证。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“论证”？",
        "answer": "argue"
      }
    },
    "assumption": {
      "zh": "假设；前提",
      "pos": "n.",
      "tag": "逻辑",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•ss•mpt••n",
      "reviewPrompts": [
        "看到中文“假设；前提”时，尝试立刻拼出 assumption。",
        "把 assumption 拆成 4 个小节练习，减少漏键。",
        "在学术写作分类中，assumption适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word assumption when I talk about 假设；前提.",
        "The word assumption is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing assumption three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 10，先记首尾字母 a-n。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：假设。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“假设”？",
        "answer": "assumption"
      }
    },
    "cite": {
      "zh": "引用；举例",
      "pos": "v.",
      "tag": "论文",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "c•t•",
      "reviewPrompts": [
        "看到中文“引用；举例”时，尝试立刻拼出 cite。",
        "把 cite 拆成 2 个小节练习，减少漏键。",
        "在学术写作分类中，cite适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cite when I talk about 引用；举例.",
        "The word cite is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing cite three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 4，先记首尾字母 c-e。",
        "元音 2 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：引用。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“引用”？",
        "answer": "cite"
      }
    },
    "clarify": {
      "zh": "澄清；阐明",
      "pos": "v.",
      "tag": "表达",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "cl•r•fy",
      "reviewPrompts": [
        "看到中文“澄清；阐明”时，尝试立刻拼出 clarify。",
        "把 clarify 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，clarify适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word clarify when I talk about 澄清；阐明.",
        "The word clarify is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing clarify three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：澄清。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“澄清”？",
        "answer": "clarify"
      }
    },
    "coherent": {
      "zh": "连贯的；一致的",
      "pos": "adj.",
      "tag": "写作",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•h•r•nt",
      "reviewPrompts": [
        "看到中文“连贯的；一致的”时，尝试立刻拼出 coherent。",
        "把 coherent 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，coherent适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word coherent when I talk about 连贯的；一致的.",
        "The word coherent is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing coherent three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：连贯的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“连贯的”？",
        "answer": "coherent"
      }
    },
    "compare": {
      "zh": "比较；对照",
      "pos": "v.",
      "tag": "论证",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mp•r•",
      "reviewPrompts": [
        "看到中文“比较；对照”时，尝试立刻拼出 compare。",
        "把 compare 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，compare适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word compare when I talk about 比较；对照.",
        "The word compare is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing compare three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：比较。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“比较”？",
        "answer": "compare"
      }
    },
    "conclude": {
      "zh": "总结；断定",
      "pos": "v.",
      "tag": "结论",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ncl•d•",
      "reviewPrompts": [
        "看到中文“总结；断定”时，尝试立刻拼出 conclude。",
        "把 conclude 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，conclude适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word conclude when I talk about 总结；断定.",
        "The word conclude is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing conclude three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：总结。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“总结”？",
        "answer": "conclude"
      }
    },
    "contrast": {
      "zh": "对比；差异",
      "pos": "n./v.",
      "tag": "论证",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•ntr•st",
      "reviewPrompts": [
        "看到中文“对比；差异”时，尝试立刻拼出 contrast。",
        "把 contrast 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，contrast适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word contrast when I talk about 对比；差异.",
        "The word contrast is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing contrast three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-t。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：对比。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“对比”？",
        "answer": "contrast"
      }
    },
    "correlation": {
      "zh": "相关性",
      "pos": "n.",
      "tag": "统计",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "c•rr•l•t••n",
      "reviewPrompts": [
        "看到中文“相关性”时，尝试立刻拼出 correlation。",
        "把 correlation 拆成 4 个小节练习，减少漏键。",
        "在学术写作分类中，correlation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word correlation when I talk about 相关性.",
        "The word correlation is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing correlation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 11，先记首尾字母 c-n。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：相关性。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“相关性”？",
        "answer": "correlation"
      }
    },
    "data": {
      "zh": "数据",
      "pos": "n.",
      "tag": "研究",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "d•t•",
      "reviewPrompts": [
        "看到中文“数据”时，尝试立刻拼出 data。",
        "把 data 拆成 2 个小节练习，减少漏键。",
        "在学术写作分类中，data适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word data when I talk about 数据.",
        "The word data is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing data three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 4，先记首尾字母 d-a。",
        "元音 2 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：数据。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“数据”？",
        "answer": "data"
      }
    },
    "define": {
      "zh": "定义；说明",
      "pos": "v.",
      "tag": "论文",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•f•n•",
      "reviewPrompts": [
        "看到中文“定义；说明”时，尝试立刻拼出 define。",
        "把 define 拆成 2 个小节练习，减少漏键。",
        "在学术写作分类中，define适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word define when I talk about 定义；说明.",
        "The word define is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing define three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：定义。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“定义”？",
        "answer": "define"
      }
    },
    "demonstrate": {
      "zh": "证明；展示",
      "pos": "v.",
      "tag": "论证",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "d•m•nstr•t•",
      "reviewPrompts": [
        "看到中文“证明；展示”时，尝试立刻拼出 demonstrate。",
        "把 demonstrate 拆成 4 个小节练习，减少漏键。",
        "在学术写作分类中，demonstrate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word demonstrate when I talk about 证明；展示.",
        "The word demonstrate is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing demonstrate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 11，先记首尾字母 d-e。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：证明。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“证明”？",
        "answer": "demonstrate"
      }
    },
    "derive": {
      "zh": "得到；起源于",
      "pos": "v.",
      "tag": "逻辑",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•r•v•",
      "reviewPrompts": [
        "看到中文“得到；起源于”时，尝试立刻拼出 derive。",
        "把 derive 拆成 2 个小节练习，减少漏键。",
        "在学术写作分类中，derive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word derive when I talk about 得到；起源于.",
        "The word derive is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing derive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：得到。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“得到”？",
        "answer": "derive"
      }
    },
    "evidence": {
      "zh": "证据",
      "pos": "n.",
      "tag": "论证",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•v•d•nc•",
      "reviewPrompts": [
        "看到中文“证据”时，尝试立刻拼出 evidence。",
        "把 evidence 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，evidence适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word evidence when I talk about 证据.",
        "The word evidence is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing evidence three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：证据。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“证据”？",
        "answer": "evidence"
      }
    },
    "hypothesis": {
      "zh": "假设",
      "pos": "n.",
      "tag": "研究",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "hyp•th•s•s",
      "reviewPrompts": [
        "看到中文“假设”时，尝试立刻拼出 hypothesis。",
        "把 hypothesis 拆成 4 个小节练习，减少漏键。",
        "在学术写作分类中，hypothesis适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word hypothesis when I talk about 假设.",
        "The word hypothesis is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing hypothesis three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 10，先记首尾字母 h-s。",
        "元音 3 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：假设。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“假设”？",
        "answer": "hypothesis"
      }
    },
    "illustrate": {
      "zh": "说明；阐明",
      "pos": "v.",
      "tag": "举例",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•ll•str•t•",
      "reviewPrompts": [
        "看到中文“说明；阐明”时，尝试立刻拼出 illustrate。",
        "把 illustrate 拆成 4 个小节练习，减少漏键。",
        "在学术写作分类中，illustrate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word illustrate when I talk about 说明；阐明.",
        "The word illustrate is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing illustrate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 10，先记首尾字母 i-e。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：说明。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“说明”？",
        "answer": "illustrate"
      }
    },
    "imply": {
      "zh": "暗示；意味着",
      "pos": "v.",
      "tag": "逻辑",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•mply",
      "reviewPrompts": [
        "看到中文“暗示；意味着”时，尝试立刻拼出 imply。",
        "把 imply 拆成 2 个小节练习，减少漏键。",
        "在学术写作分类中，imply适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word imply when I talk about 暗示；意味着.",
        "The word imply is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing imply three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 5，先记首尾字母 i-y。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：暗示。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“暗示”？",
        "answer": "imply"
      }
    },
    "indicate": {
      "zh": "表明；指出",
      "pos": "v.",
      "tag": "图表",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•nd•c•t•",
      "reviewPrompts": [
        "看到中文“表明；指出”时，尝试立刻拼出 indicate。",
        "把 indicate 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，indicate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word indicate when I talk about 表明；指出.",
        "The word indicate is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing indicate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 8，先记首尾字母 i-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：表明。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“表明”？",
        "answer": "indicate"
      }
    },
    "interpret": {
      "zh": "解释；口译",
      "pos": "v.",
      "tag": "研究",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•nt•rpr•t",
      "reviewPrompts": [
        "看到中文“解释；口译”时，尝试立刻拼出 interpret。",
        "把 interpret 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，interpret适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word interpret when I talk about 解释；口译.",
        "The word interpret is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing interpret three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：解释。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“解释”？",
        "answer": "interpret"
      }
    },
    "methodology": {
      "zh": "方法论",
      "pos": "n.",
      "tag": "研究",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "m•th•d•l•gy",
      "reviewPrompts": [
        "看到中文“方法论”时，尝试立刻拼出 methodology。",
        "把 methodology 拆成 4 个小节练习，减少漏键。",
        "在学术写作分类中，methodology适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word methodology when I talk about 方法论.",
        "The word methodology is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing methodology three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 11，先记首尾字母 m-y。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：方法论。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“方法论”？",
        "answer": "methodology"
      }
    },
    "objective": {
      "zh": "客观的；目标",
      "pos": "adj./n.",
      "tag": "论文",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•bj•ct•v•",
      "reviewPrompts": [
        "看到中文“客观的；目标”时，尝试立刻拼出 objective。",
        "把 objective 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，objective适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word objective when I talk about 客观的；目标.",
        "The word objective is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing objective three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 9，先记首尾字母 o-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：客观的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“客观的”？",
        "answer": "objective"
      }
    },
    "paragraph": {
      "zh": "段落",
      "pos": "n.",
      "tag": "写作",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "p•r•gr•ph",
      "reviewPrompts": [
        "看到中文“段落”时，尝试立刻拼出 paragraph。",
        "把 paragraph 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，paragraph适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word paragraph when I talk about 段落.",
        "The word paragraph is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing paragraph three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 9，先记首尾字母 p-h。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：段落。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“段落”？",
        "answer": "paragraph"
      }
    },
    "perspective": {
      "zh": "观点；视角",
      "pos": "n.",
      "tag": "议论",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "p•rsp•ct•v•",
      "reviewPrompts": [
        "看到中文“观点；视角”时，尝试立刻拼出 perspective。",
        "把 perspective 拆成 4 个小节练习，减少漏键。",
        "在学术写作分类中，perspective适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word perspective when I talk about 观点；视角.",
        "The word perspective is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing perspective three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 11，先记首尾字母 p-e。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：观点。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“观点”？",
        "answer": "perspective"
      }
    },
    "qualitative": {
      "zh": "定性的",
      "pos": "adj.",
      "tag": "研究",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "q••l•t•t•v•",
      "reviewPrompts": [
        "看到中文“定性的”时，尝试立刻拼出 qualitative。",
        "把 qualitative 拆成 4 个小节练习，减少漏键。",
        "在学术写作分类中，qualitative适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word qualitative when I talk about 定性的.",
        "The word qualitative is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing qualitative three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "Q 开头，长度 11，先记首尾字母 q-e。",
        "元音 6 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：定性的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“定性的”？",
        "answer": "qualitative"
      }
    },
    "quantitative": {
      "zh": "定量的",
      "pos": "adj.",
      "tag": "研究",
      "length": 12,
      "rhythm": "长词分段打",
      "typingPattern": "q••nt•t•t•v•",
      "reviewPrompts": [
        "看到中文“定量的”时，尝试立刻拼出 quantitative。",
        "把 quantitative 拆成 4 个小节练习，减少漏键。",
        "在学术写作分类中，quantitative适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word quantitative when I talk about 定量的.",
        "The word quantitative is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing quantitative three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "Q 开头，长度 12，先记首尾字母 q-e。",
        "元音 6 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：定量的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“定量的”？",
        "answer": "quantitative"
      }
    },
    "reference": {
      "zh": "参考；引用",
      "pos": "n.",
      "tag": "论文",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "r•f•r•nc•",
      "reviewPrompts": [
        "看到中文“参考；引用”时，尝试立刻拼出 reference。",
        "把 reference 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，reference适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word reference when I talk about 参考；引用.",
        "The word reference is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing reference three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 9，先记首尾字母 r-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：参考。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“参考”？",
        "answer": "reference"
      }
    },
    "relevant": {
      "zh": "相关的",
      "pos": "adj.",
      "tag": "论证",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "r•l•v•nt",
      "reviewPrompts": [
        "看到中文“相关的”时，尝试立刻拼出 relevant。",
        "把 relevant 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，relevant适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word relevant when I talk about 相关的.",
        "The word relevant is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing relevant three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 8，先记首尾字母 r-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：相关的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“相关的”？",
        "answer": "relevant"
      }
    },
    "sample": {
      "zh": "样本；样品",
      "pos": "n.",
      "tag": "统计",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "s•mpl•",
      "reviewPrompts": [
        "看到中文“样本；样品”时，尝试立刻拼出 sample。",
        "把 sample 拆成 2 个小节练习，减少漏键。",
        "在学术写作分类中，sample适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word sample when I talk about 样本；样品.",
        "The word sample is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing sample three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-e。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：样本。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“样本”？",
        "answer": "sample"
      }
    },
    "significant": {
      "zh": "显著的；重要的",
      "pos": "adj.",
      "tag": "研究",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "s•gn•f•c•nt",
      "reviewPrompts": [
        "看到中文“显著的；重要的”时，尝试立刻拼出 significant。",
        "把 significant 拆成 4 个小节练习，减少漏键。",
        "在学术写作分类中，significant适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word significant when I talk about 显著的；重要的.",
        "The word significant is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing significant three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 11，先记首尾字母 s-t。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：显著的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“显著的”？",
        "answer": "significant"
      }
    },
    "summarize": {
      "zh": "总结；概述",
      "pos": "v.",
      "tag": "写作",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "s•mm•r•z•",
      "reviewPrompts": [
        "看到中文“总结；概述”时，尝试立刻拼出 summarize。",
        "把 summarize 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，summarize适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word summarize when I talk about 总结；概述.",
        "The word summarize is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing summarize three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 9，先记首尾字母 s-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：总结。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“总结”？",
        "answer": "summarize"
      }
    },
    "thesis": {
      "zh": "论文；论点",
      "pos": "n.",
      "tag": "论文",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "th•s•s",
      "reviewPrompts": [
        "看到中文“论文；论点”时，尝试立刻拼出 thesis。",
        "把 thesis 拆成 2 个小节练习，减少漏键。",
        "在学术写作分类中，thesis适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word thesis when I talk about 论文；论点.",
        "The word thesis is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing thesis three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 6，先记首尾字母 t-s。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：论文。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“论文”？",
        "answer": "thesis"
      }
    },
    "transition": {
      "zh": "过渡；转变",
      "pos": "n.",
      "tag": "写作",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "tr•ns•t••n",
      "reviewPrompts": [
        "看到中文“过渡；转变”时，尝试立刻拼出 transition。",
        "把 transition 拆成 4 个小节练习，减少漏键。",
        "在学术写作分类中，transition适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word transition when I talk about 过渡；转变.",
        "The word transition is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing transition three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 10，先记首尾字母 t-n。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：过渡。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“过渡”？",
        "answer": "transition"
      }
    },
    "validity": {
      "zh": "有效性；合理性",
      "pos": "n.",
      "tag": "研究",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "v•l•d•ty",
      "reviewPrompts": [
        "看到中文“有效性；合理性”时，尝试立刻拼出 validity。",
        "把 validity 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，validity适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word validity when I talk about 有效性；合理性.",
        "The word validity is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing validity three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 8，先记首尾字母 v-y。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：有效性。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“有效性”？",
        "answer": "validity"
      }
    },
    "variable": {
      "zh": "变量；可变的",
      "pos": "n./adj.",
      "tag": "统计",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "v•r••bl•",
      "reviewPrompts": [
        "看到中文“变量；可变的”时，尝试立刻拼出 variable。",
        "把 variable 拆成 3 个小节练习，减少漏键。",
        "在学术写作分类中，variable适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word variable when I talk about 变量；可变的.",
        "The word variable is useful in 学术写作 reading, listening, or writing practice.",
        "Try typing variable three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 8，先记首尾字母 v-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：变量。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“变量”？",
        "answer": "variable"
      }
    }
  },
  "情绪性格": {
    "ambitious": {
      "zh": "有雄心的",
      "pos": "adj.",
      "tag": "性格",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•mb•t•••s",
      "reviewPrompts": [
        "看到中文“有雄心的”时，尝试立刻拼出 ambitious。",
        "把 ambitious 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，ambitious适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ambitious when I talk about 有雄心的.",
        "The word ambitious is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing ambitious three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-s。",
        "元音 5 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：有雄心的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“有雄心的”？",
        "answer": "ambitious"
      }
    },
    "anxious": {
      "zh": "焦虑的；担心的",
      "pos": "adj.",
      "tag": "情绪",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•nx•••s",
      "reviewPrompts": [
        "看到中文“焦虑的；担心的”时，尝试立刻拼出 anxious。",
        "把 anxious 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，anxious适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word anxious when I talk about 焦虑的；担心的.",
        "The word anxious is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing anxious three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-s。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：焦虑的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“焦虑的”？",
        "answer": "anxious"
      }
    },
    "awkward": {
      "zh": "尴尬的；笨拙的",
      "pos": "adj.",
      "tag": "社交",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•wkw•rd",
      "reviewPrompts": [
        "看到中文“尴尬的；笨拙的”时，尝试立刻拼出 awkward。",
        "把 awkward 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，awkward适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word awkward when I talk about 尴尬的；笨拙的.",
        "The word awkward is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing awkward three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-d。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：尴尬的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“尴尬的”？",
        "answer": "awkward"
      }
    },
    "brave": {
      "zh": "勇敢的",
      "pos": "adj.",
      "tag": "品质",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "br•v•",
      "reviewPrompts": [
        "看到中文“勇敢的”时，尝试立刻拼出 brave。",
        "把 brave 拆成 2 个小节练习，减少漏键。",
        "在情绪性格分类中，brave适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word brave when I talk about 勇敢的.",
        "The word brave is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing brave three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 5，先记首尾字母 b-e。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：勇敢的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“勇敢的”？",
        "answer": "brave"
      }
    },
    "calm": {
      "zh": "冷静的；平静的",
      "pos": "adj.",
      "tag": "情绪",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "c•lm",
      "reviewPrompts": [
        "看到中文“冷静的；平静的”时，尝试立刻拼出 calm。",
        "把 calm 拆成 2 个小节练习，减少漏键。",
        "在情绪性格分类中，calm适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word calm when I talk about 冷静的；平静的.",
        "The word calm is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing calm three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 4，先记首尾字母 c-m。",
        "元音 1 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：冷静的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“冷静的”？",
        "answer": "calm"
      }
    },
    "cheerful": {
      "zh": "快乐的；开朗的",
      "pos": "adj.",
      "tag": "性格",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "ch••rf•l",
      "reviewPrompts": [
        "看到中文“快乐的；开朗的”时，尝试立刻拼出 cheerful。",
        "把 cheerful 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，cheerful适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word cheerful when I talk about 快乐的；开朗的.",
        "The word cheerful is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing cheerful three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-l。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：快乐的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“快乐的”？",
        "answer": "cheerful"
      }
    },
    "confident": {
      "zh": "自信的",
      "pos": "adj.",
      "tag": "品质",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "c•nf•d•nt",
      "reviewPrompts": [
        "看到中文“自信的”时，尝试立刻拼出 confident。",
        "把 confident 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，confident适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word confident when I talk about 自信的.",
        "The word confident is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing confident three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 9，先记首尾字母 c-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：自信的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“自信的”？",
        "answer": "confident"
      }
    },
    "curious": {
      "zh": "好奇的",
      "pos": "adj.",
      "tag": "性格",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•r•••s",
      "reviewPrompts": [
        "看到中文“好奇的”时，尝试立刻拼出 curious。",
        "把 curious 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，curious适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word curious when I talk about 好奇的.",
        "The word curious is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing curious three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-s。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：好奇的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“好奇的”？",
        "answer": "curious"
      }
    },
    "diligent": {
      "zh": "勤奋的",
      "pos": "adj.",
      "tag": "品质",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d•l•g•nt",
      "reviewPrompts": [
        "看到中文“勤奋的”时，尝试立刻拼出 diligent。",
        "把 diligent 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，diligent适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word diligent when I talk about 勤奋的.",
        "The word diligent is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing diligent three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：勤奋的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“勤奋的”？",
        "answer": "diligent"
      }
    },
    "empathetic": {
      "zh": "有同理心的",
      "pos": "adj.",
      "tag": "社交",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•mp•th•t•c",
      "reviewPrompts": [
        "看到中文“有同理心的”时，尝试立刻拼出 empathetic。",
        "把 empathetic 拆成 4 个小节练习，减少漏键。",
        "在情绪性格分类中，empathetic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word empathetic when I talk about 有同理心的.",
        "The word empathetic is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing empathetic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 10，先记首尾字母 e-c。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：有同理心的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“有同理心的”？",
        "answer": "empathetic"
      }
    },
    "energetic": {
      "zh": "精力充沛的",
      "pos": "adj.",
      "tag": "状态",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•n•rg•t•c",
      "reviewPrompts": [
        "看到中文“精力充沛的”时，尝试立刻拼出 energetic。",
        "把 energetic 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，energetic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word energetic when I talk about 精力充沛的.",
        "The word energetic is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing energetic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 9，先记首尾字母 e-c。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：精力充沛的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“精力充沛的”？",
        "answer": "energetic"
      }
    },
    "faithful": {
      "zh": "忠诚的；可靠的",
      "pos": "adj.",
      "tag": "品质",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "f••thf•l",
      "reviewPrompts": [
        "看到中文“忠诚的；可靠的”时，尝试立刻拼出 faithful。",
        "把 faithful 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，faithful适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word faithful when I talk about 忠诚的；可靠的.",
        "The word faithful is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing faithful three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 8，先记首尾字母 f-l。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：忠诚的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“忠诚的”？",
        "answer": "faithful"
      }
    },
    "generous": {
      "zh": "慷慨的；大方的",
      "pos": "adj.",
      "tag": "性格",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "g•n•r••s",
      "reviewPrompts": [
        "看到中文“慷慨的；大方的”时，尝试立刻拼出 generous。",
        "把 generous 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，generous适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word generous when I talk about 慷慨的；大方的.",
        "The word generous is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing generous three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 8，先记首尾字母 g-s。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：慷慨的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“慷慨的”？",
        "answer": "generous"
      }
    },
    "grateful": {
      "zh": "感激的",
      "pos": "adj.",
      "tag": "情绪",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "gr•t•f•l",
      "reviewPrompts": [
        "看到中文“感激的”时，尝试立刻拼出 grateful。",
        "把 grateful 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，grateful适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word grateful when I talk about 感激的.",
        "The word grateful is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing grateful three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 8，先记首尾字母 g-l。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：感激的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“感激的”？",
        "answer": "grateful"
      }
    },
    "guilty": {
      "zh": "内疚的；有罪的",
      "pos": "adj.",
      "tag": "情绪",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "g••lty",
      "reviewPrompts": [
        "看到中文“内疚的；有罪的”时，尝试立刻拼出 guilty。",
        "把 guilty 拆成 2 个小节练习，减少漏键。",
        "在情绪性格分类中，guilty适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word guilty when I talk about 内疚的；有罪的.",
        "The word guilty is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing guilty three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 6，先记首尾字母 g-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：内疚的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“内疚的”？",
        "answer": "guilty"
      }
    },
    "honest": {
      "zh": "诚实的",
      "pos": "adj.",
      "tag": "品质",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "h•n•st",
      "reviewPrompts": [
        "看到中文“诚实的”时，尝试立刻拼出 honest。",
        "把 honest 拆成 2 个小节练习，减少漏键。",
        "在情绪性格分类中，honest适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word honest when I talk about 诚实的.",
        "The word honest is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing honest three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 6，先记首尾字母 h-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：诚实的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“诚实的”？",
        "answer": "honest"
      }
    },
    "humble": {
      "zh": "谦逊的",
      "pos": "adj.",
      "tag": "品质",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "h•mbl•",
      "reviewPrompts": [
        "看到中文“谦逊的”时，尝试立刻拼出 humble。",
        "把 humble 拆成 2 个小节练习，减少漏键。",
        "在情绪性格分类中，humble适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word humble when I talk about 谦逊的.",
        "The word humble is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing humble three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 6，先记首尾字母 h-e。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：谦逊的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“谦逊的”？",
        "answer": "humble"
      }
    },
    "impatient": {
      "zh": "不耐烦的",
      "pos": "adj.",
      "tag": "情绪",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•mp•t••nt",
      "reviewPrompts": [
        "看到中文“不耐烦的”时，尝试立刻拼出 impatient。",
        "把 impatient 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，impatient适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word impatient when I talk about 不耐烦的.",
        "The word impatient is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing impatient three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-t。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：不耐烦的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“不耐烦的”？",
        "answer": "impatient"
      }
    },
    "jealous": {
      "zh": "嫉妒的",
      "pos": "adj.",
      "tag": "情绪",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "j••l••s",
      "reviewPrompts": [
        "看到中文“嫉妒的”时，尝试立刻拼出 jealous。",
        "把 jealous 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，jealous适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word jealous when I talk about 嫉妒的.",
        "The word jealous is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing jealous three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "J 开头，长度 7，先记首尾字母 j-s。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：嫉妒的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“嫉妒的”？",
        "answer": "jealous"
      }
    },
    "kind": {
      "zh": "善良的；种类",
      "pos": "adj./n.",
      "tag": "品质",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "k•nd",
      "reviewPrompts": [
        "看到中文“善良的；种类”时，尝试立刻拼出 kind。",
        "把 kind 拆成 2 个小节练习，减少漏键。",
        "在情绪性格分类中，kind适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word kind when I talk about 善良的；种类.",
        "The word kind is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing kind three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "K 开头，长度 4，先记首尾字母 k-d。",
        "元音 1 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：善良的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“善良的”？",
        "answer": "kind"
      }
    },
    "lonely": {
      "zh": "孤独的",
      "pos": "adj.",
      "tag": "情绪",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "l•n•ly",
      "reviewPrompts": [
        "看到中文“孤独的”时，尝试立刻拼出 lonely。",
        "把 lonely 拆成 2 个小节练习，减少漏键。",
        "在情绪性格分类中，lonely适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word lonely when I talk about 孤独的.",
        "The word lonely is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing lonely three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 6，先记首尾字母 l-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：孤独的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“孤独的”？",
        "answer": "lonely"
      }
    },
    "modest": {
      "zh": "谦虚的；适度的",
      "pos": "adj.",
      "tag": "品质",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m•d•st",
      "reviewPrompts": [
        "看到中文“谦虚的；适度的”时，尝试立刻拼出 modest。",
        "把 modest 拆成 2 个小节练习，减少漏键。",
        "在情绪性格分类中，modest适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word modest when I talk about 谦虚的；适度的.",
        "The word modest is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing modest three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：谦虚的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“谦虚的”？",
        "answer": "modest"
      }
    },
    "nervous": {
      "zh": "紧张的",
      "pos": "adj.",
      "tag": "情绪",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "n•rv••s",
      "reviewPrompts": [
        "看到中文“紧张的”时，尝试立刻拼出 nervous。",
        "把 nervous 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，nervous适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word nervous when I talk about 紧张的.",
        "The word nervous is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing nervous three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 7，先记首尾字母 n-s。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：紧张的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“紧张的”？",
        "answer": "nervous"
      }
    },
    "optimistic": {
      "zh": "乐观的",
      "pos": "adj.",
      "tag": "态度",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•pt•m•st•c",
      "reviewPrompts": [
        "看到中文“乐观的”时，尝试立刻拼出 optimistic。",
        "把 optimistic 拆成 4 个小节练习，减少漏键。",
        "在情绪性格分类中，optimistic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word optimistic when I talk about 乐观的.",
        "The word optimistic is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing optimistic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 10，先记首尾字母 o-c。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：乐观的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“乐观的”？",
        "answer": "optimistic"
      }
    },
    "patient": {
      "zh": "耐心的；病人",
      "pos": "adj./n.",
      "tag": "品质",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p•t••nt",
      "reviewPrompts": [
        "看到中文“耐心的；病人”时，尝试立刻拼出 patient。",
        "把 patient 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，patient适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word patient when I talk about 耐心的；病人.",
        "The word patient is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing patient three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：耐心的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“耐心的”？",
        "answer": "patient"
      }
    },
    "pessimistic": {
      "zh": "悲观的",
      "pos": "adj.",
      "tag": "态度",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "p•ss•m•st•c",
      "reviewPrompts": [
        "看到中文“悲观的”时，尝试立刻拼出 pessimistic。",
        "把 pessimistic 拆成 4 个小节练习，减少漏键。",
        "在情绪性格分类中，pessimistic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word pessimistic when I talk about 悲观的.",
        "The word pessimistic is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing pessimistic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 11，先记首尾字母 p-c。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：悲观的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“悲观的”？",
        "answer": "pessimistic"
      }
    },
    "proud": {
      "zh": "骄傲的；自豪的",
      "pos": "adj.",
      "tag": "情绪",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "pr••d",
      "reviewPrompts": [
        "看到中文“骄傲的；自豪的”时，尝试立刻拼出 proud。",
        "把 proud 拆成 2 个小节练习，减少漏键。",
        "在情绪性格分类中，proud适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word proud when I talk about 骄傲的；自豪的.",
        "The word proud is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing proud three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 5，先记首尾字母 p-d。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：骄傲的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“骄傲的”？",
        "answer": "proud"
      }
    },
    "reliable": {
      "zh": "可靠的",
      "pos": "adj.",
      "tag": "品质",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "r•l••bl•",
      "reviewPrompts": [
        "看到中文“可靠的”时，尝试立刻拼出 reliable。",
        "把 reliable 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，reliable适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word reliable when I talk about 可靠的.",
        "The word reliable is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing reliable three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 8，先记首尾字母 r-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：可靠的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“可靠的”？",
        "answer": "reliable"
      }
    },
    "sensitive": {
      "zh": "敏感的；灵敏的",
      "pos": "adj.",
      "tag": "性格",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "s•ns•t•v•",
      "reviewPrompts": [
        "看到中文“敏感的；灵敏的”时，尝试立刻拼出 sensitive。",
        "把 sensitive 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，sensitive适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word sensitive when I talk about 敏感的；灵敏的.",
        "The word sensitive is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing sensitive three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 9，先记首尾字母 s-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：敏感的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“敏感的”？",
        "answer": "sensitive"
      }
    },
    "sincere": {
      "zh": "真诚的",
      "pos": "adj.",
      "tag": "品质",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "s•nc•r•",
      "reviewPrompts": [
        "看到中文“真诚的”时，尝试立刻拼出 sincere。",
        "把 sincere 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，sincere适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word sincere when I talk about 真诚的.",
        "The word sincere is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing sincere three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：真诚的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“真诚的”？",
        "answer": "sincere"
      }
    },
    "stubborn": {
      "zh": "固执的",
      "pos": "adj.",
      "tag": "性格",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "st•bb•rn",
      "reviewPrompts": [
        "看到中文“固执的”时，尝试立刻拼出 stubborn。",
        "把 stubborn 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，stubborn适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word stubborn when I talk about 固执的.",
        "The word stubborn is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing stubborn three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-n。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：固执的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“固执的”？",
        "answer": "stubborn"
      }
    },
    "thoughtful": {
      "zh": "体贴的；深思的",
      "pos": "adj.",
      "tag": "品质",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "th••ghtf•l",
      "reviewPrompts": [
        "看到中文“体贴的；深思的”时，尝试立刻拼出 thoughtful。",
        "把 thoughtful 拆成 4 个小节练习，减少漏键。",
        "在情绪性格分类中，thoughtful适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word thoughtful when I talk about 体贴的；深思的.",
        "The word thoughtful is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing thoughtful three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 10，先记首尾字母 t-l。",
        "元音 3 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：体贴的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“体贴的”？",
        "answer": "thoughtful"
      }
    },
    "tolerant": {
      "zh": "宽容的",
      "pos": "adj.",
      "tag": "品质",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "t•l•r•nt",
      "reviewPrompts": [
        "看到中文“宽容的”时，尝试立刻拼出 tolerant。",
        "把 tolerant 拆成 3 个小节练习，减少漏键。",
        "在情绪性格分类中，tolerant适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word tolerant when I talk about 宽容的.",
        "The word tolerant is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing tolerant three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 8，先记首尾字母 t-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：宽容的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“宽容的”？",
        "answer": "tolerant"
      }
    },
    "upset": {
      "zh": "难过的；打乱",
      "pos": "adj./v.",
      "tag": "情绪",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•ps•t",
      "reviewPrompts": [
        "看到中文“难过的；打乱”时，尝试立刻拼出 upset。",
        "把 upset 拆成 2 个小节练习，减少漏键。",
        "在情绪性格分类中，upset适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word upset when I talk about 难过的；打乱.",
        "The word upset is useful in 情绪性格 reading, listening, or writing practice.",
        "Try typing upset three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "U 开头，长度 5，先记首尾字母 u-t。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：难过的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“难过的”？",
        "answer": "upset"
      }
    }
  },
  "医疗健康": {
    "allergy": {
      "zh": "过敏",
      "pos": "n.",
      "tag": "症状",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•ll•rgy",
      "reviewPrompts": [
        "看到中文“过敏”时，尝试立刻拼出 allergy。",
        "把 allergy 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，allergy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word allergy when I talk about 过敏.",
        "The word allergy is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing allergy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：过敏。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“过敏”？",
        "answer": "allergy"
      }
    },
    "ambulance": {
      "zh": "救护车",
      "pos": "n.",
      "tag": "急救",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•mb•l•nc•",
      "reviewPrompts": [
        "看到中文“救护车”时，尝试立刻拼出 ambulance。",
        "把 ambulance 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，ambulance适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ambulance when I talk about 救护车.",
        "The word ambulance is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing ambulance three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：救护车。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“救护车”？",
        "answer": "ambulance"
      }
    },
    "appointment": {
      "zh": "预约；约定",
      "pos": "n.",
      "tag": "医疗",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "•pp••ntm•nt",
      "reviewPrompts": [
        "看到中文“预约；约定”时，尝试立刻拼出 appointment。",
        "把 appointment 拆成 4 个小节练习，减少漏键。",
        "在医疗健康分类中，appointment适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word appointment when I talk about 预约；约定.",
        "The word appointment is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing appointment three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 11，先记首尾字母 a-t。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：预约。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“预约”？",
        "answer": "appointment"
      }
    },
    "bacteria": {
      "zh": "细菌",
      "pos": "n.",
      "tag": "科学",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "b•ct•r••",
      "reviewPrompts": [
        "看到中文“细菌”时，尝试立刻拼出 bacteria。",
        "把 bacteria 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，bacteria适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word bacteria when I talk about 细菌.",
        "The word bacteria is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing bacteria three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 8，先记首尾字母 b-a。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：细菌。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“细菌”？",
        "answer": "bacteria"
      }
    },
    "bandage": {
      "zh": "绷带",
      "pos": "n./v.",
      "tag": "护理",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "b•nd•g•",
      "reviewPrompts": [
        "看到中文“绷带”时，尝试立刻拼出 bandage。",
        "把 bandage 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，bandage适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word bandage when I talk about 绷带.",
        "The word bandage is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing bandage three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：绷带。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“绷带”？",
        "answer": "bandage"
      }
    },
    "clinic": {
      "zh": "诊所",
      "pos": "n.",
      "tag": "医疗",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "cl•n•c",
      "reviewPrompts": [
        "看到中文“诊所”时，尝试立刻拼出 clinic。",
        "把 clinic 拆成 2 个小节练习，减少漏键。",
        "在医疗健康分类中，clinic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word clinic when I talk about 诊所.",
        "The word clinic is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing clinic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-c。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：诊所。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“诊所”？",
        "answer": "clinic"
      }
    },
    "diagnose": {
      "zh": "诊断",
      "pos": "v.",
      "tag": "医疗",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "d••gn•s•",
      "reviewPrompts": [
        "看到中文“诊断”时，尝试立刻拼出 diagnose。",
        "把 diagnose 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，diagnose适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word diagnose when I talk about 诊断.",
        "The word diagnose is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing diagnose three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 8，先记首尾字母 d-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：诊断。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“诊断”？",
        "answer": "diagnose"
      }
    },
    "diet": {
      "zh": "饮食；节食",
      "pos": "n.",
      "tag": "健康",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "d••t",
      "reviewPrompts": [
        "看到中文“饮食；节食”时，尝试立刻拼出 diet。",
        "把 diet 拆成 2 个小节练习，减少漏键。",
        "在医疗健康分类中，diet适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word diet when I talk about 饮食；节食.",
        "The word diet is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing diet three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 4，先记首尾字母 d-t。",
        "元音 2 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：饮食。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“饮食”？",
        "answer": "diet"
      }
    },
    "disease": {
      "zh": "疾病",
      "pos": "n.",
      "tag": "医疗",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "d•s••s•",
      "reviewPrompts": [
        "看到中文“疾病”时，尝试立刻拼出 disease。",
        "把 disease 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，disease适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word disease when I talk about 疾病.",
        "The word disease is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing disease three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 7，先记首尾字母 d-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：疾病。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“疾病”？",
        "answer": "disease"
      }
    },
    "emergency": {
      "zh": "紧急情况",
      "pos": "n.",
      "tag": "急救",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•m•rg•ncy",
      "reviewPrompts": [
        "看到中文“紧急情况”时，尝试立刻拼出 emergency。",
        "把 emergency 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，emergency适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word emergency when I talk about 紧急情况.",
        "The word emergency is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing emergency three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 9，先记首尾字母 e-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：紧急情况。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“紧急情况”？",
        "answer": "emergency"
      }
    },
    "exercise": {
      "zh": "锻炼；练习",
      "pos": "n./v.",
      "tag": "健康",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•x•rc•s•",
      "reviewPrompts": [
        "看到中文“锻炼；练习”时，尝试立刻拼出 exercise。",
        "把 exercise 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，exercise适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word exercise when I talk about 锻炼；练习.",
        "The word exercise is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing exercise three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：锻炼。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“锻炼”？",
        "answer": "exercise"
      }
    },
    "fatigue": {
      "zh": "疲劳",
      "pos": "n.",
      "tag": "症状",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "f•t•g••",
      "reviewPrompts": [
        "看到中文“疲劳”时，尝试立刻拼出 fatigue。",
        "把 fatigue 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，fatigue适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fatigue when I talk about 疲劳.",
        "The word fatigue is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing fatigue three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 7，先记首尾字母 f-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：疲劳。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“疲劳”？",
        "answer": "fatigue"
      }
    },
    "fever": {
      "zh": "发烧；狂热",
      "pos": "n.",
      "tag": "症状",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "f•v•r",
      "reviewPrompts": [
        "看到中文“发烧；狂热”时，尝试立刻拼出 fever。",
        "把 fever 拆成 2 个小节练习，减少漏键。",
        "在医疗健康分类中，fever适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fever when I talk about 发烧；狂热.",
        "The word fever is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing fever three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 5，先记首尾字母 f-r。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：发烧。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“发烧”？",
        "answer": "fever"
      }
    },
    "fracture": {
      "zh": "骨折；破裂",
      "pos": "n./v.",
      "tag": "医疗",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "fr•ct•r•",
      "reviewPrompts": [
        "看到中文“骨折；破裂”时，尝试立刻拼出 fracture。",
        "把 fracture 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，fracture适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fracture when I talk about 骨折；破裂.",
        "The word fracture is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing fracture three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 8，先记首尾字母 f-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：骨折。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“骨折”？",
        "answer": "fracture"
      }
    },
    "immune": {
      "zh": "免疫的",
      "pos": "adj.",
      "tag": "身体",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•mm•n•",
      "reviewPrompts": [
        "看到中文“免疫的”时，尝试立刻拼出 immune。",
        "把 immune 拆成 2 个小节练习，减少漏键。",
        "在医疗健康分类中，immune适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word immune when I talk about 免疫的.",
        "The word immune is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing immune three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 6，先记首尾字母 i-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：免疫的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“免疫的”？",
        "answer": "immune"
      }
    },
    "infection": {
      "zh": "感染",
      "pos": "n.",
      "tag": "医疗",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•nf•ct••n",
      "reviewPrompts": [
        "看到中文“感染”时，尝试立刻拼出 infection。",
        "把 infection 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，infection适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word infection when I talk about 感染.",
        "The word infection is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing infection three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-n。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：感染。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“感染”？",
        "answer": "infection"
      }
    },
    "injury": {
      "zh": "伤害；损伤",
      "pos": "n.",
      "tag": "医疗",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•nj•ry",
      "reviewPrompts": [
        "看到中文“伤害；损伤”时，尝试立刻拼出 injury。",
        "把 injury 拆成 2 个小节练习，减少漏键。",
        "在医疗健康分类中，injury适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word injury when I talk about 伤害；损伤.",
        "The word injury is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing injury three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 6，先记首尾字母 i-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：伤害。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“伤害”？",
        "answer": "injury"
      }
    },
    "medicine": {
      "zh": "药；医学",
      "pos": "n.",
      "tag": "医疗",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "m•d•c•n•",
      "reviewPrompts": [
        "看到中文“药；医学”时，尝试立刻拼出 medicine。",
        "把 medicine 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，medicine适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word medicine when I talk about 药；医学.",
        "The word medicine is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing medicine three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 8，先记首尾字母 m-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：药。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“药”？",
        "answer": "medicine"
      }
    },
    "mental": {
      "zh": "心理的；精神的",
      "pos": "adj.",
      "tag": "健康",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m•nt•l",
      "reviewPrompts": [
        "看到中文“心理的；精神的”时，尝试立刻拼出 mental。",
        "把 mental 拆成 2 个小节练习，减少漏键。",
        "在医疗健康分类中，mental适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word mental when I talk about 心理的；精神的.",
        "The word mental is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing mental three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-l。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：心理的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“心理的”？",
        "answer": "mental"
      }
    },
    "nutrition": {
      "zh": "营养",
      "pos": "n.",
      "tag": "健康",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "n•tr•t••n",
      "reviewPrompts": [
        "看到中文“营养”时，尝试立刻拼出 nutrition。",
        "把 nutrition 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，nutrition适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word nutrition when I talk about 营养.",
        "The word nutrition is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing nutrition three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 9，先记首尾字母 n-n。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：营养。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“营养”？",
        "answer": "nutrition"
      }
    },
    "operation": {
      "zh": "手术；操作",
      "pos": "n.",
      "tag": "医疗",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•p•r•t••n",
      "reviewPrompts": [
        "看到中文“手术；操作”时，尝试立刻拼出 operation。",
        "把 operation 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，operation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word operation when I talk about 手术；操作.",
        "The word operation is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing operation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 9，先记首尾字母 o-n。",
        "元音 5 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：手术。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“手术”？",
        "answer": "operation"
      }
    },
    "patient": {
      "zh": "病人；耐心的",
      "pos": "n./adj.",
      "tag": "医疗",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p•t••nt",
      "reviewPrompts": [
        "看到中文“病人；耐心的”时，尝试立刻拼出 patient。",
        "把 patient 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，patient适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word patient when I talk about 病人；耐心的.",
        "The word patient is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing patient three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-t。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：病人。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“病人”？",
        "answer": "patient"
      }
    },
    "pharmacy": {
      "zh": "药店；药房",
      "pos": "n.",
      "tag": "医疗",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "ph•rm•cy",
      "reviewPrompts": [
        "看到中文“药店；药房”时，尝试立刻拼出 pharmacy。",
        "把 pharmacy 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，pharmacy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word pharmacy when I talk about 药店；药房.",
        "The word pharmacy is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing pharmacy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-y。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：药店。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“药店”？",
        "answer": "pharmacy"
      }
    },
    "pulse": {
      "zh": "脉搏；跳动",
      "pos": "n.",
      "tag": "身体",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "p•ls•",
      "reviewPrompts": [
        "看到中文“脉搏；跳动”时，尝试立刻拼出 pulse。",
        "把 pulse 拆成 2 个小节练习，减少漏键。",
        "在医疗健康分类中，pulse适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word pulse when I talk about 脉搏；跳动.",
        "The word pulse is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing pulse three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 5，先记首尾字母 p-e。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：脉搏。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“脉搏”？",
        "answer": "pulse"
      }
    },
    "recover": {
      "zh": "恢复；康复",
      "pos": "v.",
      "tag": "健康",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r•c•v•r",
      "reviewPrompts": [
        "看到中文“恢复；康复”时，尝试立刻拼出 recover。",
        "把 recover 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，recover适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word recover when I talk about 恢复；康复.",
        "The word recover is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing recover three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-r。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：恢复。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“恢复”？",
        "answer": "recover"
      }
    },
    "relieve": {
      "zh": "缓解；减轻",
      "pos": "v.",
      "tag": "护理",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r•l••v•",
      "reviewPrompts": [
        "看到中文“缓解；减轻”时，尝试立刻拼出 relieve。",
        "把 relieve 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，relieve适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word relieve when I talk about 缓解；减轻.",
        "The word relieve is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing relieve three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：缓解。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“缓解”？",
        "answer": "relieve"
      }
    },
    "routine": {
      "zh": "常规；惯例",
      "pos": "n.",
      "tag": "健康",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "r••t•n•",
      "reviewPrompts": [
        "看到中文“常规；惯例”时，尝试立刻拼出 routine。",
        "把 routine 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，routine适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word routine when I talk about 常规；惯例.",
        "The word routine is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing routine three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 7，先记首尾字母 r-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：常规。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“常规”？",
        "answer": "routine"
      }
    },
    "symptom": {
      "zh": "症状",
      "pos": "n.",
      "tag": "医疗",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "sympt•m",
      "reviewPrompts": [
        "看到中文“症状”时，尝试立刻拼出 symptom。",
        "把 symptom 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，symptom适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word symptom when I talk about 症状.",
        "The word symptom is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing symptom three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 7，先记首尾字母 s-m。",
        "元音 1 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：症状。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“症状”？",
        "answer": "symptom"
      }
    },
    "therapy": {
      "zh": "疗法；治疗",
      "pos": "n.",
      "tag": "医疗",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "th•r•py",
      "reviewPrompts": [
        "看到中文“疗法；治疗”时，尝试立刻拼出 therapy。",
        "把 therapy 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，therapy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word therapy when I talk about 疗法；治疗.",
        "The word therapy is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing therapy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 7，先记首尾字母 t-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：疗法。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“疗法”？",
        "answer": "therapy"
      }
    },
    "treatment": {
      "zh": "治疗；处理",
      "pos": "n.",
      "tag": "医疗",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "tr••tm•nt",
      "reviewPrompts": [
        "看到中文“治疗；处理”时，尝试立刻拼出 treatment。",
        "把 treatment 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，treatment适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word treatment when I talk about 治疗；处理.",
        "The word treatment is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing treatment three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 9，先记首尾字母 t-t。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：治疗。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“治疗”？",
        "answer": "treatment"
      }
    },
    "vaccine": {
      "zh": "疫苗",
      "pos": "n.",
      "tag": "医疗",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "v•cc•n•",
      "reviewPrompts": [
        "看到中文“疫苗”时，尝试立刻拼出 vaccine。",
        "把 vaccine 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，vaccine适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word vaccine when I talk about 疫苗.",
        "The word vaccine is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing vaccine three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 7，先记首尾字母 v-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：疫苗。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“疫苗”？",
        "answer": "vaccine"
      }
    },
    "virus": {
      "zh": "病毒",
      "pos": "n.",
      "tag": "科学",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "v•r•s",
      "reviewPrompts": [
        "看到中文“病毒”时，尝试立刻拼出 virus。",
        "把 virus 拆成 2 个小节练习，减少漏键。",
        "在医疗健康分类中，virus适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word virus when I talk about 病毒.",
        "The word virus is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing virus three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 5，先记首尾字母 v-s。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：病毒。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“病毒”？",
        "answer": "virus"
      }
    },
    "vitamin": {
      "zh": "维生素",
      "pos": "n.",
      "tag": "营养",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "v•t•m•n",
      "reviewPrompts": [
        "看到中文“维生素”时，尝试立刻拼出 vitamin。",
        "把 vitamin 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，vitamin适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word vitamin when I talk about 维生素.",
        "The word vitamin is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing vitamin three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 7，先记首尾字母 v-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：维生素。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“维生素”？",
        "answer": "vitamin"
      }
    },
    "wellness": {
      "zh": "健康；安康",
      "pos": "n.",
      "tag": "健康",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "w•lln•ss",
      "reviewPrompts": [
        "看到中文“健康；安康”时，尝试立刻拼出 wellness。",
        "把 wellness 拆成 3 个小节练习，减少漏键。",
        "在医疗健康分类中，wellness适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word wellness when I talk about 健康；安康.",
        "The word wellness is useful in 医疗健康 reading, listening, or writing practice.",
        "Try typing wellness three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 8，先记首尾字母 w-s。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：健康。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“健康”？",
        "answer": "wellness"
      }
    }
  },
  "新闻社会": {
    "authority": {
      "zh": "权威；当局",
      "pos": "n.",
      "tag": "政治",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "••th•r•ty",
      "reviewPrompts": [
        "看到中文“权威；当局”时，尝试立刻拼出 authority。",
        "把 authority 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，authority适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word authority when I talk about 权威；当局.",
        "The word authority is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing authority three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-y。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：权威。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“权威”？",
        "answer": "authority"
      }
    },
    "campaign": {
      "zh": "运动；竞选",
      "pos": "n.",
      "tag": "社会",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mp••gn",
      "reviewPrompts": [
        "看到中文“运动；竞选”时，尝试立刻拼出 campaign。",
        "把 campaign 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，campaign适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word campaign when I talk about 运动；竞选.",
        "The word campaign is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing campaign three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-n。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：运动。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“运动”？",
        "answer": "campaign"
      }
    },
    "citizen": {
      "zh": "公民；市民",
      "pos": "n.",
      "tag": "社会",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•t•z•n",
      "reviewPrompts": [
        "看到中文“公民；市民”时，尝试立刻拼出 citizen。",
        "把 citizen 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，citizen适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word citizen when I talk about 公民；市民.",
        "The word citizen is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing citizen three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：公民。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“公民”？",
        "answer": "citizen"
      }
    },
    "community": {
      "zh": "社区；群体",
      "pos": "n.",
      "tag": "社会",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "c•mm•n•ty",
      "reviewPrompts": [
        "看到中文“社区；群体”时，尝试立刻拼出 community。",
        "把 community 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，community适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word community when I talk about 社区；群体.",
        "The word community is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing community three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 9，先记首尾字母 c-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：社区。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“社区”？",
        "answer": "community"
      }
    },
    "conflict": {
      "zh": "冲突；矛盾",
      "pos": "n.",
      "tag": "社会",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nfl•ct",
      "reviewPrompts": [
        "看到中文“冲突；矛盾”时，尝试立刻拼出 conflict。",
        "把 conflict 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，conflict适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word conflict when I talk about 冲突；矛盾.",
        "The word conflict is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing conflict three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-t。",
        "元音 2 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：冲突。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“冲突”？",
        "answer": "conflict"
      }
    },
    "constitution": {
      "zh": "宪法；构成",
      "pos": "n.",
      "tag": "法律",
      "length": 12,
      "rhythm": "长词分段打",
      "typingPattern": "c•nst•t•t••n",
      "reviewPrompts": [
        "看到中文“宪法；构成”时，尝试立刻拼出 constitution。",
        "把 constitution 拆成 4 个小节练习，减少漏键。",
        "在新闻社会分类中，constitution适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word constitution when I talk about 宪法；构成.",
        "The word constitution is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing constitution three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 12，先记首尾字母 c-n。",
        "元音 5 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：宪法。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“宪法”？",
        "answer": "constitution"
      }
    },
    "debate": {
      "zh": "辩论；争论",
      "pos": "n./v.",
      "tag": "媒体",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "d•b•t•",
      "reviewPrompts": [
        "看到中文“辩论；争论”时，尝试立刻拼出 debate。",
        "把 debate 拆成 2 个小节练习，减少漏键。",
        "在新闻社会分类中，debate适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word debate when I talk about 辩论；争论.",
        "The word debate is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing debate three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 6，先记首尾字母 d-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：辩论。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“辩论”？",
        "answer": "debate"
      }
    },
    "democracy": {
      "zh": "民主；民主制",
      "pos": "n.",
      "tag": "政治",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "d•m•cr•cy",
      "reviewPrompts": [
        "看到中文“民主；民主制”时，尝试立刻拼出 democracy。",
        "把 democracy 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，democracy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word democracy when I talk about 民主；民主制.",
        "The word democracy is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing democracy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 9，先记首尾字母 d-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：民主。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“民主”？",
        "answer": "democracy"
      }
    },
    "economy": {
      "zh": "经济",
      "pos": "n.",
      "tag": "社会",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•c•n•my",
      "reviewPrompts": [
        "看到中文“经济”时，尝试立刻拼出 economy。",
        "把 economy 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，economy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word economy when I talk about 经济.",
        "The word economy is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing economy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 7，先记首尾字母 e-y。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：经济。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“经济”？",
        "answer": "economy"
      }
    },
    "election": {
      "zh": "选举",
      "pos": "n.",
      "tag": "政治",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•l•ct••n",
      "reviewPrompts": [
        "看到中文“选举”时，尝试立刻拼出 election。",
        "把 election 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，election适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word election when I talk about 选举.",
        "The word election is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing election three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-n。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：选举。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“选举”？",
        "answer": "election"
      }
    },
    "equality": {
      "zh": "平等",
      "pos": "n.",
      "tag": "社会",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•q••l•ty",
      "reviewPrompts": [
        "看到中文“平等”时，尝试立刻拼出 equality。",
        "把 equality 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，equality适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word equality when I talk about 平等.",
        "The word equality is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing equality three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-y。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：平等。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“平等”？",
        "answer": "equality"
      }
    },
    "evidence": {
      "zh": "证据",
      "pos": "n.",
      "tag": "法律",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•v•d•nc•",
      "reviewPrompts": [
        "看到中文“证据”时，尝试立刻拼出 evidence。",
        "把 evidence 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，evidence适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word evidence when I talk about 证据.",
        "The word evidence is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing evidence three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 8，先记首尾字母 e-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：证据。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“证据”？",
        "answer": "evidence"
      }
    },
    "global": {
      "zh": "全球的",
      "pos": "adj.",
      "tag": "国际",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "gl•b•l",
      "reviewPrompts": [
        "看到中文“全球的”时，尝试立刻拼出 global。",
        "把 global 拆成 2 个小节练习，减少漏键。",
        "在新闻社会分类中，global适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word global when I talk about 全球的.",
        "The word global is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing global three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 6，先记首尾字母 g-l。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：全球的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“全球的”？",
        "answer": "global"
      }
    },
    "headline": {
      "zh": "标题；头条",
      "pos": "n.",
      "tag": "媒体",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "h••dl•n•",
      "reviewPrompts": [
        "看到中文“标题；头条”时，尝试立刻拼出 headline。",
        "把 headline 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，headline适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word headline when I talk about 标题；头条.",
        "The word headline is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing headline three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 8，先记首尾字母 h-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：标题。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“标题”？",
        "answer": "headline"
      }
    },
    "immigration": {
      "zh": "移民；移居",
      "pos": "n.",
      "tag": "社会",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "•mm•gr•t••n",
      "reviewPrompts": [
        "看到中文“移民；移居”时，尝试立刻拼出 immigration。",
        "把 immigration 拆成 4 个小节练习，减少漏键。",
        "在新闻社会分类中，immigration适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word immigration when I talk about 移民；移居.",
        "The word immigration is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing immigration three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 11，先记首尾字母 i-n。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：移民。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“移民”？",
        "answer": "immigration"
      }
    },
    "incident": {
      "zh": "事件；事变",
      "pos": "n.",
      "tag": "新闻",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "•nc•d•nt",
      "reviewPrompts": [
        "看到中文“事件；事变”时，尝试立刻拼出 incident。",
        "把 incident 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，incident适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word incident when I talk about 事件；事变.",
        "The word incident is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing incident three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 8，先记首尾字母 i-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：事件。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“事件”？",
        "answer": "incident"
      }
    },
    "justice": {
      "zh": "正义；司法",
      "pos": "n.",
      "tag": "法律",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "j•st•c•",
      "reviewPrompts": [
        "看到中文“正义；司法”时，尝试立刻拼出 justice。",
        "把 justice 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，justice适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word justice when I talk about 正义；司法.",
        "The word justice is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing justice three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "J 开头，长度 7，先记首尾字母 j-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：正义。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“正义”？",
        "answer": "justice"
      }
    },
    "legislation": {
      "zh": "立法；法律",
      "pos": "n.",
      "tag": "法律",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "l•g•sl•t••n",
      "reviewPrompts": [
        "看到中文“立法；法律”时，尝试立刻拼出 legislation。",
        "把 legislation 拆成 4 个小节练习，减少漏键。",
        "在新闻社会分类中，legislation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word legislation when I talk about 立法；法律.",
        "The word legislation is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing legislation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 11，先记首尾字母 l-n。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：立法。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“立法”？",
        "answer": "legislation"
      }
    },
    "media": {
      "zh": "媒体",
      "pos": "n.",
      "tag": "新闻",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "m•d••",
      "reviewPrompts": [
        "看到中文“媒体”时，尝试立刻拼出 media。",
        "把 media 拆成 2 个小节练习，减少漏键。",
        "在新闻社会分类中，media适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word media when I talk about 媒体.",
        "The word media is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing media three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 5，先记首尾字母 m-a。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：媒体。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“媒体”？",
        "answer": "media"
      }
    },
    "minister": {
      "zh": "部长；牧师",
      "pos": "n.",
      "tag": "政治",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "m•n•st•r",
      "reviewPrompts": [
        "看到中文“部长；牧师”时，尝试立刻拼出 minister。",
        "把 minister 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，minister适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word minister when I talk about 部长；牧师.",
        "The word minister is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing minister three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 8，先记首尾字母 m-r。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：部长。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“部长”？",
        "answer": "minister"
      }
    },
    "policy": {
      "zh": "政策；方针",
      "pos": "n.",
      "tag": "政治",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "p•l•cy",
      "reviewPrompts": [
        "看到中文“政策；方针”时，尝试立刻拼出 policy。",
        "把 policy 拆成 2 个小节练习，减少漏键。",
        "在新闻社会分类中，policy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word policy when I talk about 政策；方针.",
        "The word policy is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing policy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 6，先记首尾字母 p-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：政策。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“政策”？",
        "answer": "policy"
      }
    },
    "poverty": {
      "zh": "贫困",
      "pos": "n.",
      "tag": "社会",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p•v•rty",
      "reviewPrompts": [
        "看到中文“贫困”时，尝试立刻拼出 poverty。",
        "把 poverty 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，poverty适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word poverty when I talk about 贫困.",
        "The word poverty is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing poverty three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：贫困。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“贫困”？",
        "answer": "poverty"
      }
    },
    "protest": {
      "zh": "抗议",
      "pos": "n./v.",
      "tag": "社会",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•t•st",
      "reviewPrompts": [
        "看到中文“抗议”时，尝试立刻拼出 protest。",
        "把 protest 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，protest适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word protest when I talk about 抗议.",
        "The word protest is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing protest three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：抗议。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“抗议”？",
        "answer": "protest"
      }
    },
    "public": {
      "zh": "公众的；公开的",
      "pos": "adj./n.",
      "tag": "社会",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "p•bl•c",
      "reviewPrompts": [
        "看到中文“公众的；公开的”时，尝试立刻拼出 public。",
        "把 public 拆成 2 个小节练习，减少漏键。",
        "在新闻社会分类中，public适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word public when I talk about 公众的；公开的.",
        "The word public is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing public three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 6，先记首尾字母 p-c。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：公众的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“公众的”？",
        "answer": "public"
      }
    },
    "reform": {
      "zh": "改革；改造",
      "pos": "n./v.",
      "tag": "社会",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "r•f•rm",
      "reviewPrompts": [
        "看到中文“改革；改造”时，尝试立刻拼出 reform。",
        "把 reform 拆成 2 个小节练习，减少漏键。",
        "在新闻社会分类中，reform适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word reform when I talk about 改革；改造.",
        "The word reform is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing reform three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-m。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：改革。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“改革”？",
        "answer": "reform"
      }
    },
    "resident": {
      "zh": "居民",
      "pos": "n.",
      "tag": "社会",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "r•s•d•nt",
      "reviewPrompts": [
        "看到中文“居民”时，尝试立刻拼出 resident。",
        "把 resident 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，resident适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word resident when I talk about 居民.",
        "The word resident is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing resident three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 8，先记首尾字母 r-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：居民。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“居民”？",
        "answer": "resident"
      }
    },
    "rights": {
      "zh": "权利",
      "pos": "n.",
      "tag": "法律",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "r•ghts",
      "reviewPrompts": [
        "看到中文“权利”时，尝试立刻拼出 rights。",
        "把 rights 拆成 2 个小节练习，减少漏键。",
        "在新闻社会分类中，rights适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word rights when I talk about 权利.",
        "The word rights is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing rights three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-s。",
        "元音 1 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：权利。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“权利”？",
        "answer": "rights"
      }
    },
    "security": {
      "zh": "安全；保障",
      "pos": "n.",
      "tag": "社会",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "s•c•r•ty",
      "reviewPrompts": [
        "看到中文“安全；保障”时，尝试立刻拼出 security。",
        "把 security 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，security适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word security when I talk about 安全；保障.",
        "The word security is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing security three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 8，先记首尾字母 s-y。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：安全。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“安全”？",
        "answer": "security"
      }
    },
    "survey": {
      "zh": "调查；概览",
      "pos": "n./v.",
      "tag": "媒体",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "s•rv•y",
      "reviewPrompts": [
        "看到中文“调查；概览”时，尝试立刻拼出 survey。",
        "把 survey 拆成 2 个小节练习，减少漏键。",
        "在新闻社会分类中，survey适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word survey when I talk about 调查；概览.",
        "The word survey is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing survey three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：调查。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“调查”？",
        "answer": "survey"
      }
    },
    "witness": {
      "zh": "目击者；见证",
      "pos": "n./v.",
      "tag": "法律",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "w•tn•ss",
      "reviewPrompts": [
        "看到中文“目击者；见证”时，尝试立刻拼出 witness。",
        "把 witness 拆成 3 个小节练习，减少漏键。",
        "在新闻社会分类中，witness适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word witness when I talk about 目击者；见证.",
        "The word witness is useful in 新闻社会 reading, listening, or writing practice.",
        "Try typing witness three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "W 开头，长度 7，先记首尾字母 w-s。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：目击者。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“目击者”？",
        "answer": "witness"
      }
    }
  },
  "艺术文化": {
    "aesthetic": {
      "zh": "审美的；美学",
      "pos": "adj./n.",
      "tag": "艺术",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "••sth•t•c",
      "reviewPrompts": [
        "看到中文“审美的；美学”时，尝试立刻拼出 aesthetic。",
        "把 aesthetic 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，aesthetic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word aesthetic when I talk about 审美的；美学.",
        "The word aesthetic is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing aesthetic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 9，先记首尾字母 a-c。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：审美的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“审美的”？",
        "answer": "aesthetic"
      }
    },
    "architecture": {
      "zh": "建筑；建筑学",
      "pos": "n.",
      "tag": "艺术",
      "length": 12,
      "rhythm": "长词分段打",
      "typingPattern": "•rch•t•ct•r•",
      "reviewPrompts": [
        "看到中文“建筑；建筑学”时，尝试立刻拼出 architecture。",
        "把 architecture 拆成 4 个小节练习，减少漏键。",
        "在艺术文化分类中，architecture适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word architecture when I talk about 建筑；建筑学.",
        "The word architecture is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing architecture three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 12，先记首尾字母 a-e。",
        "元音 5 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：建筑。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“建筑”？",
        "answer": "architecture"
      }
    },
    "canvas": {
      "zh": "画布；帆布",
      "pos": "n.",
      "tag": "绘画",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "c•nv•s",
      "reviewPrompts": [
        "看到中文“画布；帆布”时，尝试立刻拼出 canvas。",
        "把 canvas 拆成 2 个小节练习，减少漏键。",
        "在艺术文化分类中，canvas适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word canvas when I talk about 画布；帆布.",
        "The word canvas is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing canvas three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-s。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：画布。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“画布”？",
        "answer": "canvas"
      }
    },
    "ceremony": {
      "zh": "典礼；仪式",
      "pos": "n.",
      "tag": "文化",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "c•r•m•ny",
      "reviewPrompts": [
        "看到中文“典礼；仪式”时，尝试立刻拼出 ceremony。",
        "把 ceremony 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，ceremony适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word ceremony when I talk about 典礼；仪式.",
        "The word ceremony is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing ceremony three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-y。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：典礼。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“典礼”？",
        "answer": "ceremony"
      }
    },
    "classic": {
      "zh": "经典的；经典作品",
      "pos": "adj./n.",
      "tag": "文学",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "cl•ss•c",
      "reviewPrompts": [
        "看到中文“经典的；经典作品”时，尝试立刻拼出 classic。",
        "把 classic 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，classic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word classic when I talk about 经典的；经典作品.",
        "The word classic is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing classic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-c。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：经典的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“经典的”？",
        "answer": "classic"
      }
    },
    "compose": {
      "zh": "作曲；组成",
      "pos": "v.",
      "tag": "音乐",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•mp•s•",
      "reviewPrompts": [
        "看到中文“作曲；组成”时，尝试立刻拼出 compose。",
        "把 compose 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，compose适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word compose when I talk about 作曲；组成.",
        "The word compose is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing compose three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：作曲。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“作曲”？",
        "answer": "compose"
      }
    },
    "costume": {
      "zh": "服装；戏装",
      "pos": "n.",
      "tag": "戏剧",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "c•st•m•",
      "reviewPrompts": [
        "看到中文“服装；戏装”时，尝试立刻拼出 costume。",
        "把 costume 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，costume适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word costume when I talk about 服装；戏装.",
        "The word costume is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing costume three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 7，先记首尾字母 c-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：服装。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“服装”？",
        "answer": "costume"
      }
    },
    "craft": {
      "zh": "工艺；手艺",
      "pos": "n.",
      "tag": "文化",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "cr•ft",
      "reviewPrompts": [
        "看到中文“工艺；手艺”时，尝试立刻拼出 craft。",
        "把 craft 拆成 2 个小节练习，减少漏键。",
        "在艺术文化分类中，craft适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word craft when I talk about 工艺；手艺.",
        "The word craft is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing craft three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 5，先记首尾字母 c-t。",
        "元音 1 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：工艺。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“工艺”？",
        "answer": "craft"
      }
    },
    "creative": {
      "zh": "有创造力的",
      "pos": "adj.",
      "tag": "艺术",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "cr••t•v•",
      "reviewPrompts": [
        "看到中文“有创造力的”时，尝试立刻拼出 creative。",
        "把 creative 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，creative适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word creative when I talk about 有创造力的.",
        "The word creative is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing creative three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：有创造力的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“有创造力的”？",
        "answer": "creative"
      }
    },
    "critic": {
      "zh": "评论家；批评者",
      "pos": "n.",
      "tag": "媒体",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "cr•t•c",
      "reviewPrompts": [
        "看到中文“评论家；批评者”时，尝试立刻拼出 critic。",
        "把 critic 拆成 2 个小节练习，减少漏键。",
        "在艺术文化分类中，critic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word critic when I talk about 评论家；批评者.",
        "The word critic is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing critic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-c。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：评论家。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“评论家”？",
        "answer": "critic"
      }
    },
    "exhibition": {
      "zh": "展览；展示",
      "pos": "n.",
      "tag": "艺术",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•xh•b•t••n",
      "reviewPrompts": [
        "看到中文“展览；展示”时，尝试立刻拼出 exhibition。",
        "把 exhibition 拆成 4 个小节练习，减少漏键。",
        "在艺术文化分类中，exhibition适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word exhibition when I talk about 展览；展示.",
        "The word exhibition is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing exhibition three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 10，先记首尾字母 e-n。",
        "元音 5 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：展览。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“展览”？",
        "answer": "exhibition"
      }
    },
    "festival": {
      "zh": "节日；庆典",
      "pos": "n.",
      "tag": "文化",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "f•st•v•l",
      "reviewPrompts": [
        "看到中文“节日；庆典”时，尝试立刻拼出 festival。",
        "把 festival 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，festival适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word festival when I talk about 节日；庆典.",
        "The word festival is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing festival three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 8，先记首尾字母 f-l。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：节日。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“节日”？",
        "answer": "festival"
      }
    },
    "fiction": {
      "zh": "小说；虚构",
      "pos": "n.",
      "tag": "文学",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "f•ct••n",
      "reviewPrompts": [
        "看到中文“小说；虚构”时，尝试立刻拼出 fiction。",
        "把 fiction 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，fiction适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word fiction when I talk about 小说；虚构.",
        "The word fiction is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing fiction three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "F 开头，长度 7，先记首尾字母 f-n。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：小说。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“小说”？",
        "answer": "fiction"
      }
    },
    "gallery": {
      "zh": "画廊；走廊",
      "pos": "n.",
      "tag": "艺术",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "g•ll•ry",
      "reviewPrompts": [
        "看到中文“画廊；走廊”时，尝试立刻拼出 gallery。",
        "把 gallery 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，gallery适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word gallery when I talk about 画廊；走廊.",
        "The word gallery is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing gallery three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 7，先记首尾字母 g-y。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：画廊。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“画廊”？",
        "answer": "gallery"
      }
    },
    "heritage": {
      "zh": "遗产；传统",
      "pos": "n.",
      "tag": "文化",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "h•r•t•g•",
      "reviewPrompts": [
        "看到中文“遗产；传统”时，尝试立刻拼出 heritage。",
        "把 heritage 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，heritage适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word heritage when I talk about 遗产；传统.",
        "The word heritage is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing heritage three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "H 开头，长度 8，先记首尾字母 h-e。",
        "元音 4 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：遗产。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“遗产”？",
        "answer": "heritage"
      }
    },
    "instrument": {
      "zh": "乐器；工具",
      "pos": "n.",
      "tag": "音乐",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "•nstr•m•nt",
      "reviewPrompts": [
        "看到中文“乐器；工具”时，尝试立刻拼出 instrument。",
        "把 instrument 拆成 4 个小节练习，减少漏键。",
        "在艺术文化分类中，instrument适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word instrument when I talk about 乐器；工具.",
        "The word instrument is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing instrument three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 10，先记首尾字母 i-t。",
        "元音 3 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：乐器。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“乐器”？",
        "answer": "instrument"
      }
    },
    "literature": {
      "zh": "文学",
      "pos": "n.",
      "tag": "文学",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "l•t•r•t•r•",
      "reviewPrompts": [
        "看到中文“文学”时，尝试立刻拼出 literature。",
        "把 literature 拆成 4 个小节练习，减少漏键。",
        "在艺术文化分类中，literature适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word literature when I talk about 文学.",
        "The word literature is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing literature three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "L 开头，长度 10，先记首尾字母 l-e。",
        "元音 5 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：文学。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“文学”？",
        "answer": "literature"
      }
    },
    "melody": {
      "zh": "旋律",
      "pos": "n.",
      "tag": "音乐",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m•l•dy",
      "reviewPrompts": [
        "看到中文“旋律”时，尝试立刻拼出 melody。",
        "把 melody 拆成 2 个小节练习，减少漏键。",
        "在艺术文化分类中，melody适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word melody when I talk about 旋律.",
        "The word melody is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing melody three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-y。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：旋律。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“旋律”？",
        "answer": "melody"
      }
    },
    "myth": {
      "zh": "神话；误解",
      "pos": "n.",
      "tag": "文化",
      "length": 4,
      "rhythm": "短词快打",
      "typingPattern": "myth",
      "reviewPrompts": [
        "看到中文“神话；误解”时，尝试立刻拼出 myth。",
        "把 myth 拆成 2 个小节练习，减少漏键。",
        "在艺术文化分类中，myth适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word myth when I talk about 神话；误解.",
        "The word myth is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing myth three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 4，先记首尾字母 m-h。",
        "元音 0 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：神话。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“神话”？",
        "answer": "myth"
      }
    },
    "novel": {
      "zh": "小说；新颖的",
      "pos": "n./adj.",
      "tag": "文学",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "n•v•l",
      "reviewPrompts": [
        "看到中文“小说；新颖的”时，尝试立刻拼出 novel。",
        "把 novel 拆成 2 个小节练习，减少漏键。",
        "在艺术文化分类中，novel适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word novel when I talk about 小说；新颖的.",
        "The word novel is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing novel three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "N 开头，长度 5，先记首尾字母 n-l。",
        "元音 2 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：小说。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“小说”？",
        "answer": "novel"
      }
    },
    "opera": {
      "zh": "歌剧",
      "pos": "n.",
      "tag": "音乐",
      "length": 5,
      "rhythm": "短词快打",
      "typingPattern": "•p•r•",
      "reviewPrompts": [
        "看到中文“歌剧”时，尝试立刻拼出 opera。",
        "把 opera 拆成 2 个小节练习，减少漏键。",
        "在艺术文化分类中，opera适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word opera when I talk about 歌剧.",
        "The word opera is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing opera three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 5，先记首尾字母 o-a。",
        "元音 3 个，辅音 2 个；打字时注意节奏。",
        "中文释义关键词：歌剧。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“歌剧”？",
        "answer": "opera"
      }
    },
    "orchestra": {
      "zh": "管弦乐队",
      "pos": "n.",
      "tag": "音乐",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•rch•str•",
      "reviewPrompts": [
        "看到中文“管弦乐队”时，尝试立刻拼出 orchestra。",
        "把 orchestra 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，orchestra适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word orchestra when I talk about 管弦乐队.",
        "The word orchestra is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing orchestra three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "O 开头，长度 9，先记首尾字母 o-a。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：管弦乐队。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“管弦乐队”？",
        "answer": "orchestra"
      }
    },
    "perform": {
      "zh": "表演；执行",
      "pos": "v.",
      "tag": "舞台",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "p•rf•rm",
      "reviewPrompts": [
        "看到中文“表演；执行”时，尝试立刻拼出 perform。",
        "把 perform 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，perform适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word perform when I talk about 表演；执行.",
        "The word perform is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing perform three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-m。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：表演。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“表演”？",
        "answer": "perform"
      }
    },
    "portrait": {
      "zh": "肖像；描绘",
      "pos": "n.",
      "tag": "绘画",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "p•rtr••t",
      "reviewPrompts": [
        "看到中文“肖像；描绘”时，尝试立刻拼出 portrait。",
        "把 portrait 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，portrait适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word portrait when I talk about 肖像；描绘.",
        "The word portrait is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing portrait three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-t。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：肖像。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“肖像”？",
        "answer": "portrait"
      }
    },
    "rhythm": {
      "zh": "节奏；韵律",
      "pos": "n.",
      "tag": "音乐",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "rhythm",
      "reviewPrompts": [
        "看到中文“节奏；韵律”时，尝试立刻拼出 rhythm。",
        "把 rhythm 拆成 2 个小节练习，减少漏键。",
        "在艺术文化分类中，rhythm适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word rhythm when I talk about 节奏；韵律.",
        "The word rhythm is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing rhythm three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-m。",
        "元音 0 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：节奏。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“节奏”？",
        "answer": "rhythm"
      }
    },
    "sculpture": {
      "zh": "雕塑",
      "pos": "n.",
      "tag": "艺术",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "sc•lpt•r•",
      "reviewPrompts": [
        "看到中文“雕塑”时，尝试立刻拼出 sculpture。",
        "把 sculpture 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，sculpture适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word sculpture when I talk about 雕塑.",
        "The word sculpture is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing sculpture three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 9，先记首尾字母 s-e。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：雕塑。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“雕塑”？",
        "answer": "sculpture"
      }
    },
    "symbol": {
      "zh": "象征；符号",
      "pos": "n.",
      "tag": "文化",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "symb•l",
      "reviewPrompts": [
        "看到中文“象征；符号”时，尝试立刻拼出 symbol。",
        "把 symbol 拆成 2 个小节练习，减少漏键。",
        "在艺术文化分类中，symbol适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word symbol when I talk about 象征；符号.",
        "The word symbol is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing symbol three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 6，先记首尾字母 s-l。",
        "元音 1 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：象征。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“象征”？",
        "answer": "symbol"
      }
    },
    "tradition": {
      "zh": "传统",
      "pos": "n.",
      "tag": "文化",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "tr•d•t••n",
      "reviewPrompts": [
        "看到中文“传统”时，尝试立刻拼出 tradition。",
        "把 tradition 拆成 3 个小节练习，减少漏键。",
        "在艺术文化分类中，tradition适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word tradition when I talk about 传统.",
        "The word tradition is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing tradition three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 9，先记首尾字母 t-n。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：传统。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“传统”？",
        "answer": "tradition"
      }
    },
    "visual": {
      "zh": "视觉的",
      "pos": "adj.",
      "tag": "设计",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "v•s••l",
      "reviewPrompts": [
        "看到中文“视觉的”时，尝试立刻拼出 visual。",
        "把 visual 拆成 2 个小节练习，减少漏键。",
        "在艺术文化分类中，visual适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word visual when I talk about 视觉的.",
        "The word visual is useful in 艺术文化 reading, listening, or writing practice.",
        "Try typing visual three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 6，先记首尾字母 v-l。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：视觉的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“视觉的”？",
        "answer": "visual"
      }
    }
  },
  "词根进阶": {
    "beneficial": {
      "zh": "有益的",
      "pos": "adj.",
      "tag": "bene好",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "b•n•f•c••l",
      "reviewPrompts": [
        "看到中文“有益的”时，尝试立刻拼出 beneficial。",
        "把 beneficial 拆成 4 个小节练习，减少漏键。",
        "在词根进阶分类中，beneficial适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word beneficial when I talk about 有益的.",
        "The word beneficial is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing beneficial three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 10，先记首尾字母 b-l。",
        "元音 5 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：有益的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“有益的”？",
        "answer": "beneficial"
      }
    },
    "benevolent": {
      "zh": "仁慈的；慈善的",
      "pos": "adj.",
      "tag": "bene好",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "b•n•v•l•nt",
      "reviewPrompts": [
        "看到中文“仁慈的；慈善的”时，尝试立刻拼出 benevolent。",
        "把 benevolent 拆成 4 个小节练习，减少漏键。",
        "在词根进阶分类中，benevolent适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word benevolent when I talk about 仁慈的；慈善的.",
        "The word benevolent is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing benevolent three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 10，先记首尾字母 b-t。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：仁慈的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“仁慈的”？",
        "answer": "benevolent"
      }
    },
    "convention": {
      "zh": "会议；惯例",
      "pos": "n.",
      "tag": "ven来",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "c•nv•nt••n",
      "reviewPrompts": [
        "看到中文“会议；惯例”时，尝试立刻拼出 convention。",
        "把 convention 拆成 4 个小节练习，减少漏键。",
        "在词根进阶分类中，convention适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word convention when I talk about 会议；惯例.",
        "The word convention is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing convention three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 10，先记首尾字母 c-n。",
        "元音 4 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：会议。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“会议”？",
        "answer": "convention"
      }
    },
    "intervene": {
      "zh": "干预；介入",
      "pos": "v.",
      "tag": "ven来",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "•nt•rv•n•",
      "reviewPrompts": [
        "看到中文“干预；介入”时，尝试立刻拼出 intervene。",
        "把 intervene 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，intervene适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word intervene when I talk about 干预；介入.",
        "The word intervene is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing intervene three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 9，先记首尾字母 i-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：干预。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“干预”？",
        "answer": "intervene"
      }
    },
    "portable": {
      "zh": "便携的",
      "pos": "adj.",
      "tag": "port带",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "p•rt•bl•",
      "reviewPrompts": [
        "看到中文“便携的”时，尝试立刻拼出 portable。",
        "把 portable 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，portable适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word portable when I talk about 便携的.",
        "The word portable is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing portable three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 8，先记首尾字母 p-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：便携的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“便携的”？",
        "answer": "portable"
      }
    },
    "transport": {
      "zh": "运输；运送",
      "pos": "v./n.",
      "tag": "port带",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "tr•nsp•rt",
      "reviewPrompts": [
        "看到中文“运输；运送”时，尝试立刻拼出 transport。",
        "把 transport 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，transport适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word transport when I talk about 运输；运送.",
        "The word transport is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing transport three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 9，先记首尾字母 t-t。",
        "元音 2 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：运输。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“运输”？",
        "answer": "transport"
      }
    },
    "predict": {
      "zh": "预测",
      "pos": "v.",
      "tag": "dict说",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "pr•d•ct",
      "reviewPrompts": [
        "看到中文“预测”时，尝试立刻拼出 predict。",
        "把 predict 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，predict适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word predict when I talk about 预测.",
        "The word predict is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing predict three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "P 开头，长度 7，先记首尾字母 p-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：预测。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“预测”？",
        "answer": "predict"
      }
    },
    "dictation": {
      "zh": "听写；口述",
      "pos": "n.",
      "tag": "dict说",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "d•ct•t••n",
      "reviewPrompts": [
        "看到中文“听写；口述”时，尝试立刻拼出 dictation。",
        "把 dictation 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，dictation适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word dictation when I talk about 听写；口述.",
        "The word dictation is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing dictation three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 9，先记首尾字母 d-n。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：听写。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“听写”？",
        "answer": "dictation"
      }
    },
    "visible": {
      "zh": "可见的",
      "pos": "adj.",
      "tag": "vis看",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "v•s•bl•",
      "reviewPrompts": [
        "看到中文“可见的”时，尝试立刻拼出 visible。",
        "把 visible 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，visible适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word visible when I talk about 可见的.",
        "The word visible is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing visible three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "V 开头，长度 7，先记首尾字母 v-e。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：可见的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“可见的”？",
        "answer": "visible"
      }
    },
    "revise": {
      "zh": "修改；复习",
      "pos": "v.",
      "tag": "vis看",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "r•v•s•",
      "reviewPrompts": [
        "看到中文“修改；复习”时，尝试立刻拼出 revise。",
        "把 revise 拆成 2 个小节练习，减少漏键。",
        "在词根进阶分类中，revise适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word revise when I talk about 修改；复习.",
        "The word revise is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing revise three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "R 开头，长度 6，先记首尾字母 r-e。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：修改。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“修改”？",
        "answer": "revise"
      }
    },
    "spectator": {
      "zh": "观众",
      "pos": "n.",
      "tag": "spect看",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "sp•ct•t•r",
      "reviewPrompts": [
        "看到中文“观众”时，尝试立刻拼出 spectator。",
        "把 spectator 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，spectator适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word spectator when I talk about 观众.",
        "The word spectator is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing spectator three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 9，先记首尾字母 s-r。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：观众。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“观众”？",
        "answer": "spectator"
      }
    },
    "inspect": {
      "zh": "检查；视察",
      "pos": "v.",
      "tag": "spect看",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "•nsp•ct",
      "reviewPrompts": [
        "看到中文“检查；视察”时，尝试立刻拼出 inspect。",
        "把 inspect 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，inspect适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word inspect when I talk about 检查；视察.",
        "The word inspect is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing inspect three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 7，先记首尾字母 i-t。",
        "元音 2 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：检查。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“检查”？",
        "answer": "inspect"
      }
    },
    "construct": {
      "zh": "建造；构建",
      "pos": "v.",
      "tag": "struct建",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "c•nstr•ct",
      "reviewPrompts": [
        "看到中文“建造；构建”时，尝试立刻拼出 construct。",
        "把 construct 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，construct适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word construct when I talk about 建造；构建.",
        "The word construct is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing construct three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 9，先记首尾字母 c-t。",
        "元音 2 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：建造。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“建造”？",
        "answer": "construct"
      }
    },
    "structure": {
      "zh": "结构",
      "pos": "n.",
      "tag": "struct建",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "str•ct•r•",
      "reviewPrompts": [
        "看到中文“结构”时，尝试立刻拼出 structure。",
        "把 structure 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，structure适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word structure when I talk about 结构.",
        "The word structure is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing structure three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "S 开头，长度 9，先记首尾字母 s-e。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：结构。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“结构”？",
        "answer": "structure"
      }
    },
    "manual": {
      "zh": "手册；手工的",
      "pos": "n./adj.",
      "tag": "man手",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "m•n••l",
      "reviewPrompts": [
        "看到中文“手册；手工的”时，尝试立刻拼出 manual。",
        "把 manual 拆成 2 个小节练习，减少漏键。",
        "在词根进阶分类中，manual适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word manual when I talk about 手册；手工的.",
        "The word manual is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing manual three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 6，先记首尾字母 m-l。",
        "元音 3 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：手册。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“手册”？",
        "answer": "manual"
      }
    },
    "manufacture": {
      "zh": "制造；制造业",
      "pos": "v./n.",
      "tag": "man手",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "m•n•f•ct•r•",
      "reviewPrompts": [
        "看到中文“制造；制造业”时，尝试立刻拼出 manufacture。",
        "把 manufacture 拆成 4 个小节练习，减少漏键。",
        "在词根进阶分类中，manufacture适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word manufacture when I talk about 制造；制造业.",
        "The word manufacture is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing manufacture three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "M 开头，长度 11，先记首尾字母 m-e。",
        "元音 5 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：制造。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“制造”？",
        "answer": "manufacture"
      }
    },
    "audience": {
      "zh": "观众；听众",
      "pos": "n.",
      "tag": "aud听",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "••d••nc•",
      "reviewPrompts": [
        "看到中文“观众；听众”时，尝试立刻拼出 audience。",
        "把 audience 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，audience适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word audience when I talk about 观众；听众.",
        "The word audience is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing audience three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 8，先记首尾字母 a-e。",
        "元音 5 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：观众。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“观众”？",
        "answer": "audience"
      }
    },
    "audible": {
      "zh": "听得见的",
      "pos": "adj.",
      "tag": "aud听",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "••d•bl•",
      "reviewPrompts": [
        "看到中文“听得见的”时，尝试立刻拼出 audible。",
        "把 audible 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，audible适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word audible when I talk about 听得见的.",
        "The word audible is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing audible three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "A 开头，长度 7，先记首尾字母 a-e。",
        "元音 4 个，辅音 3 个；打字时注意节奏。",
        "中文释义关键词：听得见的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“听得见的”？",
        "answer": "audible"
      }
    },
    "credible": {
      "zh": "可信的",
      "pos": "adj.",
      "tag": "cred信",
      "length": 8,
      "rhythm": "中长词稳打",
      "typingPattern": "cr•d•bl•",
      "reviewPrompts": [
        "看到中文“可信的”时，尝试立刻拼出 credible。",
        "把 credible 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，credible适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word credible when I talk about 可信的.",
        "The word credible is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing credible three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 8，先记首尾字母 c-e。",
        "元音 3 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：可信的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“可信的”？",
        "answer": "credible"
      }
    },
    "credit": {
      "zh": "信用；学分",
      "pos": "n.",
      "tag": "cred信",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "cr•d•t",
      "reviewPrompts": [
        "看到中文“信用；学分”时，尝试立刻拼出 credit。",
        "把 credit 拆成 2 个小节练习，减少漏键。",
        "在词根进阶分类中，credit适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word credit when I talk about 信用；学分.",
        "The word credit is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing credit three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "C 开头，长度 6，先记首尾字母 c-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：信用。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“信用”？",
        "answer": "credit"
      }
    },
    "export": {
      "zh": "出口；输出",
      "pos": "v./n.",
      "tag": "port带",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•xp•rt",
      "reviewPrompts": [
        "看到中文“出口；输出”时，尝试立刻拼出 export。",
        "把 export 拆成 2 个小节练习，减少漏键。",
        "在词根进阶分类中，export适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word export when I talk about 出口；输出.",
        "The word export is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing export three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "E 开头，长度 6，先记首尾字母 e-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：出口。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“出口”？",
        "answer": "export"
      }
    },
    "import": {
      "zh": "进口；输入",
      "pos": "v./n.",
      "tag": "port带",
      "length": 6,
      "rhythm": "中长词稳打",
      "typingPattern": "•mp•rt",
      "reviewPrompts": [
        "看到中文“进口；输入”时，尝试立刻拼出 import。",
        "把 import 拆成 2 个小节练习，减少漏键。",
        "在词根进阶分类中，import适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word import when I talk about 进口；输入.",
        "The word import is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing import three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "I 开头，长度 6，先记首尾字母 i-t。",
        "元音 2 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：进口。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“进口”？",
        "answer": "import"
      }
    },
    "biology": {
      "zh": "生物学",
      "pos": "n.",
      "tag": "bio生命",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "b••l•gy",
      "reviewPrompts": [
        "看到中文“生物学”时，尝试立刻拼出 biology。",
        "把 biology 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，biology适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word biology when I talk about 生物学.",
        "The word biology is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing biology three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 7，先记首尾字母 b-y。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：生物学。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“生物学”？",
        "answer": "biology"
      }
    },
    "biography": {
      "zh": "传记",
      "pos": "n.",
      "tag": "bio生命",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "b••gr•phy",
      "reviewPrompts": [
        "看到中文“传记”时，尝试立刻拼出 biography。",
        "把 biography 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，biography适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word biography when I talk about 传记.",
        "The word biography is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing biography three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "B 开头，长度 9，先记首尾字母 b-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：传记。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“传记”？",
        "answer": "biography"
      }
    },
    "telephone": {
      "zh": "电话",
      "pos": "n.",
      "tag": "tele远",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "t•l•ph•n•",
      "reviewPrompts": [
        "看到中文“电话”时，尝试立刻拼出 telephone。",
        "把 telephone 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，telephone适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word telephone when I talk about 电话.",
        "The word telephone is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing telephone three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 9，先记首尾字母 t-e。",
        "元音 4 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：电话。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“电话”？",
        "answer": "telephone"
      }
    },
    "television": {
      "zh": "电视",
      "pos": "n.",
      "tag": "tele远",
      "length": 10,
      "rhythm": "长词分段打",
      "typingPattern": "t•l•v•s••n",
      "reviewPrompts": [
        "看到中文“电视”时，尝试立刻拼出 television。",
        "把 television 拆成 4 个小节练习，减少漏键。",
        "在词根进阶分类中，television适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word television when I talk about 电视.",
        "The word television is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing television three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "T 开头，长度 10，先记首尾字母 t-n。",
        "元音 5 个，辅音 5 个；打字时注意节奏。",
        "中文释义关键词：电视。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“电视”？",
        "answer": "television"
      }
    },
    "democracy": {
      "zh": "民主",
      "pos": "n.",
      "tag": "demo人民",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "d•m•cr•cy",
      "reviewPrompts": [
        "看到中文“民主”时，尝试立刻拼出 democracy。",
        "把 democracy 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，democracy适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word democracy when I talk about 民主.",
        "The word democracy is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing democracy three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 9，先记首尾字母 d-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：民主。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“民主”？",
        "answer": "democracy"
      }
    },
    "demographic": {
      "zh": "人口统计的",
      "pos": "adj.",
      "tag": "demo人民",
      "length": 11,
      "rhythm": "长词分段打",
      "typingPattern": "d•m•gr•ph•c",
      "reviewPrompts": [
        "看到中文“人口统计的”时，尝试立刻拼出 demographic。",
        "把 demographic 拆成 4 个小节练习，减少漏键。",
        "在词根进阶分类中，demographic适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word demographic when I talk about 人口统计的.",
        "The word demographic is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing demographic three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "D 开头，长度 11，先记首尾字母 d-c。",
        "元音 4 个，辅音 7 个；打字时注意节奏。",
        "中文释义关键词：人口统计的。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“人口统计的”？",
        "answer": "demographic"
      }
    },
    "geography": {
      "zh": "地理",
      "pos": "n.",
      "tag": "geo地",
      "length": 9,
      "rhythm": "长词分段打",
      "typingPattern": "g••gr•phy",
      "reviewPrompts": [
        "看到中文“地理”时，尝试立刻拼出 geography。",
        "把 geography 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，geography适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word geography when I talk about 地理.",
        "The word geography is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing geography three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 9，先记首尾字母 g-y。",
        "元音 3 个，辅音 6 个；打字时注意节奏。",
        "中文释义关键词：地理。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“地理”？",
        "answer": "geography"
      }
    },
    "geology": {
      "zh": "地质学",
      "pos": "n.",
      "tag": "geo地",
      "length": 7,
      "rhythm": "中长词稳打",
      "typingPattern": "g••l•gy",
      "reviewPrompts": [
        "看到中文“地质学”时，尝试立刻拼出 geology。",
        "把 geology 拆成 3 个小节练习，减少漏键。",
        "在词根进阶分类中，geology适合和同主题词一起复习。"
      ],
      "examples": [
        "I can use the word geology when I talk about 地质学.",
        "The word geology is useful in 词根进阶 reading, listening, or writing practice.",
        "Try typing geology three times: slow, normal, then fast."
      ],
      "memoryHooks": [
        "G 开头，长度 7，先记首尾字母 g-y。",
        "元音 3 个，辅音 4 个；打字时注意节奏。",
        "中文释义关键词：地质学。"
      ],
      "miniQuiz": {
        "clue": "哪个英文词可以表示“地质学”？",
        "answer": "geology"
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.WORD_STUDY_NOTES = WORD_STUDY_NOTES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WORD_STUDY_NOTES;
}
