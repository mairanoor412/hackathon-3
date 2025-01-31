
import { CiShare2 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/utils/types";



const ProductListing = ({ product }: { product:Product }) => {
    return (
        <div>
            
            <Link href={`/single-product/${product._id}`}>
                <div key={product._id} className="w-[285px] h-[446px] bg-[#F4F5F7] rounded-[5px]  relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                    <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -30% </div>

                    {/* Add to Card */}
                    <div className="// w-[285px] h-[446px] opacity-0 transform translate-y-20 transition-all duration-200 ease-in-out hover:translate-y-0 hover:bg-[#3A3A3A] hover:opacity-[72%] absolute inset-0 rounded-[5px]">
                        <div className="w-[252px] h-[96px] flex flex-col items-center gap-[24px] m-auto absolute top-[175px] left-[16px]  ">
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
                    </div>

                    <Image src={product.productImage} alt="image" width={285} height={301} className="w-[285px] h-[301px] rounded-t-[5px]" />
                    {/* bottom data */}
                    <div className=" h-[99px] px-3 mt-4">

                        <div className="flex flex-col gap-3">
                            <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> {product.title} </h1>
                            <p className="text-[16px] font-[500] text-[#898989]"> {product.tags} </p>
                        </div>

                        <div className="flex flex-row justify-between h-[30px] items-center mt-2 gap-3">
                            <p className="text-[20px] font-[600] text-[#3A3A3A]">Rs {product.price} </p>
                            <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                        </div>

                    </div>
                </div>
            </Link>

        </div>
    )
}
export default ProductListing;