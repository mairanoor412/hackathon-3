import { FaGreaterThan } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlSupport } from "react-icons/sl";

import Image from "next/image";



const Contact = () => {
    return (
        <div className="overflow-x-hidden">
            {/* 1st section */}
            <div className="bg-[url('/image/shop/Rectangle-1.png')] h-[200px] md:h-[316px] bg-cover ">
                {/* heading */}
                <div className="h-[200px] md:h-[316px] flex flex-col justify-center items-center">

                    <Image src="/image/header/Meubel House_Logos-05.png" alt="logo" width={50} height={41} className="" />
                    <h1 className="text-primary text-[32px] sm:text-[36px] md:text-[48px] font-[500] xl:leading-[72px]"> Contact </h1>


                    <div className="gap-[2px] sm:gap-[5px] md:w-[121px] flex items-center justify-between">
                        <p className="text-[12px] md:text-[16px] font-[500]"> Home </p>
                        <FaGreaterThan className="size-2 md:size-3" />
                        <p className="text-[12px] md:text-[16px] font-[300]"> Contact </p>
                    </div>
                </div>
            </div>


            {/* second section */}
            <div className="bg-secondary">
                {/* heading */}
                <div className="grid grid-cols-1 place-items-center py-14">
                    <h1 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-[600] xl:text-[36px] text-primary leading-[54px] "> Get In Touch With Us </h1>
                    <p className="w-[310px] sm:w-[500px] lg:w-[570px] xl:w-[630px] text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] text-[#9F9F9F] text-center leading-[24px]"> For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate! </p>
                </div>

                <div className="w">
                    {/* container */}
                    <div className=" w-full px-5 sm:px-10  grid lg:grid-cols-2">
                        {/* left */}
                        <div className="w-full py-3  lg:py-0 lg:pl-14 sm:w-[531px] sm:m-auto lg:w-[393px]  lg:h-[640px] flex flex-col lg:gap-12  items-start lg:mx-auto gap-5 md:gap-8 ">
                            {/* Address */}
                            <div className="flex gap-8">
                                <FaMapMarkerAlt className="size-5" />
                                <div>
                                    <h1 className="text-primary text-[20px] lg:text-[22px] xl:text-[24px] font-[500]">Address</h1>
                                    <p className="text-primary lg:w-[212px] w-[250px] sm:w-full text-[12px] lg:text-[14px]  xl:text-[16px]">236 5th SE Avenue, New York NY10000, United States</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex  gap-8">
                                <FaPhone className="size-5 " />
                                <div className="">
                                    <h1 className="text-primary text-[24px] font-[500]"> Phone</h1>
                                    <p className="text-primary lg:w-[212px] w-[250px] sm:w-full text-[12px] lg:text-[14px] xl:text-[16px]">Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                                </div>
                            </div>

                            {/* Working Time */}
                            <div className="flex gap-8">
                                <MdAccessTimeFilled className="size-5" />
                                <div>
                                    <h1 className="text-primary text-[24px] font-[500]"> Working Time</h1>
                                    <p className="text-primary lg:w-[212px] w-[250px] sm:w-full text-[12px] lg:text-[14px] xl:text-[16px]">Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
                                </div>
                            </div>
                        </div>

                        {/* right */}
                        <div className="mt-10 min-w-[100px] lg:mt-24  lg:w-[531px] h-[741px] flex flex-col  xl:mx-0  gap-8">
                            {/* name */}
                            <div className="flex flex-col gap-5">
                                <p className="text-[16px] font-[500] leading-[24px]"> Your name </p>
                                <input type="text" id="name" placeholder="ABC" required className=" w-full  xl:w-[528.75px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] pl-4" />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-5">
                                <p className="text-[16px] font-[500] leading-[24px]"> Email address </p>
                                <input type="text" id="name" placeholder="Abc@def.com" required className="w-full xl:w-[528.75px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] pl-4" />
                            </div>

                            {/* Subject */}
                            <div className="flex flex-col gap-5">
                                <p className="text-[16px] font-[500] leading-[24px]"> Subject </p>
                                <input type="text" id="name" placeholder="This is an optional" required className="w-full xl:w-[528.75px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] pl-4" />
                            </div>

                            {/* message */}
                            <div className="flex flex-col gap-5">
                                <p className="text-[16px] font-[500] leading-[24px]"> Message </p>
                                <input type="text" id="name" placeholder="Hi! i’d like to ask about" required className="w-full xl:w-[528.75px] h-[120px] border-[1px] border-[#9F9F9F] rounded-[10px] pl-4" />
                            </div>

                            <button className="ml-2 w-[150px] py-3 text-[12px] xl:w-[237px] xl:h-[55px] bg-[#B88E2F] text-secondary xl:text-[16px] rounded-[5px]"> Submit </button>
                        </div>
                    </div>

                </div>
            </div>


            {/* 3rd section */}
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

export default Contact;