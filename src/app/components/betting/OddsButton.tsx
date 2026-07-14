import { AnimatePresence, motion } from "motion/react";
import { useBetSlip, type Selection } from "@/app/state/BetSlipContext";

type OddsButtonProps = {
  selection: Selection;
  layout?: "horizontal" | "vertical";
  trend?: "up" | "down" | "none";
  disabled?: boolean;
};

/**
 * Shared, interactive odds-selection button.
 *
 * Replaces the static "Market Selection" markup exported by Figma Make.
 * Wire this in wherever a 1/X/2, handicap, or totals selection is rendered.
 * Selecting a pick toggles it in the shared BetSlipContext (one active pick
 * per market, tap again to deselect), with press/selected micro-animations
 * and a brief highlight pulse whenever the odds value changes.
 */
export function OddsButton({ selection, layout = "vertical", trend = "none", disabled = false }: OddsButtonProps) {
  const { isSelected, toggleSelection } = useBetSlip();
  const selected = isSelected(selection.id);

  const trendColor = trend === "up" ? "#5CE595" : trend === "down" ? "#FF9457" : "transparent";

  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={() => toggleSelection(selection)}
      data-name="Market Selection"
      data-selected={selected}
      whileTap={disabled ? undefined : { scale: 0.92 }}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      animate={{
        backgroundColor: selected ? "#2a1a06" : "#070d18",
        borderColor: selected ? "#F2D33D" : "rgba(25,56,126,0)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={
        "relative rounded-[8px] border flex-[1_0_0] min-w-px overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer " +
        (layout === "horizontal" ? "h-[34px]" : "h-[50px] min-w-[32px]")
      }
      aria-pressed={selected}
      aria-label={`${selection.marketLabel}: ${selection.meaning} at ${selection.odds}`}
    >
      {trend !== "none" && (
        <span
          className="absolute left-0 top-0 h-full w-[2px]"
          style={{ backgroundColor: trendColor }}
          aria-hidden
        />
      )}
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
