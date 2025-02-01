"use client"
import Link from "next/link";
import ProductListing from "../product-listing/product-listing";
import { useEffect } from "react";
import { fetchProducts } from "@/app/store/features/product";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { Product } from "@/app/utils/types";




const OurProductPage = ()=>{

    const dispatch = useDispatch<AppDispatch>();
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const { data, status } = useTypedSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return(
        <div>
             {/* heading */}
             <div className="grid grid-cols-1 place-items-center py-14">
                <h1 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-[700] xl:text-[40px] text-primary"> Our Products </h1>
            </div>

            {/* Cards Product Listing*/}
            <div className="xl:w-[1244px] xl:m-auto pt-14 ">
                <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-[5px]">
                    {data.slice(0, 9).map((product:Product) => (
                        <ProductListing product={product} key={product._id} />
                    ))}
                </div>
            </div>


            {/* Show more */}
            <Link href="/shop">
                <div className=" flex justify-center w-[245px]  border-[1px] border-[#B88E2F]  rounded-[5px] m-auto my-10  hover:bg-[#B88E2F] transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-2px]">
                    <button className="w-[245px] py-[12px] text-[16px] font-[600] text-[#B88E2F] hover:text-secondary hover:font-[700] "> Show More</button>
                </div>
            </Link>
        </div>
    )
}
export default OurProductPage;