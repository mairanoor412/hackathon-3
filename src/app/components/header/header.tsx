"use client"
import Image from "next/image";
import { LiaUserCheckSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResponsiveMenu from "../responsive-menu/responsive-menu";
import { useAppSelector } from "@/app/store/hooks";



const Header = () => {
    const [open, setopen] = useState(false)
    const Cart = useAppSelector((state) => state.cart);


    return (
        <div className=" overflow-x-hidden w-full bg-secondary ">

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
                                    <Link href="/"> Home </Link>
                                </li>
                                <li className="text-[16px] font-[500] text-primary">
                                    <Link href="/shop">  Shop </Link>
                                </li>
                                <li className="text-[16px] font-[500] text-primary">
                                    <Link href="/blog" > Blog </Link>
                                </li>
                                <li className="text-[16px] font-[500] text-primary">
                                    <Link href="/contact"> Contact </Link>
                                </li>

                            </ul>
                        </div>


                        {/* right icons */}
                        <div className="flex md:gap-4 xl:ml-auto xl:gap-10 ">
                            <LiaUserCheckSolid className="w-[28px] h-[28px]" />
                            <IoSearchOutline className="w-[28px] h-[28px]" />
                            <IoIosHeartEmpty className="w-[28px] h-[28px]" />
                            <Link href="/cart">
                                <span className="relative">
                                    <MdOutlineShoppingCart className="w-[28px] h-[28px] text-primary" />
                                </span>
                                {Cart.length > 0 && (<span className="absolute top-3 right-[135px] bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"> {Cart.length} </span>)}

                            </Link>
                        </div>

                    </div>

                </div>

                {/*Mobile Hamburger */}
                <div className="flex items-center pr-5">
                <div className=" w-full  h-[60px] flex flex-row  items-center md:hidden" onClick={() =>
                    setopen(!open)
                }>
                    <GiHamburgerMenu className="size-10 pl-5 text-primary" />
                </div>

                {/* cart for Mobile */}
                <div className="md:hidden">
                    <Link href="/cart">
                        <span className="relative">
                            <MdOutlineShoppingCart className="w-[28px] h-[28px] text-primary" />
                        </span>
                        {Cart.length > 0 && (<span className="absolute top-1 right-[9px] bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"> {Cart.length} </span>)}

                    </Link>
                </div>
               </div>

            </div>

            {/* Mobile Sidebar */}
            <ResponsiveMenu open={open} />

        </div>
    )
}

export default Header;