import Link from "next/link";

const NewProduct = (): JSX.Element => {
    return (
        <section className=" h-[510px] bg-mobile-new-product bg-cover bg-center flex flex-col items-center justify-center">
            <div className="mt-16 pt-12">
                <span className="tracking-[10px] text-center text-[14px] opacity-50 line-height-[19px]">NEW PRODUCT</span>
            </div>
            <div className="mt-6">
                <h2 className="text-4xl font-bold tracking-wide">XX 99 MARK II<br />HEADPHONES</h2>
            </div>
            <div className="mt-6">
                <p className="opacity-75 text-center font-medium px-4 text-lg">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            </div>
            <div className="mt-6">
                <Link href="/headphones/xx99-mark-ii"><button className="font-bold tracking-widest bg-[#d87D4A] py-4 px-6 text-base">
                    SEE PRODUCT
                </button>
                </Link>
            </div>
        </section>
    )
}

export default NewProduct;