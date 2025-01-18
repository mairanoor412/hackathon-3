import Image from "next/image";


const Furniture = () => {
    return (
        <div className="overflow-x-hidden bg-secondary">
            {/* heading */}
            <div className="grid grid-cols-1 place-items-center py-14">
                <p className="text-[10px] sm:text-[14px] md:text-[16px] xl:text-[20px] text-[#666666]"> Share your setup with </p>
                <h1 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-[700] xl:text-[40px] "> #FuniroFurniture </h1>
            </div>
            {/* container */}
            <div className=" grid grid-cols-12 grid-rows-2 gap-1 sm:gap-2 lg:gap-3  xl:h-auto">

                {/* 1 */}
                <div className="grid row-span-1 place-items-end col-span-1">
                    <Image src="/image/furniture/1-Rectangle 36.png" alt="image" width={274} height={382} className="lg:w-[274px] h-[127px] sm:h-[191px] md:h-[271px] lg:h-[382px]" />
                </div>

                {/* 2 */}
                <div className="grid row-span-1 place-items-end col-span-4">
                    <Image src="/image/furniture/2-Rectangle 38.png" alt="image" width={470} height={312} className="w-[470px] h-[104px] sm:h-[156px] md:h-[236px] lg:h-[312px] " />
                </div>

                {/* 3 */}
                <div className="row-span-2 grid place-items-center col-span-2">
                    <Image src="/image/furniture/3-Rectangle 40.png" alt="image" width={295} height={392} className="w-[295px] h-[130px] sm:h-[196px] md:h-[276px] lg:h-[392px]" />
                </div>

                {/* 4 */}
                <div className="grid row-span-1 place-items-end col-span-3">
                    <Image src="/image/furniture/4-Rectangle 43.png" alt="image" width={350} height={348} className="w-[350px] h-[116px] sm:h-[174px] md:h-[254px] lg:h-[348px]" />
                </div>

                {/* 5 */}
                <div className="grid row-span-1 place-items-end col-span-2 ">
                    <Image src="/image/furniture/5-Rectangle 45.png" alt="image" width={425} height={433} className="W-[425PX] h-[144px] sm:h-[216px] md:h-[296px] lg:h-[433PX]" />
                </div>

                {/* 6 */}
                <div className="col-span-2">
                    <Image src="/image/furniture/6-Rectangle 37.png" alt="image" width={381} height={323} className="w-[381px] h-[107px] sm:h-[161px] md:h-[241px] lg:h-[323px]" />
                </div>

                {/* 7 */}
                <div className="col-span-3">
                    <Image src="/image/furniture/7-Rectangle 39.png" alt="image" width={344} height={242} className="w-[344px] h-[80px] sm:h-[121px] md:h-[201px] lg:h-[242px]" />
                </div>

                {/* 8 */}
                <div className="col-span-2">
                    <Image src="/image/furniture/8-Rectangle 41.png" alt="image" width={230} height={242} className="w-[230px] h-[80px] sm:h-[121px] md:h-[201px] lg:h-[242px]" />
                </div>

                {/* 9 */}
                <div className="grid row-span-1 col-span-2  ">
                    <Image src="/image/furniture/9-Rectangle 44.png" alt="image" width={258} height={196} className="w-[258px] h-[65px] sm:h-[98px] md:h-[178px] lg:h-[196px]" />
                </div>


            </div>
        </div>
    )
}

export default Furniture;