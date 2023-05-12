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

const Menu = (): JSX.Element => {
    return (
        <div className=" overflow-hidden h-[750px] bg-[#FFFFFF] w-[375px] flex flex-col items-center justify-evenly rounded-b-lg">
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
    )
}

export default Menu;