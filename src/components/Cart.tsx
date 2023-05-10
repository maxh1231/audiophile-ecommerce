import Link from "next/link";

const Cart = () => {
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