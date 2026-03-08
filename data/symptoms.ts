export type SymptomItem = {
  slug: string;
  title: string;
  summary: string;
  recommended: string[];
  alternatives: string[];
  redFlags: string[];
  prep: string[];
  faqs: { q: string; a: string }[];
  tags: string[];
};

const RF = (...x: string[]) => x;
const PREP = (...x: string[]) => x;

function makeFaq(symptom: string): { q: string; a: string }[] {
  return [
    {
      q: `${symptom}挂什么科？`,
      a: `通常建议先挂相关内科或对应专科，根据医生评估再进一步检查。`,
    },
    {
      q: `${symptom}什么时候需要去医院？`,
      a: `如果症状持续时间较长、明显加重或伴随危险信号，应及时就医。`,
    },
  ];
}

export const symptoms: SymptomItem[] = [
  {
    slug: "cough",
    title: "咳嗽挂什么科？",
    summary: "咳嗽常见于感冒、支气管炎、肺炎等呼吸系统问题。",
    recommended: ["呼吸内科"],
    alternatives: ["全科医学科"],
    redFlags: RF("持续高烧", "咳血", "呼吸困难"),
    prep: PREP("记录咳嗽持续时间", "是否有发烧"),
    faqs: makeFaq("咳嗽"),
    tags: ["呼吸"],
  },

  {
    slug: "sore-throat",
    title: "喉咙痛挂什么科？",
    summary: "喉咙痛常见于咽炎、扁桃体炎或上呼吸道感染。",
    recommended: ["耳鼻喉科"],
    alternatives: ["呼吸内科"],
    redFlags: RF("吞咽困难", "高烧不退"),
    prep: PREP("记录疼痛持续时间"),
    faqs: makeFaq("喉咙痛"),
    tags: ["耳鼻喉"],
  },

  {
    slug: "runny-nose",
    title: "流鼻涕挂什么科？",
    summary: "流鼻涕常见于感冒、鼻炎或过敏。",
    recommended: ["耳鼻喉科"],
    alternatives: ["全科医学科"],
    redFlags: RF("持续高烧"),
    prep: PREP("记录症状持续时间"),
    faqs: makeFaq("流鼻涕"),
    tags: ["耳鼻喉"],
  },

  {
    slug: "nasal-congestion",
    title: "鼻塞挂什么科？",
    summary: "鼻塞常见于鼻炎、鼻窦炎或感冒。",
    recommended: ["耳鼻喉科"],
    alternatives: ["呼吸内科"],
    redFlags: RF("严重头痛", "高烧"),
    prep: PREP("记录鼻塞持续时间"),
    faqs: makeFaq("鼻塞"),
    tags: ["耳鼻喉"],
  },

  {
    slug: "headache",
    title: "头痛挂什么科？",
    summary: "头痛可能与偏头痛、紧张性头痛或感染有关。",
    recommended: ["神经内科"],
    alternatives: ["全科医学科"],
    redFlags: RF("突发剧烈头痛", "意识障碍"),
    prep: PREP("记录头痛持续时间"),
    faqs: makeFaq("头痛"),
    tags: ["神经"],
  },

  {
    slug: "dizziness",
    title: "头晕挂什么科？",
    summary: "头晕可能与低血压、贫血或耳石症有关。",
    recommended: ["神经内科"],
    alternatives: ["耳鼻喉科"],
    redFlags: RF("意识丧失", "严重头晕"),
    prep: PREP("记录发作时间"),
    faqs: makeFaq("头晕"),
    tags: ["神经"],
  },

  {
    slug: "chest-pain",
    title: "胸痛挂什么科？",
    summary: "胸痛可能与心脏、肺部或肌肉有关。",
    recommended: ["心内科"],
    alternatives: ["呼吸内科"],
    redFlags: RF("持续胸痛", "呼吸困难"),
    prep: PREP("记录疼痛时间"),
    faqs: makeFaq("胸痛"),
    tags: ["心脏"],
  },

  {
    slug: "shortness-of-breath",
    title: "呼吸困难挂什么科？",
    summary: "呼吸困难可能与肺部或心脏问题有关。",
    recommended: ["呼吸内科"],
    alternatives: ["心内科"],
    redFlags: RF("突然呼吸困难"),
    prep: PREP("记录发作时间"),
    faqs: makeFaq("呼吸困难"),
    tags: ["呼吸"],
  },

  {
    slug: "abdominal-pain",
    title: "腹痛挂什么科？",
    summary: "腹痛常见于胃炎、阑尾炎或肠胃问题。",
    recommended: ["消化内科"],
    alternatives: ["普通外科"],
    redFlags: RF("剧烈腹痛", "持续呕吐"),
    prep: PREP("记录疼痛位置"),
    faqs: makeFaq("腹痛"),
    tags: ["消化"],
  },

  {
    slug: "diarrhea",
    title: "腹泻挂什么科？",
    summary: "腹泻常见于感染或饮食问题。",
    recommended: ["消化内科"],
    alternatives: ["感染科"],
    redFlags: RF("严重脱水"),
    prep: PREP("记录排便次数"),
    faqs: makeFaq("腹泻"),
    tags: ["消化"],
  },

  {
    slug: "constipation",
    title: "便秘挂什么科？",
    summary: "便秘可能与饮食或肠道功能有关。",
    recommended: ["消化内科"],
    alternatives: ["普通内科"],
    redFlags: RF("长期严重便秘"),
    prep: PREP("记录排便频率"),
    faqs: makeFaq("便秘"),
    tags: ["消化"],
  },

  {
    slug: "vomiting",
    title: "呕吐挂什么科？",
    summary: "呕吐常见于胃肠炎或食物中毒。",
    recommended: ["消化内科"],
    alternatives: ["急诊科"],
    redFlags: RF("持续呕吐", "呕血"),
    prep: PREP("记录饮食情况"),
    faqs: makeFaq("呕吐"),
    tags: ["消化"],
  },

  {
    slug: "back-pain",
    title: "背痛挂什么科？",
    summary: "背痛可能与肌肉劳损或脊椎问题有关。",
    recommended: ["骨科"],
    alternatives: ["康复科"],
    redFlags: RF("剧烈背痛"),
    prep: PREP("记录疼痛部位"),
    faqs: makeFaq("背痛"),
    tags: ["骨科"],
  },

  {
    slug: "joint-pain",
    title: "关节痛挂什么科？",
    summary: "关节痛常见于关节炎或运动损伤。",
    recommended: ["骨科"],
    alternatives: ["风湿免疫科"],
    redFlags: RF("关节肿胀"),
    prep: PREP("记录疼痛部位"),
    faqs: makeFaq("关节痛"),
    tags: ["骨科"],
  },

  {
    slug: "skin-rash",
    title: "皮疹挂什么科？",
    summary: "皮疹可能由过敏或感染引起。",
    recommended: ["皮肤科"],
    alternatives: [],
    redFlags: RF("皮疹迅速扩散"),
    prep: PREP("记录出现时间"),
    faqs: makeFaq("皮疹"),
    tags: ["皮肤"],
  },

  {
    slug: "acne",
    title: "痤疮挂什么科？",
    summary: "痤疮常见于青春期或皮脂分泌旺盛。",
    recommended: ["皮肤科"],
    alternatives: [],
    redFlags: RF(),
    prep: PREP("记录持续时间"),
    faqs: makeFaq("痤疮"),
    tags: ["皮肤"],
  },

  {
    slug: "hair-loss",
    title: "脱发挂什么科？",
    summary: "脱发可能与压力、遗传或激素有关。",
    recommended: ["皮肤科"],
    alternatives: ["内分泌科"],
    redFlags: RF("突然大量脱发"),
    prep: PREP("记录脱发时间"),
    faqs: makeFaq("脱发"),
    tags: ["皮肤"],
  },

  {
    slug: "blurred-vision",
    title: "视力模糊挂什么科？",
    summary: "视力模糊可能由眼部疾病或神经问题引起。",
    recommended: ["眼科"],
    alternatives: ["神经内科"],
    redFlags: RF("突然视力下降"),
    prep: PREP("记录症状时间"),
    faqs: makeFaq("视力模糊"),
    tags: ["眼科"],
  },

  {
    slug: "eye-pain",
    title: "眼痛挂什么科？",
    summary: "眼痛可能由眼部炎症或损伤引起。",
    recommended: ["眼科"],
    alternatives: [],
    redFlags: RF("剧烈眼痛"),
    prep: PREP("记录疼痛时间"),
    faqs: makeFaq("眼痛"),
    tags: ["眼科"],
  },

  {
    slug: "toothache",
    title: "牙痛挂什么科？",
    summary: "牙痛常见于龋齿或牙龈炎。",
    recommended: ["口腔科"],
    alternatives: [],
    redFlags: RF("严重肿胀"),
    prep: PREP("记录疼痛时间"),
    faqs: makeFaq("牙痛"),
    tags: ["口腔"],
  },

  {
    slug: "insomnia",
    title: "失眠挂什么科？",
    summary: "失眠可能与压力、焦虑或生活习惯有关。",
    recommended: ["神经内科"],
    alternatives: ["心理科"],
    redFlags: RF("长期严重失眠"),
    prep: PREP("记录睡眠时间"),
    faqs: makeFaq("失眠"),
    tags: ["神经"],
  },

  {
    slug: "anxiety",
    title: "焦虑挂什么科？",
    summary: "焦虑可能与心理压力或情绪问题有关。",
    recommended: ["心理科"],
    alternatives: ["精神科"],
    redFlags: RF("严重焦虑"),
    prep: PREP("记录情绪变化"),
    faqs: makeFaq("焦虑"),
    tags: ["心理"],
  },

  {
    slug: "depression",
    title: "抑郁挂什么科？",
    summary: "抑郁可能与情绪障碍有关。",
    recommended: ["精神科"],
    alternatives: ["心理科"],
    redFlags: RF("自伤想法"),
    prep: PREP("记录情绪变化"),
    faqs: makeFaq("抑郁"),
    tags: ["心理"],
  },

  {
    slug: "lightheadedness",
    title: "头晕眼花挂什么科",
    summary: "头晕眼花常见于低血压、贫血、颈椎问题或神经系统疾病。",
    recommended: ["神经内科"],
    alternatives: ["心内科", "耳鼻喉科"],
    redFlags: ["突然剧烈头晕", "伴随肢体无力", "意识模糊"],
    prep: ["记录头晕发生时间", "是否伴随恶心或视物旋转"],
    faqs: [{ q: "头晕需要检查什么？", a: "医生可能建议血压、血常规或脑部影像检查" }],
    tags: ["神经"],
  },

  {
    slug: "nosebleed",
    title: "鼻子出血挂什么科",
    summary: "鼻出血常见于鼻腔干燥、鼻炎或血压升高。",
    recommended: ["耳鼻喉科"],
    alternatives: ["急诊科"],
    redFlags: ["出血持续不止", "大量出血"],
    prep: ["记录出血时间"],
    faqs: [{ q: "鼻出血需要做检查吗？", a: "反复出血建议检查鼻腔或血压" }],
    tags: ["耳鼻喉"],
  },

  {
    slug: "ear-ringing",
    title: "耳鸣挂什么科",
    summary: "耳鸣常见于听力损伤、耳部疾病或压力。",
    recommended: ["耳鼻喉科"],
    alternatives: ["神经内科"],
    redFlags: ["突然听力下降"],
    prep: ["记录耳鸣持续时间"],
    faqs: [{ q: "耳鸣可以自愈吗？", a: "部分耳鸣可以缓解，但持续耳鸣建议就医" }],
    tags: ["耳鼻喉"],
  },

  {
    slug: "vision-loss-blur",
    title: "看东西模糊挂什么科",
    summary: "看东西模糊可能与近视、眼部疾病或神经问题有关。",
    recommended: ["眼科"],
    alternatives: ["神经内科"],
    redFlags: ["突然视力下降", "视野缺损"],
    prep: ["记录症状开始时间"],
    faqs: [{ q: "视力模糊需要检查什么？", a: "医生可能建议视力或眼底检查" }],
    tags: ["眼科"],
  },

  {
    slug: "vertigo",
    title: "眩晕挂什么科",
    summary: "眩晕可能与低血压、贫血、颈椎问题或神经系统疾病有关。",
    recommended: ["神经内科"],
    alternatives: ["心内科", "耳鼻喉科"],
    redFlags: ["突然剧烈头晕", "伴随肢体无力", "意识模糊"],
    prep: ["记录头晕发生时间", "是否伴随恶心"],
    faqs: [{ q: "头晕需要检查什么？", a: "医生可能建议检查血压、血常规或脑部影像。" }],
    tags: ["神经"],
  },

  {
    slug: "stomachache",
    title: "胃痛挂什么科",
    summary: "胃痛可能与胃肠道疾病、炎症或其他腹部器官问题有关。",
    recommended: ["消化内科"],
    alternatives: ["普通外科"],
    redFlags: ["剧烈持续腹痛", "伴随发烧"],
    prep: ["记录疼痛位置"],
    faqs: [{ q: "腹痛需要做什么检查？", a: "医生可能建议腹部B超或血液检查。" }],
    tags: ["消化"],
  },

  {
    slug: "nausea",
    title: "恶心想吐挂什么科",
    summary: "恶心可能由胃肠问题、感染或神经系统问题引起。",
    recommended: ["消化内科"],
    alternatives: ["神经内科"],
    redFlags: ["持续呕吐", "脱水"],
    prep: ["记录饮食情况"],
    faqs: [{ q: "恶心需要检查吗？", a: "若持续不缓解建议就医。" }],
    tags: ["消化"],
  },

  {
    slug: "chest-tightness",
    title: "胸闷挂什么科",
    summary: "胸闷可能与心脏、肺部或焦虑等因素有关。",
    recommended: ["心内科"],
    alternatives: ["呼吸内科"],
    redFlags: ["胸痛", "呼吸困难"],
    prep: ["记录症状持续时间"],
    faqs: [{ q: "胸闷需要检查什么？", a: "医生可能建议心电图或胸部影像检查。" }],
    tags: ["心脏"],
  },

  {
    slug: "palpitations",
    title: "心慌挂什么科",
    summary: "心慌可能与心律失常、焦虑或其他心血管问题有关。",
    recommended: ["心内科"],
    alternatives: ["内分泌科"],
    redFlags: ["心跳极快", "头晕"],
    prep: ["记录发作时间"],
    faqs: [{ q: "心慌需要检查吗？", a: "医生可能建议心电图检查。" }],
    tags: ["心脏"],
  },

  {
    slug: "allergic-runny-nose",
    title: "过敏性流鼻涕挂什么科",
    summary: "流鼻涕常见于感冒、过敏性鼻炎或鼻窦炎。",
    recommended: ["耳鼻喉科"],
    alternatives: ["呼吸内科"],
    redFlags: ["高烧不退", "伴随严重头痛"],
    prep: ["记录是否有过敏史"],
    faqs: [{ q: "流鼻涕需要吃药吗？", a: "轻微症状可以观察，持续不缓解建议就医。" }],
    tags: ["呼吸"],
  },

  {
    slug: "throat-inflammation",
    title: "咽喉发炎挂什么科",
    summary: "喉咙痛常见于咽炎、扁桃体炎或呼吸道感染。",
    recommended: ["耳鼻喉科"],
    alternatives: ["呼吸内科"],
    redFlags: ["吞咽困难", "呼吸困难"],
    prep: ["记录是否发烧"],
    faqs: [{ q: "喉咙痛要做检查吗？", a: "若持续数天不缓解建议就医检查。" }],
    tags: ["呼吸"],
  },

  {
    slug: "ear-pain",
    title: "耳朵痛挂什么科",
    summary: "耳朵痛可能与中耳炎、外耳道炎或耳部感染有关。",
    recommended: ["耳鼻喉科"],
    alternatives: ["神经内科"],
    redFlags: ["听力突然下降", "剧烈耳痛"],
    prep: ["避免掏耳朵"],
    faqs: [{ q: "耳朵痛需要检查吗？", a: "医生可能会进行耳镜检查。" }],
    tags: ["耳鼻喉"],
  },

  {
    slug: "upper-back-pain",
    title: "上背痛挂什么科",
    summary: "背痛常见于肌肉劳损、脊椎问题或姿势不良。",
    recommended: ["骨科"],
    alternatives: ["疼痛科"],
    redFlags: ["严重外伤后背痛", "伴随肢体麻木"],
    prep: ["记录疼痛位置"],
    faqs: [{ q: "背痛需要拍片吗？", a: "医生可能建议X光或MRI检查。" }],
    tags: ["骨科"],
  },

  {
    slug: "knee-pain",
    title: "膝盖疼挂什么科",
    summary: "膝盖疼可能与关节炎、运动损伤或韧带问题有关。",
    recommended: ["骨科"],
    alternatives: ["运动医学科"],
    redFlags: ["无法站立", "剧烈肿胀"],
    prep: ["记录受伤史"],
    faqs: [{ q: "膝盖疼要休息吗？", a: "应避免剧烈运动并及时就医。" }],
    tags: ["骨科"],
  },

  {
    slug: "skin-itching",
    title: "皮肤瘙痒挂什么科",
    summary: "皮肤瘙痒可能与过敏、皮炎或皮肤感染有关。",
    recommended: ["皮肤科"],
    alternatives: ["过敏科"],
    redFlags: ["大面积红疹", "呼吸困难"],
    prep: ["避免抓挠"],
    faqs: [{ q: "皮肤瘙痒需要检查吗？", a: "医生可能建议皮肤检查或过敏测试。" }],
    tags: ["皮肤"],
  },

  {
    slug: "excessive-hair-loss",
    title: "掉发严重挂什么科",
    summary: "脱发可能与遗传、压力、营养或内分泌问题有关。",
    recommended: ["皮肤科"],
    alternatives: ["内分泌科"],
    redFlags: ["突然大量脱发"],
    prep: ["记录脱发时间"],
    faqs: [{ q: "脱发可以治疗吗？", a: "多数脱发可以通过药物或治疗改善。" }],
    tags: ["皮肤"],
  },

  {
    slug: "frequent-urination",
    title: "尿频挂什么科",
    summary: "尿频可能与泌尿系统感染或前列腺问题有关。",
    recommended: ["泌尿外科"],
    alternatives: ["肾内科"],
    redFlags: ["尿血", "剧烈疼痛"],
    prep: ["记录排尿频率"],
    faqs: [{ q: "尿频需要检查吗？", a: "医生可能建议尿检。" }],
    tags: ["泌尿"],
  },

  {
    slug: "bowel-movement-difficulty",
    title: "排便困难挂什么科",
    summary: "便秘可能与饮食、生活习惯或肠道问题有关。",
    recommended: ["消化内科"],
    alternatives: ["肛肠科"],
    redFlags: ["便血", "严重腹痛"],
    prep: ["记录排便情况"],
    faqs: [{ q: "便秘需要检查吗？", a: "持续便秘建议就医。" }],
    tags: ["消化"],
  },

  {
    slug: "acute-diarrhea",
    title: "拉肚子挂什么科",
    summary: "腹泻常见于肠胃感染或饮食不洁。",
    recommended: ["消化内科"],
    alternatives: ["感染科"],
    redFlags: ["严重脱水", "持续高烧"],
    prep: ["注意补水"],
    faqs: [{ q: "腹泻需要就医吗？", a: "若持续不缓解建议就医。" }],
    tags: ["消化"],
  },

];

export function uniqueSymptoms() {
  const map = new Map<string, (typeof symptoms)[number]>();

  const score = (s: (typeof symptoms)[number]) =>
    (s.summary?.length ?? 0) +
    (s.recommended?.length ?? 0) * 20 +
    (s.alternatives?.length ?? 0) * 10 +
    (s.redFlags?.length ?? 0) * 10 +
    (s.prep?.length ?? 0) * 5 +
    (s.faqs?.length ?? 0) * 20 +
    (s.tags?.length ?? 0) * 5;

  for (const s of symptoms) {
    const prev = map.get(s.slug);
    if (!prev) {
      map.set(s.slug, s);
    } else {
      // 谁更“信息密度高”就保留谁
      map.set(s.slug, score(s) >= score(prev) ? s : prev);
    }
  }
  return Array.from(map.values());
}
