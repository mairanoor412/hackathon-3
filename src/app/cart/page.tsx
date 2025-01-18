import Image from "next/image"
import { FaGreaterThan } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlSupport } from "react-icons/sl";





const Cart = () => {
    return (
        <div className="overflow-x-hidden">

            {/* 1st section */}
            <div className="bg-[url('/image/shop/Rectangle-1.png')] h-[200px] md:h-[316px] bg-cover ">
                {/* heading */}
                <div className="h-[200px] md:h-[316px] flex flex-col justify-center items-center">

                    <Image src="/image/header/Meubel House_Logos-05.png" alt="logo" width={50} height={41} className="" />
                    <h1 className="text-primary text-[32px] sm:text-[36px] md:text-[48px] font-[500] xl:leading-[72px]"> Cart </h1>


                    <div className="gap-[2px] sm:gap-[5px] md:w-[121px] flex items-center justify-between">
                        <p className="text-[12px] md:text-[16px] font-[500]"> Home </p>
                        <FaGreaterThan className="size-2 md:size-3" />
                        <p className="text-[12px] md:text-[16px] font-[300]"> Cart </p>
                    </div>
                </div>
            </div>

            {/* second section */}
            <div className="min-w-[150px] xl:w-[1240px] xl:h-[525px] xl:mx-auto xl:my-auto  grid grid-cols-3">
                {/* left */}
                <div className="mt-5 mx-3 md:mt-8 xl:mt-16 lg:ml-20 lg:mr-14 xl:mx-0 xl:w-[817px] h-[215px] xl:pr-7  col-span-2">
                    <div className="bg-[#F9F1E7] h-[35px] md:h-[45px] xl:h-[55px] flex items-center justify-between md:justify-around">
                        <p className="text-primary font-[500] text-[10px] md:text-[14px] xl:text-[16px]"> Product </p>
                        <p className="text-primary font-[500] text-[10px] md:text-[14px] xl:text-[16px]"> Price </p>
                        <p className="text-primary font-[500] text-[10px] md:text-[14px] xl:text-[16px]"> Quantity </p>
                        <p className="text-primary font-[500] text-[10px] md:text-[14px] xl:text-[16px]">Subtotal</p>
                    </div>


                    <div className="flex flex-col items-center lg:flex-row md:pt-8 xl:pt-16  md:gap-6 lg:gap-0">
                        <div className="md:bg-[#F9F1E7] rounded-[10px] md:w-[150px] md:h-[130px] lg:w-[108px] lg:h-[105px]">
                            <Image src="/image/cart/Asgaard sofa 5.png" alt="image" width={130} height={100} className=" md:w-[150px] md:h-[130px] lg:w-[108px] lg:h-[105px]" />
                        </div>
                        <div className="lg:w-[573px] md:flex md:gap-5 lg:gap-0 lg:justify-around ">
                            <div className=" flex items-center gap-3 md:gap-5 lg:gap-10">
                                <p className="text-[#9F9F9F] text-[12px] md:text-[14px] xl:text-[16px]"> Asgaard sofa</p>
                                <p className="text-[#9F9F9F] text-[12px] md:text-[14px] xl:text-[16px]"> Rs. 250,000.00</p>
                            </div>
                            <div className="flex items-center gap-3 lg:gap-10 md:gap-5 pt-3 md:pt-0 ">
                                <div className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] xl:w-[32px] xl:h-[32px] border-[1px] border-[#9F9F9F] rounded-[5px] flex justify-center items-center">
                                    <p className=" text-primary text-[12px] lg:text-[14px] xl:text-[16px]"> 1</p>
                                </div>
                                <p className="text-primary text-[14px] lg:text-[14px] xl:text-[16px]"> Rs. 250,000.00</p>
                                <div className="flex items-start  justify-start h-6">
                                <AiFillDelete className="text-[#B88E2F] size-5 lg:hidden" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start  justify-start h-7">
                            <AiFillDelete className="text-[#B88E2F] lg:size-6 hidden lg:block" />
                        </div>


                    </div>
                </div>


                {/* right */}
                <div className="bg-[#F9F1E7] h-[200px] md:h-[280px] xl:w-[393px] xl:h-[390px] col-span-1 min-w-[50px] mr-2 flex flex-col items-center gap-2  md:gap-7 xl:gap-8 mt-5 md:my-8 lg:mr-20 xl:mt-16 py-2 ">
                    <h1 className="text-[16px] md:text-[25px] xl:text-[32px] font-[600] text-primary">Cart Totals</h1>
                    <div className="flex flex-col md:flex-row items-center gap-[1px] sm:gap-1 md:gap-4 xl:gap-10 pt-2 xl:pt-7">
                        <p className="text-primary font-[500] text-[14px]  xl:text-[16px]"> Subtotal</p>
                        <p className="text-[#9F9F9F] font-[500] text-[10px]  xl:text-[16px]"> Rs. 250,000.00</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-[1px] pt-[2px] sm:gap-1 md:gap-4 xl:gap-10">
                        <p className="text-primary font-[500] text-[14px]  xl:text-[16px]"> Total </p>
                        <p className="text-[#B88E2F] font-[500] text-[12px] xl:text-[20px]"> Rs. 250,000.00</p>
                    </div>

                    {/* button */}
                    <button className=" w-[95px] h-[30px] sm:w-[110px] sm:h-[40px] md:w-[170px] md:h-[45px] lg:w-[222px] lg:h-[58.95px] text-center text-primary text-[13px] mt-4 xl:text-[20px] border-[1px] border-primary rounded-[15px]"> Check Out</button>
                </div>

            </div>


            {/* 3rd section */}
            <div className="h-auto w-full bg-[#FAF3EA] py-[50px] lg:py-[100px] mt-[20px] lg:mt-[30px]">
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

export default Cart;