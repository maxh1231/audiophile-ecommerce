import Link from "next/link";

const NewProduct = (): JSX.Element => {
    return (
        <section className=" h-[510px] bg-mobile-new-product bg-cover bg-center flex flex-col items-center justify-center md:bg-tablet-new-product md:h-[625px] md:bg-bottom">
            <div className="mt-16 pt-12 md:pt-0 md:mt-0">
                <span className="tracking-[10px] text-center text-[14px] opacity-50 line-height-[19px]">NEW PRODUCT</span>
            </div>
            <div className="mt-6">
                <h2 className="text-4xl font-bold tracking-wide md:text-5xl">XX 99 MARK II<br />HEADPHONES</h2>
            </div>
            <div className="mt-6 items-center">
                <p className="opacity-75 text-center font-medium px-4 text-lg md:font-light md:w-[450px] md:m-auto">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            </div>
            <div className="mt-6">
                <Link href="/headphones/xx99-mark-ii"><button className="font-bold tracking-widest bg-[#d87D4A] py-4 px-6 text-base hover:cursor-pointer hover:bg-[#FBAF85] md:text-sm">
                    SEE PRODUCT
                </button>
                </Link>
            </div>
        </section>
    )
}

export default NewProduct;