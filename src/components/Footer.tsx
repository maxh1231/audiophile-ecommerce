import Link from 'next/link';
import Image from 'next/image';

function logo(): JSX.Element {
    return <Image src="/assets/shared/desktop/logo.svg" alt="earphones" width={143} height={25} />
}

function facebookIcon(): JSX.Element {
    return <Image className='hover:cursor-pointer hover:fill-[#D87D4A] ' src="/assets/shared/desktop/icon-facebook.svg" alt="earphones" width={24} height={24} />
}

function twitterIcon(): JSX.Element {
    return <Image className='hover:cursor-pointer hover:fill-[#D87D4A] ' src="/assets/shared/desktop/icon-twitter.svg" alt="earphones" width={24} height={24} />
}

function instagramIcon(): JSX.Element {
    return <Image className='hover:cursor-pointer hover:fill-[#D87D4A] ' src="/assets/shared/desktop/icon-instagram.svg" alt="earphones" width={24} height={24} />
}


const Footer = (): JSX.Element => {
    return (
        <div>
            <div className="flex flex-col h-[698px] mx-[24px] my-6 mb-20">
                <div className="bg-mobile-best-gear h-1/2 bg-cover bg-no-repeat rounded-md"></div>
                <div className="flex flex-col items-center justify-center h-1/2 my-6">
                    <h3 className="text-black font-bold text-[28px] tracking-[1px] text-center my-6">BRINGING YOU THE <span className="text-[#D97D4A]">BEST</span> AUDIO GEAR</h3>
                    <p className="text-black text-center opacity-50 font-medium leading-[25px]">Located at the heart of New York City, Audiophile is the preimer store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience. Stop by our store to meet some of the fantastic people who make Audiphile the best place to buy your portable audio equipment.</p>
                </div>
            </div>
            <div className="h-[654px] bg-black flex flex-col items-center justify-between">
                <div className="border-t-8 border-[#D87D4A] h-[4px] w-1/4"></div>
                {logo()}
                <div className="flex flex-col items-center">
                    <ul>
                        <Link href="/"><li className="font-bold text-center text-lg tracking-[2px] my-4 hover:text-[#D87D4A]">HOME</li></Link>
                        <Link href="/headphones"><li className="font-bold text-center text-lg tracking-[2px] my-4 hover:text-[#D87D4A]">HEADPHONES</li></Link>
                        <Link href="/speakers"><li className="font-bold text-center text-lg tracking-[2px] my-4 hover:text-[#D87D4A]">SPEAKERS</li></Link>
                        <Link href="/earphones"><li className="font-bold text-center text-lg tracking-[2px] my-4 hover:text-[#D87D4A]">EARPHONES</li></Link>
                    </ul>
                </div>
                <p className="text-center px-6 opacity-50 font-medium">Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit your demo facility - we&apos;re open 7 days a week.</p>
                <p className="text-center opacity-50 font-bold">Copyright 2023. All Rights Reserved</p>
                <div className="flex flex-row items-center mb-8">
                    <div className="px-2">
                        {facebookIcon()}
                    </div>
                    <div className="px-2">
                        {twitterIcon()}
                    </div>
                    <div className="px-2">
                        {instagramIcon()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;