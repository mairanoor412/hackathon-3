import { FaGreaterThan } from "react-icons/fa6";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlSupport } from "react-icons/sl";

const ChectOut = () => {
    return (
        <div className="overflow-x-hidden">
            {/* first section */}
            <div className="bg-[url('/image/shop/Rectangle-1.png')] h-[200px] md:h-[316px] bg-cover ">
                {/* heading */}
                <div className="h-[200px] md:h-[316px] flex flex-col justify-center items-center">
                    <h1 className="text-primary text-[32px] sm:text-[36px] md:text-[48px] font-[500] xl:leading-[72px]"> Checkout </h1>

                    <div className="gap-[2px] sm:gap-[5px] md:w-[121px] flex items-center justify-between">
                        <p className="text-[12px] md:text-[16px] font-[500]"> Home </p>
                        <FaGreaterThan className="size-2 md:size-3" />
                        <p className="text-[12px] md:text-[16px] font-[300]"> Checkout </p>
                    </div>
                </div>
            </div>


            {/* second section */}
            <div className="grid lg:grid-cols-2 ">
                {/* left section */}
                <form>
                    <div className="flex flex-col gap-7 md:gap-9 items-center py-10 md:py-16">
                        <div className="flex flex-col gap-8">
                            <h1 className="font-[600] text-[36px] text-primary"> Billing details </h1>

                            <div className="flex flex-col sm:flex-row gap-8">
                                <div className="flex flex-col gap-3">
                                    <p className="font-[500] text-[16px] text-primary"> First Name </p>
                                    <input type="text" id="Fname" required className="w-[290px] sm:w-[211px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-2" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <p className="font-[500] text-[16px] text-primary"> Last Name </p>
                                    <input type="text" id="Lname" required className="w-[290px] sm:w-[211px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-2" />
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col gap-3">
                            <p className="font-[500] text-[16px] text-primary"> Company Name (Optional) </p>
                            <input type="text" id="company name" className="w-[290px] sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-2" />
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-[500] text-[16px] text-primary"> Country / Region </p>
                            <select id="country" required className="w-[290px] sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-2" >
                                <option value="" disabled selected> Sri Lanka </option>
                                <option value="USA">United States</option>
                                <option value="CAN">Canada</option>
                                <option value="UK">United Kingdom</option>
                                <option value="AUS">Australia</option>
                                <option value="IND">India</option>
                                <option value="GER">Germany</option>
                                <option value="FR">France</option>
                                <option value="JPN">Japan</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-[500] text-[16px] text-primary"> Street address </p>
                            <input type="text" id="address" required className="w-[290px] sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-2" />
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-[500] text-[16px] text-primary"> Town / City </p>
                            <input type="text" id="city" required className="w-[290px] sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-2" />
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-[500] text-[16px] text-primary">Province </p>
                            <select id="country" required className="w-[290px] sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] pl-2 pr-10" >
                                <option value="" disabled selected> Western Province</option>
                                <option value="USA">United States</option>
                                <option value="CAN">Canada</option>
                                <option value="UK">United Kingdom</option>
                                <option value="AUS">Australia</option>
                                <option value="IND">India</option>
                                <option value="GER">Germany</option>
                                <option value="FR">France</option>
                                <option value="JPN">Japan</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-[500] text-[16px] text-primary"> ZIP code </p>
                            <input type="text" id="zip code" required className="w-[290px] sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-2" />
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-[500] text-[16px] text-primary"> Phone </p>
                            <input type="number" id="phone" required className="w-[290px] sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-2" />
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-[500] text-[16px] text-primary"> Email address </p>
                            <input type="text" id="email" required className="w-[290px] sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-2" />
                        </div>

                        <div className="flex flex-col gap-3">

                            <input type="text" id="information" placeholder="Additional information" required className="w-[290px] sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-2 " />
                        </div>

                    </div>
                </form>



                {/* right section */}
                <div className="flex flex-col px-3 sm:px-7 md:px-24 lg:pl-12 lg:pr-20 py-10  lg:py-24 xl:pl-0 xl:pr-0 xl:w-[533px]">
                    <div className="flex justify-between">

                        {/* Product */}
                        <div className="flex flex-col gap-5">
                            <h1 className="font-[500] text-[24px] text-primary"> Product</h1>
                            <div className="flex items-center gap-1 md:gap-3">
                                <p className="text-[16px] text-[#9F9F9F]"> Asgaard sofa</p>
                                <p className="font-[500] text-[12px]"> X </p>
                                <p className="font-[500] text-[12px]"> 1 </p>
                            </div>
                            <p className="text-[16px] text-primary"> Subtotal</p>
                            <p className="text-[16px] text-primary"> Total</p>
                        </div>

                        {/* SubTotal */}
                        <div className="flex flex-col gap-5">
                            <h1 className="font-[500] text-[24px] text-primary"> Subtotal</h1>
                            <p className="text-[16px] text-primary"> Rs. 250,000.00</p>
                            <p className="text-[16px] text-primary"> Rs. 250,000.00</p>
                            <p className="font-[700] text-[24px] text-[#B88E2F]"> Rs. 250,000.00</p>
                        </div>
                    </div>

                    <hr className=" border-[1px] border-[border: 1px solid #D9D9D9] mt-10 mb-6"></hr>

                    {/* Direct Bank Transfer */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <p className="w-[14px] h-[14px] rounded-full bg-primary "></p>
                                <h1 className="text-[16px] text-primary"> Direct Bank Transfer </h1>
                            </div>
                            <p className="text-[#9F9F9F] text-[16px] font-[300]"> Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account. </p>
                        </div>

                        {/* direct bank */}
                        <div className="flex items-center gap-4">
                            {/* <p className="w-[14px] h-[14px] rounded-full border-[1px] border-[#9F9F9F] hover:bg-[#B88E2F]"></p> */}
                            <input type="radio" name="transfer" value="direct bank transfer" />
                            <p className="text-[#9F9F9F] text-[16px] font-[500]"> Direct Bank Transfer</p>

                        </div>

                        {/* cash on delivery */}
                        <div className="flex items-center gap-4">
                            <input type="radio" name="transfer" value="direct bank transfer" />
                            <p className="text-[#9F9F9F] text-[16px] font-[500]"> Cash On Delivery </p>
                        </div>

                        <p className="min-w-[100px] font-[300] text-[16px] text-primary"> Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-[600] text-[16px] text-primary"> privacy policy</span>.</p>

                        {/* place order */}
                        <button className="w-[318px] m-auto h-[64px] border-[1px] border-primary rounded-[15px] font-[400] text-[20px] text-primary my-5 flex justify-center items-center hover:bg-[#B88E2F] hover:text-secondary hover:font-[600]"> Place order</button>

                    </div>
                </div>
            </div>


            {/* 3rd section */}
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
    )
}

export default ChectOut;