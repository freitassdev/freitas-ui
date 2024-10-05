"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";
import Logo from "@/components/site/misc/logo";
import GithubButton from "../github-button/github-button";
import Input from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";


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
                <Logo />
                <div className="flex flex-row items-center justify-center gap-3">
                    <Input placeholder="Search in docs" iconPosition="right" icon={<LuSearch />} />
                    <GithubButton />
                </div>
            </nav>
        </div>
    );
}