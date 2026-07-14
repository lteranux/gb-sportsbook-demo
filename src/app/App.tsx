import { lazy, Suspense } from "react";

const Arena = lazy(() => import("@/imports/Arena/index"));

export default function App() {
  return (
    <div className="min-h-screen w-full flex justify-center" style={{ backgroundColor: "#070d18" }}>
      <div className="w-full max-w-[428px] relative">
        <Suspense fallback={<div className="h-screen w-full" style={{ backgroundColor: "#070d18" }} />}>
          <Arena />
        </Suspense>
      </div>
    </div>
  );
}
