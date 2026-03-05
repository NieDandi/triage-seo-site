export type Department = {
  slug: string;
  name: string;
  intro: string;
  redFlags: string[];
  tags: string[]; // 用于从 symptoms.ts 里抓相关页面
  commonSymptoms: { label: string; href: string }[];
};

export const departments: Department[] = [
  {
    slug: "respiratory",
    name: "呼吸内科",
    intro: "主要处理咳嗽、发热、喘、呼吸困难等呼吸系统相关问题（仅导诊分流）。",
    redFlags: ["呼吸困难明显", "咳血", "高热持续不退或精神状态差"],
    tags: ["呼吸", "感染", "咽喉"],
    commonSymptoms: [
      { label: "发烧挂什么科？", href: "/symptom/fever" },
      { label: "咳嗽挂什么科？", href: "/symptom/cough" },
      { label: "呼吸困难挂什么科？", href: "/symptom/shortness-of-breath" },
    ],
  },
  {
    slug: "cardiology",
    name: "心内科",
    intro: "主要处理胸痛、胸闷、心慌、血压异常、水肿等心血管相关问题（仅导诊分流）。",
    redFlags: ["胸痛持续>10分钟或伴出汗/憋气", "晕厥", "明显呼吸困难"],
    tags: ["心血管"],
    commonSymptoms: [
      { label: "胸痛挂什么科？", href: "/symptom/chest-pain" },
      { label: "心慌挂什么科？", href: "/symptom/palpitations" },
      { label: "血压高挂什么科？", href: "/symptom/high-blood-pressure" },
    ],
  },
  {
    slug: "gastroenterology",
    name: "消化内科",
    intro: "主要处理腹痛、腹泻、便秘、反酸烧心、恶心呕吐等消化系统相关问题（仅导诊分流）。",
    redFlags: ["持续剧烈腹痛或反复呕吐", "呕血/黑便/便血明显", "高热或明显脱水"],
    tags: ["消化"],
    commonSymptoms: [
      { label: "肚子疼挂什么科？", href: "/symptom/abdominal-pain" },
      { label: "腹泻挂什么科？", href: "/symptom/diarrhea" },
      { label: "反酸烧心挂什么科？", href: "/symptom/acid-reflux" },
    ],
  },
  {
    slug: "neurology",
    name: "神经内科",
    intro: "主要处理头痛、眩晕、麻木无力、抽搐等神经系统相关问题（仅导诊分流）。",
    redFlags: ["突发说话不清/一侧肢体无力", "意识异常或抽搐", "突发最剧烈头痛"],
    tags: ["神经"],
    commonSymptoms: [
      { label: "头痛挂什么科？", href: "/symptom/headache" },
      { label: "头晕挂什么科？", href: "/symptom/dizziness" },
      { label: "抽搐挂什么科？", href: "/symptom/seizure" },
    ],
  },
  {
    slug: "ent",
    name: "耳鼻喉科",
    intro: "主要处理咽痛、鼻塞流涕、耳痛耳鸣等耳鼻喉问题（仅导诊分流）。",
    redFlags: ["吞咽困难明显或呼吸受影响", "突发单侧听力下降", "面部剧痛伴高热"],
    tags: ["耳鼻喉", "鼻炎", "咽喉"],
    commonSymptoms: [
      { label: "咽痛挂什么科？", href: "/symptom/sore-throat" },
      { label: "鼻塞挂什么科？", href: "/symptom/nasal-congestion" },
      { label: "耳鸣挂什么科？", href: "/symptom/tinnitus" },
    ],
  },
  {
    slug: "dermatology",
    name: "皮肤科",
    intro: "主要处理皮疹、瘙痒、痤疮、脱发等皮肤相关问题（仅导诊分流）。",
    redFlags: ["面唇舌肿胀/喉头紧", "呼吸困难", "高热伴皮疹迅速加重"],
    tags: ["皮肤", "过敏"],
    commonSymptoms: [
      { label: "皮疹挂什么科？", href: "/symptom/rash" },
      { label: "瘙痒挂什么科？", href: "/symptom/itching" },
      { label: "脱发挂什么科？", href: "/symptom/hair-loss" },
    ],
  },
  {
    slug: "urology",
    name: "泌尿外科",
    intro: "主要处理尿频尿痛、血尿、肾区痛、前列腺不适等泌尿问题（仅导诊分流）。",
    redFlags: ["肉眼血尿或腰痛发热", "尿潴留（排不出尿）", "寒战高热"],
    tags: ["泌尿"],
    commonSymptoms: [
      { label: "尿频挂什么科？", href: "/symptom/urinary-frequency" },
      { label: "尿痛挂什么科？", href: "/symptom/urinary-pain" },
      { label: "血尿挂什么科？", href: "/symptom/hematuria" },
    ],
  },
  {
    slug: "endocrinology",
    name: "内分泌科",
    intro: "主要处理血糖异常、体重变化、甲状腺问题等代谢内分泌相关问题（仅导诊分流）。",
    redFlags: ["明显乏力嗜睡", "呕吐腹痛伴口渴加重", "意识异常"],
    tags: ["内分泌", "体检"],
    commonSymptoms: [
      { label: "血糖高挂什么科？", href: "/symptom/high-blood-sugar" },
      { label: "体重异常变化挂什么科？", href: "/symptom/weight-change" },
      { label: "甲状腺结节挂什么科？", href: "/symptom/thyroid-nodule" },
    ],
  },
  {
    slug: "orthopedics",
    name: "骨科/运动医学",
    intro: "主要处理扭伤、关节痛、腰颈痛、膝痛等骨关节与运动损伤（仅导诊分流）。",
    redFlags: ["外伤后畸形/无法负重", "红肿热痛伴发热", "麻木无力或大小便异常"],
    tags: ["骨科", "运动"],
    commonSymptoms: [
      { label: "扭伤挂什么科？", href: "/symptom/sprain" },
      { label: "膝盖痛挂什么科？", href: "/symptom/knee-pain" },
      { label: "背痛挂什么科？", href: "/symptom/back-pain" },
    ],
  },
  {
    slug: "psych",
    name: "精神心理/睡眠门诊",
    intro: "主要处理失眠、焦虑、情绪低落等身心相关问题（仅导诊分流）。",
    redFlags: ["出现自伤/自杀念头", "严重失眠影响基本生活", "极度恐慌伴明显胸闷气促"],
    tags: ["心理", "睡眠", "情绪"],
    commonSymptoms: [
      { label: "失眠挂什么科？", href: "/symptom/insomnia" },
      { label: "焦虑挂什么科？", href: "/symptom/anxiety" },
      { label: "情绪低落挂什么科？", href: "/symptom/depression" },
    ],
  },
];