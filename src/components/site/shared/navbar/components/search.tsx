'use client'
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { LuSearch } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import RainbowButton from "@/components/ui/rainbow-button";
import sidebarItems, { ISidebarItem } from "@/constants/sidebar-items";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Search({ className }: { className?: string | undefined }) {
    const [searchValue, setSearchValue] = useState<string>("");
    const [filteredItems, setFilteredItems] = useState<ISidebarItem[]>(sidebarItems)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

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
    useEffect(() => {
        if (searchValue.length === 0)
            return setFilteredItems(sidebarItems);
        
    }, [searchValue])
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        containerClassName="max-md:w-full"
                        iconClassName={className}
                        className={cn("text-foreground max-md:w-full max-lg:w-44 w-56 justify-start px-3", className)}
                        icon={<LuSearch />}
                        iconPosition="right">Search in docs...</Button>
                </DialogTrigger>
                <DialogContent showClose={false} className="w-full max-h-[350px] sm:max-w-[450px] border border-border overflow-y-scroll">
                    <DialogHeader className="w-full flex flex-row items-center gap-2">
                        <Input
                            placeholder="Search a command..."
                            icon={<LuSearch />}
                            className="min-sm:w-[400px]"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)} />
                        <DialogClose
                            className="rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                            <RainbowButton variant="opaque" className="w-9">
                                <IoClose className="h-4 w-4" />
                            </RainbowButton>
                            <span className="sr-only">Close</span>
                        </DialogClose>
                    </DialogHeader>
                    <Separator className="my-3" />
                    <div className="grid gap-4 py-4">
                        {filteredItems.map((item) => (
                            <div className="flex flex-col gap-2" key={"item-" + item.id}>
                                <h2>{item.title}</h2>
                                <div className="flex flex-col gap-2">
                                    {item.subItems.map((subitem) => (
                                        <div className="flex flex-col gap-1" key={"subitem-" + subitem.id}>
                                            <Link href={subitem.href} >
                                                <motion.button
                                                    onHoverStart={() => handleHoverStart(subitem.id)}
                                                    onHoverEnd={() => handleHoverEnd(subitem.id)}
                                                    className="group relative px-3 py-1 flex flex-row items-center gap-2 w-full justify-between duration-200 transition-colors group"
                                                >
                                                    <div className="flex flex-row items-center gap-2">
                                                        <subitem.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                                                        <h2 className="text-muted-foreground group-hover:text-foreground">{subitem.title}</h2>
                                                    </div>
                                                    <AnimatePresence>
                                                        {hoveredItem === subitem.id && (
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
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>

        </>
    )
}