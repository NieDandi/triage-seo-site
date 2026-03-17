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
];