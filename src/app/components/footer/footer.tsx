


const Footer = () => {
    return (
        <div className=" overflow-x-hidden h-auto pb-10 bg-secondary">
            <hr className="w-full border-[1px] border-[#0000002B] mb-10"></hr>

            <div className="xl:w-[1240.01px] m-auto">

                <div className="grid  md:grid-cols-3">
                    {/* 1 */}
                    <div className=" lg:col-span-1 flex flex-col items-center xl:items-start">
                        <h1 className="text-[24px] font-[700] text-primary"> Funiro. </h1>
                        <p className="  w-[250px]  pt-4 pl-4 lg:w-[285px] xl:pl-0 xl:mt-5  text-[#9F9F9F] text-[16px]"> 400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                    </div>



                    {/* 2 */}
                    <div className="xl:flex xl:flex-row xl:w-[352px] xl:h-[312px] xl:justify-between">
                        <ul className="flex flex-col items-center gap-3 pt-5 xl:pt-0  xl:justify-between xl:items-start">
                            <li className="text-[#9F9F9F] text-[16px] font-[500] ">Links</li>
                            <li className="text-[16px] font-[500] text-primary">Home</li>
                            <li className="text-[16px] font-[500] text-primary">Shop</li>
                            <li className="text-[16px] font-[500] text-primary">About</li>
                            <li className="text-[16px] font-[500] text-primary">Contact</li>
                        </ul>

                        {/* 3 */}
                        <ul className="flex flex-col items-center gap-3 pt-5 lg:pt-0  xl:justify-between xl:pb-[70px] xl:items-start">
                            <li className="text-[#9F9F9F] text-[16px] font-[500]">Help </li>
                            <li className="text-[16px] font-[500] text-primary">Payment Options</li>
                            <li className="text-[16px] font-[500] text-primary"> Returns</li>
                            <li className="text-[16px] font-[500] text-primary">Privacy Policies</li>
                        </ul>
                    </div>

                    {/* 4 */}
                    <div className="flex flex-col items-center gap-3 xl:items-start xl:ml-10">
                        <p className="text-[#9F9F9F] text-[16px] font-[500] pt-5 xl:pt-0">Newsletter</p>

                        <div className="  flex flex-col xl:flex-row items-center gap-5 xl:items-start ">
                            <p className="text-[#9F9F9F] text-[14px] font-[400] xl:mt-9 border-b-[1px] border-primary pb-1">Enter Your Email Address </p>
                            <p className="text-[16px] font-[500] text-primary xl:mt-9 border-b-[1px] border-primary pb-[2px]"> SUBSCRIBE </p>
                        </div>

                    </div>

                </div>

                <hr className="w-full border-[1px] border-[#D9D9D9] mt-10"></hr>

                <p className="text-primary text-[16px] pt-8 text-center xl:pl-0">2023 furino. All rights reserved.</p>



            </div>

        </div>



    )
}

export default Footer;