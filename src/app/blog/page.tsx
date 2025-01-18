import { FaGreaterThan } from "react-icons/fa6";
import Image from "next/image";
import { RiAdminFill } from "react-icons/ri";
import { FaBirthdayCake } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlSupport } from "react-icons/sl";



const Blog = () => {
    return (
        <div className="overflow-x-hidden">
            {/* 1st section */}
            <div className="bg-[url('/image/shop/Rectangle-1.png')] h-[200px] md:h-[316px] bg-cover ">
                {/* heading */}
                <div className="h-[200px] md:h-[316px] flex flex-col justify-center items-center">

                    <Image src="/image/header/Meubel House_Logos-05.png" alt="logo" width={50} height={41} className="" />
                    <h1 className="text-primary text-[32px] sm:text-[36px] md:text-[48px] font-[500] xl:leading-[72px]"> Blog </h1>


                    <div className="gap-[2px] sm:gap-[5px] md:w-[121px] flex items-center justify-between">
                        <p className="text-[12px] md:text-[16px] font-[500]"> Home </p>
                        <FaGreaterThan className="size-2 md:size-3" />
                        <p className="text-[12px] md:text-[16px] font-[300]"> Blog </p>
                    </div>
                </div>
            </div>


            {/* 2nd section */}
            <div>
                {/* container */}
                <div className="grid grid-cols-3">

                    {/* left */}
                    <div className="py-10 lg:pt-20 pl-5 pr-10 sm:px-10  md:px-14 lg:px-24  flex flex-col gap-8 lg:gap-12 xl:px-0 xl:w-[820px] xl:m-auto col-span-2 ">

                        {/* 1 */}
                        <div className="flex flex-col gap-2">
                            <Image src="/image/blog/Rectangle1.png" alt="image" width={200} height={100} className=" rounded-[5px] sm:w-full " />

                            <div className="flex flex-row gap-3 md:gap-5">
                                {/* admin */}
                                <div className="flex gap-[1px] items-center md:gap-[4px]">
                                    <RiAdminFill className="size-3 md:size-4" />
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[14px] lg:text-[16px]">Admin</p>
                                </div>

                                {/* dob */}
                                <div className="flex gap-[1px] items-center md:gap-[4px]">
                                    <FaBirthdayCake className="size-3 md:size-4" />
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[14px] lg:text-[16px]"> 14 Oct 2022</p>
                                </div>

                                {/* wood */}
                                <div className="flex gap-[1px] items-center md:gap-[4px]">
                                    <FaTag className="size-3 md:size-4" />
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[14px] lg:text-[16px]"> Wood </p>
                                </div>
                            </div>

                            <h1 className="pt-2 text-primary font-[500] min-w-[100px] text-[15px] md:text-[22px] xl:text-[30px]"> Going all-in with millennial design </h1>
                            <p className="text-[#9F9F9F] min-w-[100px] xl:w-[817px] leading-[22.5px] text-[12px] md:text-[13px] line-clamp-5 lg:text-[15px] text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum. </p>
                            <button className="pt-2 text-primary w-[89px] h-[36px] border-b-[1px] border-primary text-[16px]"> Read more</button>

                        </div>


                        {/* 2 */}
                        <div className="flex flex-col gap-2 md:gap-5">
                            <Image src="/image/blog/Rectangle2.png" alt="image" width={200} height={100} className="rounded-[5px] sm:w-full" />

                            <div className="flex flex-row gap-3">
                                {/* admin */}
                                <div className="flex gap-[1px] items-center md:gap-[4px]">
                                    <RiAdminFill className="size-3 md:size-4" />
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[14px] lg:text-[16px]">Admin</p>
                                </div>

                                {/* dob */}
                                <div className="flex gap-[1px] items-center md:gap-[4px]">
                                    <FaBirthdayCake className="size-3 md:size-4" />
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[14px] lg:text-[16px]"> 14 Oct 2022</p>
                                </div>

                                {/* wood */}
                                <div className="flex gap-[1px] items-center md:gap-[4px]">
                                    <FaTag className="size-3 md:size-4" />
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[14px] lg:text-[16px]"> Handmade </p>
                                </div>
                            </div>

                            <h1 className="pt-2 text-primary font-[500] min-w-[100px] text-[15px] md:text-[22px] xl:text-[30px]"> Exploring new ways of decorating </h1>
                            <p className="text-[#9F9F9F] min-w-[100px] xl:w-[817px] leading-[22.5px] text-[12px] md:text-[13px] line-clamp-5 lg:text-[15px] text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum. </p>
                            <button className="pt-2 text-primary w-[89px] h-[36px] border-b-[1px] border-primary text-[16px]"> Read more</button>

                        </div>


                        {/* 3 */}
                        <div className="flex flex-col gap-2 md:gap-5">
                            <Image src="/image/blog/Rectangle3.png" alt="image" width={200} height={100} className="rounded-[5px] sm:w-full" />

                            <div className="flex flex-row gap-3">
                                {/* admin */}
                                <div className="flex gap-[1px] items-center md:gap-[4px]">
                                    <RiAdminFill className="size-3 md:size-4" />
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[14px] lg:text-[16px]">Admin</p>
                                </div>

                                {/* dob */}
                                <div className="flex gap-[1px] items-center md:gap-[4px]">
                                    <FaBirthdayCake className="size-3 md:size-4" />
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[14px] lg:text-[16px]"> 14 Oct 2022</p>
                                </div>

                                {/* wood */}
                                <div className="flex gap-[1px] items-center md:gap-[4px]">
                                    <FaTag className="size-3 md:size-4" />
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[14px] lg:text-[16px]"> wood </p>
                                </div>
                            </div>

                            <h1 className="pt-2 text-primary font-[500] min-w-[100px] text-[15px] md:text-[22px] xl:text-[30px]">Handmade pieces that took time to make </h1>
                            <p className="text-[#9F9F9F] min-w-[100px] xl:w-[817px] leading-[22.5px] text-[12px] md:text-[13px] line-clamp-5 lg:text-[15px] text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum. </p>
                            <button className="pt-2 text-primary w-[89px] h-[36px] border-b-[1px] border-primary text-[16px]"> Read more</button>

                        </div>
                    </div>

                    {/* right 1 */}
                    <div className="col-span-1 pr-5 pt-10 lg:pt-20  sm:pr-10 md:ml-5 md:pr-20 lg:pl-7 lg:pr-40 xl:pl-0 xl:pr-0 xl:w-[252px]">
                        <div className=" ">
                            <input type="text" id="search" className="border-[1px] border-[#9F9F9F] rounded-[5px] xl:rounded-[10px] h-[20px] md:h-[35px] lg:h-[45px] w-full xl:h-[58px]" />
                        </div>
                        {/* categories */}
                        <div className="py-3 flex flex-col  gap-3 md:gap-4 lg:gap-8 xl:gap-10 ">
                            <h1 className="text-primary font-[500] pt-2 lg:pt-5 text-[13px] md:text-[18px] xl:text-[24px]"> Categories </h1>
                            <div className="flex justify-between">
                                <p className="text-[#9F9F9F] text-[11px]  md:text-[13px] xl:text-[16px]"> Crafts </p>
                                <p className="text-[#9F9F9F] text-[11px] md:text-[13px] xl:text-[16px]"> 2</p>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-[#9F9F9F] text-[11px] md:text-[13px] xl:text-[16px]"> Design </p>
                                <p className="text-[#9F9F9F] text-[11px] md:text-[13px] xl:text-[16px]"> 8 </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-[#9F9F9F] text-[11px] md:text-[13px] xl:text-[16px]"> Handmade </p>
                                <p className="text-[#9F9F9F] text-[11px] md:text-[13px] xl:text-[16px]"> 7 </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-[#9F9F9F] text-[11px] md:text-[13px] xl:text-[16px]"> Interior </p>
                                <p className="text-[#9F9F9F] text-[11px] md:text-[13px] xl:text-[16px]"> 1 </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-[#9F9F9F] text-[11px] md:text-[13px] xl:text-[16px]"> Wood </p>
                                <p className="text-[#9F9F9F] text-[11px] md:text-[13px] xl:text-[16px]"> 6 </p>
                            </div>
                        </div>

                        {/* right 2 */}
                        <div className="py-10 flex flex-col lg:py-20 xl:pr-10  xl:py-36 gap-5 lg:gap-8 xl:gap-10">
                            <h1 className="text-primary font-[500] text-[13px] md:text-[18px] xl:text-[24px]"> Recent Posts </h1>
                            {/* post-1 */}
                            <div className="flex gap-2 ">
                                <Image src="/image/blog/Rectanglep4.png" alt="post" width={40} height={40} className="md:w-[60px] md:h-[60px]" />
                                <div>
                                    <h1 className="text-primary text-[10px] md:text-[12px] min-w-[50px] line-clamp-2 xl:text-[14px]"> Going all-in with millennial design</h1>
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[10px] xl:text-[12px] "> 03 Aug 2022</p>
                                </div>
                            </div>

                            {/* post-2 */}
                            <div className="flex gap-2">
                                <Image src="/image/blog/Rectanglep5.png" alt="post" width={40} height={40} className="md:w-[60px] md:h-[60px]" />
                                <div>
                                    <h1 className="text-primary text-[10px] md:text-[12px] min-w-[50px] line-clamp-2 xl:text-[14px]">Exploring new ways of decorating</h1>
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[10px] xl:text-[12px]"> 03 Aug 2022</p>
                                </div>
                            </div>

                            {/* post-3 */}
                            <div className="flex gap-2">
                                <Image src="/image/blog/Rectanglep6.png" alt="post" width={40} height={40} className="md:w-[60px] md:h-[60px]" />
                                <div>
                                    <h1 className="text-primary text-[10px] md:text-[12px] min-w-[50px] line-clamp-2 xl:text-[14px]">Handmade pieces that took time to make </h1>
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[10px] xl:text-[12px]"> 03 Aug 2022</p>
                                </div>
                            </div>

                            {/* post-4 */}
                            <div className="flex gap-2">
                                <Image src="/image/blog/Rectanglep7.png" alt="post" width={40} height={40} className="md:w-[60px] md:h-[60px]" />
                                <div>
                                    <h1 className="text-primary text-[10px] md:text-[12px] min-w-[50px] line-clamp-2 xl:text-[14px]">Modern home in Milan</h1>
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[10px] xl:text-[12px]"> 03 Aug 2022</p>
                                </div>
                            </div>

                            {/* post-5 */}
                            <div className="flex gap-2 ">
                                <Image src="/image/blog/Rectanglep8.png" alt="post" width={40} height={40} className="md:w-[60px] md:h-[60px]" />
                                <div>
                                    <h1 className="text-primary text-[10px] md:text-[12px] min-w-[50px] line-clamp-2 xl:text-[14px]">Colorful office redesign</h1>
                                    <p className="text-[#9F9F9F] text-[8px] md:text-[10px] xl:text-[12px]"> 03 Aug 2022</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* scroll */}
                <div className="h-[90px] flex justify-center items-end gap-[8px] md:gap-[38px] mt-8">
                    <div className="w-[60px] h-[60px] flex justify-center items-center  bg-[#B88E2F] rounded-[10px]">
                        <p className="text-[20px] text-secondary"> 1 </p>
                    </div>
                    <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#F9F1E7] rounded-[10px] ">
                        <p className="text-[20px] text-primary"> 2 </p>
                    </div>
                    <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#F9F1E7] rounded-[10px]">
                        <p className="text-[20px] text-primary"> 4 </p>
                    </div>
                    <div className="w-[98px] h-[60px] flex justify-center items-center  bg-[#F9F1E7] rounded-[10px]">
                        <p className="text-[20px] font-[300] text-primary"> Next </p>
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

export default Blog;