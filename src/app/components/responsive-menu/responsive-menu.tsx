import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }: any) => {
    return (
        <AnimatePresence mode="wait">

            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}

                    className="absolute top-10 left-0 w-full h-screen z-20"
                >
                    <div className="bg-[#B88E2F] opacity-80 py-10 m-6 rounded-3xl md:hidden">
                        <ul className="flex flex-col justify-center items-center gap-10 ">
                            <li className="text-[16px] font-[500] text-primary">
                                <Link href="/"  className="hover:underline hover:text-black"> Home </Link>
                            </li>
                            <li className="text-[16px] font-[500] text-primary">
                                <Link href="/shop"  className="hover:underline hover:text-black">  Shop </Link>
                            </li>
                            <li className="text-[16px] font-[500] text-primary">
                                <Link href="/blog"  className="hover:underline hover:text-black"> Blog </Link>
                            </li>
                            <li className="text-[16px] font-[500] text-primary">
                                <Link href="/contact"  className="hover:underline hover:text-black"> Contact </Link>
                            </li>

                        </ul>
                    </div>
                </motion.div>

            )}


        </AnimatePresence>
    )
}

export default ResponsiveMenu;






// transition={{ duration: 0.5 }}
