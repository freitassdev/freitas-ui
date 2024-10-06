'use client';

import { useScroll, useTransform, motion } from "framer-motion";


export default function ScrollContainer({ children }: { children: React.ReactNode }) {
    const { scrollYProgress } = useScroll();

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

    return (
        <motion.div className="w-full h-full p-5 bg-card rounded-xl shadow-2xl border-muted border"
            style={{
                rotateX: rotate,
                scale: scale,
            }}>
            {children}
        </motion.div>
    )
}