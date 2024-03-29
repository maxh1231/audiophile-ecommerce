import Link from 'next/link';
import Image from 'next/image';

function logo(): JSX.Element {
    return <Image src="/assets/shared/desktop/logo.svg" alt="earphones" width={143} height={25} className='md:ml-8 mt-10 lg:mt-20 m-auto' />
}

const Footer = (): JSX.Element => {
    return (
        <div>
            <div className="flex flex-col h-[698px] mx-[24px] my-6 mb-20 md:mb-10 lg:mb-20 lg:flex-row-reverse lg:h-[400px] lg:items-center lg:justify-center">
                <div className="bg-mobile-best-gear h-1/2 bg-cover bg-no-repeat rounded-md md:bg-tablet-best-gear lg:w-1/2 lg:h-full lg:max-w-[500px] lg:bg-center"></div>
                <div className="flex flex-col items-center justify-center h-1/2 my-6 lg:w-1/2 lg:max-w-[500px] lg:items-start">
                    <h3 className="text-black font-bold text-[28px] tracking-[1px] text-center my-6 md:text-[32px] md:w-3/4 lg:text-left">BRINGING YOU THE <span className="text-[#D97D4A]">BEST</span> AUDIO GEAR</h3>
                    <p className="text-black text-center opacity-50 font-medium leading-[25px] md:w-3/4 lg:text-left">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
            </div>
            <div className="h-[654px] bg-black flex flex-col items-center md:items-start justify-between md:h-[400px] lg:flex-row">
                <div>
                    <div className="border-t-8 border-[#D87D4A] h-[4px] w-1/4 md:ml-8"></div>
                    {logo()}
                    <div className="flex flex-col items-center mt-6 md:w-full md:items-start lg:hidden">
                        <ul className='flex flex-col md:flex-row md:ml-8'>
                            <Link href="/"><li className="font-bold text-center text-lg tracking-[2px] my-4 hover:text-[#D87D4A] md:mr-4 md:text-sm">HOME</li></Link>
                            <Link href="/headphones"><li className="font-bold text-center text-lg tracking-[2px] my-4 hover:text-[#D87D4A] md:mx-4 md:text-sm">HEADPHONES</li></Link>
                            <Link href="/speakers"><li className="font-bold text-center text-lg tracking-[2px] my-4 hover:text-[#D87D4A] md:mx-4 md:text-sm">SPEAKERS</li></Link>
                            <Link href="/earphones"><li className="font-bold text-center text-lg tracking-[2px] my-4 hover:text-[#D87D4A] md:mx-4 md:text-sm">EARPHONES</li></Link>
                        </ul>
                    </div>
                    <p className="text-center px-6 opacity-50 font-medium mt-6 md:text-left md:px-0 md:mx-8 md:mb-8 md:font-normal lg:mt-12">Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit your demo facility - we&apos;re open 7 days a week.</p>
                    <p className="opacity-50 font-bold md:ml-8 text-center md:text-left mt-6">Copyright 2023. All Rights Reserved</p>
                </div>
                <div className='flex flex-col md:flex-row md:justify-between md:w-full items-center'>
                    <div className="flex flex-row items-end my-8 md:mr-8 justify-center lg:flex-col">
                        <div className="flex-col items-center md:w-full md:items-start hidden lg:flex lg:mt-10">
                            <ul className='flex flex-col md:flex-row md:ml-8'>
                                <Link href="/"><li className="font-bold text-center text-lg tracking-[2px] my-4 hover:text-[#D87D4A] md:mr-4 md:text-sm">HOME</li></Link>
                                <Link href="/headphones"><li className="font-bold text-center text-lg tracking-[2px] my-4 hover:text-[#D87D4A] md:mx-4 md:text-sm">HEADPHONES</li></Link>
                                <Link href="/speakers"><li className="font-bold text-center text-lg tracking-[2px] my-4 hover:text-[#D87D4A] md:mx-4 md:text-sm">SPEAKERS</li></Link>
                                <Link href="/earphones"><li className="font-bold text-center text-lg tracking-[2px] my-4 hover:text-[#D87D4A] md:mx-4 md:text-sm">EARPHONES</li></Link>
                            </ul>
                        </div>
                        <div className='flex items-center justify-end ml-6 lg:mt-20'>
                            <div className="px-2 ">
                                <svg width="24" className='test fill-current hover:cursor-pointer hover:text-[#d87d4A] ' height="24" xmlns="http://www.w3.org/2000/svg"><path className='fill-current hover:fill-[#D87D4A]' d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="#FFF" fillRule="nonzero" /></svg>
                            </div>
                            <div className="px-2">
                                <svg width="24" className='test fill-current hover:cursor-pointer hover:text-[#d87d4A] ' height="20" xmlns="http://www.w3.org/2000/svg"><path className='fill-current hover:fill-[#D87D4A]' d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" fill="#FFF" fillRule="nonzero" /></svg>
                            </div>
                            <div className="px-2  ">
                                <svg width="24" className='test fill-current hover:text-[#d87d4A] hover:cursor-pointer' height="24" xmlns="http://www.w3.org/2000/svg"><path className='fill-current hover:fill-[#D87D4A]' d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#FFF" fillRule="nonzero" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;