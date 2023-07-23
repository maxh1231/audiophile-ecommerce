import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { props } from '../../utils/types'
import { useWindowSize } from '@/hooks/useWindowResize';
import { useRouter } from 'next/router';

function PagePreviewMobile(): JSX.Element {
    return <Image src="/assets/product-zx9-speaker/mobile/image-product.jpg" className='rounded-lg m-auto' alt="earphones" width={372} height={352} />
}
function PagePreviewTablet(): JSX.Element {
    return <Image src="/assets/product-zx9-speaker/tablet/image-product.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}
function PagePreviewDesktop(): JSX.Element {
    return <Image src="/assets/product-zx9-speaker/desktop/image-product.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

function renderGallery(windowSize: number): JSX.Element {
    return (
        <div className='mx-[24px] mt-20 flex flex-col md:flex-row items-center md:justify-center'>
            <div className='md:mr-4'>
                <div className='my-5 bg-cover'>
                    {windowSize < 768 &&
                        <Image src="/assets/product-zx9-speaker/mobile/image-gallery-1.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                    }
                    {windowSize < 1024 && windowSize > 768 &&
                        <Image src="/assets/product-zx9-speaker/tablet/image-gallery-1.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                    }
                    {windowSize > 1024 &&
                        <Image src="/assets/product-zx9-speaker/desktop/image-gallery-1.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                    }
                </div>
                <div className='my-5 bg-cover'>
                    {windowSize < 768 &&
                        <Image src="/assets/product-zx9-speaker/mobile/image-gallery-2.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                    }
                    {windowSize < 1024 && windowSize > 768 &&
                        <Image src="/assets/product-zx9-speaker/tablet/image-gallery-2.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                    }
                    {windowSize > 1024 &&
                        <Image src="/assets/product-zx9-speaker/desktop/image-gallery-2.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                    }
                </div>
            </div>
            <div className='md:my-5 bg-cover'>
                {windowSize < 768 &&
                    <Image src="/assets/product-zx9-speaker/mobile/image-gallery-3.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                }
                {windowSize < 1024 && windowSize > 768 &&
                    <Image src="/assets/product-zx9-speaker/tablet/image-gallery-3.jpg" className='rounded-lg' alt="earphones" width={525} height={352} />
                }
                {windowSize > 1024 &&
                    <Image src="/assets/product-zx9-speaker/desktop/image-gallery-3.jpg" className='rounded-lg' alt="earphones" width={525} height={352} />
                }
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

const RenderComponent = ({ cart, setCart, background, numItems, setNumItems }: props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const windowSize = useWindowSize();
    let pagePreview;
    const router = useRouter();

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
                <button className='text-lg text-black opacity-50 font-medium' onClick={() => router.back()}>Go Back</button>
            </div>
            <div className='mx-[24px] flex flex-col md:flex-row lg:justify-center lg:items-center'>
                <div className='md:w-5/12 lg:w-1/2 md:m-4 lg:max-w-[450px]'>
                    {pagePreview}
                </div>
                <div className='flex flex-col items-start justify-center my-2 md:w-7/12 lg:w-1/2 lg:max-w-[450px]'>
                    <p className='text-[#D87D4A]  tracking-[10px] my-6'>NEW PRODUCT</p>
                    <h2 className='font-bold text-black text-left text-3xl tracking-[1px]'>ZX9<br />SPEAKER</h2>
                    <p className='opacity-50 font-medium text-lg text-black text-left my-6'>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                    <p className='text-black font-bold text-xl tracking-[1.2px]'>$ 4,500</p>
                    <ItemCounter cart={cart} setCart={setCart} name={"ZX9"} price={"4,500"} img={"/assets/product-zx9-speaker/mobile/image-product.jpg"} numItems={numItems} setNumItems={setNumItems} />
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-center'>
                <div className='mx-[24px] mt-20 lg:max-w-[700px]'>
                    <h2 className='text-black font-bold text-2xl tracking-widest my-6'>FEATURES</h2>
                    <p className='text-black opacity-50 text-lg font-medium my-6'>Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).</p>
                    <p className='text-black opacity-50 text-lg font-medium my-6'>Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.</p>
                </div>

                <div className='mx-[24px] mt-20 lg:w-fit'>
                    <h2 className='text-black font-bold text-2xl tracking-widest my-6'>IN THE BOX</h2>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>2x <span className='text-black opacity-50 font-medium ml-6'>Speaker Unit</span></p>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>2x <span className='text-black opacity-50 font-medium ml-6'>Speaker Cloth Panel</span></p>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>User Manual</span></p>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>3.5mm 10m Audio Cable</span></p>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>10m Optical Cable</span></p>
                </div>
            </div>

            {renderGallery(windowSize.width || 0)}

            <h2 className='text-black text-2xl font-bold tracking-[0.8px] my-4 mt-20 mx-[24px] text-center'>YOU MAY ALSO LIKE</h2>
            <div className='h-[983px] mx-[24px] mt-10 flex flex-col items-center my-20 md:flex-row md:h-[500px] lg:justify-center lg:mt-0'>
                <div className='flex flex-col items-center md:m-1 lg:m-2'>
                    <div className='my-4'>
                        {windowSize.width && windowSize.width < 768 &&
                            <Image className='' src="/assets/shared/mobile/image-zx7-speaker.jpg" width={327} height={120} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width < 1024 && windowSize.width > 768 &&
                            <Image className='' src="/assets/shared/tablet/image-zx7-speaker.jpg" width={327} height={250} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width > 1024 &&
                            <Image className='' src="/assets/shared/desktop/image-zx7-speaker.jpg" width={327} height={250} alt='mark-1'></Image>
                        }
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>ZX7 SPEAKER</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/speakers/zx7"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px] hover:cursor-pointer hover:bg-[#FBAF85]'>SEE PRODUCT</button></Link>
                    </div>
                </div>

                <div className='flex flex-col items-center md:m-1 lg:m-2'>
                    <div className='my-4'>
                        {windowSize.width && windowSize.width < 768 &&
                            <Image className='' src="/assets/shared/mobile/image-xx99-mark-one-headphones.jpg" width={327} height={120} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width < 1024 && windowSize.width > 768 &&
                            <Image className='' src="/assets/shared/tablet/image-xx99-mark-one-headphones.jpg" width={327} height={250} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width > 1024 &&
                            <Image className='' src="/assets/shared/desktop/image-xx99-mark-one-headphones.jpg" width={327} height={250} alt='mark-1'></Image>
                        }
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>XX99 MARK I</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/headphones/xx99-mark-i"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px] hover:cursor-pointer hover:bg-[#FBAF85]'>SEE PRODUCT</button></Link>
                    </div>
                </div>

                <div className='flex flex-col items-center md:m-1 lg:m-2'>
                    <div className='my-4'>
                        {windowSize.width && windowSize.width < 768 &&
                            <Image className='' src="/assets/shared/mobile/image-xx59-headphones.jpg" width={327} height={120} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width < 1024 && windowSize.width > 768 &&
                            <Image className='' src="/assets/shared/tablet/image-xx59-headphones.jpg" width={327} height={250} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width > 1024 &&
                            <Image className='' src="/assets/shared/desktop/image-xx59-headphones.jpg" width={327} height={250} alt='mark-1'></Image>
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

export default RenderComponent;