"use client"

import { cn } from "@/lib/utils";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { HTMLAttributes } from "react";

const separatorVariants = cva(
    "shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-border",
                rainbow:
                    "bg-gradient-to-r from-[#12d6df] via-[#7A69F9] via-[#b239ae] to-[#ff52f9]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const Separator = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
    Omit<HTMLAttributes<HTMLDivElement>, 'size'> &
    VariantProps<typeof separatorVariants>
>(
    (
        { className, orientation = "horizontal", variant, decorative = true, ...props },
        ref
    ) => (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn(
                orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
                separatorVariants({ variant }),
                className
            )}
            {...props}
        />
    )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator };

