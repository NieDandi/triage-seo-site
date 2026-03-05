export type AgeGroup = "0-3" | "4-14" | "15-59" | "60+" | "pregnant";
export type Sex = "male" | "female";

export type BodyArea =
  | "head-neuro"
  | "eye"
  | "ent"
  | "oral"
  | "chest-resp"
  | "heart"
  | "abdomen"
  | "urinary"
  | "repro"
  | "skin"
  | "musculoskeletal"
  | "mental"
  | "endocrine"
  | "checkup"
  | "uncertain";

export type Result = {
  title: string;
  recommended: string[];
  alternatives?: string[];
  redFlags: string[];
  prep: string[];
  note?: string;

  primaryLink?: { label: string; href: string };
  secondaryLinks?: { label: string; href: string }[];
};

export const emergencyFlags: { id: string; label: string }[] = [
  { id: "chestPain", label: "突发剧烈胸痛/胸闷，持续 >10 分钟或伴出汗、憋气" },
  { id: "stroke", label: "一侧肢体无力/麻木、口角歪斜、说话不清" },
  { id: "sob", label: "明显呼吸困难/喘不上气" },
  { id: "seizure", label: "意识不清/抽搐" },
  { id: "bleeding", label: "大量出血/呕血/黑便" },
  { id: "severeAbd", label: "剧烈腹痛站不直/反复呕吐止不住" },
  { id: "anaphylaxis", label: "严重过敏：面唇舌肿胀、喉头紧、全身风团伴呼吸不适" },
  { id: "pregBleed", label: "妊娠期腹痛或阴道出血" },
];

export const ageOptions: { id: AgeGroup; label: string }[] = [
  { id: "0-3", label: "0–3 岁" },
  { id: "4-14", label: "4–14 岁" },
  { id: "15-59", label: "15–59 岁" },
  { id: "60+", label: "60 岁以上" },
  { id: "pregnant", label: "孕期/疑似怀孕" },
];

export const sexOptions: { id: Sex; label: string }[] = [
  { id: "male", label: "男" },
  { id: "female", label: "女" },
];

export const bodyAreas: { id: BodyArea; label: string; desc?: string }[] = [
  { id: "head-neuro", label: "头部/神经", desc: "头痛、头晕、麻木、抽搐等" },
  { id: "eye", label: "眼睛", desc: "眼红、眼痛、视力模糊" },
  { id: "ent", label: "耳鼻喉", desc: "咽痛、鼻塞、耳痛、耳鸣" },
  { id: "oral", label: "口腔牙齿", desc: "牙痛、口腔溃疡" },
  { id: "chest-resp", label: "胸部/呼吸", desc: "咳嗽、咳痰、发热、喘" },
  { id: "heart", label: "心脏血管", desc: "心慌、胸痛、血压问题" },
  { id: "abdomen", label: "腹部/消化", desc: "腹痛、腹泻、反酸、呕吐" },
  { id: "urinary", label: "泌尿", desc: "尿频尿痛、血尿、腰痛" },
  { id: "repro", label: "生殖/妇科男科", desc: "月经、白带、睾丸痛等" },
  { id: "skin", label: "皮肤", desc: "皮疹、瘙痒、痘痘、脱发" },
  { id: "musculoskeletal", label: "骨关节/运动损伤", desc: "扭伤、关节痛、腰颈痛" },
  { id: "mental", label: "情绪/睡眠", desc: "焦虑、抑郁、失眠、惊恐" },
  { id: "endocrine", label: "内分泌代谢", desc: "血糖、体重、甲状腺" },
  { id: "checkup", label: "体检异常", desc: "血糖/血脂/肝功等" },
  { id: "uncertain", label: "不确定/多个部位", desc: "说不清或多个问题" },
];

