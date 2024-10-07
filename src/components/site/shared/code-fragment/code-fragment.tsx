'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark, coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';
import { LuClipboard } from 'react-icons/lu';
import RainbowButton from '@/components/ui/rainbow-button';

interface CodeFragmentProps {
    children: React.ReactNode;
    language?: string;
    className?: string;
    copyable?: boolean;
}

export default function CodeFragment({ children, language = 'bash', className, copyable = false }: CodeFragmentProps) {
    const { theme } = useTheme();
    const [syntaxTheme, setSyntaxTheme] = useState(coldarkDark); // Definindo um tema padrão

    useEffect(() => {
        setSyntaxTheme(theme === 'dark' ? coldarkDark : coldarkCold);
    }, [theme]);

    return (
        <div className="relative">
            <div className={cn("w-full h-full min-h-[60px] rounded-xl border px-5 border-muted flex flex-row justify-between items-center bg-accent", className)}>
                <SyntaxHighlighter
                    language={language}
                    style={syntaxTheme}
                    customStyle={{
                        backgroundColor: 'transparent',
                        background: 'transparent',
                        padding: 0,
                        userSelect: 'text',
                        pointerEvents: "auto",
                    }}>
                    {String(children)}
                </SyntaxHighlighter>
                {copyable && (
                    <RainbowButton size="icon"
                        className="h-9 w-9"
                        variant="opaque"
                        onClick={() => {
                            navigator.clipboard.writeText(String(children));
                        }}>
                        <LuClipboard />
                    </RainbowButton>
                )}
            </div>
        </div>
    );
}
