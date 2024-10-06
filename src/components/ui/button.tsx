import { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"


const buttonVariants = cva(
    "bg-background text-primary border border-input rounded-xl transition-all duration-300 outline-none focus:border-transparent flex flex-row items-center justify-center gap-2",
    {
        variants: {
            variant: {
                default:
                    "bg-card border-muted text-primary focus:ring-1 focus:ring-border hover:bg-muted",
                outline:
                    "bg-transparent border-muted text-primary focus:ring-1 focus:ring-border hover:bg-card/90",
                ghost:
                    "bg-transparent border-transparent text-primary hover:bg-card hover:border-muted focus:ring-1 focus:ring-border",
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

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'>,
    VariantProps<typeof buttonVariants> {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

export default function Button({ className, variant, size, icon, iconPosition = "left", children, ...props }: ButtonProps) {
    const Icon = icon;
    return (
        <div className="relative">
            {icon && (
                <div className={cn(
                    "absolute top-1/2 -translate-y-1/2 text-muted-foreground",
                    iconPosition === "left" ? "left-3" : "right-3"
                )}>
                    {Icon}
                </div>
            )}
            <button
                className={cn(
                    buttonVariants({ variant, size, className }),
                    icon && iconPosition === "left" && "pl-9",
                    icon && iconPosition === "right" && "pr-9"
                )}
                {...props}
            >
                {children}
            </button>
        </div>
    );
}