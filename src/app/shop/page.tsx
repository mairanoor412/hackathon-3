"use client"
import { FaGreaterThan } from "react-icons/fa6";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiViewGrid } from "react-icons/hi";
import { LuRectangleHorizontal } from "react-icons/lu";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlSupport } from "react-icons/sl";
import { client } from "@/sanity/lib/client";
import ProductListing from "../components/product-listing/product-listing";
import { useEffect, useState } from "react";
import { Product } from "../utils/types";

// interface Product {
//     _id: number;
//     title: string;
//     price: number;
//     productImage: any;
//     tags: string;
//     dicountPercentage: number;
//     description: string;
//     isNew: boolean;
// }

const Shop = () => {
    const [data, setdata] = useState<Product[]>([]);
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)


    useEffect(() => {
        const fetchData = async () => {
            const query = ` *[_type=='product']{
                     _id,
                    title,
                     price,
                     "productImage": productImage.asset->url,
                     tags[3],
                     dicountPercentage,
                     description,
                     isNew,
                 }`

            const response = await client.fetch(query);
            setdata(response);
            console.log(response);
            setloading(false);
        }
        fetchData()
    }, [])

    const selectPageHandler =(selectedPage:number)=>{
        if(selectedPage>=1 && selectedPage<= data.length/8 && selectedPage !== page)
        setpage(selectedPage)
    }

    return (
        <div>{loading ? (
            <div className="h-[100vh] w-full flex justify-center items-center bg-secondary ">
               <span className="loading loading-spinner loading-xs text-primary"></span>
                <span className="loading loading-spinner loading-sm  text-[#B88E2F]"></span>
                <span className="loading loading-spinner loading-md  text-primary"></span>
                <span className="loading loading-spinner loading-lg  text-[#B88E2F]"></span>
            </div>
        ) : (
            <div className="overflow-x-hidden bg-secondary">
            {/* 1st section shop Banner*/}
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
                            <p className="font-[400] text-[20px] text-primary "> Filter </p>
                        </div>
                        <HiViewGrid className="lg:size-6 text-primary" />
                        <div className="w-[18px] h-[20px] border-y-[1px] border-primary flex justify-center items-center">
                            <LuRectangleHorizontal className="lg:size-6 text-primary" />
                        </div>
            
                        <div className="pl-2 lg:w-[237px] h-[37px] border-l-[2px] border-[#9F9F9F] flex items-center justify-end ">
                            <p className="font-[400] text-[16px] text-primary"> Showing 1–16 of 32 results </p>
                        </div>
                    </div>
            
                    {/* right col*/}
                    <div className="flex items-center md:ml-auto gap-2 sm:gap-5 ">
                        <div className="gap-3 lg:w-[126px] flex items-center justify-between">
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] text-primary"> Show </p>
                            <p className="w-[55px] h-[55px] bg-secondary text-[#9F9F9F] flex items-center justify-center"> 16 </p>
                        </div>
            
                        <div className="w-[205px] lg:w-[288px] flex items-center justify-between">
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] text-primary"> Short by </p>
                            <p className="w-[130px] lg:w-[188px] h-[55px] bg-secondary text-[#9F9F9F] flex items-center pl-7"> Default </p>
                        </div>
            
                    </div>
                </div>
            </div>
            
            {/*3rd section Product Listing */}
            
            <div className="xl:w-[1244px] xl:m-auto pt-14 ">
                {data.length > 0 && (
                    <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-[5px]">
                        {data.slice(page*9-9, page*9).map((product: Product) => (
                            <ProductListing product={product} key={product._id} />
                        ))}
                    </div>
                )}
            
            </div>
            {/* pagination */}
            {data.length > 0 && <div>
                <div className="h-[90px] flex justify-center items-end gap-[8px] md:gap-[38px] mt-10">
                   {[...Array(data.length/8)].map((_, i)=>{
                    return(
                        <div key={i}>
                       <span  onClick={()=>selectPageHandler(i+1)} className={`text-[20px] text-primary border-[1px] border-[#F9F1E7] w-[60px] h-[60px] flex justify-center items-center  rounded-[10px] cursor-pointer ${page === i+1 ? "bg-[#B88E2F] text-secondary" : ""}` }  > {i+ 1}  </span>
                       </div>
                    )
                   })}
               
                <div className="">
                    <p onClick={()=>selectPageHandler(page + 1)} className={`text-[20px] text-primary border-[1px] border-[#F9F1E7] w-[98px] h-[60px] flex justify-center items-center bg-[#F9F1E7] rounded-[10px]  cursor-pointer ${page < data.length /8 ? "" : "opacity-10"}`} > Next </p>
                </div>
            
            </div>
                </div>}
            
            
            
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

        )}</div>
    )
}

export default Shop;




