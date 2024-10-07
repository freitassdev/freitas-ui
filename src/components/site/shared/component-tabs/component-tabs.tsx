import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ComponentContainer from "../component-container/component-container"

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
                    {children}
                </TabsContent>
            </Tabs>
        </div>
    )
}