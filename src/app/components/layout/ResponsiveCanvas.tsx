import { useEffect, useRef, useState, type ReactNode } from "react";
import { useResponsiveScale } from "@/app/hooks/useResponsiveScale";

/**
 * Wraps a fixed-width design canvas (e.g. a Figma export built at 428px)
 * and proportionally scales it down to fit viewports narrower than that,
 * down to small Android widths (~360px) and below, without needing to
 * rewrite every hardcoded pixel value inside.
 *
 * Content keeps its natural (unscaled) layout height for scroll purposes —
 * the outer wrapper is sized to the *scaled* height so the page doesn't
 * leave extra blank space below the shrunk content.
 *
 * Note: elements using `position: fixed` inside this wrapper will become
 * fixed relative to the scaled canvas instead of the real viewport (a
 * side effect of CSS transforms creating a new containing block). Keep
 * viewport-fixed UI (bottom nav, floating bars) as siblings outside this
 * component rather than children.
 */
export function ResponsiveCanvas({ designWidth, children }: { designWidth: number; children: ReactNode }) {
  const scale = useResponsiveScale(designWidth);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const el = contentRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContentHeight(entry.contentRect.height);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ width: "100%", height: contentHeight ? contentHeight * scale : undefined }}>
      <div
        ref={contentRef}
        style={{
          width: designWidth,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
