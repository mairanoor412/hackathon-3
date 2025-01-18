import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { MdFacebook } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";



const SingleProduct = () => {
    return (
        <div className="overflow-x-hidden">
            {/* 1st section */}
            {/* container */}
            <div className=" w-auto   bg-[#F9F1E7] ">
                <div className=" h-[70px] lg:h-[100px] grid grid-cols-1  justify-items-center md:justify-items-start md:pl-20 lg:pl-40 xl:pl-28">

                    <div className="flex items-center gap-4 md:gap-5 lg:gap-7">
                        <div className="w-[70px] md:w-[82px] flex justify-between items-center">
                            <p className="text-[#9F9F9F] text-[14px] lg:text-[16px]"> Home </p>
                            <FaAngleRight className="text-primary" />
                        </div>

                        <div className="w-[70px] md:w-[82px] flex justify-between items-center">
                            <p className="text-[#9F9F9F] text-[14px] lg:text-[16px]"> Shop</p>
                            <FaAngleRight className="text-primary" />
                        </div>

                        <div className="w-[110px] sm:w-[130px] lg:w-[142px] border-l-[2px] border-[#9F9F9F] flex items-center justify-end ">
                            <p className="text-primary text-[14px] lg:text-[16px]"> Asgaard sofa </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* 2nd section */}
            <div className="py-8 px-4 sm:px-8">
                {/* grid container */}
                <div className="grid md:grid-cols-2">
                    {/* left Image */}
                    <div className="grid grid-cols-4 ">
                        {/* small */}
                        <div className="col-span-1 md:mx-auto lg:mx-0 lg:ml-auto  flex flex-col gap-1 sm:gap-2 lg:gap-8 xl:gap-10">
                            {/* 1 */}
                            <div>
                                <Image src="/image/single-product/Mask group (1).png" alt="image" width={76} height={80} />
                            </div>

                            {/* 2*/}
                            <div>
                                <Image src="/image/single-product/Mask group (2).png" alt="image" width={76} height={80} />
                            </div>

                            {/* 3 */}
                            <div>
                                <Image src="/image/single-product/Group 3.png" alt="image" width={76} height={80} />
                            </div>

                            {/* 4 */}
                            <div>
                                <Image src="/image/single-product/Group 4.png" alt="image" width={76} height={80} />
                            </div>
                        </div>

                        {/* big image*/}
                        <div className="bg-[#F9F1E7]  col-span-3 m-2 lg:ml-10 lg:mr-16 flex justify-center items-center rounded-[10px] ">
                            <Image src="/image/single-product/Asgaard sofa 3.png" alt="image" width={423} height={250} className="h-[250px]" />
                        </div>

                    </div>




                    {/* Right Data */}
                    <div className="flex flex-col gap-1 md:gap-2 pt-8  md:pl-5  ">
                        <h1 className="text-primary text-[30px] md:text-[35px] xl:text-[42px]"> Asgaard sofa </h1>
                        <p className="text-[#9F9F9F] font-[500] text-[15px] lg:text-[24px]"> Rs. 250,000.00 </p>

                        <div className="flex items-center justify-between py-2 sm:py-3 w-[250px] md:w-[290px]">
                            <div className="md:w-[124px] flex">
                                <IoIosStar className="text-[#FFC700]" />
                                <IoIosStar className="text-[#FFC700]" />
                                <IoIosStar className="text-[#FFC700]" />
                                <IoIosStar className="text-[#FFC700]" />
                                <IoIosStar className="text-[#FFC700]" />
                            </div>
                            <p className="text-[#9F9F9F] text-[13px]"> 5 Customer Review </p>
                        </div>

                        {/* paragraph */}
                        <p className="text-primary text-[10px] lg:text-[13px] md:w-[350px] lg:w-[420px] lg:leading-[19.5px] "> Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

                        {/* Size */}
                        <div className="flex flex-col pt-2 gap-2">
                            <p className="text-[#9F9F9F] text-[14px]"> Size </p>
                            <div className="flex gap-3">
                                <div className="w-[30px] h-[30px] bg-[#F9F1E7]  hover:bg-[#B88E2F]  text-primary hover:text-secondary flex justify-center items-center rounded-[5px]">
                                    <p className="text-[13px]"> L </p>
                                </div>

                                <div className=" w-[30px] h-[30px] bg-[#F9F1E7]  hover:bg-[#B88E2F]  text-primary hover:text-secondary flex justify-center items-center rounded-[5px]">
                                    <p className="text-[13px]"> XL </p>
                                </div>

                                <div className="w-[30px] h-[30px] bg-[#F9F1E7]  hover:bg-[#B88E2F]  text-primary hover:text-secondary flex justify-center items-center rounded-[5px]">
                                    <p className="text-[13px]"> XS </p>
                                </div>
                            </div>
                        </div>

                        {/* Color */}
                        <div className="flex flex-col gap-2 pt-3">
                            <p className="text-[#9F9F9F] text-[12px] md:text-[14px]"> Color </p>
                            <div className="flex gap-3">
                                <p className="w-[30px] h-[30px] rounded-full bg-[#816DFA] "></p>
                                <p className=" w-[30px] h-[30px] rounded-full bg-primary"></p>
                                <p className=" w-[30px] h-[30px] rounded-full bg-[#B88E2F]"></p>
                            </div>
                        </div>

                        <div className="hidden md:flex md:gap-3 py-5 lg:py-7">
                            {/* count button */}
                            <button className="flex items-center justify-between px-2 w-[123px] h-[50px] lg:h-[64px] border-[1px] border-primary rounded-[10px]">
                                <GrFormSubtract />
                                <p className="text-[12px] lg:text-[16px] text-primary"> 1 </p>
                                <IoMdAdd />
                            </button>

                            {/* add To Cart */}
                            <button className="flex items-center justify-center w-[180px] lg:w-[215px] h-[50px] lg:h-[64px] border-[1px] border-primary rounded-[15px]">
                                <p className="text-[15px] lg:text-[20px] text-primary"> Add To Cart </p>
                            </button>


                            {/* Compare */}
                            <button className="flex items-center justify-center w-[180px] lg:w-[215px] h-[50px] lg:h-[64px] border-[1px] border-primary rounded-[15px] gap-3">
                                <IoMdAdd />
                                <p className="text-[15px] lg:text-[20px] text-primary"> Compare</p>
                            </button>
                        </div>



                    </div>


                </div>

                {/* for mobile */}
                <div className="md:hidden flex py-7 sm:py-7 gap-2 sm:gap-3 ">
                    {/* count button */}
                    <button className="flex items-center justify-between px-2 w-[123px] h-[50px] border-[1px] border-primary rounded-[10px]">
                        <GrFormSubtract />
                        <p className="text-[12px] text-primary"> 1 </p>
                        <IoMdAdd />
                    </button>

                    {/* add To Cart */}
                    <button className="flex items-center justify-center w-[180px] h-[50px] border-[1px] border-primary rounded-[15px]">
                        <p className="text-[15px] text-primary"> Add To Cart </p>
                    </button>


                    {/* Compare */}
                    <button className="flex items-center justify-center w-[180px] h-[50px] border-[1px] border-primary rounded-[15px] gap-3">
                        <IoMdAdd />
                        <p className="text-[15px] text-primary"> Compare</p>
                    </button>
                </div>



                {/* bottom part */}
                <div className=" grid grid-cols-2">

                    <div className="md:col-span-1"> </div>
                    <div className="col-span-2 md:col-span-1 mt-7 flex gap-5 border-t-[1px] border-[#D9D9D9]">

                        <div className="pt-10 flex flex-col gap-2 md:gap-3">
                            <p className="text-[#9F9F9F] text-[16px]"> SKU </p>
                            <p className="text-[#9F9F9F] text-[16px]"> Category </p>
                            <p className="text-[#9F9F9F] text-[16px]"> Tags </p>
                            <p className="text-[#9F9F9F] text-[16px]"> Share </p>
                        </div>

                        <div className="pt-10 flex flex-col gap-2 md:gap-3">
                            <p className="text-[#9F9F9F] text-[16px]"> : </p>
                            <p className="text-[#9F9F9F] text-[16px]"> : </p>
                            <p className="text-[#9F9F9F] text-[16px]"> : </p>
                            <p className="text-[#9F9F9F] text-[16px]"> : </p>
                        </div>

                        <div className="pt-10 flex flex-col gap-2 md:gap-3">
                            <p className="text-[#9F9F9F] text-[16px]"> SS001 </p>
                            <p className="text-[#9F9F9F] text-[16px]"> Sofas </p>
                            <p className="text-[#9F9F9F] text-[16px]"> Sofa, Chair, Home, Shop </p>
                            <div className="flex flex-row items-center gap-4 pt-[1px]">
                                <MdFacebook size={22} />
                                <IoLogoLinkedin size={20} />
                                <AiFillTwitterCircle size={21} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* 3rd section */}
            <div>
                <hr className="border-[1px] border-[1px solid #D9D9D9] my-8"></hr>
                <div className="flex flex-col md:flex-row md:w-[649px] items-center justify-center md:justify-between mx-auto pt-3">
                    <p className="text-primary font-[500] text-[24px]"> Description </p>
                    <p className="text-[#9F9F9F] font-[500] text-[24px]"> Additional Information</p>
                    <p className="text-[#9F9F9F] font-[500] text-[24px]"> Reviews [5] </p>
                </div>

                <div className="px-4 sm:px-10 md:px-14 lg:w-[900px] xl:w-[1026px] flex flex-col gap-9 py-10 mx-auto text-justify">
                    <p className="text-[#9F9F9F] text-[16px]"> Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. </p>
                    <p className="text-[#9F9F9F] text-[16px]"> Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 px-4 sm:px-10 md:px-14 lg:px-5 xl:px-0">
                <Image src="/image/single-product/Mask group (3).png" alt="image" width={605} height={348} className=" bg-[#F9F1E7]  mx-auto md:mx-0 rounded-[10px] lg:ml-auto" />
                <Image src="/image/single-product/Mask group (4).png" alt="image" width={605} height={348} className=" bg-[#F9F1E7]  mx-auto md:mx-0 rounded-[10px]" />
            </div>

            <hr className="border-[1px] border-[1px solid #D9D9D9] my-16"></hr>

            {/* 4th related product section */}

             {/* heading */}
             <div className="grid grid-cols-1 place-items-center ">
                <h1 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-[500] xl:text-[36px] "> Related Products </h1>
            </div>

            {/* container */}
            <div  className="xl:w-[1236px] xl:m-auto pt-14">
                <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-[5px]">

                    {/* card-1 */}

                    <div className="w-[285px] h-[446px] bg-[#F4F5F7] rounded-[5px]  relative">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -30% </div>

                        <Image src="/image/products/1-image 1.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Syltherine </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Stylish cafe chair </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 2.500.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-2 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7] rounded-[5px] relative ">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -30% </div>

                        <Image src="/image/products/image 2.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />

                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4 bg-[#F4F5F7]">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Syltherine </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Stylish cafe chair </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 2.500.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-3 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative lg:hidden xl:block">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -50% </div>
                        <Image src="/image/products/3-image 3.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Lolito </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Luxury big sofa </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 7.000.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 14.000.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-4 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#2EC1AC] rounded-full absolute top-[18px] right-[15px] z-20"> New </div>
                        <Image src="/image/products/4-image 4.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Respira </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Outdoor bar table and stool </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]"> Rp 500.000 </p>

                            </div>

                        </div>
                    </div>

                    
                </div>
            </div>
            
            {/* button */}
            <div className=" flex justify-center mb-24 w-[245px]  border-[1px] border-[#B88E2F]  rounded-[5px] m-auto my-10">
                <button className="w-[245px] py-[12px] text-[16px] font-[600] text-[#B88E2F]"> Show More</button>
            </div>

        </div>
    )
}

export default SingleProduct