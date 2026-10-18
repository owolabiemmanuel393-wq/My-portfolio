"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type TabType = "work" | "playground" | "me";

interface TabNavProps {
  currentTab?: TabType;
}

export default function TabNav({ currentTab }: TabNavProps) {
  const pathname = usePathname();

  const getActiveTab = (): TabType => {
    if (currentTab) return currentTab;
    if (pathname.startsWith("/playground")) return "playground";
    if (pathname.startsWith("/me")) return "me";
    return "work";
  };

  const active = getActiveTab();

  const tabs: { id: TabType; label: string; href: string }[] = [
    { id: "work", label: "Work", href: "/" },
    { id: "playground", label: "Playground", href: "/playground" },
    { id: "me", label: "Me", href: "/me" },
  ];

  return (
    <div className="inline-flex items-center p-1 md:p-1.5 bg-[#E5E5E5] rounded-full shadow-inner">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[12px] sm:text-[14px] font-medium transition-all duration-200 select-none ${
              isActive
                ? "bg-black text-white shadow-sm"
                : "text-black hover:text-black/70 hover:bg-black/5"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
