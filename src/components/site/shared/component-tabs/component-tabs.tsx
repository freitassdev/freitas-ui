import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ComponentContainer from "@/components/site/shared/component-container/component-container"
import CodeFragment from "@/components/site/shared/code-fragment/code-fragment"

export default function ComponentTabs({ children }: { children: React.ReactNode }) {
    return (

        <div className="flex flex-col gap-5">
            <Tabs defaultValue="preview" className="w-full">
                <TabsList className="w-max">
                    <TabsTrigger className="w-full" value="preview">
                        Preview
                    </TabsTrigger>
                    <TabsTrigger value="code">
                        Code
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="preview">
                    <ComponentContainer>
                        {children}
                    </ComponentContainer>
                </TabsContent>
                <TabsContent value="code">
                    <CodeFragment copyable={true}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis temporibus quibusdam, voluptas laudantium deleniti, quia enim numquam tempore laboriosam tenetur molestias rem iure cupiditate. Non et at iure voluptates quis!
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores sunt sed quibusdam doloribus veniam quas, itaque fugit id? Pariatur deleniti iure enim adipisci quo laudantium temporibus tenetur, magni fugit.
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ab voluptatem at quas dolore provident placeat nemo! A eos qui ducimus temporibus vitae non, laudantium officia neque omnis suscipit quia?
                       var = 1;
                    </CodeFragment>
                </TabsContent>
            </Tabs>
        </div>
    )
}