export const symptomsByArea: Record<BodyArea, { id: string; label: string }[]> = {
  "head-neuro": [
    { id: "headache", label: "头痛" },
    { id: "dizziness", label: "头晕/眩晕" },
    { id: "numb", label: "手脚麻木" },
    { id: "tremor", label: "手抖" },
    { id: "memory", label: "记忆/注意力下降" },
  ],
  eye: [
    { id: "redEye", label: "眼红" },
    { id: "eyePain", label: "眼痛" },
    { id: "blur", label: "视力模糊" },
    { id: "foreign", label: "异物感/流泪" },
  ],
  ent: [
    { id: "soreThroat", label: "咽痛" },
    { id: "nasal", label: "鼻塞/流涕" },
    { id: "earPain", label: "耳痛" },
    { id: "tinnitus", label: "耳鸣/听力下降" },
    { id: "hoarse", label: "声音嘶哑" },
  ],
  oral: [
    { id: "toothache", label: "牙痛" },
    { id: "ulcer", label: "口腔溃疡" },
    { id: "gum", label: "牙龈肿痛/出血" },
    { id: "wisdom", label: "智齿肿痛" },
  ],
  "chest-resp": [
    { id: "fever", label: "发热" },
    { id: "cough", label: "咳嗽/咳痰" },
    { id: "sob", label: "气短/喘" },
    { id: "chestTight", label: "胸闷" },
  ],
  heart: [
    { id: "palp", label: "心慌/心悸" },
    { id: "chestPain", label: "胸痛" },
    { id: "bp", label: "血压高/波动大" },
    { id: "edema", label: "水肿" },
  ],
  abdomen: [
    { id: "abdPain", label: "腹痛" },
    { id: "diarrhea", label: "腹泻" },
    { id: "constip", label: "便秘" },
    { id: "vomit", label: "恶心呕吐" },
    { id: "reflux", label: "反酸烧心" },
    { id: "blood", label: "便血/黑便" },
  ],
  urinary: [
    { id: "freq", label: "尿频" },
    { id: "pain", label: "尿痛/尿灼热" },
    { id: "blood", label: "血尿" },
    { id: "flank", label: "腰痛/肾区痛" },
  ],
  repro: [
    { id: "menstrual", label: "月经不调/痛经" },
    { id: "bleed", label: "异常出血" },
    { id: "leuk", label: "白带异常" },
    { id: "testis", label: "睾丸痛/阴囊不适" },
    { id: "prostate", label: "前列腺不适/排尿异常" },
  ],
  skin: [
    { id: "rash", label: "皮疹" },
    { id: "itch", label: "瘙痒" },
    { id: "acne", label: "痘痘/痤疮" },
    { id: "hair", label: "脱发" },
    { id: "urticaria", label: "风团/荨麻疹" },
  ],
  musculoskeletal: [
    { id: "sprain", label: "扭伤/拉伤" },
    { id: "joint", label: "关节痛" },
    { id: "lowback", label: "腰痛" },
    { id: "neck", label: "颈肩痛" },
    { id: "knee", label: "膝痛" },
  ],
  mental: [
    { id: "insomnia", label: "失眠" },
    { id: "anxiety", label: "焦虑" },
    { id: "lowMood", label: "情绪低落" },
    { id: "panic", label: "惊恐发作" },
  ],
  endocrine: [
    { id: "sugar", label: "血糖异常/口渴多尿" },
    { id: "weight", label: "体重异常变化" },
    { id: "thyroid", label: "甲状腺问题" },
    { id: "heat", label: "怕热心慌手抖" },
  ],
  checkup: [
    { id: "glucose", label: "血糖高" },
    { id: "lipids", label: "血脂高" },
    { id: "liver", label: "肝功能异常" },
    { id: "thyroid", label: "甲状腺异常" },
  ],
  uncertain: [
    { id: "uncertain", label: "说不清/多个部位" },
    { id: "fatigue", label: "乏力没精神" },
    { id: "pain", label: "全身疼/不明确" },
  ],
};

function linksFor(area: BodyArea): { primaryLink: Result["primaryLink"]; secondaryLinks: Result["secondaryLinks"] } {
  // 主链接：跳到最典型的 symptom 页面（你已有很多 slug）
  const primaryByArea: Record<BodyArea, { label: string; href: string }> = {
    "chest-resp": { label: "查看：发烧/咳嗽等症状页", href: "/symptom/fever" },
    heart: { label: "查看：胸痛/心慌症状页", href: "/symptom/chest-pain" },
    abdomen: { label: "查看：腹痛症状页", href: "/symptom/abdominal-pain" },
    urinary: { label: "查看：尿频/尿痛症状页", href: "/symptom/urinary-frequency" },
    repro: { label: "查看：月经不调症状页", href: "/symptom/menstrual-irregularity" },
    skin: { label: "查看：皮疹症状页", href: "/symptom/rash" },
    "head-neuro": { label: "查看：头痛症状页", href: "/symptom/headache" },
    eye: { label: "查看：视力模糊症状页", href: "/symptom/blurred-vision" },
    ent: { label: "查看：咽痛症状页", href: "/symptom/sore-throat" },
    oral: { label: "查看：牙痛症状页", href: "/symptom/toothache" },
    musculoskeletal: { label: "查看：扭伤症状页", href: "/symptom/sprain" },
    mental: { label: "查看：失眠症状页", href: "/symptom/insomnia" },
    endocrine: { label: "查看：血糖高症状页", href: "/symptom/high-blood-sugar" },
    checkup: { label: "查看：体检异常入口", href: "/symptom/high-blood-sugar" },
    uncertain: { label: "查看：症状目录", href: "/symptoms" },
  };

  // 次链接：跳到目录页（以后我们会加 tag 筛选）
  const secondaryLinks: Result["secondaryLinks"] = [
    { label: "查看全部症状目录", href: "/symptoms" },
    { label: "回到首页", href: "/" },
  ];

  return { primaryLink: primaryByArea[area], secondaryLinks };
}

