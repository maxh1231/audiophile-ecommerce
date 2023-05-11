import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { props } from '../../utils/types'

function PagePreview(): JSX.Element {
    return <Image src="/assets/product-zx9-speaker/mobile/image-product.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

function renderGallery(): JSX.Element {
    return (
        <div className='h-[726px] mx-[24px] mt-20'>
            <div className='my-5 bg-cover'>
                <Image src="/assets/product-zx9-speaker/mobile/image-gallery-1.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
            </div>
            <div className='my-5 bg-cover'>
                <Image src="/assets/product-zx9-speaker/mobile/image-gallery-2.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
            </div>
            <div className='my-5 bg-cover'>
                <Image src="/assets/product-zx9-speaker/mobile/image-gallery-3.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
            </div>
        </div>
    )
}

const Menu = dynamic(() =>
    import('../../components/Menu'))

const Footer = dynamic(() =>
    import('../../components/Footer')
)

const ItemCounter = dynamic(() =>
    import('../../components/ItemCounter')
)

const renderComponent = ({ cart, setCart, background }: props) => {
    return (
        <div className={`bg-white ${background}`}>
            <div className='mx-[24px]'>
                <div className='py-4'>
                    <Link className='text-lg text-black opacity-50 font-medium' href={'/'}>Go Back</Link>
                </div>
                <div>
                    {PagePreview()}
                </div>
                <div className='flex flex-col items-start justify-center my-2'>
                    <p className='text-[#D87D4A]  tracking-[10px] my-6'>NEW PRODUCT</p>
                    <h2 className='font-bold text-black text-left text-3xl tracking-[1px]'>ZX9<br />SPEAKER</h2>
                    <p className='opacity-50 font-medium text-lg text-black text-left px-2 my-6'>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                    <p className='text-black font-bold text-xl tracking-[1.2px]'>$ 4,500</p>
                    <ItemCounter cart={cart} setCart={setCart} name={"ZX9"} price={"4,500"} img={"/assets/product-zx9-speakers/mobile/image-product.jpg"} />
                </div>
            </div>

            <div className='mx-[24px] mt-20'>
                <h2 className='text-black font-bold text-2xl tracking-widest my-6'>FEATURES</h2>
                <p className='text-black opacity-50 text-lg font-medium my-6'>Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).</p>
                <p className='text-black opacity-50 text-lg font-medium my-6'>Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.</p>
            </div>

            <div className='mx-[24px] mt-20'>
                <h2 className='text-black font-bold text-2xl tracking-widest my-6'>IN THE BOX</h2>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>2x <span className='text-black opacity-50 font-medium ml-6'>Speaker Unit</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>2x <span className='text-black opacity-50 font-medium ml-6'>Speaker Cloth Panel</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>User Manual</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>3.5mm 10m Audio Cable</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>10m Optical Cable</span></p>
            </div>

            {renderGallery()}

            <div className='h-[983px] mx-[24px] mt-20 flex flex-col items-center my-20'>
                <h2 className='text-black text-2xl font-bold tracking-[0.8px] my-4 mt-10'>YOU MAY ALSO LIKE</h2>
                <div className='flex flex-col items-center'>
                    <div className='my-4'>
                        <Image className='' src="/assets/shared/mobile/image-zx7-speaker.jpg" width={327} height={120} alt='mark-1'></Image>
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>ZX7 SPEAKER</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/speakers/zx7"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px]'>SEE PRODUCT</button></Link>
                    </div>
                </div>

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
                        <Image className='' src="/assets/shared/mobile/image-xx59-headphones.jpg" width={327} height={120} alt='zx9'></Image>
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>XX59</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/headphones/xx59"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px]'>SEE PRODUCT</button></Link>
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