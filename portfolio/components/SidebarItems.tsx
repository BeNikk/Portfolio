"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItems = () => {
    const pathname=usePathname();
    return ( 
        <div>
            <div className="pt-8 lg:pt-14">
                <div className="flex flex-row items-center justify-center">
                    <div className="p-2">
                    <Image src={'/profile.jpg'} width={56} height={56} alt="Profile Image" className="rounded-full"/>
                    </div>
                    <div className="px-2 flex flex-col ">
                        <h1 className="text-primary font-bold ">Nikhil Bhatt</h1>
                        <p className="font-light">Developer</p>
                    </div>

                </div>

            </div>

        <div className="flex flex-col items-center">
            <Link href={'/'}>
            


            </Link>
        </div>
        </div>

   
     );
}
 
export default SidebarItems;