'use client';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLMotionProps, motion } from 'framer-motion';

const badgeVariants = cva(
    "w-auto rounded-full",
    {
        variants: {
            variant: {
                default: "bg-muted text-primary",
                outline: "bg-transparent border-2 border-muted text-primary",
                rainbow: ""
            },
            size: {
                default: "h-auto px-3 text-sm",
                sm: "h-auto px-3 text-xs",
                lg: "h-auto px-3 text-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

interface BadgeProps extends Omit<HTMLMotionProps<"div">, 'size'>,
    VariantProps<typeof badgeVariants> {
    children: React.ReactNode;
    opaqueClassName?: string;
    opaque?: boolean;
}

export default function Badge({ variant, size, className, children, opaqueClassName, opaque = true, ...props }: BadgeProps) {
    return (
        <>  
            {variant !== "rainbow" && (
                <motion.div className={cn(badgeVariants({ variant, size, className }))} {...props}>
                    {children}
                </motion.div>
            )}
            {variant === "rainbow" && (
                <motion.div
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
                        badgeVariants({ variant, size, className }),
                        "relative"
                    )}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Number.POSITIVE_INFINITY,
                    }}

                    {...props}
                >
                    {opaque && <div className={cn('absolute inset-0 m-[4px] rounded-lg bg-background/40 backdrop-blur-sm', opaqueClassName)}></div>}
                    <div className='relative z-10 flex flex-row items-center justify-center text-white'>
                        {children}
                    </div>
                </motion.div>
            )}
        </>
    );
}