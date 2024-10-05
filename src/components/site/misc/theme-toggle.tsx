'use client';

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
import RainbowButton from "@/components/ui/rainbow-button";
export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return <RainbowButton
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        variant="opaque"
        className="max-w-9">
        {theme === "light" ? <LuSun className="w-4 h-4 z-10" /> : <LuMoon className="w-4 h-4 z-10" />}
    </RainbowButton>;
}