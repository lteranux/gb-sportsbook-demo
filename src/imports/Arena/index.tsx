import svgPaths from "./svg-ix7egy8oxi";
import imgAvatar from "./a4a6c592b9f38098dd52ffb2f36fa85f6693d506.png";
import imgImage71 from "./0cb3380f1edc50c608a167abfd7265dc9aceabe3.png";
import imgImage75 from "./13bd95055cfe407972587f0e178e30db5f530538.png";
import imgImage76 from "./479da2f0239ba4057850ef8d2d27fa7785584842.png";
import imgPikachuLightning2 from "./5c35338483fae5d76cc9aaf51243282150c6cd4b.png";
import imgLightningIcon from "./527f72c47d38faeb8c0c5f0814bfadce2bbe05a1.png";
import imgChatGptImageMar262026014740Am7 from "./b784d5a3be819f6d0608315e20b848ec4a9a6593.png";
import imgLogo from "./d0ccfc9d7de6e5f391d48e473fdcb22944a3fe8b.png";
import imgImage4 from "./f1230ccdf2ebb14552dea38d8355bc7dda2b346f.png";
import imgImage from "./826666c7393c5014835bd966c79cdab16cf61001.png";
import imgImage1 from "./42f7345b0cc1333ba08edd751f7dea6ea3eb9305.png";
import imgImage2 from "./44b2ac76f25ce2ba2fcfd2c5afbdd20412db7d36.png";
import imgImage63 from "./efdc52c35bf5cd278232f274b4d3a6fb080d03d2.png";
import imgImage64 from "./f13ed85fa1f33075142e6e343135d2c36a9a08cf.png";
import imgImage57 from "./cfb6d9c5586be808da100dd6c6618d63e8a44c0b.png";
import imgImage58 from "./ff0a86266ab412f0ee20b2d1e87b1f41f906071a.png";
import imgImage59 from "./abdfaee4468653816a901f7ce087689bd74feb37.png";
import imgImage60 from "./b80a103bc87ceb73f04fe33805150eb3193f423e.png";
import imgImage61 from "./84c13f93648a5300f55ea4786dcfd8e7f0be9092.png";
import imgBottomNavigationMobile from "./999dc029575f09683ae54053a49a9f69f397c899.png";
import { imgGroup } from "./svg-vzcwu";
import { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { OddsButton } from "@/app/components/betting/OddsButton";
import { ResponsiveCanvas } from "@/app/components/layout/ResponsiveCanvas";

type BottomMenuItemProps = {
  active?: boolean;
  onClick?: () => void;
};

type TopTab = "arena" | "live" | "prematch";

function Menu() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Menu">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Menu">
          <path d={svgPaths.p618d600} fill="var(--fill-0, #E5EAFA)" id="Line 3" />
          <path d={svgPaths.p27673280} fill="var(--fill-0, #E5EAFA)" id="Line 2" />
          <path d={svgPaths.p3d04000} fill="var(--fill-0, #E5EAFA)" id="Line 1" />
        </g>
      </svg>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Left">
      <div className="content-stretch flex items-center px-[6px] relative shrink-0 size-[44px]" data-name="_Hamburger Menu animation">
        <Menu />
      </div>
      <div className="overflow-clip relative shrink-0 size-[44px]" data-name="GemBet Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="GemBet Mark Primary">
            <path d={svgPaths.p70ff300} fill="var(--fill-0, #E5EAFA)" id="Vector" />
            <path d={svgPaths.p16866c00} fill="var(--fill-0, #E5EAFA)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Eye() {
  return (
    <button className="cursor-pointer h-[44px] max-w-[380px] relative rounded-[8px] shrink-0 w-[28px]" data-name="Eye">
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center max-w-[inherit] px-[16px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Visible">
            <div className="absolute inset-[18.75%_0_24.31%_0]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.83252">
                <path d={svgPaths.p416900} fill="var(--fill-0, #E5EAFA)" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function Amount() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-center whitespace-nowrap" data-name="Amount">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[10px]">
        <p className="leading-[14px]">SGD</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">2,532.00</p>
      </div>
    </div>
  );
}

function Down() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Down">
          <path clipRule="evenodd" d={svgPaths.p4665d00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AmountAndArrow() {
  return (
    <div className="content-stretch flex gap-[2px] h-[44px] items-center relative shrink-0" data-name="Amount and Arrow">
      <Amount />
      <Down />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center max-w-[380px] px-[16px] py-[8px] relative rounded-[100px] shrink-0 w-[62px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 62 32' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.9498e-14 3.2081 -7.5419 1.781e-13 31 -7.3186e-13)'><stop stop-color='rgba(229,234,250,0.7)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(143,98,10,0)' offset='0.5'/><stop stop-color='rgba(143,87,10,1)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(242, 211, 61) 0%, rgb(242, 211, 61) 100%)" }} data-name="Button">
      <div aria-hidden className="absolute border border-[#e5eafa] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#070d18] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">Deposit</p>
      </div>
    </div>
  );
}

function DepositButton() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-center justify-center relative shrink-0 w-[62px]" data-name="Deposit Button">
      <Button />
    </div>
  );
}

function BalanceDeposit() {
  return (
    <div className="content-stretch flex gap-[4px] h-[44px] items-center relative shrink-0" data-name="Balance+Deposit">
      <AmountAndArrow />
      <DepositButton />
    </div>
  );
}

function HeaderActions() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="HeaderActions">
      <div className="content-stretch flex items-center justify-center pr-[6px] relative rounded-[100px] shrink-0 w-[193px]" data-name="_Balance and Animation / Mobile">
        <div aria-hidden className="absolute border border-[#19387e] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <Eye />
        <BalanceDeposit />
      </div>
      <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[44px]" data-name="_Profile Menu animation Mobile">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-px top-1/2" data-name="Close">
          <div className="absolute inset-[19.29%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.614167 0.614211">
              <path d={svgPaths.p29882080} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[6px] size-[32px] top-[6px]" data-name="Avatar">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[428px]">
      <div className="shrink-0 sticky top-0 w-full" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 428 60' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.8999999761581421'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-33.5 32.953 -1005 372.95 181 -10.781)'><stop stop-color='rgba(25,56,126,1)' offset='0'/><stop stop-color='rgba(20,41,86,0.5)' offset='0.42313'/><stop stop-color='rgba(14,25,45,0)' offset='0.84625'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(7, 13, 24) 0%, rgb(7, 13, 24) 100%)" }} data-name="Header Navigation">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
            <Left />
            <HeaderActions />
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalContainer({ active }: { active: boolean }) {
  const tint = active ? "#ff9457" : "#e5eafa";
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] relative shrink-0" data-name="Horizontal Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Stadium">
        <div className="absolute inset-[6.25%_6.25%_7.65%_6.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.7763">
            <path d={svgPaths.p2402b900} fill={`var(--fill-0, ${tint})`} id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center transition-colors whitespace-nowrap" style={{ color: tint }}>
        <p className="leading-[18px]">Arena</p>
      </div>
    </div>
  );
}

function HorizontalContainer1({ active }: { active: boolean }) {
  const tint = active ? "#ff9457" : "#e5eafa";
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] relative shrink-0" data-name="Horizontal Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Live">
        <div className="absolute inset-[12.47%_6.32%_12.44%_6.32%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9769 12.0142">
            <path d={svgPaths.p5f4e300} fill={`var(--fill-0, ${tint})`} id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center transition-colors whitespace-nowrap" style={{ color: tint }}>
        <p className="leading-[18px]">Live</p>
      </div>
    </div>
  );
}

function HorizontalContainer2({ active }: { active: boolean }) {
  const tint = active ? "#ff9457" : "#e5eafa";
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] relative shrink-0" data-name="Horizontal Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Prematch Calendar">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.pf88d80} fill={`var(--fill-0, ${tint})`} id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center transition-colors whitespace-nowrap" style={{ color: tint }}>
        <p className="leading-[18px]">Prematch</p>
      </div>
    </div>
  );
}

function TabHighlight({ active }: { active: boolean }) {
  return (
    <div
      className={`content-stretch flex flex-col h-[11px] items-start relative shrink-0 w-full transition-opacity duration-200 ${active ? "opacity-100" : "opacity-0"}`}
      data-name="Highlight"
    >
      <div className="blur-[5px] h-[8px] relative shrink-0 w-full" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 77 8' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-3.5429e-7 -0.38095 4.3148 -2.6075e-7 38.5 8)'><stop stop-color='rgba(255,148,87,1)' offset='0'/><stop stop-color='rgba(255,148,87,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="Line highlight" />
      <div className="bg-gradient-to-l from-[rgba(255,148,87,0)] h-[2px] relative rounded-tl-[100px] rounded-tr-[8px] shrink-0 to-[rgba(255,148,87,0)] via-1/2 via-[#ff9457] w-full" data-name="Line highlight" />
    </div>
  );
}

function Container({ activeTopTab, onSelectTopTab }: { activeTopTab: TopTab; onSelectTopTab: (tab: TopTab) => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <button
        type="button"
        onClick={() => onSelectTopTab("arena")}
        className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-center justify-end min-w-px relative cursor-pointer"
        data-name="Tabs New - Sports"
      >
        <HorizontalContainer active={activeTopTab === "arena"} />
        <TabHighlight active={activeTopTab === "arena"} />
      </button>
      <button
        type="button"
        onClick={() => onSelectTopTab("live")}
        className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-center justify-end min-w-px relative cursor-pointer"
        data-name="Tabs New - Sports"
      >
        <HorizontalContainer1 active={activeTopTab === "live"} />
        <TabHighlight active={activeTopTab === "live"} />
      </button>
      <button
        type="button"
        onClick={() => onSelectTopTab("prematch")}
        className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-center justify-end min-w-px relative cursor-pointer"
        data-name="Tabs New - Sports"
      >
        <HorizontalContainer2 active={activeTopTab === "prematch"} />
        <TabHighlight active={activeTopTab === "prematch"} />
      </button>
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-white h-[180px] overflow-clip relative rounded-[16px] shrink-0 w-[380px]" data-name="Banner">
      <div className="absolute h-[476px] left-0 top-[-38px] w-[380px]" data-name="image 71">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage71} />
      </div>
    </div>
  );
}

function Banner1() {
  return (
    <div className="bg-white h-[180px] overflow-clip relative rounded-[16px] shrink-0 w-[380px]" data-name="Banner">
      <div className="absolute h-[476px] left-0 top-[-38px] w-[380px]" data-name="image 71">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage71} />
      </div>
    </div>
  );
}

function BannerCarousel() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="Banner Carousel">
      <Banner />
      <Banner1 />
    </div>
  );
}

function Dots() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Dots">
      <div className="bg-[#e5eafa] relative rounded-[100px] shrink-0 size-[8px]" />
      <div className="bg-[#19387e] relative rounded-[100px] shrink-0 size-[8px]" />
      <div className="bg-[#19387e] relative rounded-[100px] shrink-0 size-[8px]" />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Time">
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Live">
          <div className="absolute inset-[12.47%_6.32%_12.44%_6.32%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4827 9.01068">
              <path d={svgPaths.p5df4580} fill="var(--fill-0, #070D18)" id="Icon" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">Jun 19th</span>
            <span className="leading-[14px]">{` 02:59PM`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function League() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="League">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#acafbb] text-[12px] text-ellipsis whitespace-nowrap">World Cup 2026</p>
      <div className="relative shrink-0 size-[16px]" data-name="Soccer">
        <div className="absolute inset-[8.33%_10.06%_8.33%_8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0566 13.334">
            <path d={svgPaths.p37a0f600} fill="var(--fill-0, #ACAFBB)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimeLeague() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Time & League">
      <Time />
      <League />
    </div>
  );
}

function Favorite() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Favorite">
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[20px]" data-name="Favorite icon">
          <div className="absolute inset-[13.54%_8.33%_13.54%_8.34%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14.5832">
              <path d={svgPaths.p31fcbd80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function TimeAndLive() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[268px]" data-name="Time and Live">
      <TimeLeague />
      <Favorite />
    </div>
  );
}

function EventInfoCounter() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Event Info Counter">
      <TimeAndLive />
    </div>
  );
}

function Team() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Team">
      <div className="relative shrink-0 size-[20px]" data-name="Team Flag">
        <div className="absolute inset-0 rounded-[16px]" data-name="image 75">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage75} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[14px] text-center text-ellipsis whitespace-nowrap">USA</p>
    </div>
  );
}

function TeamScore() {
  return (
    <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Team Score">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="1">
      <Team />
      <TeamScore />
    </div>
  );
}

function Team1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Team">
      <div className="relative shrink-0 size-[20px]" data-name="Team Flag">
        <div className="absolute inset-0 rounded-[16px]" data-name="image 75">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage76} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[14px] text-center text-ellipsis whitespace-nowrap">Australia</p>
    </div>
  );
}

function TeamScore1() {
  return (
    <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Team Score">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="2">
      <Team1 />
      <TeamScore1 />
    </div>
  );
}

function MatchInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Match info">
      <Component />
      <Component1 />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_16901)" id="Info">
          <path d={svgPaths.p18641600} id="Vector" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 4.66667H7.00667" id="Vector_3" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_16901">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#acafbb] text-[12px] whitespace-nowrap">Live Betting 1X2</p>
        <Info />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function BetInputs() {
  const marketId = "market-1";
  const marketLabel = "Match Winner";
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="bet inputs">
      <OddsButton
        layout="horizontal"
        trend="up"
        selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "5.50" }}
      />
      <OddsButton
        layout="horizontal"
        selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.30" }}
      />
      <OddsButton
        layout="horizontal"
        trend="down"
        selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "3.10" }}
      />
    </div>
  );
}

function Market() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Market">
      <Container1 />
      <BetInputs />
    </div>
  );
}

function Time1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Time">
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Live">
          <div className="absolute inset-[12.47%_6.32%_12.44%_6.32%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4827 9.01068">
              <path d={svgPaths.p5df4580} fill="var(--fill-0, #070D18)" id="Icon" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">Jun 19th</span>
            <span className="leading-[14px]">{` 02:59PM`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function League1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="League">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#acafbb] text-[12px] text-ellipsis whitespace-nowrap">World Cup 2026</p>
      <div className="relative shrink-0 size-[16px]" data-name="Soccer">
        <div className="absolute inset-[8.33%_10.06%_8.33%_8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0566 13.334">
            <path d={svgPaths.p37a0f600} fill="var(--fill-0, #ACAFBB)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimeLeague1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Time & League">
      <Time1 />
      <League1 />
    </div>
  );
}

function Favorite1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Favorite">
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[20px]" data-name="Favorite icon">
          <div className="absolute inset-[13.54%_8.33%_13.54%_8.34%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14.5832">
              <path d={svgPaths.p31fcbd80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function TimeAndLive1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[268px]" data-name="Time and Live">
      <TimeLeague1 />
      <Favorite1 />
    </div>
  );
}

function EventInfoCounter1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Event Info Counter">
      <TimeAndLive1 />
    </div>
  );
}

function Team2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Team">
      <div className="relative shrink-0 size-[20px]" data-name="Team Flag">
        <div className="absolute inset-0 rounded-[16px]" data-name="image 75">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage75} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[14px] text-center text-ellipsis whitespace-nowrap">USA</p>
    </div>
  );
}

function TeamScore2() {
  return (
    <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Team Score">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="1">
      <Team2 />
      <TeamScore2 />
    </div>
  );
}

function Team3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Team">
      <div className="relative shrink-0 size-[20px]" data-name="Team Flag">
        <div className="absolute inset-0 rounded-[16px]" data-name="image 75">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage76} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[14px] text-center text-ellipsis whitespace-nowrap">Australia</p>
    </div>
  );
}

function TeamScore3() {
  return (
    <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Team Score">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="2">
      <Team3 />
      <TeamScore3 />
    </div>
  );
}

function MatchInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Match info">
      <Component2 />
      <Component3 />
    </div>
  );
}

function Info1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_16901)" id="Info">
          <path d={svgPaths.p18641600} id="Vector" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 4.66667H7.00667" id="Vector_3" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_16901">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#acafbb] text-[12px] whitespace-nowrap">Live Betting 1X2</p>
        <Info1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
    </div>
  );
}

function BetInputs1() {
  const marketId = "market-2";
  const marketLabel = "Live Betting 1X2";
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="bet inputs">
      <OddsButton
        layout="horizontal"
        trend="up"
        selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "5.50" }}
      />
      <OddsButton
        layout="horizontal"
        selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.30" }}
      />
      <OddsButton
        layout="horizontal"
        trend="down"
        selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "3.10" }}
      />
    </div>
  );
}

function Market1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Market">
      <Container3 />
      <BetInputs1 />
    </div>
  );
}

function Time2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Time">
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Live">
          <div className="absolute inset-[12.47%_6.32%_12.44%_6.32%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4827 9.01068">
              <path d={svgPaths.p5df4580} fill="var(--fill-0, #070D18)" id="Icon" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">Jun 19th</span>
            <span className="leading-[14px]">{` 02:59PM`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function League2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="League">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#acafbb] text-[12px] text-ellipsis whitespace-nowrap">World Cup 2026</p>
      <div className="relative shrink-0 size-[16px]" data-name="Soccer">
        <div className="absolute inset-[8.33%_10.06%_8.33%_8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0566 13.334">
            <path d={svgPaths.p37a0f600} fill="var(--fill-0, #ACAFBB)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimeLeague2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Time & League">
      <Time2 />
      <League2 />
    </div>
  );
}

function Favorite2() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Favorite">
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[20px]" data-name="Favorite icon">
          <div className="absolute inset-[13.54%_8.33%_13.54%_8.34%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14.5832">
              <path d={svgPaths.p31fcbd80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function TimeAndLive2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[268px]" data-name="Time and Live">
      <TimeLeague2 />
      <Favorite2 />
    </div>
  );
}

function EventInfoCounter2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Event Info Counter">
      <TimeAndLive2 />
    </div>
  );
}

function Team4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Team">
      <div className="relative shrink-0 size-[20px]" data-name="Team Flag">
        <div className="absolute inset-0 rounded-[16px]" data-name="image 75">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage75} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[14px] text-center text-ellipsis whitespace-nowrap">USA</p>
    </div>
  );
}

function TeamScore4() {
  return (
    <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Team Score">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="1">
      <Team4 />
      <TeamScore4 />
    </div>
  );
}

function Team5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Team">
      <div className="relative shrink-0 size-[20px]" data-name="Team Flag">
        <div className="absolute inset-0 rounded-[16px]" data-name="image 75">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage76} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[14px] text-center text-ellipsis whitespace-nowrap">Australia</p>
    </div>
  );
}

function TeamScore5() {
  return (
    <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Team Score">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="2">
      <Team5 />
      <TeamScore5 />
    </div>
  );
}

function MatchInfo2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Match info">
      <Component4 />
      <Component5 />
    </div>
  );
}

function Info2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_16901)" id="Info">
          <path d={svgPaths.p18641600} id="Vector" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 4.66667H7.00667" id="Vector_3" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_16901">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#acafbb] text-[12px] whitespace-nowrap">Live Betting 1X2</p>
        <Info2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container6 />
    </div>
  );
}

function BetInputs2() {
  const marketId = "market-3";
  const marketLabel = "Live Betting 1X2";
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="bet inputs">
      <OddsButton
        layout="horizontal"
        trend="up"
        selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "5.50" }}
      />
      <OddsButton
        layout="horizontal"
        selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.30" }}
      />
      <OddsButton
        layout="horizontal"
        trend="down"
        selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "3.10" }}
      />
    </div>
  );
}

function Market2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Market">
      <Container5 />
      <BetInputs2 />
    </div>
  );
}

function Time3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Time">
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Live">
          <div className="absolute inset-[12.47%_6.32%_12.44%_6.32%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4827 9.01068">
              <path d={svgPaths.p5df4580} fill="var(--fill-0, #070D18)" id="Icon" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">Jun 19th</span>
            <span className="leading-[14px]">{` 02:59PM`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function League3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="League">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#acafbb] text-[12px] text-ellipsis whitespace-nowrap">World Cup 2026</p>
      <div className="relative shrink-0 size-[16px]" data-name="Soccer">
        <div className="absolute inset-[8.33%_10.06%_8.33%_8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0566 13.334">
            <path d={svgPaths.p37a0f600} fill="var(--fill-0, #ACAFBB)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimeLeague3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Time & League">
      <Time3 />
      <League3 />
    </div>
  );
}

function Favorite3() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Favorite">
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[20px]" data-name="Favorite icon">
          <div className="absolute inset-[13.54%_8.33%_13.54%_8.34%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14.5832">
              <path d={svgPaths.p31fcbd80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function TimeAndLive3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[268px]" data-name="Time and Live">
      <TimeLeague3 />
      <Favorite3 />
    </div>
  );
}

function EventInfoCounter3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Event Info Counter">
      <TimeAndLive3 />
    </div>
  );
}

function Team6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Team">
      <div className="relative shrink-0 size-[20px]" data-name="Team Flag">
        <div className="absolute inset-0 rounded-[16px]" data-name="image 75">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage75} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[14px] text-center text-ellipsis whitespace-nowrap">USA</p>
    </div>
  );
}

function TeamScore6() {
  return (
    <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Team Score">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="1">
      <Team6 />
      <TeamScore6 />
    </div>
  );
}

function Team7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Team">
      <div className="relative shrink-0 size-[20px]" data-name="Team Flag">
        <div className="absolute inset-0 rounded-[16px]" data-name="image 75">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage76} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[14px] text-center text-ellipsis whitespace-nowrap">Australia</p>
    </div>
  );
}

function TeamScore7() {
  return (
    <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Team Score">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="2">
      <Team7 />
      <TeamScore7 />
    </div>
  );
}

function MatchInfo3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Match info">
      <Component6 />
      <Component7 />
    </div>
  );
}

function Info3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_16901)" id="Info">
          <path d={svgPaths.p18641600} id="Vector" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 4.66667H7.00667" id="Vector_3" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_16901">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#acafbb] text-[12px] whitespace-nowrap">Live Betting 1X2</p>
        <Info3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function BetInputs3() {
  const marketId = "market-4";
  const marketLabel = "Live Betting 1X2";
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="bet inputs">
      <OddsButton
        layout="horizontal"
        trend="up"
        selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "5.50" }}
      />
      <OddsButton
        layout="horizontal"
        selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.30" }}
      />
      <OddsButton
        layout="horizontal"
        trend="down"
        selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "3.10" }}
      />
    </div>
  );
}

function Market3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Market">
      <Container7 />
      <BetInputs3 />
    </div>
  );
}

function Time4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Time">
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Live">
          <div className="absolute inset-[12.47%_6.32%_12.44%_6.32%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4827 9.01068">
              <path d={svgPaths.p5df4580} fill="var(--fill-0, #070D18)" id="Icon" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">Jun 19th</span>
            <span className="leading-[14px]">{` 02:59PM`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function League4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="League">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#acafbb] text-[12px] text-ellipsis whitespace-nowrap">World Cup 2026</p>
      <div className="relative shrink-0 size-[16px]" data-name="Soccer">
        <div className="absolute inset-[8.33%_10.06%_8.33%_8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0566 13.334">
            <path d={svgPaths.p37a0f600} fill="var(--fill-0, #ACAFBB)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimeLeague4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Time & League">
      <Time4 />
      <League4 />
    </div>
  );
}

function Favorite4() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Favorite">
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[20px]" data-name="Favorite icon">
          <div className="absolute inset-[13.54%_8.33%_13.54%_8.34%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14.5832">
              <path d={svgPaths.p31fcbd80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function TimeAndLive4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[268px]" data-name="Time and Live">
      <TimeLeague4 />
      <Favorite4 />
    </div>
  );
}

function EventInfoCounter4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Event Info Counter">
      <TimeAndLive4 />
    </div>
  );
}

function Team8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Team">
      <div className="relative shrink-0 size-[20px]" data-name="Team Flag">
        <div className="absolute inset-0 rounded-[16px]" data-name="image 75">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage75} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[14px] text-center text-ellipsis whitespace-nowrap">USA</p>
    </div>
  );
}

function TeamScore8() {
  return (
    <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Team Score">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="1">
      <Team8 />
      <TeamScore8 />
    </div>
  );
}

function Team9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Team">
      <div className="relative shrink-0 size-[20px]" data-name="Team Flag">
        <div className="absolute inset-0 rounded-[16px]" data-name="image 75">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage76} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[14px] text-center text-ellipsis whitespace-nowrap">Australia</p>
    </div>
  );
}

function TeamScore9() {
  return (
    <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[30px]" data-name="Team Score">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="2">
      <Team9 />
      <TeamScore9 />
    </div>
  );
}

function MatchInfo4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Match info">
      <Component8 />
      <Component9 />
    </div>
  );
}

function Info4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_16901)" id="Info">
          <path d={svgPaths.p18641600} id="Vector" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 4.66667H7.00667" id="Vector_3" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_16901">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#acafbb] text-[12px] whitespace-nowrap">Live Betting 1X2</p>
        <Info4 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container10 />
    </div>
  );
}

function BetInputs4() {
  const marketId = "market-5";
  const marketLabel = "Live Betting 1X2";
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="bet inputs">
      <OddsButton
        layout="horizontal"
        trend="up"
        selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "5.50" }}
      />
      <OddsButton
        layout="horizontal"
        selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.30" }}
      />
      <OddsButton
        layout="horizontal"
        trend="down"
        selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "3.10" }}
      />
    </div>
  );
}

function Market4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Market">
      <Container9 />
      <BetInputs4 />
    </div>
  );
}

function Events() {
  return (
    <div
      className="no-scrollbar flex gap-[12px] items-start relative shrink-0 w-[380px] overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
      data-name="Events"
    >
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#17274b] gap-[8px] items-center min-h-[188px] min-w-[300px] px-[16px] py-[12px] relative rounded-[16px] shrink-0 to-[#19387e] w-[300px] snap-start" data-name="Event card">
        <div aria-hidden className="absolute border border-[#19387e] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <EventInfoCounter />
        <MatchInfo />
        <Market />
      </div>
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#17274b] gap-[8px] items-center min-h-[188px] min-w-[300px] px-[16px] py-[12px] relative rounded-[16px] shrink-0 to-[#19387e] w-[300px] snap-start" data-name="Event card">
        <div aria-hidden className="absolute border border-[#19387e] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <EventInfoCounter1 />
        <MatchInfo1 />
        <Market1 />
      </div>
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#17274b] gap-[8px] items-center min-h-[188px] min-w-[300px] px-[16px] py-[12px] relative rounded-[16px] shrink-0 to-[#19387e] w-[300px] snap-start" data-name="Event card">
        <div aria-hidden className="absolute border border-[#19387e] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <EventInfoCounter2 />
        <MatchInfo2 />
        <Market2 />
      </div>
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#17274b] gap-[8px] items-center min-h-[188px] min-w-[300px] px-[16px] py-[12px] relative rounded-[16px] shrink-0 to-[#19387e] w-[300px] snap-start" data-name="Event card">
        <div aria-hidden className="absolute border border-[#19387e] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <EventInfoCounter3 />
        <MatchInfo3 />
        <Market3 />
      </div>
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#17274b] gap-[8px] items-center min-h-[188px] min-w-[300px] px-[16px] py-[12px] relative rounded-[16px] shrink-0 to-[#19387e] w-[300px] snap-start" data-name="Event card">
        <div aria-hidden className="absolute border border-[#19387e] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <EventInfoCounter4 />
        <MatchInfo4 />
        <Market4 />
      </div>
    </div>
  );
}

function Content({ activeTopTab, onSelectTopTab }: { activeTopTab: TopTab; onSelectTopTab: (tab: TopTab) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <div className="relative shrink-0 w-[428px]" data-name="Tab Navigation - Sports">
        <div className="content-stretch flex flex-col items-start overflow-x-auto overflow-y-clip px-[16px] relative rounded-[inherit] size-full">
          <Container activeTopTab={activeTopTab} onSelectTopTab={onSelectTopTab} />
        </div>
        <div aria-hidden className="absolute border-[#19387e] border-b border-solid inset-0 pointer-events-none" />
      </div>
      {activeTopTab === "arena" && (
        <>
          <BannerCarousel />
          <Dots />
        </>
      )}
      <Events />
      <div className="absolute bg-gradient-to-l from-[#070d18] h-[186px] left-[385px] to-[rgba(7,13,24,0)] top-[288px] w-[19px]" data-name="shadow" />
    </div>
  );
}

function Target() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Target">
      <div className="absolute inset-[-77.91%_-75%_-72.09%_-75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <g id="Target">
            <g filter="url(#filter0_f_1_16877)" id="Ellipse 2">
              <circle cx="30" cy="30" fill="var(--fill-0, #FF9457)" fillOpacity="0.6" r="10" />
            </g>
            <path d={svgPaths.p1b30a800} fill="var(--fill-0, #FF9457)" id="Vector" />
            <path d={svgPaths.pe055080} fill="var(--fill-0, white)" id="Vector_2" opacity="0.3" />
            <path d={svgPaths.p589c400} fill="var(--fill-0, black)" id="Vector_3" opacity="0.3" />
            <path d={svgPaths.p30edfd00} fill="var(--fill-0, white)" id="Vector (Stroke)" />
            <path d={svgPaths.p3bc51940} fill="var(--fill-0, black)" id="Vector_4" opacity="0.15" />
            <path d={svgPaths.p5aae900} fill="var(--fill-0, #FF9457)" id="Vector (Stroke)_2" />
            <path d={svgPaths.p2ba532f0} fill="var(--fill-0, #FF9457)" id="Vector (Stroke)_3" />
            <path d={svgPaths.p3bb9ce80} fill="var(--fill-0, #FF9457)" id="Vector (Stroke)_4" />
            <path d={svgPaths.p15f70780} fill="var(--fill-0, #FF9457)" id="Vector (Stroke)_5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="60" id="filter0_f_1_16877" width="60" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_16877" stdDeviation="10" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function LiveWinningsTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[380px]" data-name="Live Winnings title">
      <Target />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[18px] whitespace-nowrap">
        <p className="leading-[22px]">Shortcuts</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <LiveWinningsTitle />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Arena & Sports Menu Shortcuts">
        <div className="content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.4)] flex flex-col gap-[2px] h-[56px] items-center justify-center min-w-[60px] px-[4px] py-[8px] relative rounded-[16px] shrink-0 w-[60px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 60 56' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.8223e-14 5.6142 -7.2986 3.1168e-13 30 -1.2808e-12)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(23, 39, 75) 0%, rgb(23, 39, 75) 100%)" }} data-name="Sports Shortcuts">
          <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="All Games">
            <div className="absolute inset-[12.5%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={svgPaths.p1ec82180} fill="var(--fill-0, #E5EAFA)" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
            <p className="leading-[14px]">All Games</p>
          </div>
        </div>
        <div className="content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.4)] flex flex-col gap-[2px] h-[56px] items-center justify-center min-w-[60px] px-[4px] py-[8px] relative rounded-[16px] shrink-0 w-[60px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 60 56' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.8223e-14 5.6142 -7.2986 3.1168e-13 30 -1.2808e-12)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(23, 39, 75) 0%, rgb(23, 39, 75) 100%)" }} data-name="Sports Shortcuts">
          <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="My Bets">
            <div className="absolute inset-[10.41%_4.16%_4.17%_16.67%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.834 17.0849">
                <path d={svgPaths.p18c372c0} fill="var(--fill-0, #E5EAFA)" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
            <p className="leading-[14px]">My Bets</p>
          </div>
        </div>
        <div className="content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.4)] flex flex-col gap-[2px] h-[56px] items-center justify-center min-w-[60px] px-[4px] py-[8px] relative rounded-[16px] shrink-0 w-[60px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 60 56' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.8223e-14 5.6142 -7.2986 3.1168e-13 30 -1.2808e-12)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(23, 39, 75) 0%, rgb(23, 39, 75) 100%)" }} data-name="Sports Shortcuts">
          <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Bonuses">
            <div className="absolute inset-[14.58%_6.25%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 14.1667">
                <path d={svgPaths.p29d6a400} fill="var(--fill-0, #E5EAFA)" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
            <p className="leading-[14px]">Bonuses</p>
          </div>
        </div>
        <div className="content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.4)] flex flex-col gap-[2px] h-[56px] items-center justify-center min-w-[60px] px-[4px] py-[8px] relative rounded-[16px] shrink-0 w-[60px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 60 56' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.8223e-14 5.6142 -7.2986 3.1168e-13 30 -1.2808e-12)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(23, 39, 75) 0%, rgb(23, 39, 75) 100%)" }} data-name="Sports Shortcuts">
          <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="relative shrink-0 size-[20px]" data-name="Basketball">
            <div className="absolute inset-[8.33%_8.34%_8.34%_8.33%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.665 16.665">
                <path d={svgPaths.p27212300} fill="var(--fill-0, #E5EAFA)" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
            <p className="leading-[14px]">NBA</p>
          </div>
        </div>
        <div className="content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.4)] flex flex-col gap-[2px] h-[56px] items-center justify-center min-w-[60px] px-[4px] py-[8px] relative rounded-[16px] shrink-0 w-[60px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 60 56' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.8223e-14 5.6142 -7.2986 3.1168e-13 30 -1.2808e-12)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(23, 39, 75) 0%, rgb(23, 39, 75) 100%)" }} data-name="Sports Shortcuts">
          <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Withdraw">
            <div className="absolute inset-[16.67%_2.08%_10.42%_2.08%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1667 14.5835">
                <path d={svgPaths.p3863d400} fill="var(--fill-0, #E5EAFA)" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
            <p className="leading-[14px]">Predictor</p>
          </div>
        </div>
        <div className="content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.4)] flex flex-col gap-[2px] h-[56px] items-center justify-center min-w-[60px] px-[4px] py-[8px] relative rounded-[16px] shrink-0 w-[60px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 60 56' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.8223e-14 5.6142 -7.2986 3.1168e-13 30 -1.2808e-12)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(23, 39, 75) 0%, rgb(23, 39, 75) 100%)" }} data-name="Sports Shortcuts">
          <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Favorites Filled">
            <div className="absolute inset-[14.58%_8.33%_12.5%_8.33%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14.5832">
                <path d={svgPaths.p30c1e080} fill="var(--fill-0, #E5EAFA)" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
            <p className="leading-[14px]">Favorites</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] not-italic text-left top-[16px] w-[340px]" data-name="Title">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#f2f5fd] text-[20px] w-[min-content]">
        <p className="leading-[24px]">Super Odds</p>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">Give your bets a massive boost</p>
    </div>
  );
}

function Dots1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[164px] top-[354px]" data-name="Dots">
      <div className="bg-[#e5eafa] relative rounded-[100px] shrink-0 size-[8px]" />
      <div className="bg-[#19387e] relative rounded-[100px] shrink-0 size-[8px]" />
      <div className="bg-[#19387e] relative rounded-[100px] shrink-0 size-[8px]" />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[16px] text-ellipsis text-left w-[min-content]">
        <p className="leading-[20px]">Aussie Fan Dressed as a Kangaroo to Appear on TV During Match</p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#acafbb] text-[12px] text-ellipsis text-left whitespace-nowrap">World Cup - USA vs Australia</p>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">Jun 19th</span>
            <span className="leading-[14px]">{` 02:59PM`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MatchInfo5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Match info">
      <Content2 />
    </div>
  );
}

function Team10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Team">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e5eafa] text-[12px]">{`YES `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#acafbb] text-[10px]">Outright Market</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #E05200)" id="Ellipse 7" r="3" />
        </svg>
      </div>
      <Team10 />
    </div>
  );
}

function Component2Matches() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="2Matches">
      <div className="absolute flex h-[30px] items-center justify-center left-[2.5px] top-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[30px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 1">
                <line id="Line 7" stroke="url(#paint0_linear_1_16993)" x2="30" y1="0.5" y2="0.5" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16993" x1="0" x2="30" y1="1.5" y2="1.5">
                    <stop stopColor="#993800" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#E05200" />
                    <stop offset="1" stopColor="#993800" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Content">
      <MatchInfo5 />
      <Component2Matches />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#e5eafa] text-[12px] text-left w-full">Bet up to MYR 35 on this Super Odd</p>
    </div>
  );
}

function FlashOn() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Flash On">
      <div className="absolute inset-[-38.49%_-27.42%_-48.48%_-27.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9725 37.3948">
          <g id="Flash On">
            <g filter="url(#filter0_d_1_16972)" id="Vector">
              <path d={svgPaths.p15e6c800} fill="url(#paint0_linear_1_16972)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="37.3948" id="filter0_d_1_16972" width="30.9725" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.901961 0 0 0 0 0.407843 0 0 0 0 0 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_16972" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_16972" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16972" x1="15.9181" x2="16.757" y1="9" y2="26.3542">
              <stop offset="0.5" stopColor="#FF9457" />
              <stop offset="1" stopColor="#E05200" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Match() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-left whitespace-nowrap" data-name="Match">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center overflow-hidden relative shrink-0 text-[16px] text-ellipsis">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Manchester</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">vs</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center overflow-hidden relative shrink-0 text-[16px] text-ellipsis">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Liverpool</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <Match />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#acafbb] text-[12px] text-ellipsis text-left whitespace-nowrap">England - Premier League</p>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">Jun 19th</span>
            <span className="leading-[14px]">{` 02:59PM`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MatchInfo6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Match info">
      <Content4 />
    </div>
  );
}

function Team11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Team">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#e5eafa] text-[12px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px]">Team 1</span>
        <span className="leading-[16px]">{` win or draw`}</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#acafbb] text-[10px]">Both Teams To Score</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #E05200)" id="Ellipse 7" r="3" />
        </svg>
      </div>
      <Team11 />
    </div>
  );
}

function Team12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Team">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#e5eafa] text-[12px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px]">Team 1</span>
        <span className="leading-[16px]">{` win or draw`}</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#acafbb] text-[10px]">Both Teams To Score</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #E05200)" id="Ellipse 7" r="3" />
        </svg>
      </div>
      <Team12 />
    </div>
  );
}

function Component2Matches1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="2Matches">
      <div className="absolute flex h-[66px] items-center justify-center left-[2.5px] top-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[66px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 1">
                <line id="Line 7" stroke="url(#paint0_linear_1_17166)" x2="66" y1="0.5" y2="0.5" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_17166" x1="0" x2="66" y1="1.5" y2="1.5">
                    <stop stopColor="#993800" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#E05200" />
                    <stop offset="1" stopColor="#993800" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Text1 />
      <Text2 />
    </div>
  );
}

function Label() {
  return <div className="absolute bg-[rgba(242,211,61,0.2)] h-[3px] left-0 right-0 rounded-[16px] top-0" data-name="Label" />;
}

function Label1() {
  return <div className="absolute bg-[#f2d33d] h-[3px] left-0 right-[193px] rounded-[16px] top-0" data-name="Label" />;
}

function Level() {
  return (
    <div className="flex-[1_0_0] h-[8px] min-w-px relative" data-name="Level">
      <Label />
      <Label1 />
    </div>
  );
}

function Bar() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Bar">
      <Level />
    </div>
  );
}

