import Link from "next/link";
import Image from 'next/image';

function MenuMobileHeadphones(): JSX.Element {
    return <Image className="relative bottom-10 object-cover w-[160px] h-[160px]" src="/assets/shared/desktop/image-category-thumbnail-headphones.png" width={160} height={160} alt="headphones" />
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

interface props {
    activeMenu: boolean,
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
    background: string,
    setBackground: React.Dispatch<React.SetStateAction<string>>
}

const Menu = ({ activeMenu, setActiveMenu, background, setBackground }: props): JSX.Element => {

    const handler = () => {
        setActiveMenu(false)
        setBackground(' ')
    }
    return (
        <div className=" overflow-hidden h-[750px] bg-[#FFFFFF] w-screen flex flex-col items-center justify-evenly rounded-b-lg">
            <Link onClick={() => handler()} href='/headphones' className="parent flex flex-col justify-center items-center w-[325px] h-[165px] rounded-xl bg-[#F1F1F1] mt-10">
                {MenuMobileHeadphones()}
                <h2 className="relative bottom-12 text-black font-extrabold tracking-wider">HEADPHONES</h2>
                <div>
                    <p className="child relative bottom-8 text-black font-bold tracking-widest text-[13px] opacity-50">SHOP </p>
                    {MenuRightArrow()}
                </div>
            </Link>
            <Link onClick={() => handler()} href='/speakers' className="parent flex flex-col justify-center items-center w-[325px] h-[165px] rounded-xl bg-[#F1F1F1] mt-10">
                {MenuMobileSpeaker()}
                <h2 className="relative bottom-12 text-black font-extrabold tracking-wider">SPEAKERS</h2>
                <div>
                    <p className="child relative bottom-8 text-black font-bold tracking-widest text-[13px] opacity-50">SHOP </p>
                    {MenuRightArrow()}
                </div>
            </Link>
            <Link onClick={() => handler()} href='/earphones' className="parent flex flex-col justify-center items-center w-[325px] h-[165px] rounded-xl bg-[#F1F1F1] mt-10">
                {MenuMobileEarphones()}
                <h2 className="relative bottom-12 text-black font-extrabold tracking-wider">EARPHONES</h2>
                <div>
                    <p className="child relative bottom-8 text-black font-bold tracking-widest text-[13px] opacity-50">SHOP </p>
                    {/* {MenuRightArrow()} */}
                    <svg width="8" height="12" className=" relative bottom-12 left-12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd" /></svg>
                </div>
            </Link>
        </div>
    )
}

export default Menu;