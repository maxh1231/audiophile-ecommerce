import Image from "next/image";
import Link from "next/link";
import { ItemType } from "@/utils/types";
import { useRouter } from "next/router";

interface props {
    cart: ItemType[],
    setCart: React.Dispatch<React.SetStateAction<ItemType[]>>,
    grandTotal: string
    setBackground: React.Dispatch<React.SetStateAction<string>>,
    setNumItems: React.Dispatch<React.SetStateAction<number>>,
}

const Confirmation = ({ cart, setCart, grandTotal, setBackground, setNumItems }: props) => {
    const router = useRouter();

    const returnUser = () => {
        setCart([]);
        setBackground("")
        localStorage.setItem('cart', '');
        setNumItems(0);
        router.push('/')
    }

    return (
        <section className="bg-[#FFFFFF] mx-[24px] px-6 py-6 rounded-lg">
            <div>
                <Image className="object-contain" src={'/assets/checkout/icon-order-confirmation.svg'} width={64} height={64} alt="confirmation" />
                <h2 className="my-6 text-black font-bold text-xl tracking-[0.8px]">THANK YOU<br />FOR YOUR ORDER</h2>
                <p className="text-black opacity-50 font-medium text-lg">You will receive an email confirmation shortly.</p>
            </div>
            <div className="my-6">
                <div className="bg-[#F1F1F1] rounded-t-lg">
                    {/* cart */}
                    {cart.length > 0 && (
                        <div className="flex items-center justify-around min-w-[80px] py-4">

                            <Image src={`${cart[0].img}`} width={64} height={64} alt="item" />
                            <div className="mr-20">
                                <h2 className="font-bold text-black ">{cart[0].name}</h2>
                                <p className="font-bold text-black text-[14px] opacity-50">$ {cart[0].price}</p>
                            </div>
                            <span className="text-black font-bold opacity-50 pr-6">x{cart[0].count}</span>

                        </div>
                    )}
                    {cart.length > 1 && (
                        <div className="flex justify-center border-t-[1px] mx-6">
                            <span className="text-black font-bold opacity-50 tracking-[-.2px] py-4">and {cart.length - 1} other item(s)</span>
                        </div>
                    )}
                </div>
                <div className="bg-black rounded-b-lg">
                    <div className="flex flex-col px-5 py-4">
                        <h2 className="mb-1 text-white font-medium opacity-50">GRAND TOTAL</h2>
                        <span className="mt-1 text-lg font-bold">$ {grandTotal}</span>
                    </div>
                </div>
            </div>
            <button onClick={() => returnUser()} className="hover:cursor-pointer hover:bg-[#FBAF85] mb-2 w-full bg-[#D87D4A] font-bold tracking-[1px] py-4">BACK TO HOME</button>
        </section>
    )
}

export default Confirmation;