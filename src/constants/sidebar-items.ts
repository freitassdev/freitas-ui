import { MdInstallDesktop, MdOutlineDocumentScanner } from "react-icons/md";
import { LuCheckSquare, LuComponent, LuHaze, LuListChecks, LuPalette, LuTextCursorInput, LuToggleRight } from "react-icons/lu";
import { IoMdRadioButtonOn } from "react-icons/io";
import { BsMenuButtonFill } from "react-icons/bs";
import { RxButton } from "react-icons/rx";
import { RiSparkling2Line } from "react-icons/ri";
import { GoRocket } from "react-icons/go";
interface ISidebarSubitem {
    id: string;
    title: string;
    href: string;
    icon: React.ElementType;
}

interface ISidebarItem {
    id: string;
    title: string;
    Icon: React.ElementType;
    subItems: ISidebarSubitem[];
}

const sidebarItems: ISidebarItem[] = [
    {
        id: "getting-started",
        title: "Getting Started",
        Icon: GoRocket,
        subItems: [
            {
                id: "introduction",
                title: "Introduction",
                href: "/docs/getting-started/introduction",
                icon: LuHaze
            },
            {
                id: "installation",
                title: "Installation",
                href: "/docs/getting-started/installation",
                icon: MdInstallDesktop
            },
            {
                id: "theming",
                title: "Theming",
                href: "/docs/getting-started/theming",
                icon: LuPalette
            }
        ]
    },
    {
        id: "forms",
        title: "Forms",
        Icon: MdOutlineDocumentScanner,
        subItems: [
            {
                id: "input",
                title: "Input",
                href: "/docs/components/input",
                icon: LuTextCursorInput
            },
            {
                id: "multi-select",
                title: "Multi Select",
                href: "/docs/components/multi-select",
                icon: LuListChecks
            },
            {
                id: "select",
                title: "Select",
                href: "/docs/components/select",
                icon: BsMenuButtonFill
            },
            {
                id: "checkbox",
                title: "Checkbox",
                href: "/docs/components/checkbox",
                icon: LuCheckSquare
            },
            {
                id: "radio",
                title: "Radio",
                href: "/docs/components/radio",
                icon: IoMdRadioButtonOn
            },
            {
                id: "switch",
                title: "Switch",
                href: "/docs/components/switch",
                icon: LuToggleRight
            },
        ]
    },
    {
        id: "buttons",
        title: "Buttons",
        Icon: LuComponent,
        subItems: [
            {
                id: "button",
                title: "Button",
                href: "/docs/components/button",
                icon: RxButton
            },
            {
                id: "rainbow-button",
                title: "Rainbow Button",
                href: "/docs/components/rainbow-button",
                icon: RiSparkling2Line  
            }
        ]
    }

]

export default sidebarItems;