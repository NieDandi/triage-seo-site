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

    {
        slug: "fever",
        title: "发烧挂什么科",
        summary: "发烧常见于感染、炎症或免疫反应。",
        recommended: ["感染科"],
        alternatives: ["呼吸内科"],
        redFlags: ["持续高烧", "意识模糊"],
        prep: ["记录体温变化"],
        faqs: makeFaq("发烧"),
        tags: ["感染"]
    },

    {
        slug: "sneezing",
        title: "打喷嚏挂什么科",
        summary: "打喷嚏常见于过敏或感冒。",
        recommended: ["耳鼻喉科"],
        alternatives: ["呼吸内科"],
        redFlags: ["持续高烧"],
        prep: ["记录是否接触过敏源"],
        faqs: makeFaq("打喷嚏"),
        tags: ["呼吸"]
    },

    {
        slug: "nose-itching",
        title: "鼻子痒挂什么科",
        summary: "鼻子痒常见于过敏性鼻炎。",
        recommended: ["耳鼻喉科"],
        alternatives: ["过敏科"],
        redFlags: ["严重鼻塞"],
        prep: ["记录症状持续时间"],
        faqs: makeFaq("鼻子痒"),
        tags: ["耳鼻喉"]
    },

    {
        slug: "hearing-loss",
        title: "听力下降挂什么科",
        summary: "听力下降可能与耳部疾病或神经问题有关。",
        recommended: ["耳鼻喉科"],
        alternatives: ["神经内科"],
        redFlags: ["突然听力下降"],
        prep: ["记录听力变化"],
        faqs: makeFaq("听力下降"),
        tags: ["耳鼻喉"]
    },

    {
        slug: "hoarse-voice",
        title: "声音嘶哑挂什么科",
        summary: "声音嘶哑常见于咽喉炎或声带问题。",
        recommended: ["耳鼻喉科"],
        alternatives: ["呼吸内科"],
        redFlags: ["持续声音嘶哑"],
        prep: ["减少用嗓"],
        faqs: makeFaq("声音嘶哑"),
        tags: ["耳鼻喉"]
    },

    {
        slug: "difficulty-swallowing",
        title: "吞咽困难挂什么科",
        summary: "吞咽困难可能与咽喉或食管问题有关。",
        recommended: ["耳鼻喉科"],
        alternatives: ["消化内科"],
        redFlags: ["无法吞咽"],
        prep: ["记录进食情况"],
        faqs: makeFaq("吞咽困难"),
        tags: ["消化"]
    },

    {
        slug: "eye-redness",
        title: "眼睛发红挂什么科",
        summary: "眼睛发红常见于结膜炎或过敏。",
        recommended: ["眼科"],
        alternatives: [],
        redFlags: ["剧烈疼痛"],
        prep: ["避免揉眼"],
        faqs: makeFaq("眼睛发红"),
        tags: ["眼科"]
    },

    {
        slug: "eye-itching",
        title: "眼睛痒挂什么科",
        summary: "眼睛痒常见于过敏性结膜炎。",
        recommended: ["眼科"],
        alternatives: ["过敏科"],
        redFlags: ["视力下降"],
        prep: ["避免揉眼"],
        faqs: makeFaq("眼睛痒"),
        tags: ["眼科"]
    },

    {
        slug: "dry-eyes",
        title: "眼干涩挂什么科",
        summary: "眼干涩可能与长时间用眼有关。",
        recommended: ["眼科"],
        alternatives: [],
        redFlags: ["持续视力下降"],
        prep: ["减少电子设备使用"],
        faqs: makeFaq("眼干涩"),
        tags: ["眼科"]
    },

    {
        slug: "heartburn",
        title: "反酸烧心挂什么科",
        summary: "反酸烧心常见于胃食管反流。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["吞咽困难"],
        prep: ["记录饮食情况"],
        faqs: makeFaq("反酸"),
        tags: ["消化"]
    },

    {
        slug: "bloating",
        title: "胃胀气挂什么科",
        summary: "胃胀气常见于消化不良。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["严重腹痛"],
        prep: ["记录饮食情况"],
        faqs: makeFaq("胃胀气"),
        tags: ["消化"]
    },

    {
        slug: "loss-of-appetite",
        title: "食欲不振挂什么科",
        summary: "食欲不振可能与消化或情绪问题有关。",
        recommended: ["消化内科"],
        alternatives: ["心理科"],
        redFlags: ["体重明显下降"],
        prep: ["记录饮食情况"],
        faqs: makeFaq("食欲不振"),
        tags: ["消化"]
    },

    {
        slug: "blood-in-stool",
        title: "便血挂什么科",
        summary: "便血可能与痔疮或肠道疾病有关。",
        recommended: ["肛肠科"],
        alternatives: ["消化内科"],
        redFlags: ["大量出血"],
        prep: ["记录排便情况"],
        faqs: makeFaq("便血"),
        tags: ["消化"]
    },

    {
        slug: "black-stool",
        title: "黑便挂什么科",
        summary: "黑便可能与消化道出血有关。",
        recommended: ["消化内科"],
        alternatives: ["急诊科"],
        redFlags: ["持续黑便"],
        prep: ["记录排便颜色"],
        faqs: makeFaq("黑便"),
        tags: ["消化"]
    },

    {
        slug: "painful-urination",
        title: "尿痛挂什么科",
        summary: "尿痛常见于泌尿系统感染。",
        recommended: ["泌尿外科"],
        alternatives: ["肾内科"],
        redFlags: ["高烧"],
        prep: ["记录排尿情况"],
        faqs: makeFaq("尿痛"),
        tags: ["泌尿"]
    },

    {
        slug: "blood-in-urine",
        title: "尿血挂什么科",
        summary: "尿血可能与泌尿系统疾病有关。",
        recommended: ["泌尿外科"],
        alternatives: ["肾内科"],
        redFlags: ["持续尿血"],
        prep: ["记录症状时间"],
        faqs: makeFaq("尿血"),
        tags: ["泌尿"]
    },

    {
        slug: "menstrual-irregularity",
        title: "月经不调挂什么科",
        summary: "月经不调可能与内分泌或妇科问题有关。",
        recommended: ["妇科"],
        alternatives: ["内分泌科"],
        redFlags: ["持续异常出血"],
        prep: ["记录月经周期"],
        faqs: makeFaq("月经不调"),
        tags: ["妇科"]
    },

    {
        slug: "menstrual-pain",
        title: "痛经挂什么科",
        summary: "痛经常见于女性生理周期。",
        recommended: ["妇科"],
        alternatives: ["普通内科"],
        redFlags: ["剧烈腹痛"],
        prep: ["记录疼痛时间"],
        faqs: makeFaq("痛经"),
        tags: ["妇科"]
    },

    {
        slug: "shoulder-pain",
        title: "肩膀痛挂什么科",
        summary: "肩膀痛常见于肌肉劳损或关节问题。",
        recommended: ["骨科"],
        alternatives: ["康复科"],
        redFlags: ["无法抬手"],
        prep: ["记录疼痛部位"],
        faqs: makeFaq("肩膀痛"),
        tags: ["骨科"]
    },

    {
        slug: "neck-pain",
        title: "颈椎痛挂什么科",
        summary: "颈椎痛可能与颈椎病有关。",
        recommended: ["骨科"],
        alternatives: ["神经内科"],
        redFlags: ["手臂麻木"],
        prep: ["记录疼痛时间"],
        faqs: makeFaq("颈椎痛"),
        tags: ["骨科"]
    },

    {
        slug: "leg-numbness",
        title: "腿麻挂什么科",
        summary: "腿麻可能与神经或脊椎问题有关。",
        recommended: ["神经内科"],
        alternatives: ["骨科"],
        redFlags: ["持续麻木"],
        prep: ["记录症状时间"],
        faqs: makeFaq("腿麻"),
        tags: ["神经"]
    },

    {
        slug: "hand-tremor",
        title: "手抖挂什么科",
        summary: "手抖可能与神经系统问题有关。",
        recommended: ["神经内科"],
        alternatives: ["内分泌科"],
        redFlags: ["持续加重"],
        prep: ["记录发作时间"],
        faqs: makeFaq("手抖"),
        tags: ["神经"]
    },

    {
        slug: "snoring",
        title: "打呼噜挂什么科",
        summary: "打呼噜可能与睡眠呼吸暂停有关。",
        recommended: ["耳鼻喉科"],
        alternatives: ["呼吸内科"],
        redFlags: ["呼吸暂停"],
        prep: ["记录睡眠情况"],
        faqs: makeFaq("打呼噜"),
        tags: ["呼吸"]
    },

    {
        slug: "night-sweats",
        title: "盗汗挂什么科",
        summary: "盗汗可能与感染或内分泌问题有关。",
        recommended: ["内分泌科"],
        alternatives: ["感染科"],
        redFlags: ["持续盗汗"],
        prep: ["记录出汗时间"],
        faqs: makeFaq("盗汗"),
        tags: ["内分泌"]
    },

    {
        slug: "fatigue",
        title: "乏力挂什么科",
        summary: "乏力可能与贫血、感染或压力有关。",
        recommended: ["普通内科"],
        alternatives: ["内分泌科"],
        redFlags: ["持续疲劳"],
        prep: ["记录症状时间"],
        faqs: makeFaq("乏力"),
        tags: ["内科"]
    },

    {
        slug: "weight-loss",
        title: "体重下降挂什么科",
        summary: "体重下降可能与消化或代谢问题有关。",
        recommended: ["内分泌科"],
        alternatives: ["消化内科"],
        redFlags: ["短期明显下降"],
        prep: ["记录体重变化"],
        faqs: makeFaq("体重下降"),
        tags: ["内科"]
    },

    {
        slug: "leg-swelling",
        title: "腿肿挂什么科",
        summary: "腿肿可能与循环或肾脏问题有关。",
        recommended: ["心内科"],
        alternatives: ["肾内科"],
        redFlags: ["突然肿胀"],
        prep: ["记录肿胀时间"],
        faqs: makeFaq("腿肿"),
        tags: ["心脏"]
    },

    {
        slug: "ankle-swelling",
        title: "脚踝肿挂什么科",
        summary: "脚踝肿可能与循环或外伤有关。",
        recommended: ["骨科"],
        alternatives: ["心内科"],
        redFlags: ["严重疼痛"],
        prep: ["记录受伤史"],
        faqs: makeFaq("脚踝肿"),
        tags: ["骨科"]
    },

    {
        slug: "mouth-ulcer",
        title: "口腔溃疡挂什么科",
        summary: "口腔溃疡常见于免疫或营养问题。",
        recommended: ["口腔科"],
        alternatives: ["皮肤科"],
        redFlags: ["长期不愈"],
        prep: ["避免辛辣食物"],
        faqs: makeFaq("口腔溃疡"),
        tags: ["口腔"]
    },

    {
        slug: "gum-bleeding",
        title: "牙龈出血挂什么科",
        summary: "牙龈出血常见于牙龈炎或口腔问题。",
        recommended: ["口腔科"],
        alternatives: ["血液科"],
        redFlags: ["持续出血"],
        prep: ["注意口腔卫生"],
        faqs: makeFaq("牙龈出血"),
        tags: ["口腔"]
    },

    {
        slug: "headache-fever",
        title: "头痛发烧挂什么科",
        summary: "头痛伴随发烧可能与感染或炎症有关。",
        recommended: ["感染科"],
        alternatives: ["神经内科"],
        redFlags: ["高烧不退", "意识模糊"],
        prep: ["记录体温变化"],
        faqs: makeFaq("头痛发烧"),
        tags: ["感染"]
    },

    {
        slug: "dizziness-nausea",
        title: "头晕恶心挂什么科",
        summary: "头晕恶心可能与神经系统或消化系统问题有关。",
        recommended: ["神经内科"],
        alternatives: ["消化内科"],
        redFlags: ["持续呕吐"],
        prep: ["记录症状时间"],
        faqs: makeFaq("头晕恶心"),
        tags: ["神经"]
    },

    {
        slug: "cough-fever",
        title: "咳嗽发烧挂什么科",
        summary: "咳嗽发烧常见于呼吸道感染。",
        recommended: ["呼吸内科"],
        alternatives: ["感染科"],
        redFlags: ["呼吸困难"],
        prep: ["记录体温"],
        faqs: makeFaq("咳嗽发烧"),
        tags: ["呼吸"]
    },

    {
        slug: "chest-tightness-shortness-breath",
        title: "胸闷气短挂什么科",
        summary: "胸闷气短可能与心脏或肺部疾病有关。",
        recommended: ["心内科"],
        alternatives: ["呼吸内科"],
        redFlags: ["持续胸痛"],
        prep: ["记录发作时间"],
        faqs: makeFaq("胸闷气短"),
        tags: ["心脏"]
    },

    {
        slug: "abdominal-pain-diarrhea",
        title: "腹痛腹泻挂什么科",
        summary: "腹痛伴腹泻常见于胃肠感染。",
        recommended: ["消化内科"],
        alternatives: ["感染科"],
        redFlags: ["严重脱水"],
        prep: ["记录排便次数"],
        faqs: makeFaq("腹痛腹泻"),
        tags: ["消化"]
    },

    {
        slug: "abdominal-pain-vomiting",
        title: "腹痛呕吐挂什么科",
        summary: "腹痛伴呕吐可能与胃肠炎有关。",
        recommended: ["消化内科"],
        alternatives: ["急诊科"],
        redFlags: ["剧烈腹痛"],
        prep: ["记录饮食情况"],
        faqs: makeFaq("腹痛呕吐"),
        tags: ["消化"]
    },

    {
        slug: "runny-nose-sneezing",
        title: "流鼻涕打喷嚏挂什么科",
        summary: "流鼻涕打喷嚏常见于过敏或感冒。",
        recommended: ["耳鼻喉科"],
        alternatives: ["呼吸内科"],
        redFlags: ["持续高烧"],
        prep: ["记录症状时间"],
        faqs: makeFaq("流鼻涕打喷嚏"),
        tags: ["耳鼻喉"]
    },

    {
        slug: "sore-throat-fever",
        title: "喉咙痛发烧挂什么科",
        summary: "喉咙痛伴随发烧可能与咽喉感染有关。",
        recommended: ["耳鼻喉科"],
        alternatives: ["呼吸内科"],
        redFlags: ["吞咽困难"],
        prep: ["记录体温"],
        faqs: makeFaq("喉咙痛发烧"),
        tags: ["耳鼻喉"]
    },

    {
        slug: "back-pain-leg-numbness",
        title: "腰痛腿麻挂什么科",
        summary: "腰痛伴随腿麻可能与神经压迫有关。",
        recommended: ["骨科"],
        alternatives: ["神经内科"],
        redFlags: ["无法行走"],
        prep: ["记录疼痛时间"],
        faqs: makeFaq("腰痛腿麻"),
        tags: ["骨科"]
    },

    {
        slug: "knee-pain-swelling",
        title: "膝盖疼肿胀挂什么科",
        summary: "膝盖疼伴随肿胀可能与关节炎有关。",
        recommended: ["骨科"],
        alternatives: ["风湿免疫科"],
        redFlags: ["无法站立"],
        prep: ["记录受伤史"],
        faqs: makeFaq("膝盖疼肿"),
        tags: ["骨科"]
    },

    {
        slug: "eye-redness-pain",
        title: "眼睛红痛挂什么科",
        summary: "眼睛红痛可能与结膜炎有关。",
        recommended: ["眼科"],
        alternatives: [],
        redFlags: ["视力下降"],
        prep: ["避免揉眼"],
        faqs: makeFaq("眼睛红痛"),
        tags: ["眼科"]
    },

    {
        slug: "eye-redness-itching",
        title: "眼睛红痒挂什么科",
        summary: "眼睛红痒常见于过敏性结膜炎。",
        recommended: ["眼科"],
        alternatives: ["过敏科"],
        redFlags: ["严重肿胀"],
        prep: ["避免揉眼"],
        faqs: makeFaq("眼睛红痒"),
        tags: ["眼科"]
    },

    {
        slug: "ear-pain-hearing-loss",
        title: "耳朵痛听力下降挂什么科",
        summary: "耳朵痛伴随听力下降可能与中耳炎有关。",
        recommended: ["耳鼻喉科"],
        alternatives: [],
        redFlags: ["突然听力下降"],
        prep: ["记录疼痛时间"],
        faqs: makeFaq("耳朵痛听力下降"),
        tags: ["耳鼻喉"]
    },

    {
        slug: "skin-rash-itching",
        title: "皮疹瘙痒挂什么科",
        summary: "皮疹伴随瘙痒可能与过敏有关。",
        recommended: ["皮肤科"],
        alternatives: ["过敏科"],
        redFlags: ["严重肿胀"],
        prep: ["避免抓挠"],
        faqs: makeFaq("皮疹瘙痒"),
        tags: ["皮肤"]
    },

    {
        slug: "skin-rash-fever",
        title: "皮疹发烧挂什么科",
        summary: "皮疹伴随发烧可能与感染有关。",
        recommended: ["感染科"],
        alternatives: ["皮肤科"],
        redFlags: ["高烧"],
        prep: ["记录体温"],
        faqs: makeFaq("皮疹发烧"),
        tags: ["感染"]
    },

    {
        slug: "palpitations-dizziness",
        title: "心慌头晕挂什么科",
        summary: "心慌伴头晕可能与心律失常有关。",
        recommended: ["心内科"],
        alternatives: ["神经内科"],
        redFlags: ["晕厥"],
        prep: ["记录发作时间"],
        faqs: makeFaq("心慌头晕"),
        tags: ["心脏"]
    },

    {
        slug: "palpitations-shortness-breath",
        title: "心慌气短挂什么科",
        summary: "心慌伴气短可能与心脏疾病有关。",
        recommended: ["心内科"],
        alternatives: ["呼吸内科"],
        redFlags: ["胸痛"],
        prep: ["记录症状时间"],
        faqs: makeFaq("心慌气短"),
        tags: ["心脏"]
    },

    {
        slug: "fatigue-weight-loss",
        title: "乏力体重下降挂什么科",
        summary: "乏力伴体重下降可能与代谢或慢性疾病有关。",
        recommended: ["内分泌科"],
        alternatives: ["消化内科"],
        redFlags: ["明显消瘦"],
        prep: ["记录体重变化"],
        faqs: makeFaq("乏力体重下降"),
        tags: ["内科"]
    },

    {
        slug: "fever-rash",
        title: "发烧皮疹挂什么科",
        summary: "发烧伴皮疹可能与感染或免疫反应有关。",
        recommended: ["感染科"],
        alternatives: ["皮肤科"],
        redFlags: ["高烧"],
        prep: ["记录体温"],
        faqs: makeFaq("发烧皮疹"),
        tags: ["感染"]
    },

    {
        slug: "vomiting-diarrhea",
        title: "呕吐腹泻挂什么科",
        summary: "呕吐伴腹泻常见于胃肠感染。",
        recommended: ["消化内科"],
        alternatives: ["感染科"],
        redFlags: ["严重脱水"],
        prep: ["补充水分"],
        faqs: makeFaq("呕吐腹泻"),
        tags: ["消化"]
    },

    {
        slug: "persistent-cough",
        title: "长期咳嗽挂什么科",
        summary: "长期咳嗽可能与慢性支气管炎或过敏有关。",
        recommended: ["呼吸内科"],
        alternatives: ["耳鼻喉科"],
        redFlags: ["咳血", "呼吸困难"],
        prep: ["记录咳嗽持续时间"],
        faqs: makeFaq("长期咳嗽"),
        tags: ["呼吸"]
    },

    {
        slug: "chronic-headache",
        title: "长期头痛挂什么科",
        summary: "长期头痛可能与偏头痛或神经系统问题有关。",
        recommended: ["神经内科"],
        alternatives: ["普通内科"],
        redFlags: ["突然剧烈头痛"],
        prep: ["记录疼痛频率"],
        faqs: makeFaq("长期头痛"),
        tags: ["神经"]
    },

    {
        slug: "sudden-dizziness",
        title: "突然头晕挂什么科",
        summary: "突然头晕可能与血压或神经问题有关。",
        recommended: ["神经内科"],
        alternatives: ["心内科"],
        redFlags: ["意识丧失"],
        prep: ["记录发作时间"],
        faqs: makeFaq("突然头晕"),
        tags: ["神经"]
    },

    {
        slug: "severe-chest-pain",
        title: "剧烈胸痛挂什么科",
        summary: "剧烈胸痛可能与心脏或肺部疾病有关。",
        recommended: ["心内科"],
        alternatives: ["急诊科"],
        redFlags: ["持续胸痛"],
        prep: ["记录疼痛时间"],
        faqs: makeFaq("剧烈胸痛"),
        tags: ["心脏"]
    },

    {
        slug: "persistent-fever",
        title: "持续发烧挂什么科",
        summary: "持续发烧可能与感染或免疫问题有关。",
        recommended: ["感染科"],
        alternatives: ["呼吸内科"],
        redFlags: ["高烧不退"],
        prep: ["记录体温变化"],
        faqs: makeFaq("持续发烧"),
        tags: ["感染"]
    },

    {
        slug: "morning-dizziness",
        title: "早上头晕挂什么科",
        summary: "早上头晕可能与血压或睡眠问题有关。",
        recommended: ["神经内科"],
        alternatives: ["内科"],
        redFlags: ["晕厥"],
        prep: ["记录症状时间"],
        faqs: makeFaq("早上头晕"),
        tags: ["神经"]
    },

    {
        slug: "night-cough",
        title: "晚上咳嗽挂什么科",
        summary: "晚上咳嗽可能与过敏或哮喘有关。",
        recommended: ["呼吸内科"],
        alternatives: ["耳鼻喉科"],
        redFlags: ["呼吸困难"],
        prep: ["记录症状时间"],
        faqs: makeFaq("晚上咳嗽"),
        tags: ["呼吸"]
    },

    {
        slug: "night-chest-tightness",
        title: "晚上胸闷挂什么科",
        summary: "晚上胸闷可能与心脏或呼吸系统问题有关。",
        recommended: ["心内科"],
        alternatives: ["呼吸内科"],
        redFlags: ["胸痛"],
        prep: ["记录症状时间"],
        faqs: makeFaq("晚上胸闷"),
        tags: ["心脏"]
    },

    {
        slug: "chronic-insomnia",
        title: "长期失眠挂什么科",
        summary: "长期失眠可能与心理或神经问题有关。",
        recommended: ["神经内科"],
        alternatives: ["心理科"],
        redFlags: ["严重睡眠障碍"],
        prep: ["记录睡眠时间"],
        faqs: makeFaq("长期失眠"),
        tags: ["神经"]
    },

    {
        slug: "sudden-chest-tightness",
        title: "突然胸闷挂什么科",
        summary: "突然胸闷可能与心脏或焦虑有关。",
        recommended: ["心内科"],
        alternatives: ["呼吸内科"],
        redFlags: ["持续胸痛"],
        prep: ["记录发作时间"],
        faqs: makeFaq("突然胸闷"),
        tags: ["心脏"]
    },

    {
        slug: "sneezing",
        title: "打喷嚏挂什么科",
        summary: "打喷嚏常见于感冒或过敏性鼻炎。",
        recommended: ["耳鼻喉科"],
        alternatives: ["呼吸内科"],
        redFlags: ["持续高烧", "严重鼻塞"],
        prep: ["记录症状持续时间"],
        faqs: [{ q: "打喷嚏需要治疗吗？", a: "轻微症状可观察，严重或持续建议就医。" }],
        tags: ["呼吸"]
    },

    {
        slug: "throat-dryness",
        title: "喉咙干挂什么科",
        summary: "喉咙干可能与咽炎或环境干燥有关。",
        recommended: ["耳鼻喉科"],
        alternatives: ["呼吸内科"],
        redFlags: ["吞咽困难"],
        prep: ["记录持续时间"],
        faqs: [{ q: "喉咙干需要检查吗？", a: "若持续不缓解建议就医。" }],
        tags: ["耳鼻喉"]
    },

    {
        slug: "neck-pain",
        title: "脖子痛挂什么科",
        summary: "脖子痛常见于颈椎劳损或肌肉紧张。",
        recommended: ["骨科"],
        alternatives: ["康复科"],
        redFlags: ["肢体麻木"],
        prep: ["记录疼痛时间"],
        faqs: [{ q: "脖子痛需要拍片吗？", a: "医生可能建议X光检查。" }],
        tags: ["骨科"]
    },

    {
        slug: "shoulder-pain",
        title: "肩膀痛挂什么科",
        summary: "肩膀痛可能与肌肉劳损或肩周炎有关。",
        recommended: ["骨科"],
        alternatives: ["康复科"],
        redFlags: ["剧烈疼痛"],
        prep: ["记录疼痛位置"],
        faqs: [{ q: "肩膀痛需要检查吗？", a: "医生可能建议影像检查。" }],
        tags: ["骨科"]
    },

    {
        slug: "arm-numbness",
        title: "手臂发麻挂什么科",
        summary: "手臂发麻可能与神经压迫或颈椎问题有关。",
        recommended: ["神经内科"],
        alternatives: ["骨科"],
        redFlags: ["肢体无力"],
        prep: ["记录症状出现时间"],
        faqs: [{ q: "手臂发麻需要检查吗？", a: "医生可能建议神经检查。" }],
        tags: ["神经"]
    },

    {
        slug: "leg-pain",
        title: "腿疼挂什么科",
        summary: "腿疼可能与肌肉损伤或血管问题有关。",
        recommended: ["骨科"],
        alternatives: ["血管外科"],
        redFlags: ["严重肿胀"],
        prep: ["记录疼痛部位"],
        faqs: [{ q: "腿疼需要检查吗？", a: "医生可能建议影像检查。" }],
        tags: ["骨科"]
    },

    {
        slug: "foot-pain",
        title: "脚痛挂什么科",
        summary: "脚痛可能与运动损伤或足底筋膜炎有关。",
        recommended: ["骨科"],
        alternatives: ["康复科"],
        redFlags: ["严重肿胀"],
        prep: ["记录疼痛位置"],
        faqs: [{ q: "脚痛需要检查吗？", a: "医生可能建议X光检查。" }],
        tags: ["骨科"]
    },

    {
        slug: "memory-loss",
        title: "记忆力下降挂什么科",
        summary: "记忆力下降可能与压力或神经系统问题有关。",
        recommended: ["神经内科"],
        alternatives: ["精神科"],
        redFlags: ["意识混乱"],
        prep: ["记录症状持续时间"],
        faqs: [{ q: "记忆力下降需要检查吗？", a: "医生可能建议神经检查。" }],
        tags: ["神经"]
    },

    {
        slug: "difficulty-breathing",
        title: "呼吸费力挂什么科",
        summary: "呼吸费力可能与肺部或心脏问题有关。",
        recommended: ["呼吸内科"],
        alternatives: ["心内科"],
        redFlags: ["严重呼吸困难"],
        prep: ["记录发作时间"],
        faqs: [{ q: "呼吸费力需要检查吗？", a: "医生可能建议胸片检查。" }],
        tags: ["呼吸"]
    },

    {
        slug: "eye-redness",
        title: "眼睛发红挂什么科",
        summary: "眼睛发红可能由结膜炎或眼部感染引起。",
        recommended: ["眼科"],
        alternatives: ["急诊科"],
        redFlags: ["剧烈眼痛"],
        prep: ["避免揉眼"],
        faqs: [{ q: "眼睛发红需要治疗吗？", a: "持续不缓解建议就医。" }],
        tags: ["眼科"]
    },

    {
        slug: "night-cough",
        title: "晚上咳嗽挂什么科",
        summary: "夜间咳嗽可能与哮喘、过敏或呼吸道感染有关。",
        recommended: ["呼吸内科"],
        alternatives: ["耳鼻喉科"],
        redFlags: ["持续呼吸困难", "胸痛"],
        prep: ["记录咳嗽持续时间"],
        faqs: [{ q: "夜间咳嗽需要检查吗？", a: "若持续超过一周建议就医检查。" }],
        tags: ["呼吸"]
    },

    {
        slug: "phlegm-cough",
        title: "咳痰挂什么科",
        summary: "咳痰常见于支气管炎或肺部感染。",
        recommended: ["呼吸内科"],
        alternatives: ["全科医学科"],
        redFlags: ["咳血", "高烧"],
        prep: ["记录痰的颜色"],
        faqs: [{ q: "咳痰需要检查吗？", a: "医生可能建议胸片或血常规检查。" }],
        tags: ["呼吸"]
    },

    {
        slug: "yellow-phlegm",
        title: "咳黄痰挂什么科",
        summary: "咳黄痰可能提示呼吸道感染。",
        recommended: ["呼吸内科"],
        alternatives: ["感染科"],
        redFlags: ["高烧不退"],
        prep: ["记录症状持续时间"],
        faqs: [{ q: "咳黄痰需要治疗吗？", a: "若伴随发烧建议就医。" }],
        tags: ["呼吸"]
    },

    {
        slug: "voice-hoarseness",
        title: "声音嘶哑挂什么科",
        summary: "声音嘶哑可能与声带炎症或过度用嗓有关。",
        recommended: ["耳鼻喉科"],
        alternatives: ["呼吸内科"],
        redFlags: ["持续两周以上"],
        prep: ["避免过度说话"],
        faqs: [{ q: "声音嘶哑需要检查吗？", a: "持续时间较长建议耳鼻喉科检查。" }],
        tags: ["耳鼻喉"]
    },

    {
        slug: "throat-foreign-body",
        title: "喉咙异物感挂什么科",
        summary: "喉咙异物感可能与咽炎或胃食管反流有关。",
        recommended: ["耳鼻喉科"],
        alternatives: ["消化内科"],
        redFlags: ["吞咽困难"],
        prep: ["记录症状持续时间"],
        faqs: [{ q: "喉咙异物感需要检查吗？", a: "医生可能建议喉镜检查。" }],
        tags: ["耳鼻喉"]
    },

    {
        slug: "difficulty-swallowing",
        title: "吞咽困难挂什么科",
        summary: "吞咽困难可能与食管或咽喉问题有关。",
        recommended: ["消化内科"],
        alternatives: ["耳鼻喉科"],
        redFlags: ["体重下降"],
        prep: ["记录症状出现时间"],
        faqs: [{ q: "吞咽困难需要检查吗？", a: "医生可能建议胃镜检查。" }],
        tags: ["消化"]
    },

    {
        slug: "acid-reflux",
        title: "反酸挂什么科",
        summary: "反酸常见于胃食管反流病。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["持续胸痛"],
        prep: ["记录饮食情况"],
        faqs: [{ q: "反酸需要治疗吗？", a: "持续症状建议就医。" }],
        tags: ["消化"]
    },

    {
        slug: "heartburn",
        title: "烧心挂什么科",
        summary: "烧心常见于胃食管反流或胃炎。",
        recommended: ["消化内科"],
        alternatives: ["全科医学科"],
        redFlags: ["剧烈胸痛"],
        prep: ["避免刺激食物"],
        faqs: [{ q: "烧心需要检查吗？", a: "医生可能建议胃镜检查。" }],
        tags: ["消化"]
    },

    {
        slug: "loss-of-appetite",
        title: "食欲不振挂什么科",
        summary: "食欲不振可能与胃肠疾病或情绪压力有关。",
        recommended: ["消化内科"],
        alternatives: ["心理科"],
        redFlags: ["体重快速下降"],
        prep: ["记录饮食情况"],
        faqs: [{ q: "食欲不振需要检查吗？", a: "持续症状建议就医。" }],
        tags: ["消化"]
    },

    {
        slug: "black-stool",
        title: "黑便挂什么科",
        summary: "黑便可能提示消化道出血。",
        recommended: ["消化内科"],
        alternatives: ["急诊科"],
        redFlags: ["头晕", "乏力"],
        prep: ["记录排便情况"],
        faqs: [{ q: "黑便需要立即就医吗？", a: "可能提示出血建议尽快就医。" }],
        tags: ["消化"]
    },

    {
        slug: "blood-in-stool",
        title: "便血挂什么科",
        summary: "便血可能与痔疮或肠道疾病有关。",
        recommended: ["肛肠科"],
        alternatives: ["消化内科"],
        redFlags: ["持续出血"],
        prep: ["记录出血量"],
        faqs: [{ q: "便血需要检查吗？", a: "医生可能建议肠镜检查。" }],
        tags: ["消化"]
    },

    {
        slug: "hand-tremor",
        title: "手抖挂什么科",
        summary: "手抖可能与神经系统或情绪因素有关。",
        recommended: ["神经内科"],
        alternatives: ["精神科"],
        redFlags: ["持续加重"],
        prep: ["记录症状出现时间"],
        faqs: [{ q: "手抖需要检查吗？", a: "医生可能建议神经系统检查。" }],
        tags: ["神经"]
    },

    {
        slug: "hand-numbness",
        title: "手麻挂什么科",
        summary: "手麻可能与神经压迫或颈椎问题有关。",
        recommended: ["神经内科"],
        alternatives: ["骨科"],
        redFlags: ["肢体无力"],
        prep: ["记录持续时间"],
        faqs: [{ q: "手麻需要检查吗？", a: "医生可能建议神经检查。" }],
        tags: ["神经"]
    },

    {
        slug: "leg-numbness",
        title: "腿麻挂什么科",
        summary: "腿麻可能与神经压迫或腰椎问题有关。",
        recommended: ["神经内科"],
        alternatives: ["骨科"],
        redFlags: ["行走困难"],
        prep: ["记录症状时间"],
        faqs: [{ q: "腿麻需要检查吗？", a: "医生可能建议影像检查。" }],
        tags: ["神经"]
    },

    {
        slug: "eye-dryness",
        title: "眼睛干涩挂什么科",
        summary: "眼睛干涩常见于干眼症。",
        recommended: ["眼科"],
        alternatives: ["全科医学科"],
        redFlags: ["视力下降"],
        prep: ["减少用眼时间"],
        faqs: [{ q: "眼睛干涩需要检查吗？", a: "医生可能建议眼科检查。" }],
        tags: ["眼科"]
    },

    {
        slug: "eye-fatigue",
        title: "眼疲劳挂什么科",
        summary: "眼疲劳常见于长时间用眼。",
        recommended: ["眼科"],
        alternatives: ["全科医学科"],
        redFlags: ["视力模糊"],
        prep: ["注意休息"],
        faqs: [{ q: "眼疲劳需要检查吗？", a: "持续不缓解建议就医。" }],
        tags: ["眼科"]
    },

    {
        slug: "rapid-heartbeat",
        title: "心跳快挂什么科",
        summary: "心跳加快可能与心律失常或焦虑有关。",
        recommended: ["心内科"],
        alternatives: ["精神科"],
        redFlags: ["胸痛", "头晕"],
        prep: ["记录发作时间"],
        faqs: [{ q: "心跳快需要检查吗？", a: "医生可能建议心电图检查。" }],
        tags: ["心脏"]
    },

    {
        slug: "chest-stabbing-pain",
        title: "胸口刺痛挂什么科",
        summary: "胸口刺痛可能与心脏或肌肉问题有关。",
        recommended: ["心内科"],
        alternatives: ["呼吸内科"],
        redFlags: ["持续胸痛"],
        prep: ["记录疼痛时间"],
        faqs: [{ q: "胸口刺痛需要检查吗？", a: "医生可能建议心电图检查。" }],
        tags: ["心脏"]
    },

    {
        slug: "heel-pain",
        title: "脚跟痛挂什么科",
        summary: "脚跟痛常见于足底筋膜炎。",
        recommended: ["骨科"],
        alternatives: ["康复科"],
        redFlags: ["严重肿胀"],
        prep: ["减少剧烈运动"],
        faqs: [{ q: "脚跟痛需要检查吗？", a: "医生可能建议影像检查。" }],
        tags: ["骨科"]
    },

    {
        slug: "wrist-pain",
        title: "手腕痛挂什么科",
        summary: "手腕痛可能与劳损或关节问题有关。",
        recommended: ["骨科"],
        alternatives: ["康复科"],
        redFlags: ["剧烈疼痛"],
        prep: ["记录疼痛时间"],
        faqs: [{ q: "手腕痛需要检查吗？", a: "医生可能建议X光检查。" }],
        tags: ["骨科"]
    },

    {
        slug: "chronic-cough",
        title: "久咳不愈挂什么科",
        summary: "长期咳嗽可能与慢性支气管炎、哮喘或过敏有关。",
        recommended: ["呼吸内科"],
        alternatives: ["耳鼻喉科"],
        redFlags: ["咳血", "持续高烧"],
        prep: ["记录咳嗽持续时间"],
        faqs: [{ q: "久咳不愈需要检查吗？", a: "医生可能建议胸片或肺功能检查。" }],
        tags: ["呼吸"]
    },

    {
        slug: "white-phlegm",
        title: "咳白痰挂什么科",
        summary: "咳白痰常见于慢性支气管炎或感冒。",
        recommended: ["呼吸内科"],
        alternatives: ["全科医学科"],
        redFlags: ["呼吸困难"],
        prep: ["记录痰的颜色和量"],
        faqs: [{ q: "咳白痰需要检查吗？", a: "持续时间较长建议就医。" }],
        tags: ["呼吸"]
    },

    {
        slug: "green-phlegm",
        title: "咳绿痰挂什么科",
        summary: "咳绿痰可能提示呼吸道感染。",
        recommended: ["呼吸内科"],
        alternatives: ["感染科"],
        redFlags: ["高烧", "呼吸困难"],
        prep: ["记录症状时间"],
        faqs: [{ q: "咳绿痰需要治疗吗？", a: "可能提示感染建议就医。" }],
        tags: ["呼吸"]
    },

    {
        slug: "itchy-throat",
        title: "喉咙痒挂什么科",
        summary: "喉咙痒常见于过敏或咽炎。",
        recommended: ["耳鼻喉科"],
        alternatives: ["呼吸内科"],
        redFlags: ["吞咽困难"],
        prep: ["记录症状时间"],
        faqs: [{ q: "喉咙痒需要检查吗？", a: "持续不缓解建议就医。" }],
        tags: ["耳鼻喉"]
    },

    {
        slug: "itchy-nose",
        title: "鼻子痒挂什么科",
        summary: "鼻子痒常见于过敏性鼻炎。",
        recommended: ["耳鼻喉科"],
        alternatives: ["呼吸内科"],
        redFlags: ["持续鼻出血"],
        prep: ["记录过敏史"],
        faqs: [{ q: "鼻子痒需要检查吗？", a: "医生可能建议过敏检查。" }],
        tags: ["耳鼻喉"]
    },

    {
        slug: "post-nasal-drip",
        title: "鼻涕倒流挂什么科",
        summary: "鼻涕倒流可能与鼻炎或鼻窦炎有关。",
        recommended: ["耳鼻喉科"],
        alternatives: ["呼吸内科"],
        redFlags: ["持续头痛"],
        prep: ["记录症状时间"],
        faqs: [{ q: "鼻涕倒流需要治疗吗？", a: "持续症状建议就医。" }],
        tags: ["耳鼻喉"]
    },

    {
        slug: "chest-tight",
        title: "胸口发紧挂什么科",
        summary: "胸口发紧可能与心脏或呼吸系统问题有关。",
        recommended: ["心内科"],
        alternatives: ["呼吸内科"],
        redFlags: ["胸痛", "呼吸困难"],
        prep: ["记录发作时间"],
        faqs: [{ q: "胸口发紧需要检查吗？", a: "医生可能建议心电图检查。" }],
        tags: ["心脏"]
    },

    {
        slug: "short-breath",
        title: "喘不过气挂什么科",
        summary: "喘不过气可能与肺部或心脏疾病有关。",
        recommended: ["呼吸内科"],
        alternatives: ["心内科"],
        redFlags: ["严重呼吸困难"],
        prep: ["记录症状出现时间"],
        faqs: [{ q: "喘不过气需要检查吗？", a: "医生可能建议肺功能检查。" }],
        tags: ["呼吸"]
    },

    {
        slug: "rapid-breath",
        title: "呼吸急促挂什么科",
        summary: "呼吸急促可能与肺部或心脏疾病有关。",
        recommended: ["呼吸内科"],
        alternatives: ["心内科"],
        redFlags: ["呼吸困难"],
        prep: ["记录症状时间"],
        faqs: [{ q: "呼吸急促需要检查吗？", a: "医生可能建议胸部检查。" }],
        tags: ["呼吸"]
    },

    {
        slug: "deep-breath-pain",
        title: "深呼吸胸痛挂什么科",
        summary: "深呼吸胸痛可能与胸膜或肌肉问题有关。",
        recommended: ["呼吸内科"],
        alternatives: ["骨科"],
        redFlags: ["持续胸痛"],
        prep: ["记录疼痛时间"],
        faqs: [{ q: "深呼吸胸痛需要检查吗？", a: "医生可能建议影像检查。" }],
        tags: ["呼吸"]
    },

    {
        slug: "bloating",
        title: "胃胀挂什么科",
        summary: "胃胀常见于消化不良或胃炎。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["持续腹痛"],
        prep: ["记录饮食情况"],
        faqs: [{ q: "胃胀需要检查吗？", a: "医生可能建议胃镜检查。" }],
        tags: ["消化"]
    },

    {
        slug: "post-meal-stomach-pain",
        title: "饭后胃痛挂什么科",
        summary: "饭后胃痛可能与胃炎或胃溃疡有关。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["持续疼痛"],
        prep: ["记录疼痛时间"],
        faqs: [{ q: "饭后胃痛需要检查吗？", a: "医生可能建议胃镜检查。" }],
        tags: ["消化"]
    },

    {
        slug: "empty-stomach-pain",
        title: "空腹胃痛挂什么科",
        summary: "空腹胃痛可能与胃溃疡或胃炎有关。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["剧烈疼痛"],
        prep: ["记录症状时间"],
        faqs: [{ q: "空腹胃痛需要检查吗？", a: "医生可能建议胃镜检查。" }],
        tags: ["消化"]
    },

    {
        slug: "lower-abdominal-pain",
        title: "小腹痛挂什么科",
        summary: "小腹痛可能与肠道或泌尿系统问题有关。",
        recommended: ["消化内科"],
        alternatives: ["泌尿外科"],
        redFlags: ["剧烈腹痛"],
        prep: ["记录疼痛位置"],
        faqs: [{ q: "小腹痛需要检查吗？", a: "医生可能建议腹部检查。" }],
        tags: ["消化"]
    },

    {
        slug: "right-lower-abdomen",
        title: "右下腹痛挂什么科",
        summary: "右下腹痛可能与阑尾炎有关。",
        recommended: ["普通外科"],
        alternatives: ["消化内科"],
        redFlags: ["持续剧痛"],
        prep: ["记录疼痛时间"],
        faqs: [{ q: "右下腹痛需要急诊吗？", a: "若疼痛剧烈建议尽快就医。" }],
        tags: ["消化"]
    },

    {
        slug: "left-lower-abdomen",
        title: "左下腹痛挂什么科",
        summary: "左下腹痛可能与肠道疾病有关。",
        recommended: ["消化内科"],
        alternatives: ["普通外科"],
        redFlags: ["持续腹痛"],
        prep: ["记录症状时间"],
        faqs: [{ q: "左下腹痛需要检查吗？", a: "医生可能建议影像检查。" }],
        tags: ["消化"]
    },

    {
        slug: "bowel-sound",
        title: "肚子咕噜响挂什么科",
        summary: "肚子咕噜响常见于肠胃蠕动增强。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["严重腹痛"],
        prep: ["记录饮食情况"],
        faqs: [{ q: "肚子咕噜响需要检查吗？", a: "持续症状建议就医。" }],
        tags: ["消化"]
    },

    {
        slug: "loose-stool",
        title: "大便不成形挂什么科",
        summary: "大便不成形可能与肠道功能紊乱有关。",
        recommended: ["消化内科"],
        alternatives: ["肛肠科"],
        redFlags: ["持续腹泻"],
        prep: ["记录排便情况"],
        faqs: [{ q: "大便不成形需要检查吗？", a: "医生可能建议肠道检查。" }],
        tags: ["消化"]
    },

    {
        slug: "black-poop",
        title: "拉黑便挂什么科",
        summary: "黑便可能提示消化道出血。",
        recommended: ["消化内科"],
        alternatives: ["急诊科"],
        redFlags: ["头晕", "乏力"],
        prep: ["记录排便情况"],
        faqs: [{ q: "黑便需要急诊吗？", a: "可能提示出血建议尽快就医。" }],
        tags: ["消化"]
    },

    {
        slug: "gas",
        title: "放屁多挂什么科",
        summary: "放屁多常见于肠胃消化问题。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["持续腹痛"],
        prep: ["记录饮食情况"],
        faqs: [{ q: "放屁多需要检查吗？", a: "持续症状建议就医。" }],
        tags: ["消化"]
    },

    {
        slug: "dry-cough",
        title: "干咳挂什么科",
        summary: "干咳可能与感冒、过敏或呼吸道感染有关。",
        recommended: ["呼吸内科"],
        alternatives: ["耳鼻喉科"],
        redFlags: ["持续高烧", "咳血"],
        prep: ["记录咳嗽持续时间"],
        faqs: [{ q: "干咳需要检查吗？", a: "持续不缓解建议就医。" }],
        tags: ["呼吸"]
    },

    {
        slug: "cough-with-phlegm",
        title: "咳嗽有痰挂什么科",
        summary: "咳嗽有痰可能与呼吸道感染或支气管炎有关。",
        recommended: ["呼吸内科"],
        alternatives: ["全科医学科"],
        redFlags: ["呼吸困难"],
        prep: ["记录痰的颜色"],
        faqs: [{ q: "咳嗽有痰需要检查吗？", a: "持续症状建议就医。" }],
        tags: ["呼吸"]
    },

    {
        slug: "throat-foreign-body",
        title: "喉咙有异物感挂什么科",
        summary: "喉咙异物感常见于咽炎或胃食管反流。",
        recommended: ["耳鼻喉科"],
        alternatives: ["消化内科"],
        redFlags: ["吞咽困难"],
        prep: ["记录症状时间"],
        faqs: [{ q: "喉咙异物感需要检查吗？", a: "医生可能建议喉镜检查。" }],
        tags: ["耳鼻喉"]
    },

    {
        slug: "breathing-difficulty",
        title: "呼吸不畅挂什么科",
        summary: "呼吸不畅可能与肺部或心脏问题有关。",
        recommended: ["呼吸内科"],
        alternatives: ["心内科"],
        redFlags: ["严重呼吸困难"],
        prep: ["记录发作时间"],
        faqs: [{ q: "呼吸不畅需要检查吗？", a: "医生可能建议肺功能检查。" }],
        tags: ["呼吸"]
    },

    {
        slug: "short-breath-walking",
        title: "走路气短挂什么科",
        summary: "走路气短可能与心肺功能问题有关。",
        recommended: ["呼吸内科"],
        alternatives: ["心内科"],
        redFlags: ["胸痛", "呼吸困难"],
        prep: ["记录发作时间"],
        faqs: [{ q: "走路气短需要检查吗？", a: "医生可能建议心肺检查。" }],
        tags: ["呼吸"]
    },

    {
        slug: "chest-tightness",
        title: "胸口闷挂什么科",
        summary: "胸口闷可能与心脏或呼吸系统疾病有关。",
        recommended: ["心内科"],
        alternatives: ["呼吸内科"],
        redFlags: ["胸痛", "呼吸困难"],
        prep: ["记录发作时间"],
        faqs: [{ q: "胸口闷需要检查吗？", a: "医生可能建议心电图。" }],
        tags: ["心脏"]
    },

    {
        slug: "deep-breath-hard",
        title: "深呼吸困难挂什么科",
        summary: "深呼吸困难可能与肺部或胸膜问题有关。",
        recommended: ["呼吸内科"],
        alternatives: ["心内科"],
        redFlags: ["严重胸痛"],
        prep: ["记录症状时间"],
        faqs: [{ q: "深呼吸困难需要检查吗？", a: "医生可能建议影像检查。" }],
        tags: ["呼吸"]
    },

    {
        slug: "gastric-acid",
        title: "胃酸过多挂什么科",
        summary: "胃酸过多常见于胃炎或胃食管反流。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["持续胃痛"],
        prep: ["记录饮食情况"],
        faqs: [{ q: "胃酸过多需要检查吗？", a: "医生可能建议胃镜检查。" }],
        tags: ["消化"]
    },

    {
        slug: "acid-reflux",
        title: "胃反酸挂什么科",
        summary: "胃反酸常见于胃食管反流。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["持续胸痛"],
        prep: ["记录症状时间"],
        faqs: [{ q: "胃反酸需要检查吗？", a: "医生可能建议胃镜。" }],
        tags: ["消化"]
    },

    {
        slug: "heartburn",
        title: "胃烧心挂什么科",
        summary: "胃烧心可能与胃酸反流有关。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["持续胃痛"],
        prep: ["记录饮食情况"],
        faqs: [{ q: "胃烧心需要检查吗？", a: "持续症状建议就医。" }],
        tags: ["消化"]
    },

    {
        slug: "stomach-discomfort",
        title: "胃不舒服挂什么科",
        summary: "胃部不适可能与胃炎或消化不良有关。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["持续腹痛"],
        prep: ["记录症状时间"],
        faqs: [{ q: "胃不舒服需要检查吗？", a: "医生可能建议胃镜。" }],
        tags: ["消化"]
    },

    {
        slug: "abdominal-cramp",
        title: "肚子绞痛挂什么科",
        summary: "腹部绞痛可能与肠道痉挛或炎症有关。",
        recommended: ["消化内科"],
        alternatives: ["普通外科"],
        redFlags: ["剧烈腹痛"],
        prep: ["记录疼痛位置"],
        faqs: [{ q: "肚子绞痛需要检查吗？", a: "医生可能建议腹部检查。" }],
        tags: ["消化"]
    },

    {
        slug: "post-meal-bloating",
        title: "饭后腹胀挂什么科",
        summary: "饭后腹胀常见于消化不良。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["持续腹痛"],
        prep: ["记录饮食情况"],
        faqs: [{ q: "饭后腹胀需要检查吗？", a: "持续症状建议就医。" }],
        tags: ["消化"]
    },

    {
        slug: "indigestion",
        title: "消化不良挂什么科",
        summary: "消化不良常见于胃肠功能紊乱。",
        recommended: ["消化内科"],
        alternatives: ["普通内科"],
        redFlags: ["持续腹痛"],
        prep: ["记录饮食情况"],
        faqs: [{ q: "消化不良需要检查吗？", a: "医生可能建议胃镜检查。" }],
        tags: ["消化"]
    },

    {
        slug: "loss-appetite",
        title: "食欲不振挂什么科",
        summary: "食欲不振可能与胃肠疾病或情绪问题有关。",
        recommended: ["消化内科"],
        alternatives: ["心理科"],
        redFlags: ["体重明显下降"],
        prep: ["记录症状时间"],
        faqs: [{ q: "食欲不振需要检查吗？", a: "持续症状建议就医。" }],
        tags: ["消化"]
    },

    {
        slug: "sudden-dizziness",
        title: "突然头晕挂什么科",
        summary: "突然头晕可能与血压或神经系统疾病有关。",
        recommended: ["神经内科"],
        alternatives: ["心内科"],
        redFlags: ["意识丧失"],
        prep: ["记录发作时间"],
        faqs: [{ q: "突然头晕需要检查吗？", a: "医生可能建议血压或影像检查。" }],
        tags: ["神经"]
    },

    {
        slug: "heavy-head",
        title: "头重脚轻挂什么科",
        summary: "头重脚轻可能与血压或贫血有关。",
        recommended: ["神经内科"],
        alternatives: ["心内科"],
        redFlags: ["意识模糊"],
        prep: ["记录症状时间"],
        faqs: [{ q: "头重脚轻需要检查吗？", a: "医生可能建议血压检查。" }],
        tags: ["神经"]
    },

    {
        slug: "scalp-numb",
        title: "头皮发麻挂什么科",
        summary: "头皮发麻可能与神经或颈椎问题有关。",
        recommended: ["神经内科"],
        alternatives: ["骨科"],
        redFlags: ["肢体无力"],
        prep: ["记录症状时间"],
        faqs: [{ q: "头皮发麻需要检查吗？", a: "医生可能建议神经检查。" }],
        tags: ["神经"]
    },

    {
        slug: "hand-numb",
        title: "手脚发麻挂什么科",
        summary: "手脚发麻可能与神经或循环问题有关。",
        recommended: ["神经内科"],
        alternatives: ["骨科"],
        redFlags: ["肢体无力"],
        prep: ["记录症状时间"],
        faqs: [{ q: "手脚发麻需要检查吗？", a: "医生可能建议神经检查。" }],
        tags: ["神经"]
    },

    {
        slug: "memory-loss",
        title: "记忆力下降挂什么科",
        summary: "记忆力下降可能与神经系统疾病或压力有关。",
        recommended: ["神经内科"],
        alternatives: ["心理科"],
        redFlags: ["明显认知下降"],
        prep: ["记录症状时间"],
        faqs: [{ q: "记忆力下降需要检查吗？", a: "医生可能建议认知测试。" }],
        tags: ["神经"]
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
