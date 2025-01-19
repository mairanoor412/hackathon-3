import Image from "next/image";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

// import { product } from "@/sanity/schemaTypes/product";


const OurProducts = async () => {
    const query = ` *[_type=='product'][0...8]{
        _id,
        title,
        price,
        "productImage": productImage.asset->url,
        tags[3],
        dicountPercentage,
        description,
        isNew,
}`

    const data = await client.fetch(query);
    console.log(data);


    return (
        <div className=" overflow-hidden w-full bg-secondary">
            {/* heading */}
            <div className="grid grid-cols-1 place-items-center py-14">
                <h1 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-[700] xl:text-[40px] "> Our Products </h1>
            </div>

            {/* cards */}
            <div className="xl:w-[1236px] xl:m-auto  ">
                {/* container */}
             <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-[5px]">
             {data.map((product:any)=>(
               

                <div key={product._id} className="w-[285px] h-[446px] bg-[#F4F5F7] rounded-[5px]  relative transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -30% </div>

                {/* Add to Card */}
                <div className="// w-[285px] h-[446px] opacity-0 transform translate-y-40 transition-all duration-200 ease-in-out hover:translate-y-0 hover:bg-[#3A3A3A] hover:opacity-[72%] absolute inset-0 rounded-[5px]">
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


             ))}

             </div>
            </div>
             
             {/* Show more */}
             <Link href="/shop" target="_blank">
            <div className=" flex justify-center w-[245px]  border-[1px] border-[#B88E2F]  rounded-[5px] m-auto my-10  hover:bg-[#B88E2F] transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-2px]">
                <button className="w-[245px] py-[12px] text-[16px] font-[600] text-[#B88E2F] hover:text-secondary hover:font-[700] "> Show More</button>
            </div>
            </Link>
        </div>
    )
}
export default OurProducts;