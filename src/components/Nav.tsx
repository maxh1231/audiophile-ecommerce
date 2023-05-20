import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import dynamic from "next/dynamic";
import { ItemType } from "@/utils/types";
import { Item } from "@/utils/Item";



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
    setCart: React.Dispatch<React.SetStateAction<ItemType[]>>
}

const Nav = ({ background, setBackground, cart, setCart }: props): JSX.Element => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeCart, setActiveCart] = useState(false);



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
                    {NavMenuIcon()}
                </li>
                <li>
                    <Link href="/">
                        {NavLogo()}
                    </Link>
                </li>
                <li onClick={cartHandler}>
                    {NavCartIcon()}
                </li>
            </ul>
            {activeMenu &&
                <div className="fadeIn absolute top-[90px] z-50">
                    <NavMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} background={background} setBackground={setBackground} />
                </div>
            }

            {activeCart &&
                <div className="fadeIn absolute top-28 left-[calc(100vw / 2)px] z-50">
                    <Cart cart={cart} setCart={setCart} activeCart={activeCart} setActiveCart={setActiveCart} background={background} setBackground={setBackground} />
                </div>
            }


        </div>
    )
}

export default Nav;