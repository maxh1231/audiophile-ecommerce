import Link from "next/link";

const ZX7Speaker = (): JSX.Element => {
    return (
        <div className="flex flex-col items-start justify-center bg-mobile-zx7 h-[320px] bg-cover bg-right mx-[24px] rounded-lg md:bg-tablet-zx7 md:pl-8">
            <h2 className="text-black font-bold text-[28px] tracking-[2px] px-4">ZX7 SPEAKER</h2>
            <Link href="/speakers/zx7"><button className="font-bold text-black tracking-[1px] leading-[18px] text-[13px] border-[1px] border-black px-6 py-4 mx-4 my-6 hover:bg-[#000000] hover:text-[#FFFFFF]">SEE PRODUCT</button></Link>
        </div>
    )
}

export default ZX7Speaker;