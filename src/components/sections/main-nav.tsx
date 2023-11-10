"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Image from "next/image";

import { MainNavItem } from "@lib/types";
import { Icons } from "@elements/icons";
import { cn } from "@lib/utils/utils";
import { MobileNav } from "@/components/sections/mobile-nav";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10 justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative w-8 h-8 opacity-40">
          <Image src="/dental-braces.svg" alt="Logo" fill />
        </div>
        <span className="font-bold inline-block">Dr. Damur</span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-2 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium hover:bg-white hover:bg-opacity-50 rounded-lg p-4 transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`) ? "text-foreground" : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button className="flex items-center space-x-2 md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? <Icons.close /> : <Icons.alignJustify />}
      </button>
      {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
    </div>
  );
}
