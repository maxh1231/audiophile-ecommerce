import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import dynamic from "next/dynamic";
import { ItemType } from "@/utils/types";



function NavMenuIcon(): JSX.Element {
    return <Image src="/assets/shared/tablet/icon-hamburger.svg" alt="earphones" width={16} height={15} />
}

function NavLogo(): JSX.Element {
    return <Image src="/assets/shared/desktop/logo.svg" alt="earphones" width={143} height={25} />
}

function NavCartIcon(): JSX.Element {
    return <Image src="/assets/shared/desktop/icon-cart.svg" alt="earphones" width={23} height={20} />
}

const NavMenu = dynamic(() =>
    import('../components/NavMenu'))

const Cart = dynamic(() =>
    import('../components/Cart'))



interface props {
    background: string,
    setBackground: React.Dispatch<React.SetStateAction<string>>,
    cart: ItemType[],
    setCart: React.Dispatch<React.SetStateAction<ItemType[]>>,
    numItems: number,
    setNumItems: React.Dispatch<React.SetStateAction<number>>,
    activeMenu: boolean,
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>,
    activeCart: boolean,
    setActiveCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({ background, setBackground, cart, setCart, numItems, setNumItems, activeMenu, setActiveMenu, activeCart, setActiveCart }: props): JSX.Element => {
    // const [activeMenu, setActiveMenu] = useState(false);
    // const [activeCart, setActiveCart] = useState(false);

    const menuHandler = () => {
        if (activeMenu == false) {
            setActiveMenu(true)
            setBackground('setOpacity')
            setActiveCart(false);
        } else {
            setActiveMenu(false);
            setBackground('')
        }
    }

    const cartHandler = () => {
        if (activeCart == false) {
            setActiveCart(true)
            setBackground('setOpacity')
            setActiveMenu(false);
        } else {
            setActiveCart(false);
            setBackground('')

        }
    }

    return (
        <div className="flex flex-col">
            <ul className="flex justify-between items-center py-8 px-8 border-b-[1px] border-neutral-800">
                <li onClick={menuHandler}>
                    <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg hover:bg-gray-800 ">
                        {NavMenuIcon()}
                    </button>
                </li>
                <li>
                    <Link href="/">
                        {NavLogo()}
                    </Link>
                </li>
                <li onClick={cartHandler}>
                    <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg hover:bg-gray-800 ">
                        {NavCartIcon()}
                        <span className="sr-only">Notifications</span>
                        {numItems > 0 &&
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{numItems}</div>
                        }
                    </button>
                </li>
            </ul>
            {activeMenu &&
                <div className="fadeIn absolute top-[90px] z-50">
                    <NavMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} background={background} setBackground={setBackground} />
                </div>
            }

            {activeCart &&
                <div className="cart fadeIn absolute top-28 z-50">
                    <Cart cart={cart} setCart={setCart} activeCart={activeCart} setActiveCart={setActiveCart} background={background} setBackground={setBackground} numItems={numItems} setNumItems={setNumItems} />
                </div>
            }


        </div>
    )
}

export default Nav;