function SuperOddBalance() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Super Odd Balance">
      <Bar />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-left w-full">
        <span className="leading-[16px] text-[12px]">{`You've still got`}</span>
        <span className="leading-[16px] text-[12px]">{` `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] text-[12px]">SGD 75</span>
        <span className="leading-[16px] text-[12px]">{` `}</span>
        <span className="leading-[16px] text-[12px]">on this SuperOdd</span>
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Content">
      <MatchInfo6 />
      <Component2Matches1 />
      <SuperOddBalance />
    </div>
  );
}

function FlashOn1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Flash On">
      <div className="absolute inset-[-38.49%_-27.42%_-48.48%_-27.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9725 37.3948">
          <g id="Flash On">
            <g filter="url(#filter0_d_1_16972)" id="Vector">
              <path d={svgPaths.p15e6c800} fill="url(#paint0_linear_1_16972)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="37.3948" id="filter0_d_1_16972" width="30.9725" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.901961 0 0 0 0 0.407843 0 0 0 0 0 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_16972" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_16972" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16972" x1="15.9181" x2="16.757" y1="9" y2="26.3542">
              <stop offset="0.5" stopColor="#FF9457" />
              <stop offset="1" stopColor="#E05200" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[16px] text-ellipsis text-left w-[min-content]">
        <p className="leading-[20px]">Aussie Fan Dressed as a Kangaroo to Appear on TV During Match</p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#acafbb] text-[12px] text-ellipsis text-left whitespace-nowrap">World Cup - USA vs Australia</p>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">Jun 19th</span>
            <span className="leading-[14px]">{` 02:59PM`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MatchInfo7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Match info">
      <Content6 />
    </div>
  );
}

function Team13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Team">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e5eafa] text-[12px]">{`YES `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#acafbb] text-[10px]">Outright Market</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #E05200)" id="Ellipse 7" r="3" />
        </svg>
      </div>
      <Team13 />
    </div>
  );
}

function Component2Matches2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="2Matches">
      <div className="absolute flex h-[30px] items-center justify-center left-[2.5px] top-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[30px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 1">
                <line id="Line 7" stroke="url(#paint0_linear_1_16993)" x2="30" y1="0.5" y2="0.5" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16993" x1="0" x2="30" y1="1.5" y2="1.5">
                    <stop stopColor="#993800" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#E05200" />
                    <stop offset="1" stopColor="#993800" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Text3 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Content">
      <MatchInfo7 />
      <Component2Matches2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#e5eafa] text-[12px] text-left w-full">Bet up to MYR 35 on this Super Odd</p>
    </div>
  );
}

function FlashOn2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Flash On">
      <div className="absolute inset-[-38.49%_-27.42%_-48.48%_-27.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9725 37.3948">
          <g id="Flash On">
            <g filter="url(#filter0_d_1_16972)" id="Vector">
              <path d={svgPaths.p15e6c800} fill="url(#paint0_linear_1_16972)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="37.3948" id="filter0_d_1_16972" width="30.9725" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.901961 0 0 0 0 0.407843 0 0 0 0 0 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_16972" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_16972" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16972" x1="15.9181" x2="16.757" y1="9" y2="26.3542">
              <stop offset="0.5" stopColor="#FF9457" />
              <stop offset="1" stopColor="#E05200" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Match1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-left whitespace-nowrap" data-name="Match">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center overflow-hidden relative shrink-0 text-[16px] text-ellipsis">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Manchester</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">vs</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center overflow-hidden relative shrink-0 text-[16px] text-ellipsis">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Liverpool</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <Match1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#acafbb] text-[12px] text-ellipsis text-left whitespace-nowrap">England - Premier League</p>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">Jun 19th</span>
            <span className="leading-[14px]">{` 02:59PM`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MatchInfo8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Match info">
      <Content8 />
    </div>
  );
}

function Team14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Team">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#e5eafa] text-[12px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px]">Team 1</span>
        <span className="leading-[16px]">{` win or draw`}</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#acafbb] text-[10px]">Both Teams To Score</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #E05200)" id="Ellipse 7" r="3" />
        </svg>
      </div>
      <Team14 />
    </div>
  );
}

function Team15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Team">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#e5eafa] text-[12px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px]">Team 1</span>
        <span className="leading-[16px]">{` win or draw`}</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#acafbb] text-[10px]">Both Teams To Score</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #E05200)" id="Ellipse 7" r="3" />
        </svg>
      </div>
      <Team15 />
    </div>
  );
}

function Component2Matches3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="2Matches">
      <div className="absolute flex h-[66px] items-center justify-center left-[2.5px] top-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[66px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 1">
                <line id="Line 7" stroke="url(#paint0_linear_1_17166)" x2="66" y1="0.5" y2="0.5" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_17166" x1="0" x2="66" y1="1.5" y2="1.5">
                    <stop stopColor="#993800" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#E05200" />
                    <stop offset="1" stopColor="#993800" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Text4 />
      <Text5 />
    </div>
  );
}

function Label2() {
  return <div className="absolute bg-[rgba(242,211,61,0.2)] h-[3px] left-0 right-0 rounded-[16px] top-0" data-name="Label" />;
}

function Label3() {
  return <div className="absolute bg-[#f2d33d] h-[3px] left-0 right-[193px] rounded-[16px] top-0" data-name="Label" />;
}

function Level1() {
  return (
    <div className="flex-[1_0_0] h-[8px] min-w-px relative" data-name="Level">
      <Label2 />
      <Label3 />
    </div>
  );
}

function Bar1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Bar">
      <Level1 />
    </div>
  );
}

function SuperOddBalance1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Super Odd Balance">
      <Bar1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-left w-full">
        <span className="leading-[16px] text-[12px]">{`You've still got`}</span>
        <span className="leading-[16px] text-[12px]">{` `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] text-[12px]">SGD 75</span>
        <span className="leading-[16px] text-[12px]">{` `}</span>
        <span className="leading-[16px] text-[12px]">on this SuperOdd</span>
      </p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Content">
      <MatchInfo8 />
      <Component2Matches3 />
      <SuperOddBalance1 />
    </div>
  );
}

function FlashOn3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Flash On">
      <div className="absolute inset-[-38.49%_-27.42%_-48.48%_-27.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9725 37.3948">
          <g id="Flash On">
            <g filter="url(#filter0_d_1_16972)" id="Vector">
              <path d={svgPaths.p15e6c800} fill="url(#paint0_linear_1_16972)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="37.3948" id="filter0_d_1_16972" width="30.9725" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.901961 0 0 0 0 0.407843 0 0 0 0 0 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_16972" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_16972" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16972" x1="15.9181" x2="16.757" y1="9" y2="26.3542">
              <stop offset="0.5" stopColor="#FF9457" />
              <stop offset="1" stopColor="#E05200" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#e5eafa] text-[16px] text-ellipsis text-left w-[min-content]">
        <p className="leading-[20px]">Aussie Fan Dressed as a Kangaroo to Appear on TV During Match</p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#acafbb] text-[12px] text-ellipsis text-left whitespace-nowrap">World Cup - USA vs Australia</p>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">Jun 19th</span>
            <span className="leading-[14px]">{` 02:59PM`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MatchInfo9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Match info">
      <Content10 />
    </div>
  );
}

function Team16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Team">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e5eafa] text-[12px]">{`YES `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#acafbb] text-[10px]">Outright Market</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #E05200)" id="Ellipse 7" r="3" />
        </svg>
      </div>
      <Team16 />
    </div>
  );
}

function Component2Matches4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="2Matches">
      <div className="absolute flex h-[30px] items-center justify-center left-[2.5px] top-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[30px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 1">
                <line id="Line 7" stroke="url(#paint0_linear_1_16993)" x2="30" y1="0.5" y2="0.5" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16993" x1="0" x2="30" y1="1.5" y2="1.5">
                    <stop stopColor="#993800" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#E05200" />
                    <stop offset="1" stopColor="#993800" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Text6 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Content">
      <MatchInfo9 />
      <Component2Matches4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#e5eafa] text-[12px] text-left w-full">Bet up to MYR 35 on this Super Odd</p>
    </div>
  );
}

function FlashOn4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Flash On">
      <div className="absolute inset-[-38.49%_-27.42%_-48.48%_-27.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9725 37.3948">
          <g id="Flash On">
            <g filter="url(#filter0_d_1_16972)" id="Vector">
              <path d={svgPaths.p15e6c800} fill="url(#paint0_linear_1_16972)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="37.3948" id="filter0_d_1_16972" width="30.9725" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.901961 0 0 0 0 0.407843 0 0 0 0 0 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_16972" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_16972" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16972" x1="15.9181" x2="16.757" y1="9" y2="26.3542">
              <stop offset="0.5" stopColor="#FF9457" />
              <stop offset="1" stopColor="#E05200" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Match2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-left whitespace-nowrap" data-name="Match">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center overflow-hidden relative shrink-0 text-[16px] text-ellipsis">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Manchester</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">vs</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center overflow-hidden relative shrink-0 text-[16px] text-ellipsis">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Liverpool</p>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <Match2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#acafbb] text-[12px] text-ellipsis text-left whitespace-nowrap">England - Premier League</p>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">Jun 19th</span>
            <span className="leading-[14px]">{` 02:59PM`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MatchInfo10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Match info">
      <Content12 />
    </div>
  );
}

function Team17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Team">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#e5eafa] text-[12px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px]">Team 1</span>
        <span className="leading-[16px]">{` win or draw`}</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#acafbb] text-[10px]">Both Teams To Score</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #E05200)" id="Ellipse 7" r="3" />
        </svg>
      </div>
      <Team17 />
    </div>
  );
}

function Team18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Team">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#e5eafa] text-[12px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px]">Team 1</span>
        <span className="leading-[16px]">{` win or draw`}</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#acafbb] text-[10px]">Both Teams To Score</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #E05200)" id="Ellipse 7" r="3" />
        </svg>
      </div>
      <Team18 />
    </div>
  );
}

function Component2Matches5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="2Matches">
      <div className="absolute flex h-[66px] items-center justify-center left-[2.5px] top-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[66px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 1">
                <line id="Line 7" stroke="url(#paint0_linear_1_17166)" x2="66" y1="0.5" y2="0.5" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_17166" x1="0" x2="66" y1="1.5" y2="1.5">
                    <stop stopColor="#993800" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#E05200" />
                    <stop offset="1" stopColor="#993800" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Text7 />
      <Text8 />
    </div>
  );
}

function Label4() {
  return <div className="absolute bg-[rgba(242,211,61,0.2)] h-[3px] left-0 right-0 rounded-[16px] top-0" data-name="Label" />;
}

function Label5() {
  return <div className="absolute bg-[#f2d33d] h-[3px] left-0 right-[193px] rounded-[16px] top-0" data-name="Label" />;
}

function Level2() {
  return (
    <div className="flex-[1_0_0] h-[8px] min-w-px relative" data-name="Level">
      <Label4 />
      <Label5 />
    </div>
  );
}

function Bar2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Bar">
      <Level2 />
    </div>
  );
}

function SuperOddBalance2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Super Odd Balance">
      <Bar2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-left w-full">
        <span className="leading-[16px] text-[12px]">{`You've still got`}</span>
        <span className="leading-[16px] text-[12px]">{` `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] text-[12px]">SGD 75</span>
        <span className="leading-[16px] text-[12px]">{` `}</span>
        <span className="leading-[16px] text-[12px]">on this SuperOdd</span>
      </p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Content">
      <MatchInfo10 />
      <Component2Matches5 />
      <SuperOddBalance2 />
    </div>
  );
}

function FlashOn5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Flash On">
      <div className="absolute inset-[-38.49%_-27.42%_-48.48%_-27.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9725 37.3948">
          <g id="Flash On">
            <g filter="url(#filter0_d_1_16972)" id="Vector">
              <path d={svgPaths.p15e6c800} fill="url(#paint0_linear_1_16972)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="37.3948" id="filter0_d_1_16972" width="30.9725" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.901961 0 0 0 0 0.407843 0 0 0 0 0 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_16972" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_16972" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16972" x1="15.9181" x2="16.757" y1="9" y2="26.3542">
              <stop offset="0.5" stopColor="#FF9457" />
              <stop offset="1" stopColor="#E05200" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="absolute h-[270px] left-[-24px] overflow-clip top-[72px] w-[428px]" data-name="Cards">
      <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-[-204px] p-[12px] rounded-[16px] top-0 w-[272px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 272 244' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(1.1044e-14 3.2628 -30.358 -6.3149e-14 136 0.0000019448)'><stop stop-color='rgba(224,82,0,0.6)' offset='0'/><stop stop-color='rgba(224,82,0,0.2)' offset='0.39047'/><stop stop-color='rgba(224,82,0,0)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(180deg, rgba(14, 25, 45, 0.7) 0%, rgb(23, 39, 75) 100%)" }} data-name="Super Odd Card">
        <div aria-hidden className="absolute border border-[#ff9457] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Content1 />
        <div className="backdrop-blur-[200px] bg-[#0b1322] content-stretch flex gap-[2px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Super Odd Event Line">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#acafbb] text-[0px] text-center whitespace-nowrap">
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[14px]">2.30</p>
          </div>
          <FlashOn />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[18px]">2.80</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-[78px] p-[12px] rounded-[16px] top-0 w-[272px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 272 252' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(1.1044e-14 3.3698 -30.358 -6.522e-14 136 0.0000020085)'><stop stop-color='rgba(224,82,0,0.6)' offset='0'/><stop stop-color='rgba(224,82,0,0.2)' offset='0.39047'/><stop stop-color='rgba(224,82,0,0)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(180deg, rgba(14, 25, 45, 0.7) 0%, rgb(23, 39, 75) 100%)" }} data-name="Super Odd Card">
        <div aria-hidden className="absolute border border-[#ff9457] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Content3 />
        <div className="backdrop-blur-[200px] bg-[#0b1322] content-stretch cursor-pointer flex gap-[2px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[256px]" role="button" tabIndex="0" data-name="Super Odd Event Line">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#acafbb] text-[0px] text-center whitespace-nowrap">
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[14px]">2.30</p>
          </div>
          <FlashOn1 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[18px]">2.80</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-[360px] p-[12px] rounded-[16px] top-0 w-[272px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 272 244' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(1.1044e-14 3.2628 -30.358 -6.3149e-14 136 0.0000019448)'><stop stop-color='rgba(224,82,0,0.6)' offset='0'/><stop stop-color='rgba(224,82,0,0.2)' offset='0.39047'/><stop stop-color='rgba(224,82,0,0)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(180deg, rgba(14, 25, 45, 0.7) 0%, rgb(23, 39, 75) 100%)" }} data-name="Super Odd Card">
        <div aria-hidden className="absolute border border-[#ff9457] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Content5 />
        <div className="backdrop-blur-[200px] bg-[#0b1322] content-stretch flex gap-[2px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Super Odd Event Line">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#acafbb] text-[0px] text-center whitespace-nowrap">
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[14px]">2.30</p>
          </div>
          <FlashOn2 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[18px]">2.80</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-[642px] p-[12px] rounded-[16px] top-0 w-[272px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 272 252' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(1.1044e-14 3.3698 -30.358 -6.522e-14 136 0.0000020085)'><stop stop-color='rgba(224,82,0,0.6)' offset='0'/><stop stop-color='rgba(224,82,0,0.2)' offset='0.39047'/><stop stop-color='rgba(224,82,0,0)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(180deg, rgba(14, 25, 45, 0.7) 0%, rgb(23, 39, 75) 100%)" }} data-name="Super Odd Card">
        <div aria-hidden className="absolute border border-[#ff9457] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Content7 />
        <div className="backdrop-blur-[200px] bg-[#0b1322] content-stretch flex gap-[2px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Super Odd Event Line">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#acafbb] text-[0px] text-center whitespace-nowrap">
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[14px]">2.30</p>
          </div>
          <FlashOn3 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[18px]">2.80</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-[924px] p-[12px] rounded-[16px] top-0 w-[272px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 272 244' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(1.1044e-14 3.2628 -30.358 -6.3149e-14 136 0.0000019448)'><stop stop-color='rgba(224,82,0,0.6)' offset='0'/><stop stop-color='rgba(224,82,0,0.2)' offset='0.39047'/><stop stop-color='rgba(224,82,0,0)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(180deg, rgba(14, 25, 45, 0.7) 0%, rgb(23, 39, 75) 100%)" }} data-name="Super Odd Card">
        <div aria-hidden className="absolute border border-[#ff9457] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Content9 />
        <div className="backdrop-blur-[200px] bg-[#0b1322] content-stretch flex gap-[2px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Super Odd Event Line">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#acafbb] text-[0px] text-center whitespace-nowrap">
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[14px]">2.30</p>
          </div>
          <FlashOn4 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[18px]">2.80</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-[1206px] p-[12px] rounded-[16px] top-0 w-[272px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 272 252' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(1.1044e-14 3.3698 -30.358 -6.522e-14 136 0.0000020085)'><stop stop-color='rgba(224,82,0,0.6)' offset='0'/><stop stop-color='rgba(224,82,0,0.2)' offset='0.39047'/><stop stop-color='rgba(224,82,0,0)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(180deg, rgba(14, 25, 45, 0.7) 0%, rgb(23, 39, 75) 100%)" }} data-name="Super Odd Card">
        <div aria-hidden className="absolute border border-[#ff9457] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Content11 />
        <div className="backdrop-blur-[200px] bg-[#0b1322] content-stretch flex gap-[2px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Super Odd Event Line">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#acafbb] text-[0px] text-center whitespace-nowrap">
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[14px]">2.30</p>
          </div>
          <FlashOn5 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[18px]">2.80</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuperOdds() {
  return (
    <div className="-translate-x-1/2 absolute h-[344px] left-1/2 rounded-[16px] top-0 w-[380px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 380 344' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0.0000021497 30.5 -63.955 0.0000045077 190 0.0000047877)'><stop stop-color='rgba(224,82,0,1)' offset='0'/><stop stop-color='rgba(176,64,0,0.31915)' offset='0.36897'/><stop stop-color='rgba(153,56,0,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="Super Odds">
      <Title />
      <Dots1 />
      <Cards />
      <div className="absolute flex h-[270px] items-center justify-center right-[350px] top-[72px] w-[54px]">
        <div className="flex-none rotate-180">
          <div className="h-[270px] relative w-[54px]" style={{ backgroundImage: "linear-gradient(-90deg, rgb(7, 13, 24) 0%, rgba(7, 13, 24, 0) 100%)" }} data-name="Right Gradient" />
        </div>
      </div>
      <div className="absolute h-[270px] right-[-25px] top-[72px] w-[54px]" style={{ backgroundImage: "linear-gradient(-90deg, rgb(7, 13, 24) 0%, rgba(7, 13, 24, 0) 100%)" }} data-name="Right Gradient" />
    </div>
  );
}

function Lightning() {
  return (
    <div className="absolute h-[72px] left-[24px] overflow-clip rounded-[16px] top-0 w-[380px]" data-name="Lightning">
      <div className="absolute flex h-[208.062px] items-center justify-center left-[176px] top-[-78px] w-[214.739px]">
        <div className="flex-none rotate-[19.58deg]">
          <div className="h-[160px] relative w-[171px]" data-name="Pikachu lightning 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPikachuLightning2} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[176.206px] items-center justify-center left-[238.46px] top-[-81.37px] w-[182.076px]">
        <div className="-scale-y-100 flex-none rotate-[-19.58deg]">
          <div className="h-[135.409px] relative w-[145.081px]" data-name="Pikachu lightning 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPikachuLightning2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StarFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Star Filled">
      <div className="absolute inset-[-75.65%_-75%_-74.35%_-75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <g id="Star Filled">
            <g filter="url(#filter0_f_1_16963)" id="Ellipse 2">
              <circle cx="30" cy="30" fill="var(--fill-0, #FFA500)" fillOpacity="0.6" r="10" />
            </g>
            <g id="Group 45">
              <path d={svgPaths.p9e0a600} fill="var(--fill-0, #FFA500)" id="Vector" />
              <path d={svgPaths.p1369b200} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.p237dde00} fill="var(--fill-0, black)" id="Vector_3" opacity="0.15" />
              <path d={svgPaths.p9482480} fill="var(--fill-0, white)" id="Vector_4" opacity="0.3" />
            </g>
            <path d={svgPaths.p1f132000} fill="var(--fill-0, black)" id="Vector_5" opacity="0.3" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="60" id="filter0_f_1_16963" width="60" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_16963" stdDeviation="10" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function LiveWinningsTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[380px]" data-name="Live Winnings title">
      <StarFilled />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[18px] whitespace-nowrap">
        <p className="leading-[22px]">Catch the Hottest Action</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="All Games">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p29fff300} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MenuAccordionOptionItem() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative rounded-[16px] shrink-0 w-[60px]" style={{ backgroundImage: "linear-gradient(177.963deg, rgba(25, 100, 250, 0.2) 1.596%, rgba(8, 54, 148, 0.2) 98.637%), linear-gradient(90deg, rgb(14, 25, 45) 0%, rgb(14, 25, 45) 100%)" }} data-name="Menu Accordion Option Item">
        <div aria-hidden className="absolute border border-[#e5eafa] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center px-[4px] py-[8px] relative size-full">
            <Frame8 />
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#f2f5fd] text-[14px] text-center text-ellipsis whitespace-nowrap">
              <p className="leading-[18px]">All</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="absolute bg-[#993800] content-stretch flex h-[20px] items-center justify-center left-0 px-[4px] rounded-br-[16px] rounded-tl-[16px] top-0 w-[32px]" data-name="number">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f2f5fd] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">20</p>
      </div>
    </div>
  );
}

function Number1() {
  return (
    <div className="absolute bg-[#993800] content-stretch flex h-[20px] items-center justify-center left-0 px-[4px] rounded-br-[16px] rounded-tl-[16px] top-0 w-[32px]" data-name="number">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f2f5fd] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">200</p>
      </div>
    </div>
  );
}

function Number2() {
  return (
    <div className="absolute bg-[#993800] content-stretch flex h-[20px] items-center justify-center left-0 px-[4px] rounded-br-[16px] rounded-tl-[16px] top-0 w-[32px]" data-name="number">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f2f5fd] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">20</p>
      </div>
    </div>
  );
}

function Number3() {
  return (
    <div className="absolute bg-[#993800] content-stretch flex h-[20px] items-center justify-center left-0 px-[4px] rounded-br-[16px] rounded-tl-[16px] top-0 w-[32px]" data-name="number">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f2f5fd] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">20</p>
      </div>
    </div>
  );
}

function SportTabIcon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="NBA">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[30px] top-1/2" data-name="ChatGPT Image Mar 26, 2026, 01_47_40 AM 7">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[390%] left-[-69.13%] max-w-none top-[-221.87%] w-[585%]" src={imgChatGptImageMar262026014740Am7} />
        </div>
      </div>
    </div>
  );
}

const SPORT_TAB_DEFAULT_BG =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 90 70' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(5.7335e-14 7.0178 -10.948 3.896e-13 45 -1.6009e-12)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(14, 25, 45) 0%, rgb(14, 25, 45) 100%)";
const SPORT_TAB_HOVER_BG = "linear-gradient(180deg, rgba(25, 56, 126, 0.7) 0%, rgba(14, 25, 45, 0.7) 100%)";
const SPORT_TAB_SELECTED_BG =
  "linear-gradient(178.641deg, rgba(153, 56, 0, 0.7) 1.596%, rgba(77, 31, 5, 0.7) 98.637%), linear-gradient(90deg, rgb(14, 25, 45) 0%, rgb(14, 25, 45) 100%)";

function SportTab({
  label,
  count,
  selected,
  onSelect,
}: {
  label: string;
  count: number;
  selected: boolean;
  onSelect: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const background = selected ? SPORT_TAB_SELECTED_BG : hovered ? SPORT_TAB_HOVER_BG : SPORT_TAB_DEFAULT_BG;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 0.95 }}
      className="content-stretch flex flex-col gap-[4px] items-center px-[4px] py-[8px] relative rounded-[16px] shrink-0 w-[90px] transition-[background-image] duration-200 cursor-pointer"
      style={{ backgroundImage: background }}
      data-name="Tabs"
      aria-pressed={selected}
    >
      <SportTabIcon />
      <div
        className={
          "[word-break:break-word] flex flex-col justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-center text-ellipsis whitespace-nowrap not-italic " +
          (selected ? "font-['Inter:Bold',sans-serif] font-bold text-[#f2f5fd]" : "font-['Inter:Medium',sans-serif] font-medium text-[#acafbb]")
        }
      >
        <p className="leading-[18px]">{label}</p>
      </div>
      <div className="absolute bg-[#993800] content-stretch flex h-[20px] items-center justify-center left-0 px-[4px] rounded-br-[16px] rounded-tl-[16px] top-0 w-[32px]" data-name="number">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f2f5fd] text-[12px] text-right whitespace-nowrap">
          <p className="leading-[16px]">{count}</p>
        </div>
      </div>
    </motion.button>
  );
}

function SportFilter() {
  const [selected, setSelected] = useState(1);
  const sports = [
    { label: "Soccer", count: 20 },
    { label: "Basketball", count: 200 },
    { label: "Volleyball", count: 20 },
    { label: "Tennis", count: 20 },
  ];

  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-x-auto overflow-y-clip relative shrink-0 w-[340px]" data-name="Sport Filter">
      {sports.map((sport, index) => (
        <SportTab
          key={sport.label}
          label={sport.label}
          count={sport.count}
          selected={selected === index}
          onSelect={() => setSelected(index)}
        />
      ))}
    </div>
  );
}

function Sports() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[380px]" data-name="Sports">
      <MenuAccordionOptionItem />
      <SportFilter />
    </div>
  );
}

const LEAGUE_TAB_DEFAULT_BG =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 101 34' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(6.4343e-14 3.4086 -12.286 1.8923e-13 50.5 -7.776e-13)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(14, 25, 45) 0%, rgb(14, 25, 45) 100%)";
const LEAGUE_TAB_HOVER_BG =
  "linear-gradient(179.412deg, rgba(255, 148, 87, 0.3) 1.596%, rgba(153, 56, 0, 0.3) 98.637%), linear-gradient(90deg, rgb(14, 25, 45) 0%, rgb(14, 25, 45) 100%)";
const LEAGUE_TAB_SELECTED_BG =
  "linear-gradient(179.412deg, rgba(255, 148, 87, 0.8) 1.596%, rgba(153, 56, 0, 0.8) 98.637%), linear-gradient(90deg, rgb(14, 25, 45) 0%, rgb(14, 25, 45) 100%)";

function LeagueTab({ label, selected, fill }: { label: string; selected: boolean; fill?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const background = selected ? LEAGUE_TAB_SELECTED_BG : hovered ? LEAGUE_TAB_HOVER_BG : LEAGUE_TAB_DEFAULT_BG;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        "content-stretch flex gap-[4px] h-[34px] items-center justify-center max-w-[200px] px-[16px] py-[8px] relative rounded-[16px] snap-start transition-[background-image] duration-200 cursor-pointer " +
        (fill ? "flex-1 min-w-[101px]" : "shrink-0 w-fit")
      }
      style={{ backgroundImage: background }}
      data-name="Tabs New - Sports"
    >
      <div
        className={
          "[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px not-italic relative text-[14px] text-center whitespace-nowrap " +
          (selected ? "text-[#e5eafa]" : "text-[#acafbb]")
        }
      >
        <p className="leading-[18px]">{label}</p>
      </div>
    </div>
  );
}

function Container11() {
  const leagueTabs = [
    { label: "Top League (45)", selected: true },
    { label: "European Games", selected: false },
    { label: "South America", selected: false },
    { label: "Top League (45)", selected: false, fill: true },
    { label: "European Games", selected: false },
    { label: "South America", selected: false },
  ];

  return (
    <div className="no-scrollbar content-stretch flex gap-[8px] items-center relative shrink-0 w-[380px] overflow-x-auto snap-x snap-mandatory" data-name="Container">
      {leagueTabs.map((tab, index) => (
        <LeagueTab key={`${tab.label}-${index}`} label={tab.label} selected={tab.selected} fill={tab.fill} />
      ))}
    </div>
  );
}

function TimeFilterTab({ label, selected, onSelect }: { label: string; selected: boolean; onSelect: () => void }) {
  const [hovered, setHovered] = useState(false);
  const tint = selected ? "#e5eafa" : "#acafbb";
  const showUnderline = selected || hovered;

  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="content-stretch flex flex-col gap-[6px] items-center justify-end relative shrink-0 cursor-pointer"
      data-name="Tabs New - Sports"
    >
      <div className="content-stretch flex gap-[4px] items-center px-[12px] relative shrink-0" data-name="Horizontal Container">
        <div className="relative shrink-0 size-[16px]" data-name="Clock Circular">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p1aa68c00} fill={`var(--fill-0, ${tint})`} id="Icon" />
          </svg>
        </div>
        <div
          className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center transition-colors whitespace-nowrap"
          style={{ color: tint }}
        >
          <p className="leading-[16px]">{label}</p>
        </div>
      </div>
      <div
        className={`bg-[#ff9457] h-[2px] relative rounded-tl-[100px] rounded-tr-[8px] shrink-0 transition-all duration-200 ${showUnderline ? "w-full" : "w-0"}`}
        data-name="Line highlight"
      />
    </button>
  );
}

function TimeFilter() {
  const [selected, setSelected] = useState(0);
  const options = ["1hr", "3hrs", "6hrs", "12hrs", "16hr"];

  return (
    <div className="no-scrollbar content-stretch flex gap-[4px] items-center overflow-x-auto relative shrink-0 w-[380px]" data-name="Time Filter">
      {options.map((label, index) => (
        <TimeFilterTab key={label} label={label} selected={selected === index} onSelect={() => setSelected(index)} />
      ))}
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0">
      <button className="col-1 content-stretch cursor-pointer flex gap-[4px] h-[28px] items-center justify-center max-w-[200px] ml-0 mt-0 p-[8px] relative rounded-[16px] row-1 w-[44px]" data-name="Tabs New - General">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#acafbb] text-[12px] text-left">
          <p className="leading-[16px]">Time</p>
        </div>
      </button>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Market Type</p>
      </div>
    </div>
  );
}

function Sort1({ allExpanded, onToggleAll }: { allExpanded: boolean; onToggleAll: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0" data-name="Sort">
      <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center pl-[16px] pr-[8px] py-[8px] relative rounded-[16px] shrink-0" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 124 32' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(7.8995e-14 3.2081 -15.084 1.781e-13 62 -7.3186e-13)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(23, 39, 75) 0%, rgb(23, 39, 75) 100%)" }} data-name="Dropdown">
        <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Text9 />
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Down">
          <div className="absolute inset-[35.42%_25.01%_35.41%_24.99%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.00208">
              <path clipRule="evenodd" d={svgPaths.p22827600} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <motion.button
        type="button"
        onClick={onToggleAll}
        whileTap={{ scale: 0.9 }}
        className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0 size-[32px] cursor-pointer"
        style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(2.0386e-14 3.2081 -3.8926 1.781e-13 16 -7.3186e-13)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(23, 39, 75) 0%, rgb(23, 39, 75) 100%)" }}
        data-name="Icon Accordions"
        aria-label={allExpanded ? "Collapse all leagues" : "Expand all leagues"}
        aria-pressed={allExpanded}
      >
        <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <motion.div
          animate={{ rotate: allExpanded ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="overflow-clip relative shrink-0 size-[16px]"
          data-name="Collapse all"
        >
          <div className="absolute inset-[12.69%_11.95%_15.44%_12.96%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0142 11.4998">
              <g id="Icon">
                <path d={svgPaths.p17310d00} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p2f926300} fill="var(--fill-0, #E5EAFA)" />
              </g>
            </svg>
          </div>
        </motion.div>
      </motion.button>
    </div>
  );
}

