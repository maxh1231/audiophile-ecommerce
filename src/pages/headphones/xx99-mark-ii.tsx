import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

function PagePreview(): JSX.Element {
    return <Image src="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

function renderGallery(): JSX.Element {
    return (
        <div className='h-[726px] mx-[24px] mt-20'>
            <div className='my-5 bg-cover'>
                <Image src="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
            </div>
            <div className='my-5 bg-cover'>
                <Image src="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
            </div>
            <div className='my-5 bg-cover'>
                <Image src="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
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
                    <p className='text-[#D87D4A]  tracking-[10px] my-6'>NEW PRODUCT</p>
                    <h2 className='font-bold text-black text-left text-3xl tracking-[1px]'>XX99 MARK II<br />HEADPHONES</h2>
                    <p className='opacity-50 font-medium text-lg text-black text-left px-2 my-6'>The new XX99 Mark II headphones are the pinnicale of pristine audio. It redefines your premium headphones experience by reporducing the balanced depth and precision of studio-quality sound.</p>
                    <p className='text-black font-bold text-xl tracking-[1.2px]'>$ 2,999</p>
                    <div className='flex my-6'>
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
                <p className='text-black opacity-50 text-lg font-medium my-6'>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.</p>
                <p className='text-black opacity-50 text-lg font-medium my-6'>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
            </div>

            <div className='mx-[24px] mt-20 my-6'>
                <h2 className='text-black font-bold text-2xl tracking-widest my-6'>IN THE BOX</h2>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>Headphone Unit</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>2x <span className='text-black opacity-50 font-medium ml-6'>Replacement Earcups</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>User Manual</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>3.5mm 5m Audio Cable</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>Travel Bag</span></p>
            </div>

            {renderGallery()}

            <div className='h-[983px] mx-[24px] mt-20 flex flex-col items-center my-20'>
                <h2 className='text-black text-2xl font-bold tracking-[0.8px] my-4 mt-10'>YOU MAY ALSO LIKE</h2>
                <div className='flex flex-col items-center'>
                    <div className='my-4'>
                        <Image className='' src="/assets/shared/mobile/image-xx99-mark-one-headphones.jpg" width={327} height={120} alt='mark-1'></Image>
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
                        <Image className='' src="/assets/shared/mobile/image-xx59-headphones.jpg" width={327} height={120} alt='xx59'></Image>
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>XX59</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/headphones/xx59"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px]'>SEE PRODUCT</button></Link>
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

            <section className='bg-white py-6'>
                <Menu />
            </section>

            <section className='bg-white pt-12'>
                <Footer />
            </section>
        </div>

    )
}

export default renderComponent;