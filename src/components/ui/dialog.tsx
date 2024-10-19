'use client';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import React, { forwardRef, createContext, useState, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const DialogOpenContext = createContext<boolean>(false);
const DialogPortal = DialogPrimitive.Portal;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const dialogVariants = {
    closed: { opacity: 0, scale: 0, y: 100, filter: "blur(5px)" },
    open: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
};

const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
};

const Dialog = forwardRef<HTMLDivElement, DialogPrimitive.DialogProps>(({ children, ...props }) => {
    const [open, setOpen] = useState(false);
    return (
        <DialogOpenContext.Provider value={open}>
            <DialogPrimitive.Root onOpenChange={setOpen} {...props}>
                {children}
            </DialogPrimitive.Root>
        </DialogOpenContext.Provider>
    );
});
Dialog.displayName = "Dialog";
let dialogContainer: HTMLDivElement;

function getEnsureDialogContainer() {
    if (!dialogContainer) {
        dialogContainer = document.createElement("div");
        dialogContainer.className = "fixed inset-0 z-50 flex items-center justify-center pointer-events-none";
        document.body.append(dialogContainer);
    }

    return dialogContainer;
}
interface DialogContentProps extends DialogPrimitive.DialogContentProps {
    showClose?: boolean;
}

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
    ({ className, showClose, children, ...props }, ref) => {
        const isOpen = useContext(DialogOpenContext);
        return (
            <AnimatePresence>
                {isOpen && (
                    <DialogPortal forceMount container={getEnsureDialogContainer()}>
                        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" asChild>
                            <motion.div
                                variants={overlayVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            />
                        </DialogPrimitive.Overlay>
                        <DialogPrimitive.Content
                            asChild
                            forceMount
                            className="relative "
                            ref={ref}
                            {...props}>
                            <motion.div
                                variants={dialogVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                }}
                                className={cn("z-50 fixed bg-background p-6 rounded-2xl shadow-lg", className)}
                            >
                                {children}
                                {showClose && (
                                    <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                                        <IoClose className="h-4 w-4" />
                                        <span className="sr-only">Close</span>
                                    </DialogPrimitive.Close>
                                )}
                            </motion.div>
                        </DialogPrimitive.Content>
                    </DialogPortal>
                )}
            </AnimatePresence>
        )
    });
DialogContent.displayName = "DialogContent";

const DialogHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col text-center sm:text-left",
            className
        )}
        {...props}
    />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            className
        )}
        {...props}
    />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(
            "text-lg font-semibold leading-none tracking-tight",
            className
        )}
        {...props}
    />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
    Dialog,
    DialogPortal,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
}