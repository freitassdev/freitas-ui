'use client';

import sidebarItems from "@/constants/sidebar-items";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import RainbowButton from '@/components/ui/rainbow-button';
import Link from 'next/link';
import Badge from "@/components/ui/badge";

export default function Sidebar() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
    const activeItem = usePathname()

    const handleHoverStart = (id: string) => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
        setHoveredItem(id);
    };

    const handleHoverEnd = (id: string) => {
        const timeout = setTimeout(() => {
            setHoveredItem((current) => current === id ? null : current);
        }, 200);
        setHoverTimeout(timeout);
    };

    return (
        <div className="flex flex-col h-[calc(100dvh-5rem)] fixed w-80 max-w-80 bg-background p-5 max-md:hidden" >
            <div className="flex flex-col gap-5 w-full">
                {sidebarItems.map((item) => (
                    <div className="flex flex-col gap-2 w-full" key={item.id}>
                        <div className="flex flex-row items-center gap-2">
                            <item.Icon className="text-primary" />
                            <h2 className="text-md font-medium">{item.title}</h2>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            {item.subItems.map((subItem) => (
                                activeItem === subItem.href ? (
                                    <RainbowButton
                                        key={subItem.id}
                                        variant="opaque"
                                        className="w-full justify-start px-3 py-0"
                                    >
                                        <subItem.icon className="w-4 h-4 text-white mr-2" />
                                        <span className="text-white">{subItem.title}</span>
                                    </RainbowButton>
                                ) : (
                                    <Link href={subItem.href} key={subItem.id}>
                                        <motion.button
                                            onHoverStart={() => handleHoverStart(subItem.id)}
                                            onHoverEnd={() => handleHoverEnd(subItem.id)}
                                            className={`group relative px-3 py-1 flex flex-row items-center gap-2 w-full justify-between duration-200 transition-colors ${hoveredItem === subItem.id ? 'text-foreground' : 'text-muted-foreground'}`}
                                        >
                                            <div className="flex flex-row items-center gap-2">
                                                <subItem.icon className="w-4 h-4 text-muted-foreground" />
                                                <h2>{subItem.title}</h2>
                                            </div>
                                            {subItem.badge && (
                                                <Badge variant="rainbow" opaque={false}>{subItem.badge}</Badge>
                                            )}
                                            <AnimatePresence>
                                                {hoveredItem === subItem.id && (
                                                    <motion.span
                                                        layoutId="nav-item"
                                                        className="absolute bg-card inset-0 rounded-lg w-full h-full -z-10"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    />
                                                )}
                                            </AnimatePresence>
                                        </motion.button>
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}