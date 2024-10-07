import CodeFragment from "@/components/site/shared/code-fragment/code-fragment";
import ComponentTabs from "@/components/site/shared/component-tabs/component-tabs";
import GradientText from "@/components/ui/gradient-text";
import Input from "@/components/ui/input";
export default function InputDocsPage() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <GradientText text="Input" className="text-6xl font-extrabold" />
                <p className="text-lg text-primary">
                    Input is a component that allows users to input text into a form.
                </p>
            </div>
            <ComponentTabs>
                <Input
                    placeholder="Placeholder..."
                    className="max-w-sm"
                    containerClassName="max-w-sm" />
            </ComponentTabs>
            <GradientText text="Installation (CLI)" className="text-xl font-extrabold" />
            <CodeFragment copyable={true}>
                npx freitas-ui add input
            </CodeFragment>
        </div>
    )
}