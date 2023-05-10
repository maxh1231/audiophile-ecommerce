import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import dynamic from "next/dynamic";



function NavMenuIcon(): JSX.Element {
    return <Image src="/assets/shared/tablet/icon-hamburger.svg" alt="earphones" width={16} height={15} />
}

function NavLogo(): JSX.Element {
    return <Image src="/assets/shared/desktop/logo.svg" alt="earphones" width={143} height={25} />
}

function NavCartIcon(): JSX.Element {
    return <Image src="/assets/shared/desktop/icon-cart.svg" alt="earphones" width={23} height={20} />
}

const Menu = dynamic(() =>
    import('../components/Menu'))

interface Background {
    background: string,
    setBackground: React.Dispatch<React.SetStateAction<string>>
}

const Nav = ({ background, setBackground }: Background): JSX.Element => {
    const [activeMenu, setActiveMenu] = useState(false);

    const menuHandler = () => {
        if (activeMenu == false) {
            setActiveMenu(true)
            setBackground('setOpacity')
        } else {
            setActiveMenu(false);
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
                <li>
                    {NavCartIcon()}
                </li>
            </ul>
            {activeMenu &&
                <div className="fadeIn absolute top-24 z-50">
                    <Menu />
                </div>
            }
        </div>
    )
}

export default Nav;