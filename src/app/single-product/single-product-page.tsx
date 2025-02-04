"use client"
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { MdFacebook } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import ProductListing from "@/app/components/product-listing/product-listing";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { fetchProducts, productSlice, STATUSES } from "@/app/store/features/product";
import { useEffect, useState } from "react";
import { addToCart, delItem } from "../store/features/cart";


const SingleProductPage = ({ params }: { params: { productid: string } }) => {

    const dispatch = useDispatch<AppDispatch>();
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const { data, status } = useTypedSelector((state) => state.product);


    // // Initialize cartItem with default values
    // const [cartItem, setCartItem] = useState({
    //     dicountPercentage: 0, // Default value
    //     price: 0, // Default value
    //     qty: 1,
    // });

    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, [dispatch]);



    // const index = data.findIndex((item: any) => item._id === params.productid);
    // const product = data[index];

    // // Update cartItem when product is available
    // useEffect(() => {
    //     if (product) {
    //         setCartItem({
    //             dicountPercentage: product.dicountPercentage,
    //             price: product.price,
    //             qty: 1,
    //         });
    //     }
    // }, [product]);

    // // Render the "Product not found" message only after all hooks are called
    // if (!product) {
    //     return <p>Product not found</p>;
    // }




    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])


    const index = data.findIndex((item: any) => item._id === params.productid)
    const product = data[index]
    console.log(index);

    const [cartItem, setCartItem] = useState({
        _id: product?._id,
        title: product?.title,
        productImage: product?.productImage,
        tags: product?.tags,
        description: product?.description,
        dicountPercentage: product?.dicountPercentage,
        price: product?.price,
        qty: 1,

    });

    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    // Function to handle size selection
    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
    };

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            {/* 1st section */}
            {/* container */}
            <div className=" w-auto   bg-[#F9F1E7] ">
                <div className=" h-[70px] lg:h-[100px] grid grid-cols-1  justify-items-center md:justify-items-start md:pl-20 lg:pl-40 xl:pl-28">

                    <div className="flex items-center gap-4 md:gap-5 lg:gap-7">
                        <div className="w-[70px] md:w-[82px] flex justify-between items-center">
                            <Link href="/Home">
                                <p className="text-[#9F9F9F] text-[14px] lg:text-[16px] hover:text-[#B88E2F] hover:font-[700]"> Home </p>
                            </Link>
                            <FaAngleRight className="text-primary" />
                        </div>

                        <div className="w-[70px] md:w-[82px] flex justify-between items-center">
                            <Link href="/shop">
                                <p className="text-[#9F9F9F] text-[14px] lg:text-[16px] hover:text-[#B88E2F] hover:font-[700]"> Shop</p>
                            </Link>
                            <FaAngleRight className="text-primary" />
                        </div>

                        <div className="w-[140px] sm:w-[130px] lg:w-[142px] pl-2 border-l-[2px]  border-[#9F9F9F] flex items-center justify-end ">
                            <p className="text-primary text-[14px] lg:text-[16px]"> {product.title} </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* 2nd section */}
            <div className="py-8 pl-4 pr-4 sm:px-8 lg:pr-20">
                {/* grid container */}
                <div className="grid lg:grid-cols-2">
                    {/* left Image */}
                    <div className="flex lg:grid lg:grid-cols-5">

                        {/* small */}

                        <div className="lg:col-span-1 flex flex-col gap-8  md:gap-6 lg:gap-10">
                            {/* 1 */}
                            <div>
                                <Image src={product.productImage} alt="image" width={76} height={80} className="h-[60px] md:h-[80px] lg:h-[90px] lg:w-[90px] lg:ml-auto rounded-[10px]" />
                            </div>

                            {/* 2*/}
                            <div>
                                <Image src={product.productImage} alt="image" width={76} height={80} className="h-[60px] md:h-[80px] lg:h-[90px] lg:w-[90px]  lg:ml-auto  rounded-[10px]" />
                            </div>

                            {/* 3 */}
                            <div>
                                <Image src={product.productImage} alt="image" width={76} height={80} className="h-[60px] md:h-[80px] lg:h-[90px] lg:w-[90px]  lg:ml-auto  rounded-[10px]" />
                            </div>

                            {/* 4 */}
                            <div>
                                <Image src={product.productImage} alt="image" width={76} height={80} className="h-[60px] md:h-[80px] lg:h-[90px] lg:w-[90px]  lg:ml-auto  rounded-[10px]" />
                            </div>
                        </div>

                        {/* big image*/}
                        <div className="lg:col-span-4  ml-2 lg:ml-10 lg:mr-16  rounded-[10px] ">
                            <Image src={product.productImage} alt="image" width={423} height={350} className=" h-[350px] md:h-[400px] md:w-[600px] lg:w-[423px] lg:h-[500px] bg-[#F9F1E7]" />
                        </div>


                    </div>




                    {/* Right Data */}
                    <div className="flex flex-col gap-1 md:gap-2 pt-8  md:pl-5  ">
                        <h1 className="text-primary text-[30px] md:text-[35px] xl:text-[42px]"> {product.title} </h1>

                        {/* price */}
                        <div className="flex flex-col gap-1">
                            {/* discounted value */}
                            {cartItem.dicountPercentage > 0 && (
                                <p className="text-primary font-[500] text-[15px] lg:text-[24px]">  Rs {(cartItem.price - (cartItem.price * cartItem.dicountPercentage) / 100) * cartItem.qty} </p>
                            )}
                            <p className={`text-[20px] font-[600] text-primary   ${cartItem.dicountPercentage > 0 && "line-through text-[#7e7d7d] text-lg font-normal"}`}>Rs {cartItem.price * cartItem.qty}</p>
                        </div>

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
                        <p className="text-primary text-[10px] lg:text-[13px] md:leading-[19.5px] tracing-[1px] "> {product.description}</p>


                        {/* sizesss */}
                        <div className="flex gap-3">
                            {["L", "XL", "XS"].map((size) => (
                                <div
                                    key={size}
                                    onClick={() => handleSizeSelect(size)}
                                    className={`w-[30px] h-[30px] bg-[#F9F1E7] flex justify-center items-center rounded-[5px] cursor-pointer ${selectedSize === size ? "bg-[#B88E2F] text-white" : "text-primary"
                                        }`}
                                >
                                    <p className="text-[13px]">{size}</p>
                                </div>
                            ))}
                        </div>


                        {/* Size
                        <div className="flex flex-col pt-2 gap-2">
                            <p className="text-[#9F9F9F] text-[14px]"> Size </p>
                            <div  className="flex gap-3">
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
                        </div> */}

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
                            <div className="flex items-center justify-between px-2 w-[123px] h-[50px] lg:h-[64px] border-[1px] border-primary rounded-[10px]">
                                <button onClick={() => setCartItem({ ...cartItem, qty: cartItem.qty <= 1 ? 1 : --cartItem.qty })}>
                                    <GrFormSubtract />
                                </button>
                                <p className="text-[12px] lg:text-[16px] text-primary"> {cartItem.qty} </p>
                                <button onClick={() => setCartItem({ ...cartItem, qty: ++cartItem.qty })}>
                                    <IoMdAdd />
                                </button>
                            </div>

                            {/* add To Cart */}
                            <button onClick={()=>dispatch(addToCart(cartItem))} className="flex items-center justify-center w-[180px] lg:w-[215px] h-[50px] lg:h-[64px] border-[1px] border-primary rounded-[15px]">
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
                    <div className="flex items-center justify-between px-2 w-[123px] h-[50px] border-[1px] border-primary rounded-[10px]">
                        <button onClick={() => setCartItem({ ...cartItem, qty: cartItem.qty <= 1 ? 1 : --cartItem.qty })}>
                            <GrFormSubtract className="text-primary" />
                        </button>
                        <p className="text-[12px] text-primary"> {cartItem.qty} </p>
                        <button onClick={() => setCartItem({ ...cartItem, qty: ++cartItem.qty })}>
                            <IoMdAdd className="text-primary" />
                        </button>
                    </div>

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


            {/* 3rd section Additional information */}
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
                <Link href={`/single-product/${product._id}`}>
                    <Image key={index} src={product.productImage} alt="image" width={605} height={348} className={`bg-[#F9F1E7] w-[605px] h-[348px]  mx-auto md:mx-0 rounded-[10px] ${index === 1 ? "mr-auto" : "lg:ml-auto"}`} />
                </Link>

                <Link href={`/single-product/${product._id}`}>
                    <Image key={index} src={product.productImage} alt="image" width={605} height={348} className={`bg-[#F9F1E7] w-[605px] h-[348px]  mx-auto md:mx-0 rounded-[10px] ${index === 1 ? "mr-auto" : "lg:ml-auto"}`} />
                </Link>
            </div>


            <hr className="border-[1px] border-[1px solid #D9D9D9] my-16"></hr>

            {/* 4th related product section */}

            {/* heading */}
            <div className="grid grid-cols-1 place-items-center ">
                <h1 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-[500] xl:text-[36px] "> Related Products </h1>
            </div>

            {/* product listing */}
            <div className="xl:w-[1244px] xl:m-auto pt-14 ">
                <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 rounded-[5px]">
                    {data.slice(0, 3).map((product: any) => (
                        <ProductListing product={product} key={product._id} />
                    ))}
                </div>
            </div>

            {/* button */}
            <Link href="/shop">
                <div className=" flex justify-center w-[245px]  border-[1px] border-[#B88E2F]  rounded-[5px] m-auto my-10  hover:bg-[#B88E2F] transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-2px]">
                    <button className="w-[245px] py-[12px] text-[16px] font-[600] text-[#B88E2F] hover:text-secondary hover:font-[700] "> Show More</button>
                </div>
            </Link>
        </div>
    )
}
export default SingleProductPage;