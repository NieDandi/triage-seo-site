export type FAQItem = {
  slug: string;
  question: string;
  shortAnswer: string;
  department: string;
  departmentSlug: string;
  summary: string[];
  dangerSigns: string[];
  visitPrep: string[];
  relatedGuideSlugs: string[];
  relatedSymptomSlugs: string[];
  relatedQuestions: string[];
  tags: string[];
};

export const faqs: FAQItem[] = [
  {
    slug: "kesou-xian-kan-nage-ke",
    question: "咳嗽先看哪个科？",
    shortAnswer:
      "咳嗽通常优先考虑呼吸内科；如果伴随发热、咽痛、流鼻涕，也可能先看全科、内科或耳鼻喉科，需结合症状持续时间和伴随表现判断。",
    department: "呼吸内科",
    departmentSlug: "respiratory",
    summary: [
      "咳嗽最常见涉及呼吸系统，因此多数情况下先挂呼吸内科。",
      "如果同时有鼻塞、流涕、咽痛，可能与上呼吸道感染或鼻后滴流有关，也可结合耳鼻喉科评估。",
      "如果咳嗽持续数周不缓解，或反复发作，应尽快就医进一步判断原因。",
    ],
    dangerSigns: [
      "呼吸困难或胸闷明显加重",
      "咯血",
      "持续高热不退",
      "胸痛明显",
      "精神差、嗜睡或不能正常进食饮水",
    ],
    visitPrep: [
      "记录咳嗽持续时间：几天、几周还是更久",
      "留意是否有痰、痰色、是否夜间加重",
      "记录是否伴随发热、气喘、鼻塞、咽痛",
      "准备既往呼吸系统病史和正在使用的药物信息",
    ],
    relatedGuideSlugs: ["kesou-gua-shenme-ke"],
    relatedSymptomSlugs: ["cough", "runny-nose"],
    relatedQuestions: ["kesou-gua-huxineike-ma", "you-tan-kesou-kan-shenme-ke"],
    tags: ["呼吸", "咳嗽", "挂号"],
  },
  {
    slug: "toutong-kan-shenme-ke",
    question: "头痛看什么科？",
    shortAnswer:
      "头痛常见先挂神经内科；如果伴随发热、鼻塞、视力异常、外伤或血压明显异常，还可能需要结合全科、耳鼻喉科、眼科或急诊判断。",
    department: "神经内科",
    departmentSlug: "neurology",
    summary: [
      "头痛涉及范围较广，但多数持续性或反复性头痛可先看神经内科。",
      "如果是感冒后头痛、鼻窦不适明显，可结合耳鼻喉科。",
      "如果突然出现剧烈头痛，或伴随呕吐、意识改变、肢体无力，应尽快急诊就医。",
    ],
    dangerSigns: [
      "突发剧烈头痛",
      "伴随肢体无力、说话不清",
      "意识模糊或抽搐",
      "头部外伤后头痛",
      "持续呕吐或高热",
    ],
    visitPrep: [
      "记录头痛部位、持续时间和发作频率",
      "记录是否伴随恶心、畏光、视物异常",
      "记录是否熬夜、压力大、近期感冒或外伤",
      "准备既往偏头痛、高血压等病史",
    ],
    relatedGuideSlugs: ["toutong-gua-shenme-ke"],
    relatedSymptomSlugs: ["headache"],
    relatedQuestions: ["pian-toutong-gua-shenjingneike-ma", "turan-julie-toutong-kan-jizhen-ma"],
    tags: ["神经", "头痛", "挂号"],
  },
  {
    slug: "weitong-kan-xiaohua-neike-ma",
    question: "胃痛看消化内科吗？",
    shortAnswer:
      "胃痛多数情况下可以先看消化内科；如果疼痛剧烈、持续加重，或伴随黑便、呕血、发热等危险信号，应尽快就医或考虑急诊。",
    department: "消化内科",
    departmentSlug: "gastroenterology",
    summary: [
      "上腹部不适、反酸、恶心、进食后不适等情况，通常先看消化内科。",
      "如果腹痛位置不典型，也可能需要结合普外科、急诊进一步分流。",
      "胃痛反复发作或持续不缓解，建议规范就医评估。",
    ],
    dangerSigns: [
      "黑便或呕血",
      "剧烈腹痛持续不缓解",
      "伴随高热",
      "反复呕吐无法进食",
      "面色苍白、出冷汗或明显虚弱",
    ],
    visitPrep: [
      "记录疼痛位置：上腹、中腹、下腹",
      "记录与进食关系：饭前、饭后、夜间是否明显",
      "记录是否伴随反酸、恶心、腹泻、便血",
      "准备既往胃病、药物史、检查结果",
    ],
    relatedGuideSlugs: ["weitong-gua-shenme-ke"],
    relatedSymptomSlugs: ["stomachache"],
    relatedQuestions: ["fanfan-weitong-gua-shenme-ke", "shangfu-teng-kan-xiaohua-neike-haishi-puwaike"],
    tags: ["消化", "胃痛", "挂号"],
  },
];