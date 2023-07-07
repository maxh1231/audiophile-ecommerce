import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { props } from '../../utils/types'
import { useWindowSize } from '@/hooks/useWindowResize';
import { useRouter } from 'next/router';

function PagePreviewMobile(): JSX.Element {
    return <Image src="/assets/product-xx59-headphones/mobile/image-product.jpg" className='rounded-lg m-auto' alt="earphones" width={372} height={352} />
}
function PagePreviewTablet(): JSX.Element {
    return <Image src="/assets/product-xx59-headphones/tablet/image-product.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}
function PagePreviewDesktop(): JSX.Element {
    return <Image src="/assets/product-xx59-headphones/desktop/image-product.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

function renderGallery(windowSize: number): JSX.Element {
    return (
        <div className='mx-[24px] mt-10 flex flex-col md:flex-row items-center md:justify-center'>
            <div className='md:mr-4'>
                <div className='my-5 bg-cover'>
                    {windowSize < 768 &&
                        <Image src="/assets/product-xx59-headphones/mobile/image-gallery-1.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                    }
                    {windowSize < 1024 && windowSize > 768 &&
                        <Image src="/assets/product-xx59-headphones/tablet/image-gallery-1.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                    }
                    {windowSize > 1024 &&
                        <Image src="/assets/product-xx59-headphones/desktop/image-gallery-1.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                    }
                </div>
                <div className='my-5 bg-cover'>
                    {windowSize < 768 &&
                        <Image src="/assets/product-xx59-headphones/mobile/image-gallery-2.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                    }
                    {windowSize < 1024 && windowSize > 768 &&
                        <Image src="/assets/product-xx59-headphones/tablet/image-gallery-2.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                    }
                    {windowSize > 1024 &&
                        <Image src="/assets/product-xx59-headphones/desktop/image-gallery-2.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                    }
                </div>
            </div>
            <div className='md:my-5 bg-cover'>
                {windowSize < 768 &&
                    <Image src="/assets/product-xx59-headphones/mobile/image-gallery-3.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
                }
                {windowSize < 1024 && windowSize > 768 &&
                    <Image src="/assets/product-xx59-headphones/tablet/image-gallery-3.jpg" className='rounded-lg' alt="earphones" width={525} height={352} />
                }
                {windowSize > 1024 &&
                    <Image src="/assets/product-xx59-headphones/desktop/image-gallery-3.jpg" className='rounded-lg' alt="earphones" width={525} height={352} />
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


const renderComponent = ({ cart, setCart, background, numItems, setNumItems }: props) => {
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
                <div className='md:w-5/12 md:m-4 lg:w-1/2 lg:max-w-[450px]'>
                    {pagePreview}
                </div>
                <div className='flex flex-col items-start justify-center my-2 md:w-7/12 lg:w-1/2 lg:max-w-[450px]'>
                    <h2 className='font-bold text-black text-left text-3xl tracking-[1px] mt-8'>XX59<br />HEADPHONES</h2>
                    <p className='opacity-50 font-medium text-lg text-black text-left my-6'>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                    <p className='text-black font-bold text-xl tracking-[1.2px]'>$ 899</p>
                    <ItemCounter cart={cart} setCart={setCart} name={"XX59"} price={"899"} img={"/assets/product-xx59-headphones/mobile/image-product.jpg"} numItems={numItems} setNumItems={setNumItems} />
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-center'>
                <div className='mx-[24px] mt-20 lg:max-w-[700px]'>
                    <h2 className='text-black font-bold text-2xl tracking-widest my-6'>FEATURES</h2>
                    <p className='text-black opacity-50 text-lg font-medium my-6'>These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.</p>
                    <p className='text-black opacity-50 text-lg font-medium my-6'>More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.</p>
                </div>

                <div className='mx-[24px] mt-20 lg:w-fit'>
                    <h2 className='text-black font-bold text-2xl tracking-widest my-6'>IN THE BOX</h2>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>Headphone Unit</span></p>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>2x <span className='text-black opacity-50 font-medium ml-6'>Replacement Earcups</span></p>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>User Manual</span></p>
                    <p className='text-[#D87D4A] font-bold text-lg my-2'>1x <span className='text-black opacity-50 font-medium ml-6'>3.5mm 5m Audio Cable</span></p>
                </div>
            </div>

            {renderGallery(windowSize.width || 0)}

            <h2 className='text-black text-2xl font-bold tracking-[0.8px] my-4 mt-20 mx-[24px] text-center'>YOU MAY ALSO LIKE</h2>
            <div className='h-[983px] mx-[24px] mt-10 flex flex-col items-center my-20 md:flex-row md:h-[500px] lg:justify-center lg:mt-0'>
                <div className='flex flex-col items-center md:m-1 lg:m-2'>
                    <div className='my-4'>
                        {windowSize.width && windowSize.width < 768 &&
                            <Image className='' src="/assets/shared/mobile/image-xx99-mark-two-headphones.jpg" width={327} height={120} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width < 1024 && windowSize.width > 768 &&
                            <Image className='' src="/assets/shared/tablet/image-xx99-mark-two-headphones.jpg" width={327} height={250} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width > 1024 &&
                            <Image className='' src="/assets/shared/desktop/image-xx99-mark-two-headphones.jpg" width={327} height={250} alt='mark-1'></Image>
                        }
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>XX99 MARK II</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/headphones/xx99-mark-i"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px] hover:cursor-pointer hover:bg-[#FBAF85]'>SEE PRODUCT</button></Link>
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
                            <Image className='' src="/assets/shared/mobile/image-zx9-speaker.jpg" width={327} height={120} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width < 1024 && windowSize.width > 768 &&
                            <Image className='' src="/assets/shared/tablet/image-zx9-speaker.jpg" width={327} height={250} alt='mark-1'></Image>
                        }
                        {windowSize.width && windowSize.width > 1024 &&
                            <Image className='' src="/assets/shared/desktop/image-zx9-speaker.jpg" width={327} height={250} alt='mark-1'></Image>
                        }
                    </div>
                    <div className='my-4'>
                        <h2 className='text-black text-2xl font-bold tracking-[0.8px]'>ZX9 SPEAKER</h2>
                    </div>
                    <div className='my-4'>
                        <Link href="/speakers/zx9"><button className='bg-[#D87D4A] font-bold px-6 py-4 tracking-[1px] hover:cursor-pointer hover:bg-[#FBAF85]'>SEE PRODUCT</button></Link>
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