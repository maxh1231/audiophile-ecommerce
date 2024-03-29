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

const Menu = (): JSX.Element => {
    return (
        <div className=" overflow-hidden h-[750px] bg-[#FFFFFF] w-screen flex flex-col items-center justify-evenly rounded-b-lg md:h-[300px] md:flex-row max-w-[1024px] md:m-auto">
            <Link href='/headphones' className="parent flex flex-col justify-center items-center w-[325px] h-[165px] rounded-xl bg-[#F1F1F1] mt-10 md:m-2 md:w-[225px]">
                {MenuMobileHeadphones()}
                <h2 className="relative bottom-12 text-black font-extrabold tracking-wider">HEADPHONES</h2>
                <p className="child relative bottom-8 text-black font-bold tracking-widest text-[13px] opacity-50">SHOP </p>
                {MenuRightArrow()}
            </Link>
            <Link href='/speakers' className="parent flex flex-col justify-center items-center w-[325px] h-[165px] rounded-xl bg-[#F1F1F1] mt-10 md:m-2 md:w-[225px]">
                {MenuMobileSpeaker()}
                <h2 className="relative bottom-12 text-black font-extrabold tracking-wider">SPEAKERS</h2>
                <div>
                    <p className="child relative bottom-8 text-black font-bold tracking-widest text-[13px] opacity-50">SHOP </p>
                    {MenuRightArrow()}
                </div>
            </Link>
            <Link href='/earphones' className="parent flex flex-col justify-center items-center w-[325px] h-[165px] rounded-xl bg-[#F1F1F1] mt-10 md:m-2 md:w-[225px]">
                {MenuMobileEarphones()}
                <h2 className="relative bottom-12 text-black font-extrabold tracking-wider">EARPHONES</h2>
                <div>
                    <p className=" child relative bottom-8 text-black font-bold tracking-widest text-[13px] opacity-50">SHOP </p>
                    {MenuRightArrow()}
                </div>
            </Link>
        </div>
    )
}

export default Menu;