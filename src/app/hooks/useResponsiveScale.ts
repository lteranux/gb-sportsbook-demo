import { useEffect, useState } from "react";

/**
 * Returns a scale factor (<= 1) that shrinks a fixed-width design canvas to
 * fit the current viewport. Used to make pixel-perfect Figma exports (built
 * at a fixed mobile width, e.g. 428px) work down to smaller devices (e.g.
 * 360px Android) without rewriting every hardcoded width in the export.
 */
export function useResponsiveScale(designWidth: number) {
  const [scale, setScale] = useState(() => {
    if (typeof window === "undefined") return 1;
    return Math.min(1, window.innerWidth / designWidth);
  });

  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / designWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [designWidth]);

  return scale;
}
