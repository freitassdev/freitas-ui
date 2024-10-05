"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";
import Logo from "@/components/site/misc/logo";
import GithubButton from "../github-button/github-button";
import Input from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import Link from "next/link";
import ThemeToggle from "../../misc/theme-toggle";


interface NavbarProps {
    isDocsPage?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Navbar({ isDocsPage = true }: NavbarProps) {
    const navRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    useEffect(() => {
        setIsScrolled(false);
    }, []);


    scrollYProgress.on('change', (latest) => {
        if (latest > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });
    return (
        <div className={cn("w-full h-20 flex flex-row items-center justify-center top-0 fixed inset-x-0 z-50", isScrolled ? "bg-background/70 saturate-100 backdrop-blur-[6px] duration-200 shadow-md" : "bg-transparent")}>
            <nav className="flex items-center justify-between  px-2  transition-all  max-md:w-full max-md:px-4 md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1500px]" ref={navRef}>
                <div className="flex flex-row items-center justify-center gap-3">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                    <div className="flex flex-row items-center justify-center gap-5 mr-2">
                        <Link href="/docs" className="text-primary hover:text-primary/80 transition-all duration-300">
                            Getting Started
                        </Link>
                        <Link href="/docs" className="text-primary hover:text-primary/80 transition-all duration-300">
                            Components
                        </Link>
                    </div>
                    <Input placeholder="Search in docs" iconPosition="right" icon={<LuSearch />} />
                    <GithubButton />
                    <ThemeToggle />
                </div>
            </nav>
        </div>
    );
}