import { useState, type ReactNode } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { OddsButton } from "@/app/components/betting/OddsButton";
import { ResponsiveCanvas } from "@/app/components/layout/ResponsiveCanvas";
import svgPaths from "@/imports/Arena/svg-ix7egy8oxi";
import imgLogo from "@/imports/Arena/d0ccfc9d7de6e5f391d48e473fdcb22944a3fe8b.png";
import imgImage4 from "@/imports/Arena/f1230ccdf2ebb14552dea38d8355bc7dda2b346f.png";
import imgImage75 from "@/imports/Arena/13bd95055cfe407972587f0e178e30db5f530538.png";
import imgImage76 from "@/imports/Arena/479da2f0239ba4057850ef8d2d27fa7785584842.png";

// Small self-contained accordion (grid-rows trick), matching the pattern already
// established in the Arena screen, so market groups can expand/collapse smoothly
// without measuring height in JS.
function AccordionBody({ expanded, children }: { expanded: boolean; children: ReactNode }) {
  return (
    <div
      className="grid w-full transition-[grid-template-rows] duration-300 ease-in-out"
      style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden min-h-0">{children}</div>
    </div>
  );
}

function BackIcon() {
  const navigate = useNavigate();
  return (
    <motion.button
      type="button"
      onClick={() => navigate(-1)}
      whileTap={{ scale: 0.88 }}
      className="relative shrink-0 size-[20px] cursor-pointer"
      aria-label="Go back"
    >
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p38da2c00} fill="var(--fill-0, #E5EAFA)" transform="rotate(-90 10 10)" />
      </svg>
    </motion.button>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header Breadcrumb">
      <BackIcon />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Stadium">
        <svg className="relative shrink-0 size-[16px]" fill="none" viewBox="0 0 14 13.7763">
          <path d={svgPaths.p2402b900} fill="var(--fill-0, #FF9457)" />
        </svg>
      </div>
      <div className="flex gap-[4px] items-center text-[12px] font-medium whitespace-nowrap overflow-hidden">
        <span className="text-[#acafbb]">Soccer</span>
        <span className="text-[#acafbb]">/</span>
        <span className="text-[#acafbb]">England</span>
        <span className="text-[#acafbb]">/</span>
        <span className="text-[#e5eafa] text-ellipsis overflow-hidden">England Premier League</span>
      </div>
    </div>
  );
}

type MiniMatch = { id: string; home: string; away: string; homeFlag: string; awayFlag: string; time: string };

const LEAGUE_MATCHES: MiniMatch[] = [
  { id: "1", home: "Manchester", away: "Barcelona", homeFlag: imgLogo, awayFlag: imgImage4, time: "Jun 19th 02:59PM" },
  { id: "2", home: "Liverpool", away: "Chelsea", homeFlag: imgLogo, awayFlag: imgImage4, time: "Jun 19th 04:00PM" },
  { id: "3", home: "Arsenal", away: "Tottenham", homeFlag: imgImage75, awayFlag: imgImage76, time: "Jun 19th 06:30PM" },
  { id: "4", home: "Man City", away: "Everton", homeFlag: imgLogo, awayFlag: imgImage4, time: "Jun 20th 01:00PM" },
  { id: "5", home: "USA", away: "Australia", homeFlag: imgImage75, awayFlag: imgImage76, time: "Jun 20th 08:00PM" },
];

function LeagueMatchesCarousel({ activeId }: { activeId: string }) {
  return (
    <div className="no-scrollbar flex gap-[8px] items-center overflow-x-auto relative shrink-0 w-full" data-name="Leage Matches Carousel">
      {LEAGUE_MATCHES.map((m) => (
        <Link
          key={m.id}
          to={`/match/${m.id}`}
          className={
            "flex flex-col gap-[4px] items-start px-[12px] py-[8px] rounded-[12px] shrink-0 min-w-[140px] transition-colors " +
            (m.id === activeId ? "bg-[#19387e]" : "bg-[#17274b] hover:bg-[#1c2f5a]")
          }
        >
          <span className="text-[#acafbb] text-[10px] font-medium">{m.time}</span>
          <span className="text-[#e5eafa] text-[12px] font-bold whitespace-nowrap">
            {m.home} vs {m.away}
          </span>
        </Link>
      ))}
    </div>
  );
}

