'use client';

import lightLogo from "@/assets/logo/freitas-ui-light.png";
import darkLogo from "@/assets/logo/freitas-ui-dark.png";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function Logo() {
    const { theme } = useTheme();
    const logo = theme === "light" ? darkLogo : lightLogo;
    return (
        <div>
            <Image src={logo} alt="Freitas UI Logo" className="w-auto h-12 max-sm:h-10" />
        </div>
    );
}