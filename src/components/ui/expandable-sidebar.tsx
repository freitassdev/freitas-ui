'use client';

import { cn } from "@/lib/utils";
import * as ExpandableSidebarPrimitive from "@radix-ui/react-dialog";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { LuX } from "react-icons/lu";
import Button from "./button";

const ExpandableSidebar = ExpandableSidebarPrimitive.Root;
const ExpandableSidebarTrigger = ExpandableSidebarPrimitive.Trigger;
const ExpandableSidebarClose = ExpandableSidebarPrimitive.Close;
const ExpandableSidebarPortal = ExpandableSidebarPrimitive.Portal;

const expandableSidebarVariants = cva(
    "fixed z-50 gap-4 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-background p-6 shadow-lg",
    {
        variants: {
            position: {
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm rounded-r-xl border-r-border",
                right:
                    "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm border-l-border rounded-l-xl",
            },
        },
        defaultVariants: {
            position: "left",
        },
    }
)

const ExpandableSidebarOverlay = forwardRef<
    React.ElementRef<typeof ExpandableSidebarPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof ExpandableSidebarPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <ExpandableSidebarPrimitive.Overlay
        className={cn(
            "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}
        ref={ref}
    />
))

interface ExpandableSidebarContentProps extends
    React.ComponentPropsWithoutRef<typeof ExpandableSidebarPrimitive.Content>,
    VariantProps<typeof expandableSidebarVariants> { }

const ExpandableSidebarContent = forwardRef<
    React.ElementRef<typeof ExpandableSidebarPrimitive.Content>,
    ExpandableSidebarContentProps
>(({ className, position = "left", children, ...props }, ref) => (
    <ExpandableSidebarPortal>
        <ExpandableSidebarOverlay />
        <ExpandableSidebarPrimitive.Content
            ref={ref}
            className={cn(expandableSidebarVariants({ position, className }))}
            {...props}
        >
            {children}
        </ExpandableSidebarPrimitive.Content>
        <ExpandableSidebarClose asChild>
            <Button variant="ghost" size="icon">
                <LuX />
                <span className="sr-only">Close Sidebar</span>
            </Button>
        </ExpandableSidebarClose>
    </ExpandableSidebarPortal>
));


const ExpandableSidebarHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
)

const ExpandableSidebarFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
        {...props}
    />
)

const ExpandableSidebarTitle = forwardRef<
    React.ElementRef<typeof ExpandableSidebarPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof ExpandableSidebarPrimitive.Title>
>(({ className, ...props }, ref) => (
    <ExpandableSidebarPrimitive.Title
        ref={ref}
        className={cn("text-lg font-semibold text-foreground", className)}
        {...props}
    />
))

const ExpandableSidebarDescription = forwardRef<
    React.ElementRef<typeof ExpandableSidebarPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof ExpandableSidebarPrimitive.Description>
>(({ className, ...props }, ref) => (
    <ExpandableSidebarPrimitive.Description
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
))

ExpandableSidebarTitle.displayName = ExpandableSidebarPrimitive.Title.displayName
ExpandableSidebarDescription.displayName = ExpandableSidebarPrimitive.Description.displayName
ExpandableSidebarOverlay.displayName = ExpandableSidebarPrimitive.Overlay.displayName
ExpandableSidebarContent.displayName = ExpandableSidebarPrimitive.Content.displayName;
ExpandableSidebarFooter.displayName = "ExpandableSidebarFooter"
ExpandableSidebarHeader.displayName = "ExpandableSidebarHeader"
ExpandableSidebarPortal.displayName = "ExpandableSidebarPortal"
export {
    ExpandableSidebar, 
    ExpandableSidebarClose, 
    ExpandableSidebarContent,
    ExpandableSidebarDescription,
    ExpandableSidebarFooter,
    ExpandableSidebarHeader,
    ExpandableSidebarPortal,
    ExpandableSidebarTitle,
    ExpandableSidebarTrigger
};