const SCORE_TABS = ["Info", "Stats", "H2H"] as const;
type ScoreTab = (typeof SCORE_TABS)[number];

function ScoreCard({ home, away, homeLogo, awayLogo }: { home: string; away: string; homeLogo: string; awayLogo: string }) {
  const [tab, setTab] = useState<ScoreTab>("Info");

  return (
    <div className="bg-[#17274b] rounded-[16px] flex flex-col gap-[16px] items-center p-[16px] relative shrink-0 w-full" data-name="Score Card">
      <div className="bg-[#5ce595] flex gap-[2px] h-[18px] items-center justify-center px-[4px] rounded-[4px] shrink-0 self-start">
        <p className="text-[#070d18] text-[10px] font-bold">LIVE</p>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-center gap-[8px] flex-1">
          <img alt="" src={homeLogo} className="size-[40px] object-cover rounded-[8px]" />
          <span className="text-[#e5eafa] text-[14px] font-bold text-center">{home}</span>
        </div>
        <div className="flex flex-col items-center gap-[4px] px-[12px]">
          <span className="text-[#acafbb] text-[10px] font-medium">93&apos; 2nd Half</span>
          <span className="text-[#e5eafa] text-[24px] font-bold whitespace-nowrap">1 - 1</span>
        </div>
        <div className="flex flex-col items-center gap-[8px] flex-1">
          <img alt="" src={awayLogo} className="size-[40px] object-cover rounded-[8px]" />
          <span className="text-[#e5eafa] text-[14px] font-bold text-center">{away}</span>
        </div>
      </div>

      <div className="flex gap-[4px] items-center w-full border-t border-[#19387e] pt-[12px]">
        {SCORE_TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={
              "flex-1 text-[12px] font-bold py-[6px] rounded-[100px] transition-colors cursor-pointer " +
              (tab === t ? "bg-[#19387e] text-[#e5eafa]" : "text-[#acafbb]")
            }
          >
            {t}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="w-full text-[#acafbb] text-[12px]"
        >
          {tab === "Info" && <p>World Cup 2026 &middot; England Premier League &middot; Kickoff 02:59PM</p>}
          {tab === "Stats" && <p>Possession 54% - 46% &middot; Shots on target 6 - 3 &middot; Corners 5 - 2</p>}
          {tab === "H2H" && <p>Last 5 meetings: {home} won 3, {away} won 1, 1 draw.</p>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

type MarketGroup = {
  id: string;
  title: string;
  render: () => ReactNode;
};

function MatchWinnerMarket({ marketId }: { marketId: string }) {
  return (
    <div className="flex gap-[4px] items-center w-full">
      <OddsButton layout="horizontal" selection={{ id: `${marketId}-1`, marketId, marketLabel: "Match Winner", meaning: "1", odds: "5.50" }} />
      <OddsButton layout="horizontal" selection={{ id: `${marketId}-x`, marketId, marketLabel: "Match Winner", meaning: "x", odds: "0.30" }} />
      <OddsButton layout="horizontal" selection={{ id: `${marketId}-2`, marketId, marketLabel: "Match Winner", meaning: "2", odds: "3.10" }} />
    </div>
  );
}

function OverUnderMarket({ marketId }: { marketId: string }) {
  const lines = ["1.5", "2.5", "3.5"];
  const [line, setLine] = useState("2.5");
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <div className="flex gap-[4px] items-center w-full">
        {lines.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLine(l)}
            className={
              "flex-1 text-[12px] font-bold py-[6px] rounded-[8px] transition-colors cursor-pointer " +
              (line === l ? "bg-[#19387e] text-[#e5eafa]" : "bg-[#070d18] text-[#acafbb]")
            }
          >
            {l}
          </button>
        ))}
      </div>
      <div className="flex gap-[4px] items-center w-full">
        <OddsButton
          layout="horizontal"
          selection={{ id: `${marketId}-over-${line}`, marketId: `${marketId}-${line}`, marketLabel: `Total Goals O/U ${line}`, meaning: "Over", odds: "1.85" }}
        />
        <OddsButton
          layout="horizontal"
          selection={{ id: `${marketId}-under-${line}`, marketId: `${marketId}-${line}`, marketLabel: `Total Goals O/U ${line}`, meaning: "Under", odds: "1.95" }}
        />
      </div>
    </div>
  );
}

