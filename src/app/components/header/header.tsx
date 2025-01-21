"use client"
import Image from "next/image";
import { LiaUserCheckSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";
import ResponsiveMenu from "../responsive-menu/responsive-menu";



const Header = () => {
    const [open, setopen] = useState(false)

    return (
        <div className=" overflow-x-hidden w-full bg-secondary">

            <div className="xl:w-[1286px] xl:mx-auto">


                {/* container */}
                <div className="hidden md:block">
                    <div className="md:h-[80px] xl:h-[100px] grid grid-cols-3 place-items-center ">

                        {/* left logo*/}
                        <div className="h-[41px] flex gap-[5px] xl:mr-auto ">
                            <div>
                                <Image src="/image/header/Meubel House_Logos-05.png" alt="logo" width={50} height={41} className="relative top-[2px]" />
                            </div>

                            <div className="">
                                <p className="  text-[34px] font-[700] text-primary h-[41px] relative bottom-1 ">Furniro</p>
                            </div>
                        </div>



                        {/* Mid Nav items */}
                        <div className="">
                            <ul className="flex flex-row md:gap-5 xl:w-[430px] xl:justify-between ">
                                <li className="text-[16px] font-[500] text-primary">
                                    <Link href="/" target="_blank"> Home </Link>
                                </li>
                                <li className="text-[16px] font-[500] text-primary">
                                    <Link href="/shop" target="_blank">  Shop </Link>
                                </li>
                                <li className="text-[16px] font-[500] text-primary">
                                    <Link href="/blog" target="_blank"> Blog </Link>
                                </li>
                                <li className="text-[16px] font-[500] text-primary">
                                    <Link href="/contact" target="_blank"> Contact </Link>
                                </li>

                            </ul>
                        </div>

                        {/* right icons */}
                        <div className="flex md:gap-4 xl:ml-auto xl:gap-10 ">
                            <LiaUserCheckSolid className="w-[28px] h-[28px]" />
                            <IoSearchOutline className="w-[28px] h-[28px]" />
                            <IoIosHeartEmpty className="w-[28px] h-[28px]" />
                            <Link href="/cart">
                                <MdOutlineShoppingCart className="w-[28px] h-[28px]" />
                            </Link>
                        </div>

                    </div>

                </div>

                {/*Mobile Hamburger */}
                <div className=" w-full  h-[60px] flex flex-row justify-end items-center md:hidden" onClick={() =>
                    setopen(!open)
                }>
                    <GiHamburgerMenu className="size-10 pr-5 text-primary" />
                </div>

            </div>

            {/* Mobile Sidebar */}
            <ResponsiveMenu open={open} />

        </div>
    )
}

export default Header;