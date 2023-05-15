import { useState, useEffect } from "react"
import { ItemType } from "@/utils/types"
import { Item } from "@/utils/Item"
import { storeCart } from "@/utils/helpers"
import { isTemplateSpan } from "typescript"

interface props {
    cart: ItemType[],
    setCart: React.Dispatch<React.SetStateAction<ItemType[]>>
    name: string,
    price: string,
    img: string
}

const ItemCounter = ({ cart, setCart, name, price, img }: props) => {

    const [itemCount, setItemCount] = useState(1);

    useEffect(() => {
        storeCart(cart);
    }, [cart])

    const modifyCart = async (item: ItemType, cart: ItemType[]) => {
        // If item exists, update count
        if (cart.some(i => i.name === item.name)) {
            setCart(prevState => prevState.map((i) =>
                i.name === item.name ? { ...i, count: itemCount } : i
            ))
            // if item doesn't exist, add new
        } else {
            setCart(items => [...items, item]);
        }
    }

    const incrementCount = () => {
        let curCount = itemCount;
        curCount++;
        setItemCount(curCount);
    }

    const decrementCount = () => {
        if (itemCount > 1) {
            let curCount = itemCount;
            curCount--;
            setItemCount(curCount);
        }
    }

    return (
        <div className='flex my-6'>
            <div className='bg-[#F1F1F1] flex justify-start items-center mr-4'>
                <button onClick={decrementCount} className='text-black opacity-25 text-xl pl-5'>-</button>
                <span className='text-black text-xl px-7 font-bold'>{itemCount}</span>
                <button onClick={incrementCount} className='text-black opacity-25 text-xl pr-5'>+</button>
            </div>
            <button onClick={async () => await modifyCart(new Item(name, price, itemCount, img), cart)} className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px]'>ADD TO CART</button>
        </div>
    )
}

export default ItemCounter;