import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";


const Furniture = async () => {
  const query = ` *[_type=='product'][15...24]{
        _id,
        "productImage": productImage.asset->url
}`
  const data = await client.fetch(query);
  console.log(data);






  return (
    <div className="overflow-x-hidden bg-secondary">
      {/* heading */}
      <div className="grid grid-cols-1 place-items-center py-14">
        <p className="text-[10px] sm:text-[14px] md:text-[16px] xl:text-[20px] text-[#666666]"> Share your setup with </p>
        <h1 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-[700] xl:text-[40px] text-primary "> #FuniroFurniture </h1>
      </div>
      {/* container */}
      <div className=" grid grid-cols-12 grid-rows-2 gap-1 sm:gap-2 lg:gap-3  xl:h-auto">


        {/* 1 */}
        <div className="grid row-span-1 place-items-end col-span-1 transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out">
          <Link href={`/single-product/${data[0]._id}`}>
            <Image src={data[0].productImage} alt="image" width={274} height={382} className="lg:w-[274px] h-[127px] sm:h-[191px] md:h-[271px] lg:h-[382px]" />
          </Link>
        </div>


        {/* 2 */}
        <div className="grid row-span-1 place-items-end col-span-4 transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out">
          <Link href={`/single-product/${data[6]._id}`}>
            <Image src={data[6].productImage} alt="image" width={470} height={312} className="w-[470px] h-[104px] sm:h-[156px] md:h-[236px] lg:h-[312px] " />
          </Link>
        </div>


        {/* 3 */}
        <div className="row-span-2 grid place-items-center col-span-2 transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out">
          <Link href={`/single-product/${data[1]._id}`}>
            <Image src={data[1].productImage} alt="image" width={295} height={392} className="w-[295px] h-[130px] sm:h-[196px] md:h-[276px] lg:h-[392px]" />
          </Link>
        </div>

        {/* 4 */}
        <div className="grid row-span-1 place-items-end col-span-3 transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out">
          <Link href={`/single-product/${data[3]._id}`}>
            <Image src={data[3].productImage} alt="image" width={350} height={348} className="w-[350px] h-[116px] sm:h-[174px] md:h-[254px] lg:h-[348px]" />
          </Link>

        </div>



        {/* 5 */}
        <div className="grid row-span-1 place-items-end col-span-2 transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out ">
          <Link href={`/single-product/${data[4]._id}`}>
            <Image src={data[4].productImage} alt="image" width={425} height={433} className="W-[425PX] h-[144px] sm:h-[216px] md:h-[296px] lg:h-[433PX]" />
          </Link>

        </div>

        {/* 6 */}
        <div className="col-span-2 transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out">
          <Link href={`/single-product/${data[5]._id}`}>
            <Image src={data[5].productImage} alt="image" width={381} height={323} className="w-[381px] h-[107px] sm:h-[161px] md:h-[241px] lg:h-[323px]" />
          </Link>

        </div>

        {/* 7 */}
        <div className="col-span-3 transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out">
          <Link href={`/single-product/${data[2]._id}`}>
            <Image src={data[2].productImage} alt="image" width={344} height={242} className="w-[344px] h-[80px] sm:h-[121px] md:h-[201px] lg:h-[242px]" />
          </Link>
        </div>


        {/* 8 */}
        <div className="col-span-2 transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out">
          <Link href={`/single-product/${data[7]._id}`}>
            <Image src={data[7].productImage} alt="image" width={230} height={242} className="w-[230px] h-[80px] sm:h-[121px] md:h-[201px] lg:h-[242px]" />
          </Link>
        </div>


        {/* 9 */}
        <div className="grid row-span-1 col-span-2 transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out ">
          <Link href={`/single-product/${data[8]._id}`}>
            <Image src={data[8].productImage} alt="image" width={258} height={196} className="w-[258px] h-[65px] sm:h-[98px] md:h-[178px] lg:h-[196px]" />
          </Link>
        </div>


      </div>
    </div>
  )
}

export default Furniture;











// const sizes = [
//   { colSpan: "col-span-1", rowSpan: "row-span-1", width: 274, height: 382 },
//   { colSpan: "col-span-2", rowSpan: "row-span-2", width: 295, height: 392 },
//   { colSpan: "col-span-3", rowSpan: "row-span-1", width: 344, height: 242 },
//   { colSpan: "col-span-3", rowSpan: "row-span-1", width: 350, height: 348 },
//   { colSpan: "col-span-2", rowSpan: "row-span-1", width: 425, height: 433 },
//   { colSpan: "col-span-2", rowSpan: "row-span-1", width: 381, height: 323 },
//   { colSpan: "col-span-4", rowSpan: "row-span-1", width: 470, height: 312 },
//   { colSpan: "col-span-2", rowSpan: "row-span-1", width: 230, height: 242 },
//   { colSpan: "col-span-2", rowSpan: "row-span-1", width: 258, height: 196 },
// ];

// return (
//   <div className="overflow-x-hidden bg-secondary">
//     {/* heading */}
//     <div className="grid grid-cols-1 place-items-center py-14">
//       <p className="text-[10px] sm:text-[14px] md:text-[16px] xl:text-[20px] text-[#666666]">
//         Share your setup with
//       </p>
//       <h1 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-[700] xl:text-[40px] text-primary">
//         #FuniroFurniture
//       </h1>
//     </div>

//     {/* container */}
//     <div className="grid grid-cols-12 grid-rows-2 gap-1 sm:gap-2 lg:gap-3 xl:h-auto">
//       {data.map((item:any, index:any) => (
//         <Link key={item._id} href={`/single-product/${item._id}`}>
//           <div
//             className={`grid place-items-center ${sizes[index].colSpan} ${sizes[index].rowSpan} transition-transform transform hover:scale-95 hover:translate-y-2 duration-500 ease-out`}
//           >
//             <Image
//               src={item.productImage}
//               alt="image"
//               width={sizes[index].width}
//               height={sizes[index].height}
//               className="w-full h-auto"
//             />
//           </div>
//         </Link>
//       ))}
//     </div>
//   </div>
// );


