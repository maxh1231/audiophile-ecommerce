import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { props } from '../../utils/types'
import { useWindowSize } from '@/hooks/useWindowResize';

function PagePreviewMobile(): JSX.Element {
    return <Image src="/assets/product-zx7-speaker/mobile/image-product.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}
function PagePreviewTablet(): JSX.Element {
    return <Image src="/assets/product-zx7-speaker/tablet/image-product.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}
function PagePreviewDesktop(): JSX.Element {
    return <Image src="/assets/product-zx7-speaker/desktop/image-product.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

function renderGallery(): JSX.Element {
    return (
        <div className='mx-[24px] mt-20 flex flex-col md:flex-row items-center md:justify-center'>
            <div className='md:mr-4'>
                <div className='my-5 bg-cover'>
                    <Image src="/assets/product-zx7-speaker/mobile/image-gallery-1.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                </div>
                <div className='my-5 bg-cover'>
                    <Image src="/assets/product-zx7-speaker/mobile/image-gallery-2.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                </div>
            </div>
            <div className='md:my-5 bg-cover'>
                <Image src="/assets/product-zx7-speaker/mobile/image-gallery-3.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
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


const renderComponent = ({ cart, setCart, background, numItems, setNumItems }: props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const windowSize = useWindowSize();
    let pagePreview;

    if (windowSize.width && windowSize.width < 768) {
        pagePreview = PagePreviewMobile();
    } else if (windowSize.width && windowSize.width < 1024) {
        pagePreview = PagePreviewTablet();
    } else {
        pagePreview = PagePreviewDesktop();
    }

    return (
        <div className={`bg-white ${background}`}>
            <div className='py-4 mx-[24px]'>
                <Link className='text-lg text-black opacity-50 font-medium' href={'/'}>Go Back</Link>
            </div>
            <div className='mx-[24px] flex flex-col md:flex-row lg:justify-center lg:items-center'>
                <div className='md:w-5/12 md:m-4 lg:w-1/2 lg:max-w-[450px]'>
                    {pagePreview}
                </div>
                <div className='flex flex-col items-start justify-center my-2 md:w-7/12 lg:w-1/2 lg:max-w-[450px]'>
                    <h2 className='font-bold text-black text-left text-3xl tracking-[1px] mt-8'>ZX7<br />SPEAKER</h2>
                    <p className='opacity-50 font-medium text-lg text-black text-left px-2 my-6 lg:p-0'>Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                    <p className='text-black font-bold text-xl tracking-[1.2px]'>$ 3,500</p>
                    <ItemCounter cart={cart} setCart={setCart} name={"ZX7"} price={"3,500"} img={"/assets/product-zx7-speaker/mobile/image-product.jpg"} numItems={numItems} setNumItems={setNumItems} />
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-center'>
                <div className='mx-[24px] mt-20 lg:max-w-[700px]'>
                    <h2 className='text-black font-bold text-2xl tracking-widest my-6'>FEATURES</h2>
                    <p className='text-black opacity-50 text-lg font-medium my-6'>Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. </p>
                    <p className='text-black opacity-50 text-lg font-medium my-6'>The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.</p>
                </div>

                <div className='mx-[24px] mt-20 lg:w-fit'>
                    <h2 className='text-black font-bold text-2xl tracking-widest my-6'>IN THE BOX</h2>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>2x <span className='text-black opacity-50 font-medium ml-6'>Speaker Unit</span></p>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>2x <span className='text-black opacity-50 font-medium ml-6'>Speaker Cloth Panel</span></p>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>User Manual</span></p>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>3.5mm 7.5m Audio Cable</span></p>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>7.5m Optical Cable</span></p>
                </div>
            </div>

            {renderGallery()}

            <h2 className='text-black text-2xl font-bold tracking-[0.8px] my-4 mt-10 mx-[24px] text-center'>YOU MAY ALSO LIKE</h2>
            <div className='h-[983px] mx-[24px] mt-20 flex flex-col items-center my-20 md:flex-row md:h-[500px]'>
                <div className='flex flex-col items-center md:m-1'>
                    <div className='my-4'>
                        {windowSize.width && windowSize.width < 768 &&
                            <Image className='' src="/assets/shared/mobile/image-zx9-speaker.jpg" width={327} height={120} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width < 1024 && windowSize.width > 768 &&
                            <Image className='' src="/assets/shared/tablet/image-zx9-speaker.jpg" width={327} height={250} alt='mark-1'></Image>
                        }
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>ZX9 SPEAKER</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/speakers/zx9"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px] hover:cursor-pointer hover:bg-[#FBAF85]'>SEE PRODUCT</button></Link>
                    </div>
                </div>
                <div className='flex flex-col items-center md:m-1'>
                    <div className='my-4'>
                        {windowSize.width && windowSize.width < 768 &&
                            <Image className='' src="/assets/shared/mobile/image-xx99-mark-one-headphones.jpg" width={327} height={120} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width < 1024 && windowSize.width > 768 &&
                            <Image className='' src="/assets/shared/tablet/image-xx99-mark-one-headphones.jpg" width={327} height={250} alt='mark-1'></Image>
                        }
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>XX99 MARK I</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/headphones/xx99-mark-i"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px] hover:cursor-pointer hover:bg-[#FBAF85]'>SEE PRODUCT</button></Link>
                    </div>
                </div>

                <div className='flex flex-col items-center md:m-1'>
                    <div className='my-4'>
                        {windowSize.width && windowSize.width < 768 &&
                            <Image className='' src="/assets/shared/mobile/image-xx59-headphones.jpg" width={327} height={120} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width < 1024 && windowSize.width > 768 &&
                            <Image className='' src="/assets/shared/tablet/image-xx59-headphones.jpg" width={327} height={250} alt='mark-1'></Image>
                        }
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>XX59</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/headphones/xx59"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px] hover:cursor-pointer hover:bg-[#FBAF85]'>SEE PRODUCT</button></Link>
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