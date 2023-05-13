import Image from "next/image";
import Link from "next/link";
import { ItemType } from "@/utils/types";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { calcCartTotal } from "@/utils/helpers";


const CartItemCounter = dynamic(() =>
    import('../components/CartItemCounter'))

interface props {
    cart: ItemType[],
    setCart: React.Dispatch<React.SetStateAction<ItemType[]>>
}

const Cart = ({ cart, setCart }: props) => {
    const [cartTotal, setCartTotal] = useState<string | null>(null);

    useEffect(() => {
        // let total: number = 0;
        // cart.forEach((item) => {
        //     let price = item.price.split(',').join('')
        //     total = total + (parseInt(price) * item.count)
        // })
        setCartTotal(calcCartTotal(cart));
    }, [cart, setCart])

    const emptyCart = () => {
        setCart([]);
    }

    return (
        <div className=" bg-[#FFFFFF] w-[327px] flex flex-col items-center rounded-lg">
            <div className="flex justify-between w-full px-6 my-6">
                <h2 className="text-black font-bold text-lg tracking-[1.2px]">CART ({cart.length})</h2>
                <span onClick={emptyCart} className="text-black opacity-50 text-lg font-medium decoration-solid underline">Remove all</span>
            </div>
            {cart.map((item, i) => (
                <div key={i} className="text-black w-full flex items-center justify-around px-6 mb-4">
                    <div>
                        <Image className="rounded-lg" src={item.img} width={64} height={64} alt="cart item"></Image>
                    </div>
                    <div className="flex flex-col min-w-[80px] py-4 ">
                        <h2 className="font-bold ">{item.name}</h2>
                        <p className="font-bold text-black text-[14px] opacity-50">$ {item.price}</p>
                    </div>
                    <div className='bg-[#F1F1F1] flex'>
                        <CartItemCounter cart={cart} setCart={setCart} item={item} />
                    </div>
                </div>
            ))}
            <div className="flex justify-between w-full px-8 my-6">
                <span className="text-black opacity-50 font-medium">TOTAL</span>
                <span className="text-black font-bold">$ {cartTotal}</span>
            </div>
            <div>
                <Link href="/checkout"><button className="bg-[#D87D4A] font-medium px-20 py-4 tracking-[1px] my-6">CHECKOUT</button></Link>
            </div>
        </div>
    )
}

export default Cart;