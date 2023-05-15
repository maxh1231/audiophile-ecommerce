import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { props } from '../../utils/types'

function PagePreview(): JSX.Element {
    return <Image src="/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

function renderGallery(): JSX.Element {
    return (
        <div className='h-[726px] mx-[24px] mt-20'>
            <div className='my-5 bg-cover'>
                <Image src="/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
            </div>
            <div className='my-5 bg-cover'>
                <Image src="/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
            </div>
            <div className='my-5 bg-cover'>
                <Image src="/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
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
                    <h2 className='font-bold text-black text-left text-3xl tracking-[1px] mt-8'>XX99 MARK I<br />HEADPHONES</h2>
                    <p className='opacity-50 font-medium text-lg text-black text-left px-2 my-6'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                    <p className='text-black font-bold text-xl tracking-[1.2px]'>$ 1,750</p>
                    <ItemCounter cart={cart} setCart={setCart} name={"XX99 MK I"} price={"1,750"} img={"/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"} />

                </div>
            </div>

            <div className='mx-[24px] mt-20'>
                <h2 className='text-black font-bold text-2xl tracking-widest my-6'>FEATURES</h2>
                <p className='text-black opacity-50 text-lg font-medium my-6'>As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.</p>
                <p className='text-black opacity-50 text-lg font-medium my-6'>From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.</p>
            </div>

            <div className='mx-[24px] mt-20'>
                <h2 className='text-black font-bold text-2xl tracking-widest my-6'>IN THE BOX</h2>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>Headphone Unit</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>2x <span className='text-black opacity-50 font-medium ml-6'>Replacement Earcups</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>User Manual</span></p>
                <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>3.5mm 5m Audio Cable</span></p>
            </div>

            {renderGallery()}

            <div className='h-[983px] mx-[24px] mt-20 flex flex-col items-center my-20'>
                <h2 className='text-black text-2xl font-bold tracking-[0.8px] my-4 mt-10'>YOU MAY ALSO LIKE</h2>
                <div className='flex flex-col items-center'>
                    <div className='my-4'>
                        <Image className='' src="/assets/shared/mobile/image-xx99-mark-two-headphones.jpg" width={327} height={120} alt='mark-1'></Image>
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>XX99 MARK II</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/headphones/xx99-mark-ii"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px]'>SEE PRODUCT</button></Link>
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