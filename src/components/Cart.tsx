import Link from "next/link";
import { ItemType } from "@/utils/types";

interface props {
    cart: ItemType[],
    setCart: React.Dispatch<React.SetStateAction<ItemType[]>>
}

const Cart = ({ cart, setCart }: props) => {
    console.log(cart);
    return (
        <div>
            <div>
                <div>
                    <h2>Cart ({ })</h2>
                    <button>Remove all</button>
                </div>
                <div>
                    {/* Items */}
                </div>
                <div>
                    <span>TOTAL</span>
                    <span>$1,000</span>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;