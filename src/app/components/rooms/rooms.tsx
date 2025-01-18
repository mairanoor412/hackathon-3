import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";


const Rooms = () => {
    return (
        <div className="overflow-x-hidden w-full h-auto lg:h-[670px] flex flex-col justify-center items-center bg-[#FCF8F3]">
            <div className=" grid grid-cols-12 gap-3 md:gap-5 lg:gap-10">

                {/* left data */}

                <div className=" flex flex-col justify-center items-center min-w-[100px] col-span-5 gap-3 lg:gap-10 lg:ml-10 py-10 px-16 xl:px-32">
                    <div className="flex flex-col gap-5">
                        <h1 className="w-[110px] text-[12px] font-[700] sm:text-[20px]   md:text-[30px] sm:w-[190px] md:w-[300px] lg:w-[400px] lg:text-[36px] lg:leading-[48px] text-[#3A3A3A]  xl:w-[422px] xl:text-[40px]"> 50+ Beautiful rooms inspiration </h1>
                        <p className="w-[120px] text-[8px]  font-[500] sm:text-[10px]   md:text-[12px] sm:w-[190px] md:w-[300px]  text-[#616161] lg:w-[334px] lg:text-[14px]  xl:w-[368px] xl:text-[16px]"> Our designer already made a lot of beautiful prototipe of rooms that inspire you </p>
                        <button className=" w-[70px] py-[4px] text-[7px] rounded-[5px] sm:w-[88px] sm:py-[6px] sm:text-[8px] md:w-[118px] md:py-[9px] md:text-[12px] lg:w-[176px] lg:py-[12px] lg:text-[16px] bg-[#B88E2F]  hover:text-secondary hover:font-[700]  font-[600] transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-2px] "> Explore More </button>
                    </div>
                </div>

                {/* image-1 */}
                <div className="col-span-3 relative">
                    <div className="">
                        <div className="flex flex-row items-end absolute top-[165px] left-[5px] sm:top-[215px] sm:left-[7px] md:left-[10px] lg:top-[430px] lg:left-[8px] xl:top-[425px] xl:left-[20px] z-20 ">
                            <div className="w-[54px] h-[32px] sm:w-[72px] sm:h-[43px] md:w-[115px] md:h-[65px] lg:w-[170px] lg:h-[100px] xl:w-[217px] xl:h-[130px] bg-secondary opacity-[75%]  flex flex-col justify-center items-center ">
                                <div className="gap-[1px] md:gap-[5px] lg:h-[24px] flex items-center lg:gap-[8px]">
                                    <p className="text-[7px] sm:text-[8px] md:text-[12px] lg:text-[15px]"> 01 </p>
                                    <hr className="w-[5px] sm:w-[7px] border-[#616161] border-[1px] lg:w-[27px]"></hr>
                                    <p className="text-[7px] sm:text-[8px] md:text-[12px] lg:text-[16px]  font-[500]">Bed Room</p>
                                </div>

                                <p className="text-[#3A3A3A] text-[7px] sm:text-[11px] md:text-[14px] lg:text-[28px] font-[600]">Inner Peace</p>
                            </div>

                            <div className="lg:w-[48px] lg:h-[48px] bg-[#B88E2F] flex justify-center items-center">
                                <FaArrowRight className="text-secondary size-3 sm:size-4 md:size-5" />
                            </div>
                        </div>
                    </div>

                    <Image src="/image/rooms/Rectangle 24.png" alt="image" width={404} height={582} className="w-[404px] h-[221px] sm:h-[291px] md:h-[] lg:h-[582px]" />
                </div>

                {/* image-2 */}
                <div className="col-span-3">
                    <Image src="/image/rooms/Rectangle 25.png" alt="image" width={372} height={486} className="w-[372px] h-[173px] sm:h-[243px] md:h-[] lg:h-[486px]" />
                    <div className="flex flex-row pt-6 ">
                        <LuDot className="size-10 text-[#B88E2F]" />
                        <LuDot className="size-10 text-[#D8D8D8]" />
                        <LuDot className="size-10 text-[#D8D8D8]" />
                        <LuDot className="size-10 text-[#D8D8D8]" />
                    </div>
                </div>

                {/* image-3 */}
                <div className="col-span-1 ">
                    <Image src="/image/rooms/Rectangle 26.png" alt="image" width={372} height={486} className="w-[372px] h-[173px] sm:h-[243px] md:h-[] lg:h-[486px]" />
                </div>




            </div>
        </div>
    )
}

export default Rooms;




// sm:px-4 md:px-5