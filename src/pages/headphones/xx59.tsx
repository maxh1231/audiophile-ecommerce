import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

function PagePreview(): JSX.Element {
    return <Image src="/assets/product-xx59-headphones/mobile/image-product.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

function renderGallery(): JSX.Element {
    return (
        <div className='h-[726px] mx-[24px] mt-20'>
            <div className='my-5 bg-cover'>
                <Image src="/assets/product-xx59-headphones/mobile/image-gallery-1.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
            </div>
            <div className='my-5 bg-cover'>
                <Image src="/assets/product-xx59-headphones/mobile/image-gallery-2.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
            </div>
            <div className='my-5 bg-cover'>
                <Image src="/assets/product-xx59-headphones/mobile/image-gallery-3.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
            </div>
        </div>
    )
}

const Menu = dynamic(() =>
    import('../../components/Menu'))

const Footer = dynamic(() =>
    import('../../components/Footer')
)


const renderComponent = () => {
    return (
        <div className='bg-white'>
            <div className='mx-[24px]'>
                <div className='py-4'>
                    <Link className='text-lg text-black opacity-50 font-medium' href={'/'}>Go Back</Link>
                </div>
                <div>
                    {PagePreview()}
                </div>
                <div className='flex flex-col items-start justify-center my-2'>
                    <h2 className='font-bold text-black text-left text-3xl tracking-[1px] mt-8'>XX59<br />HEADPHONES</h2>
                    <p className='opacity-50 font-medium text-lg text-black text-left px-2 my-6'>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                    <p className='text-black font-bold text-xl tracking-[1.2px]'>$ 899</p>
                    <div className='flex my-8'>
                        <div className='bg-[#F1F1F1] flex justify-start items-center mr-4'>
                            <button className='text-black opacity-25 text-xl pl-5'>-</button>
                            <span className='text-black text-xl px-7 font-bold'>1</span>
                            <button className='text-black opacity-25 text-xl pr-5'>+</button>
                        </div>
                        <button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px]'>ADD TO CART</button>
                    </div>
                </div>
            </div>

            <div className='mx-[24px] mt-20'>
                <h2 className='text-black font-bold text-2xl tracking-widest my-6'>FEATURES</h2>
                <p className='text-black opacity-50 text-lg font-medium my-6'>These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.</p>
                <p className='text-black opacity-50 text-lg font-medium my-6'>More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.</p>
            </div>

            <div className='mx-[24px] mt-20'>
                <h2 className='text-black font-bold text-2xl tracking-widest my-6'>IN THE BOX</h2>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>Headphone Unit</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>2x <span className='text-black opacity-50 font-medium ml-6'>Replacement Earcups</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>User Manual</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>3.5mm 5m Audio Cable</span></p>
            </div>

            {renderGallery()}

            <div className='h-[983px] mx-[24px] mt-20 flex flex-col items-center'>
                <h2 className='text-black text-2xl font-bold tracking-[0.8px] my-4 mt-10'>YOU MAY ALSO LIKE</h2>
                <div className='flex flex-col items-center'>
                    <div className='my-4'>
                        <Image className='' src="/assets/shared/mobile/image-xx99-mark-two-headphones.jpg" width={327} height={120} alt='mark-1'></Image>
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>XX99 MARK II</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/headphones/xx99-mark-i"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px]'>SEE PRODUCT</button></Link>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='my-4'>
                        <Image className='' src="/assets/shared/mobile/image-xx99-mark-one-headphones.jpg" width={327} height={120} alt='xx59'></Image>
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>XX99 MARK I</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/headphones/xx99-mark-i"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px]'>SEE PRODUCT</button></Link>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='my-4'>
                        <Image className='' src="/assets/shared/mobile/image-zx9-speaker.jpg" width={327} height={120} alt='zx9'></Image>
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>ZX9 SPEAKER</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/speakers/zx9"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px]'>SEE PRODUCT</button></Link>
                    </div>
                </div>
            </div>

            <section className='bg-white py-12'>
                <Menu />
            </section>

            <section className='bg-white pt-12'>
                <Footer />
            </section>
        </div>

    )
}

export default renderComponent;