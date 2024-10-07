import CodeFragment from "@/components/site/shared/code-fragment/code-fragment";
import ComponentTabs from "@/components/site/shared/component-tabs/component-tabs";
import GradientText from "@/components/ui/gradient-text";

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
                teste
            </ComponentTabs>
            <CodeFragment copyable={true}>
                npx freitas-ui add input
            </CodeFragment>
        </div>
    )
}