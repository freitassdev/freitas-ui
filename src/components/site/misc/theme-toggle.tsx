'use client';

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
import RainbowButton from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
export default function ThemeToggle({
    className
}: {
    className?: string;
}) {
    const { theme, setTheme } = useTheme();
    return <RainbowButton
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        variant="opaque"
        className={cn("max-w-9", className)}>
        {theme === "light" ? <LuSun className="w-4 h-4 z-10" /> : <LuMoon className="w-4 h-4 z-10" />}
    </RainbowButton>;
}