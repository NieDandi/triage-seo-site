export type FAQItem = {
  slug: string;
  question: string;
  shortAnswer: string;
};

export const faqs: FAQItem[] = [
  {
    slug: "kesou-xian-kan-nage-ke",
    question: "咳嗽先看哪个科？",
    shortAnswer: "咳嗽一般优先考虑呼吸内科；若伴随咽痛、鼻塞、流涕，也可结合全科或耳鼻喉科判断。",
  },
  {
    slug: "toutong-kan-shenme-ke",
    question: "头痛看什么科？",
    shortAnswer: "头痛多数可先看神经内科；如果伴随发热、外伤、视力异常或突发剧烈头痛，应尽快就医。",
  },
  {
    slug: "weitong-kan-xiaohua-neike-ma",
    question: "胃痛看消化内科吗？",
    shortAnswer: "胃痛多数情况下可以先看消化内科；若疼痛剧烈、持续加重或伴随黑便、呕血，应及时就医。",
  },
];