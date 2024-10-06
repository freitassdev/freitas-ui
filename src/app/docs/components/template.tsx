import Navbar from "@/components/site/shared/navbar/navbar";
import Sidebar from "@/components/site/shared/sidebar/sidebar";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row w-full h-full bg-background mx-auto mt-20 max-md:w-full max-md:px-4 md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1500px] overflow-hidden">
            <Sidebar />
            <div className="flex flex-col w-full h-full">
                <Navbar isDocsPage={true} />
                <div className="ml-80 max-md:ml-0 w-full h-full flex-1"> {/* this marginleft is for the sidebar, dont remove */}
                    <div className="h-full overflow-y-auto p-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}