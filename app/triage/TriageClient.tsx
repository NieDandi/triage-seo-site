"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ageOptions,
  bodyAreas,
  emergencyFlags,
  resolveResult,
  sexOptions,
  symptomsByArea,
  type AgeGroup,
  type BodyArea,
  type Sex,
} from "../../data/triage";
import { departments } from "../../data/departments";

function cx(...arr: Array<string | false | undefined>) {
  return arr.filter(Boolean).join(" ");
}

function deptToSlug(name: string) {
  const hit = departments.find((d) => d.name === name);
  return hit ? `/department/${hit.slug}` : null;
}

const Btn = ({
  children,
  onClick,
  selected,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cx(
      "w-full text-left rounded-xl border px-4 py-3 transition",
      disabled ? "opacity-60 cursor-not-allowed" : "hover:bg-slate-50",
      selected && "border-cyan-600 ring-2 ring-cyan-200"
    )}
  >
    {children}
  </button>
);

const LinkBtn = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center rounded-xl border border-cyan-600 bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
  >
    {label}
  </Link>
);

const LinkBtnGhost = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
  >
    {label}
  </Link>
);

export default function TriageClient() {
  const [emergencyPicked, setEmergencyPicked] = useState<Record<string, boolean>>({});
  const emergencySelected = useMemo(
    () => Object.values(emergencyPicked).some(Boolean),
    [emergencyPicked]
  );

  const [age, setAge] = useState<AgeGroup | null>(null);
  const [sex, setSex] = useState<Sex | null>(null);
  const [area, setArea] = useState<BodyArea | null>(null);
  const [symptomId, setSymptomId] = useState<string | null>(null);

  const canGo = {
    age: !emergencySelected,
    sex: !emergencySelected && !!age,
    area: !emergencySelected && !!age && !!sex,
    symptom: !emergencySelected && !!age && !!sex && !!area,
    result: !emergencySelected && !!age && !!sex && !!area && !!symptomId,
  };

  const result = useMemo(() => {
    if (!age || !sex || !area || !symptomId) return null;
    return resolveResult({ emergencySelected, age, sex, area, symptomId });
  }, [emergencySelected, age, sex, area, symptomId]);

  const reset = () => {
    setEmergencyPicked({});
    setAge(null);
    setSex(null);
    setArea(null);
    setSymptomId(null);
  };

  return (
    <div className="space-y-6">
      <div
        className={cx(
          "rounded-2xl border p-4",
          emergencySelected ? "border-red-300 bg-red-50" : "border-slate-200 bg-white"
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className={cx("text-lg font-semibold", emergencySelected && "text-red-700")}>
              第 1 步：急症筛查（优先看这里）
            </div>
            <div className="text-sm text-slate-600 mt-1">
              如符合任意一项，建议<strong className="text-red-700">立即急诊</strong>，不要继续等待。
            </div>
          </div>
          <button onClick={reset} className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-50">
            重新开始
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2">
          {emergencyFlags.map((f) => {
            const checked = !!emergencyPicked[f.id];
            return (
              <label
                key={f.id}
                className={cx(
                  "flex items-start gap-3 rounded-xl border px-4 py-3 cursor-pointer",
                  checked ? "border-red-300 bg-white" : "border-slate-200 bg-white"
                )}
              >
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-red-600"
                  checked={checked}
                  onChange={(e) =>
                    setEmergencyPicked((p) => ({ ...p, [f.id]: e.target.checked }))
                  }
                />
                <span className={cx("text-sm", checked && "text-red-700 font-medium")}>
                  {f.label}
                </span>
              </label>
            );
          })}
        </div>

        {emergencySelected && (
          <div className="mt-4 rounded-xl border border-red-300 bg-white p-4">
            <div className="text-2xl font-semibold text-red-700">建议立即急诊</div>
            <div className="text-sm text-slate-700 mt-2">
              若情况危急请拨打 <span className="font-semibold text-red-700">120</span>。
            </div>
            <div className="mt-3 flex gap-2 flex-wrap">
              <LinkBtn href="/triage" label="继续查看急症提示" />
              <LinkBtnGhost href="/" label="回到首页" />
            </div>
          </div>
        )}
      </div>

      <div className={cx("rounded-2xl border p-4", !canGo.age && "opacity-60")}>
        <div className="text-lg font-semibold">第 2 步：选择年龄</div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          {ageOptions.map((o) => (
            <Btn key={o.id} onClick={() => setAge(o.id)} selected={age === o.id} disabled={!canGo.age}>
              <div className="font-medium">{o.label}</div>
            </Btn>
          ))}
        </div>
      </div>

      <div className={cx("rounded-2xl border p-4", !canGo.sex && "opacity-60")}>
        <div className="text-lg font-semibold">第 3 步：选择性别</div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          {sexOptions.map((o) => (
            <Btn key={o.id} onClick={() => setSex(o.id)} selected={sex === o.id} disabled={!canGo.sex}>
              <div className="font-medium">{o.label}</div>
            </Btn>
          ))}
        </div>
      </div>

      <div className={cx("rounded-2xl border p-4", !canGo.area && "opacity-60")}>
        <div className="text-lg font-semibold">第 4 步：哪里不舒服？</div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          {bodyAreas.map((o) => (
            <Btn
              key={o.id}
              onClick={() => {
                if (!canGo.area) return;
                setArea(o.id);
                setSymptomId(null);
              }}
              selected={area === o.id}
              disabled={!canGo.area}
            >
              <div className="font-medium">{o.label}</div>
              {o.desc && <div className="text-sm text-slate-600 mt-1">{o.desc}</div>}
            </Btn>
          ))}
        </div>
      </div>

      <div className={cx("rounded-2xl border p-4", !canGo.symptom && "opacity-60")}>
        <div className="text-lg font-semibold">第 5 步：选择最接近的症状</div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          {area &&
            (symptomsByArea[area] ?? []).map((o) => (
              <Btn
                key={o.id}
                onClick={() => setSymptomId(o.id)}
                selected={symptomId === o.id}
                disabled={!canGo.symptom}
              >
                <div className="font-medium">{o.label}</div>
              </Btn>
            ))}
        </div>
      </div>

      <div className={cx("rounded-2xl border p-4", !canGo.result && "opacity-60")}>
        <div className="text-lg font-semibold">结果：推荐挂号科室</div>

        {!result ? (
          <div className="mt-4 text-sm text-slate-600">完成选择后显示推荐科室与急诊提示。</div>
        ) : (
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="text-2xl font-semibold">{result.title}</div>

              <div className="mt-3">
                <div className="text-sm text-slate-600">推荐科室（可点击）</div>
                <div className="mt-1 flex flex-wrap gap-2">
                  {result.recommended.map((d) => {
                    const href = deptToSlug(d);
                    const pill = (
                      <span className="rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 px-3 py-1 text-sm">
                        {d}
                      </span>
                    );
                    return href ? (
                      <Link key={d} href={href} className="hover:opacity-90">
                        {pill}
                      </Link>
                    ) : (
                      <span key={d}>{pill}</span>
                    );
                  })}
                </div>
              </div>

              {result.alternatives && result.alternatives.length > 0 && (
                <div className="mt-3">
                  <div className="text-sm text-slate-600">备选科室</div>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {result.alternatives.map((d) => (
                      <span
                        key={d}
                        className="rounded-full bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 text-sm"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(result.primaryLink || (result.secondaryLinks && result.secondaryLinks.length > 0)) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {result.primaryLink && <LinkBtn href={result.primaryLink.href} label={result.primaryLink.label} />}
                  {result.secondaryLinks?.map((l) => (
                    <LinkBtnGhost key={l.href + l.label} href={l.href} label={l.label} />
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <div className="text-lg font-semibold text-red-700">何时需要急诊（重点）</div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-800">
                {result.redFlags.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <div className="text-lg font-semibold">就诊前准备</div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-800">
                {result.prep.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              {result.note && <div className="mt-3 text-sm text-slate-600">{result.note}</div>}
            </div>
          </div>
        )}
      </div>

      <div className="text-xs text-slate-500">
        提示：不同医院科室命名可能略有差异，结果仅供导诊参考。
      </div>
    </div>
  );
}