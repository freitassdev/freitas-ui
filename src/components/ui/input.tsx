import { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"


const inputVariants = cva(
    "bg-background w-full text-primary border border-input rounded-xl transition-all duration-300 outline-none focus:border-transparent",
    {
        variants: {
            variant: {
                default:
                    "bg-card border-muted text-primary focus:ring-1 focus:ring-border",
                outline:
                    "bg-transparent border-muted text-primary focus:ring-1 focus:ring-border",
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

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    iconClassName?: string;
    containerClassName?: string;
}

export default function Input({ className, iconClassName, containerClassName, variant, size, icon, iconPosition = "left", ...props }: InputProps) {
    const Icon = icon;
    return (
        <div className={cn("relative w-full", containerClassName)}>
            {icon && (
                <div className={cn(
                    "absolute top-1/2 -translate-y-1/2 text-muted-foreground",
                    iconPosition === "left" ? "left-3" : "right-3",
                    iconClassName
                )}>
                    {Icon}
                </div>
            )}
            <input
                className={cn(
                    inputVariants({ variant, size, className }),
                    icon && iconPosition === "left" && "pl-9",
                    icon && iconPosition === "right" && "pr-9"
                )}
                {...props}
            />
        </div>
    );
}