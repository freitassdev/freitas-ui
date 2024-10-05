'use client';

import { motion, useScroll } from "framer-motion";

export default function ContainerScroll({ children }: { children: React.ReactNode }) {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
            }}
            className="w-full min-h-"
        >   
            {children}
        </motion.div>
    );
}  