function Sort({ allExpanded, onToggleAll }: { allExpanded: boolean; onToggleAll: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Sort">
      <div className="content-stretch flex h-[32px] items-center justify-center p-[2px] relative rounded-[100px] shrink-0" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 108 32' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(6.8802e-14 3.2081 -13.137 1.781e-13 54 -7.3186e-13)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(23, 39, 75) 0%, rgb(23, 39, 75) 100%)" }} data-name="Switcher secondary">
        <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="h-full max-w-[200px] relative rounded-[16px] shrink-0 w-[60px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 60 28' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.8223e-14 2.8071 -7.2986 1.5584e-13 30 -6.4038e-13)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(25, 56, 126) 0%, rgb(25, 56, 126) 100%)" }} data-name="Tabs New - General">
          <div aria-hidden className="absolute border border-[#e5eafa] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="flex flex-row items-center justify-end max-w-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-end max-w-[inherit] p-[8px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px not-italic relative text-[#e5eafa] text-[12px]">
                <p className="leading-[16px]">League</p>
              </div>
            </div>
          </div>
        </div>
        <Group8 />
      </div>
      <Sort1 allExpanded={allExpanded} onToggleAll={onToggleAll} />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[8.33%] overflow-clip rounded-[100px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3476d900} fill="var(--fill-0, #B5202E)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3824fa00} fill="var(--fill-0, #F5C426)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p157d6400} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p29b4e0f2} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.pa5fca00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.pe551900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p1fc05070} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p1b2ee680} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p3b0dd500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p3bcf7b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p2350c780} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p1599f300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p798b400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p5ddedf0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p30d98400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p210b1b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_16" />
          <path clipRule="evenodd" d={svgPaths.p365ead00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_17" />
          <path clipRule="evenodd" d={svgPaths.p191b40c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_18" />
          <path clipRule="evenodd" d={svgPaths.p26981b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_19" />
          <path clipRule="evenodd" d={svgPaths.p36587cf0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_20" />
          <path clipRule="evenodd" d={svgPaths.p31f1e200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_21" />
          <path clipRule="evenodd" d={svgPaths.p444f400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_22" />
          <path clipRule="evenodd" d={svgPaths.p4d45580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_23" />
          <path clipRule="evenodd" d={svgPaths.p977c280} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_24" />
          <path clipRule="evenodd" d={svgPaths.p2421ae80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_25" />
          <path clipRule="evenodd" d={svgPaths.p373f9a80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_26" />
          <path clipRule="evenodd" d={svgPaths.p1f048000} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_27" />
          <path clipRule="evenodd" d={svgPaths.p2fa30100} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_28" />
          <path clipRule="evenodd" d={svgPaths.p1d298060} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_29" />
          <path clipRule="evenodd" d={svgPaths.p18cd1b00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_30" />
          <path clipRule="evenodd" d={svgPaths.p2a4d0580} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_31" />
          <path clipRule="evenodd" d={svgPaths.p11f63400} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_32" />
          <path clipRule="evenodd" d={svgPaths.pa2d4f00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_33" />
          <path clipRule="evenodd" d={svgPaths.p6f5f1a0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_34" />
          <path clipRule="evenodd" d={svgPaths.p1735a000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_35" />
          <path clipRule="evenodd" d={svgPaths.p348e1380} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_36" />
          <path clipRule="evenodd" d={svgPaths.p26aab900} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_37" />
          <path clipRule="evenodd" d={svgPaths.p36052600} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_38" />
          <path clipRule="evenodd" d={svgPaths.p326e9c80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_39" />
          <path clipRule="evenodd" d={svgPaths.p3a3d2a00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_40" />
          <path clipRule="evenodd" d={svgPaths.p20591200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_41" />
          <path clipRule="evenodd" d={svgPaths.pcdcfc00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_42" />
          <path clipRule="evenodd" d={svgPaths.p32f1d000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_43" />
          <path clipRule="evenodd" d={svgPaths.pdfdf100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_44" />
          <path clipRule="evenodd" d={svgPaths.p9d777f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_45" />
          <path clipRule="evenodd" d={svgPaths.p18473580} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_46" />
          <path clipRule="evenodd" d={svgPaths.p1b853480} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_47" />
          <path clipRule="evenodd" d={svgPaths.p363f1180} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_48" />
          <path clipRule="evenodd" d={svgPaths.p2700def0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_49" />
          <path clipRule="evenodd" d={svgPaths.p23fef800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_50" />
          <path clipRule="evenodd" d={svgPaths.p31115080} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_51" />
          <path clipRule="evenodd" d={svgPaths.pcc81200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_52" />
          <path clipRule="evenodd" d={svgPaths.pb80e600} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_53" />
          <path clipRule="evenodd" d={svgPaths.p30a65140} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_54" />
          <path clipRule="evenodd" d={svgPaths.p3e506d00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_55" />
          <path clipRule="evenodd" d={svgPaths.p1fd1a700} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_56" />
          <path clipRule="evenodd" d={svgPaths.pb1c5800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_57" />
          <path clipRule="evenodd" d={svgPaths.p37ee3b80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_58" />
          <path clipRule="evenodd" d={svgPaths.p3ed32000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_59" />
          <path clipRule="evenodd" d={svgPaths.p174026c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_60" />
          <path clipRule="evenodd" d={svgPaths.p32c0b880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_61" />
          <path clipRule="evenodd" d={svgPaths.p1b6f3c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_62" />
          <path clipRule="evenodd" d={svgPaths.p667aa00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_63" />
          <path clipRule="evenodd" d={svgPaths.p3f8e7b72} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_64" />
          <path clipRule="evenodd" d={svgPaths.p1bb14480} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_65" />
          <path clipRule="evenodd" d={svgPaths.p30032cb0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_66" />
          <path clipRule="evenodd" d={svgPaths.p32d12c00} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_67" />
          <path clipRule="evenodd" d={svgPaths.pc166580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_68" />
          <path clipRule="evenodd" d={svgPaths.p1ab8a080} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_69" />
          <path clipRule="evenodd" d={svgPaths.p17ca6000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_70" />
          <path clipRule="evenodd" d={svgPaths.p13918a40} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_71" />
          <path clipRule="evenodd" d={svgPaths.p2524e100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_72" />
          <path clipRule="evenodd" d={svgPaths.p11d13600} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_73" />
          <path clipRule="evenodd" d={svgPaths.p3e8ce440} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_74" />
          <path clipRule="evenodd" d={svgPaths.p1e1b3c00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_75" />
          <path clipRule="evenodd" d={svgPaths.pf789d00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_76" />
          <path clipRule="evenodd" d={svgPaths.p26510772} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_77" />
          <path clipRule="evenodd" d={svgPaths.p32da0900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_78" />
          <path clipRule="evenodd" d={svgPaths.p121f00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_79" />
          <path clipRule="evenodd" d={svgPaths.p23174680} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_80" />
          <path clipRule="evenodd" d={svgPaths.p22378f80} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_81" />
          <path clipRule="evenodd" d={svgPaths.p1404e300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_82" />
          <path clipRule="evenodd" d={svgPaths.pc496500} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_83" />
          <path clipRule="evenodd" d={svgPaths.p28905e00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_84" />
          <path clipRule="evenodd" d={svgPaths.p3965100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_85" />
          <path clipRule="evenodd" d={svgPaths.p3a545a70} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_86" />
          <path clipRule="evenodd" d={svgPaths.p3b373500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_87" />
          <path clipRule="evenodd" d={svgPaths.pbee4c00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_88" />
          <path clipRule="evenodd" d={svgPaths.pb87c680} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_89" />
          <path clipRule="evenodd" d={svgPaths.p1904cb80} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_90" />
          <path clipRule="evenodd" d={svgPaths.p1c80fa30} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_91" />
          <path clipRule="evenodd" d={svgPaths.p1e2ee300} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_92" />
          <path clipRule="evenodd" d={svgPaths.p2101b580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_93" />
          <path clipRule="evenodd" d={svgPaths.p25b33e80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_94" />
          <path clipRule="evenodd" d={svgPaths.p38c3ae80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_95" />
          <path clipRule="evenodd" d={svgPaths.p1e0aad00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_96" />
          <path clipRule="evenodd" d={svgPaths.p9c2b900} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_97" />
          <path clipRule="evenodd" d={svgPaths.p19d97400} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_98" />
          <path clipRule="evenodd" d={svgPaths.p206ebc00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_99" />
          <path clipRule="evenodd" d={svgPaths.p33ca4b10} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_100" />
          <path clipRule="evenodd" d={svgPaths.p2451d080} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_101" />
          <path clipRule="evenodd" d={svgPaths.pa83bb00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_102" />
          <path clipRule="evenodd" d={svgPaths.p3e649100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_103" />
          <path clipRule="evenodd" d={svgPaths.p21f2f600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_104" />
          <path clipRule="evenodd" d={svgPaths.p22a5e200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_105" />
          <path clipRule="evenodd" d={svgPaths.p25785300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_106" />
          <path clipRule="evenodd" d={svgPaths.p2d371200} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_107" />
          <path clipRule="evenodd" d={svgPaths.p16d81100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_108" />
          <path clipRule="evenodd" d={svgPaths.p1ad2ec80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_109" />
          <path clipRule="evenodd" d={svgPaths.p5c60440} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_110" />
          <path clipRule="evenodd" d={svgPaths.p3a6b3f80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_111" />
          <path clipRule="evenodd" d={svgPaths.p2625b5f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_112" />
          <path clipRule="evenodd" d={svgPaths.p2dbf5880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_113" />
          <path clipRule="evenodd" d={svgPaths.p94900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_114" />
          <path clipRule="evenodd" d={svgPaths.p35451300} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_115" />
          <path clipRule="evenodd" d={svgPaths.p373b9a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_116" />
          <path clipRule="evenodd" d={svgPaths.p2e56fca0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_117" />
          <path clipRule="evenodd" d={svgPaths.p6be54c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_118" />
          <path clipRule="evenodd" d={svgPaths.p347b3c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_119" />
          <path clipRule="evenodd" d={svgPaths.p21fbc500} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_120" />
          <path clipRule="evenodd" d={svgPaths.p118ac300} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_121" />
          <path clipRule="evenodd" d={svgPaths.pcb4e180} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_122" />
          <path clipRule="evenodd" d={svgPaths.p319d0040} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_123" />
          <path clipRule="evenodd" d={svgPaths.p1dd5600} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_124" />
          <path clipRule="evenodd" d={svgPaths.p18c9cd00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_125" />
          <path clipRule="evenodd" d={svgPaths.p264fa900} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_126" />
          <path clipRule="evenodd" d={svgPaths.p2ae2c700} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_127" />
          <path clipRule="evenodd" d={svgPaths.p1313a500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_128" />
          <path clipRule="evenodd" d={svgPaths.p28ca1200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_129" />
          <path clipRule="evenodd" d={svgPaths.p3abab400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_130" />
          <path clipRule="evenodd" d={svgPaths.p2d40b3c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_131" />
          <path clipRule="evenodd" d={svgPaths.p35daa080} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_132" />
          <path clipRule="evenodd" d={svgPaths.p2155e000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_133" />
          <path clipRule="evenodd" d={svgPaths.p3b525490} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_134" />
          <path clipRule="evenodd" d={svgPaths.p32c4aa00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_135" />
          <path clipRule="evenodd" d={svgPaths.p5bbf840} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_136" />
          <path clipRule="evenodd" d={svgPaths.p3f317a80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_137" />
          <path clipRule="evenodd" d={svgPaths.p3ba2e0c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_138" />
          <path clipRule="evenodd" d={svgPaths.p17cc9e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_139" />
          <path clipRule="evenodd" d={svgPaths.p24211f00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_140" />
          <path clipRule="evenodd" d={svgPaths.pd887100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_141" />
          <path clipRule="evenodd" d={svgPaths.p370247c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_142" />
          <path clipRule="evenodd" d={svgPaths.p20f29dc0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_143" />
          <path clipRule="evenodd" d={svgPaths.p1467e000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_144" />
          <path clipRule="evenodd" d={svgPaths.p2b6b2d00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_145" />
          <path clipRule="evenodd" d={svgPaths.p2eb3100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_146" />
          <path clipRule="evenodd" d={svgPaths.p21600400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_147" />
          <path clipRule="evenodd" d={svgPaths.p14423d80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_148" />
          <path clipRule="evenodd" d={svgPaths.p39533800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_149" />
          <path clipRule="evenodd" d={svgPaths.p3cb25300} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_150" />
          <path clipRule="evenodd" d={svgPaths.p1ef58470} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_151" />
          <path clipRule="evenodd" d={svgPaths.p317b3880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_152" />
          <path clipRule="evenodd" d={svgPaths.p1c427c90} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_153" />
          <path clipRule="evenodd" d={svgPaths.p229a9800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_154" />
          <path clipRule="evenodd" d={svgPaths.p2a8eca00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_155" />
          <path clipRule="evenodd" d={svgPaths.p39d28800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_156" />
          <path clipRule="evenodd" d={svgPaths.p17e94700} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_157" />
          <path clipRule="evenodd" d={svgPaths.p2722a000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_158" />
          <path clipRule="evenodd" d={svgPaths.p1f5e8200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_159" />
          <path clipRule="evenodd" d={svgPaths.p1ba74700} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_160" />
          <path clipRule="evenodd" d={svgPaths.p190c2c80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_161" />
          <path clipRule="evenodd" d={svgPaths.p47d4dc0} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_162" />
          <path clipRule="evenodd" d={svgPaths.pea22520} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_163" />
          <path clipRule="evenodd" d={svgPaths.p1fe84770} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_164" />
          <path clipRule="evenodd" d={svgPaths.p1b854a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_165" />
          <path clipRule="evenodd" d={svgPaths.p13dd9300} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_166" />
          <path clipRule="evenodd" d={svgPaths.p4251180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_167" />
          <path clipRule="evenodd" d={svgPaths.p3c171f80} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_168" />
          <path clipRule="evenodd" d={svgPaths.p324f3e00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_169" />
          <path clipRule="evenodd" d={svgPaths.p2a71bff0} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_170" />
          <path clipRule="evenodd" d={svgPaths.p327a7600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_171" />
          <path clipRule="evenodd" d={svgPaths.p1ebfe7c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_172" />
          <path clipRule="evenodd" d={svgPaths.p3fa78280} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_173" />
          <path clipRule="evenodd" d={svgPaths.p3a099900} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_174" />
          <path clipRule="evenodd" d={svgPaths.pb03f300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_175" />
          <path clipRule="evenodd" d={svgPaths.p1ee43880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_176" />
          <path clipRule="evenodd" d={svgPaths.p2f1b7600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_177" />
          <path clipRule="evenodd" d={svgPaths.p2655ce80} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_178" />
          <path clipRule="evenodd" d={svgPaths.p263b4c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_179" />
          <path clipRule="evenodd" d={svgPaths.p3f262900} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_180" />
          <path clipRule="evenodd" d={svgPaths.p20cb92f0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_181" />
          <path clipRule="evenodd" d={svgPaths.p3ad9ca80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_182" />
          <path clipRule="evenodd" d={svgPaths.p3fa4f780} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_183" />
          <path clipRule="evenodd" d={svgPaths.p6472180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_184" />
          <path clipRule="evenodd" d={svgPaths.p3b0e1500} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_185" />
          <path clipRule="evenodd" d={svgPaths.p36743380} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_186" />
          <path clipRule="evenodd" d={svgPaths.pd276600} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_187" />
          <path clipRule="evenodd" d={svgPaths.p204ef900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_188" />
          <path clipRule="evenodd" d={svgPaths.p3181f200} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_189" />
          <path clipRule="evenodd" d={svgPaths.p39eb6400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_190" />
          <path clipRule="evenodd" d={svgPaths.p2ef48e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_191" />
          <path clipRule="evenodd" d={svgPaths.p25ffa80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_192" />
          <path clipRule="evenodd" d={svgPaths.p9551e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_193" />
          <path clipRule="evenodd" d={svgPaths.p21c6e800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_194" />
          <path clipRule="evenodd" d={svgPaths.p2075210} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_195" />
          <path clipRule="evenodd" d={svgPaths.p282c7200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_196" />
          <path clipRule="evenodd" d={svgPaths.p23529b00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_197" />
          <path clipRule="evenodd" d={svgPaths.p3df92500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_198" />
          <path clipRule="evenodd" d={svgPaths.p384edd00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_199" />
          <path clipRule="evenodd" d={svgPaths.p1ed0eb80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_200" />
          <path clipRule="evenodd" d={svgPaths.p15f6c880} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_201" />
          <path clipRule="evenodd" d={svgPaths.p496f9c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_202" />
          <path clipRule="evenodd" d={svgPaths.p1bf77e00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_203" />
          <path clipRule="evenodd" d={svgPaths.p3192c400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_204" />
          <path clipRule="evenodd" d={svgPaths.p25f0aa00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_205" />
          <path clipRule="evenodd" d={svgPaths.p368fb800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_206" />
          <path clipRule="evenodd" d={svgPaths.p2445bb70} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_207" />
          <path clipRule="evenodd" d={svgPaths.pf24dd00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_208" />
          <path clipRule="evenodd" d={svgPaths.p3c0c1ad0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_209" />
          <path clipRule="evenodd" d={svgPaths.p2e2c7b70} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_210" />
          <path clipRule="evenodd" d={svgPaths.p2b262b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_211" />
          <path clipRule="evenodd" d={svgPaths.p222d3a80} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_212" />
          <path clipRule="evenodd" d={svgPaths.p257e8e30} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_213" />
          <path clipRule="evenodd" d={svgPaths.pe10a880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_214" />
          <path clipRule="evenodd" d={svgPaths.p77c5000} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_215" />
          <path clipRule="evenodd" d={svgPaths.p32a77300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_216" />
          <path clipRule="evenodd" d={svgPaths.p2c7c4700} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_217" />
          <path clipRule="evenodd" d={svgPaths.p3a3aec60} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_218" />
          <path clipRule="evenodd" d={svgPaths.pb41c000} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_219" />
          <path clipRule="evenodd" d={svgPaths.pf661400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_220" />
          <path clipRule="evenodd" d={svgPaths.p2ccda5f0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_221" />
          <path clipRule="evenodd" d={svgPaths.p134e3180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_222" />
          <path clipRule="evenodd" d={svgPaths.p27479200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_223" />
          <path clipRule="evenodd" d={svgPaths.p12924680} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_224" />
          <path clipRule="evenodd" d={svgPaths.p1e6f0c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_225" />
          <path clipRule="evenodd" d={svgPaths.p28122d00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_226" />
          <path clipRule="evenodd" d={svgPaths.p20d430b0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_227" />
          <path clipRule="evenodd" d={svgPaths.p3dcff670} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_228" />
          <path clipRule="evenodd" d={svgPaths.p6afd800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_229" />
          <path clipRule="evenodd" d={svgPaths.p21b677f2} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_230" />
          <path clipRule="evenodd" d={svgPaths.p12e4af40} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_231" />
          <path clipRule="evenodd" d={svgPaths.p331b3400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_232" />
          <path clipRule="evenodd" d={svgPaths.p3a188310} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_233" />
          <path clipRule="evenodd" d={svgPaths.p33b67d40} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_234" />
          <path clipRule="evenodd" d={svgPaths.p1138d400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_235" />
          <path clipRule="evenodd" d={svgPaths.p3b4c3c00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_236" />
          <path clipRule="evenodd" d={svgPaths.p198d4c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_237" />
          <path clipRule="evenodd" d={svgPaths.p3d9635c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_238" />
          <path clipRule="evenodd" d={svgPaths.pb636900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_239" />
          <path clipRule="evenodd" d={svgPaths.p3acaaa00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_240" />
          <path clipRule="evenodd" d={svgPaths.p3897e800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_241" />
          <path clipRule="evenodd" d={svgPaths.p9c973f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_242" />
          <path clipRule="evenodd" d={svgPaths.p23a0a240} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_243" />
          <path clipRule="evenodd" d={svgPaths.p306ee100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_244" />
          <path clipRule="evenodd" d={svgPaths.p1a2ed3c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_245" />
          <path clipRule="evenodd" d={svgPaths.p1a719100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_246" />
          <path clipRule="evenodd" d={svgPaths.p38db2400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_247" />
          <path clipRule="evenodd" d={svgPaths.p3276a800} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_248" />
          <path clipRule="evenodd" d={svgPaths.p30ae9080} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_249" />
          <path clipRule="evenodd" d={svgPaths.p3a1cd000} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_250" />
          <path clipRule="evenodd" d={svgPaths.pd436a00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_251" />
          <path clipRule="evenodd" d={svgPaths.p3b289200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_252" />
          <path clipRule="evenodd" d={svgPaths.pd9c2a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_253" />
          <path clipRule="evenodd" d={svgPaths.p1c17a180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_254" />
          <path clipRule="evenodd" d={svgPaths.pbd0300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_255" />
          <path clipRule="evenodd" d={svgPaths.p3c0afc00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_256" />
          <path clipRule="evenodd" d={svgPaths.pb522180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_257" />
          <path clipRule="evenodd" d={svgPaths.p366ab300} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_258" />
          <path clipRule="evenodd" d={svgPaths.p316b1180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_259" />
          <path clipRule="evenodd" d={svgPaths.p161b91f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_260" />
          <path clipRule="evenodd" d={svgPaths.p3d339880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_261" />
          <path clipRule="evenodd" d={svgPaths.p225d7200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_262" />
          <path clipRule="evenodd" d={svgPaths.p252f5730} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_263" />
          <path clipRule="evenodd" d={svgPaths.p39995a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_264" />
          <path clipRule="evenodd" d={svgPaths.p29c99400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_265" />
          <path clipRule="evenodd" d={svgPaths.p17cf5e80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_266" />
          <path clipRule="evenodd" d={svgPaths.p60b2680} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_267" />
          <path clipRule="evenodd" d={svgPaths.p79be100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_268" />
          <path clipRule="evenodd" d={svgPaths.p36e77500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_269" />
          <path clipRule="evenodd" d={svgPaths.p13854880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_270" />
          <path clipRule="evenodd" d={svgPaths.p28a6e100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_271" />
          <path clipRule="evenodd" d={svgPaths.pae1f000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_272" />
          <path clipRule="evenodd" d={svgPaths.p2c691100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_273" />
          <path clipRule="evenodd" d={svgPaths.p1519200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_274" />
          <path clipRule="evenodd" d={svgPaths.p6f97b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_275" />
          <path clipRule="evenodd" d={svgPaths.p104e2880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_276" />
          <path clipRule="evenodd" d={svgPaths.p1d25100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_277" />
          <path clipRule="evenodd" d={svgPaths.p3b208800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_278" />
          <path clipRule="evenodd" d={svgPaths.pcc63a00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_279" />
          <path clipRule="evenodd" d={svgPaths.p2043fe80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_280" />
          <path clipRule="evenodd" d={svgPaths.pfe74500} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_281" />
          <path clipRule="evenodd" d={svgPaths.p5089980} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_282" />
          <path clipRule="evenodd" d={svgPaths.p1c8f1000} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_283" />
          <path clipRule="evenodd" d={svgPaths.p3cac1c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_284" />
          <path clipRule="evenodd" d={svgPaths.p2e756e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_285" />
          <path clipRule="evenodd" d={svgPaths.pdc93700} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_286" />
          <path clipRule="evenodd" d={svgPaths.p1685e380} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_287" />
          <path clipRule="evenodd" d={svgPaths.p3be92600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_288" />
          <path clipRule="evenodd" d={svgPaths.p25c70700} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_289" />
          <path clipRule="evenodd" d={svgPaths.p2be63600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_290" />
          <path clipRule="evenodd" d={svgPaths.p3b28bf00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_291" />
          <path clipRule="evenodd" d={svgPaths.p35069500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_292" />
          <path clipRule="evenodd" d={svgPaths.p1375f600} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_293" />
          <path clipRule="evenodd" d={svgPaths.p18835500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_294" />
          <path clipRule="evenodd" d={svgPaths.p18d5af80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_295" />
          <path clipRule="evenodd" d={svgPaths.p220c17c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_296" />
          <path clipRule="evenodd" d={svgPaths.p15f72e80} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_297" />
          <path clipRule="evenodd" d={svgPaths.p1c62cf00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_298" />
          <path clipRule="evenodd" d={svgPaths.p18b6180} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_299" />
          <path clipRule="evenodd" d={svgPaths.p2e46fa20} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_300" />
          <path clipRule="evenodd" d={svgPaths.p16306800} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_301" />
          <path clipRule="evenodd" d={svgPaths.p18abec80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_302" />
          <path clipRule="evenodd" d={svgPaths.p6cd4780} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_303" />
          <path clipRule="evenodd" d={svgPaths.p19758e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_304" />
          <path clipRule="evenodd" d={svgPaths.p3ec6b480} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_305" />
          <path clipRule="evenodd" d={svgPaths.p79b0480} fill="var(--fill-0, #C0B531)" fillRule="evenodd" id="Vector_306" />
          <path clipRule="evenodd" d={svgPaths.p14039280} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_307" />
          <path clipRule="evenodd" d={svgPaths.p3f28ff00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_308" />
          <path clipRule="evenodd" d={svgPaths.p11176480} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_309" />
          <path clipRule="evenodd" d={svgPaths.p219e36a0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_310" />
          <path clipRule="evenodd" d={svgPaths.p13bdfcc0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_311" />
          <path clipRule="evenodd" d={svgPaths.p222c7c70} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_312" />
          <path clipRule="evenodd" d={svgPaths.p2ec94600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_313" />
          <path clipRule="evenodd" d={svgPaths.p34d86800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_314" />
          <path clipRule="evenodd" d={svgPaths.p33f14ac0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_315" />
          <path clipRule="evenodd" d={svgPaths.p1ad0e000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_316" />
          <path clipRule="evenodd" d={svgPaths.pa7c9b80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_317" />
          <path clipRule="evenodd" d={svgPaths.p33b0d100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_318" />
          <path clipRule="evenodd" d={svgPaths.p46d0200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_319" />
          <path clipRule="evenodd" d={svgPaths.p33e568a0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_320" />
          <path clipRule="evenodd" d={svgPaths.p3469a300} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_321" />
          <path clipRule="evenodd" d={svgPaths.p8fc1780} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_322" />
          <path clipRule="evenodd" d={svgPaths.p36a84700} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_323" />
          <path clipRule="evenodd" d={svgPaths.p17c426b0} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_324" />
          <path clipRule="evenodd" d={svgPaths.p1da09180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_325" />
          <path clipRule="evenodd" d={svgPaths.pb897900} fill="var(--fill-0, #DE6BA9)" fillRule="evenodd" id="Vector_326" />
          <path clipRule="evenodd" d={svgPaths.pc69ad00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_327" />
          <path clipRule="evenodd" d={svgPaths.p2a1ff00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_328" />
          <path clipRule="evenodd" d={svgPaths.p3a250c80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_329" />
          <path clipRule="evenodd" d={svgPaths.p9b03300} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_330" />
          <path clipRule="evenodd" d={svgPaths.p1942b100} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_331" />
          <path clipRule="evenodd" d={svgPaths.pd958000} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_332" />
          <path clipRule="evenodd" d={svgPaths.p382ea4c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_333" />
          <path clipRule="evenodd" d={svgPaths.pd14ee80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_334" />
          <path clipRule="evenodd" d={svgPaths.p3da30a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_335" />
          <path clipRule="evenodd" d={svgPaths.p18de9b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_336" />
          <path clipRule="evenodd" d={svgPaths.p1e040c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_337" />
          <path clipRule="evenodd" d={svgPaths.p32c02f00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_338" />
          <path clipRule="evenodd" d={svgPaths.p15bda780} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_339" />
          <path clipRule="evenodd" d={svgPaths.p3a352100} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_340" />
          <path clipRule="evenodd" d={svgPaths.p30ecddc0} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_341" />
          <path clipRule="evenodd" d={svgPaths.p3f9b5780} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_342" />
          <path clipRule="evenodd" d={svgPaths.p325df300} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_343" />
          <path clipRule="evenodd" d={svgPaths.p10134700} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_344" />
          <path clipRule="evenodd" d={svgPaths.p376e6200} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_345" />
          <path clipRule="evenodd" d={svgPaths.p28c71a00} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_346" />
          <path clipRule="evenodd" d={svgPaths.p37ffd900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_347" />
          <path clipRule="evenodd" d={svgPaths.p364f5600} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_348" />
          <path clipRule="evenodd" d={svgPaths.p142b4500} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_349" />
          <path clipRule="evenodd" d={svgPaths.p28ed1200} fill="var(--fill-0, #F6D491)" fillRule="evenodd" id="Vector_350" />
          <path clipRule="evenodd" d={svgPaths.pec034c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_351" />
          <path clipRule="evenodd" d={svgPaths.p39bc0b00} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_352" />
          <path clipRule="evenodd" d={svgPaths.p23156a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_353" />
          <path clipRule="evenodd" d={svgPaths.p26c73c00} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_354" />
          <path clipRule="evenodd" d={svgPaths.pddb0180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_355" />
          <path clipRule="evenodd" d={svgPaths.p2c5f29f0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_356" />
          <path clipRule="evenodd" d={svgPaths.p463ba00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_357" />
          <path clipRule="evenodd" d={svgPaths.p272e2880} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_358" />
          <path clipRule="evenodd" d={svgPaths.p3b171180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_359" />
          <path clipRule="evenodd" d={svgPaths.p130f89f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_360" />
          <path clipRule="evenodd" d={svgPaths.p226c6180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_361" />
          <path clipRule="evenodd" d={svgPaths.p39eff500} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_362" />
          <path clipRule="evenodd" d={svgPaths.p286ece80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_363" />
          <path clipRule="evenodd" d={svgPaths.p2ca7f900} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_364" />
          <path clipRule="evenodd" d={svgPaths.p1493b200} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_365" />
          <path clipRule="evenodd" d={svgPaths.p3c67ce80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_366" />
          <path clipRule="evenodd" d={svgPaths.p4bffbf0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_367" />
          <path clipRule="evenodd" d={svgPaths.pa932300} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_368" />
          <path clipRule="evenodd" d={svgPaths.p36ec24f2} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_369" />
          <path clipRule="evenodd" d={svgPaths.p2006c820} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_370" />
          <path clipRule="evenodd" d={svgPaths.p134f6000} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_371" />
          <path clipRule="evenodd" d={svgPaths.p2770d900} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_372" />
          <path clipRule="evenodd" d={svgPaths.p12977a00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_373" />
          <path clipRule="evenodd" d={svgPaths.pab5be00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_374" />
          <path clipRule="evenodd" d={svgPaths.p5977280} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_375" />
          <path clipRule="evenodd" d={svgPaths.p1435b900} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_376" />
          <path clipRule="evenodd" d={svgPaths.p3075d880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_377" />
          <path clipRule="evenodd" d={svgPaths.pa5b2a80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_378" />
          <path clipRule="evenodd" d={svgPaths.p3d8c0200} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_379" />
          <path clipRule="evenodd" d={svgPaths.p39ba36f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_380" />
          <path clipRule="evenodd" d={svgPaths.p6c20500} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_381" />
          <path clipRule="evenodd" d={svgPaths.p3538a480} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_382" />
          <path clipRule="evenodd" d={svgPaths.pa1e9f00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_383" />
          <path clipRule="evenodd" d={svgPaths.p3a3f0e00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_384" />
          <path clipRule="evenodd" d={svgPaths.p2857c100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_385" />
          <path clipRule="evenodd" d={svgPaths.p2c28b70} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_386" />
          <path clipRule="evenodd" d={svgPaths.p3eea480} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_387" />
          <path clipRule="evenodd" d={svgPaths.p3b4adf00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_388" />
          <path clipRule="evenodd" d={svgPaths.p2ca53800} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_389" />
          <path clipRule="evenodd" d={svgPaths.p3684d700} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_390" />
          <path clipRule="evenodd" d={svgPaths.p2cbf4b00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_391" />
          <path clipRule="evenodd" d={svgPaths.p174d8400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_392" />
          <path clipRule="evenodd" d={svgPaths.p8a9bd80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_393" />
          <path clipRule="evenodd" d={svgPaths.p10afa00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_394" />
          <path clipRule="evenodd" d={svgPaths.pda6c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_395" />
          <path clipRule="evenodd" d={svgPaths.p238a1c70} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_396" />
          <path clipRule="evenodd" d={svgPaths.p286d0d00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_397" />
          <path clipRule="evenodd" d={svgPaths.p215800} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_398" />
          <path clipRule="evenodd" d={svgPaths.p3590df00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_399" />
          <path clipRule="evenodd" d={svgPaths.pab40880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_400" />
          <path clipRule="evenodd" d={svgPaths.p3b79d1b0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_401" />
          <path clipRule="evenodd" d={svgPaths.p33add100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_402" />
          <path clipRule="evenodd" d={svgPaths.p288940f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_403" />
          <path clipRule="evenodd" d={svgPaths.p296c5400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_404" />
          <path clipRule="evenodd" d={svgPaths.pd71e580} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_405" />
          <path clipRule="evenodd" d={svgPaths.p29ab4f80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_406" />
          <path clipRule="evenodd" d={svgPaths.p28def780} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_407" />
          <path clipRule="evenodd" d={svgPaths.p32ce9100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_408" />
          <path clipRule="evenodd" d={svgPaths.p1355b600} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_409" />
          <path clipRule="evenodd" d={svgPaths.p99e4400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_410" />
          <path clipRule="evenodd" d={svgPaths.p1af30100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_411" />
          <path clipRule="evenodd" d={svgPaths.p1f7b2e72} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_412" />
          <path clipRule="evenodd" d={svgPaths.p1b58d200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_413" />
          <path clipRule="evenodd" d={svgPaths.p2bab3800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_414" />
          <path clipRule="evenodd" d={svgPaths.p34b46d40} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_415" />
          <path clipRule="evenodd" d={svgPaths.p369c9e80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_416" />
          <path clipRule="evenodd" d={svgPaths.p1ef02f00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_417" />
          <path clipRule="evenodd" d={svgPaths.p19a39f80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_418" />
          <path clipRule="evenodd" d={svgPaths.p10caa200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_419" />
          <path clipRule="evenodd" d={svgPaths.p176f9080} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_420" />
          <path clipRule="evenodd" d={svgPaths.p175f73d0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_421" />
          <path clipRule="evenodd" d={svgPaths.p110a2100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_422" />
          <path clipRule="evenodd" d={svgPaths.p16563000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_423" />
          <path clipRule="evenodd" d={svgPaths.p3700fc00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_424" />
          <path clipRule="evenodd" d={svgPaths.p2249e200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_425" />
          <path clipRule="evenodd" d={svgPaths.p37ab6871} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_426" />
          <path clipRule="evenodd" d={svgPaths.pbb8a400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_427" />
          <path clipRule="evenodd" d={svgPaths.p3e1d4500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_428" />
          <path clipRule="evenodd" d={svgPaths.p3d3d3400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_429" />
          <path clipRule="evenodd" d={svgPaths.p56b8800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_430" />
          <path clipRule="evenodd" d={svgPaths.p3e73580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_431" />
          <path clipRule="evenodd" d={svgPaths.p3eef3c00} fill="var(--fill-0, #4653A4)" fillRule="evenodd" id="Vector_432" />
          <path clipRule="evenodd" d={svgPaths.p6d0d80} fill="var(--fill-0, #4653A4)" fillRule="evenodd" id="Vector_433" />
          <path clipRule="evenodd" d={svgPaths.p16b9f9f0} fill="var(--fill-0, #4653A4)" fillRule="evenodd" id="Vector_434" />
          <path clipRule="evenodd" d={svgPaths.p9f7df00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_435" />
          <path clipRule="evenodd" d={svgPaths.p17ce2900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_436" />
          <path clipRule="evenodd" d={svgPaths.p1213b600} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_437" />
          <path clipRule="evenodd" d={svgPaths.p22d52400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_438" />
          <path clipRule="evenodd" d={svgPaths.p1e324a90} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_439" />
          <path clipRule="evenodd" d={svgPaths.p1705d080} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_440" />
          <path clipRule="evenodd" d={svgPaths.p10992c00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_441" />
          <path clipRule="evenodd" d={svgPaths.p108b6b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_442" />
          <path clipRule="evenodd" d={svgPaths.p5b7a800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_443" />
          <path clipRule="evenodd" d={svgPaths.p22c64b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_444" />
          <path clipRule="evenodd" d={svgPaths.p27610000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_445" />
          <path clipRule="evenodd" d={svgPaths.p1eeb2500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_446" />
          <path clipRule="evenodd" d={svgPaths.p2aaf3cc2} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_447" />
          <path clipRule="evenodd" d={svgPaths.p17ed27f0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_448" />
          <path clipRule="evenodd" d={svgPaths.p38ab0b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_449" />
          <path clipRule="evenodd" d={svgPaths.p76ae00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_450" />
          <path clipRule="evenodd" d={svgPaths.p3c50e5f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_451" />
          <path clipRule="evenodd" d={svgPaths.p30b51200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_452" />
          <path clipRule="evenodd" d={svgPaths.p1c700100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_453" />
          <path clipRule="evenodd" d={svgPaths.p38653b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_454" />
          <path clipRule="evenodd" d={svgPaths.p278d9c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_455" />
          <path clipRule="evenodd" d={svgPaths.p27219e80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_456" />
          <path clipRule="evenodd" d={svgPaths.p1fbe1880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_457" />
          <path clipRule="evenodd" d={svgPaths.p1d3ce300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_458" />
          <path clipRule="evenodd" d={svgPaths.p4eecb80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_459" />
          <path clipRule="evenodd" d={svgPaths.p29edcad0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_460" />
          <path clipRule="evenodd" d={svgPaths.p3357c4f1} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_461" />
          <path clipRule="evenodd" d={svgPaths.p17ce5980} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_462" />
          <path clipRule="evenodd" d={svgPaths.p2cdbca00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_463" />
          <path clipRule="evenodd" d={svgPaths.p2bff7730} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_464" />
          <path clipRule="evenodd" d={svgPaths.p1aac73f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_465" />
          <path clipRule="evenodd" d={svgPaths.p2a6ede00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_466" />
          <path clipRule="evenodd" d={svgPaths.p38b49380} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_467" />
          <path clipRule="evenodd" d={svgPaths.p3deb0a00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_468" />
          <path clipRule="evenodd" d={svgPaths.pace5400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_469" />
          <path clipRule="evenodd" d={svgPaths.p27715400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_470" />
          <path clipRule="evenodd" d={svgPaths.p3296c180} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_471" />
          <path clipRule="evenodd" d={svgPaths.p5c87480} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_472" />
          <path clipRule="evenodd" d={svgPaths.p13431a80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_473" />
          <path clipRule="evenodd" d={svgPaths.p2782b800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_474" />
          <path clipRule="evenodd" d={svgPaths.p22e4f730} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_475" />
          <path clipRule="evenodd" d={svgPaths.p336d0800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_476" />
          <path clipRule="evenodd" d={svgPaths.p20b8b80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_477" />
        </g>
      </svg>
    </div>
  );
}

function LeagueIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="League Icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Spain">
        <Icon />
      </div>
    </div>
  );
}

function LeagueHeading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="League Heading">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">League Heading</p>
      </div>
    </div>
  );
}

function EventsQty() {
  return (
    <div className="bg-[#993800] content-stretch flex flex-col h-[16px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Events Qty">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">112</p>
      </div>
    </div>
  );
}

function NumberOfMatches() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Number of Matches">
      <EventsQty />
    </div>
  );
}

function LeagueItemHeading() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="League Item Heading">
      <button className="block cursor-pointer relative shrink-0 size-[20px]" data-name="_Like sport">
        <div className="absolute inset-0 overflow-clip" data-name="Favorites Stroke">
          <div className="absolute inset-[13.54%_8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14.5832">
              <path d={svgPaths.p31fcbd80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
      </button>
      <LeagueIcon />
      <LeagueHeading />
      <NumberOfMatches />
    </div>
  );
}

function ExpandableArrow({ expanded, onClick }: { expanded: boolean; onClick: () => void }) {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <motion.button
        type="button"
        onClick={onClick}
        animate={{ rotate: expanded ? 0 : 180 }}
        whileTap={{ scale: 0.85 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="content-stretch cursor-pointer flex items-center relative"
        data-name="Expandable Arrow"
        aria-expanded={expanded}
        aria-label={expanded ? "Collapse league" : "Expand league"}
      >
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Up">
          <div className="absolute bottom-[35.43%] left-1/4 right-1/4 top-[35.42%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6.99792">
              <path clipRule="evenodd" d={svgPaths.p38da2c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </motion.button>
    </div>
  );
}

function LeagueItemHeadingExpandable({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  return (
    <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="League Item Heading Expandable">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <LeagueItemHeading />
          <ExpandableArrow expanded={expanded} onClick={onToggle} />
        </div>
      </div>
    </div>
  );
}

function EventInfoCounter5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Event Info Counter">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Favorite Icon">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[16px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.pd9ac00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">93’</span>
            <span className="leading-[14px]">{` 2nd Half`}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
    </div>
  );
}

function Team19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Manchester Team City Name</p>
      </div>
    </div>
  );
}

function EventInfo() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team19 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Team20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="overflow-hidden text-ellipsis whitespace-pre">
          <span className="leading-[18px]">{`Barcelona `}</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic">{` Team City Name`}</span>
        </p>
      </div>
    </div>
  );
}

function EventInfo1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team20 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function SelectionLineGrid1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[40%]" data-name="Selection Line Grid">
      <EventInfoCounter5 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event Info Wrapper">
        <EventInfo />
        <EventInfo1 />
      </div>
      <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Event Info Icons">
        <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative shrink-0 size-[16px]" data-name="Early Payouts">
          <div className="absolute inset-[11.11%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4447 12.4446">
              <path clipRule="evenodd" d={svgPaths.p2e322880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bonus Icon">
          <div className="absolute h-[12.445px] left-[1.58px] top-[1.58px] w-[12.444px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4443 12.4453">
              <path d={svgPaths.p2bfdee80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bet Builder Icon">
          <div className="absolute left-[1.78px] size-[12.444px] top-[1.78px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4444 12.4444">
              <g id="Icon">
                <path d={svgPaths.pcbe0a00} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p9bf6f80} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p2c099880} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p16806f00} fill="var(--fill-0, #E5EAFA)" />
                <path clipRule="evenodd" d={svgPaths.p3226a180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Market Title">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Info Stroke">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p1d51e380} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
        <p className="leading-[14px] overflow-hidden text-ellipsis">Live Betting 1X2</p>
      </div>
    </div>
  );
}

function MarketsNumbers() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Markets Numbers">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">+196</p>
      </div>
    </div>
  );
}

function Market1X2Title() {
  return (
    <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0 w-full" data-name="Market 1x2 Title">
      <MarketTitle />
      <MarketsNumbers />
    </div>
  );
}

function SelectionMeaning() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SelectionOdds() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning />
      <SelectionOdds />
    </div>
  );
}

function SelectionMeaning1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">x</p>
      </div>
    </div>
  );
}

function SelectionOdds1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine1() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning1 />
      <SelectionOdds1 />
    </div>
  );
}

function SelectionMeaning2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function SelectionOdds2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine2() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning2 />
      <SelectionOdds2 />
    </div>
  );
}

function Lines() {
  const marketId = "market-lines-1";
  const marketLabel = "Total Goals";
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Lines">
      <OddsButton
        layout="vertical"
        trend="up"
        selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "0.5" }}
      />
      <OddsButton
        layout="vertical"
        selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.5" }}
      />
      <OddsButton
        layout="vertical"
        trend="down"
        selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "0.5" }}
      />
    </div>
  );
}

function MarketEventLines() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Market & Event Lines">
      <Market1X2Title />
      <Lines />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Wrapper">
      <MarketEventLines />
    </div>
  );
}

function EventInfoCounter6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Event Info Counter">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Favorite Icon">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[16px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.pd9ac00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">93’</span>
            <span className="leading-[14px]">{` 2nd Half`}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
    </div>
  );
}

function Team21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Manchester Team City Name</p>
      </div>
    </div>
  );
}

function EventInfo2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team21 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Team22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="overflow-hidden text-ellipsis whitespace-pre">
          <span className="leading-[18px]">{`Barcelona `}</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic">{` Team City Name`}</span>
        </p>
      </div>
    </div>
  );
}

function EventInfo3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team22 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function SelectionLineGrid2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[40%]" data-name="Selection Line Grid">
      <EventInfoCounter6 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event Info Wrapper">
        <EventInfo2 />
        <EventInfo3 />
      </div>
      <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Event Info Icons">
        <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative shrink-0 size-[16px]" data-name="Early Payouts">
          <div className="absolute inset-[11.11%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4447 12.4446">
              <path clipRule="evenodd" d={svgPaths.p2e322880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bonus Icon">
          <div className="absolute h-[12.445px] left-[1.58px] top-[1.58px] w-[12.444px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4443 12.4453">
              <path d={svgPaths.p2bfdee80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bet Builder Icon">
          <div className="absolute left-[1.78px] size-[12.444px] top-[1.78px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4444 12.4444">
              <g id="Icon">
                <path d={svgPaths.pcbe0a00} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p9bf6f80} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p2c099880} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p16806f00} fill="var(--fill-0, #E5EAFA)" />
                <path clipRule="evenodd" d={svgPaths.p3226a180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketTitle1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Market Title">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Info Stroke">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p1d51e380} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
        <p className="leading-[14px] overflow-hidden text-ellipsis">Live Betting 1X2</p>
      </div>
    </div>
  );
}

function MarketsNumbers1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Markets Numbers">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">+196</p>
      </div>
    </div>
  );
}

function Market1X2Title1() {
  return (
    <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0 w-full" data-name="Market 1x2 Title">
      <MarketTitle1 />
      <MarketsNumbers1 />
    </div>
  );
}

function SelectionMeaning3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SelectionOdds3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine3() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning3 />
      <SelectionOdds3 />
    </div>
  );
}

function SelectionMeaning4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">x</p>
      </div>
    </div>
  );
}

function SelectionOdds4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine4() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning4 />
      <SelectionOdds4 />
    </div>
  );
}

function SelectionMeaning5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function SelectionOdds5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine5() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning5 />
      <SelectionOdds5 />
    </div>
  );
}

function Lines1() {
  const marketId = "market-lines-2";
  const marketLabel = "Total Goals";
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Lines">
      <OddsButton layout="vertical" trend="up" selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "0.5" }} />
      <OddsButton layout="vertical" selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.5" }} />
      <OddsButton layout="vertical" trend="down" selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "0.5" }} />
    </div>
  );
}

function MarketEventLines1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Market & Event Lines">
      <Market1X2Title1 />
      <Lines1 />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Wrapper">
      <MarketEventLines1 />
    </div>
  );
}

function EventInfoCounter7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Event Info Counter">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Favorite Icon">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[16px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.pd9ac00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">93’</span>
            <span className="leading-[14px]">{` 2nd Half`}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
    </div>
  );
}

function Team23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Manchester Team City Name</p>
      </div>
    </div>
  );
}

function EventInfo4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team23 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Team24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="overflow-hidden text-ellipsis whitespace-pre">
          <span className="leading-[18px]">{`Barcelona `}</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic">{` Team City Name`}</span>
        </p>
      </div>
    </div>
  );
}

function EventInfo5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team24 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function SelectionLineGrid3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[40%]" data-name="Selection Line Grid">
      <EventInfoCounter7 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event Info Wrapper">
        <EventInfo4 />
        <EventInfo5 />
      </div>
      <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Event Info Icons">
        <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative shrink-0 size-[16px]" data-name="Early Payouts">
          <div className="absolute inset-[11.11%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4447 12.4446">
              <path clipRule="evenodd" d={svgPaths.p2e322880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bonus Icon">
          <div className="absolute h-[12.445px] left-[1.58px] top-[1.58px] w-[12.444px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4443 12.4453">
              <path d={svgPaths.p2bfdee80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bet Builder Icon">
          <div className="absolute left-[1.78px] size-[12.444px] top-[1.78px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4444 12.4444">
              <g id="Icon">
                <path d={svgPaths.pcbe0a00} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p9bf6f80} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p2c099880} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p16806f00} fill="var(--fill-0, #E5EAFA)" />
                <path clipRule="evenodd" d={svgPaths.p3226a180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketTitle2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Market Title">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Info Stroke">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p1d51e380} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
        <p className="leading-[14px] overflow-hidden text-ellipsis">Live Betting 1X2</p>
      </div>
    </div>
  );
}

function MarketsNumbers2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Markets Numbers">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">+196</p>
      </div>
    </div>
  );
}

function Market1X2Title2() {
  return (
    <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0 w-full" data-name="Market 1x2 Title">
      <MarketTitle2 />
      <MarketsNumbers2 />
    </div>
  );
}

function SelectionMeaning6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SelectionOdds6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine6() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning6 />
      <SelectionOdds6 />
    </div>
  );
}

function SelectionMeaning7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">x</p>
      </div>
    </div>
  );
}

function SelectionOdds7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine7() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning7 />
      <SelectionOdds7 />
    </div>
  );
}

function SelectionMeaning8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function SelectionOdds8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine8() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning8 />
      <SelectionOdds8 />
    </div>
  );
}

function Lines2() {
  const marketId = "market-lines-3";
  const marketLabel = "Total Goals";
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Lines">
      <OddsButton layout="vertical" trend="up" selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "0.5" }} />
      <OddsButton layout="vertical" selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.5" }} />
      <OddsButton layout="vertical" trend="down" selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "0.5" }} />
    </div>
  );
}

function MarketEventLines2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Market & Event Lines">
      <Market1X2Title2 />
      <Lines2 />
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Wrapper">
      <MarketEventLines2 />
    </div>
  );
}

function EventInfoCounter8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Event Info Counter">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Favorite Icon">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[16px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.pd9ac00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">93’</span>
            <span className="leading-[14px]">{` 2nd Half`}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
    </div>
  );
}

function Team25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Manchester Team City Name</p>
      </div>
    </div>
  );
}

function EventInfo6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team25 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Team26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="overflow-hidden text-ellipsis whitespace-pre">
          <span className="leading-[18px]">{`Barcelona `}</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic">{` Team City Name`}</span>
        </p>
      </div>
    </div>
  );
}

function EventInfo7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team26 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function SelectionLineGrid4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[40%]" data-name="Selection Line Grid">
      <EventInfoCounter8 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event Info Wrapper">
        <EventInfo6 />
        <EventInfo7 />
      </div>
      <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Event Info Icons">
        <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative shrink-0 size-[16px]" data-name="Early Payouts">
          <div className="absolute inset-[11.11%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4447 12.4446">
              <path clipRule="evenodd" d={svgPaths.p2e322880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bonus Icon">
          <div className="absolute h-[12.445px] left-[1.58px] top-[1.58px] w-[12.444px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4443 12.4453">
              <path d={svgPaths.p2bfdee80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bet Builder Icon">
          <div className="absolute left-[1.78px] size-[12.444px] top-[1.78px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4444 12.4444">
              <g id="Icon">
                <path d={svgPaths.pcbe0a00} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p9bf6f80} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p2c099880} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p16806f00} fill="var(--fill-0, #E5EAFA)" />
                <path clipRule="evenodd" d={svgPaths.p3226a180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketTitle3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Market Title">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Info Stroke">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p1d51e380} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
        <p className="leading-[14px] overflow-hidden text-ellipsis">Live Betting 1X2</p>
      </div>
    </div>
  );
}

function MarketsNumbers3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Markets Numbers">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">+196</p>
      </div>
    </div>
  );
}

function Market1X2Title3() {
  return (
    <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0 w-full" data-name="Market 1x2 Title">
      <MarketTitle3 />
      <MarketsNumbers3 />
    </div>
  );
}

function SelectionMeaning9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SelectionOdds9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine9() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning9 />
      <SelectionOdds9 />
    </div>
  );
}

function SelectionMeaning10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">x</p>
      </div>
    </div>
  );
}

function SelectionOdds10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine10() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning10 />
      <SelectionOdds10 />
    </div>
  );
}

function SelectionMeaning11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function SelectionOdds11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine11() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning11 />
      <SelectionOdds11 />
    </div>
  );
}

function Lines3() {
  const marketId = "market-lines-5";
  const marketLabel = "Total Goals";
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Lines">
      <OddsButton layout="vertical" trend="up" selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "0.5" }} />
      <OddsButton layout="vertical" selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.5" }} />
      <OddsButton layout="vertical" trend="down" selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "0.5" }} />
    </div>
  );
}

function MarketEventLines3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Market & Event Lines">
      <Market1X2Title3 />
      <Lines3 />
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Wrapper">
      <MarketEventLines3 />
    </div>
  );
}

function SelectionLineGrid() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Selection Line Grid">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[12px] pt-[4px] px-[12px] relative size-full">
        <div className="bg-[#17274b] min-w-[286px] relative rounded-[16px] shrink-0 w-full" data-name="Selection Event Line Grid">
          <div className="content-stretch flex gap-[8px] items-start min-w-[inherit] p-[8px] relative size-full">
            <SelectionLineGrid1 />
            <Wrapper />
          </div>
        </div>
        <div className="bg-[#17274b] min-w-[286px] relative rounded-[16px] shrink-0 w-full" data-name="Selection Event Line Grid">
          <div className="content-stretch flex gap-[8px] items-start min-w-[inherit] p-[8px] relative size-full">
            <SelectionLineGrid2 />
            <Wrapper1 />
          </div>
        </div>
        <div className="bg-[#17274b] min-w-[286px] relative rounded-[16px] shrink-0 w-full" data-name="Selection Event Line Grid">
          <div className="content-stretch flex gap-[8px] items-start min-w-[inherit] p-[8px] relative size-full">
            <SelectionLineGrid3 />
            <Wrapper2 />
          </div>
        </div>
        <div className="bg-[#17274b] min-w-[286px] relative rounded-[16px] shrink-0 w-full" data-name="Selection Event Line Grid">
          <div className="content-stretch flex gap-[8px] items-start min-w-[inherit] p-[8px] relative size-full">
            <SelectionLineGrid4 />
            <Wrapper3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute inset-[8.33%] overflow-clip rounded-[100px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3476d900} fill="var(--fill-0, #B5202E)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3824fa00} fill="var(--fill-0, #F5C426)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p157d6400} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p29b4e0f2} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.pa5fca00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.pe551900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p1fc05070} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p1b2ee680} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p3b0dd500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p3bcf7b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p2350c780} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p1599f300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p798b400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p5ddedf0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p30d98400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p210b1b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_16" />
          <path clipRule="evenodd" d={svgPaths.p365ead00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_17" />
          <path clipRule="evenodd" d={svgPaths.p191b40c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_18" />
          <path clipRule="evenodd" d={svgPaths.p26981b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_19" />
          <path clipRule="evenodd" d={svgPaths.p36587cf0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_20" />
          <path clipRule="evenodd" d={svgPaths.p31f1e200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_21" />
          <path clipRule="evenodd" d={svgPaths.p444f400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_22" />
          <path clipRule="evenodd" d={svgPaths.p4d45580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_23" />
          <path clipRule="evenodd" d={svgPaths.p977c280} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_24" />
          <path clipRule="evenodd" d={svgPaths.p2421ae80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_25" />
          <path clipRule="evenodd" d={svgPaths.p373f9a80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_26" />
          <path clipRule="evenodd" d={svgPaths.p1f048000} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_27" />
          <path clipRule="evenodd" d={svgPaths.p2fa30100} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_28" />
          <path clipRule="evenodd" d={svgPaths.p1d298060} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_29" />
          <path clipRule="evenodd" d={svgPaths.p18cd1b00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_30" />
          <path clipRule="evenodd" d={svgPaths.p2a4d0580} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_31" />
          <path clipRule="evenodd" d={svgPaths.p11f63400} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_32" />
          <path clipRule="evenodd" d={svgPaths.pa2d4f00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_33" />
          <path clipRule="evenodd" d={svgPaths.p6f5f1a0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_34" />
          <path clipRule="evenodd" d={svgPaths.p1735a000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_35" />
          <path clipRule="evenodd" d={svgPaths.p348e1380} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_36" />
          <path clipRule="evenodd" d={svgPaths.p26aab900} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_37" />
          <path clipRule="evenodd" d={svgPaths.p36052600} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_38" />
          <path clipRule="evenodd" d={svgPaths.p326e9c80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_39" />
          <path clipRule="evenodd" d={svgPaths.p3a3d2a00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_40" />
          <path clipRule="evenodd" d={svgPaths.p20591200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_41" />
          <path clipRule="evenodd" d={svgPaths.pcdcfc00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_42" />
          <path clipRule="evenodd" d={svgPaths.p32f1d000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_43" />
          <path clipRule="evenodd" d={svgPaths.pdfdf100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_44" />
          <path clipRule="evenodd" d={svgPaths.p9d777f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_45" />
          <path clipRule="evenodd" d={svgPaths.p18473580} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_46" />
          <path clipRule="evenodd" d={svgPaths.p1b853480} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_47" />
          <path clipRule="evenodd" d={svgPaths.p363f1180} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_48" />
          <path clipRule="evenodd" d={svgPaths.p2700def0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_49" />
          <path clipRule="evenodd" d={svgPaths.p23fef800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_50" />
          <path clipRule="evenodd" d={svgPaths.p31115080} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_51" />
          <path clipRule="evenodd" d={svgPaths.pcc81200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_52" />
          <path clipRule="evenodd" d={svgPaths.pb80e600} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_53" />
          <path clipRule="evenodd" d={svgPaths.p30a65140} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_54" />
          <path clipRule="evenodd" d={svgPaths.p3e506d00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_55" />
          <path clipRule="evenodd" d={svgPaths.p1fd1a700} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_56" />
          <path clipRule="evenodd" d={svgPaths.pb1c5800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_57" />
          <path clipRule="evenodd" d={svgPaths.p37ee3b80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_58" />
          <path clipRule="evenodd" d={svgPaths.p3ed32000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_59" />
          <path clipRule="evenodd" d={svgPaths.p174026c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_60" />
          <path clipRule="evenodd" d={svgPaths.p32c0b880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_61" />
          <path clipRule="evenodd" d={svgPaths.p1b6f3c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_62" />
          <path clipRule="evenodd" d={svgPaths.p667aa00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_63" />
          <path clipRule="evenodd" d={svgPaths.p3f8e7b72} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_64" />
          <path clipRule="evenodd" d={svgPaths.p1bb14480} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_65" />
          <path clipRule="evenodd" d={svgPaths.p30032cb0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_66" />
          <path clipRule="evenodd" d={svgPaths.p32d12c00} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_67" />
          <path clipRule="evenodd" d={svgPaths.pc166580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_68" />
          <path clipRule="evenodd" d={svgPaths.p1ab8a080} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_69" />
          <path clipRule="evenodd" d={svgPaths.p17ca6000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_70" />
          <path clipRule="evenodd" d={svgPaths.p13918a40} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_71" />
          <path clipRule="evenodd" d={svgPaths.p2524e100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_72" />
          <path clipRule="evenodd" d={svgPaths.p11d13600} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_73" />
          <path clipRule="evenodd" d={svgPaths.p3e8ce440} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_74" />
          <path clipRule="evenodd" d={svgPaths.p1e1b3c00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_75" />
          <path clipRule="evenodd" d={svgPaths.pf789d00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_76" />
          <path clipRule="evenodd" d={svgPaths.p26510772} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_77" />
          <path clipRule="evenodd" d={svgPaths.p32da0900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_78" />
          <path clipRule="evenodd" d={svgPaths.p121f00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_79" />
          <path clipRule="evenodd" d={svgPaths.p23174680} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_80" />
          <path clipRule="evenodd" d={svgPaths.p22378f80} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_81" />
          <path clipRule="evenodd" d={svgPaths.p1404e300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_82" />
          <path clipRule="evenodd" d={svgPaths.pc496500} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_83" />
          <path clipRule="evenodd" d={svgPaths.p28905e00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_84" />
          <path clipRule="evenodd" d={svgPaths.p3965100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_85" />
          <path clipRule="evenodd" d={svgPaths.p3a545a70} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_86" />
          <path clipRule="evenodd" d={svgPaths.p3b373500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_87" />
          <path clipRule="evenodd" d={svgPaths.pbee4c00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_88" />
          <path clipRule="evenodd" d={svgPaths.pb87c680} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_89" />
          <path clipRule="evenodd" d={svgPaths.p1904cb80} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_90" />
          <path clipRule="evenodd" d={svgPaths.p1c80fa30} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_91" />
          <path clipRule="evenodd" d={svgPaths.p1e2ee300} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_92" />
          <path clipRule="evenodd" d={svgPaths.p2101b580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_93" />
          <path clipRule="evenodd" d={svgPaths.p25b33e80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_94" />
          <path clipRule="evenodd" d={svgPaths.p38c3ae80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_95" />
          <path clipRule="evenodd" d={svgPaths.p1e0aad00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_96" />
          <path clipRule="evenodd" d={svgPaths.p9c2b900} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_97" />
          <path clipRule="evenodd" d={svgPaths.p19d97400} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_98" />
          <path clipRule="evenodd" d={svgPaths.p206ebc00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_99" />
          <path clipRule="evenodd" d={svgPaths.p33ca4b10} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_100" />
          <path clipRule="evenodd" d={svgPaths.p2451d080} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_101" />
          <path clipRule="evenodd" d={svgPaths.pa83bb00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_102" />
          <path clipRule="evenodd" d={svgPaths.p3e649100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_103" />
          <path clipRule="evenodd" d={svgPaths.p21f2f600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_104" />
          <path clipRule="evenodd" d={svgPaths.p22a5e200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_105" />
          <path clipRule="evenodd" d={svgPaths.p25785300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_106" />
          <path clipRule="evenodd" d={svgPaths.p2d371200} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_107" />
          <path clipRule="evenodd" d={svgPaths.p16d81100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_108" />
          <path clipRule="evenodd" d={svgPaths.p1ad2ec80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_109" />
          <path clipRule="evenodd" d={svgPaths.p5c60440} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_110" />
          <path clipRule="evenodd" d={svgPaths.p3a6b3f80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_111" />
          <path clipRule="evenodd" d={svgPaths.p2625b5f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_112" />
          <path clipRule="evenodd" d={svgPaths.p2dbf5880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_113" />
          <path clipRule="evenodd" d={svgPaths.p94900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_114" />
          <path clipRule="evenodd" d={svgPaths.p35451300} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_115" />
          <path clipRule="evenodd" d={svgPaths.p373b9a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_116" />
          <path clipRule="evenodd" d={svgPaths.p2e56fca0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_117" />
          <path clipRule="evenodd" d={svgPaths.p6be54c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_118" />
          <path clipRule="evenodd" d={svgPaths.p347b3c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_119" />
          <path clipRule="evenodd" d={svgPaths.p21fbc500} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_120" />
          <path clipRule="evenodd" d={svgPaths.p118ac300} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_121" />
          <path clipRule="evenodd" d={svgPaths.pcb4e180} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_122" />
          <path clipRule="evenodd" d={svgPaths.p319d0040} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_123" />
          <path clipRule="evenodd" d={svgPaths.p1dd5600} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_124" />
          <path clipRule="evenodd" d={svgPaths.p18c9cd00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_125" />
          <path clipRule="evenodd" d={svgPaths.p264fa900} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_126" />
          <path clipRule="evenodd" d={svgPaths.p2ae2c700} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_127" />
          <path clipRule="evenodd" d={svgPaths.p1313a500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_128" />
          <path clipRule="evenodd" d={svgPaths.p28ca1200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_129" />
          <path clipRule="evenodd" d={svgPaths.p3abab400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_130" />
          <path clipRule="evenodd" d={svgPaths.p2d40b3c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_131" />
          <path clipRule="evenodd" d={svgPaths.p35daa080} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_132" />
          <path clipRule="evenodd" d={svgPaths.p2155e000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_133" />
          <path clipRule="evenodd" d={svgPaths.p3b525490} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_134" />
          <path clipRule="evenodd" d={svgPaths.p32c4aa00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_135" />
          <path clipRule="evenodd" d={svgPaths.p5bbf840} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_136" />
          <path clipRule="evenodd" d={svgPaths.p3f317a80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_137" />
          <path clipRule="evenodd" d={svgPaths.p3ba2e0c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_138" />
          <path clipRule="evenodd" d={svgPaths.p17cc9e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_139" />
          <path clipRule="evenodd" d={svgPaths.p24211f00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_140" />
          <path clipRule="evenodd" d={svgPaths.pd887100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_141" />
          <path clipRule="evenodd" d={svgPaths.p370247c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_142" />
          <path clipRule="evenodd" d={svgPaths.p20f29dc0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_143" />
          <path clipRule="evenodd" d={svgPaths.p1467e000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_144" />
          <path clipRule="evenodd" d={svgPaths.p2b6b2d00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_145" />
          <path clipRule="evenodd" d={svgPaths.p2eb3100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_146" />
          <path clipRule="evenodd" d={svgPaths.p21600400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_147" />
          <path clipRule="evenodd" d={svgPaths.p14423d80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_148" />
          <path clipRule="evenodd" d={svgPaths.p39533800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_149" />
          <path clipRule="evenodd" d={svgPaths.p3cb25300} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_150" />
          <path clipRule="evenodd" d={svgPaths.p1ef58470} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_151" />
          <path clipRule="evenodd" d={svgPaths.p317b3880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_152" />
          <path clipRule="evenodd" d={svgPaths.p1c427c90} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_153" />
          <path clipRule="evenodd" d={svgPaths.p229a9800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_154" />
          <path clipRule="evenodd" d={svgPaths.p2a8eca00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_155" />
          <path clipRule="evenodd" d={svgPaths.p39d28800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_156" />
          <path clipRule="evenodd" d={svgPaths.p17e94700} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_157" />
          <path clipRule="evenodd" d={svgPaths.p2722a000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_158" />
          <path clipRule="evenodd" d={svgPaths.p1f5e8200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_159" />
          <path clipRule="evenodd" d={svgPaths.p1ba74700} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_160" />
          <path clipRule="evenodd" d={svgPaths.p190c2c80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_161" />
          <path clipRule="evenodd" d={svgPaths.p47d4dc0} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_162" />
          <path clipRule="evenodd" d={svgPaths.pea22520} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_163" />
          <path clipRule="evenodd" d={svgPaths.p1fe84770} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_164" />
          <path clipRule="evenodd" d={svgPaths.p1b854a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_165" />
          <path clipRule="evenodd" d={svgPaths.p13dd9300} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_166" />
          <path clipRule="evenodd" d={svgPaths.p4251180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_167" />
          <path clipRule="evenodd" d={svgPaths.p3c171f80} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_168" />
          <path clipRule="evenodd" d={svgPaths.p324f3e00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_169" />
          <path clipRule="evenodd" d={svgPaths.p2a71bff0} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_170" />
          <path clipRule="evenodd" d={svgPaths.p327a7600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_171" />
          <path clipRule="evenodd" d={svgPaths.p1ebfe7c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_172" />
          <path clipRule="evenodd" d={svgPaths.p3fa78280} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_173" />
          <path clipRule="evenodd" d={svgPaths.p3a099900} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_174" />
          <path clipRule="evenodd" d={svgPaths.pb03f300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_175" />
          <path clipRule="evenodd" d={svgPaths.p1ee43880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_176" />
          <path clipRule="evenodd" d={svgPaths.p2f1b7600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_177" />
          <path clipRule="evenodd" d={svgPaths.p2655ce80} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_178" />
          <path clipRule="evenodd" d={svgPaths.p263b4c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_179" />
          <path clipRule="evenodd" d={svgPaths.p3f262900} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_180" />
          <path clipRule="evenodd" d={svgPaths.p20cb92f0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_181" />
          <path clipRule="evenodd" d={svgPaths.p3ad9ca80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_182" />
          <path clipRule="evenodd" d={svgPaths.p3fa4f780} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_183" />
          <path clipRule="evenodd" d={svgPaths.p6472180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_184" />
          <path clipRule="evenodd" d={svgPaths.p3b0e1500} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_185" />
          <path clipRule="evenodd" d={svgPaths.p36743380} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_186" />
          <path clipRule="evenodd" d={svgPaths.pd276600} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_187" />
          <path clipRule="evenodd" d={svgPaths.p204ef900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_188" />
          <path clipRule="evenodd" d={svgPaths.p3181f200} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_189" />
          <path clipRule="evenodd" d={svgPaths.p39eb6400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_190" />
          <path clipRule="evenodd" d={svgPaths.p2ef48e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_191" />
          <path clipRule="evenodd" d={svgPaths.p25ffa80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_192" />
          <path clipRule="evenodd" d={svgPaths.p9551e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_193" />
          <path clipRule="evenodd" d={svgPaths.p21c6e800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_194" />
          <path clipRule="evenodd" d={svgPaths.p2075210} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_195" />
          <path clipRule="evenodd" d={svgPaths.p282c7200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_196" />
          <path clipRule="evenodd" d={svgPaths.p23529b00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_197" />
          <path clipRule="evenodd" d={svgPaths.p3df92500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_198" />
          <path clipRule="evenodd" d={svgPaths.p384edd00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_199" />
          <path clipRule="evenodd" d={svgPaths.p1ed0eb80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_200" />
          <path clipRule="evenodd" d={svgPaths.p15f6c880} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_201" />
          <path clipRule="evenodd" d={svgPaths.p496f9c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_202" />
          <path clipRule="evenodd" d={svgPaths.p1bf77e00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_203" />
          <path clipRule="evenodd" d={svgPaths.p3192c400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_204" />
          <path clipRule="evenodd" d={svgPaths.p25f0aa00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_205" />
          <path clipRule="evenodd" d={svgPaths.p368fb800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_206" />
          <path clipRule="evenodd" d={svgPaths.p2445bb70} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_207" />
          <path clipRule="evenodd" d={svgPaths.pf24dd00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_208" />
          <path clipRule="evenodd" d={svgPaths.p3c0c1ad0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_209" />
          <path clipRule="evenodd" d={svgPaths.p2e2c7b70} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_210" />
          <path clipRule="evenodd" d={svgPaths.p2b262b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_211" />
          <path clipRule="evenodd" d={svgPaths.p222d3a80} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_212" />
          <path clipRule="evenodd" d={svgPaths.p257e8e30} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_213" />
          <path clipRule="evenodd" d={svgPaths.pe10a880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_214" />
          <path clipRule="evenodd" d={svgPaths.p77c5000} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_215" />
          <path clipRule="evenodd" d={svgPaths.p32a77300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_216" />
          <path clipRule="evenodd" d={svgPaths.p2c7c4700} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_217" />
          <path clipRule="evenodd" d={svgPaths.p3a3aec60} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_218" />
          <path clipRule="evenodd" d={svgPaths.pb41c000} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_219" />
          <path clipRule="evenodd" d={svgPaths.pf661400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_220" />
          <path clipRule="evenodd" d={svgPaths.p2ccda5f0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_221" />
          <path clipRule="evenodd" d={svgPaths.p134e3180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_222" />
          <path clipRule="evenodd" d={svgPaths.p27479200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_223" />
          <path clipRule="evenodd" d={svgPaths.p12924680} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_224" />
          <path clipRule="evenodd" d={svgPaths.p1e6f0c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_225" />
          <path clipRule="evenodd" d={svgPaths.p28122d00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_226" />
          <path clipRule="evenodd" d={svgPaths.p20d430b0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_227" />
          <path clipRule="evenodd" d={svgPaths.p3dcff670} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_228" />
          <path clipRule="evenodd" d={svgPaths.p6afd800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_229" />
          <path clipRule="evenodd" d={svgPaths.p21b677f2} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_230" />
          <path clipRule="evenodd" d={svgPaths.p12e4af40} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_231" />
          <path clipRule="evenodd" d={svgPaths.p331b3400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_232" />
          <path clipRule="evenodd" d={svgPaths.p3a188310} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_233" />
          <path clipRule="evenodd" d={svgPaths.p33b67d40} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_234" />
          <path clipRule="evenodd" d={svgPaths.p1138d400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_235" />
          <path clipRule="evenodd" d={svgPaths.p3b4c3c00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_236" />
          <path clipRule="evenodd" d={svgPaths.p198d4c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_237" />
          <path clipRule="evenodd" d={svgPaths.p3d9635c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_238" />
          <path clipRule="evenodd" d={svgPaths.pb636900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_239" />
          <path clipRule="evenodd" d={svgPaths.p3acaaa00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_240" />
          <path clipRule="evenodd" d={svgPaths.p3897e800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_241" />
          <path clipRule="evenodd" d={svgPaths.p9c973f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_242" />
          <path clipRule="evenodd" d={svgPaths.p23a0a240} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_243" />
          <path clipRule="evenodd" d={svgPaths.p306ee100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_244" />
          <path clipRule="evenodd" d={svgPaths.p1a2ed3c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_245" />
          <path clipRule="evenodd" d={svgPaths.p1a719100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_246" />
          <path clipRule="evenodd" d={svgPaths.p38db2400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_247" />
          <path clipRule="evenodd" d={svgPaths.p3276a800} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_248" />
          <path clipRule="evenodd" d={svgPaths.p30ae9080} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_249" />
          <path clipRule="evenodd" d={svgPaths.p3a1cd000} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_250" />
          <path clipRule="evenodd" d={svgPaths.pd436a00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_251" />
          <path clipRule="evenodd" d={svgPaths.p3b289200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_252" />
          <path clipRule="evenodd" d={svgPaths.pd9c2a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_253" />
          <path clipRule="evenodd" d={svgPaths.p1c17a180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_254" />
          <path clipRule="evenodd" d={svgPaths.pbd0300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_255" />
          <path clipRule="evenodd" d={svgPaths.p3c0afc00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_256" />
          <path clipRule="evenodd" d={svgPaths.pb522180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_257" />
          <path clipRule="evenodd" d={svgPaths.p366ab300} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_258" />
          <path clipRule="evenodd" d={svgPaths.p316b1180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_259" />
          <path clipRule="evenodd" d={svgPaths.p161b91f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_260" />
          <path clipRule="evenodd" d={svgPaths.p3d339880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_261" />
          <path clipRule="evenodd" d={svgPaths.p225d7200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_262" />
          <path clipRule="evenodd" d={svgPaths.p252f5730} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_263" />
          <path clipRule="evenodd" d={svgPaths.p39995a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_264" />
          <path clipRule="evenodd" d={svgPaths.p29c99400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_265" />
          <path clipRule="evenodd" d={svgPaths.p17cf5e80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_266" />
          <path clipRule="evenodd" d={svgPaths.p60b2680} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_267" />
          <path clipRule="evenodd" d={svgPaths.p79be100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_268" />
          <path clipRule="evenodd" d={svgPaths.p36e77500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_269" />
          <path clipRule="evenodd" d={svgPaths.p13854880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_270" />
          <path clipRule="evenodd" d={svgPaths.p28a6e100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_271" />
          <path clipRule="evenodd" d={svgPaths.pae1f000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_272" />
          <path clipRule="evenodd" d={svgPaths.p2c691100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_273" />
          <path clipRule="evenodd" d={svgPaths.p1519200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_274" />
          <path clipRule="evenodd" d={svgPaths.p6f97b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_275" />
          <path clipRule="evenodd" d={svgPaths.p104e2880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_276" />
          <path clipRule="evenodd" d={svgPaths.p1d25100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_277" />
          <path clipRule="evenodd" d={svgPaths.p3b208800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_278" />
          <path clipRule="evenodd" d={svgPaths.pcc63a00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_279" />
          <path clipRule="evenodd" d={svgPaths.p2043fe80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_280" />
          <path clipRule="evenodd" d={svgPaths.pfe74500} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_281" />
          <path clipRule="evenodd" d={svgPaths.p5089980} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_282" />
          <path clipRule="evenodd" d={svgPaths.p1c8f1000} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_283" />
          <path clipRule="evenodd" d={svgPaths.p3cac1c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_284" />
          <path clipRule="evenodd" d={svgPaths.p2e756e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_285" />
          <path clipRule="evenodd" d={svgPaths.pdc93700} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_286" />
          <path clipRule="evenodd" d={svgPaths.p1685e380} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_287" />
          <path clipRule="evenodd" d={svgPaths.p3be92600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_288" />
          <path clipRule="evenodd" d={svgPaths.p25c70700} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_289" />
          <path clipRule="evenodd" d={svgPaths.p2be63600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_290" />
          <path clipRule="evenodd" d={svgPaths.p3b28bf00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_291" />
          <path clipRule="evenodd" d={svgPaths.p35069500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_292" />
          <path clipRule="evenodd" d={svgPaths.p1375f600} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_293" />
          <path clipRule="evenodd" d={svgPaths.p18835500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_294" />
          <path clipRule="evenodd" d={svgPaths.p18d5af80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_295" />
          <path clipRule="evenodd" d={svgPaths.p220c17c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_296" />
          <path clipRule="evenodd" d={svgPaths.p15f72e80} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_297" />
          <path clipRule="evenodd" d={svgPaths.p1c62cf00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_298" />
          <path clipRule="evenodd" d={svgPaths.p18b6180} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_299" />
          <path clipRule="evenodd" d={svgPaths.p2e46fa20} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_300" />
          <path clipRule="evenodd" d={svgPaths.p16306800} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_301" />
          <path clipRule="evenodd" d={svgPaths.p18abec80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_302" />
          <path clipRule="evenodd" d={svgPaths.p6cd4780} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_303" />
          <path clipRule="evenodd" d={svgPaths.p19758e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_304" />
          <path clipRule="evenodd" d={svgPaths.p3ec6b480} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_305" />
          <path clipRule="evenodd" d={svgPaths.p79b0480} fill="var(--fill-0, #C0B531)" fillRule="evenodd" id="Vector_306" />
          <path clipRule="evenodd" d={svgPaths.p14039280} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_307" />
          <path clipRule="evenodd" d={svgPaths.p3f28ff00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_308" />
          <path clipRule="evenodd" d={svgPaths.p11176480} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_309" />
          <path clipRule="evenodd" d={svgPaths.p219e36a0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_310" />
          <path clipRule="evenodd" d={svgPaths.p13bdfcc0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_311" />
          <path clipRule="evenodd" d={svgPaths.p222c7c70} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_312" />
          <path clipRule="evenodd" d={svgPaths.p2ec94600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_313" />
          <path clipRule="evenodd" d={svgPaths.p34d86800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_314" />
          <path clipRule="evenodd" d={svgPaths.p33f14ac0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_315" />
          <path clipRule="evenodd" d={svgPaths.p1ad0e000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_316" />
          <path clipRule="evenodd" d={svgPaths.pa7c9b80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_317" />
          <path clipRule="evenodd" d={svgPaths.p33b0d100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_318" />
          <path clipRule="evenodd" d={svgPaths.p46d0200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_319" />
          <path clipRule="evenodd" d={svgPaths.p33e568a0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_320" />
          <path clipRule="evenodd" d={svgPaths.p3469a300} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_321" />
          <path clipRule="evenodd" d={svgPaths.p8fc1780} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_322" />
          <path clipRule="evenodd" d={svgPaths.p36a84700} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_323" />
          <path clipRule="evenodd" d={svgPaths.p17c426b0} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_324" />
          <path clipRule="evenodd" d={svgPaths.p1da09180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_325" />
          <path clipRule="evenodd" d={svgPaths.pb897900} fill="var(--fill-0, #DE6BA9)" fillRule="evenodd" id="Vector_326" />
          <path clipRule="evenodd" d={svgPaths.pc69ad00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_327" />
          <path clipRule="evenodd" d={svgPaths.p2a1ff00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_328" />
          <path clipRule="evenodd" d={svgPaths.p3a250c80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_329" />
          <path clipRule="evenodd" d={svgPaths.p9b03300} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_330" />
          <path clipRule="evenodd" d={svgPaths.p1942b100} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_331" />
          <path clipRule="evenodd" d={svgPaths.pd958000} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_332" />
          <path clipRule="evenodd" d={svgPaths.p382ea4c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_333" />
          <path clipRule="evenodd" d={svgPaths.pd14ee80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_334" />
          <path clipRule="evenodd" d={svgPaths.p3da30a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_335" />
          <path clipRule="evenodd" d={svgPaths.p18de9b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_336" />
          <path clipRule="evenodd" d={svgPaths.p1e040c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_337" />
          <path clipRule="evenodd" d={svgPaths.p32c02f00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_338" />
          <path clipRule="evenodd" d={svgPaths.p15bda780} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_339" />
          <path clipRule="evenodd" d={svgPaths.p3a352100} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_340" />
          <path clipRule="evenodd" d={svgPaths.p30ecddc0} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_341" />
          <path clipRule="evenodd" d={svgPaths.p3f9b5780} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_342" />
          <path clipRule="evenodd" d={svgPaths.p325df300} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_343" />
          <path clipRule="evenodd" d={svgPaths.p10134700} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_344" />
          <path clipRule="evenodd" d={svgPaths.p376e6200} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_345" />
          <path clipRule="evenodd" d={svgPaths.p28c71a00} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_346" />
          <path clipRule="evenodd" d={svgPaths.p37ffd900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_347" />
          <path clipRule="evenodd" d={svgPaths.p364f5600} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_348" />
          <path clipRule="evenodd" d={svgPaths.p142b4500} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_349" />
          <path clipRule="evenodd" d={svgPaths.p28ed1200} fill="var(--fill-0, #F6D491)" fillRule="evenodd" id="Vector_350" />
          <path clipRule="evenodd" d={svgPaths.pec034c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_351" />
          <path clipRule="evenodd" d={svgPaths.p39bc0b00} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_352" />
          <path clipRule="evenodd" d={svgPaths.p23156a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_353" />
          <path clipRule="evenodd" d={svgPaths.p26c73c00} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_354" />
          <path clipRule="evenodd" d={svgPaths.pddb0180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_355" />
          <path clipRule="evenodd" d={svgPaths.p2c5f29f0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_356" />
          <path clipRule="evenodd" d={svgPaths.p463ba00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_357" />
          <path clipRule="evenodd" d={svgPaths.p272e2880} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_358" />
          <path clipRule="evenodd" d={svgPaths.p3b171180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_359" />
          <path clipRule="evenodd" d={svgPaths.p130f89f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_360" />
          <path clipRule="evenodd" d={svgPaths.p226c6180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_361" />
          <path clipRule="evenodd" d={svgPaths.p39eff500} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_362" />
          <path clipRule="evenodd" d={svgPaths.p286ece80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_363" />
          <path clipRule="evenodd" d={svgPaths.p2ca7f900} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_364" />
          <path clipRule="evenodd" d={svgPaths.p1493b200} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_365" />
          <path clipRule="evenodd" d={svgPaths.p3c67ce80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_366" />
          <path clipRule="evenodd" d={svgPaths.p4bffbf0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_367" />
          <path clipRule="evenodd" d={svgPaths.pa932300} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_368" />
          <path clipRule="evenodd" d={svgPaths.p36ec24f2} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_369" />
          <path clipRule="evenodd" d={svgPaths.p2006c820} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_370" />
          <path clipRule="evenodd" d={svgPaths.p134f6000} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_371" />
          <path clipRule="evenodd" d={svgPaths.p2770d900} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_372" />
          <path clipRule="evenodd" d={svgPaths.p12977a00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_373" />
          <path clipRule="evenodd" d={svgPaths.pab5be00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_374" />
          <path clipRule="evenodd" d={svgPaths.p5977280} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_375" />
          <path clipRule="evenodd" d={svgPaths.p1435b900} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_376" />
          <path clipRule="evenodd" d={svgPaths.p3075d880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_377" />
          <path clipRule="evenodd" d={svgPaths.pa5b2a80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_378" />
          <path clipRule="evenodd" d={svgPaths.p3d8c0200} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_379" />
          <path clipRule="evenodd" d={svgPaths.p39ba36f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_380" />
          <path clipRule="evenodd" d={svgPaths.p6c20500} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_381" />
          <path clipRule="evenodd" d={svgPaths.p3538a480} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_382" />
          <path clipRule="evenodd" d={svgPaths.pa1e9f00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_383" />
          <path clipRule="evenodd" d={svgPaths.p3a3f0e00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_384" />
          <path clipRule="evenodd" d={svgPaths.p2857c100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_385" />
          <path clipRule="evenodd" d={svgPaths.p2c28b70} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_386" />
          <path clipRule="evenodd" d={svgPaths.p3eea480} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_387" />
          <path clipRule="evenodd" d={svgPaths.p3b4adf00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_388" />
          <path clipRule="evenodd" d={svgPaths.p2ca53800} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_389" />
          <path clipRule="evenodd" d={svgPaths.p3684d700} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_390" />
          <path clipRule="evenodd" d={svgPaths.p2cbf4b00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_391" />
          <path clipRule="evenodd" d={svgPaths.p174d8400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_392" />
          <path clipRule="evenodd" d={svgPaths.p8a9bd80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_393" />
          <path clipRule="evenodd" d={svgPaths.p10afa00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_394" />
          <path clipRule="evenodd" d={svgPaths.pda6c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_395" />
          <path clipRule="evenodd" d={svgPaths.p238a1c70} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_396" />
          <path clipRule="evenodd" d={svgPaths.p286d0d00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_397" />
          <path clipRule="evenodd" d={svgPaths.p215800} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_398" />
          <path clipRule="evenodd" d={svgPaths.p3590df00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_399" />
          <path clipRule="evenodd" d={svgPaths.pab40880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_400" />
          <path clipRule="evenodd" d={svgPaths.p3b79d1b0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_401" />
          <path clipRule="evenodd" d={svgPaths.p33add100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_402" />
          <path clipRule="evenodd" d={svgPaths.p288940f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_403" />
          <path clipRule="evenodd" d={svgPaths.p296c5400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_404" />
          <path clipRule="evenodd" d={svgPaths.pd71e580} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_405" />
          <path clipRule="evenodd" d={svgPaths.p29ab4f80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_406" />
          <path clipRule="evenodd" d={svgPaths.p28def780} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_407" />
          <path clipRule="evenodd" d={svgPaths.p32ce9100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_408" />
          <path clipRule="evenodd" d={svgPaths.p1355b600} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_409" />
          <path clipRule="evenodd" d={svgPaths.p99e4400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_410" />
          <path clipRule="evenodd" d={svgPaths.p1af30100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_411" />
          <path clipRule="evenodd" d={svgPaths.p1f7b2e72} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_412" />
          <path clipRule="evenodd" d={svgPaths.p1b58d200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_413" />
          <path clipRule="evenodd" d={svgPaths.p2bab3800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_414" />
          <path clipRule="evenodd" d={svgPaths.p34b46d40} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_415" />
          <path clipRule="evenodd" d={svgPaths.p369c9e80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_416" />
          <path clipRule="evenodd" d={svgPaths.p1ef02f00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_417" />
          <path clipRule="evenodd" d={svgPaths.p19a39f80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_418" />
          <path clipRule="evenodd" d={svgPaths.p10caa200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_419" />
          <path clipRule="evenodd" d={svgPaths.p176f9080} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_420" />
          <path clipRule="evenodd" d={svgPaths.p175f73d0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_421" />
          <path clipRule="evenodd" d={svgPaths.p110a2100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_422" />
          <path clipRule="evenodd" d={svgPaths.p16563000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_423" />
          <path clipRule="evenodd" d={svgPaths.p3700fc00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_424" />
          <path clipRule="evenodd" d={svgPaths.p2249e200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_425" />
          <path clipRule="evenodd" d={svgPaths.p37ab6871} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_426" />
          <path clipRule="evenodd" d={svgPaths.pbb8a400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_427" />
          <path clipRule="evenodd" d={svgPaths.p3e1d4500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_428" />
          <path clipRule="evenodd" d={svgPaths.p3d3d3400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_429" />
          <path clipRule="evenodd" d={svgPaths.p56b8800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_430" />
          <path clipRule="evenodd" d={svgPaths.p3e73580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_431" />
          <path clipRule="evenodd" d={svgPaths.p3eef3c00} fill="var(--fill-0, #4653A4)" fillRule="evenodd" id="Vector_432" />
          <path clipRule="evenodd" d={svgPaths.p6d0d80} fill="var(--fill-0, #4653A4)" fillRule="evenodd" id="Vector_433" />
          <path clipRule="evenodd" d={svgPaths.p16b9f9f0} fill="var(--fill-0, #4653A4)" fillRule="evenodd" id="Vector_434" />
          <path clipRule="evenodd" d={svgPaths.p9f7df00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_435" />
          <path clipRule="evenodd" d={svgPaths.p17ce2900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_436" />
          <path clipRule="evenodd" d={svgPaths.p1213b600} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_437" />
          <path clipRule="evenodd" d={svgPaths.p22d52400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_438" />
          <path clipRule="evenodd" d={svgPaths.p1e324a90} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_439" />
          <path clipRule="evenodd" d={svgPaths.p1705d080} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_440" />
          <path clipRule="evenodd" d={svgPaths.p10992c00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_441" />
          <path clipRule="evenodd" d={svgPaths.p108b6b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_442" />
          <path clipRule="evenodd" d={svgPaths.p5b7a800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_443" />
          <path clipRule="evenodd" d={svgPaths.p22c64b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_444" />
          <path clipRule="evenodd" d={svgPaths.p27610000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_445" />
          <path clipRule="evenodd" d={svgPaths.p1eeb2500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_446" />
          <path clipRule="evenodd" d={svgPaths.p2aaf3cc2} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_447" />
          <path clipRule="evenodd" d={svgPaths.p17ed27f0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_448" />
          <path clipRule="evenodd" d={svgPaths.p38ab0b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_449" />
          <path clipRule="evenodd" d={svgPaths.p76ae00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_450" />
          <path clipRule="evenodd" d={svgPaths.p3c50e5f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_451" />
          <path clipRule="evenodd" d={svgPaths.p30b51200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_452" />
          <path clipRule="evenodd" d={svgPaths.p1c700100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_453" />
          <path clipRule="evenodd" d={svgPaths.p38653b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_454" />
          <path clipRule="evenodd" d={svgPaths.p278d9c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_455" />
          <path clipRule="evenodd" d={svgPaths.p27219e80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_456" />
          <path clipRule="evenodd" d={svgPaths.p1fbe1880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_457" />
          <path clipRule="evenodd" d={svgPaths.p1d3ce300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_458" />
          <path clipRule="evenodd" d={svgPaths.p4eecb80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_459" />
          <path clipRule="evenodd" d={svgPaths.p29edcad0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_460" />
          <path clipRule="evenodd" d={svgPaths.p3357c4f1} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_461" />
          <path clipRule="evenodd" d={svgPaths.p17ce5980} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_462" />
          <path clipRule="evenodd" d={svgPaths.p2cdbca00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_463" />
          <path clipRule="evenodd" d={svgPaths.p2bff7730} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_464" />
          <path clipRule="evenodd" d={svgPaths.p1aac73f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_465" />
          <path clipRule="evenodd" d={svgPaths.p2a6ede00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_466" />
          <path clipRule="evenodd" d={svgPaths.p38b49380} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_467" />
          <path clipRule="evenodd" d={svgPaths.p3deb0a00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_468" />
          <path clipRule="evenodd" d={svgPaths.pace5400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_469" />
          <path clipRule="evenodd" d={svgPaths.p27715400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_470" />
          <path clipRule="evenodd" d={svgPaths.p3296c180} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_471" />
          <path clipRule="evenodd" d={svgPaths.p5c87480} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_472" />
          <path clipRule="evenodd" d={svgPaths.p13431a80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_473" />
          <path clipRule="evenodd" d={svgPaths.p2782b800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_474" />
          <path clipRule="evenodd" d={svgPaths.p22e4f730} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_475" />
          <path clipRule="evenodd" d={svgPaths.p336d0800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_476" />
          <path clipRule="evenodd" d={svgPaths.p20b8b80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_477" />
        </g>
      </svg>
    </div>
  );
}

function LeagueIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="League Icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Spain">
        <Icon1 />
      </div>
    </div>
  );
}

function LeagueHeading1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="League Heading">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">League Heading</p>
      </div>
    </div>
  );
}

function EventsQty1() {
  return (
    <div className="bg-[#993800] content-stretch flex flex-col h-[16px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Events Qty">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">112</p>
      </div>
    </div>
  );
}

function NumberOfMatches1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Number of Matches">
      <EventsQty1 />
    </div>
  );
}

function LeagueItemHeading1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="League Item Heading">
      <button className="block cursor-pointer relative shrink-0 size-[20px]" data-name="_Like sport">
        <div className="absolute inset-0 overflow-clip" data-name="Favorites Stroke">
          <div className="absolute inset-[13.54%_8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14.5832">
              <path d={svgPaths.p31fcbd80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
      </button>
      <LeagueIcon1 />
      <LeagueHeading1 />
      <NumberOfMatches1 />
    </div>
  );
}

function ExpandableArrow1({ expanded, onClick }: { expanded: boolean; onClick: () => void }) {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <motion.button
        type="button"
        onClick={onClick}
        animate={{ rotate: expanded ? 0 : 180 }}
        whileTap={{ scale: 0.85 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="content-stretch cursor-pointer flex items-center relative"
        data-name="Expandable Arrow"
        aria-expanded={expanded}
        aria-label={expanded ? "Collapse league" : "Expand league"}
      >
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Up">
          <div className="absolute bottom-[35.43%] left-1/4 right-1/4 top-[35.42%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6.99792">
              <path clipRule="evenodd" d={svgPaths.p38da2c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </motion.button>
    </div>
  );
}

function LeagueItemHeadingExpandable1({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  return (
    <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="League Item Heading Expandable">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <LeagueItemHeading1 />
          <ExpandableArrow1 expanded={expanded} onClick={onToggle} />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute inset-[8.33%] overflow-clip rounded-[100px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3476d900} fill="var(--fill-0, #B5202E)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3824fa00} fill="var(--fill-0, #F5C426)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p157d6400} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p29b4e0f2} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.pa5fca00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.pe551900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p1fc05070} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p1b2ee680} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p3b0dd500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p3bcf7b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p2350c780} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p1599f300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p798b400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p5ddedf0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p30d98400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p210b1b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_16" />
          <path clipRule="evenodd" d={svgPaths.p365ead00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_17" />
          <path clipRule="evenodd" d={svgPaths.p191b40c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_18" />
          <path clipRule="evenodd" d={svgPaths.p26981b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_19" />
          <path clipRule="evenodd" d={svgPaths.p36587cf0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_20" />
          <path clipRule="evenodd" d={svgPaths.p31f1e200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_21" />
          <path clipRule="evenodd" d={svgPaths.p444f400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_22" />
          <path clipRule="evenodd" d={svgPaths.p4d45580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_23" />
          <path clipRule="evenodd" d={svgPaths.p977c280} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_24" />
          <path clipRule="evenodd" d={svgPaths.p2421ae80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_25" />
          <path clipRule="evenodd" d={svgPaths.p373f9a80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_26" />
          <path clipRule="evenodd" d={svgPaths.p1f048000} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_27" />
          <path clipRule="evenodd" d={svgPaths.p2fa30100} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_28" />
          <path clipRule="evenodd" d={svgPaths.p1d298060} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_29" />
          <path clipRule="evenodd" d={svgPaths.p18cd1b00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_30" />
          <path clipRule="evenodd" d={svgPaths.p2a4d0580} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_31" />
          <path clipRule="evenodd" d={svgPaths.p11f63400} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_32" />
          <path clipRule="evenodd" d={svgPaths.pa2d4f00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_33" />
          <path clipRule="evenodd" d={svgPaths.p6f5f1a0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_34" />
          <path clipRule="evenodd" d={svgPaths.p1735a000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_35" />
          <path clipRule="evenodd" d={svgPaths.p348e1380} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_36" />
          <path clipRule="evenodd" d={svgPaths.p26aab900} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_37" />
          <path clipRule="evenodd" d={svgPaths.p36052600} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_38" />
          <path clipRule="evenodd" d={svgPaths.p326e9c80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_39" />
          <path clipRule="evenodd" d={svgPaths.p3a3d2a00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_40" />
          <path clipRule="evenodd" d={svgPaths.p20591200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_41" />
          <path clipRule="evenodd" d={svgPaths.pcdcfc00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_42" />
          <path clipRule="evenodd" d={svgPaths.p32f1d000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_43" />
          <path clipRule="evenodd" d={svgPaths.pdfdf100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_44" />
          <path clipRule="evenodd" d={svgPaths.p9d777f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_45" />
          <path clipRule="evenodd" d={svgPaths.p18473580} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_46" />
          <path clipRule="evenodd" d={svgPaths.p1b853480} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_47" />
          <path clipRule="evenodd" d={svgPaths.p363f1180} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_48" />
          <path clipRule="evenodd" d={svgPaths.p2700def0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_49" />
          <path clipRule="evenodd" d={svgPaths.p23fef800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_50" />
          <path clipRule="evenodd" d={svgPaths.p31115080} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_51" />
          <path clipRule="evenodd" d={svgPaths.pcc81200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_52" />
          <path clipRule="evenodd" d={svgPaths.pb80e600} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_53" />
          <path clipRule="evenodd" d={svgPaths.p30a65140} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_54" />
          <path clipRule="evenodd" d={svgPaths.p3e506d00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_55" />
          <path clipRule="evenodd" d={svgPaths.p1fd1a700} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_56" />
          <path clipRule="evenodd" d={svgPaths.pb1c5800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_57" />
          <path clipRule="evenodd" d={svgPaths.p37ee3b80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_58" />
          <path clipRule="evenodd" d={svgPaths.p3ed32000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_59" />
          <path clipRule="evenodd" d={svgPaths.p174026c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_60" />
          <path clipRule="evenodd" d={svgPaths.p32c0b880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_61" />
          <path clipRule="evenodd" d={svgPaths.p1b6f3c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_62" />
          <path clipRule="evenodd" d={svgPaths.p667aa00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_63" />
          <path clipRule="evenodd" d={svgPaths.p3f8e7b72} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_64" />
          <path clipRule="evenodd" d={svgPaths.p1bb14480} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_65" />
          <path clipRule="evenodd" d={svgPaths.p30032cb0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_66" />
          <path clipRule="evenodd" d={svgPaths.p32d12c00} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_67" />
          <path clipRule="evenodd" d={svgPaths.pc166580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_68" />
          <path clipRule="evenodd" d={svgPaths.p1ab8a080} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_69" />
          <path clipRule="evenodd" d={svgPaths.p17ca6000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_70" />
          <path clipRule="evenodd" d={svgPaths.p13918a40} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_71" />
          <path clipRule="evenodd" d={svgPaths.p2524e100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_72" />
          <path clipRule="evenodd" d={svgPaths.p11d13600} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_73" />
          <path clipRule="evenodd" d={svgPaths.p3e8ce440} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_74" />
          <path clipRule="evenodd" d={svgPaths.p1e1b3c00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_75" />
          <path clipRule="evenodd" d={svgPaths.pf789d00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_76" />
          <path clipRule="evenodd" d={svgPaths.p26510772} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_77" />
          <path clipRule="evenodd" d={svgPaths.p32da0900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_78" />
          <path clipRule="evenodd" d={svgPaths.p121f00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_79" />
          <path clipRule="evenodd" d={svgPaths.p23174680} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_80" />
          <path clipRule="evenodd" d={svgPaths.p22378f80} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_81" />
          <path clipRule="evenodd" d={svgPaths.p1404e300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_82" />
          <path clipRule="evenodd" d={svgPaths.pc496500} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_83" />
          <path clipRule="evenodd" d={svgPaths.p28905e00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_84" />
          <path clipRule="evenodd" d={svgPaths.p3965100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_85" />
          <path clipRule="evenodd" d={svgPaths.p3a545a70} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_86" />
          <path clipRule="evenodd" d={svgPaths.p3b373500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_87" />
          <path clipRule="evenodd" d={svgPaths.pbee4c00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_88" />
          <path clipRule="evenodd" d={svgPaths.pb87c680} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_89" />
          <path clipRule="evenodd" d={svgPaths.p1904cb80} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_90" />
          <path clipRule="evenodd" d={svgPaths.p1c80fa30} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_91" />
          <path clipRule="evenodd" d={svgPaths.p1e2ee300} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_92" />
          <path clipRule="evenodd" d={svgPaths.p2101b580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_93" />
          <path clipRule="evenodd" d={svgPaths.p25b33e80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_94" />
          <path clipRule="evenodd" d={svgPaths.p38c3ae80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_95" />
          <path clipRule="evenodd" d={svgPaths.p1e0aad00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_96" />
          <path clipRule="evenodd" d={svgPaths.p9c2b900} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_97" />
          <path clipRule="evenodd" d={svgPaths.p19d97400} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_98" />
          <path clipRule="evenodd" d={svgPaths.p206ebc00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_99" />
          <path clipRule="evenodd" d={svgPaths.p33ca4b10} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_100" />
          <path clipRule="evenodd" d={svgPaths.p2451d080} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_101" />
          <path clipRule="evenodd" d={svgPaths.pa83bb00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_102" />
          <path clipRule="evenodd" d={svgPaths.p3e649100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_103" />
          <path clipRule="evenodd" d={svgPaths.p21f2f600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_104" />
          <path clipRule="evenodd" d={svgPaths.p22a5e200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_105" />
          <path clipRule="evenodd" d={svgPaths.p25785300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_106" />
          <path clipRule="evenodd" d={svgPaths.p2d371200} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_107" />
          <path clipRule="evenodd" d={svgPaths.p16d81100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_108" />
          <path clipRule="evenodd" d={svgPaths.p1ad2ec80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_109" />
          <path clipRule="evenodd" d={svgPaths.p5c60440} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_110" />
          <path clipRule="evenodd" d={svgPaths.p3a6b3f80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_111" />
          <path clipRule="evenodd" d={svgPaths.p2625b5f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_112" />
          <path clipRule="evenodd" d={svgPaths.p2dbf5880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_113" />
          <path clipRule="evenodd" d={svgPaths.p94900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_114" />
          <path clipRule="evenodd" d={svgPaths.p35451300} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_115" />
          <path clipRule="evenodd" d={svgPaths.p373b9a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_116" />
          <path clipRule="evenodd" d={svgPaths.p2e56fca0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_117" />
          <path clipRule="evenodd" d={svgPaths.p6be54c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_118" />
          <path clipRule="evenodd" d={svgPaths.p347b3c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_119" />
          <path clipRule="evenodd" d={svgPaths.p21fbc500} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_120" />
          <path clipRule="evenodd" d={svgPaths.p118ac300} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_121" />
          <path clipRule="evenodd" d={svgPaths.pcb4e180} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_122" />
          <path clipRule="evenodd" d={svgPaths.p319d0040} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_123" />
          <path clipRule="evenodd" d={svgPaths.p1dd5600} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_124" />
          <path clipRule="evenodd" d={svgPaths.p18c9cd00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_125" />
          <path clipRule="evenodd" d={svgPaths.p264fa900} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_126" />
          <path clipRule="evenodd" d={svgPaths.p2ae2c700} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_127" />
          <path clipRule="evenodd" d={svgPaths.p1313a500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_128" />
          <path clipRule="evenodd" d={svgPaths.p28ca1200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_129" />
          <path clipRule="evenodd" d={svgPaths.p3abab400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_130" />
          <path clipRule="evenodd" d={svgPaths.p2d40b3c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_131" />
          <path clipRule="evenodd" d={svgPaths.p35daa080} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_132" />
          <path clipRule="evenodd" d={svgPaths.p2155e000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_133" />
          <path clipRule="evenodd" d={svgPaths.p3b525490} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_134" />
          <path clipRule="evenodd" d={svgPaths.p32c4aa00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_135" />
          <path clipRule="evenodd" d={svgPaths.p5bbf840} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_136" />
          <path clipRule="evenodd" d={svgPaths.p3f317a80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_137" />
          <path clipRule="evenodd" d={svgPaths.p3ba2e0c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_138" />
          <path clipRule="evenodd" d={svgPaths.p17cc9e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_139" />
          <path clipRule="evenodd" d={svgPaths.p24211f00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_140" />
          <path clipRule="evenodd" d={svgPaths.pd887100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_141" />
          <path clipRule="evenodd" d={svgPaths.p370247c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_142" />
          <path clipRule="evenodd" d={svgPaths.p20f29dc0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_143" />
          <path clipRule="evenodd" d={svgPaths.p1467e000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_144" />
          <path clipRule="evenodd" d={svgPaths.p2b6b2d00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_145" />
          <path clipRule="evenodd" d={svgPaths.p2eb3100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_146" />
          <path clipRule="evenodd" d={svgPaths.p21600400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_147" />
          <path clipRule="evenodd" d={svgPaths.p14423d80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_148" />
          <path clipRule="evenodd" d={svgPaths.p39533800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_149" />
          <path clipRule="evenodd" d={svgPaths.p3cb25300} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_150" />
          <path clipRule="evenodd" d={svgPaths.p1ef58470} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_151" />
          <path clipRule="evenodd" d={svgPaths.p317b3880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_152" />
          <path clipRule="evenodd" d={svgPaths.p1c427c90} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_153" />
          <path clipRule="evenodd" d={svgPaths.p229a9800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_154" />
          <path clipRule="evenodd" d={svgPaths.p2a8eca00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_155" />
          <path clipRule="evenodd" d={svgPaths.p39d28800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_156" />
          <path clipRule="evenodd" d={svgPaths.p17e94700} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_157" />
          <path clipRule="evenodd" d={svgPaths.p2722a000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_158" />
          <path clipRule="evenodd" d={svgPaths.p1f5e8200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_159" />
          <path clipRule="evenodd" d={svgPaths.p1ba74700} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_160" />
          <path clipRule="evenodd" d={svgPaths.p190c2c80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_161" />
          <path clipRule="evenodd" d={svgPaths.p47d4dc0} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_162" />
          <path clipRule="evenodd" d={svgPaths.pea22520} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_163" />
          <path clipRule="evenodd" d={svgPaths.p1fe84770} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_164" />
          <path clipRule="evenodd" d={svgPaths.p1b854a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_165" />
          <path clipRule="evenodd" d={svgPaths.p13dd9300} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_166" />
          <path clipRule="evenodd" d={svgPaths.p4251180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_167" />
          <path clipRule="evenodd" d={svgPaths.p3c171f80} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_168" />
          <path clipRule="evenodd" d={svgPaths.p324f3e00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_169" />
          <path clipRule="evenodd" d={svgPaths.p2a71bff0} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_170" />
          <path clipRule="evenodd" d={svgPaths.p327a7600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_171" />
          <path clipRule="evenodd" d={svgPaths.p1ebfe7c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_172" />
          <path clipRule="evenodd" d={svgPaths.p3fa78280} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_173" />
          <path clipRule="evenodd" d={svgPaths.p3a099900} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_174" />
          <path clipRule="evenodd" d={svgPaths.pb03f300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_175" />
          <path clipRule="evenodd" d={svgPaths.p1ee43880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_176" />
          <path clipRule="evenodd" d={svgPaths.p2f1b7600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_177" />
          <path clipRule="evenodd" d={svgPaths.p2655ce80} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_178" />
          <path clipRule="evenodd" d={svgPaths.p263b4c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_179" />
          <path clipRule="evenodd" d={svgPaths.p3f262900} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_180" />
          <path clipRule="evenodd" d={svgPaths.p20cb92f0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_181" />
          <path clipRule="evenodd" d={svgPaths.p3ad9ca80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_182" />
          <path clipRule="evenodd" d={svgPaths.p3fa4f780} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_183" />
          <path clipRule="evenodd" d={svgPaths.p6472180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_184" />
          <path clipRule="evenodd" d={svgPaths.p3b0e1500} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_185" />
          <path clipRule="evenodd" d={svgPaths.p36743380} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_186" />
          <path clipRule="evenodd" d={svgPaths.pd276600} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_187" />
          <path clipRule="evenodd" d={svgPaths.p204ef900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_188" />
          <path clipRule="evenodd" d={svgPaths.p3181f200} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_189" />
          <path clipRule="evenodd" d={svgPaths.p39eb6400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_190" />
          <path clipRule="evenodd" d={svgPaths.p2ef48e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_191" />
          <path clipRule="evenodd" d={svgPaths.p25ffa80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_192" />
          <path clipRule="evenodd" d={svgPaths.p9551e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_193" />
          <path clipRule="evenodd" d={svgPaths.p21c6e800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_194" />
          <path clipRule="evenodd" d={svgPaths.p2075210} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_195" />
          <path clipRule="evenodd" d={svgPaths.p282c7200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_196" />
          <path clipRule="evenodd" d={svgPaths.p23529b00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_197" />
          <path clipRule="evenodd" d={svgPaths.p3df92500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_198" />
          <path clipRule="evenodd" d={svgPaths.p384edd00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_199" />
          <path clipRule="evenodd" d={svgPaths.p1ed0eb80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_200" />
          <path clipRule="evenodd" d={svgPaths.p15f6c880} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_201" />
          <path clipRule="evenodd" d={svgPaths.p496f9c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_202" />
          <path clipRule="evenodd" d={svgPaths.p1bf77e00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_203" />
          <path clipRule="evenodd" d={svgPaths.p3192c400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_204" />
          <path clipRule="evenodd" d={svgPaths.p25f0aa00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_205" />
          <path clipRule="evenodd" d={svgPaths.p368fb800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_206" />
          <path clipRule="evenodd" d={svgPaths.p2445bb70} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_207" />
          <path clipRule="evenodd" d={svgPaths.pf24dd00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_208" />
          <path clipRule="evenodd" d={svgPaths.p3c0c1ad0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_209" />
          <path clipRule="evenodd" d={svgPaths.p2e2c7b70} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_210" />
          <path clipRule="evenodd" d={svgPaths.p2b262b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_211" />
          <path clipRule="evenodd" d={svgPaths.p222d3a80} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_212" />
          <path clipRule="evenodd" d={svgPaths.p257e8e30} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_213" />
          <path clipRule="evenodd" d={svgPaths.pe10a880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_214" />
          <path clipRule="evenodd" d={svgPaths.p77c5000} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_215" />
          <path clipRule="evenodd" d={svgPaths.p32a77300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_216" />
          <path clipRule="evenodd" d={svgPaths.p2c7c4700} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_217" />
          <path clipRule="evenodd" d={svgPaths.p3a3aec60} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_218" />
          <path clipRule="evenodd" d={svgPaths.pb41c000} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_219" />
          <path clipRule="evenodd" d={svgPaths.pf661400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_220" />
          <path clipRule="evenodd" d={svgPaths.p2ccda5f0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_221" />
          <path clipRule="evenodd" d={svgPaths.p134e3180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_222" />
          <path clipRule="evenodd" d={svgPaths.p27479200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_223" />
          <path clipRule="evenodd" d={svgPaths.p12924680} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_224" />
          <path clipRule="evenodd" d={svgPaths.p1e6f0c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_225" />
          <path clipRule="evenodd" d={svgPaths.p28122d00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_226" />
          <path clipRule="evenodd" d={svgPaths.p20d430b0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_227" />
          <path clipRule="evenodd" d={svgPaths.p3dcff670} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_228" />
          <path clipRule="evenodd" d={svgPaths.p6afd800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_229" />
          <path clipRule="evenodd" d={svgPaths.p21b677f2} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_230" />
          <path clipRule="evenodd" d={svgPaths.p12e4af40} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_231" />
          <path clipRule="evenodd" d={svgPaths.p331b3400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_232" />
          <path clipRule="evenodd" d={svgPaths.p3a188310} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_233" />
          <path clipRule="evenodd" d={svgPaths.p33b67d40} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_234" />
          <path clipRule="evenodd" d={svgPaths.p1138d400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_235" />
          <path clipRule="evenodd" d={svgPaths.p3b4c3c00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_236" />
          <path clipRule="evenodd" d={svgPaths.p198d4c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_237" />
          <path clipRule="evenodd" d={svgPaths.p3d9635c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_238" />
          <path clipRule="evenodd" d={svgPaths.pb636900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_239" />
          <path clipRule="evenodd" d={svgPaths.p3acaaa00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_240" />
          <path clipRule="evenodd" d={svgPaths.p3897e800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_241" />
          <path clipRule="evenodd" d={svgPaths.p9c973f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_242" />
          <path clipRule="evenodd" d={svgPaths.p23a0a240} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_243" />
          <path clipRule="evenodd" d={svgPaths.p306ee100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_244" />
          <path clipRule="evenodd" d={svgPaths.p1a2ed3c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_245" />
          <path clipRule="evenodd" d={svgPaths.p1a719100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_246" />
          <path clipRule="evenodd" d={svgPaths.p38db2400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_247" />
          <path clipRule="evenodd" d={svgPaths.p3276a800} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_248" />
          <path clipRule="evenodd" d={svgPaths.p30ae9080} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_249" />
          <path clipRule="evenodd" d={svgPaths.p3a1cd000} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_250" />
          <path clipRule="evenodd" d={svgPaths.pd436a00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_251" />
          <path clipRule="evenodd" d={svgPaths.p3b289200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_252" />
          <path clipRule="evenodd" d={svgPaths.pd9c2a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_253" />
          <path clipRule="evenodd" d={svgPaths.p1c17a180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_254" />
          <path clipRule="evenodd" d={svgPaths.pbd0300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_255" />
          <path clipRule="evenodd" d={svgPaths.p3c0afc00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_256" />
          <path clipRule="evenodd" d={svgPaths.pb522180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_257" />
          <path clipRule="evenodd" d={svgPaths.p366ab300} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_258" />
          <path clipRule="evenodd" d={svgPaths.p316b1180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_259" />
          <path clipRule="evenodd" d={svgPaths.p161b91f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_260" />
          <path clipRule="evenodd" d={svgPaths.p3d339880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_261" />
          <path clipRule="evenodd" d={svgPaths.p225d7200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_262" />
          <path clipRule="evenodd" d={svgPaths.p252f5730} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_263" />
          <path clipRule="evenodd" d={svgPaths.p39995a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_264" />
          <path clipRule="evenodd" d={svgPaths.p29c99400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_265" />
          <path clipRule="evenodd" d={svgPaths.p17cf5e80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_266" />
          <path clipRule="evenodd" d={svgPaths.p60b2680} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_267" />
          <path clipRule="evenodd" d={svgPaths.p79be100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_268" />
          <path clipRule="evenodd" d={svgPaths.p36e77500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_269" />
          <path clipRule="evenodd" d={svgPaths.p13854880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_270" />
          <path clipRule="evenodd" d={svgPaths.p28a6e100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_271" />
          <path clipRule="evenodd" d={svgPaths.pae1f000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_272" />
          <path clipRule="evenodd" d={svgPaths.p2c691100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_273" />
          <path clipRule="evenodd" d={svgPaths.p1519200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_274" />
          <path clipRule="evenodd" d={svgPaths.p6f97b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_275" />
          <path clipRule="evenodd" d={svgPaths.p104e2880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_276" />
          <path clipRule="evenodd" d={svgPaths.p1d25100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_277" />
          <path clipRule="evenodd" d={svgPaths.p3b208800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_278" />
          <path clipRule="evenodd" d={svgPaths.pcc63a00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_279" />
          <path clipRule="evenodd" d={svgPaths.p2043fe80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_280" />
          <path clipRule="evenodd" d={svgPaths.pfe74500} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_281" />
          <path clipRule="evenodd" d={svgPaths.p5089980} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_282" />
          <path clipRule="evenodd" d={svgPaths.p1c8f1000} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_283" />
          <path clipRule="evenodd" d={svgPaths.p3cac1c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_284" />
          <path clipRule="evenodd" d={svgPaths.p2e756e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_285" />
          <path clipRule="evenodd" d={svgPaths.pdc93700} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_286" />
          <path clipRule="evenodd" d={svgPaths.p1685e380} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_287" />
          <path clipRule="evenodd" d={svgPaths.p3be92600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_288" />
          <path clipRule="evenodd" d={svgPaths.p25c70700} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_289" />
          <path clipRule="evenodd" d={svgPaths.p2be63600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_290" />
          <path clipRule="evenodd" d={svgPaths.p3b28bf00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_291" />
          <path clipRule="evenodd" d={svgPaths.p35069500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_292" />
          <path clipRule="evenodd" d={svgPaths.p1375f600} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_293" />
          <path clipRule="evenodd" d={svgPaths.p18835500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_294" />
          <path clipRule="evenodd" d={svgPaths.p18d5af80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_295" />
          <path clipRule="evenodd" d={svgPaths.p220c17c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_296" />
          <path clipRule="evenodd" d={svgPaths.p15f72e80} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_297" />
          <path clipRule="evenodd" d={svgPaths.p1c62cf00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_298" />
          <path clipRule="evenodd" d={svgPaths.p18b6180} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_299" />
          <path clipRule="evenodd" d={svgPaths.p2e46fa20} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_300" />
          <path clipRule="evenodd" d={svgPaths.p16306800} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_301" />
          <path clipRule="evenodd" d={svgPaths.p18abec80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_302" />
          <path clipRule="evenodd" d={svgPaths.p6cd4780} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_303" />
          <path clipRule="evenodd" d={svgPaths.p19758e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_304" />
          <path clipRule="evenodd" d={svgPaths.p3ec6b480} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_305" />
          <path clipRule="evenodd" d={svgPaths.p79b0480} fill="var(--fill-0, #C0B531)" fillRule="evenodd" id="Vector_306" />
          <path clipRule="evenodd" d={svgPaths.p14039280} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_307" />
          <path clipRule="evenodd" d={svgPaths.p3f28ff00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_308" />
          <path clipRule="evenodd" d={svgPaths.p11176480} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_309" />
          <path clipRule="evenodd" d={svgPaths.p219e36a0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_310" />
          <path clipRule="evenodd" d={svgPaths.p13bdfcc0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_311" />
          <path clipRule="evenodd" d={svgPaths.p222c7c70} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_312" />
          <path clipRule="evenodd" d={svgPaths.p2ec94600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_313" />
          <path clipRule="evenodd" d={svgPaths.p34d86800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_314" />
          <path clipRule="evenodd" d={svgPaths.p33f14ac0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_315" />
          <path clipRule="evenodd" d={svgPaths.p1ad0e000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_316" />
          <path clipRule="evenodd" d={svgPaths.pa7c9b80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_317" />
          <path clipRule="evenodd" d={svgPaths.p33b0d100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_318" />
          <path clipRule="evenodd" d={svgPaths.p46d0200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_319" />
          <path clipRule="evenodd" d={svgPaths.p33e568a0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_320" />
          <path clipRule="evenodd" d={svgPaths.p3469a300} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_321" />
          <path clipRule="evenodd" d={svgPaths.p8fc1780} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_322" />
          <path clipRule="evenodd" d={svgPaths.p36a84700} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_323" />
          <path clipRule="evenodd" d={svgPaths.p17c426b0} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_324" />
          <path clipRule="evenodd" d={svgPaths.p1da09180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_325" />
          <path clipRule="evenodd" d={svgPaths.pb897900} fill="var(--fill-0, #DE6BA9)" fillRule="evenodd" id="Vector_326" />
          <path clipRule="evenodd" d={svgPaths.pc69ad00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_327" />
          <path clipRule="evenodd" d={svgPaths.p2a1ff00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_328" />
          <path clipRule="evenodd" d={svgPaths.p3a250c80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_329" />
          <path clipRule="evenodd" d={svgPaths.p9b03300} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_330" />
          <path clipRule="evenodd" d={svgPaths.p1942b100} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_331" />
          <path clipRule="evenodd" d={svgPaths.pd958000} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_332" />
          <path clipRule="evenodd" d={svgPaths.p382ea4c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_333" />
          <path clipRule="evenodd" d={svgPaths.pd14ee80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_334" />
          <path clipRule="evenodd" d={svgPaths.p3da30a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_335" />
          <path clipRule="evenodd" d={svgPaths.p18de9b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_336" />
          <path clipRule="evenodd" d={svgPaths.p1e040c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_337" />
          <path clipRule="evenodd" d={svgPaths.p32c02f00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_338" />
          <path clipRule="evenodd" d={svgPaths.p15bda780} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_339" />
          <path clipRule="evenodd" d={svgPaths.p3a352100} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_340" />
          <path clipRule="evenodd" d={svgPaths.p30ecddc0} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_341" />
          <path clipRule="evenodd" d={svgPaths.p3f9b5780} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_342" />
          <path clipRule="evenodd" d={svgPaths.p325df300} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_343" />
          <path clipRule="evenodd" d={svgPaths.p10134700} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_344" />
          <path clipRule="evenodd" d={svgPaths.p376e6200} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_345" />
          <path clipRule="evenodd" d={svgPaths.p28c71a00} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_346" />
          <path clipRule="evenodd" d={svgPaths.p37ffd900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_347" />
          <path clipRule="evenodd" d={svgPaths.p364f5600} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_348" />
          <path clipRule="evenodd" d={svgPaths.p142b4500} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_349" />
          <path clipRule="evenodd" d={svgPaths.p28ed1200} fill="var(--fill-0, #F6D491)" fillRule="evenodd" id="Vector_350" />
          <path clipRule="evenodd" d={svgPaths.pec034c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_351" />
          <path clipRule="evenodd" d={svgPaths.p39bc0b00} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_352" />
          <path clipRule="evenodd" d={svgPaths.p23156a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_353" />
          <path clipRule="evenodd" d={svgPaths.p26c73c00} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_354" />
          <path clipRule="evenodd" d={svgPaths.pddb0180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_355" />
          <path clipRule="evenodd" d={svgPaths.p2c5f29f0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_356" />
          <path clipRule="evenodd" d={svgPaths.p463ba00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_357" />
          <path clipRule="evenodd" d={svgPaths.p272e2880} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_358" />
          <path clipRule="evenodd" d={svgPaths.p3b171180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_359" />
          <path clipRule="evenodd" d={svgPaths.p130f89f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_360" />
          <path clipRule="evenodd" d={svgPaths.p226c6180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_361" />
          <path clipRule="evenodd" d={svgPaths.p39eff500} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_362" />
          <path clipRule="evenodd" d={svgPaths.p286ece80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_363" />
          <path clipRule="evenodd" d={svgPaths.p2ca7f900} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_364" />
          <path clipRule="evenodd" d={svgPaths.p1493b200} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_365" />
          <path clipRule="evenodd" d={svgPaths.p3c67ce80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_366" />
          <path clipRule="evenodd" d={svgPaths.p4bffbf0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_367" />
          <path clipRule="evenodd" d={svgPaths.pa932300} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_368" />
          <path clipRule="evenodd" d={svgPaths.p36ec24f2} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_369" />
          <path clipRule="evenodd" d={svgPaths.p2006c820} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_370" />
          <path clipRule="evenodd" d={svgPaths.p134f6000} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_371" />
          <path clipRule="evenodd" d={svgPaths.p2770d900} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_372" />
          <path clipRule="evenodd" d={svgPaths.p12977a00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_373" />
          <path clipRule="evenodd" d={svgPaths.pab5be00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_374" />
          <path clipRule="evenodd" d={svgPaths.p5977280} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_375" />
          <path clipRule="evenodd" d={svgPaths.p1435b900} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_376" />
          <path clipRule="evenodd" d={svgPaths.p3075d880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_377" />
          <path clipRule="evenodd" d={svgPaths.pa5b2a80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_378" />
          <path clipRule="evenodd" d={svgPaths.p3d8c0200} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_379" />
          <path clipRule="evenodd" d={svgPaths.p39ba36f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_380" />
          <path clipRule="evenodd" d={svgPaths.p6c20500} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_381" />
          <path clipRule="evenodd" d={svgPaths.p3538a480} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_382" />
          <path clipRule="evenodd" d={svgPaths.pa1e9f00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_383" />
          <path clipRule="evenodd" d={svgPaths.p3a3f0e00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_384" />
          <path clipRule="evenodd" d={svgPaths.p2857c100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_385" />
          <path clipRule="evenodd" d={svgPaths.p2c28b70} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_386" />
          <path clipRule="evenodd" d={svgPaths.p3eea480} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_387" />
          <path clipRule="evenodd" d={svgPaths.p3b4adf00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_388" />
          <path clipRule="evenodd" d={svgPaths.p2ca53800} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_389" />
          <path clipRule="evenodd" d={svgPaths.p3684d700} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_390" />
          <path clipRule="evenodd" d={svgPaths.p2cbf4b00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_391" />
          <path clipRule="evenodd" d={svgPaths.p174d8400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_392" />
          <path clipRule="evenodd" d={svgPaths.p8a9bd80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_393" />
          <path clipRule="evenodd" d={svgPaths.p10afa00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_394" />
          <path clipRule="evenodd" d={svgPaths.pda6c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_395" />
          <path clipRule="evenodd" d={svgPaths.p238a1c70} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_396" />
          <path clipRule="evenodd" d={svgPaths.p286d0d00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_397" />
          <path clipRule="evenodd" d={svgPaths.p215800} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_398" />
          <path clipRule="evenodd" d={svgPaths.p3590df00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_399" />
          <path clipRule="evenodd" d={svgPaths.pab40880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_400" />
          <path clipRule="evenodd" d={svgPaths.p3b79d1b0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_401" />
          <path clipRule="evenodd" d={svgPaths.p33add100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_402" />
          <path clipRule="evenodd" d={svgPaths.p288940f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_403" />
          <path clipRule="evenodd" d={svgPaths.p296c5400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_404" />
          <path clipRule="evenodd" d={svgPaths.pd71e580} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_405" />
          <path clipRule="evenodd" d={svgPaths.p29ab4f80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_406" />
          <path clipRule="evenodd" d={svgPaths.p28def780} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_407" />
          <path clipRule="evenodd" d={svgPaths.p32ce9100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_408" />
          <path clipRule="evenodd" d={svgPaths.p1355b600} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_409" />
          <path clipRule="evenodd" d={svgPaths.p99e4400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_410" />
          <path clipRule="evenodd" d={svgPaths.p1af30100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_411" />
          <path clipRule="evenodd" d={svgPaths.p1f7b2e72} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_412" />
          <path clipRule="evenodd" d={svgPaths.p1b58d200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_413" />
          <path clipRule="evenodd" d={svgPaths.p2bab3800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_414" />
          <path clipRule="evenodd" d={svgPaths.p34b46d40} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_415" />
          <path clipRule="evenodd" d={svgPaths.p369c9e80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_416" />
          <path clipRule="evenodd" d={svgPaths.p1ef02f00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_417" />
          <path clipRule="evenodd" d={svgPaths.p19a39f80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_418" />
          <path clipRule="evenodd" d={svgPaths.p10caa200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_419" />
          <path clipRule="evenodd" d={svgPaths.p176f9080} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_420" />
          <path clipRule="evenodd" d={svgPaths.p175f73d0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_421" />
          <path clipRule="evenodd" d={svgPaths.p110a2100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_422" />
          <path clipRule="evenodd" d={svgPaths.p16563000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_423" />
          <path clipRule="evenodd" d={svgPaths.p3700fc00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_424" />
          <path clipRule="evenodd" d={svgPaths.p2249e200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_425" />
          <path clipRule="evenodd" d={svgPaths.p37ab6871} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_426" />
          <path clipRule="evenodd" d={svgPaths.pbb8a400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_427" />
          <path clipRule="evenodd" d={svgPaths.p3e1d4500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_428" />
          <path clipRule="evenodd" d={svgPaths.p3d3d3400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_429" />
          <path clipRule="evenodd" d={svgPaths.p56b8800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_430" />
          <path clipRule="evenodd" d={svgPaths.p3e73580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_431" />
          <path clipRule="evenodd" d={svgPaths.p3eef3c00} fill="var(--fill-0, #4653A4)" fillRule="evenodd" id="Vector_432" />
          <path clipRule="evenodd" d={svgPaths.p6d0d80} fill="var(--fill-0, #4653A4)" fillRule="evenodd" id="Vector_433" />
          <path clipRule="evenodd" d={svgPaths.p16b9f9f0} fill="var(--fill-0, #4653A4)" fillRule="evenodd" id="Vector_434" />
          <path clipRule="evenodd" d={svgPaths.p9f7df00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_435" />
          <path clipRule="evenodd" d={svgPaths.p17ce2900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_436" />
          <path clipRule="evenodd" d={svgPaths.p1213b600} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_437" />
          <path clipRule="evenodd" d={svgPaths.p22d52400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_438" />
          <path clipRule="evenodd" d={svgPaths.p1e324a90} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_439" />
          <path clipRule="evenodd" d={svgPaths.p1705d080} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_440" />
          <path clipRule="evenodd" d={svgPaths.p10992c00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_441" />
          <path clipRule="evenodd" d={svgPaths.p108b6b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_442" />
          <path clipRule="evenodd" d={svgPaths.p5b7a800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_443" />
          <path clipRule="evenodd" d={svgPaths.p22c64b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_444" />
          <path clipRule="evenodd" d={svgPaths.p27610000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_445" />
          <path clipRule="evenodd" d={svgPaths.p1eeb2500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_446" />
          <path clipRule="evenodd" d={svgPaths.p2aaf3cc2} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_447" />
          <path clipRule="evenodd" d={svgPaths.p17ed27f0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_448" />
          <path clipRule="evenodd" d={svgPaths.p38ab0b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_449" />
          <path clipRule="evenodd" d={svgPaths.p76ae00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_450" />
          <path clipRule="evenodd" d={svgPaths.p3c50e5f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_451" />
          <path clipRule="evenodd" d={svgPaths.p30b51200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_452" />
          <path clipRule="evenodd" d={svgPaths.p1c700100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_453" />
          <path clipRule="evenodd" d={svgPaths.p38653b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_454" />
          <path clipRule="evenodd" d={svgPaths.p278d9c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_455" />
          <path clipRule="evenodd" d={svgPaths.p27219e80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_456" />
          <path clipRule="evenodd" d={svgPaths.p1fbe1880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_457" />
          <path clipRule="evenodd" d={svgPaths.p1d3ce300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_458" />
          <path clipRule="evenodd" d={svgPaths.p4eecb80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_459" />
          <path clipRule="evenodd" d={svgPaths.p29edcad0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_460" />
          <path clipRule="evenodd" d={svgPaths.p3357c4f1} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_461" />
          <path clipRule="evenodd" d={svgPaths.p17ce5980} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_462" />
          <path clipRule="evenodd" d={svgPaths.p2cdbca00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_463" />
          <path clipRule="evenodd" d={svgPaths.p2bff7730} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_464" />
          <path clipRule="evenodd" d={svgPaths.p1aac73f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_465" />
          <path clipRule="evenodd" d={svgPaths.p2a6ede00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_466" />
          <path clipRule="evenodd" d={svgPaths.p38b49380} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_467" />
          <path clipRule="evenodd" d={svgPaths.p3deb0a00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_468" />
          <path clipRule="evenodd" d={svgPaths.pace5400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_469" />
          <path clipRule="evenodd" d={svgPaths.p27715400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_470" />
          <path clipRule="evenodd" d={svgPaths.p3296c180} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_471" />
          <path clipRule="evenodd" d={svgPaths.p5c87480} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_472" />
          <path clipRule="evenodd" d={svgPaths.p13431a80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_473" />
          <path clipRule="evenodd" d={svgPaths.p2782b800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_474" />
          <path clipRule="evenodd" d={svgPaths.p22e4f730} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_475" />
          <path clipRule="evenodd" d={svgPaths.p336d0800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_476" />
          <path clipRule="evenodd" d={svgPaths.p20b8b80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_477" />
        </g>
      </svg>
    </div>
  );
}

function LeagueIcon2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="League Icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Spain">
        <Icon2 />
      </div>
    </div>
  );
}

function LeagueHeading2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="League Heading">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">League Heading</p>
      </div>
    </div>
  );
}

function EventsQty2() {
  return (
    <div className="bg-[#993800] content-stretch flex flex-col h-[16px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Events Qty">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">112</p>
      </div>
    </div>
  );
}

function NumberOfMatches2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Number of Matches">
      <EventsQty2 />
    </div>
  );
}

function LeagueItemHeading2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="League Item Heading">
      <button className="block cursor-pointer relative shrink-0 size-[20px]" data-name="_Like sport">
        <div className="absolute inset-0 overflow-clip" data-name="Favorites Stroke">
          <div className="absolute inset-[13.54%_8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14.5832">
              <path d={svgPaths.p31fcbd80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
      </button>
      <LeagueIcon2 />
      <LeagueHeading2 />
      <NumberOfMatches2 />
    </div>
  );
}

function ExpandableArrow2({ expanded, onClick }: { expanded: boolean; onClick: () => void }) {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <motion.button
        type="button"
        onClick={onClick}
        animate={{ rotate: expanded ? 0 : 180 }}
        whileTap={{ scale: 0.85 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="content-stretch cursor-pointer flex items-center relative"
        data-name="Expandable Arrow"
        aria-expanded={expanded}
        aria-label={expanded ? "Collapse league" : "Expand league"}
      >
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Up">
          <div className="absolute bottom-[35.43%] left-1/4 right-1/4 top-[35.42%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6.99792">
              <path clipRule="evenodd" d={svgPaths.p38da2c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </motion.button>
    </div>
  );
}

function LeagueItemHeadingExpandable2({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  return (
    <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="League Item Heading Expandable">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <LeagueItemHeading2 />
          <ExpandableArrow2 expanded={expanded} onClick={onToggle} />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute inset-[8.33%] overflow-clip rounded-[100px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3476d900} fill="var(--fill-0, #B5202E)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3824fa00} fill="var(--fill-0, #F5C426)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p157d6400} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p29b4e0f2} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.pa5fca00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.pe551900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p1fc05070} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p1b2ee680} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p3b0dd500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p3bcf7b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p2350c780} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p1599f300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p798b400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p5ddedf0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p30d98400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p210b1b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_16" />
          <path clipRule="evenodd" d={svgPaths.p365ead00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_17" />
          <path clipRule="evenodd" d={svgPaths.p191b40c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_18" />
          <path clipRule="evenodd" d={svgPaths.p26981b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_19" />
          <path clipRule="evenodd" d={svgPaths.p36587cf0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_20" />
          <path clipRule="evenodd" d={svgPaths.p31f1e200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_21" />
          <path clipRule="evenodd" d={svgPaths.p444f400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_22" />
          <path clipRule="evenodd" d={svgPaths.p4d45580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_23" />
          <path clipRule="evenodd" d={svgPaths.p977c280} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_24" />
          <path clipRule="evenodd" d={svgPaths.p2421ae80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_25" />
          <path clipRule="evenodd" d={svgPaths.p373f9a80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_26" />
          <path clipRule="evenodd" d={svgPaths.p1f048000} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_27" />
          <path clipRule="evenodd" d={svgPaths.p2fa30100} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_28" />
          <path clipRule="evenodd" d={svgPaths.p1d298060} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_29" />
          <path clipRule="evenodd" d={svgPaths.p18cd1b00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_30" />
          <path clipRule="evenodd" d={svgPaths.p2a4d0580} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_31" />
          <path clipRule="evenodd" d={svgPaths.p11f63400} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_32" />
          <path clipRule="evenodd" d={svgPaths.pa2d4f00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_33" />
          <path clipRule="evenodd" d={svgPaths.p6f5f1a0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_34" />
          <path clipRule="evenodd" d={svgPaths.p1735a000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_35" />
          <path clipRule="evenodd" d={svgPaths.p348e1380} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_36" />
          <path clipRule="evenodd" d={svgPaths.p26aab900} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_37" />
          <path clipRule="evenodd" d={svgPaths.p36052600} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_38" />
          <path clipRule="evenodd" d={svgPaths.p326e9c80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_39" />
          <path clipRule="evenodd" d={svgPaths.p3a3d2a00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_40" />
          <path clipRule="evenodd" d={svgPaths.p20591200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_41" />
          <path clipRule="evenodd" d={svgPaths.pcdcfc00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_42" />
          <path clipRule="evenodd" d={svgPaths.p32f1d000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_43" />
          <path clipRule="evenodd" d={svgPaths.pdfdf100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_44" />
          <path clipRule="evenodd" d={svgPaths.p9d777f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_45" />
          <path clipRule="evenodd" d={svgPaths.p18473580} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_46" />
          <path clipRule="evenodd" d={svgPaths.p1b853480} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_47" />
          <path clipRule="evenodd" d={svgPaths.p363f1180} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_48" />
          <path clipRule="evenodd" d={svgPaths.p2700def0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_49" />
          <path clipRule="evenodd" d={svgPaths.p23fef800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_50" />
          <path clipRule="evenodd" d={svgPaths.p31115080} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_51" />
          <path clipRule="evenodd" d={svgPaths.pcc81200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_52" />
          <path clipRule="evenodd" d={svgPaths.pb80e600} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_53" />
          <path clipRule="evenodd" d={svgPaths.p30a65140} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_54" />
          <path clipRule="evenodd" d={svgPaths.p3e506d00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_55" />
          <path clipRule="evenodd" d={svgPaths.p1fd1a700} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_56" />
          <path clipRule="evenodd" d={svgPaths.pb1c5800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_57" />
          <path clipRule="evenodd" d={svgPaths.p37ee3b80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_58" />
          <path clipRule="evenodd" d={svgPaths.p3ed32000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_59" />
          <path clipRule="evenodd" d={svgPaths.p174026c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_60" />
          <path clipRule="evenodd" d={svgPaths.p32c0b880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_61" />
          <path clipRule="evenodd" d={svgPaths.p1b6f3c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_62" />
          <path clipRule="evenodd" d={svgPaths.p667aa00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_63" />
          <path clipRule="evenodd" d={svgPaths.p3f8e7b72} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_64" />
          <path clipRule="evenodd" d={svgPaths.p1bb14480} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_65" />
          <path clipRule="evenodd" d={svgPaths.p30032cb0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_66" />
          <path clipRule="evenodd" d={svgPaths.p32d12c00} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_67" />
          <path clipRule="evenodd" d={svgPaths.pc166580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_68" />
          <path clipRule="evenodd" d={svgPaths.p1ab8a080} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_69" />
          <path clipRule="evenodd" d={svgPaths.p17ca6000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_70" />
          <path clipRule="evenodd" d={svgPaths.p13918a40} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_71" />
          <path clipRule="evenodd" d={svgPaths.p2524e100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_72" />
          <path clipRule="evenodd" d={svgPaths.p11d13600} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_73" />
          <path clipRule="evenodd" d={svgPaths.p3e8ce440} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_74" />
          <path clipRule="evenodd" d={svgPaths.p1e1b3c00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_75" />
          <path clipRule="evenodd" d={svgPaths.pf789d00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_76" />
          <path clipRule="evenodd" d={svgPaths.p26510772} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_77" />
          <path clipRule="evenodd" d={svgPaths.p32da0900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_78" />
          <path clipRule="evenodd" d={svgPaths.p121f00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_79" />
          <path clipRule="evenodd" d={svgPaths.p23174680} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_80" />
          <path clipRule="evenodd" d={svgPaths.p22378f80} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_81" />
          <path clipRule="evenodd" d={svgPaths.p1404e300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_82" />
          <path clipRule="evenodd" d={svgPaths.pc496500} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_83" />
          <path clipRule="evenodd" d={svgPaths.p28905e00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_84" />
          <path clipRule="evenodd" d={svgPaths.p3965100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_85" />
          <path clipRule="evenodd" d={svgPaths.p3a545a70} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_86" />
          <path clipRule="evenodd" d={svgPaths.p3b373500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_87" />
          <path clipRule="evenodd" d={svgPaths.pbee4c00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_88" />
          <path clipRule="evenodd" d={svgPaths.pb87c680} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_89" />
          <path clipRule="evenodd" d={svgPaths.p1904cb80} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_90" />
          <path clipRule="evenodd" d={svgPaths.p1c80fa30} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_91" />
          <path clipRule="evenodd" d={svgPaths.p1e2ee300} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_92" />
          <path clipRule="evenodd" d={svgPaths.p2101b580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_93" />
          <path clipRule="evenodd" d={svgPaths.p25b33e80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_94" />
          <path clipRule="evenodd" d={svgPaths.p38c3ae80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_95" />
          <path clipRule="evenodd" d={svgPaths.p1e0aad00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_96" />
          <path clipRule="evenodd" d={svgPaths.p9c2b900} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_97" />
          <path clipRule="evenodd" d={svgPaths.p19d97400} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_98" />
          <path clipRule="evenodd" d={svgPaths.p206ebc00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_99" />
          <path clipRule="evenodd" d={svgPaths.p33ca4b10} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_100" />
          <path clipRule="evenodd" d={svgPaths.p2451d080} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_101" />
          <path clipRule="evenodd" d={svgPaths.pa83bb00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_102" />
          <path clipRule="evenodd" d={svgPaths.p3e649100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_103" />
          <path clipRule="evenodd" d={svgPaths.p21f2f600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_104" />
          <path clipRule="evenodd" d={svgPaths.p22a5e200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_105" />
          <path clipRule="evenodd" d={svgPaths.p25785300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_106" />
          <path clipRule="evenodd" d={svgPaths.p2d371200} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_107" />
          <path clipRule="evenodd" d={svgPaths.p16d81100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_108" />
          <path clipRule="evenodd" d={svgPaths.p1ad2ec80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_109" />
          <path clipRule="evenodd" d={svgPaths.p5c60440} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_110" />
          <path clipRule="evenodd" d={svgPaths.p3a6b3f80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_111" />
          <path clipRule="evenodd" d={svgPaths.p2625b5f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_112" />
          <path clipRule="evenodd" d={svgPaths.p2dbf5880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_113" />
          <path clipRule="evenodd" d={svgPaths.p94900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_114" />
          <path clipRule="evenodd" d={svgPaths.p35451300} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_115" />
          <path clipRule="evenodd" d={svgPaths.p373b9a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_116" />
          <path clipRule="evenodd" d={svgPaths.p2e56fca0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_117" />
          <path clipRule="evenodd" d={svgPaths.p6be54c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_118" />
          <path clipRule="evenodd" d={svgPaths.p347b3c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_119" />
          <path clipRule="evenodd" d={svgPaths.p21fbc500} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_120" />
          <path clipRule="evenodd" d={svgPaths.p118ac300} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_121" />
          <path clipRule="evenodd" d={svgPaths.pcb4e180} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_122" />
          <path clipRule="evenodd" d={svgPaths.p319d0040} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_123" />
          <path clipRule="evenodd" d={svgPaths.p1dd5600} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_124" />
          <path clipRule="evenodd" d={svgPaths.p18c9cd00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_125" />
          <path clipRule="evenodd" d={svgPaths.p264fa900} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_126" />
          <path clipRule="evenodd" d={svgPaths.p2ae2c700} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_127" />
          <path clipRule="evenodd" d={svgPaths.p1313a500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_128" />
          <path clipRule="evenodd" d={svgPaths.p28ca1200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_129" />
          <path clipRule="evenodd" d={svgPaths.p3abab400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_130" />
          <path clipRule="evenodd" d={svgPaths.p2d40b3c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_131" />
          <path clipRule="evenodd" d={svgPaths.p35daa080} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_132" />
          <path clipRule="evenodd" d={svgPaths.p2155e000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_133" />
          <path clipRule="evenodd" d={svgPaths.p3b525490} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_134" />
          <path clipRule="evenodd" d={svgPaths.p32c4aa00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_135" />
          <path clipRule="evenodd" d={svgPaths.p5bbf840} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_136" />
          <path clipRule="evenodd" d={svgPaths.p3f317a80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_137" />
          <path clipRule="evenodd" d={svgPaths.p3ba2e0c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_138" />
          <path clipRule="evenodd" d={svgPaths.p17cc9e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_139" />
          <path clipRule="evenodd" d={svgPaths.p24211f00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_140" />
          <path clipRule="evenodd" d={svgPaths.pd887100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_141" />
          <path clipRule="evenodd" d={svgPaths.p370247c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_142" />
          <path clipRule="evenodd" d={svgPaths.p20f29dc0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_143" />
          <path clipRule="evenodd" d={svgPaths.p1467e000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_144" />
          <path clipRule="evenodd" d={svgPaths.p2b6b2d00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_145" />
          <path clipRule="evenodd" d={svgPaths.p2eb3100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_146" />
          <path clipRule="evenodd" d={svgPaths.p21600400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_147" />
          <path clipRule="evenodd" d={svgPaths.p14423d80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_148" />
          <path clipRule="evenodd" d={svgPaths.p39533800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_149" />
          <path clipRule="evenodd" d={svgPaths.p3cb25300} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_150" />
          <path clipRule="evenodd" d={svgPaths.p1ef58470} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_151" />
          <path clipRule="evenodd" d={svgPaths.p317b3880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_152" />
          <path clipRule="evenodd" d={svgPaths.p1c427c90} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_153" />
          <path clipRule="evenodd" d={svgPaths.p229a9800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_154" />
          <path clipRule="evenodd" d={svgPaths.p2a8eca00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_155" />
          <path clipRule="evenodd" d={svgPaths.p39d28800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_156" />
          <path clipRule="evenodd" d={svgPaths.p17e94700} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_157" />
          <path clipRule="evenodd" d={svgPaths.p2722a000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_158" />
          <path clipRule="evenodd" d={svgPaths.p1f5e8200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_159" />
          <path clipRule="evenodd" d={svgPaths.p1ba74700} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_160" />
          <path clipRule="evenodd" d={svgPaths.p190c2c80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_161" />
          <path clipRule="evenodd" d={svgPaths.p47d4dc0} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_162" />
          <path clipRule="evenodd" d={svgPaths.pea22520} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_163" />
          <path clipRule="evenodd" d={svgPaths.p1fe84770} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_164" />
          <path clipRule="evenodd" d={svgPaths.p1b854a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_165" />
          <path clipRule="evenodd" d={svgPaths.p13dd9300} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_166" />
          <path clipRule="evenodd" d={svgPaths.p4251180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_167" />
          <path clipRule="evenodd" d={svgPaths.p3c171f80} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_168" />
          <path clipRule="evenodd" d={svgPaths.p324f3e00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_169" />
          <path clipRule="evenodd" d={svgPaths.p2a71bff0} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_170" />
          <path clipRule="evenodd" d={svgPaths.p327a7600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_171" />
          <path clipRule="evenodd" d={svgPaths.p1ebfe7c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_172" />
          <path clipRule="evenodd" d={svgPaths.p3fa78280} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_173" />
          <path clipRule="evenodd" d={svgPaths.p3a099900} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_174" />
          <path clipRule="evenodd" d={svgPaths.pb03f300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_175" />
          <path clipRule="evenodd" d={svgPaths.p1ee43880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_176" />
          <path clipRule="evenodd" d={svgPaths.p2f1b7600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_177" />
          <path clipRule="evenodd" d={svgPaths.p2655ce80} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_178" />
          <path clipRule="evenodd" d={svgPaths.p263b4c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_179" />
          <path clipRule="evenodd" d={svgPaths.p3f262900} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_180" />
          <path clipRule="evenodd" d={svgPaths.p20cb92f0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_181" />
          <path clipRule="evenodd" d={svgPaths.p3ad9ca80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_182" />
          <path clipRule="evenodd" d={svgPaths.p3fa4f780} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_183" />
          <path clipRule="evenodd" d={svgPaths.p6472180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_184" />
          <path clipRule="evenodd" d={svgPaths.p3b0e1500} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_185" />
          <path clipRule="evenodd" d={svgPaths.p36743380} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_186" />
          <path clipRule="evenodd" d={svgPaths.pd276600} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_187" />
          <path clipRule="evenodd" d={svgPaths.p204ef900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_188" />
          <path clipRule="evenodd" d={svgPaths.p3181f200} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_189" />
          <path clipRule="evenodd" d={svgPaths.p39eb6400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_190" />
          <path clipRule="evenodd" d={svgPaths.p2ef48e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_191" />
          <path clipRule="evenodd" d={svgPaths.p25ffa80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_192" />
          <path clipRule="evenodd" d={svgPaths.p9551e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_193" />
          <path clipRule="evenodd" d={svgPaths.p21c6e800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_194" />
          <path clipRule="evenodd" d={svgPaths.p2075210} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_195" />
          <path clipRule="evenodd" d={svgPaths.p282c7200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_196" />
          <path clipRule="evenodd" d={svgPaths.p23529b00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_197" />
          <path clipRule="evenodd" d={svgPaths.p3df92500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_198" />
          <path clipRule="evenodd" d={svgPaths.p384edd00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_199" />
          <path clipRule="evenodd" d={svgPaths.p1ed0eb80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_200" />
          <path clipRule="evenodd" d={svgPaths.p15f6c880} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_201" />
          <path clipRule="evenodd" d={svgPaths.p496f9c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_202" />
          <path clipRule="evenodd" d={svgPaths.p1bf77e00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_203" />
          <path clipRule="evenodd" d={svgPaths.p3192c400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_204" />
          <path clipRule="evenodd" d={svgPaths.p25f0aa00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_205" />
          <path clipRule="evenodd" d={svgPaths.p368fb800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_206" />
          <path clipRule="evenodd" d={svgPaths.p2445bb70} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_207" />
          <path clipRule="evenodd" d={svgPaths.pf24dd00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_208" />
          <path clipRule="evenodd" d={svgPaths.p3c0c1ad0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_209" />
          <path clipRule="evenodd" d={svgPaths.p2e2c7b70} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_210" />
          <path clipRule="evenodd" d={svgPaths.p2b262b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_211" />
          <path clipRule="evenodd" d={svgPaths.p222d3a80} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_212" />
          <path clipRule="evenodd" d={svgPaths.p257e8e30} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_213" />
          <path clipRule="evenodd" d={svgPaths.pe10a880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_214" />
          <path clipRule="evenodd" d={svgPaths.p77c5000} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_215" />
          <path clipRule="evenodd" d={svgPaths.p32a77300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_216" />
          <path clipRule="evenodd" d={svgPaths.p2c7c4700} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_217" />
          <path clipRule="evenodd" d={svgPaths.p3a3aec60} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_218" />
          <path clipRule="evenodd" d={svgPaths.pb41c000} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_219" />
          <path clipRule="evenodd" d={svgPaths.pf661400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_220" />
          <path clipRule="evenodd" d={svgPaths.p2ccda5f0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_221" />
          <path clipRule="evenodd" d={svgPaths.p134e3180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_222" />
          <path clipRule="evenodd" d={svgPaths.p27479200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_223" />
          <path clipRule="evenodd" d={svgPaths.p12924680} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_224" />
          <path clipRule="evenodd" d={svgPaths.p1e6f0c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_225" />
          <path clipRule="evenodd" d={svgPaths.p28122d00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_226" />
          <path clipRule="evenodd" d={svgPaths.p20d430b0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_227" />
          <path clipRule="evenodd" d={svgPaths.p3dcff670} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_228" />
          <path clipRule="evenodd" d={svgPaths.p6afd800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_229" />
          <path clipRule="evenodd" d={svgPaths.p21b677f2} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_230" />
          <path clipRule="evenodd" d={svgPaths.p12e4af40} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_231" />
          <path clipRule="evenodd" d={svgPaths.p331b3400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_232" />
          <path clipRule="evenodd" d={svgPaths.p3a188310} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_233" />
          <path clipRule="evenodd" d={svgPaths.p33b67d40} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_234" />
          <path clipRule="evenodd" d={svgPaths.p1138d400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_235" />
          <path clipRule="evenodd" d={svgPaths.p3b4c3c00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_236" />
          <path clipRule="evenodd" d={svgPaths.p198d4c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_237" />
          <path clipRule="evenodd" d={svgPaths.p3d9635c0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_238" />
          <path clipRule="evenodd" d={svgPaths.pb636900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_239" />
          <path clipRule="evenodd" d={svgPaths.p3acaaa00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_240" />
          <path clipRule="evenodd" d={svgPaths.p3897e800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_241" />
          <path clipRule="evenodd" d={svgPaths.p9c973f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_242" />
          <path clipRule="evenodd" d={svgPaths.p23a0a240} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_243" />
          <path clipRule="evenodd" d={svgPaths.p306ee100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_244" />
          <path clipRule="evenodd" d={svgPaths.p1a2ed3c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_245" />
          <path clipRule="evenodd" d={svgPaths.p1a719100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_246" />
          <path clipRule="evenodd" d={svgPaths.p38db2400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_247" />
          <path clipRule="evenodd" d={svgPaths.p3276a800} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_248" />
          <path clipRule="evenodd" d={svgPaths.p30ae9080} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_249" />
          <path clipRule="evenodd" d={svgPaths.p3a1cd000} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_250" />
          <path clipRule="evenodd" d={svgPaths.pd436a00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_251" />
          <path clipRule="evenodd" d={svgPaths.p3b289200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_252" />
          <path clipRule="evenodd" d={svgPaths.pd9c2a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_253" />
          <path clipRule="evenodd" d={svgPaths.p1c17a180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_254" />
          <path clipRule="evenodd" d={svgPaths.pbd0300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_255" />
          <path clipRule="evenodd" d={svgPaths.p3c0afc00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_256" />
          <path clipRule="evenodd" d={svgPaths.pb522180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_257" />
          <path clipRule="evenodd" d={svgPaths.p366ab300} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_258" />
          <path clipRule="evenodd" d={svgPaths.p316b1180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_259" />
          <path clipRule="evenodd" d={svgPaths.p161b91f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_260" />
          <path clipRule="evenodd" d={svgPaths.p3d339880} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_261" />
          <path clipRule="evenodd" d={svgPaths.p225d7200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_262" />
          <path clipRule="evenodd" d={svgPaths.p252f5730} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_263" />
          <path clipRule="evenodd" d={svgPaths.p39995a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_264" />
          <path clipRule="evenodd" d={svgPaths.p29c99400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_265" />
          <path clipRule="evenodd" d={svgPaths.p17cf5e80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_266" />
          <path clipRule="evenodd" d={svgPaths.p60b2680} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_267" />
          <path clipRule="evenodd" d={svgPaths.p79be100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_268" />
          <path clipRule="evenodd" d={svgPaths.p36e77500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_269" />
          <path clipRule="evenodd" d={svgPaths.p13854880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_270" />
          <path clipRule="evenodd" d={svgPaths.p28a6e100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_271" />
          <path clipRule="evenodd" d={svgPaths.pae1f000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_272" />
          <path clipRule="evenodd" d={svgPaths.p2c691100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_273" />
          <path clipRule="evenodd" d={svgPaths.p1519200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_274" />
          <path clipRule="evenodd" d={svgPaths.p6f97b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_275" />
          <path clipRule="evenodd" d={svgPaths.p104e2880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_276" />
          <path clipRule="evenodd" d={svgPaths.p1d25100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_277" />
          <path clipRule="evenodd" d={svgPaths.p3b208800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_278" />
          <path clipRule="evenodd" d={svgPaths.pcc63a00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_279" />
          <path clipRule="evenodd" d={svgPaths.p2043fe80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_280" />
          <path clipRule="evenodd" d={svgPaths.pfe74500} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_281" />
          <path clipRule="evenodd" d={svgPaths.p5089980} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_282" />
          <path clipRule="evenodd" d={svgPaths.p1c8f1000} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_283" />
          <path clipRule="evenodd" d={svgPaths.p3cac1c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_284" />
          <path clipRule="evenodd" d={svgPaths.p2e756e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_285" />
          <path clipRule="evenodd" d={svgPaths.pdc93700} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_286" />
          <path clipRule="evenodd" d={svgPaths.p1685e380} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_287" />
          <path clipRule="evenodd" d={svgPaths.p3be92600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_288" />
          <path clipRule="evenodd" d={svgPaths.p25c70700} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_289" />
          <path clipRule="evenodd" d={svgPaths.p2be63600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_290" />
          <path clipRule="evenodd" d={svgPaths.p3b28bf00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_291" />
          <path clipRule="evenodd" d={svgPaths.p35069500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_292" />
          <path clipRule="evenodd" d={svgPaths.p1375f600} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_293" />
          <path clipRule="evenodd" d={svgPaths.p18835500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_294" />
          <path clipRule="evenodd" d={svgPaths.p18d5af80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_295" />
          <path clipRule="evenodd" d={svgPaths.p220c17c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_296" />
          <path clipRule="evenodd" d={svgPaths.p15f72e80} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_297" />
          <path clipRule="evenodd" d={svgPaths.p1c62cf00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_298" />
          <path clipRule="evenodd" d={svgPaths.p18b6180} fill="var(--fill-0, #CBCACA)" fillRule="evenodd" id="Vector_299" />
          <path clipRule="evenodd" d={svgPaths.p2e46fa20} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_300" />
          <path clipRule="evenodd" d={svgPaths.p16306800} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_301" />
          <path clipRule="evenodd" d={svgPaths.p18abec80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_302" />
          <path clipRule="evenodd" d={svgPaths.p6cd4780} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_303" />
          <path clipRule="evenodd" d={svgPaths.p19758e00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_304" />
          <path clipRule="evenodd" d={svgPaths.p3ec6b480} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_305" />
          <path clipRule="evenodd" d={svgPaths.p79b0480} fill="var(--fill-0, #C0B531)" fillRule="evenodd" id="Vector_306" />
          <path clipRule="evenodd" d={svgPaths.p14039280} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_307" />
          <path clipRule="evenodd" d={svgPaths.p3f28ff00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_308" />
          <path clipRule="evenodd" d={svgPaths.p11176480} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_309" />
          <path clipRule="evenodd" d={svgPaths.p219e36a0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_310" />
          <path clipRule="evenodd" d={svgPaths.p13bdfcc0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_311" />
          <path clipRule="evenodd" d={svgPaths.p222c7c70} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_312" />
          <path clipRule="evenodd" d={svgPaths.p2ec94600} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_313" />
          <path clipRule="evenodd" d={svgPaths.p34d86800} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_314" />
          <path clipRule="evenodd" d={svgPaths.p33f14ac0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_315" />
          <path clipRule="evenodd" d={svgPaths.p1ad0e000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_316" />
          <path clipRule="evenodd" d={svgPaths.pa7c9b80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_317" />
          <path clipRule="evenodd" d={svgPaths.p33b0d100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_318" />
          <path clipRule="evenodd" d={svgPaths.p46d0200} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_319" />
          <path clipRule="evenodd" d={svgPaths.p33e568a0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_320" />
          <path clipRule="evenodd" d={svgPaths.p3469a300} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_321" />
          <path clipRule="evenodd" d={svgPaths.p8fc1780} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_322" />
          <path clipRule="evenodd" d={svgPaths.p36a84700} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_323" />
          <path clipRule="evenodd" d={svgPaths.p17c426b0} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_324" />
          <path clipRule="evenodd" d={svgPaths.p1da09180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_325" />
          <path clipRule="evenodd" d={svgPaths.pb897900} fill="var(--fill-0, #DE6BA9)" fillRule="evenodd" id="Vector_326" />
          <path clipRule="evenodd" d={svgPaths.pc69ad00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_327" />
          <path clipRule="evenodd" d={svgPaths.p2a1ff00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_328" />
          <path clipRule="evenodd" d={svgPaths.p3a250c80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_329" />
          <path clipRule="evenodd" d={svgPaths.p9b03300} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_330" />
          <path clipRule="evenodd" d={svgPaths.p1942b100} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_331" />
          <path clipRule="evenodd" d={svgPaths.pd958000} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_332" />
          <path clipRule="evenodd" d={svgPaths.p382ea4c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_333" />
          <path clipRule="evenodd" d={svgPaths.pd14ee80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_334" />
          <path clipRule="evenodd" d={svgPaths.p3da30a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_335" />
          <path clipRule="evenodd" d={svgPaths.p18de9b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_336" />
          <path clipRule="evenodd" d={svgPaths.p1e040c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_337" />
          <path clipRule="evenodd" d={svgPaths.p32c02f00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_338" />
          <path clipRule="evenodd" d={svgPaths.p15bda780} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_339" />
          <path clipRule="evenodd" d={svgPaths.p3a352100} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_340" />
          <path clipRule="evenodd" d={svgPaths.p30ecddc0} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_341" />
          <path clipRule="evenodd" d={svgPaths.p3f9b5780} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_342" />
          <path clipRule="evenodd" d={svgPaths.p325df300} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_343" />
          <path clipRule="evenodd" d={svgPaths.p10134700} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_344" />
          <path clipRule="evenodd" d={svgPaths.p376e6200} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_345" />
          <path clipRule="evenodd" d={svgPaths.p28c71a00} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_346" />
          <path clipRule="evenodd" d={svgPaths.p37ffd900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_347" />
          <path clipRule="evenodd" d={svgPaths.p364f5600} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_348" />
          <path clipRule="evenodd" d={svgPaths.p142b4500} fill="var(--fill-0, #CB414D)" fillRule="evenodd" id="Vector_349" />
          <path clipRule="evenodd" d={svgPaths.p28ed1200} fill="var(--fill-0, #F6D491)" fillRule="evenodd" id="Vector_350" />
          <path clipRule="evenodd" d={svgPaths.pec034c0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_351" />
          <path clipRule="evenodd" d={svgPaths.p39bc0b00} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_352" />
          <path clipRule="evenodd" d={svgPaths.p23156a00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_353" />
          <path clipRule="evenodd" d={svgPaths.p26c73c00} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_354" />
          <path clipRule="evenodd" d={svgPaths.pddb0180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_355" />
          <path clipRule="evenodd" d={svgPaths.p2c5f29f0} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_356" />
          <path clipRule="evenodd" d={svgPaths.p463ba00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_357" />
          <path clipRule="evenodd" d={svgPaths.p272e2880} fill="var(--fill-0, #408F6E)" fillRule="evenodd" id="Vector_358" />
          <path clipRule="evenodd" d={svgPaths.p3b171180} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_359" />
          <path clipRule="evenodd" d={svgPaths.p130f89f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_360" />
          <path clipRule="evenodd" d={svgPaths.p226c6180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_361" />
          <path clipRule="evenodd" d={svgPaths.p39eff500} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_362" />
          <path clipRule="evenodd" d={svgPaths.p286ece80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_363" />
          <path clipRule="evenodd" d={svgPaths.p2ca7f900} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_364" />
          <path clipRule="evenodd" d={svgPaths.p1493b200} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_365" />
          <path clipRule="evenodd" d={svgPaths.p3c67ce80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_366" />
          <path clipRule="evenodd" d={svgPaths.p4bffbf0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_367" />
          <path clipRule="evenodd" d={svgPaths.pa932300} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_368" />
          <path clipRule="evenodd" d={svgPaths.p36ec24f2} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_369" />
          <path clipRule="evenodd" d={svgPaths.p2006c820} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_370" />
          <path clipRule="evenodd" d={svgPaths.p134f6000} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_371" />
          <path clipRule="evenodd" d={svgPaths.p2770d900} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_372" />
          <path clipRule="evenodd" d={svgPaths.p12977a00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_373" />
          <path clipRule="evenodd" d={svgPaths.pab5be00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_374" />
          <path clipRule="evenodd" d={svgPaths.p5977280} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_375" />
          <path clipRule="evenodd" d={svgPaths.p1435b900} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_376" />
          <path clipRule="evenodd" d={svgPaths.p3075d880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_377" />
          <path clipRule="evenodd" d={svgPaths.pa5b2a80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_378" />
          <path clipRule="evenodd" d={svgPaths.p3d8c0200} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_379" />
          <path clipRule="evenodd" d={svgPaths.p39ba36f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_380" />
          <path clipRule="evenodd" d={svgPaths.p6c20500} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_381" />
          <path clipRule="evenodd" d={svgPaths.p3538a480} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_382" />
          <path clipRule="evenodd" d={svgPaths.pa1e9f00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_383" />
          <path clipRule="evenodd" d={svgPaths.p3a3f0e00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_384" />
          <path clipRule="evenodd" d={svgPaths.p2857c100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_385" />
          <path clipRule="evenodd" d={svgPaths.p2c28b70} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_386" />
          <path clipRule="evenodd" d={svgPaths.p3eea480} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_387" />
          <path clipRule="evenodd" d={svgPaths.p3b4adf00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_388" />
          <path clipRule="evenodd" d={svgPaths.p2ca53800} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_389" />
          <path clipRule="evenodd" d={svgPaths.p3684d700} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_390" />
          <path clipRule="evenodd" d={svgPaths.p2cbf4b00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_391" />
          <path clipRule="evenodd" d={svgPaths.p174d8400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_392" />
          <path clipRule="evenodd" d={svgPaths.p8a9bd80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_393" />
          <path clipRule="evenodd" d={svgPaths.p10afa00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_394" />
          <path clipRule="evenodd" d={svgPaths.pda6c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_395" />
          <path clipRule="evenodd" d={svgPaths.p238a1c70} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_396" />
          <path clipRule="evenodd" d={svgPaths.p286d0d00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_397" />
          <path clipRule="evenodd" d={svgPaths.p215800} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_398" />
          <path clipRule="evenodd" d={svgPaths.p3590df00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_399" />
          <path clipRule="evenodd" d={svgPaths.pab40880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_400" />
          <path clipRule="evenodd" d={svgPaths.p3b79d1b0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_401" />
          <path clipRule="evenodd" d={svgPaths.p33add100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_402" />
          <path clipRule="evenodd" d={svgPaths.p288940f0} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_403" />
          <path clipRule="evenodd" d={svgPaths.p296c5400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_404" />
          <path clipRule="evenodd" d={svgPaths.pd71e580} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_405" />
          <path clipRule="evenodd" d={svgPaths.p29ab4f80} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_406" />
          <path clipRule="evenodd" d={svgPaths.p28def780} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_407" />
          <path clipRule="evenodd" d={svgPaths.p32ce9100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_408" />
          <path clipRule="evenodd" d={svgPaths.p1355b600} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_409" />
          <path clipRule="evenodd" d={svgPaths.p99e4400} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_410" />
          <path clipRule="evenodd" d={svgPaths.p1af30100} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector_411" />
          <path clipRule="evenodd" d={svgPaths.p1f7b2e72} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_412" />
          <path clipRule="evenodd" d={svgPaths.p1b58d200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_413" />
          <path clipRule="evenodd" d={svgPaths.p2bab3800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_414" />
          <path clipRule="evenodd" d={svgPaths.p34b46d40} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_415" />
          <path clipRule="evenodd" d={svgPaths.p369c9e80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_416" />
          <path clipRule="evenodd" d={svgPaths.p1ef02f00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_417" />
          <path clipRule="evenodd" d={svgPaths.p19a39f80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_418" />
          <path clipRule="evenodd" d={svgPaths.p10caa200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_419" />
          <path clipRule="evenodd" d={svgPaths.p176f9080} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_420" />
          <path clipRule="evenodd" d={svgPaths.p175f73d0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_421" />
          <path clipRule="evenodd" d={svgPaths.p110a2100} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_422" />
          <path clipRule="evenodd" d={svgPaths.p16563000} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_423" />
          <path clipRule="evenodd" d={svgPaths.p3700fc00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_424" />
          <path clipRule="evenodd" d={svgPaths.p2249e200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_425" />
          <path clipRule="evenodd" d={svgPaths.p37ab6871} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_426" />
          <path clipRule="evenodd" d={svgPaths.pbb8a400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_427" />
          <path clipRule="evenodd" d={svgPaths.p3e1d4500} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_428" />
          <path clipRule="evenodd" d={svgPaths.p3d3d3400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_429" />
          <path clipRule="evenodd" d={svgPaths.p56b8800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_430" />
          <path clipRule="evenodd" d={svgPaths.p3e73580} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_431" />
          <path clipRule="evenodd" d={svgPaths.p3eef3c00} fill="var(--fill-0, #4653A4)" fillRule="evenodd" id="Vector_432" />
          <path clipRule="evenodd" d={svgPaths.p6d0d80} fill="var(--fill-0, #4653A4)" fillRule="evenodd" id="Vector_433" />
          <path clipRule="evenodd" d={svgPaths.p16b9f9f0} fill="var(--fill-0, #4653A4)" fillRule="evenodd" id="Vector_434" />
          <path clipRule="evenodd" d={svgPaths.p9f7df00} fill="var(--fill-0, #9E1C29)" fillRule="evenodd" id="Vector_435" />
          <path clipRule="evenodd" d={svgPaths.p17ce2900} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_436" />
          <path clipRule="evenodd" d={svgPaths.p1213b600} fill="var(--fill-0, #3D5BA9)" fillRule="evenodd" id="Vector_437" />
          <path clipRule="evenodd" d={svgPaths.p22d52400} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_438" />
          <path clipRule="evenodd" d={svgPaths.p1e324a90} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_439" />
          <path clipRule="evenodd" d={svgPaths.p1705d080} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_440" />
          <path clipRule="evenodd" d={svgPaths.p10992c00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_441" />
          <path clipRule="evenodd" d={svgPaths.p108b6b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_442" />
          <path clipRule="evenodd" d={svgPaths.p5b7a800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_443" />
          <path clipRule="evenodd" d={svgPaths.p22c64b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_444" />
          <path clipRule="evenodd" d={svgPaths.p27610000} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_445" />
          <path clipRule="evenodd" d={svgPaths.p1eeb2500} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_446" />
          <path clipRule="evenodd" d={svgPaths.p2aaf3cc2} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_447" />
          <path clipRule="evenodd" d={svgPaths.p17ed27f0} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_448" />
          <path clipRule="evenodd" d={svgPaths.p38ab0b00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_449" />
          <path clipRule="evenodd" d={svgPaths.p76ae00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_450" />
          <path clipRule="evenodd" d={svgPaths.p3c50e5f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_451" />
          <path clipRule="evenodd" d={svgPaths.p30b51200} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_452" />
          <path clipRule="evenodd" d={svgPaths.p1c700100} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_453" />
          <path clipRule="evenodd" d={svgPaths.p38653b00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_454" />
          <path clipRule="evenodd" d={svgPaths.p278d9c00} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_455" />
          <path clipRule="evenodd" d={svgPaths.p27219e80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_456" />
          <path clipRule="evenodd" d={svgPaths.p1fbe1880} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_457" />
          <path clipRule="evenodd" d={svgPaths.p1d3ce300} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_458" />
          <path clipRule="evenodd" d={svgPaths.p4eecb80} fill="var(--fill-0, #000101)" fillRule="evenodd" id="Vector_459" />
          <path clipRule="evenodd" d={svgPaths.p29edcad0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_460" />
          <path clipRule="evenodd" d={svgPaths.p3357c4f1} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_461" />
          <path clipRule="evenodd" d={svgPaths.p17ce5980} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_462" />
          <path clipRule="evenodd" d={svgPaths.p2cdbca00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_463" />
          <path clipRule="evenodd" d={svgPaths.p2bff7730} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_464" />
          <path clipRule="evenodd" d={svgPaths.p1aac73f0} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_465" />
          <path clipRule="evenodd" d={svgPaths.p2a6ede00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_466" />
          <path clipRule="evenodd" d={svgPaths.p38b49380} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_467" />
          <path clipRule="evenodd" d={svgPaths.p3deb0a00} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_468" />
          <path clipRule="evenodd" d={svgPaths.pace5400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_469" />
          <path clipRule="evenodd" d={svgPaths.p27715400} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_470" />
          <path clipRule="evenodd" d={svgPaths.p3296c180} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_471" />
          <path clipRule="evenodd" d={svgPaths.p5c87480} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_472" />
          <path clipRule="evenodd" d={svgPaths.p13431a80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_473" />
          <path clipRule="evenodd" d={svgPaths.p2782b800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_474" />
          <path clipRule="evenodd" d={svgPaths.p22e4f730} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_475" />
          <path clipRule="evenodd" d={svgPaths.p336d0800} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_476" />
          <path clipRule="evenodd" d={svgPaths.p20b8b80} fill="var(--fill-0, #C4B130)" fillRule="evenodd" id="Vector_477" />
        </g>
      </svg>
    </div>
  );
}

function LeagueIcon3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="League Icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Spain">
        <Icon3 />
      </div>
    </div>
  );
}

function LeagueHeading3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="League Heading">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">League Heading</p>
      </div>
    </div>
  );
}

function EventsQty3() {
  return (
    <div className="bg-[#993800] content-stretch flex flex-col h-[16px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Events Qty">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">112</p>
      </div>
    </div>
  );
}

function NumberOfMatches3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Number of Matches">
      <EventsQty3 />
    </div>
  );
}

function LeagueItemHeading3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="League Item Heading">
      <button className="block cursor-pointer relative shrink-0 size-[20px]" data-name="_Like sport">
        <div className="absolute inset-0 overflow-clip" data-name="Favorites Stroke">
          <div className="absolute inset-[13.54%_8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14.5832">
              <path d={svgPaths.p31fcbd80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
      </button>
      <LeagueIcon3 />
      <LeagueHeading3 />
      <NumberOfMatches3 />
    </div>
  );
}

function ExpandableArrow3({ expanded, onClick }: { expanded: boolean; onClick: () => void }) {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <motion.button
        type="button"
        onClick={onClick}
        animate={{ rotate: expanded ? 0 : 180 }}
        whileTap={{ scale: 0.85 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="content-stretch cursor-pointer flex items-center relative"
        data-name="Expandable Arrow"
        aria-expanded={expanded}
        aria-label={expanded ? "Collapse league" : "Expand league"}
      >
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Up">
          <div className="absolute bottom-[35.43%] left-1/4 right-1/4 top-[35.42%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6.99792">
              <path clipRule="evenodd" d={svgPaths.p38da2c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </motion.button>
    </div>
  );
}

function LeagueItemHeadingExpandable3({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  return (
    <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="League Item Heading Expandable">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <LeagueItemHeading3 />
          <ExpandableArrow3 expanded={expanded} onClick={onToggle} />
        </div>
      </div>
    </div>
  );
}

function EventInfoCounter9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Event Info Counter">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Favorite Icon">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[16px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.pd9ac00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">93’</span>
            <span className="leading-[14px]">{` 2nd Half`}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
    </div>
  );
}

function Team27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Manchester Team City Name</p>
      </div>
    </div>
  );
}

function EventInfo8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team27 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Team28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="overflow-hidden text-ellipsis whitespace-pre">
          <span className="leading-[18px]">{`Barcelona `}</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic">{` Team City Name`}</span>
        </p>
      </div>
    </div>
  );
}

function EventInfo9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team28 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function SelectionLineGrid6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[40%]" data-name="Selection Line Grid">
      <EventInfoCounter9 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event Info Wrapper">
        <EventInfo8 />
        <EventInfo9 />
      </div>
      <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Event Info Icons">
        <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative shrink-0 size-[16px]" data-name="Early Payouts">
          <div className="absolute inset-[11.11%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4447 12.4446">
              <path clipRule="evenodd" d={svgPaths.p2e322880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bonus Icon">
          <div className="absolute h-[12.445px] left-[1.58px] top-[1.58px] w-[12.444px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4443 12.4453">
              <path d={svgPaths.p2bfdee80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bet Builder Icon">
          <div className="absolute left-[1.78px] size-[12.444px] top-[1.78px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4444 12.4444">
              <g id="Icon">
                <path d={svgPaths.pcbe0a00} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p9bf6f80} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p2c099880} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p16806f00} fill="var(--fill-0, #E5EAFA)" />
                <path clipRule="evenodd" d={svgPaths.p3226a180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info5() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Info">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_17080)" id="Info">
          <path d={svgPaths.p145a9b00} id="Vector" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 7.33333V5.5" id="Vector_2" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 3.66667H5.50667" id="Vector_3" stroke="var(--stroke-0, #ACAFBB)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_17080">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Header">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">Match Result</p>
      </div>
      <Info5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">+196</p>
      </div>
    </div>
  );
}

function Market1X2Title4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Market 1x2 Title">
      <Header />
      <Frame10 />
    </div>
  );
}

function SelectionMeaning12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SelectionOdds12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine12() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning12 />
      <SelectionOdds12 />
    </div>
  );
}

function SelectionMeaning13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function SelectionOdds13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine13() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning13 />
      <SelectionOdds13 />
    </div>
  );
}

function Lines4() {
  const marketId = "market-lines-6";
  const marketLabel = "Total Goals";
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Lines">
      <OddsButton layout="vertical" trend="up" selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "0.5" }} />
      <OddsButton layout="vertical" selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.5" }} />
      <OddsButton layout="vertical" trend="down" selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "0.5" }} />
    </div>
  );
}

function MarketEventLines4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Market & Event Lines">
      <Market1X2Title4 />
      <Lines4 />
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Wrapper">
      <MarketEventLines4 />
    </div>
  );
}

function EventInfoCounter10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Event Info Counter">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Favorite Icon">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[16px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.pd9ac00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">93’</span>
            <span className="leading-[14px]">{` 2nd Half`}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
    </div>
  );
}

function Team29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Manchester Team City Name</p>
      </div>
    </div>
  );
}

function EventInfo10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team29 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Team30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="overflow-hidden text-ellipsis whitespace-pre">
          <span className="leading-[18px]">{`Barcelona `}</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic">{` Team City Name`}</span>
        </p>
      </div>
    </div>
  );
}

function EventInfo11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team30 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function SelectionLineGrid7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[40%]" data-name="Selection Line Grid">
      <EventInfoCounter10 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event Info Wrapper">
        <EventInfo10 />
        <EventInfo11 />
      </div>
      <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Event Info Icons">
        <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative shrink-0 size-[16px]" data-name="Early Payouts">
          <div className="absolute inset-[11.11%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4447 12.4446">
              <path clipRule="evenodd" d={svgPaths.p2e322880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bonus Icon">
          <div className="absolute h-[12.445px] left-[1.58px] top-[1.58px] w-[12.444px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4443 12.4453">
              <path d={svgPaths.p2bfdee80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bet Builder Icon">
          <div className="absolute left-[1.78px] size-[12.444px] top-[1.78px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4444 12.4444">
              <g id="Icon">
                <path d={svgPaths.pcbe0a00} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p9bf6f80} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p2c099880} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p16806f00} fill="var(--fill-0, #E5EAFA)" />
                <path clipRule="evenodd" d={svgPaths.p3226a180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketTitle4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Market Title">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Info Stroke">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p1d51e380} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
        <p className="leading-[14px] overflow-hidden text-ellipsis">Live Betting 1X2</p>
      </div>
    </div>
  );
}

function MarketsNumbers4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Markets Numbers">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">+196</p>
      </div>
    </div>
  );
}

function Market1X2Title5() {
  return (
    <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0 w-full" data-name="Market 1x2 Title">
      <MarketTitle4 />
      <MarketsNumbers4 />
    </div>
  );
}

function SelectionMeaning14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SelectionOdds14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine14() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning14 />
      <SelectionOdds14 />
    </div>
  );
}

function SelectionMeaning15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">x</p>
      </div>
    </div>
  );
}

function SelectionOdds15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine15() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning15 />
      <SelectionOdds15 />
    </div>
  );
}

function SelectionMeaning16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function SelectionOdds16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine16() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning16 />
      <SelectionOdds16 />
    </div>
  );
}

function Lines5() {
  const marketId = "market-lines-7";
  const marketLabel = "Total Goals";
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Lines">
      <OddsButton layout="vertical" trend="up" selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "0.5" }} />
      <OddsButton layout="vertical" selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.5" }} />
      <OddsButton layout="vertical" trend="down" selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "0.5" }} />
    </div>
  );
}

function MarketEventLines5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Market & Event Lines">
      <Market1X2Title5 />
      <Lines5 />
    </div>
  );
}

function Wrapper5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Wrapper">
      <MarketEventLines5 />
    </div>
  );
}

function EventInfoCounter11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Event Info Counter">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Favorite Icon">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[16px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.pd9ac00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">93’</span>
            <span className="leading-[14px]">{` 2nd Half`}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
    </div>
  );
}

function Team31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Manchester Team City Name</p>
      </div>
    </div>
  );
}

function EventInfo12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team31 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Team32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="overflow-hidden text-ellipsis whitespace-pre">
          <span className="leading-[18px]">{`Barcelona `}</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic">{` Team City Name`}</span>
        </p>
      </div>
    </div>
  );
}

function EventInfo13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team32 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function SelectionLineGrid8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[40%]" data-name="Selection Line Grid">
      <EventInfoCounter11 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event Info Wrapper">
        <EventInfo12 />
        <EventInfo13 />
      </div>
      <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Event Info Icons">
        <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative shrink-0 size-[16px]" data-name="Early Payouts">
          <div className="absolute inset-[11.11%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4447 12.4446">
              <path clipRule="evenodd" d={svgPaths.p2e322880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bonus Icon">
          <div className="absolute h-[12.445px] left-[1.58px] top-[1.58px] w-[12.444px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4443 12.4453">
              <path d={svgPaths.p2bfdee80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bet Builder Icon">
          <div className="absolute left-[1.78px] size-[12.444px] top-[1.78px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4444 12.4444">
              <g id="Icon">
                <path d={svgPaths.pcbe0a00} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p9bf6f80} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p2c099880} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p16806f00} fill="var(--fill-0, #E5EAFA)" />
                <path clipRule="evenodd" d={svgPaths.p3226a180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketTitle5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Market Title">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Info Stroke">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p1d51e380} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
        <p className="leading-[14px] overflow-hidden text-ellipsis">Live Betting 1X2</p>
      </div>
    </div>
  );
}

function MarketsNumbers5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Markets Numbers">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">+196</p>
      </div>
    </div>
  );
}

function Market1X2Title6() {
  return (
    <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0 w-full" data-name="Market 1x2 Title">
      <MarketTitle5 />
      <MarketsNumbers5 />
    </div>
  );
}

function SelectionMeaning17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SelectionOdds17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine17() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning17 />
      <SelectionOdds17 />
    </div>
  );
}

function SelectionMeaning18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">x</p>
      </div>
    </div>
  );
}

function SelectionOdds18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine18() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning18 />
      <SelectionOdds18 />
    </div>
  );
}

function SelectionMeaning19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function SelectionOdds19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine19() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning19 />
      <SelectionOdds19 />
    </div>
  );
}

function Lines6() {
  const marketId = "market-lines-8";
  const marketLabel = "Total Goals";
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Lines">
      <OddsButton layout="vertical" trend="up" selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "0.5" }} />
      <OddsButton layout="vertical" selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.5" }} />
      <OddsButton layout="vertical" trend="down" selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "0.5" }} />
    </div>
  );
}

function MarketEventLines6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Market & Event Lines">
      <Market1X2Title6 />
      <Lines6 />
    </div>
  );
}

function Wrapper6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Wrapper">
      <MarketEventLines6 />
    </div>
  );
}

function EventInfoCounter12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Event Info Counter">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Favorite Icon">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[16px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.pd9ac00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="bg-[#19387e] content-stretch flex gap-[2px] items-center justify-center min-w-[48px] px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Event Info Time Block">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clock Circular">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1aa68c00} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[0px] text-center whitespace-nowrap">
          <p className="text-[10px]">
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic">93’</span>
            <span className="leading-[14px]">{` 2nd Half`}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#5ce595] content-stretch flex gap-[2px] h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Live Tag">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#070d18] text-[10px] whitespace-nowrap">LIVE</p>
      </div>
    </div>
  );
}

function Team33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Manchester Team City Name</p>
      </div>
    </div>
  );
}

function EventInfo14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team33 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Team34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Team">
      <div className="relative shrink-0 size-[16px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="overflow-hidden text-ellipsis whitespace-pre">
          <span className="leading-[18px]">{`Barcelona `}</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic">{` Team City Name`}</span>
        </p>
      </div>
    </div>
  );
}

function EventInfo15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Event Info">
      <Team34 />
      <div className="bg-[#19387e] content-stretch flex flex-col items-center justify-center min-w-[18px] px-[6px] py-[2px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Team Score">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function SelectionLineGrid9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[40%]" data-name="Selection Line Grid">
      <EventInfoCounter12 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event Info Wrapper">
        <EventInfo14 />
        <EventInfo15 />
      </div>
      <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Event Info Icons">
        <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative shrink-0 size-[16px]" data-name="Early Payouts">
          <div className="absolute inset-[11.11%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4447 12.4446">
              <path clipRule="evenodd" d={svgPaths.p2e322880} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bonus Icon">
          <div className="absolute h-[12.445px] left-[1.58px] top-[1.58px] w-[12.444px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4443 12.4453">
              <path d={svgPaths.p2bfdee80} fill="var(--fill-0, #E5EAFA)" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Bet Builder Icon">
          <div className="absolute left-[1.78px] size-[12.444px] top-[1.78px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4444 12.4444">
              <g id="Icon">
                <path d={svgPaths.pcbe0a00} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p9bf6f80} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p2c099880} fill="var(--fill-0, #E5EAFA)" />
                <path d={svgPaths.p16806f00} fill="var(--fill-0, #E5EAFA)" />
                <path clipRule="evenodd" d={svgPaths.p3226a180} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketTitle6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Market Title">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Info Stroke">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p1d51e380} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#e5eafa] text-[10px] text-ellipsis whitespace-nowrap">
        <p className="leading-[14px] overflow-hidden text-ellipsis">Live Betting 1X2</p>
      </div>
    </div>
  );
}

function MarketsNumbers6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Markets Numbers">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">+196</p>
      </div>
    </div>
  );
}

function Market1X2Title7() {
  return (
    <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0 w-full" data-name="Market 1x2 Title">
      <MarketTitle6 />
      <MarketsNumbers6 />
    </div>
  );
}

function SelectionMeaning20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SelectionOdds20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine20() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning20 />
      <SelectionOdds20 />
    </div>
  );
}

function SelectionMeaning21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">x</p>
      </div>
    </div>
  );
}

function SelectionOdds21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine21() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning21 />
      <SelectionOdds21 />
    </div>
  );
}

function SelectionMeaning22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Meaning">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function SelectionOdds22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Selection Odds">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">0.5</p>
      </div>
    </div>
  );
}

function SelectionLine22() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[32px] relative shrink-0 w-full" data-name="Selection Line">
      <SelectionMeaning22 />
      <SelectionOdds22 />
    </div>
  );
}

function Lines7() {
  const marketId = "market-lines-9";
  const marketLabel = "Total Goals";
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Lines">
      <OddsButton layout="vertical" trend="up" selection={{ id: `${marketId}-1`, marketId, marketLabel, meaning: "1", odds: "0.5" }} />
      <OddsButton layout="vertical" selection={{ id: `${marketId}-x`, marketId, marketLabel, meaning: "x", odds: "0.5" }} />
      <OddsButton layout="vertical" trend="down" selection={{ id: `${marketId}-2`, marketId, marketLabel, meaning: "2", odds: "0.5" }} />
    </div>
  );
}

function MarketEventLines7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Market & Event Lines">
      <Market1X2Title7 />
      <Lines7 />
    </div>
  );
}

function Wrapper7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Wrapper">
      <MarketEventLines7 />
    </div>
  );
}

function SelectionLineGrid5() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Selection Line Grid">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[12px] pt-[4px] px-[12px] relative size-full">
        <div className="bg-[#17274b] min-w-[286px] relative rounded-[16px] shrink-0 w-full" data-name="Selection Event Line Grid">
          <div className="content-stretch flex gap-[8px] items-start min-w-[inherit] p-[8px] relative size-full">
            <SelectionLineGrid6 />
            <Wrapper4 />
          </div>
        </div>
        <div className="bg-[#17274b] min-w-[286px] relative rounded-[16px] shrink-0 w-full" data-name="Selection Event Line Grid">
          <div className="content-stretch flex gap-[8px] items-start min-w-[inherit] p-[8px] relative size-full">
            <SelectionLineGrid7 />
            <Wrapper5 />
          </div>
        </div>
        <div className="bg-[#17274b] min-w-[286px] relative rounded-[16px] shrink-0 w-full" data-name="Selection Event Line Grid">
          <div className="content-stretch flex gap-[8px] items-start min-w-[inherit] p-[8px] relative size-full">
            <SelectionLineGrid8 />
            <Wrapper6 />
          </div>
        </div>
        <div className="bg-[#17274b] min-w-[286px] relative rounded-[16px] shrink-0 w-full" data-name="Selection Event Line Grid">
          <div className="content-stretch flex gap-[8px] items-start min-w-[inherit] p-[8px] relative size-full">
            <SelectionLineGrid9 />
            <Wrapper7 />
          </div>
        </div>
      </div>
    </div>
  );
}

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

function NoLeagueMatches() {
  return (
    <div className="px-[12px] pb-[16px] pt-[4px] text-[#acafbb] text-[12px]" data-name="No matches">
      No live matches in this league right now.
    </div>
  );
}

function EventCards({ expanded, toggle }: { expanded: boolean[]; toggle: (index: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event Cards">
      <div className="bg-[#0e192d] content-stretch flex flex-col items-start min-w-[312px] relative rounded-[16px] shrink-0 w-full" data-name="Event Card">
        <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <LeagueItemHeadingExpandable expanded={expanded[0]} onToggle={() => toggle(0)} />
        <AccordionBody expanded={expanded[0]}>
          <SelectionLineGrid />
        </AccordionBody>
      </div>
      <div className="bg-[#0e192d] content-stretch flex flex-col items-start min-w-[312px] relative rounded-[16px] shrink-0 w-full" data-name="Event Card">
        <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <LeagueItemHeadingExpandable1 expanded={expanded[1]} onToggle={() => toggle(1)} />
        <AccordionBody expanded={expanded[1]}>
          <NoLeagueMatches />
        </AccordionBody>
      </div>
      <div className="bg-[#0e192d] content-stretch flex flex-col items-start min-w-[312px] relative rounded-[16px] shrink-0 w-full" data-name="Event Card">
        <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <LeagueItemHeadingExpandable2 expanded={expanded[2]} onToggle={() => toggle(2)} />
        <AccordionBody expanded={expanded[2]}>
          <NoLeagueMatches />
        </AccordionBody>
      </div>
      <div className="bg-[#0e192d] content-stretch flex flex-col items-start min-w-[312px] relative rounded-[16px] shrink-0 w-full" data-name="Event Card">
        <div aria-hidden className="absolute border border-[#17274b] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <LeagueItemHeadingExpandable3 expanded={expanded[3]} onToggle={() => toggle(3)} />
        <AccordionBody expanded={expanded[3]}>
          <SelectionLineGrid5 />
        </AccordionBody>
      </div>
    </div>
  );
}

function GameCardPlayers({ activeTopTab }: { activeTopTab: TopTab }) {
  const [expanded, setExpanded] = useState<boolean[]>([true, true, true, true]);
  const toggle = (index: number) => setExpanded((prev) => prev.map((v, i) => (i === index ? !v : v)));
  const allExpanded = expanded.every(Boolean);
  const toggleAll = () => setExpanded((prev) => prev.map(() => !allExpanded));

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Game Card Players">
      {activeTopTab === "arena" && <LiveWinningsTitle1 />}
      <Sports />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tab Navigation - Sports">
        <Container11 />
      </div>
      <TimeFilter />
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[312px] relative shrink-0 w-[380px]" data-name="Matches Feed">
        <Sort allExpanded={allExpanded} onToggleAll={toggleAll} />
        <EventCards expanded={expanded} toggle={toggle} />
      </div>
      <div className="absolute bg-gradient-to-l from-[#070d18] h-[62px] left-[385px] to-[rgba(7,13,24,0)] top-[82px] w-[19px]" data-name="shadow" />
      <div className="absolute bg-gradient-to-l from-[#070d18] h-[34px] left-[385px] to-[rgba(7,13,24,0)] top-[36px] w-[19px]" data-name="shadow" />
    </div>
  );
}

function Prize() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Prize">
      <div className="absolute inset-[-73.18%_-75%_-76.82%_-75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <g id="Prize">
            <g filter="url(#filter0_f_1_17042)" id="Ellipse 2">
              <circle cx="30" cy="30" fill="var(--fill-0, #0A48C5)" fillOpacity="0.6" r="10" />
            </g>
            <g id="Group 165">
              <path d={svgPaths.p10e92f0} fill="var(--fill-0, #0A48C5)" id="Vector" />
              <path d={svgPaths.p3cd014c0} fill="var(--fill-0, #FFA500)" id="Vector_2" />
              <path d={svgPaths.p398fbd80} fill="var(--fill-0, white)" id="Vector_3" opacity="0.3" />
              <path d={svgPaths.pf41e400} fill="var(--fill-0, black)" id="Vector_4" opacity="0.15" />
              <path d={svgPaths.p11b36280} fill="var(--fill-0, #FFCE29)" id="Vector_5" />
              <path d={svgPaths.p324b2900} fill="var(--fill-0, #FFA500)" id="Vector_6" />
              <path d={svgPaths.p2fd6f280} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
              <path d={svgPaths.pd713880} fill="var(--fill-0, black)" id="Vector_8" opacity="0.3" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="60" id="filter0_f_1_17042" width="60" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_17042" stdDeviation="10" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title">
      <Prize />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5eafa] text-[18px] whitespace-nowrap">
        <p className="leading-[22px]">Winners Choose Us</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white h-[214px] overflow-clip relative rounded-[16px] shrink-0 w-[380px]">
      <div className="absolute h-[215px] left-[-23px] top-0 w-[426px]" data-name="Screen Recording 2026-01-19 at 13.13.33 2" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#e5eafa] text-[10px] whitespace-nowrap">2024-2026</p>
    </div>
  );
}

function Player() {
  return (
    <div className="backdrop-blur-[75px] bg-gradient-to-b content-stretch flex flex-col from-[#0e192d] from-[20%] gap-[2px] items-start justify-center p-[8px] relative shrink-0 to-[#19387e]" data-name="Player">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">Athletic Club</p>
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[8px] shrink-0">
      <div className="content-stretch flex items-end overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[48px] relative shrink-0 w-[60px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
        </div>
        <Player />
      </div>
      <div aria-hidden className="absolute border border-[#19387e] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#e5eafa] text-[10px] whitespace-nowrap">2024-2025</p>
    </div>
  );
}

function Player1() {
  return (
    <div className="backdrop-blur-[75px] bg-gradient-to-b content-stretch flex flex-col from-[#070d18] gap-[2px] items-start justify-center p-[8px] relative shrink-0 to-[#17274b]" data-name="Player">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">Luka Modrić</p>
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-end opacity-50 overflow-clip relative rounded-[8px] shrink-0">
      <div className="h-[48px] relative shrink-0 w-[60px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <Player1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#e5eafa] text-[10px] whitespace-nowrap">2023-2024</p>
    </div>
  );
}

function Player2() {
  return (
    <div className="backdrop-blur-[75px] bg-gradient-to-b content-stretch flex flex-col from-[#070d18] gap-[2px] items-start justify-center p-[8px] relative shrink-0 to-[#17274b]" data-name="Player">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#e5eafa] text-[12px] whitespace-nowrap">Leicester City Way</p>
      <Frame5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-end opacity-50 overflow-clip relative rounded-[8px] shrink-0">
      <div className="h-[48px] relative shrink-0 w-[60px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Player2 />
    </div>
  );
}

function Carousel() {
  return (
    <div className="no-scrollbar content-stretch flex gap-[8px] items-center overflow-x-auto overflow-y-clip relative shrink-0 snap-x snap-mandatory w-full" data-name="Carousel">
      <div className="shrink-0 snap-start">
        <Frame1 />
      </div>
      <div className="shrink-0 snap-start">
        <Frame />
      </div>
      <div className="shrink-0 snap-start">
        <Frame2 />
      </div>
    </div>
  );
}

function ParnersSliderMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[380px]" data-name="Parners  Slider - Mobile">
      <Frame6 />
      <Carousel />
    </div>
  );
}

function Parnetships() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[380px]" data-name="Parnetships">
      <Title1 />
      <ParnersSliderMobile />
    </div>
  );
}

function Analyze() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Analyze">
      <div className="absolute inset-[-85%_-90%_-90%_-85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
          <g id="Analyze">
            <g filter="url(#filter0_f_1_16839)" id="Ellipse 2">
              <circle cx="27.5" cy="27.5" fill="var(--fill-0, #1964FA)" fillOpacity="0.8" r="7.5" />
            </g>
            <path d={svgPaths.p3f965300} fill="var(--fill-0, #1964FA)" id="Vector" />
            <path d={svgPaths.p4318400} fill="var(--fill-0, black)" id="Vector_2" opacity="0.3" />
            <path d={svgPaths.p2e9cdd70} fill="var(--fill-0, #083694)" id="Vector_3" />
            <path d={svgPaths.p477f00} fill="var(--fill-0, #083694)" id="Vector_4" />
            <path d={svgPaths.p3171d280} fill="var(--fill-0, #083694)" id="Vector_5" />
            <path d={svgPaths.p2655fd00} fill="var(--fill-0, #083694)" id="Vector_6" />
            <path d={svgPaths.pd8d6700} fill="var(--fill-0, #FFCE29)" id="Vector_7" />
            <path d={svgPaths.pcdb6700} fill="var(--fill-0, #4A87FF)" id="Vector_8" />
            <path d={svgPaths.pef8cb80} fill="var(--fill-0, #1964FA)" id="Vector_9" />
            <path d={svgPaths.p24ddea00} fill="var(--fill-0, #1964FA)" id="Vector_10" />
            <path d={svgPaths.p7c1c400} fill="var(--fill-0, black)" id="Vector_11" opacity="0.15" />
            <path d={svgPaths.p15015600} fill="var(--fill-0, white)" id="Vector_12" opacity="0.3" />
            <path d={svgPaths.pb7c8a00} fill="var(--fill-0, white)" id="Vector_13" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="55" id="filter0_f_1_16839" width="55" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_16839" stdDeviation="10" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IconAndTextMenu() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon and text menu">
      <Analyze />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-left whitespace-nowrap">{`Terms & Conditions`}</p>
    </div>
  );
}

function MenuAccordionOptions() {
  return (
    <button className="cursor-pointer h-[44px] relative shrink-0 w-full" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 380 44' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(2.4208e-13 4.4112 -46.224 2.4489e-13 190 -1.0063e-12)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(14, 25, 45) 0%, rgb(14, 25, 45) 100%)" }} data-name="Menu & Accordion Options">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[12px] relative size-full">
          <IconAndTextMenu />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="overflow-clip relative size-[24px]" data-name="Up">
                <div className="absolute bottom-[35.43%] left-1/4 right-1/4 top-[35.42%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6.99792">
                    <path clipRule="evenodd" d={svgPaths.p38da2c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function AccordionMenuNew() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Accordion Menu New">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <MenuAccordionOptions />
      </div>
      <div aria-hidden className="absolute border-[#0e192d] border-l border-r border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function TermsAndConditions() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Terms and Conditions">
      <div className="absolute inset-[-85%_-90%_-90%_-85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
          <g id="Terms and Conditions">
            <g filter="url(#filter0_f_1_16802)" id="Ellipse 2">
              <circle cx="27.5" cy="27.5" fill="var(--fill-0, #1964FA)" fillOpacity="0.8" r="7.5" />
            </g>
            <path d={svgPaths.p18aa4d00} fill="var(--fill-0, black)" id="Vector" opacity="0.3" />
            <path d={svgPaths.pe451f00} fill="var(--fill-0, #083694)" id="Vector_2" />
            <path d={svgPaths.p27bdea80} fill="var(--fill-0, white)" id="Vector_3" opacity="0.3" />
            <path d={svgPaths.p118e3580} fill="var(--fill-0, #1964FA)" id="Vector_4" />
            <path d={svgPaths.p1bd6d100} fill="var(--fill-0, black)" id="Vector_5" opacity="0.15" />
            <path d={svgPaths.p220ee00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p30edfc00} fill="var(--fill-0, #083694)" id="Vector_7" />
            <path d={svgPaths.p216bc880} fill="var(--fill-0, #083694)" id="Vector_8" />
            <path d={svgPaths.p283f2000} fill="var(--fill-0, #083694)" id="Vector_9" />
            <path d={svgPaths.p186c1b80} fill="var(--fill-0, #083694)" id="Vector_10" />
            <path d={svgPaths.p16d87a40} fill="var(--fill-0, #FFA500)" id="Vector_11" />
            <path d={svgPaths.pabebf80} fill="var(--fill-0, #FFCE29)" id="Vector_12" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="55" id="filter0_f_1_16802" width="55" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_16802" stdDeviation="10" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IconAndTextMenu1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon and text menu">
      <TermsAndConditions />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-left whitespace-nowrap">Policies</p>
    </div>
  );
}

function MenuAccordionOptions1() {
  return (
    <button className="cursor-pointer h-[44px] relative shrink-0 w-full" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 380 44' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(2.4208e-13 4.4112 -46.224 2.4489e-13 190 -1.0063e-12)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(14, 25, 45) 0%, rgb(14, 25, 45) 100%)" }} data-name="Menu & Accordion Options">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[12px] relative size-full">
          <IconAndTextMenu1 />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="overflow-clip relative size-[24px]" data-name="Up">
                <div className="absolute bottom-[35.43%] left-1/4 right-1/4 top-[35.42%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6.99792">
                    <path clipRule="evenodd" d={svgPaths.p38da2c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function AccordionMenuNew1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Accordion Menu New">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <MenuAccordionOptions1 />
      </div>
      <div aria-hidden className="absolute border-[#0e192d] border-l border-r border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Info6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Info">
      <div className="absolute inset-[-85%_-90%_-90%_-85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
          <g id="Info">
            <g filter="url(#filter0_f_1_16790)" id="Ellipse 2">
              <circle cx="27.5" cy="27.5" fill="var(--fill-0, #1964FA)" fillOpacity="0.8" r="7.5" />
            </g>
            <path d={svgPaths.pa6c6a80} fill="var(--fill-0, #1964FA)" id="Vector" />
            <path d={svgPaths.p3b7b3100} fill="var(--fill-0, white)" id="Vector_2" opacity="0.3" />
            <path d={svgPaths.p111f800} fill="var(--fill-0, black)" id="Vector_3" opacity="0.15" />
            <path d={svgPaths.p39a5f430} fill="var(--fill-0, black)" id="Vector_4" opacity="0.3" />
            <path d={svgPaths.p28eaf700} fill="var(--fill-0, white)" id="Vector (Stroke)" />
            <path d={svgPaths.p42785f0} fill="var(--fill-0, #FFCE29)" id="Vector_5" />
            <path d={svgPaths.pcc35800} fill="var(--fill-0, #FFCE29)" id="Vector_6" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="55" id="filter0_f_1_16790" width="55" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_16790" stdDeviation="10" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IconAndTextMenu2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon and text menu">
      <Info6 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#e5eafa] text-[14px] text-left whitespace-nowrap">{`Info & Resources`}</p>
    </div>
  );
}

function MenuAccordionOptions2() {
  return (
    <button className="cursor-pointer h-[44px] relative shrink-0 w-full" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 380 44' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(2.4208e-13 4.4112 -46.224 2.4489e-13 190 -1.0063e-12)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.5)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(14, 25, 45) 0%, rgb(14, 25, 45) 100%)" }} data-name="Menu & Accordion Options">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[12px] relative size-full">
          <IconAndTextMenu2 />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Up">
            <div className="absolute bottom-[35.43%] left-1/4 right-1/4 top-[35.42%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6.99792">
                <path clipRule="evenodd" d={svgPaths.p38da2c00} fill="var(--fill-0, #E5EAFA)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function Light() {
  return (
    <div className="absolute flex h-[43px] items-center justify-center left-0 top-0 w-[23px]">
      <div className="flex-none rotate-90">
        <div className="content-stretch flex flex-col items-start relative w-[43px]" data-name="Light">
          <div className="blur-[5px] h-[19px] relative shrink-0 w-[44px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 44 19' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-2.0245e-7 -0.90476 2.4656 -6.1929e-7 22 19)'><stop stop-color='rgba(25,100,250,1)' offset='0'/><stop stop-color='rgba(25,100,250,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="Line highlight" />
          <div className="bg-gradient-to-l from-[rgba(25,100,250,0)] h-[4px] relative rounded-tl-[100px] rounded-tr-[8px] shrink-0 to-[rgba(25,100,250,0)] via-1/2 via-[#1964fa] w-[44px]" data-name="Line highlight" />
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[380px]" data-name="Options">
      <div className="bg-[#17274b] h-[44px] relative shrink-0 w-full" data-name="Menu Accordion Option Item">
        <div aria-hidden className="absolute border-[#17274b] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[18px] min-w-px not-italic relative text-[#e5eafa] text-[14px]">About Us</p>
            <Light />
          </div>
        </div>
      </div>
      <div className="bg-[#0b1322] h-[44px] relative shrink-0 w-full" data-name="Menu Accordion Option Item">
        <div aria-hidden className="absolute border-[#17274b] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic relative text-[#e5eafa] text-[14px]">Responsible Gaming Principles</p>
          </div>
        </div>
      </div>
      <div className="bg-[#0b1322] h-[44px] relative shrink-0 w-full" data-name="Menu Accordion Option Item">
        <div aria-hidden className="absolute border-[#17274b] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic relative text-[#e5eafa] text-[14px]">GemBet Authenticator</p>
          </div>
        </div>
      </div>
      <div className="bg-[#0b1322] h-[44px] relative shrink-0 w-full" data-name="Menu Accordion Option Item">
        <div aria-hidden className="absolute border-[#17274b] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic relative text-[#e5eafa] text-[14px] whitespace-pre-wrap">{`Affiliate Program  `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionMenuNew2() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Accordion Menu New">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <MenuAccordionOptions2 />
        <Options />
      </div>
      <div aria-hidden className="absolute border-[#0e192d] border-l border-r border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[69.11%_43.62%_7.65%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6807 7.43636">
        <g id="Group">
          <path d={svgPaths.p380ae700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.peb4d70} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1333ba80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3f991580} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pf8d8c00} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function UE4HrtTif() {
  return (
    <div className="absolute contents inset-[69.11%_43.62%_7.65%_0]" data-name="uE4Hrt.tif">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[69.12%_0_0_58.19%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5592 9.88059">
        <g id="Group">
          <path d={svgPaths.p2e33fd00} fill="var(--fill-0, #01D1E6)" id="Vector" />
          <path d={svgPaths.p21519180} fill="var(--fill-0, #01D1E6)" id="Vector_2" />
          <path d={svgPaths.p8119000} fill="var(--fill-0, #01D1E6)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function XV8Lw7Tif() {
  return (
    <div className="absolute contents inset-[69.12%_0_0_58.19%]" data-name="xV8lw7.tif">
      <Group1 />
    </div>
  );
}

function TrustPayLogoColored() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[42px]" data-name="TrustPay logo colored">
      <UE4HrtTif />
      <div className="absolute inset-[0_41.37%_71.56%_24.34%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4034 9.10222">
          <path d={svgPaths.p17a79780} fill="url(#paint0_linear_1_16748)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16748" x1="0" x2="14.4034" y1="4.55111" y2="4.55111">
              <stop stopColor="#9BE9F3" />
              <stop offset="1" stopColor="#01D1E6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[12.89%_24.22%_74.09%_41.49%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4034 4.16601">
          <path d={svgPaths.p14bba580} fill="var(--fill-0, #01D1E6)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[18.64%_24.22%_70.8%_41.49%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4034 3.37946">
          <path d={svgPaths.p18b41980} fill="url(#paint0_linear_1_16247)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16247" x1="0" x2="14.4034" y1="1.68973" y2="1.68973">
              <stop stopColor="#CAEDF3" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[41.33%_31.6%_40.8%_41.49%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3055 5.71778">
          <path d={svgPaths.p18594d00} fill="url(#paint0_linear_1_16245)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16245" x1="5.65308" x2="5.65308" y1="0" y2="5.71778">
              <stop stopColor="#0E8DB9" />
              <stop offset="1" stopColor="#01D1E6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[21.29%_24.22%_51.93%_41.49%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4034 8.57169">
          <path d={svgPaths.p36050a00} fill="url(#paint0_linear_1_16829)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16829" x1="4.01906" x2="9.37349" y1="-1.26801" y2="7.93661">
              <stop stopColor="#01D1E6" />
              <stop offset="0.44" stopColor="#90E5EF" />
              <stop offset="1" stopColor="#CAEDF3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <XV8Lw7Tif />
    </div>
  );
}

function EeziePayLogo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[78px]" data-name="EeziePay Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 32">
        <g clipPath="url(#clip0_1_16999)" id="EeziePay Logo">
          <path d={svgPaths.p13245ef0} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1fc4f600} fill="var(--fill-0, #EB2426)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p149d9b00} fill="var(--fill-0, #EB2426)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p1e4b6e00} fill="var(--fill-0, #EB2426)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3f1ed200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p3f771100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_6" />
          <path d={svgPaths.p3627ba00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3ddc3070} fill="var(--fill-0, #EB2426)" id="Vector_8" />
          <path d={svgPaths.p2f048d00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p107e1240} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p12e76af0} fill="var(--fill-0, white)" id="Vector_11" />
        </g>
        <defs>
          <clipPath id="clip0_1_16999">
            <rect fill="white" height="32" width="78" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Image66Vectorized() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="image 66 [Vectorized]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_16765)" id="image 66 [Vectorized]">
          <path d={svgPaths.p219ac200} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          <path d={svgPaths.p397b9330} fill="var(--fill-0, #295DAA)" id="Vector_2" />
          <path d={svgPaths.p39112f80} fill="var(--fill-0, #FEFEFE)" id="Vector_3" />
          <path d={svgPaths.pd0e1130} fill="var(--fill-0, #295DAA)" id="Vector_4" />
          <path d={svgPaths.pd795680} fill="var(--fill-0, #FEFEFE)" id="Vector_5" />
          <path d={svgPaths.pcb94580} fill="var(--fill-0, #FEFEFE)" id="Vector_6" />
          <path d={svgPaths.p3aea4380} fill="var(--fill-0, #295DAA)" id="Vector_7" />
          <path d={svgPaths.p3c31fec0} fill="var(--fill-0, #FEFEFE)" id="Vector_8" />
          <path d={svgPaths.p356d9f80} fill="var(--fill-0, #FEFEFE)" id="Vector_9" />
          <path d={svgPaths.p986b700} fill="var(--fill-0, #FEFEFE)" id="Vector_10" />
          <path d={svgPaths.pc559c80} fill="var(--fill-0, #FEDC00)" id="Vector_11" />
          <path d={svgPaths.p18b29f80} fill="var(--fill-0, #FEFEFE)" id="Vector_12" />
          <path d={svgPaths.p2931cf0} fill="var(--fill-0, #FEFEFE)" id="Vector_13" />
          <path d={svgPaths.p31b99a00} fill="var(--fill-0, #FEDC00)" id="Vector_14" />
          <path d={svgPaths.p21556d00} fill="var(--fill-0, #295DAA)" id="Vector_15" />
          <path d={svgPaths.p20a54c80} fill="var(--fill-0, #FEDC00)" id="Vector_16" />
          <path d={svgPaths.p2fc05d00} fill="var(--fill-0, #295DAA)" id="Vector_17" />
          <path d={svgPaths.p14307e80} fill="var(--fill-0, #FEDC00)" id="Vector_18" />
          <path d={svgPaths.p36337480} fill="var(--fill-0, #295DAA)" id="Vector_19" />
          <path d={svgPaths.p42a680} fill="var(--fill-0, #FEDC00)" id="Vector_20" />
          <path d={svgPaths.pb23a870} fill="var(--fill-0, #FEDC00)" id="Vector_21" />
          <path d={svgPaths.paa34f00} fill="var(--fill-0, #FEDC00)" id="Vector_22" />
          <path d={svgPaths.p61e9200} fill="var(--fill-0, #FEFEFE)" id="Vector_23" />
        </g>
        <defs>
          <clipPath id="clip0_1_16765">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[35.252px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.2517 31.9999">
        <g id="Group">
          <path d={svgPaths.pe727400} fill="var(--fill-0, #E52561)" id="Vector" />
          <path d={svgPaths.p11819080} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3da3cb70} fill="var(--fill-0, white)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p2109d5b0} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
          <path d={svgPaths.p3eccdf0} fill="var(--fill-0, #E52561)" id="Vector_5" />
          <path d={svgPaths.pb36a780} fill="var(--fill-0, #E52561)" id="Vector_6" />
          <path d={svgPaths.p12e9080} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.pb9a4800} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p171b5880} fill="var(--fill-0, #E52561)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Grabpay() {
  return (
    <div className="h-[32px] relative shrink-0 w-[38px]" data-name="Grabpay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 32">
        <g clipPath="url(#clip0_1_16214)" id="Grabpay">
          <path d={svgPaths.p282bee80} fill="var(--fill-0, #00B84E)" id="Vector" />
          <path d={svgPaths.p31b43500} fill="var(--fill-0, #00B84E)" id="Vector_2" />
          <path d={svgPaths.p1d3d2c00} fill="var(--fill-0, #00B84E)" id="Vector_3" />
          <path d={svgPaths.p396d6f40} fill="var(--fill-0, #00B84E)" id="Vector_4" />
          <path d={svgPaths.p1aba3900} fill="var(--fill-0, #00B84E)" id="Vector_5" />
          <path d={svgPaths.p33aece00} fill="var(--fill-0, #00B84E)" id="Vector_6" />
          <path d={svgPaths.pcc32f80} fill="var(--fill-0, #00B84E)" id="Vector_7" />
          <path d={svgPaths.p1436fe00} fill="var(--fill-0, #00B84E)" id="Vector_8" />
          <path d={svgPaths.p342e4400} fill="var(--fill-0, #00B84E)" id="Vector_9" />
          <path d={svgPaths.p1b059200} fill="var(--fill-0, #00B84E)" id="Vector_10" />
          <path d={svgPaths.pdb0ac00} fill="var(--fill-0, #00B84E)" id="Vector_11" />
          <path d={svgPaths.pe8b1c00} fill="var(--fill-0, #00B84E)" id="Vector_12" />
          <path d={svgPaths.p3db0ad40} fill="var(--fill-0, #00B84E)" id="Vector_13" />
        </g>
        <defs>
          <clipPath id="clip0_1_16214">
            <rect fill="white" height="32" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShopeePay() {
  return (
    <div className="h-[32px] relative shrink-0 w-[73px]" data-name="ShopeePay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 32">
        <g clipPath="url(#clip0_1_17121)" id="ShopeePay">
          <path d={svgPaths.p31196680} fill="var(--fill-0, #F64238)" id="Vector" />
          <path d={svgPaths.p102c1300} fill="var(--fill-0, #F64238)" id="Vector_2" />
          <path d={svgPaths.p2e97ad80} fill="var(--fill-0, #F64238)" id="Vector_3" />
          <path d={svgPaths.p36c17000} fill="var(--fill-0, #F64238)" id="Vector_4" />
          <path d={svgPaths.p3d2d1700} fill="var(--fill-0, #F64238)" id="Vector_5" />
          <path d={svgPaths.p6144a00} fill="var(--fill-0, #F64238)" id="Vector_6" />
          <path d={svgPaths.p358e5880} fill="var(--fill-0, #F64238)" id="Vector_7" />
          <path d={svgPaths.p2dbd30f0} fill="var(--fill-0, #F64238)" id="Vector_8" />
          <path d={svgPaths.p204e11f0} fill="var(--fill-0, #F64238)" id="Vector_9" />
          <path d={svgPaths.p8c4da00} fill="var(--fill-0, #F64238)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_1_17121">
            <rect fill="white" height="32" width="73" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TruePay() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67px]" data-name="TruePay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 20">
        <g clipPath="url(#clip0_1_16204)" id="TruePay">
          <path d={svgPaths.p3aa81300} fill="var(--fill-0, #3064FE)" id="Vector" />
          <path d={svgPaths.p1acc3600} fill="var(--fill-0, #FEB300)" id="Vector_2" />
          <path d={svgPaths.p1d807700} fill="var(--fill-0, #FEB300)" id="Vector_3" />
          <path d={svgPaths.p2ae5df00} fill="var(--fill-0, #3064FE)" id="Vector_4" />
          <path d={svgPaths.p187c5900} fill="var(--fill-0, #3064FE)" id="Vector_5" />
          <path d={svgPaths.p1980be80} fill="var(--fill-0, #FEB300)" id="Vector_6" />
          <path d={svgPaths.p34712240} fill="var(--fill-0, #FEB300)" id="Vector_7" />
          <path d={svgPaths.p258cd300} fill="var(--fill-0, #FEB300)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_1_16204">
            <rect fill="white" height="20" width="67" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Image70Vectorized() {
  return (
    <div className="h-[20px] relative shrink-0 w-[63px]" data-name="image 70 [Vectorized]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 20">
        <g clipPath="url(#clip0_1_16889)" id="image 70 [Vectorized]">
          <path clipRule="evenodd" d={svgPaths.p17cbea80} fill="var(--fill-0, #E30027)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p27edcf0} fill="var(--fill-0, #E30027)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p11c8b580} fill="var(--fill-0, #E30027)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p135b3b00} fill="var(--fill-0, #E30027)" fillRule="evenodd" id="Vector_4" />
          <path d={svgPaths.peb43140} fill="var(--fill-0, #E30027)" id="Vector_5" />
          <path d={svgPaths.p10170c00} fill="var(--fill-0, #E30027)" id="Vector_6" />
          <path d={svgPaths.p3c5509d0} fill="var(--fill-0, #E30027)" id="Vector_7" />
          <path d={svgPaths.p3ea90b80} fill="var(--fill-0, #E30027)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_1_16889">
            <rect fill="white" height="20" width="63" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BankingLogoSurepay() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.856px]" data-name="Banking_logo_Surepay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.8565 24">
        <g id="Banking_logo_Surepay">
          <path d={svgPaths.p96de2c0} fill="var(--fill-0, #E5EAFA)" id="Path 66" />
          <path d={svgPaths.p117ed770} fill="var(--fill-0, #E5EAFA)" id="Path 67" />
          <path d={svgPaths.p459e100} fill="var(--fill-0, #E5EAFA)" id="Path 68" />
          <path d={svgPaths.p3077b100} fill="var(--fill-0, #E5EAFA)" id="Path 69" />
          <path d={svgPaths.p2c1b7bf0} fill="var(--fill-0, #703091)" id="Path 72" />
          <g id="Path 73">
            <path d={svgPaths.p39031b80} fill="var(--fill-0, #E5EAFA)" />
            <path d={svgPaths.p4c06e00} fill="var(--fill-0, #E5EAFA)" />
            <path d={svgPaths.pa286e00} fill="var(--fill-0, #E5EAFA)" />
          </g>
          <path d={svgPaths.p25fc80} fill="var(--fill-0, #703091)" id="Path 71" />
          <path d={svgPaths.p14284800} fill="var(--fill-0, #703091)" id="Path 70" />
        </g>
      </svg>
    </div>
  );
}

function BankingLogoPaynow() {
  return (
    <div className="h-[20px] relative shrink-0 w-[105.059px]" data-name="Banking_logo_Paynow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.059 20">
        <g id="Banking_logo_Paynow">
          <path d={svgPaths.p11551080} fill="var(--fill-0, #972283)" id="Path 60" />
          <path d={svgPaths.p340fea80} fill="var(--fill-0, #972283)" id="Path 61" />
          <path d={svgPaths.p2b115700} fill="var(--fill-0, #972283)" id="Path 62" />
          <path d={svgPaths.pe858380} fill="var(--fill-0, #972283)" id="Path 63" />
          <path d={svgPaths.p3da13380} fill="var(--fill-0, #972283)" id="Path 64" />
          <path d={svgPaths.p2649f500} fill="url(#paint0_linear_1_16194)" id="Path 65" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16194" x1="77.7973" x2="65.7973" y1="2.5" y2="18.5">
            <stop stopColor="#CE3468" />
            <stop offset="0.696257" stopColor="#9C247F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function CryptoLogo() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Crypto logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_16188)" id="Crypto logo">
          <path d={svgPaths.p12e709f0} fill="var(--fill-0, #F7931A)" id="Vector" />
          <path d={svgPaths.p3fc4a600} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_16188">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CryptoLogo1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Crypto logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_16184)" id="Crypto logo">
          <path d={svgPaths.p3f42f600} fill="var(--fill-0, #53AE94)" id="Vector" />
          <path d={svgPaths.p34d40300} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_16184">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CryptoLogo2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Crypto logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_16918)" id="Crypto logo">
          <path clipRule="evenodd" d={svgPaths.p3c1f3d00} fill="var(--fill-0, #345D9F)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1340c380} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_16918">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CryptoLogo3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Crypto logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_17012)" id="Crypto logo">
          <path d={svgPaths.p216b9100} fill="var(--fill-0, #627EEA)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p39473f80} fill="var(--fill-0, #BAC5F6)" id="Vector_2" />
            <path d={svgPaths.p3db01900} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.pff2670} fill="var(--fill-0, #BAC5F6)" id="Vector_4" />
            <path d={svgPaths.p35b3e080} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p187b3e00} fill="var(--fill-0, #788DEC)" id="Vector_6" />
            <path d={svgPaths.p1e21e380} fill="var(--fill-0, #BAC5F6)" id="Vector_7" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_17012">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CryptoLogo4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Crypto logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_17087)" id="Crypto logo">
          <path d={svgPaths.p2fce4180} fill="var(--fill-0, #2775CA)" id="Vector" />
          <path d={svgPaths.p8443f00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p356f9340} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_17087">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Skrill() {
  return (
    <div className="h-[20px] relative shrink-0 w-[91px]" data-name="Skrill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 20">
        <g id="Skrill">
          <path d={svgPaths.p7f74900} fill="var(--fill-0, #8C018C)" id="Vector" />
          <path d={svgPaths.p17f42b00} fill="var(--fill-0, #FAFAF9)" id="Vector_2" />
          <path d={svgPaths.p15878700} fill="var(--fill-0, #FAFAF9)" id="Vector_3" />
          <path d={svgPaths.p811f900} fill="var(--fill-0, #FAFAF9)" id="Vector_4" />
          <path d={svgPaths.pa7e0900} fill="var(--fill-0, #FAFAF9)" id="Vector_5" />
          <path d={svgPaths.p14850d80} fill="var(--fill-0, #FAFAF9)" id="Vector_6" />
          <path d={svgPaths.p22abc700} fill="var(--fill-0, #FAFAF9)" id="Vector_7" />
          <path d={svgPaths.p1f3d1800} fill="var(--fill-0, #FAFAF9)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Neteller() {
  return (
    <div className="h-[20px] relative shrink-0 w-[116px]" data-name="Neteller">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 20">
        <g id="Neteller">
          <path clipRule="evenodd" d={svgPaths.p2577af00} fill="var(--fill-0, #84BB3B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GroupLogos() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px_20px] items-center min-w-px relative" data-name="Group Logos">
      <TrustPayLogoColored />
      <EeziePayLogo />
      <Image66Vectorized />
      <Group2 />
      <Grabpay />
      <ShopeePay />
      <TruePay />
      <Image70Vectorized />
      <BankingLogoSurepay />
      <BankingLogoPaynow />
      <CryptoLogo />
      <CryptoLogo1 />
      <CryptoLogo2 />
      <CryptoLogo3 />
      <CryptoLogo4 />
      <Skrill />
      <Neteller />
    </div>
  );
}

function PaymentMethods() {
  return (
    <div className="content-start flex flex-wrap gap-[8px_12px] items-start relative shrink-0 w-full" data-name="Payment methods">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#f2f5fd] text-[14px] w-[380px]">Payment Methods</p>
      <GroupLogos />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[32px_32px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <path d={svgPaths.pdd6d500} fill="url(#paint0_linear_1_17147)" id="Vector" />
          <path d={svgPaths.p248bd5c0} fill="var(--fill-0, black)" id="Vector_2" opacity="0.05" />
          <path d={svgPaths.p125a7c0} fill="var(--fill-0, black)" id="Vector_3" opacity="0.07" />
          <path d={svgPaths.p2d380500} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_17147" x1="4.6864" x2="27.3136" y1="4.6864" y2="27.3136">
            <stop stopColor="#33BEF0" />
            <stop offset="1" stopColor="#0A85D9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function TelegramGemChat() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[36px]" data-name="Telegram GemChat">
      <Icon4 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[10px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[8px] text-center text-white w-[min-content]">
        <p className="leading-[14px]">GemChat</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[32px_32px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <path d={svgPaths.pdd6d500} fill="url(#paint0_linear_1_16120)" id="Vector" />
          <path d={svgPaths.p248bd5c0} fill="var(--fill-0, black)" id="Vector_2" opacity="0.05" />
          <path d={svgPaths.p125a7c0} fill="var(--fill-0, black)" id="Vector_3" opacity="0.07" />
          <path d={svgPaths.p2d380500} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16120" x1="4.6864" x2="27.3136" y1="4.6864" y2="27.3136">
            <stop stopColor="#427DEB" />
            <stop offset="1" stopColor="#0A48C5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon">
      <ClipPathGroup1 />
    </div>
  );
}

function TelegramGemGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[36px]" data-name="Telegram GemGroup">
      <Icon5 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[10px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-center text-white w-[42px]">
        <p className="leading-[14px]">GemNews</p>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="X">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 947">
          <path d={svgPaths.p3ce38200} fill="url(#paint0_linear_1_16742)" id="Vector" />
          <path d={svgPaths.p195b8f00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p13d4a8f0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1a175080} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16742" x1="-1.47733" x2="29.3191" y1="-14.272" y2="39.0702">
            <stop stopColor="#4B4B4B" />
            <stop offset="0.247" stopColor="#3E3E3E" />
            <stop offset="0.686" stopColor="#2B2B2B" />
            <stop offset="1" stopColor="#252525" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[12.5%_0_14.77%_0]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 23.2727">
        <g id="Group 948">
          <path d={svgPaths.pde541f2} fill="url(#paint0_linear_1_16140)" id="Vector" />
          <path d={svgPaths.p2adb3a00} fill="var(--fill-0, black)" id="Vector_2" opacity="0.05" />
          <path d={svgPaths.p1b489600} fill="var(--fill-0, black)" id="Vector_3" opacity="0.07" />
          <path d={svgPaths.p3a376980} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16140" x1="5.68436" x2="28.5425" y1="1.36073" y2="24.2189">
            <stop stopColor="#F44F5A" />
            <stop offset="0.443" stopColor="#EE3D4A" />
            <stop offset="1" stopColor="#E52030" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function YouTube() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="YouTube">
      <Group7 />
    </div>
  );
}

function Instagram() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Instagram">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 949">
          <path d={svgPaths.p263ff200} fill="url(#paint0_radial_1_16133)" id="Vector" />
          <path d={svgPaths.p263ff200} fill="url(#paint1_radial_1_16133)" id="Vector_2" />
          <path d={svgPaths.pf640980} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p147ce580} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3e8af500} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(11.8959 32.0231) scale(39.8892 39.8892)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_16133" r="1">
            <stop stopColor="#FFDD55" />
            <stop offset="0.328" stopColor="#FF543F" />
            <stop offset="0.348" stopColor="#FC5245" />
            <stop offset="0.504" stopColor="#E64771" />
            <stop offset="0.643" stopColor="#D53E91" />
            <stop offset="0.761" stopColor="#CC39A4" />
            <stop offset="0.841" stopColor="#C837AB" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(5.14928 -0.399517) scale(26.4865 17.6479)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_16133" r="1">
            <stop stopColor="#4168C9" />
            <stop offset="0.999" stopColor="#4168C9" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Facebook() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Facebook">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 950">
          <path d={svgPaths.p245e8c80} fill="url(#paint0_linear_1_16129)" id="Vector" />
          <path d={svgPaths.p3e272100} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16129" x1="4.7944" x2="29.292" y1="4.7944" y2="29.292">
            <stop stopColor="#2AA4F4" />
            <stop offset="1" stopColor="#007AD9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TikTok() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="TikTok">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 951">
          <path clipRule="evenodd" d={svgPaths.p2f1cd000} fill="url(#paint0_linear_1_16987)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p28ce9d80} fill="var(--fill-0, #EC407A)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p2a2fa880} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p17ece700} fill="var(--fill-0, #81D4FA)" fillRule="evenodd" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16987" x1="15.9796" x2="15.9796" y1="0.141334" y2="32.0409">
            <stop stopColor="#4C4C4C" />
            <stop offset="1" stopColor="#343434" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FollowUs1() {
  return (
    <div className="content-start flex flex-wrap gap-[8px_16px] items-start relative shrink-0 w-[380px]" data-name="Follow us">
      <TelegramGemChat />
      <TelegramGemGroup />
      <X />
      <YouTube />
      <Instagram />
      <Facebook />
      <TikTok />
    </div>
  );
}

function FollowUs() {
  return (
    <div className="content-start flex flex-wrap gap-[8px_12px] items-start relative shrink-0 w-full" data-name="Follow Us">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#f2f5fd] text-[14px] w-[380px]">Follow Us</p>
      <FollowUs1 />
    </div>
  );
}

function Component18Plus() {
  return (
    <div className="h-[32px] relative shrink-0 w-[31.996px]" data-name="18plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9962 32">
        <g id="18plus">
          <path d={svgPaths.p389bd4c0} fill="var(--fill-0, #E5EAFA)" id="Icon" />
          <path d={svgPaths.p15ac1860} fill="var(--fill-0, #D80027)" id="Icon_2" />
          <path d={svgPaths.p329f1972} fill="var(--fill-0, #D80027)" id="Icon_3" />
        </g>
      </svg>
    </div>
  );
}

function GambleAwareLogo() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-[151px]" data-name="Gamble Aware logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 20.0001">
        <g id="Icon">
          <path d={svgPaths.p20bfd200} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p21d73e80} fill="var(--fill-0, #EF681C)" id="Vector_2" />
          <path d={svgPaths.p139b0a00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p312e8e80} fill="var(--fill-0, #EF681C)" id="Vector_4" />
          <path d={svgPaths.p2ca3aa60} fill="var(--fill-0, #EF681C)" id="Vector_5" />
          <path d={svgPaths.p28046100} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p1e0a21f0} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3324ed00} fill="var(--fill-0, #EF681C)" id="Vector_8" />
          <path d={svgPaths.p25e5f0f0} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p147be100} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p8603300} fill="var(--fill-0, #EF681C)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Certifications1() {
  return (
    <div className="content-center flex flex-wrap gap-[16px_20px] items-center relative shrink-0 w-[359px]" data-name="Certifications">
      <Component18Plus />
      <div className="relative shrink-0 size-[32px]" data-name="image 63">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage63} />
      </div>
      <GambleAwareLogo />
      <div className="relative shrink-0 size-[32px]" data-name="image 64">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-3.56%] max-w-none size-[107.5%] top-[-2.8%]" src={imgImage64} />
        </div>
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage57} />
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="image 58">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage58} />
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="image 59">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage59} />
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="image 60">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage60} />
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="image 61">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage61} />
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <div className="content-start flex flex-wrap gap-[8px_12px] items-start relative shrink-0 w-full" data-name="Certifications">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#f2f5fd] text-[14px] w-[380px]">{`Certifications & Awards`}</p>
      <Certifications1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.84%_0.25%_10.52%_23.24%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.5709 11.2896">
        <g id="Group">
          <path d={svgPaths.p3b0300} fill="var(--fill-0, #E5EAFA)" id="Vector" />
          <path d={svgPaths.p1849f5f0} fill="var(--fill-0, #E5EAFA)" id="Vector_2" />
          <path d={svgPaths.p20ff00} fill="var(--fill-0, #E5EAFA)" id="Vector_3" />
          <path d={svgPaths.p17758000} fill="var(--fill-0, #E5EAFA)" id="Vector_4" />
          <path d={svgPaths.p2bc33800} fill="var(--fill-0, #E5EAFA)" id="Vector_5" />
          <path d={svgPaths.p24835800} fill="var(--fill-0, #E5EAFA)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[0.05%_76.87%_0.05%_0.25%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.7973 13.9851">
        <g id="Group">
          <path d={svgPaths.p3693ea00} fill="var(--fill-0, #E5EAFA)" id="Vector" />
          <path d={svgPaths.p2aefc500} fill="var(--fill-0, #E5EAFA)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function DisclaimerText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="DisclaimerText">
      <div className="h-[14px] overflow-clip relative shrink-0 w-[104px]" data-name="GemBet New Logo">
        <Group5 />
        <Group6 />
      </div>
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#e5eafa] text-[10px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[14px] mb-0">GemBet is owned by Grand Complications N.V., a company registered and established under the laws of Curacao, with registration number 164198 and registered address at Zuikertuintjeweg Z/N, (Zuikertuin Tower) Willemstad, Curacao. Grand Complications N.V. is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and operates under License No. ALSI-122405027-FI2. GemBet has passed all regulatory compliance and is legally authorized to conduct gaming operations for any and all games of chance and wagering.</p>
        <p className="leading-[14px] mb-0">​</p>
        <p className="leading-[14px] mb-0">Payment services for GemBet are provided by Rockman Enterprises Limited, a subsidiary of Grand Complications N.V., by the laws of Cyprus, with registration number HE 381928 and registered address at 20 Stasikratous, Cramvis Building, Office 203, Nicosia 1065, Cyprus.</p>
        <p className="leading-[14px] mb-0">​</p>
        <p className="leading-[14px]">It is the players sole responsibility to inquire about the existing laws and regulations of the given jurisdiction for online gambling.</p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-w-full not-italic relative shrink-0 text-[#e5eafa] text-[10px] text-center w-[min-content] whitespace-pre-wrap">{`© 2016 - 2025 GemBet®  5.14.1`}</p>
    </div>
  );
}

function FooterNewColoredIcons() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-end pb-[100px] pt-[32px] px-[24px] relative shrink-0 w-[428px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 428 1234' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-14.2 -63.985 128.8 -183.87 364 1283.2)'><stop stop-color='rgba(25,56,126,1)' offset='0'/><stop stop-color='rgba(20,41,86,0.5)' offset='0.42313'/><stop stop-color='rgba(14,25,45,0)' offset='0.84625'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(7, 13, 24) 0%, rgb(7, 13, 24) 100%)" }} data-name="Footer - New colored icons">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[380px]" data-name="_Mobile Footer accordions">
        <AccordionMenuNew />
        <AccordionMenuNew1 />
        <AccordionMenuNew2 />
      </div>
      <PaymentMethods />
      <FollowUs />
      <Certifications />
      <DisclaimerText />
    </div>
  );
}

function Body({ activeTopTab, onSelectTopTab }: { activeTopTab: TopTab; onSelectTopTab: (tab: TopTab) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Body">
      <Content activeTopTab={activeTopTab} onSelectTopTab={onSelectTopTab} />
      {activeTopTab === "arena" && (
        <>
          <Frame9 />
          <button className="block cursor-pointer h-[362px] relative shrink-0 w-[428px]" data-name="Supper Odds Swipe">
            <SuperOdds />
            <Lightning />
            <div className="-translate-x-1/2 absolute h-[91px] left-[calc(50%+143.5px)] overflow-clip top-[-22px] w-[86px]" data-name="Icon">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[76px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] w-[73px]" data-name="Lightning icon">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[118.31%] left-[-44.88%] max-w-none top-[-7.04%] w-[185.94%]" src={imgLightningIcon} />
                </div>
              </div>
            </div>
          </button>
        </>
      )}
      <GameCardPlayers activeTopTab={activeTopTab} />
      <Parnetships />
      <FooterNewColoredIcons />
    </div>
  );
}

function Layout({ activeTopTab, onSelectTopTab }: { activeTopTab: TopTab; onSelectTopTab: (tab: TopTab) => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Layout">
      <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
        <Body activeTopTab={activeTopTab} onSelectTopTab={onSelectTopTab} />
      </div>
    </div>
  );
}

function BottomMenuItems({ active, onClick }: BottomMenuItemProps) {
  const tint = active ? "#ff9457" : "#e5eafa";
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="content-stretch flex flex-col gap-[2px] h-[44px] items-center justify-center min-w-[44px] pt-[2px] relative shrink-0 cursor-pointer"
      data-name="Bottom Menu Items"
    >
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="BlackJack">
        <div className="absolute inset-[9.38%_10.42%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9993 19.5">
            <path d={svgPaths.p2d87b680} fill={`var(--fill-0, ${tint})`} id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center whitespace-nowrap transition-colors" style={{ color: tint }}>
        <p className="leading-[16px]">Live Casino</p>
      </div>
    </motion.button>
  );
}

function BottomMenuItems1({ active, onClick }: BottomMenuItemProps) {
  const tint = active ? "#ff9457" : "#e5eafa";
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="content-stretch flex flex-col gap-[2px] h-[44px] items-center justify-center min-w-[44px] pt-[2px] relative shrink-0 cursor-pointer"
      data-name="Bottom Menu Items"
    >
      <div className="relative shrink-0 size-[24px]" data-name="Soccer">
        <div className="absolute inset-[8.33%_10.07%_8.33%_8.33%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.584 20">
            <path d={svgPaths.p391d780} fill={active ? "url(#paint0_linear_1_16926)" : "var(--fill-0, #e5eafa)"} id="Icon" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_16926" x1="10.5629" x2="11.1851" y1="-1.39593e-09" y2="19.9806">
                <stop offset="0.5" stopColor="#FF9457" />
                <stop offset="1" stopColor="#E05200" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center whitespace-nowrap transition-colors" style={{ color: tint }}>
        <p className="leading-[16px]">Sports</p>
      </div>
    </motion.button>
  );
}

function BottomMenuItems2({ active, onClick }: BottomMenuItemProps) {
  const tint = active ? "#ff9457" : "#e5eafa";
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="content-stretch flex flex-col gap-[2px] h-[44px] items-center justify-center min-w-[44px] pt-[2px] relative shrink-0 cursor-pointer"
      data-name="Bottom Menu Items"
    >
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Slots New">
        <div className="absolute inset-[3.13%_3.96%_6.25%_11.45%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.302 21.75">
            <path d={svgPaths.p6dcda80} fill={`var(--fill-0, ${tint})`} id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center whitespace-nowrap transition-colors" style={{ color: tint }}>
        <p className="leading-[16px]">Slots</p>
      </div>
    </motion.button>
  );
}

function Trophy({ tint = "#e5eafa" }: { tint?: string }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Trophy">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Trophy">
          <path d={svgPaths.peac3580} fill={`var(--fill-0, ${tint})`} id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function BottomMenuItems3({ active, onClick }: BottomMenuItemProps) {
  const tint = active ? "#ff9457" : "#e5eafa";
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="content-stretch flex flex-col gap-[2px] h-[44px] items-center justify-center min-w-[44px] pt-[2px] relative shrink-0 cursor-pointer"
      data-name="Bottom Menu Items"
    >
      <Trophy tint={tint} />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center whitespace-nowrap transition-colors" style={{ color: tint }}>
        <p className="leading-[16px]">Rewards</p>
      </div>
    </motion.button>
  );
}

function BottomMenuItems4({ active, onClick }: BottomMenuItemProps) {
  const tint = active ? "#ff9457" : "#e5eafa";
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="content-stretch flex flex-col gap-[2px] h-[44px] items-center justify-center min-w-[44px] pt-[2px] relative shrink-0 cursor-pointer"
      data-name="Bottom Menu Items"
    >
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Search New">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.001 18">
            <path d={svgPaths.p1b281800} fill={`var(--fill-0, ${tint})`} id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center whitespace-nowrap transition-colors" style={{ color: tint }}>
        <p className="leading-[16px]">Search</p>
      </div>
    </motion.button>
  );
}

function Light1() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[115.75px] w-[40px]" data-name="Light">
      <div className="blur-[5px] h-[19px] relative shrink-0 w-full" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 40 19' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-1.8405e-7 -0.90476 2.2414 -6.1929e-7 20 19)'><stop stop-color='rgba(255,148,87,1)' offset='0'/><stop stop-color='rgba(255,148,87,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="Line highlight" />
      <div className="bg-gradient-to-l from-[rgba(255,148,87,0)] h-[2px] relative rounded-tl-[100px] rounded-tr-[8px] shrink-0 to-[rgba(255,148,87,0)] via-1/2 via-[#ff9457] w-full" data-name="Line highlight" />
    </div>
  );
}

type ArenaTab = "casino" | "sports" | "slots" | "rewards" | "search";

export default function Arena() {
  const [activeTab, setActiveTab] = useState<ArenaTab>("sports");
  const [activeTopTab, setActiveTopTab] = useState<TopTab>("arena");

  return (
    <div className="content-stretch flex flex-col items-center relative size-full" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 428 4150' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.8999999761581421'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-22.45 96.416 -208.31 268.83 66 -19.862)'><stop stop-color='rgba(25,56,126,1)' offset='0'/><stop stop-color='rgba(20,41,86,0.5)' offset='0.42313'/><stop stop-color='rgba(14,25,45,0)' offset='0.84625'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(7, 13, 24) 0%, rgb(7, 13, 24) 100%)" }} data-name="Arena">
      <ResponsiveCanvas designWidth={428}>
        <Frame7 />
        <Layout activeTopTab={activeTopTab} onSelectTopTab={setActiveTopTab} />
      </ResponsiveCanvas>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.15 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[396px] max-w-[calc(100%-32px)] rounded-[100px]"
        data-name="Bottom Navigation - Mobile"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[100px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgBottomNavigationMobile} />
          <div className="absolute backdrop-blur-[75px] inset-0 rounded-[100px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 396 60' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(2.5227e-13 6.0153 -48.171 3.3394e-13 198 -1.3722e-12)'><stop stop-color='rgba(229,234,250,0.2)' offset='0'/><stop stop-color='rgba(229,234,250,0)' offset='0.3'/><stop stop-color='rgba(7,13,24,0)' offset='0.6'/><stop stop-color='rgba(7,13,24,0.7)' offset='1'/></radialGradient></defs></svg>\")" }} />
        </div>
        <div className="content-stretch flex items-start justify-between overflow-clip px-[20px] py-[8px] relative rounded-[inherit] size-full">
          <BottomMenuItems active={activeTab === "casino"} onClick={() => setActiveTab("casino")} />
          <BottomMenuItems1 active={activeTab === "sports"} onClick={() => setActiveTab("sports")} />
          <BottomMenuItems2 active={activeTab === "slots"} onClick={() => setActiveTab("slots")} />
          <BottomMenuItems3 active={activeTab === "rewards"} onClick={() => setActiveTab("rewards")} />
          <BottomMenuItems4 active={activeTab === "search"} onClick={() => setActiveTab("search")} />
          <Light1 />
        </div>
        <div aria-hidden className="absolute border border-[#19387e] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </motion.div>
    </div>
  );
}