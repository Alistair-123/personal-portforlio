import React from "react";
import { Timeline } from  "../components/ui/timeline";

export default function AboutMe() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 font-sf">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big...
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
       title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big...
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
          </div>
        </div>
      )
    },
    {
       title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big...
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
            />
          </div>
        </div>
      )
    }
  ];

  return <Timeline data={data} />;
}
