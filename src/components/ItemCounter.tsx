import { useState, useEffect } from "react"
import { ItemType } from "@/utils/types"
import { Item } from "@/utils/Item"
import { calcNumItems, storeCart } from "@/utils/helpers"
import { isTemplateSpan } from "typescript"

interface props {
    cart: ItemType[],
    setCart: React.Dispatch<React.SetStateAction<ItemType[]>>
    name: string,
    price: string,
    img: string,
    numItems: number,
    setNumItems: React.Dispatch<React.SetStateAction<number>>
}

const ItemCounter = ({ cart, setCart, name, price, img, numItems, setNumItems }: props) => {

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
            setNumItems(calcNumItems(cart))
        } else {
            // if item doesn't exist, add new
            setCart(items => [...items, item]);
            setNumItems(calcNumItems(cart))
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
                <button onClick={decrementCount} className='text-black opacity-25 text-xl pl-5 hover:text-[#D87D4A] hover:opacity-100'>-</button>
                <span className='text-black text-xl px-7 font-bold'>{itemCount}</span>
                <button onClick={incrementCount} className='text-black opacity-25 text-xl pr-5 hover:text-[#D87D4A] hover:opacity-100'>+</button>
            </div>
            <button onClick={async () => await modifyCart(new Item(name, price, itemCount, img), cart)} className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px] hover:cursor-pointer hover:bg-[#FBAF85]'>ADD TO CART</button>
        </div>
    )
}

export default ItemCounter;