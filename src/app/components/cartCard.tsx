
import { AiFillDelete } from "react-icons/ai";
import Image from "next/image"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addCart, delItem, subtractCart } from "../store/features/cart";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

const CartCard = () => {
    const cartArray = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch()
    console.log("abc", cartArray.length);
    
    return (

       <div>
        {cartArray.length >=  1 &&
             cartArray.map((item, i)=>(
           


            <div key={i} className="flex flex-col items-center lg:flex-row md:pt-8 xl:pt-16  md:gap-6 lg:gap-0">
                <div className="md:bg-[#F9F1E7] rounded-[10px] md:w-[150px] md:h-[130px] lg:w-[108px] lg:h-[105px]">
                    <Image src={item.productImage} alt="image" width={130} height={100} className=" md:w-[150px] md:h-[130px] lg:w-[108px] lg:h-[105px]" />
                </div>
                <div className="lg:w-[573px] md:flex md:gap-5 lg:gap-0 lg:justify-around ">
                    <div className=" flex items-center gap-3 md:gap-5 lg:gap-10">
                        <p className="text-[#9F9F9F] text-[12px] md:text-[14px] xl:text-[16px]"> {item.title} </p>
                        <p className="text-[#9F9F9F] text-[12px] md:text-[14px] xl:text-[16px]"> {item.price - (item.price * item.dicountPercentage)/100}  </p>
                    </div>
                    <div className="flex items-center gap-3 lg:gap-10 md:gap-5 pt-3 md:pt-0 ">
                        <div className="flex items-center gap-[3px] ">
                            <GrFormSubtract  onClick={()=> dispatch(subtractCart(item))} />
                            <p className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] xl:w-[32px] xl:h-[32px] border-[1px] border-[#9F9F9F] rounded-[5px] flex justify-center items-center text-primary text-[12px] lg:text-[14px] xl:text-[16px]"> {item.qty} </p>
                            <IoMdAdd  onClick={()=> dispatch(addCart(item))} />
                        </div>
                        <p className="text-primary text-[14px] lg:text-[14px] xl:text-[16px]"> {item.dicountPercentage > 0 ? (item.price - ((item.price * item.dicountPercentage) / 100)) * item.qty : item.price * item.qty}  </p>
                        <div className="flex items-start  justify-start h-6">
                            <AiFillDelete onClick={()=> dispatch(delItem(item.uuid))} className="text-[#B88E2F] size-5 cursor-pointer lg:hidden"  />
                        </div>
                    </div>
                </div>
                <div className="flex items-start  justify-start h-7">
                    <AiFillDelete onClick={()=> dispatch(delItem(item.uuid))} className="text-[#B88E2F] lg:size-6 cursor-pointer hidden lg:block" />
                </div>


            </div>
        
        ))}

        </div>
    )
}
export default CartCard;