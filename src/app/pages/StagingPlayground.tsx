import type { ReactNode } from "react";
import { Link } from "react-router";
import { OddsButton } from "@/app/components/betting/OddsButton";
import { BetSlipBar } from "@/app/components/betting/BetSlipBar";
import { useBetSlip } from "@/app/state/BetSlipContext";

const tokens = [
  { name: "Midnight (bg)", value: "#070d18" },
  { name: "Lavender (text)", value: "#e5eafa" },
  { name: "Gold (accent, dark)", value: "#F2D33D" },
  { name: "Gold (solid button)", value: "#8F620A" },
  { name: "Positive/up", value: "#5CE595" },
  { name: "Negative/down", value: "#FF9457" },
];

function Section({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-[#e5eafa] text-[16px] font-bold mb-1">{title}</h2>
      {note && <p className="text-[#e5eafa]/50 text-[12px] mb-4 max-w-[560px]">{note}</p>}
      {!note && <div className="mb-4" />}
      {children}
    </section>
  );
}

function ResetButton() {
  const { clear, count } = useBetSlip();
  if (count === 0) return null;
  return (
    <button
      onClick={clear}
      className="text-[12px] text-[#e5eafa]/50 hover:text-[#e5eafa] underline underline-offset-2"
    >
      Reset selections ({count})
    </button>
  );
}

export default function StagingPlayground() {
  return (
    <div className="max-w-[720px] mx-auto px-6 py-10 pb-32">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[#F2D33D] text-[12px] font-bold tracking-wide uppercase mb-1">
            Ludicrum &middot; Staging
          </p>
          <h1 className="text-[#e5eafa] text-[24px] font-bold">Component Playground</h1>
          <p className="text-[#e5eafa]/50 text-[13px] mt-1">
            Isolated, interactive previews for design review. Not part of the live app shell.
          </p>
        </div>
        <Link to="/" className="text-[#e5eafa]/70 hover:text-[#e5eafa] text-[13px] shrink-0">
          &larr; Back to Arena
        </Link>
      </div>

      <Section
        title="Odds Button &mdash; horizontal (Match Winner / 1X2)"
        note="Tap to select. Tapping the same pick again deselects it; tapping a different outcome in the same market swaps the pick. Only one active selection per market."
      >
        <div className="flex gap-2 max-w-[360px]">
          <OddsButton layout="horizontal" trend="up" selection={{ id: "demo-h-1", marketId: "demo-h", marketLabel: "Demo Match Winner", meaning: "1", odds: "5.50" }} />
          <OddsButton layout="horizontal" selection={{ id: "demo-h-x", marketId: "demo-h", marketLabel: "Demo Match Winner", meaning: "x", odds: "0.30" }} />
          <OddsButton layout="horizontal" trend="down" selection={{ id: "demo-h-2", marketId: "demo-h", marketLabel: "Demo Match Winner", meaning: "2", odds: "3.10" }} />
        </div>
      </Section>

      <Section
        title="Odds Button &mdash; vertical (Totals / Handicap lines)"
        note="Same interaction model, stacked layout used in market grids."
      >
        <div className="flex gap-2 max-w-[240px]">
          <OddsButton layout="vertical" trend="up" selection={{ id: "demo-v-1", marketId: "demo-v", marketLabel: "Demo Total Goals", meaning: "1", odds: "0.5" }} />
          <OddsButton layout="vertical" selection={{ id: "demo-v-x", marketId: "demo-v", marketLabel: "Demo Total Goals", meaning: "x", odds: "0.5" }} />
          <OddsButton layout="vertical" trend="down" selection={{ id: "demo-v-2", marketId: "demo-v", marketLabel: "Demo Total Goals", meaning: "2", odds: "0.5" }} />
        </div>
      </Section>

      <Section
        title="Disabled state"
        note="For suspended/closed markets. No press animation, no click handler."
      >
        <div className="flex gap-2 max-w-[360px]">
          <OddsButton layout="horizontal" disabled selection={{ id: "demo-d-1", marketId: "demo-d", marketLabel: "Suspended", meaning: "1", odds: "—" }} />
        </div>
      </Section>

      <Section title="Bet slip summary bar" note="Appears once a selection is made; try the buttons above.">
        <ResetButton />
      </Section>

      <Section title="Color tokens">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {tokens.map((t) => (
            <div key={t.value} className="flex items-center gap-3 rounded-[10px] border border-[#19387e] p-3">
              <span className="size-[28px] rounded-[6px] border border-white/10 shrink-0" style={{ backgroundColor: t.value }} />
              <div className="min-w-0">
                <p className="text-[#e5eafa] text-[12px] font-medium truncate">{t.name}</p>
                <p className="text-[#e5eafa]/40 text-[11px]">{t.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <BetSlipBar />
    </div>
  );
}