function BothTeamsToScoreMarket({ marketId }: { marketId: string }) {
  return (
    <div className="flex gap-[4px] items-center w-full">
      <OddsButton layout="horizontal" selection={{ id: `${marketId}-yes`, marketId, marketLabel: "Both Teams To Score", meaning: "Yes", odds: "1.70" }} />
      <OddsButton layout="horizontal" selection={{ id: `${marketId}-no`, marketId, marketLabel: "Both Teams To Score", meaning: "No", odds: "2.05" }} />
    </div>
  );
}

function MarketAccordion({ title, expanded, onToggle, children }: { title: string; expanded: boolean; onToggle: () => void; children: ReactNode }) {
  return (
    <div className="bg-[#17274b] rounded-[16px] w-full overflow-hidden" data-name="Market Card">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between px-[12px] py-[10px] w-full cursor-pointer"
      >
        <span className="text-[#e5eafa] text-[14px] font-bold">{title}</span>
        <motion.div animate={{ rotate: expanded ? 0 : 180 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
          <svg className="size-[16px]" fill="none" viewBox="0 0 12 6.99792">
            <path clipRule="evenodd" d={svgPaths.p38da2c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" />
          </svg>
        </motion.div>
      </button>
      <AccordionBody expanded={expanded}>
        <div className="px-[12px] pb-[12px]">{children}</div>
      </AccordionBody>
    </div>
  );
}

function Markets({ matchId }: { matchId: string }) {
  const groups: MarketGroup[] = [
    { id: "1x2", title: "Match Winner", render: () => <MatchWinnerMarket marketId={`match-${matchId}-1x2`} /> },
    { id: "ou", title: "Total Goals Over/Under", render: () => <OverUnderMarket marketId={`match-${matchId}-ou`} /> },
    { id: "btts", title: "Both Teams To Score", render: () => <BothTeamsToScoreMarket marketId={`match-${matchId}-btts`} /> },
  ];
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ "1x2": true, ou: true, btts: false });
  const toggle = (id: string) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="flex flex-col gap-[12px] items-start w-full" data-name="Markets">
      {groups.map((g) => (
        <MarketAccordion key={g.id} title={g.title} expanded={!!expanded[g.id]} onToggle={() => toggle(g.id)}>
          {g.render()}
        </MarketAccordion>
      ))}
    </div>
  );
}

export default function MatchPage() {
  const params = useParams<{ matchId: string }>();
  const matchId = params.matchId ?? "1";
  const match = LEAGUE_MATCHES.find((m) => m.id === matchId);
  const home = match?.home ?? "Manchester";
  const away = match?.away ?? "Barcelona";
  const homeLogo = match?.homeFlag ?? imgLogo;
  const awayLogo = match?.awayFlag ?? imgImage4;

  return (
    <div className="min-h-screen w-full flex justify-center" style={{ backgroundColor: "#070d18" }} data-name="Game Page">
      <div className="w-full max-w-[428px] relative">
        <ResponsiveCanvas designWidth={428}>
          <div className="flex flex-col items-start px-[24px] pt-[24px] pb-[48px] gap-[24px] w-full" data-name="Layout">
            <Breadcrumb />
            <LeagueMatchesCarousel activeId={matchId} />
            <ScoreCard home={home} away={away} homeLogo={homeLogo} awayLogo={awayLogo} />
            <Markets matchId={matchId} />
          </div>
        </ResponsiveCanvas>
      </div>
    </div>
  );
}
