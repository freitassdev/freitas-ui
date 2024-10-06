'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GradientTextProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    deg?: string;
    duration?: number;
}

export default function GradientText({ text, className, deg = "67deg", duration = 2 }: GradientTextProps) {
    return <motion.span
        initial={{
            backgroundImage: `linear-gradient(${deg}, #12d6df, #7A69F9, #b239ae, #ff52f9)`,
        }}
        animate={{
            backgroundImage: [
                `linear-gradient(${deg}, #12d6df, #7A69F9, #b239ae, #ff52f9)`,
                `linear-gradient(${deg}, #ff52f9,#12d6df, #7A69F9, #b239ae)`,
                `linear-gradient(${deg}, #b239ae, #ff52f9,#12d6df, #7A69F9)`,
                `linear-gradient(${deg}, #7A69F9, #b239ae, #ff52f9,#12d6df)`,
                `linear-gradient(${deg}, #12d6df, #7A69F9, #b239ae, #ff52f9)`,
            ],
        }}
        transition={{
            duration: duration,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
        }}
        className={cn("transform-gpu bg-clip-text transition-colors duration-500 text-transparent", className)}
    >
        {text}
    </motion.span>
}