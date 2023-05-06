import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

function MenuMobileHeadphones(): JSX.Element {
    return <Image className="relative bottom-10 object-cover" src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="headphones" width={160} height={160} />
}

function MenuMobileSpeaker(): JSX.Element {
    return <Image className="relative bottom-10 object-cover" src="/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="speakers" width={160} height={160} />
}

function MenuMobileEarphones(): JSX.Element {
    return <Image className="relative bottom-10 object-cover" src="/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="earphones" width={160} height={160} />
}

function MenuRightArrow(): JSX.Element {
    return <Image className="relative bottom-12 left-12" src="/assets/shared/desktop/icon-arrow-right.svg" alt="earphones" width={8} height={12} />
}

function NavMenuIcon(): JSX.Element {
    return <Image src="/assets/shared/tablet/icon-hamburger.svg" alt="earphones" width={16} height={15} />
}

function NavLogo(): JSX.Element {
    return <Image src="/assets/shared/desktop/logo.svg" alt="earphones" width={143} height={25} />
}

function NavCartIcon(): JSX.Element {
    return <Image src="/assets/shared/desktop/icon-cart.svg" alt="earphones" width={23} height={20} />
}

const Nav = (): JSX.Element => {
    const [activeMenu, setActiveMenu] = useState(false);

    const menuHandler = () => {
        if (activeMenu == false) {
            setActiveMenu(true)
        } else {
            setActiveMenu(false);
        }
    }

    return (
        <div className="flex flex-col">
            <ul className="flex justify-between items-center py-8 px-8 border-b-[1px] border-neutral-800">
                <li onClick={menuHandler}>
                    {NavMenuIcon()}
                </li>
                <li>
                    {NavLogo()}
                </li>
                <li>
                    {NavCartIcon()}
                </li>
            </ul>
            {activeMenu &&
                <div className="fadeIn absolute overflow-hidden top-24 h-[750px] bg-[#FFFFFF] w-[375px] flex flex-col items-center justify-evenly">
                    <Link href='/headphones' className="flex flex-col justify-center items-center w-[325px] h-[165px] rounded-xl bg-[#F1F1F1] mt-10">
                        {MenuMobileHeadphones()}
                        <h2 className="relative bottom-12 text-black font-extrabold tracking-wider">HEADPHONES</h2>
                        <div>
                            <p className="relative bottom-8 text-black font-bold tracking-widest text-[13px] opacity-50">SHOP </p>
                            {MenuRightArrow()}
                        </div>
                    </Link>
                    <Link href='/speakers' className="flex flex-col justify-center items-center w-[325px] h-[165px] rounded-xl bg-[#F1F1F1] mt-10">
                        {MenuMobileSpeaker()}
                        <h2 className="relative bottom-12 text-black font-extrabold tracking-wider">SPEAKERS</h2>
                        <div>
                            <p className="relative bottom-8 text-black font-bold tracking-widest text-[13px] opacity-50">SHOP </p>
                            {MenuRightArrow()}
                        </div>
                    </Link>
                    <Link href='/earphones' className="flex flex-col justify-center items-center w-[325px] h-[165px] rounded-xl bg-[#F1F1F1] mt-10">
                        {MenuMobileEarphones()}
                        <h2 className="relative bottom-12 text-black font-extrabold tracking-wider">EARPHONES</h2>
                        <div>
                            <p className="relative bottom-8 text-black font-bold tracking-widest text-[13px] opacity-50">SHOP </p>
                            {MenuRightArrow()}
                        </div>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Nav;