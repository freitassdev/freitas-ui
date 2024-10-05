'use client';
import Button from "@/components/ui/button";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
            backgroundImage: "linear-gradient(67deg, #12d6df, #7A69F9, #b239ae, #ff52f9)",
        }}
        className="px-0 py-0 p-0 w-9 h-9 border-none flex items-center justify-center text-white">
        <div className='w-7 h-7 rounded-lg absolute bg-background/40 backdrop-blur-sm '></div>
        {theme === "light" ? <LuSun className="w-4 h-4 z-10" /> : <LuMoon className="w-4 h-4 z-10" />}
    </Button>;
}