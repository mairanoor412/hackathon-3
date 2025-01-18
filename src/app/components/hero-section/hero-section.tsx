


// const HeroSection = ()=>{
//     return(
//         <div className="w-full overflow-x-hidden">

//             {/* background image */}
//             <div className="bg-[url('/image/hero-section/scandinavian-interior-mockup-wall-decal-background-1.png')]  h-[40vh] bg-cover bg-center  sm:h-[60vh] md:h-screen lg:h-screen xl:h-[812.53px] ">

//             {/* content */}
//             <div className="relative sm:top-[100px] sm:left-[190px] md:left-[500px] lg:left-[730px] xl:w-[663px] xl:h-[443px] xl:bg-[#FFF3E3]  xl:top-[253px] xl:left-[739px] xl:rounded-[10px]">
//                 {/* container */}
//                 <div className="flex flex-col sm:gap-1 md:gap-5 lg:gap-6 xl:gap-2 xl:w-[561px] xl:h-[344px]  xl:mx-auto relative top-[50px] ">
//                     <p className="text-[10px] xl:text-[16px] xl:font-[600]"> New Arrival </p>
//                     <h1 className="text-[17px]  xl:w-[559px] xl:text-[52px] xl:font-[700] xl:text-[#B88E2F] xl:pr-40 xl:leading-[65px]"> Discover Our New Collection</h1>
//                     <p className="text-[12px] w-[300px] xl:w-[564px] xl:text-[18px] font-[500] text-[#333333] xl:pr-9"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
//                     <div className="xl:pt-9">
//                     <button className="xl:w-[222px] xl:bg-[#B88E2F] xl:text-[16px] xl:font-[700] xl:py-[25px] xl:text-secondary "> BUY Now </button>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection;

















const HeroSection = () => {
    return (
        <div className="w-full   overflow-x-hidden relative">

            {/* background image */}

            <div className="bg-[url('/image/hero-section/scandinavian-interior-mockup-wall-decal-background-1.png')] h-[250px] sm:h-[350px] md:h-[550px] lg:h-[600px] xl:h-[716.83px]  bg-cover bg-center   ">

                {/* content */}
                <div className="w-[150px] px-3 py-2 absolute top-[80px] right-[25px]  sm:w-[240px] sm:px-6 sm:py-3 sm:top-[95px] sm:right-0 sm:mr-3 md:w-[350px] md:px-5 md:pb-5  md:top-[200px] md:right-0 md:mr-10 lg:w-[450px] lg:px-10 lg:py-10 lg:top-[150px] lg:right-0 lg:mr-20   xl:w-[663px] xl:h-[443px] bg-[#FFF3E3]  xl:top-[165px] xl:left-[739px] rounded-[5px] sm:rounded-[10px]">
                    {/* container */}
                    <div className="flex flex-col gap-[2px] sm:gap-[4px] md:gap-[7px] lg:gap-[6px] xl:gap-2 xl:w-[561px] xl:h-[344px]  xl:mx-auto  ">
                        <p className="text-[6px] sm:text-[9px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-[600]"> New Arrival </p>
                        <h1 className="text-[10px] sm:text-[17px] md:text-[30px] lg:text-[45px] lg:leading-[55px] xl:w-[559px] xl:text-[52px] font-[700] text-[#B88E2F] xl:pr-40 xl:leading-[65px]"> Discover Our New Collection</h1>
                        <p className=" text-[7px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:w-[564px] xl:text-[18px] font-[500] text-[#333333] xl:pr-9"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <div className="xl:pt-9 lg:pt-4">
                            <button className="text-[7px] py-[3px] px-[10px] sm:text-[12px] sm:py-[4px] sm:px-[12px] md:text-[14px] md:py-[6px] md:px-[16px] lg:text-[16px] lg:py-[8px] lg:px-[20px] xl:w-[222px] bg-[#B88E2F] xl:text-[16px] xl:font-[700] xl:py-[25px] xl:text-secondary rounded-[5px] "> BUY Now </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;