'use client'
import CodeFragment from "@/components/site/shared/code-fragment/code-fragment";
import ComponentProps from "@/components/site/shared/component-props/component-props";
import ComponentTabs from "@/components/site/shared/component-tabs/component-tabs";
import GradientText from "@/components/ui/gradient-text";
import Button from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
export default function PlaygroundDocsPage() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <GradientText text="Input" className="text-6xl font-extrabold" />
                <p className="text-lg text-primary">
                    Input is a component that allows users to input text into a form.
                </p>
            </div>
            <ComponentTabs>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Edit Profile</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when youre done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                teste 
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                teste
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </ComponentTabs>
            <GradientText text="Installation (CLI)" className="text-xl font-extrabold" />
            <CodeFragment copyable={true}>
                npx freitas-ui add input
            </CodeFragment>
            <ComponentProps props={[
                {
                    prop: "...",
                    type: "InputHTMLAttributes<HTMLInputElement>",
                    description: "All the props from the native input element."
                },
                {
                    prop: "containerClassName",
                    type: "string",
                    description: "The class name for the container of the input."
                },
                {
                    prop: "className",
                    type: "string",
                    description: "The class name for the input."
                },
                {
                    prop: "icon",
                    type: "React.ReactNode",
                    description: "The icon to be displayed inside the input."
                },
                {
                    prop: "iconPosition",
                    type: "left | right",
                    description: "The position of the icon inside the input.",
                    default: "left"
                }
            ]} />
        </div>
    )
}