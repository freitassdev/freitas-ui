'use client';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLMotionProps, motion } from 'framer-motion';

const rainbowButtonVariants = cva(
    "w-fit p-2 px-2 rounded-xl transform-gpu text-sm transition-colors duration-1000 group-hover:text-transparent flex flex-row items-center justify-center border border-muted cursor-pointer",
    {
        variants: {
            variant: {
                default: "",
                opaque: "",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

interface RainbowButtonProps extends Omit<HTMLMotionProps<"button">, 'size'>,
    VariantProps<typeof rainbowButtonVariants> {
    children: React.ReactNode;
    opaqueClassName?: string;
}

export default function RainbowButton({ variant, size, className, children, opaqueClassName, ...props }: RainbowButtonProps) {
    return (
        <motion.button
            initial={{
                backgroundImage: "linear-gradient(67deg, #12d6df, #7A69F9, #b239ae, #ff52f9)",
            }}
            animate={{
                backgroundImage: [
                    "linear-gradient(67deg, #12d6df, #7A69F9, #b239ae, #ff52f9)",
                    "linear-gradient(67deg, #ff52f9,#12d6df, #7A69F9, #b239ae)",
                    "linear-gradient(67deg, #b239ae, #ff52f9,#12d6df, #7A69F9)",
                    "linear-gradient(67deg, #7A69F9, #b239ae, #ff52f9,#12d6df)",
                    "linear-gradient(67deg, #12d6df, #7A69F9, #b239ae, #ff52f9)",
                ],
            }}
            className={cn(
                rainbowButtonVariants({ variant, size, className }),
                "relative"
            )}
            transition={{
                duration: 2,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
            }}
            
            {...props}
        >
            {variant === "opaque" && <div className={cn('absolute inset-0 m-[4px] rounded-lg bg-background/40 backdrop-blur-sm', opaqueClassName)}></div>}
            <div className='relative z-10 flex flex-row items-center justify-center text-white'>
                {children}
            </div>
        </motion.button>
    );
}