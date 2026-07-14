import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type Selection = {
  id: string;
  marketId: string;
  marketLabel: string;
  meaning: string;
  odds: string;
};

type BetSlipContextValue = {
  selections: Selection[];
  isSelected: (id: string) => boolean;
  toggleSelection: (selection: Selection) => void;
  removeSelection: (id: string) => void;
  clear: () => void;
  count: number;
};

const BetSlipContext = createContext<BetSlipContextValue | null>(null);

export function BetSlipProvider({ children }: { children: ReactNode }) {
  const [selections, setSelections] = useState<Selection[]>([]);

  const toggleSelection = useCallback((selection: Selection) => {
    setSelections((prev) => {
      const exists = prev.find((s) => s.id === selection.id);
      if (exists) {
        return prev.filter((s) => s.id !== selection.id);
      }
      // Only one active pick per market (standard sportsbook behavior:
      // picking a new outcome on the same market replaces the old one).
      const withoutSameMarket = prev.filter((s) => s.marketId !== selection.marketId);
      return [...withoutSameMarket, selection];
    });
  }, []);

  const removeSelection = useCallback((id: string) => {
    setSelections((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const clear = useCallback(() => setSelections([]), []);

  const isSelected = useCallback(
    (id: string) => selections.some((s) => s.id === id),
    [selections],
  );

  const value = useMemo(
    () => ({ selections, isSelected, toggleSelection, removeSelection, clear, count: selections.length }),
    [selections, isSelected, toggleSelection, removeSelection, clear],
  );

  return <BetSlipContext.Provider value={value}>{children}</BetSlipContext.Provider>;
}

export function useBetSlip() {
  const ctx = useContext(BetSlipContext);
  if (!ctx) {
    throw new Error("useBetSlip must be used within a BetSlipProvider");
  }
  return ctx;
}
