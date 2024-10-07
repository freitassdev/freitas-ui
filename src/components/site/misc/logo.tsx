'use client';

import lightLogo from "@/assets/logo/freitas-ui-light.png";
import darkLogo from "@/assets/logo/freitas-ui-dark.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
export default function Logo({ className }: { className?: string }) {
    const { theme } = useTheme();
    const logo = theme === "light" ? darkLogo : lightLogo;
    return (
        <div>
            <Image src={logo} alt="Freitas UI Logo" className={cn("w-auto h-12 max-sm:h-10", className)} />
        </div>
    );
}