"use client"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Rooms {
    _id: number;
    productImage: any
}

const Rooms = () => {
    const [data, setdata] = useState<Rooms[]>([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true);
        const fetchData = async () => {
            try {
                const query = `*[_type =='product']{
                  _id,
                "productImage": productImage.asset->url
                   }`
                const response = await client.fetch(query);
                console.log(response);

                setdata(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setloading(false);
            }

        };
        fetchData();
    }, []);



    // Carousel setting
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>{loading ? (
            <div className="h-100vh w-full flex justify-center items-center bg-secondary">
                <p className="text-primary">Loading...</p>
            </div>
        ) : (
            <div className="overflow-x-hidden w-full h-[450px] sm:h-[550px] md:h-[600px] lg:h-[670px] flex flex-col justify-center items-center bg-[#FCF8F3]">
                <div className=" grid grid-cols-2">

                    {/* left data */}

                    <div className=" flex flex-col justify-center items-center min-w-[100px] col-span-1 gap-3 lg:gap-10 lg:ml-10 py-10 px-16 xl:px-32">
                        <div className="flex flex-col gap-5">
                            <h1 className="w-[110px] text-[12px] font-[700] sm:text-[20px]   md:text-[30px] sm:w-[190px] md:w-[300px] lg:w-[400px] lg:text-[36px] lg:leading-[48px] text-[#3A3A3A]  xl:w-[422px] xl:text-[40px]"> 50+ Beautiful rooms inspiration </h1>
                            <p className="w-[120px] text-[8px]  font-[500] sm:text-[10px]   md:text-[12px] sm:w-[190px] md:w-[300px]  text-[#616161] lg:w-[334px] lg:text-[14px]  xl:w-[368px] xl:text-[16px]"> Our designer already made a lot of beautiful prototipe of rooms that inspire you </p>
                            <Link href="/shop">
                                <button className=" w-[70px] py-[4px] text-[7px] rounded-[5px] sm:w-[88px] sm:py-[6px] sm:text-[8px] md:w-[118px] md:py-[9px] md:text-[12px] lg:w-[176px] lg:py-[12px] lg:text-[16px] bg-[#B88E2F]  hover:text-secondary hover:font-[700]  font-[600] transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-2px] "> Explore More </button>
                            </Link>
                        </div>
                    </div>

                    {/* carousel */}
                    <Slider {...settings}>
                        {data.slice(1, 8).map((product: Rooms) => (
                            <div className="key={product._id}">
                                {/* image-1 */}

                                <div className=" relative">
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





                                    <div>
                                        <div key={product._id}>
                                            <Image src={product.productImage} alt="image" width={404} height={330} className="w-[404px] h-[330px] pr-4 md:pr-1 sm:h-[450px] md:h-[500px] lg:h-[582px]" />
                                        </div>
                                    </div>

                                </div>

                            </div>



                        ))}
                    </Slider>




                </div>
            </div>
        )}</div>
    )
}

export default Rooms;


{/* <Image src={data[1]?.productImage} alt="image" width={404} height={330} className="w-[404px] h-[330px] pr-4 md:pr-1 sm:h-[450px] md:h-[500px] lg:h-[582px]" /> */ }
{/* <span className="loading loading-spinner loading-xs text-primary"></span>
                <span className="loading loading-spinner loading-sm  text-primary"></span>
                <span className="loading loading-spinner loading-md  text-primary"></span>
                <span className="loading loading-spinner loading-lg  text-primary"></span> */}

//          {/* image-2 */}
//          <Link href={`/single-product/${data[0]?._id}`}>
//          <div className="pr-4 md:px-5">
//              <Image src={data[0]?.productImage} alt="image" width={372} height={330} className="w-[372px] h-[330px] pr-4 md:pr-1 sm:h-[450px] md:h-[440px] lg:h-[486px]" />
//          </div>
//      </Link>
//  </div>

//  {/* image-3 */}
//  <Link href={`/single-product/${data[2]?._id}`}>
//      <div className=" ">
//          <Image src={data[2]?.productImage} alt="image" width={372} height={330} className="w-[372px] h-[330px] pr-5 md:pr-4 sm:h-[450px] md:h-[440] lg:h-[486px]" />
//      </div>
//  </Link>

//  {/* image-4 */}
//  <Link href={`/single-product/${data[3]?._id}`}>
//      <div>
//          <Image src={data[3]?.productImage} alt="image" width={372} height={330} className="w-[372px] h-[330px] pr-4 md:pr-5 sm:h-[450px] md:h-[440] lg:h-[486px]" />
//      </div>
//  </Link>

//  {/* image-5 */}
//  <Link href={`/single-product/${data[4]?._id}`}>
//      <div>
//          <Image src={data[4]?.productImage} alt="image" width={372} height={330} className="w-[372px] h-[330px] pr-4 md:pr-5 sm:h-[450px] md:h-[440] lg:h-[486px]" />
//      </div>
//  </Link>

//  {/* image-6 */}
//  <Link href={`/single-product/${data[5]?._id}`}>
//      <div>
//          <Image src={data[5]?.productImage} alt="image" width={372} height={330} className="w-[372px] h-[330px] pr-4 md:pr-5 sm:h-[450px] md:h-[440] lg:h-[486px]" />
//      </div>
//  </Link>

//  {/* image-7 */}
//  <Link href={`/single-product/${data[6]?._id}`}>
//      <div>
//          <Image src={data[6]?.productImage} alt="image" width={372} height={330} className="w-[372px] h-[330px] pr-4 md:pr-5 sm:h-[450px] md:h-[440] lg:h-[486px]" />
//      </div>
//  </Link>

//  {/* image-8*/}
//  <Link href={`/single-product/${data[7]?._id}`}>
//      <div>
//          <Image src={data[7]?.productImage} alt="image" width={372} height={486} className="w-[372px] h-[330px] pr-4 md:pr-5 sm:h-[450px] md:h-[440] lg:h-[486px]" />
//      </div>
// </Link>
// </div>