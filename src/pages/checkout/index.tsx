import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { ItemType } from "@/utils/types";
import { calcCartTotal } from "@/utils/helpers";

interface props {
    cart: ItemType[],
    setCart: React.Dispatch<React.SetStateAction<ItemType[]>>
}

const Checkout = ({ cart, setCart }: props) => {
    const [active, setActive] = useState("border-[2px] border-[#CFCFCF]");
    const [activeTwo, setActiveTwo] = useState("border-[2px] border-[#CFCFCF]");
    const [trigger, setTrigger] = useState(0);
    const radioOne = useRef(null) as unknown as MutableRefObject<HTMLInputElement>
    const radioTwo = useRef(null) as unknown as MutableRefObject<HTMLInputElement>
    const [cartTotal, setCartTotal] = useState<string>('')

    useEffect(() => {
        if (radioOne.current.checked) {
            setActive("border-[#D87D4A] border-2")
            setActiveTwo("border-[2px] border-[#CFCFCF]")
        } else if (radioTwo.current.checked) {
            setActive("border-[2px] border-[#CFCFCF]")
            setActiveTwo("border-[#D87D4A] border-2")
        }
    }, [trigger])

    useEffect(() => {
        setCartTotal(calcCartTotal(cart))
    }, [cart])

    const handler = () => {
        if (trigger) {
            setTrigger(0)
        } else {
            setTrigger(1)
        }
    }

    const calcVAT = () => {
        let total: number = 20 / 100 * parseInt(cartTotal.split(',').join(''));
        return Math.round(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    const calcGrandTotal = () => {
        let total = parseInt(cartTotal.split(',').join('')) + 50 + parseInt(calcVAT().split(',').join(''))
        return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const Footer = dynamic(() =>
        import('../../components/Footer')
    )


    return (
        <section className="bg-[#F1F1F1]">
            <div className='py-4 mx-[24px]'>
                <Link className='text-lg text-black opacity-50 font-medium' href={'/'}>Go Back</Link>
            </div>
            <div className="bg-white mx-[24px] rounded-lg flex flex-col items-start py-6 px-6">
                <h2 className="text-black font-bold text-3xl tracking-[1px]">CHECKOUT</h2>
                <span className="text-[#D87D4A] font-bold tracking-[1px] py-2 pt-8">BILLING DETAILS</span>
                <div className="flex flex-col items-start w-full">
                    <div className="py-2 w-full">
                        <label className="text-black font-bold text-[12px] " htmlFor="name">Name</label>
                        <input className="w-full h-[56px] bg-white border-[2px] border-[#CFCFCF] rounded-lg mt-2" id="name" type="text" placeholder="Alexei Ward" />
                    </div>

                    <div className="py-2 w-full">
                        <label className="text-black font-bold text-[12px] " htmlFor="email">Email Address</label>
                        <input className="w-full h-[56px] bg-white border-[2px] border-[#CFCFCF] rounded-lg mt-2" id="email" type="text" placeholder="alexei@mail.com" />
                    </div>

                    <div className="py-2 w-full">
                        <label className="text-black font-bold text-[12px] " htmlFor="phone">Phone Number</label>
                        <input className="w-full h-[56px] bg-white border-[2px] border-[#CFCFCF] rounded-lg mt-2" id="phone" type="text" placeholder="+1 202-555-0136" />
                    </div>
                </div>
                <span className="text-[#D87D4A] font-bold tracking-[1px] py-2 pt-8">SHIPPING INFO</span>
                <div className="flex flex-col items-start w-full">
                    <div className="py-2 w-full">
                        <label className="text-black font-bold text-[12px] " htmlFor="address">Your Address</label>
                        <input className="w-full h-[56px] bg-white border-[2px] border-[#CFCFCF] rounded-lg mt-2" id="address" type="text" placeholder="1137 Williams Avenue" />
                    </div>

                    <div className="py-2 w-full">
                        <label className="text-black font-bold text-[12px] " htmlFor="zip">ZIP Code</label>
                        <input className="w-full h-[56px] bg-white border-[2px] border-[#CFCFCF] rounded-lg mt-2" id="zip" type="text" placeholder="10001" />
                    </div>

                    <div className="py-2 w-full">
                        <label className="text-black font-bold text-[12px] " htmlFor="city">City</label>
                        <input className="w-full h-[56px] bg-white border-[2px] border-[#CFCFCF] rounded-lg mt-2" id="city" type="text" placeholder="New York" />
                    </div>

                    <div className="py-2 w-full">
                        <label className="text-black font-bold text-[12px] " htmlFor="country">Country</label>
                        <input className="w-full h-[56px] bg-white border-[2px] border-[#CFCFCF] rounded-lg mt-2" id="country" type="text" placeholder="United States" />
                    </div>
                </div>
                <span className="text-[#D87D4A] font-bold tracking-[1px] py-2 pt-8">PAYMENT DETAILS</span>
                <div className="flex flex-col items-start w-full">
                    <div className="py-2 flex flex-col w-full ">
                        <span className="text-black font-bold"> Payment Method</span>

                        <label onClick={() => handler()} className={`${active} h-[56px] text-black font-bold text-[14px] rounded-lg flex items-center my-2 hover:cursor-pointer`} htmlFor="e-money">
                            <input ref={radioOne} className="mx-4 " id="e-money" type="radio" name="payment" />e-Money
                        </label>

                        <label onClick={() => handler()} className={`${activeTwo} h-[56px] text-black font-bold text-[14px] rounded-lg flex items-center my-2 hover:cursor-pointer`} htmlFor="cash">
                            <input ref={radioTwo} className="mx-4 " id="cash" type="radio" name="payment" />Cash on Delivery
                        </label>
                    </div>
                    <div className="py-2 w-full">
                        <label className="text-black font-bold text-[12px]" htmlFor="city">e-Money Number</label>
                        <input className="w-full h-[56px] bg-white border-[2px] border-[#CFCFCF] rounded-lg mt-2" id="e-money-num" type="text" placeholder="238521993" />
                    </div>

                    <div className="py-2 w-full">
                        <label className="text-black font-bold text-[12px] " htmlFor="country">e-Money PIN</label>
                        <input className="w-full h-[56px] bg-white border-[2px] border-[#CFCFCF] rounded-lg mt-2" id="country" type="text" placeholder="6891" />
                    </div>
                </div>
            </div>

            <div className="bg-white mx-[24px] rounded-lg py-6 px-6 mt-6">
                <h2 className="text-black font-bold text-xl mb-4">SUMMARY</h2>
                {cart.map((item, i) => (
                    <div key={i} className="text-black w-full flex items-center justify-between mb-4">
                        <div>
                            <Image className="rounded-lg" src={item.img} width={64} height={64} alt="cart item"></Image>
                        </div>
                        <div className="flex flex-col min-w-[80px] py-2 mr-20">
                            <h2 className="font-bold ">{item.name}</h2>
                            <p className="font-bold text-black text-[14px] opacity-50">$ {item.price}</p>
                        </div>
                        <div className="">
                            <span className="text-black opacity-50 font-bold">x{item.count}</span>
                        </div>
                    </div>
                ))}
                <div className="flex justify-between mb-2">
                    <span className="text-black opacity-50 font-medium text-lg">TOTAL</span>
                    <span className="text-black font-bold text-lg text-right">$ {cartTotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-black opacity-50 font-medium text-lg">SHIPPING</span>
                    <span className="text-black font-bold text-lg text-right">$ 50</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-black opacity-50 font-medium text-lg">VAT (INCLUDED)</span>
                    <span className="text-black font-bold text-lg text-right">$ {calcVAT()}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-black opacity-50 font-medium text-lg">GRAND TOTAL</span>
                    <span className="text-[#D87D4A] text-lg font-bold text-right">$ {calcGrandTotal()}</span>
                </div>
                <div className="mt-10">
                    <button className=" w-full text-white text-lg font-medium bg-[#D87D4A] py-2">CONTINUE & PAY</button>
                </div>
            </div>

            <div className="mt-24">
                <Footer />
            </div>
        </section>
    )
}

export default Checkout;