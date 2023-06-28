import Link from "next/link";

const YX1Earphones = (): JSX.Element => {
    return (
        <div className="mx-[24px] flex flex-col md:flex-row">
            <div className=" bg-mobile-yx1 h-[200px] rounded-md bg-cover 
            md:bg-tablet-yx1 md:w-[350px] md:h-[350px] md:bg-center md:mr-4"></div>
            <div className="h-[200px] bg-[#F1F1F1] rounded-md mt-6 flex flex-col items-start justify-center md:w-[350px] md:h-[350px] md:m-0 md:pl-8">
                <h2 className="text-black font-bold text-[28px] tracking-[2px] px-4">YX1 EARPHONES</h2>
                <Link href="/earphones/yx1"><button className="font-bold text-black tracking-[1px] leading-[18px] text-[13px] border-[1px] border-black px-6 py-4 mx-4 my-6 hover:bg-[#000000] hover:text-[#FFFFFF]">SEE PRODUCT</button></Link>
            </div>
        </div>
    )
}

export default YX1Earphones;