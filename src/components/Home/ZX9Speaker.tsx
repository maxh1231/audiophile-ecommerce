import Link from "next/link";
import Image from 'next/image';

function SpeakerImage(): JSX.Element {
    return <Image className="relative bottom-10 object-cover" src="/assets/home/tablet/image-speaker-zx9.png" alt="speakers" width={172} height={207} />
}

const ZX9Speaker = (): JSX.Element => {
    return (
        <section className="mx-[24px] flex flex-col items-center h-[600px] bg-[#D87D4A] rounded-md overflow-clip">
            <div className="absolute mt-4 rounded-full border-[1px] border-[#FFFFFF]/[.5] w-[279px] h-[279px]">
                <div className="relative top-16 flex  justify-center">
                    {SpeakerImage()}
                </div>
            </div>
            <div className="absolute  rounded-full border-[1px] border-[#FFFFFF]/[.5] w-[320px] h-[320px]">
                <div className="relative top-72 flex justify-center">
                    <h2 className="text-center text-4xl font-bold tracking-widest">ZX9<br />SPEAKER</h2>
                </div>
            </div>
            <div className="relative bottom-20 rounded-full border-[1px] border-[#FFFFFF]/[.5] w-[558px] h-[558px] "></div>
            <div className="absolute mt-[24rem] text-center px-10 leading-6 font-medium">
                <p className="text-lg opacity-75 md:w-1/2 md:m-auto">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            </div>
            <div>
                <Link href="/speakers/zx9"><button className="bg-black px-8 py-4 tracking-[1px] text-lg font-bold mb-10 hover:bg-[#4C4C4C]">SEE PRODUCT</button></Link>
            </div>
        </section>
    )
}

export default ZX9Speaker;