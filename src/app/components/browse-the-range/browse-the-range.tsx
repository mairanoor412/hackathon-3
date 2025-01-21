import { client } from "@/sanity/lib/client";
import { product } from "@/sanity/schemaTypes/product";
import Image from "next/image";
import Link from "next/link";




const BrowseTheRange = async () => {
    const query = `*[_type=='product'][0...23]{
            _id,
            "productImage": productImage.asset->url
    }`
    const data = await client.fetch(query);
    console.log(data);

    return (
        <div className="overflow-x-hidden w-full  bg-secondary">
            {/* heading */}
            <div className="grid grid-cols-1 place-items-center py-14">
                <h1 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-[700] xl:text-[32px] text-primary"> Browse The Range </h1>
                <p className="text-[10px] sm:text-[14px] md:text-[16px] xl:text-[20px] text-[#666666]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            {/* cards */}
            
            <div className="h-auto xl:w-[1183px] xl:m-auto">
                {/* container */}
                <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2  lg:grid-cols-3">

                    {/* card-1 */}
                    <Link href={`/single-product/${data[20]._id}`}>
                    <div className="transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out">
                        <Image src={data[20].productImage} alt="image" width={381} height={440} className="w-[285px] h-[480px] xl:w-[381px] rounded-[15px]" />
                        <div className="w-[285px]  xl:w-[381px] flex justify-center">
                            <p className="text-[18px] md:text-[20px] xl:text-[24px] font-[600] text-[#333333] pt-3"> Dining </p>
                        </div>
                    </div>
                    </Link>


                    {/* card-2 */}
                    <Link href={`/single-product/${data[12]._id}`}>
                    <div className="transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out">
                        <Image src={data[12].productImage} alt="image" width={381} height={440} className="w-[285px] h-[480px] xl:w-[381px] rounded-[15px]" />
                        <div className="w-[285px] xl:w-[381px] flex justify-center">
                            <p className="text-[18px] md:text-[20px] xl:text-[24px] font-[600] text-[#333333] pt-3"> Living </p>
                        </div>
                    </div>
                    </Link>


                    {/* card-3 */}
                    <Link href={`/single-product/${data[18]._id}`}>
                    <div className="transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out md:hidden lg:block ">
                        <Image src={data[18].productImage} alt="image" width={381} height={440} className="w-[285px] h-[480px] xl:w-[381px] rounded-[15px]" />
                        <div className="w-[285px] xl:w-[381px] flex justify-center">
                            <p className="text-[18px] md:text-[20px] xl:text-[24px] font-[600] text-[#333333] pt-3"> Bedroom </p>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        

        </div >
    )
}

export default BrowseTheRange;


