export default function ComponentContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            <div className="w-full h-full max-md:min-h-[300px] min-h-[400px] bg-accent rounded-xl border border-muted flex flex-col items-center justify-center">
                <div className="absolute z-[1] w-full flex flex-col gap-2 items-center">
                    {children}
                </div>
            </div>
            <div className="pointer-events-none rounded-xl absolute inset-0 h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
    )
}