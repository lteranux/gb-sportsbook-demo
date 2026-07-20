import { lazy, Suspense, type ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { BetSlipProvider } from "@/app/state/BetSlipContext";
import { BetSlipBar } from "@/app/components/betting/BetSlipBar";

const Arena = lazy(() => import("@/imports/Arena/index"));
const StagingPlayground = lazy(() => import("@/app/pages/StagingPlayground"));
const MatchPage = lazy(() => import("@/app/pages/MatchPage"));

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex justify-center" style={{ backgroundColor: "#070d18" }}>
      <div className="w-full max-w-[428px] relative">
        <Suspense fallback={<div className="h-screen w-full" style={{ backgroundColor: "#070d18" }} />}>
          {children}
        </Suspense>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BetSlipProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Shell>
                <Arena />
                <BetSlipBar />
              </Shell>
            }
          />
          <Route
            path="/match"
            element={
              <Shell>
                <MatchPage />
                <BetSlipBar />
              </Shell>
            }
          />
          <Route
            path="/staging"
            element={
              <div className="min-h-screen w-full" style={{ backgroundColor: "#0b1220" }}>
                <Suspense fallback={<div className="h-screen w-full" style={{ backgroundColor: "#0b1220" }} />}>
                  <StagingPlayground />
                </Suspense>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </BetSlipProvider>
  );
}
