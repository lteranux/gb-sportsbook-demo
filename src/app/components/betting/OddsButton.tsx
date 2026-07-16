import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useBetSlip, type Selection } from "@/app/state/BetSlipContext";

type OddsButtonProps = {
  selection: Selection;
  layout?: "horizontal" | "vertical";
  trend?: "up" | "down" | "none";
  disabled?: boolean;
};

// "Event Lines" (horizontal 1/X/2 buttons inside the top Events carousel cards) follow the
// Figma "Market Selection / Secondary" spec: dark navy default, warm-orange hover wash, gold
// selected wash, with a small trend arrow in the top-left corner instead of an edge bar.
const EVENT_LINE_DEFAULT_BG = "linear-gradient(90deg, rgb(7, 13, 24) 0%, rgb(7, 13, 24) 100%)";
const EVENT_LINE_HOVER_BG =
  "linear-gradient(179.412deg, rgba(255, 148, 87, 0.15) 1.596%, rgba(153, 56, 0, 0.15) 98.637%), linear-gradient(90deg, rgb(7, 13, 24) 0%, rgb(7, 13, 24) 100%)";
const EVENT_LINE_SELECTED_BG =
  "linear-gradient(179.412deg, rgba(242, 211, 61, 0.25) 1.596%, rgba(242, 211, 61, 0.1) 98.637%), linear-gradient(90deg, rgb(7, 13, 24) 0%, rgb(7, 13, 24) 100%)";

/**
 * Shared, interactive odds-selection button.
 *
 * Replaces the static "Market Selection" markup exported by Figma Make.
 * Wire this in wherever a 1/X/2, handicap, or totals selection is rendered.
 * Selecting a pick toggles it in the shared BetSlipContext (one active pick
 * per market, tap again to deselect). Different markets/cards each get their
 * own marketId, so picks across different Event cards stay independent and
 * can all be selected at the same time.
 */
export function OddsButton({ selection, layout = "vertical", trend = "none", disabled = false }: OddsButtonProps) {
  const { isSelected, toggleSelection } = useBetSlip();
  const selected = isSelected(selection.id);
  const [hovered, setHovered] = useState(false);
  const isEventLine = layout === "horizontal";

  const trendColor = trend === "up" ? "#5CE595" : trend === "down" ? "#FF9457" : "transparent";
  const eventLineBg = selected ? EVENT_LINE_SELECTED_BG : hovered ? EVENT_LINE_HOVER_BG : EVENT_LINE_DEFAULT_BG;

  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={() => toggleSelection(selection)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-name="Market Selection"
      data-selected={selected}
      whileTap={disabled ? undefined : { scale: 0.92 }}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      animate={
        isEventLine
          ? { borderColor: selected ? "#F2D33D" : "rgba(25,56,126,0)" }
          : { backgroundColor: selected ? "#2a1a06" : "#070d18", borderColor: selected ? "#F2D33D" : "rgba(25,56,126,0)" }
      }
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      style={isEventLine ? { backgroundImage: eventLineBg, transition: "background-image 200ms ease" } : undefined}
      className={
        "relative rounded-[8px] border flex-[1_0_0] min-w-px overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer " +
        (layout === "horizontal" ? "h-[34px]" : "h-[50px] min-w-[32px]")
      }
      aria-pressed={selected}
      aria-label={`${selection.marketLabel}: ${selection.meaning} at ${selection.odds}`}
    >
      {trend !== "none" &&
        (isEventLine ? (
          <svg className="absolute left-[4px] top-[4px]" width="8" height="8" viewBox="0 0 8 8" aria-hidden>
            <polygon points={trend === "up" ? "4,0 8,8 0,8" : "0,0 8,0 4,8"} fill={trendColor} />
          </svg>
        ) : (
          <span className="absolute left-0 top-0 h-full w-[2px]" style={{ backgroundColor: trendColor }} aria-hidden />
        ))}
      {layout === "horizontal" ? (
        <div className="flex items-center justify-between p-[8px] size-full">
          <span className="text-[#e5eafa] text-[12px] font-medium">{selection.meaning}</span>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={selection.odds}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.18 }}
              className="text-[14px] font-bold"
              style={{ color: selected ? "#F2D33D" : "#e5eafa" }}
            >
              {selection.odds}
            </motion.span>
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-[4px] px-[4px] py-[8px] size-full">
          <span className="text-[#e5eafa] text-[12px] font-medium">{selection.meaning}</span>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={selection.odds}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.18 }}
              className="text-[14px] font-bold"
              style={{ color: selected ? "#F2D33D" : "#e5eafa" }}
            >
              {selection.odds}
            </motion.span>
          </AnimatePresence>
        </div>
      )}
    </motion.button>
  );
}
