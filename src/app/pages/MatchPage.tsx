import Arena from "@/imports/Arena/index";

/**
 * Match Page — a duplicate of the "Live" tab, reached by tapping any Event
 * Card. It reuses the real Arena screen (rather than a hand-copied version)
 * so it always stays in sync with whatever Live actually looks like; it just
 * seeds the top tab switcher to "live" on load instead of "arena".
 */
export default function MatchPage() {
  return <Arena initialTopTab="live" />;
}
