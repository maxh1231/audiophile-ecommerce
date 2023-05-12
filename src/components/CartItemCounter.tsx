import { props, ItemType } from "@/utils/types"
import { Square_Peg } from "@next/font/google"
import { useState, useEffect } from "react"

interface Cart {
    cart: ItemType[],
    setCart: React.Dispatch<React.SetStateAction<ItemType[]>>
    item: ItemType
}

const CartItemCounter = ({ cart, setCart, item }: Cart): JSX.Element => {
    const [currCount, setCurrCount] = useState(item.count)

    useEffect(() => {
        if (item.count === 0) {
            const arr = cart.filter((item) => item.count > 0)
            setCart(arr)
        }
    }, [cart, item.count, setCart])

    const incrementItem = (item: ItemType) => {
        setCurrCount(item.count + 1);
        setCart(prevState => prevState.map((items) =>
            items === item ? { ...items, count: item.count + 1 } : items
        ))
    }

    const decrementItem = async (item: ItemType) => {
        if (item.count > 0) {
            setCurrCount(item.count - 1);
            setCart(prevState => prevState.map((items) =>
                items === item ? { ...items, count: item.count - 1 } : items
            ))
        }
    }

    return (
        <>
            <button onClick={() => decrementItem(item)} className='text-black opacity-25 text-xl pl-5'>-</button>
            <span className='text-black px-4 py-2 font-bold'>{currCount}</span>
            <button onClick={() => incrementItem(item)} className='text-black opacity-25 text-xl pr-5'>+</button>
        </>
    )
}

export default CartItemCounter