import React from "react";
import AvatarStack from "../components/AvatarStack";
import TypingBadge from "../components/TypingBadge";
function Home() {
  return (
    <div className="relative font-sf h-screen flex items-center justify-between px-8 bg-white overflow-hidden">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-72 h-72 rounded-full bg-violet-100 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-56 right-0 w-96 h-96 rounded-full bg-emerald-100 blur-3xl opacity-70" />

      {/* Left content */}
      <div className="relative max-w-4xl p-6 z-10">
        <TypingBadge />

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[500] leading-tight  text-black">
          Develops systems
          <br />
          with precision and
          <br />
          honed expertise.
        </h1>

        <p className="text-lg text-gray-600 mb-6 italic font-light">
          Doryoku wa kesshite anata o uragirimasen.
        </p>

        <div className="flex items-center gap-6">
          <AvatarStack />

          <div className="pl-6 border-l border-gray-200">
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500 mb-1 font-normal">
              Currently building
            </p>
            <p className="text-sm text-gray-900 font-normal">
              Full–stack systems with MERN Stack
            </p>
          </div>
        </div>
      </div>

      {/* Right abstract design */}
      <div className="relative hidden lg:flex items-center justify-center flex-1 h-full z-10">
        <div className="relative w-72 h-72 rounded-3xl border border-gray-200 bg-white/60 backdrop-blur shadow-xl overflow-hidden">
          {/* Gradient orb */}
          <div className="absolute -top-10 -right-6 w-40 h-40 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-emerald-400 rounded-full opacity-80 blur-[2px]" />

          {/* Outline ring */}
          <div className="absolute -bottom-16 -left-10 w-40 h-40 rounded-full border-2 border-dashed border-gray-300" />

          {/* Grid */}
          <div className="absolute inset-6 grid grid-cols-3 grid-rows-3 gap-2 opacity-70">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200/70 bg-white/60"
              />
            ))}
          </div>

          {/* Label */}
          <div className="absolute bottom-5 left-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500 font-normal">
              Portfolio System
            </p>
            <p className="text-sm text-gray-900 font-[500]">
              Alistair · React / Node
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
