import { symptoms } from "./symptoms";

export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const s of symptoms) {
    for (const t of s.tags) set.add(t);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
}