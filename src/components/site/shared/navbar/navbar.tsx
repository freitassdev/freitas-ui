"use client";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "@/components/site/misc/logo";
import Input from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import Link from "next/link";
import ThemeToggle from "../../misc/theme-toggle";
import RainbowButton from "@/components/ui/rainbow-button";
import { FaGithub } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { LuX } from "react-icons/lu";

import {
    ExpandableSidebar,
    ExpandableSidebarClose,
    ExpandableSidebarContent,
    ExpandableSidebarFooter,
    ExpandableSidebarHeader,
    ExpandableSidebarTrigger
} from "@/components/ui/expandable-sidebar";
import { Separator } from "@/components/ui/separator";
import Button from "@/components/ui/button";
import { GoRocket } from "react-icons/go";
import { RxComponent1 } from "react-icons/rx";
import sidebarItems from "@/constants/sidebar-items";

interface NavbarProps {
    isDocsPage?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Navbar({ isDocsPage = false }: NavbarProps) {
    const navRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (y: number) => {
        if (y > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <div className={cn("w-full h-20 flex flex-row items-center justify-center top-0 fixed inset-x-0 z-40 duration-300",
            isScrolled && !isDocsPage ? "bg-background/70 saturate-100 backdrop-blur-[6px] shadow-md" : "bg-transparent", 
            isDocsPage ? "bg-background/70 saturate-100 backdrop-blur-[6px]" : "")}>
            <nav className="flex items-center justify-between max-sm:px-2 px-2 transition-all max-md:w-full max-md:px-4 md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1500px]" ref={navRef}>
                <div className="flex flex-row items-center justify-center gap-3">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                    <div className="flex flex-row items-center justify-center gap-5 mr-2">
                        <Link href="/docs" className="max-md:hidden text-primary hover:text-primary/80 transition-all duration-300">
                            Getting Started
                        </Link>
                        <Link href="/docs" className="max-md:hidden text-primary hover:text-primary/80 transition-all duration-300">
                            Components
                        </Link>
                    </div>
                    <Input className="max-md:hidden" containerClassName="w-fit" iconClassName="max-md:hidden" placeholder="Search in docs" iconPosition="right" icon={<LuSearch />} />
                    <Link href="https://github.com/freitassdev/freitas-ui" target="_blank">
                        <RainbowButton className="max-md:hidden" variant="opaque">
                            <FaGithub className='mr-2 ' />
                            See on GitHub
                        </RainbowButton>
                    </Link>
                    <ThemeToggle className="flex max-md:hidden" />
                    <div className="hidden max-md:block">
                        <ExpandableSidebar>
                            <ExpandableSidebarTrigger asChild>
                                <RainbowButton variant="opaque">
                                    <FaBarsStaggered className="rotate-180" />
                                    <span className="sr-only">toggle menu</span>
                                </RainbowButton>
                            </ExpandableSidebarTrigger>
                            <ExpandableSidebarContent className="flex flex-col justify-between h-full">
                                <div className="flex flex-col w-full h-full">
                                    <ExpandableSidebarHeader className="flex flex-row items-center justify-between">
                                        <Link href="/">
                                            <Logo className="max-sm:h-9" />
                                        </Link>
                                        <ExpandableSidebarClose asChild>
                                            <RainbowButton variant="opaque" className="max-w-9">
                                                <LuX />
                                            </RainbowButton>
                                        </ExpandableSidebarClose>
                                    </ExpandableSidebarHeader>
                                    <div className="flex flex-col items-center justify-start gap-2 w-full mt-4 overflow-y-auto flex-grow">
                                        <Link href="https://github.com/freitassdev/freitas-ui" className="w-full" target="_blank">
                                            <RainbowButton className="w-full flex md:hidden justify-between" variant="opaque">
                                                <FaGithub className='mr-2 ' />
                                                See on GitHub
                                            </RainbowButton>
                                        </Link>
                                        <Input
                                            className="block w-full md:hidden"
                                            placeholder="Search in docs"
                                            iconPosition="left"
                                            icon={<LuSearch />} />
                                        <Separator variant="rainbow" className="w-full my-4" />
                                        {!isDocsPage && (
                                            <>
                                                <Link href="/docs/getting-started" className="w-full" target="_blank">
                                                    <Button className="w-full flex md:hidden justify-start" icon={<GoRocket />}>
                                                        Getting Started
                                                    </Button>
                                                </Link>
                                                <Link href="/docs/components" className="w-full" target="_blank">
                                                    <Button className="w-full flex md:hidden justify-start" icon={<RxComponent1 />}>
                                                        Components
                                                    </Button>
                                                </Link>
                                            </>
                                        )}
                                        {isDocsPage && (
                                            <>
                                                {sidebarItems.map((item) => (
                                                    <div className="flex flex-col gap-2 w-full" key={item.id}>
                                                        <div className="flex flex-row items-center gap-2">
                                                            <item.Icon className="text-primary" />
                                                            <h2 className="text-md font-medium">{item.title}</h2>
                                                        </div>
                                                        <div className="flex flex-col gap-2 w-full">
                                                            {item.subItems.map((subItem) => (
                                                                <button
                                                                    className={`group relative px-3 py-0 flex flex-row items-center gap-2 w-full justify-start text-foreground`}
                                                                    key={subItem.id}
                                                                >
                                                                    <subItem.icon className="w-4 h-4 text-foreground" />
                                                                    <h2>{subItem.title}</h2>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                    </div>
                                </div>
                                <ExpandableSidebarFooter>
                                    <ThemeToggle className="flex md:hidden !absolute bottom-6" />
                                </ExpandableSidebarFooter>
                            </ExpandableSidebarContent>
                        </ExpandableSidebar>
                    </div>
                </div>
            </nav>
        </div>
    );
}