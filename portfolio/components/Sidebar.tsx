"use client";
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
import { motion } from "framer-motion"
import { useState } from "react";
  

export const Sidebar = () => {
    return ( 
        <div className="hidden lg:block rounded-lg fixed w-60 bg-[#F5F5F5] h-full">
        
            <SidebarItems/>



        </div>
     );
}
 

export const MobileSidebar = () => {
    

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src={'/menu.jpg'}
                        alt="menu"
                        width={64}
                        height={64}
                        className="text-black"
                    />
                </SheetTrigger>
                <SheetContent side={'left'} className="bg-[#F5F5F5] w-60">
                        <SidebarItems />
                </SheetContent>
            </Sheet>
        </div>
    );
};