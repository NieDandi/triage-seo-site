export type FAQItem = {
    slug: string;
    question: string;
    shortAnswer: string;
};

export const faqs: FAQItem[] = [
    // 咳嗽
    {
        slug: "kesou-xian-kan-nage-ke",
        question: "咳嗽先看哪个科？",
        shortAnswer: "咳嗽一般优先考虑呼吸内科；如果伴随咽痛、流鼻涕等，也可先看全科或耳鼻喉科。",
    },
    {
        slug: "kesou-gua-huxineike-ma",
        question: "咳嗽挂呼吸内科吗？",
        shortAnswer: "大多数咳嗽可以挂呼吸内科，尤其是持续咳嗽、有痰或伴随气喘的情况。",
    },
    {
        slug: "you-tan-kesou-kan-shenme-ke",
        question: "有痰咳嗽看什么科？",
        shortAnswer: "有痰咳嗽通常建议看呼吸内科，如果痰色异常或持续时间长，应尽早就医。",
    },
    {
        slug: "kesou-yizhi-buhao-kan-shenme-ke",
        question: "咳嗽一直不好看什么科？",
        shortAnswer: "咳嗽持续超过2-3周建议看呼吸内科，必要时进一步检查明确原因。",
    },
    {
        slug: "kesou-ban-liubiti-kan-shenme-ke",
        question: "咳嗽伴流鼻涕看什么科？",
        shortAnswer: "咳嗽伴流鼻涕可能与上呼吸道感染有关，可考虑呼吸内科或耳鼻喉科。",
    },

    // 头痛
    {
        slug: "toutong-kan-shenme-ke",
        question: "头痛看什么科？",
        shortAnswer: "头痛多数建议先看神经内科；如果伴随发热或鼻塞，也可能与感染有关。",
    },
    {
        slug: "piantoutong-gua-shenme-ke",
        question: "偏头痛挂什么科？",
        shortAnswer: "偏头痛通常挂神经内科，医生会根据情况判断是否需要进一步检查。",
    },
    {
        slug: "toutong-gua-shenjingneike-ma",
        question: "头痛挂神经内科吗？",
        shortAnswer: "是的，大多数头痛可以先挂神经内科，尤其是反复发作或长期存在的头痛。",
    },
    {
        slug: "ganmao-toutong-kan-shenme-ke",
        question: "感冒头痛看什么科？",
        shortAnswer: "感冒引起的头痛可以先看全科或内科，通常与上呼吸道感染有关。",
    },
    {
        slug: "turan-julie-toutong-kan-jizhen-ma",
        question: "突然剧烈头痛要看急诊吗？",
        shortAnswer: "如果是突发剧烈头痛或伴随呕吐、意识异常，应尽快前往急诊。",
    },

    // 胃痛 / 腹痛
    {
        slug: "weitong-kan-xiaohua-neike-ma",
        question: "胃痛看消化内科吗？",
        shortAnswer: "胃痛多数情况下可以先看消化内科，尤其是伴随反酸、恶心等症状。",
    },
    {
        slug: "weiteng-gua-shenme-ke",
        question: "胃疼挂什么科？",
        shortAnswer: "胃疼通常建议挂消化内科，如果疼痛剧烈或持续不缓解，应尽快就医。",
    },
    {
        slug: "shangfu-tong-kan-shenme-ke",
        question: "上腹痛看什么科？",
        shortAnswer: "上腹痛一般建议看消化内科，但也可能与胆囊或其他器官有关。",
    },
    {
        slug: "duzitong-gua-shenme-ke",
        question: "肚子痛挂什么科？",
        shortAnswer: "肚子痛可先看消化内科，如果疼痛剧烈或不明原因，应考虑急诊或外科。",
    },
    {
        slug: "futong-kan-xiaohua-haishi-puwaike",
        question: "腹痛看消化内科还是普外科？",
        shortAnswer: "腹痛通常先看消化内科，但如果怀疑急性问题（如阑尾炎），需考虑普外科或急诊。",
    },

    // 心脏 / 胸部
    {
        slug: "xiongmen-kan-shenme-ke",
        question: "胸闷看什么科？",
        shortAnswer: "胸闷可先看心内科或呼吸内科，根据是否伴随心慌或呼吸困难判断。",
    },
    {
        slug: "xiongtong-gua-shenme-ke",
        question: "胸痛挂什么科？",
        shortAnswer: "胸痛建议优先考虑心内科，如疼痛剧烈或突然发生，应尽快就医。",
    },
    {
        slug: "xinhuang-gua-xinneike-ma",
        question: "心慌挂心内科吗？",
        shortAnswer: "心慌通常可以挂心内科，医生会评估是否与心律或情绪相关。",
    },

    // 耳鼻喉 / 发热
    {
        slug: "houlongtong-kan-shenme-ke",
        question: "喉咙痛看什么科？",
        shortAnswer: "喉咙痛一般可以看耳鼻喉科，也可根据情况选择内科或全科。",
    },
    {
        slug: "fashao-kesou-kan-shenme-ke",
        question: "发烧咳嗽看什么科？",
        shortAnswer: "发烧伴咳嗽通常建议看内科或呼吸内科，多与感染有关。",
    },
    // 咳嗽扩展
    {
        slug: "gan-ke-kan-shenme-ke",
        question: "干咳看什么科？",
        shortAnswer: "干咳通常建议看呼吸内科，如果持续时间较长或夜间明显，应进一步检查。",
    },
    {
        slug: "yejian-kesou-kan-shenme-ke",
        question: "夜间咳嗽看什么科？",
        shortAnswer: "夜间咳嗽多见于呼吸系统问题，建议优先看呼吸内科。",
    },
    {
        slug: "kesou-duojiu-yao-qu-yiyuan",
        question: "咳嗽多久需要去医院？",
        shortAnswer: "咳嗽超过2周仍未缓解，或伴随发热、胸痛等，应及时就医。",
    },
    {
        slug: "kesou-you-qichuan-kan-shenme-ke",
        question: "咳嗽伴气喘看什么科？",
        shortAnswer: "咳嗽伴气喘建议看呼吸内科，可能涉及气道问题。",
    },
    {
        slug: "ertong-kesou-kan-shenme-ke",
        question: "儿童咳嗽看什么科？",
        shortAnswer: "儿童咳嗽通常建议看儿科或儿童呼吸专科。",
    },

    // 头痛扩展
    {
        slug: "touyun-toutong-kan-shenme-ke",
        question: "头晕头痛看什么科？",
        shortAnswer: "头晕伴头痛可优先考虑神经内科，也可能与内科问题有关。",
    },
    {
        slug: "changqi-toutong-kan-shenme-ke",
        question: "长期头痛看什么科？",
        shortAnswer: "长期头痛建议看神经内科，排查慢性头痛原因。",
    },
    {
        slug: "shui-bu-hao-toutong-kan-shenme-ke",
        question: "睡不好头痛看什么科？",
        shortAnswer: "睡眠不好引起头痛可看神经内科或心理科。",
    },
    {
        slug: "toutong-eyun-kan-shenme-ke",
        question: "头痛伴恶心看什么科？",
        shortAnswer: "头痛伴恶心建议看神经内科，常见于偏头痛等情况。",
    },
    {
        slug: "toupaihou-toutong-kan-shenme-ke",
        question: "头部撞击后头痛看什么科？",
        shortAnswer: "头部外伤后头痛建议尽快就医，优先考虑急诊或神经外科。",
    },

    // 胃痛扩展
    {
        slug: "fanhou-weitong-kan-shenme-ke",
        question: "饭后胃痛看什么科？",
        shortAnswer: "饭后胃痛多与消化系统有关，建议看消化内科。",
    },
    {
        slug: "kongfu-weitong-kan-shenme-ke",
        question: "空腹胃痛看什么科？",
        shortAnswer: "空腹胃痛常见于胃酸问题，建议看消化内科。",
    },
    {
        slug: "weitong-you-fansuan-kan-shenme-ke",
        question: "胃痛伴反酸看什么科？",
        shortAnswer: "胃痛伴反酸通常建议看消化内科。",
    },
    {
        slug: "weitong-ban-ouxin-kan-shenme-ke",
        question: "胃痛伴恶心看什么科？",
        shortAnswer: "胃痛伴恶心建议看消化内科，可能涉及胃部炎症或功能问题。",
    },
    {
        slug: "changqi-weitong-kan-shenme-ke",
        question: "长期胃痛看什么科？",
        shortAnswer: "长期胃痛建议尽早看消化内科，必要时进行检查。",
    },

    // 腹痛扩展
    {
        slug: "futong-bianxie-kan-shenme-ke",
        question: "腹痛伴腹泻看什么科？",
        shortAnswer: "腹痛伴腹泻多与肠道问题有关，建议看消化内科。",
    },
    {
        slug: "futong-fashao-kan-shenme-ke",
        question: "腹痛伴发烧看什么科？",
        shortAnswer: "腹痛伴发烧可能较严重，应尽快就医或考虑急诊。",
    },
    {
        slug: "futong-yidong-kan-shenme-ke",
        question: "腹痛位置变化看什么科？",
        shortAnswer: "腹痛位置变化建议先看消化内科，如加重应尽快就医。",
    },
    {
        slug: "yexia-futong-kan-shenme-ke",
        question: "夜间腹痛看什么科？",
        shortAnswer: "夜间腹痛建议看消化内科，如疼痛剧烈需警惕急症。",
    },
    {
        slug: "futong-buxiangchi-fan-kan-shenme-ke",
        question: "腹痛不想吃饭看什么科？",
        shortAnswer: "腹痛伴食欲下降建议看消化内科。",
    },

    // 胸部/心脏扩展
    {
        slug: "xiongmen-qichuan-kan-shenme-ke",
        question: "胸闷伴气喘看什么科？",
        shortAnswer: "胸闷伴气喘建议看呼吸内科或心内科。",
    },
    {
        slug: "xiongtong-turan-kan-shenme-ke",
        question: "突然胸痛看什么科？",
        shortAnswer: "突发胸痛应尽快就医，优先考虑急诊或心内科。",
    },
    {
        slug: "xinhuang-toutou-kan-shenme-ke",
        question: "心慌头晕看什么科？",
        shortAnswer: "心慌伴头晕建议看心内科或内科。",
    },
    {
        slug: "xinhuang-shimian-kan-shenme-ke",
        question: "心慌失眠看什么科？",
        shortAnswer: "心慌伴失眠可考虑心内科或心理科。",
    },
    {
        slug: "xinhuang-jiaolv-kan-shenme-ke",
        question: "心慌焦虑看什么科？",
        shortAnswer: "心慌伴焦虑可考虑心内科或心理科。",
    },

    // 耳鼻喉扩展
    {
        slug: "bisai-liubiti-kan-shenme-ke",
        question: "鼻塞流鼻涕看什么科？",
        shortAnswer: "鼻塞流鼻涕通常建议看耳鼻喉科或内科。",
    },
    {
        slug: "houlongtong-fashao-kan-shenme-ke",
        question: "喉咙痛发烧看什么科？",
        shortAnswer: "喉咙痛伴发烧建议看耳鼻喉科或内科。",
    },
    {
        slug: "liubiti-kesou-kan-shenme-ke",
        question: "流鼻涕咳嗽看什么科？",
        shortAnswer: "流鼻涕伴咳嗽可看呼吸内科或耳鼻喉科。",
    },
    {
        slug: "yanzhong-houlongtong-kan-shenme-ke",
        question: "严重喉咙痛看什么科？",
        shortAnswer: "严重喉咙痛建议尽早看耳鼻喉科。",
    },
    {
        slug: "houlongyangan-kan-shenme-ke",
        question: "喉咙异物感看什么科？",
        shortAnswer: "喉咙有异物感可考虑耳鼻喉科检查。",
    },

    // 发烧扩展
    {
        slug: "fashao-duojiu-kan-yisheng",
        question: "发烧多久需要看医生？",
        shortAnswer: "发烧超过2-3天不退，或伴随严重症状，应及时就医。",
    },
    {
        slug: "fashao-toutong-kan-shenme-ke",
        question: "发烧头痛看什么科？",
        shortAnswer: "发烧伴头痛可看内科或神经内科。",
    },
    {
        slug: "fashao-youshuo-huxi-kunnan-kan-shenme-ke",
        question: "发烧伴呼吸困难看什么科？",
        shortAnswer: "发烧伴呼吸困难应尽快就医，优先急诊或呼吸内科。",
    },
    {
        slug: "gaore-buxia-kan-shenme-ke",
        question: "高热不退看什么科？",
        shortAnswer: "高热不退建议尽快就医，优先内科或急诊。",
    },
    {
        slug: "fashao-quanshen-suan-tong-kan-shenme-ke",
        question: "发烧全身酸痛看什么科？",
        shortAnswer: "发烧伴全身酸痛可先看内科，多与感染有关。",
    },
    {
        slug: "kesou-kan-erbihou-ma",
        question: "咳嗽可以看耳鼻喉科吗？",
        shortAnswer: "如果咳嗽同时伴有咽痛、鼻塞、流鼻涕等症状，也可以结合耳鼻喉科判断。",
    },
    {
        slug: "kesou-youxiongmen-kan-shenme-ke",
        question: "咳嗽伴胸闷看什么科？",
        shortAnswer: "咳嗽伴胸闷通常建议先看呼吸内科，如症状明显或加重应及时就医。",
    },
    {
        slug: "kesou-youfashao-kan-shenme-ke",
        question: "咳嗽伴发烧看什么科？",
        shortAnswer: "咳嗽伴发烧一般建议看内科或呼吸内科，多与呼吸道感染有关。",
    },
    {
        slug: "kesou-youhoutong-kan-shenme-ke",
        question: "咳嗽伴喉咙痛看什么科？",
        shortAnswer: "咳嗽伴喉咙痛可考虑呼吸内科或耳鼻喉科，需结合具体症状判断。",
    },
    {
        slug: "fanfu-kesou-kan-shenme-ke",
        question: "反复咳嗽看什么科？",
        shortAnswer: "反复咳嗽建议优先看呼吸内科，尤其是持续时间较长或反复发作时。",
    },

    {
        slug: "toutong-kan-neike-haishi-shenjingke",
        question: "头痛看内科还是神经科？",
        shortAnswer: "多数头痛建议优先看神经内科，必要时再结合内科或其他科室评估。",
    },
    {
        slug: "toutong-youfashao-kan-shenme-ke",
        question: "头痛伴发烧看什么科？",
        shortAnswer: "头痛伴发烧一般先看内科，若症状明显或持续不缓解应尽快就医。",
    },
    {
        slug: "changnian-toutong-kan-shenme-ke",
        question: "常年头痛看什么科？",
        shortAnswer: "长期或反复头痛通常建议看神经内科，进一步明确原因。",
    },
    {
        slug: "toutong-yinggai-kan-jizhen-ma",
        question: "头痛需要看急诊吗？",
        shortAnswer: "如果是突发剧烈头痛，或伴随呕吐、意识异常、肢体无力，应尽快去急诊。",
    },
    {
        slug: "ganmao-houtoutong-kan-shenme-ke",
        question: "感冒后头痛看什么科？",
        shortAnswer: "感冒后头痛通常先看内科或全科，多与感染或鼻窦不适有关。",
    },

    {
        slug: "weitong-xuyao-qu-jizhen-ma",
        question: "胃痛需要去急诊吗？",
        shortAnswer: "如果胃痛剧烈、持续加重，或伴随呕血、黑便、明显虚弱，应及时去急诊。",
    },
    {
        slug: "weitong-yououxin-kan-shenme-ke",
        question: "胃痛伴呕心看什么科？",
        shortAnswer: "胃痛伴恶心通常建议看消化内科，必要时进一步检查胃部或消化系统问题。",
    },
    {
        slug: "weitong-yeban-fazuo-kan-shenme-ke",
        question: "胃痛夜里发作看什么科？",
        shortAnswer: "夜间胃痛一般建议先看消化内科，如果疼痛明显或反复发作应尽快就医。",
    },
    {
        slug: "fanhou-fuzhang-weitong-kan-shenme-ke",
        question: "饭后腹胀胃痛看什么科？",
        shortAnswer: "饭后腹胀伴胃痛通常建议看消化内科，多与胃肠功能或消化问题有关。",
    },
    {
        slug: "laoweibushufu-kan-shenme-ke",
        question: "老胃不舒服看什么科？",
        shortAnswer: "长期胃部不适通常建议看消化内科，方便系统评估原因。",
    },

    {
        slug: "xiongtong-xiankan-nage-ke",
        question: "胸痛先看哪个科？",
        shortAnswer: "胸痛一般优先考虑心内科；如果疼痛剧烈、突然发生，应尽快就医或看急诊。",
    },
    {
        slug: "xiongmen-youxinhuang-kan-shenme-ke",
        question: "胸闷伴心慌看什么科？",
        shortAnswer: "胸闷伴心慌通常建议先看心内科，也可结合内科进一步评估。",
    },
    {
        slug: "xiongmen-youqichuan-kan-shenme-ke",
        question: "胸闷伴气喘看什么科？",
        shortAnswer: "胸闷伴气喘可考虑呼吸内科或心内科，如呼吸困难明显应尽快就医。",
    },
    {
        slug: "xiongtong-shi-kan-xinneike-ma",
        question: "胸痛是看心内科吗？",
        shortAnswer: "很多胸痛可先看心内科，尤其是位于胸前区、伴胸闷或心慌时。",
    },
    {
        slug: "xinhuang-xian-kan-nage-ke",
        question: "心慌先看哪个科？",
        shortAnswer: "心慌通常可以先看心内科，医生会进一步判断是否与心律或情绪有关。",
    },

    {
        slug: "touyun-xian-kan-nage-ke",
        question: "头晕先看哪个科？",
        shortAnswer: "头晕通常建议先看神经内科，也可根据伴随症状结合内科或耳鼻喉科判断。",
    },
    {
        slug: "touyun-banyunexin-kan-shenme-ke",
        question: "头晕伴恶心看什么科？",
        shortAnswer: "头晕伴恶心一般可先看神经内科，必要时再结合其他科室评估。",
    },
    {
        slug: "touyun-zhandebuwen-kan-shenme-ke",
        question: "头晕站都站不稳看什么科？",
        shortAnswer: "头晕严重到站立不稳时，建议尽快就医，优先考虑神经内科或急诊。",
    },
    {
        slug: "touyun-banerduoming-kan-shenme-ke",
        question: "头晕伴耳鸣看什么科？",
        shortAnswer: "头晕伴耳鸣可考虑神经内科或耳鼻喉科，需结合具体情况判断。",
    },
    {
        slug: "changqi-touyun-kan-shenme-ke",
        question: "长期头晕看什么科？",
        shortAnswer: "长期头晕建议先看神经内科，必要时进一步检查原因。",
    },

    {
        slug: "fashao-xian-kan-nage-ke",
        question: "发烧先看哪个科？",
        shortAnswer: "发烧一般可以先看内科或全科，如果伴随咳嗽等呼吸道症状，也可考虑呼吸内科。",
    },
    {
        slug: "gaore-buixia-qu-kan-shenme-ke",
        question: "高热不退看什么科？",
        shortAnswer: "高热不退建议尽快就医，通常优先看内科，症状严重时考虑急诊。",
    },
    {
        slug: "fashao-banquanshensuantong-kan-shenme-ke",
        question: "发烧伴全身酸痛看什么科？",
        shortAnswer: "发烧伴全身酸痛一般先看内科，多与感染有关。",
    },
    {
        slug: "fashao-ban-huxikunnan-kan-shenme-ke",
        question: "发烧伴呼吸困难看什么科？",
        shortAnswer: "发烧伴呼吸困难应尽快就医，优先考虑急诊或呼吸内科。",
    },
    {
        slug: "fashao-ban-houtong-kan-shenme-ke",
        question: "发烧伴喉咙痛看什么科？",
        shortAnswer: "发烧伴喉咙痛可先看内科或耳鼻喉科，多与感染有关。",
    }
];