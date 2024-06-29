import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logoWithText.png"
          alt="Logo"
          height={100}
          width={110}
        />
        <p className={cn(
          "text-lg text-neutral-700 pb-1",
          headingFont.className,
        )}>
          
        </p>
      </div>
    </Link>
  );
};
