import { AnimatePresence, motion } from "motion/react";
import { useBetSlip } from "@/app/state/BetSlipContext";

/**
 * Floating bet slip summary bar. Slides in from the bottom once a user has
 * at least one active selection, and animates the count as picks are
 * added/removed. Sits above the bottom nav.
 */
export function BetSlipBar() {
  const { count, selections, clear } = useBetSlip();

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
          className="fixed bottom-[84px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[396px]"
        >
          <div
            className="flex items-center justify-between rounded-[16px] border px-[16px] py-[12px] shadow-lg backdrop-blur-md"
            style={{ backgroundColor: "rgba(10,18,33,0.92)", borderColor: "#8F620A" }}
          >
            <div className="flex items-center gap-[10px]">
              <motion.span
                key={count}
                initial={{ scale: 1.4 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                className="flex items-center justify-center size-[24px] rounded-full text-[12px] font-bold"
                style={{ backgroundColor: "#F2D33D", color: "#070d18" }}
              >
                {count}
              </motion.span>
              <span className="text-[#e5eafa] text-[13px] font-medium">
                {count === 1 ? "1 selection" : `${count} selections`}
              </span>
            </div>
            <div className="flex items-center gap-[8px]">
              <button
                type="button"
                onClick={clear}
                className="text-[12px] text-[#e5eafa]/60 hover:text-[#e5eafa] transition-colors px-[8px] py-[6px]"
              >
                Clear
              </button>
              <motion.button
                type="button"
                whileTap={{ scale: 0.94 }}
                className="rounded-[10px] px-[16px] py-[8px] text-[13px] font-bold"
                style={{ backgroundColor: "#F2D33D", color: "#070d18" }}
              >
                Bet Slip
              </motion.button>
            </div>
          </div>
          <span className="sr-only">{selections.map((s) => s.marketLabel).join(", ")}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