export function resolveResult(input: {
  emergencySelected: boolean;
  age: AgeGroup;
  sex: Sex;
  area: BodyArea;
  symptomId: string;
}): Result {
  const basePrep = ["记录症状开始时间与变化", "整理既往病史/过敏史", "准备近期用药清单与检查单"];

  if (input.emergencySelected) {
    return {
      title: "建议立即急诊",
      recommended: ["急诊科"],
      alternatives: [],
      redFlags: ["出现急症信号不建议等待，优先急诊评估"],
      prep: ["如有条件，携带既往病史/用药信息；途中注意安全"],
      note: "如情况危急请拨打 120。",
      primaryLink: { label: "查看：急诊筛查提示", href: "/triage" },
      secondaryLinks: [{ label: "回到首页", href: "/" }],
    };
  }

  const isChild = input.age === "0-3" || input.age === "4-14";
  const isPreg = input.age === "pregnant";
  const { primaryLink, secondaryLinks } = linksFor(input.area);

  switch (input.area) {
    case "chest-resp":
      return {
        title: "呼吸道相关问题导诊",
        recommended: [isChild ? "儿科" : "呼吸内科"],
        alternatives: ["感染科", "全科/综合内科"],
        redFlags: ["呼吸困难明显", "咳血", "高热持续不退或精神状态差"],
        prep: [...basePrep, "是否咳痰及颜色", "是否接触感染人群/过敏史"],
        primaryLink,
        secondaryLinks,
      };
    case "heart":
      return {
        title: "心血管相关问题导诊",
        recommended: ["心内科"],
        alternatives: ["全科/综合内科"],
        redFlags: ["胸痛持续>10分钟或伴出汗憋气", "晕厥", "呼吸困难明显"],
        prep: [...basePrep, "记录发作诱因（活动/休息）", "如有血压/心率记录请带上"],
        primaryLink,
        secondaryLinks,
      };
    case "abdomen":
      return {
        title: "消化系统相关问题导诊",
        recommended: [isChild ? "儿科" : "消化内科"],
        alternatives: ["普通外科"],
        redFlags: ["持续剧烈腹痛或反复呕吐", "呕血/黑便/明显便血", "高热或明显脱水"],
        prep: [...basePrep, "腹痛部位/性质", "是否腹泻/便血/黑便", "近期饮食与旅行史"],
        primaryLink,
        secondaryLinks,
      };
    case "urinary":
      return {
        title: "泌尿系统相关问题导诊",
        recommended: ["泌尿外科"],
        alternatives: ["肾内科"],
        redFlags: ["肉眼血尿", "腰痛伴发热寒战", "排尿困难/尿潴留"],
        prep: [...basePrep, "是否尿频尿急尿痛", "是否腰痛/发热", "饮水与尿量变化"],
        primaryLink,
        secondaryLinks,
      };
    case "repro":
      if (isPreg) {
        return {
          title: "孕期相关问题导诊",
          recommended: ["产科"],
          alternatives: ["妇科"],
          redFlags: ["腹痛或阴道出血", "明显头晕乏力", "发热伴下腹剧痛"],
          prep: [...basePrep, "末次月经/孕周信息", "出血量与腹痛程度"],
          primaryLink: { label: "查看：异常阴道出血症状页", href: "/symptom/abnormal-vaginal-bleeding" },
          secondaryLinks,
        };
      }
      if (input.sex === "female") {
        return {
          title: "女性生殖系统相关问题导诊",
          recommended: ["妇科"],
          alternatives: ["内分泌科（如月经紊乱明显）"],
          redFlags: ["大量出血或晕厥", "发热伴下腹剧痛", "妊娠可能+出血腹痛"],
          prep: [...basePrep, "末次月经时间", "是否备孕/避孕", "白带变化与腹痛情况"],
          primaryLink: { label: "查看：月经不调症状页", href: "/symptom/menstrual-irregularity" },
          secondaryLinks,
        };
      }
      return {
        title: "男性生殖相关问题导诊",
        recommended: ["泌尿外科"],
        alternatives: ["男科（如医院单设）"],
        redFlags: ["突发睾丸剧痛", "发热寒战", "尿潴留"],
        prep: [...basePrep, "症状开始时间", "是否伴发热/排尿不适"],
        primaryLink: { label: "查看：睾丸痛症状页", href: "/symptom/testicular-pain" },
        secondaryLinks,
      };
    case "skin":
      return {
        title: "皮肤相关问题导诊",
        recommended: ["皮肤科"],
        alternatives: ["过敏门诊（如医院设）"],
        redFlags: ["面唇舌肿胀/喉头紧", "呼吸困难", "高热伴皮疹迅速加重"],
        prep: [...basePrep, "近期新用药/食物/化妆品", "皮疹分布与出现时间"],
        primaryLink,
        secondaryLinks,
      };
    case "mental":
      return {
        title: "情绪/睡眠相关问题导诊",
        recommended: ["睡眠门诊", "精神科/心理科"],
        alternatives: ["全科/综合内科"],
        redFlags: ["出现自伤/自杀念头", "严重失眠影响基本生活", "极度恐慌伴明显胸闷气促"],
        prep: [...basePrep, "记录睡眠情况与诱因", "是否影响工作学习与饮食"],
        primaryLink,
        secondaryLinks,
      };
    case "endocrine":
      return {
        title: "内分泌代谢相关问题导诊",
        recommended: ["内分泌科"],
        alternatives: ["全科/综合内科"],
        redFlags: ["明显乏力嗜睡", "呕吐腹痛伴口渴加重", "意识异常"],
        prep: [...basePrep, "如有血糖/甲功/体检报告请带上", "记录体重变化与症状时间线"],
        primaryLink,
        secondaryLinks,
      };
    case "eye":
      return {
        title: "眼部相关问题导诊",
        recommended: ["眼科"],
        alternatives: [],
        redFlags: ["眼痛明显伴视力下降", "眼外伤", "突发视力明显下降"],
        prep: [...basePrep, "是否戴隐形眼镜", "是否伴分泌物/畏光"],
        primaryLink,
        secondaryLinks,
      };
    case "ent":
      return {
        title: "耳鼻喉相关问题导诊",
        recommended: ["耳鼻喉科"],
        alternatives: [isChild ? "儿科" : "全科/综合内科"],
        redFlags: ["高热伴剧痛或呼吸受影响", "突发单侧听力下降", "面部剧痛伴高热"],
        prep: [...basePrep, "是否鼻塞流涕/咽痛/耳痛", "是否眩晕/听力变化"],
        primaryLink,
        secondaryLinks,
      };
    case "oral":
      return {
        title: "口腔牙齿相关问题导诊",
        recommended: ["口腔科"],
        alternatives: [],
        redFlags: ["面部明显肿胀发热", "张口困难", "影响吞咽/呼吸"],
        prep: [...basePrep, "疼痛位置与冷热刺激反应", "是否近期补牙/拔牙"],
        primaryLink,
        secondaryLinks,
      };
    case "musculoskeletal":
      return {
        title: "骨关节/运动损伤相关问题导诊",
        recommended: ["骨科", "运动医学科（如医院有）"],
        alternatives: ["康复科"],
        redFlags: ["外伤后明显畸形/无法负重", "红肿热痛伴发热", "麻木无力或大小便异常"],
        prep: [...basePrep, "受伤机制与时间", "是否能负重行走", "疼痛是否放射到肢体"],
        primaryLink,
        secondaryLinks,
      };
    case "checkup":
      return {
        title: "体检异常导诊",
        recommended: ["全科/综合内科"],
        alternatives: ["内分泌科", "心内科", "消化内科（按异常项）"],
        redFlags: ["伴明显胸痛/呼吸困难", "意识异常", "黑便/呕血"],
        prep: ["带上体检报告原件或清晰照片", "记录既往史与家族史", "整理近期用药/保健品"],
        note: "后续可升级为“体检指标关键词识别”自动分流。",
        primaryLink,
        secondaryLinks,
      };
    case "head-neuro":
      return {
        title: "头部/神经相关问题导诊",
        recommended: ["神经内科"],
        alternatives: ["耳鼻喉科（如眩晕为主）", "全科/综合内科"],
        redFlags: ["突发说话不清/一侧肢体无力", "意识异常或抽搐", "突发最剧烈头痛"],
        prep: [...basePrep, "描述头晕/头痛类型与诱因", "如有血压血糖记录请带上"],
        primaryLink,
        secondaryLinks,
      };
    case "uncertain":
    default:
      return {
        title: "不确定/多部位导诊",
        recommended: ["全科/综合内科"],
        alternatives: ["急诊科（如症状较重）"],
        redFlags: ["症状进行性加重", "出现胸痛/呼吸困难/意识异常", "持续高热不退"],
        prep: [...basePrep, "尽量整理主要困扰的 1–2 个症状", "记录症状时间线与触发因素"],
        primaryLink,
        secondaryLinks,
      };
  }
}