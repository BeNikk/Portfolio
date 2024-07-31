import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import SidebarItems from "./SidebarItems";
import Image from "next/image";
  

export const Sidebar = () => {
    return ( 
        <div className="hidden lg:block rounded-lg fixed w-60 bg-[#F3F4F6] h-full">
        
            <SidebarItems/>



        </div>
     );
}
 
export const MobileSidebar=()=>{
    return(
        <div>
            <Sheet>

            <SheetTrigger><Image src={'/menu.jpg'}  alt="menu" width={64} height={64} className="text-black"/></SheetTrigger>
            <SheetContent side={'left'} className="bg-[#F3F4F6] w-60">
            <SidebarItems/>
            </SheetContent>
            </Sheet>

        </div>

    )
}