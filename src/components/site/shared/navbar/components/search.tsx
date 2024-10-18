import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LuSearch } from "react-icons/lu";
export default function Search({ className }: { className?: string | undefined }) {
    return (
        <>
            <Button containerClassName="max-md:w-full" iconClassName={className} className={cn("text-foreground max-md:w-full max-lg:w-44 w-56 justify-start px-3", className)} icon={<LuSearch />} iconPosition="right">Search in docs...</Button>
        </>
    )
}