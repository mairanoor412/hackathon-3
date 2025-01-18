import { FaGreaterThan } from "react-icons/fa6";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiViewGrid } from "react-icons/hi";
import { LuRectangleHorizontal } from "react-icons/lu";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlSupport } from "react-icons/sl";

import Image from "next/image";



const Shop = () => {
    return (
        <div className="overflow-x-hidden">
            {/* 1st section shop */}
            <div className="bg-[url('/image/shop/Rectangle-1.png')] h-[200px] md:h-[316px] bg-cover ">
                {/* heading */}
                <div className="h-[200px] md:h-[316px] flex flex-col justify-center items-center">
                    <h1 className="text-primary text-[32px] sm:text-[36px] md:text-[48px] font-[500] xl:leading-[72px]"> Shop </h1>

                    <div className="gap-[2px] sm:gap-[5px] md:w-[121px] flex items-center justify-between">
                        <p className="text-[12px] md:text-[16px] font-[500]"> Home </p>
                        <FaGreaterThan className="size-2 md:size-3" />
                        <p className="text-[12px] md:text-[16px] font-[300]"> Shop </p>
                    </div>
                </div>

            </div>


            {/* 2nd section */}
            {/* container */}
            <div className=" w-auto   bg-[#F9F1E7] ">
                <div className="lg:w-[1000px] xl:w-[1270px] h-auto md:h-[100px] pt-9 lg:m-auto  grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-3 justify-items-center lg:justify-items-start">
                    {/* Left col*/}
                    <div className="flex items-center gap-3 md:gap-5">
                        <div className="gap-2 lg:w-[85px] flex items-center justify-between">
                            <HiAdjustmentsHorizontal className="lg:size-6" />
                            <p className="font-[400] text-[20px] "> Filter </p>
                        </div>
                        <HiViewGrid className="lg:size-6" />
                        <div className="w-[18px] h-[20px] border-y-[1px] border-primary flex justify-center items-center">
                            <LuRectangleHorizontal className="lg:size-6" />
                        </div>

                        <div className="pl-2 lg:w-[237px] h-[37px] border-l-[2px] border-[#9F9F9F] flex items-center justify-end ">
                            <p className="font-[400] text-[16px]"> Showing 1–16 of 32 results </p>
                        </div>
                    </div>

                    {/* right col*/}
                    <div className="flex items-center md:ml-auto gap-2 sm:gap-5 ">
                        <div className="gap-3 lg:w-[126px] flex items-center justify-between">
                            <p className="text-[14px] md:text-[16px] lg:text-[20px]"> Show </p>
                            <p className="w-[55px] h-[55px] bg-secondary text-[#9F9F9F] flex items-center justify-center"> 16 </p>
                        </div>

                        <div className="w-[205px] lg:w-[288px] flex items-center justify-between">
                            <p className="text-[14px] md:text-[16px] lg:text-[20px]"> Short by </p>
                            <p className="w-[130px] lg:w-[188px] h-[55px] bg-secondary text-[#9F9F9F] flex items-center pl-7"> Default </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* 3rd section products */}
            <div className="xl:w-[1244px] xl:m-auto pt-14">
                <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-[5px]">

                    {/* card-1 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7] rounded-[5px]  relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -30% </div>

                        <Image src="/image/products/1-image 1.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Syltherine </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Stylish cafe chair </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 2.500.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                            </div>

                        </div>
                    </div>






                    {/* card-2 */}
                    <div className="w-[285px] h-[446px]  opacity-[72%] z-20 rounded-[5px] relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="absolute inset-0 bg-[#3A3A3A] opacity-[72%]  rounded-[5px]"></div>
                        {/* Add to Card */}
                        <div className="w-[252px] h-[96px] flex flex-col items-center gap-[24px] m-auto absolute top-[175px] left-[16px] ">
                            {/* card button */}
                            <button className="w-[202px] h-[48px] text-[16px] font-[600] leading-[24px] text-[#B88E2F] bg-secondary"> Add to cart</button>

                            {/* share/compare/like */}
                            <div className="h-[24px] gap-[20px] flex">
                                {/* share */}
                                <div className="flex items-center gap-[2px]">
                                    <CiShare2 className="w-[16px] h-[16px] text-secondary" />
                                    <p className="text-secondary text-[16px] font-[600]"> Share</p>
                                </div>

                                {/* compare */}
                                <div className="flex items-center gap-[2px]">
                                    <MdOutlineCompareArrows className="w-[16px] h-[16px] text-secondary" />
                                    <p className="text-secondary text-[16px] font-[600]"> Compare </p>
                                </div>

                                {/* like */}
                                <div className="flex items-center gap-[2px]">
                                    <CiHeart className="w-[16px] h-[16px] text-secondary" />
                                    <p className="text-secondary text-[16px] font-[600]"> Like </p>
                                </div>
                            </div>
                        </div>

                        <Image src="/image/products/image 2.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />


                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4 bg-[#F4F5F7]">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Syltherine </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Stylish cafe chair </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 2.500.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                            </div>

                        </div>

                    </div>





                    {/* card-3 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative lg:hidden xl:block transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -50% </div>
                        <Image src="/image/products/3-image 3.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Lolito </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Luxury big sofa </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 7.000.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 14.000.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-4 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#2EC1AC] rounded-full absolute top-[18px] right-[15px] z-20"> New </div>
                        <Image src="/image/products/4-image 4.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Respira </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Outdoor bar table and stool </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]"> Rp 500.000 </p>

                            </div>

                        </div>
                    </div>


                    {/* card-1 */}

                    <div className="w-[285px] h-[446px] bg-[#F4F5F7] rounded-[5px]  relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -30% </div>

                        <Image src="/image/products/1-image 1.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Syltherine </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Stylish cafe chair </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 2.500.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-2 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7] rounded-[5px] relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -30% </div>

                        <Image src="/image/products/image 2.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />

                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4 bg-[#F4F5F7]">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Syltherine </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Stylish cafe chair </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 2.500.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-3 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative lg:hidden xl:block transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -50% </div>
                        <Image src="/image/products/3-image 3.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Lolito </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Luxury big sofa </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 7.000.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 14.000.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-4 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#2EC1AC] rounded-full absolute top-[18px] right-[15px] z-20"> New </div>
                        <Image src="/image/products/4-image 4.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Respira </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Outdoor bar table and stool </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]"> Rp 500.000 </p>

                            </div>

                        </div>
                    </div>


                    {/* card-1 */}

                    <div className="w-[285px] h-[446px] bg-[#F4F5F7] rounded-[5px]  relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -30% </div>

                        <Image src="/image/products/1-image 1.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Syltherine </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Stylish cafe chair </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 2.500.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-2 */}
                    <div className="w-[285px] h-[446px]  rounded-[5px] bg-[#F4F5F7] relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -30% </div>

                        <Image src="/image/products/image 2.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />

                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4 bg-[#F4F5F7]">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Syltherine </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Stylish cafe chair </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 2.500.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-3 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative lg:hidden xl:block transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -50% </div>
                        <Image src="/image/products/3-image 3.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Lolito </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Luxury big sofa </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 7.000.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 14.000.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-4 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#2EC1AC] rounded-full absolute top-[18px] right-[15px] z-20"> New </div>
                        <Image src="/image/products/4-image 4.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Respira </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Outdoor bar table and stool </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]"> Rp 500.000 </p>

                            </div>

                        </div>
                    </div>


                    {/* card-1 */}

                    <div className="w-[285px] h-[446px] bg-[#F4F5F7] rounded-[5px]  relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -30% </div>

                        <Image src="/image/products/1-image 1.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Syltherine </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Stylish cafe chair </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 2.500.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-2 */}
                    <div className="w-[285px] h-[446px]  rounded-[5px] bg-[#F4F5F7] relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -30% </div>

                        <Image src="/image/products/image 2.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />

                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4 bg-[#F4F5F7]">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Syltherine </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Stylish cafe chair </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 2.500.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-3 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative lg:hidden xl:block transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -50% </div>
                        <Image src="/image/products/3-image 3.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Lolito </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Luxury big sofa </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 7.000.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 14.000.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-4 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#2EC1AC] rounded-full absolute top-[18px] right-[15px] z-20"> New </div>
                        <Image src="/image/products/4-image 4.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Respira </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Outdoor bar table and stool </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]"> Rp 500.000 </p>

                            </div>

                        </div>
                    </div>

                </div>

                <div className="h-[90px] flex justify-center items-end gap-[8px] md:gap-[38px] mt-8">
                    <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-[10px]">
                        <p className="text-[20px] text-primary hover:text-secondary"> 1 </p>
                    </div>
                    <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-[10px] ">
                        <p className="text-[20px] text-primary hover:text-secondary"> 2 </p>
                    </div>
                    <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-[10px]">
                        <p className="text-[20px] text-primary hover:text-secondary"> 4 </p>
                    </div>
                    <div className="w-[98px] h-[60px] flex justify-center items-center  bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-[10px]">
                        <p className="text-[20px] font-[300] text-primary hover:text-secondary"> Next </p>
                    </div>

                </div>
            </div>


            {/* 4th section */}
            <div className="h-auto w-full bg-[#FAF3EA] py-[50px] lg:py-[100px] mt-[70px]">
                <div className="px-5 md:px-2 xl:w-[1334px] xl:m-auto  xl:px-0 ">
                    {/* container */}
                    <div className="grid grid-cols-2  md:grid-cols-4 sm:gap-7 md:gap-0  xl:justify-items-center xl:gap-3">

                        {/* 1 */}
                        <div className="h-[100px] xl:leading-[37.5px] flex items-center md:justify-center gap-[5px] xl:w-[337px] xl:justify-start ">
                            <HiOutlineTrophy className="size-7 md:size-8 lg:size-10 xl:size-14" />
                            <div>
                                <h1 className="text-[#242424] font-[600] text-[12px] md:text-[13px] lg:text-[18px] xl:text-[25px]"> High Quality</h1>
                                <p className="text-[#898989] font-[500] text-[8px] md:text-[11px] lg:text-[15px] xl:text-[20px]"> crafted from top materials </p>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="h-[100px] xl:leading-[37.5px]  flex items-center md:justify-center  gap-[5px] xl:w-[328px] ">
                            <RiCheckboxCircleLine className="size-7 md:size-8 lg:size-10 xl:size-14" />
                            <div>
                                <h1 className="text-[#242424] font-[600] text-[12px] md:text-[13px] lg:text-[18px] xl:text-[25px]"> Warranty Protection </h1>
                                <p className="text-[#898989] font-[500] text-[8px] md:text-[11px] lg:text-[15px] xl:text-[20px]"> Over 2 years </p>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="h-[100px] xl:leading-[37.5px] flex items-center md:justify-center gap-[5px] xl:w-[244px]">
                            <MdOutlineLocalShipping className="size-7 md:size-8 lg:size-10 xl:size-14" />
                            <div>
                                <h1 className="text-[#242424] font-[600] text-[12px] md:text-[13px] lg:text-[18px] xl:text-[25px]"> Free Shipping </h1>
                                <p className="text-[#898989] font-[500] text-[8px] md:text-[11px] lg:text-[15px] xl:text-[20px]"> Order over 150 $ </p>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="h-[100px] xl:leading-[37.5px] flex items-center md:justify-center gap-[5px] xl:w-[259px] xl:justify-end">
                            <SlSupport className="size-7 md:size-8 lg:size-10 xl:size-14" />
                            <div>
                                <h1 className="text-[#242424] font-[600] text-[12px] md:text-[13px] lg:text-[18px] xl:text-[25px]"> 24 / 7 Support </h1>
                                <p className="text-[#898989] font-[500] text-[8px] md:text-[11px] lg:text-[15px] xl:text-[20px]"> Dedicated support </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Shop;