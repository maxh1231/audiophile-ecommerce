import Link from 'next/link';
import Image from 'next/image';
import { useWindowSize } from '../../hooks/useWindowResize';

function PagePreviewMobile(): JSX.Element {
    return <Image src="/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg" className='rounded-lg m-auto' alt="earphones" width={372} height={352} />
}
function PagePreviewTablet(): JSX.Element {
    return <Image src="/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg" className='rounded-lg mx-auto' alt="earphones" width={750} height={352} />
}
function PagePreviewDesktop(): JSX.Element {
    return <Image src="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg" className='rounded-lg mx-auto' alt="earphones" width={750} height={352} />
}

const ZX9Speaker = (): JSX.Element => {
    const windowSize = useWindowSize()
    let pagePreview;

    if (windowSize.width && windowSize.width < 768) {
        pagePreview = PagePreviewMobile();
    } else if (windowSize.width && windowSize.width < 1024) {
        pagePreview = PagePreviewTablet();
    } else {
        pagePreview = PagePreviewDesktop();
    }

    return (
        <div className='mx-[24px] flex flex-col lg:flex-row lg:justify-center lg:items-center'>
            <div className='lg:w-1/2 lg:max-w-[450px]'>
                {pagePreview}
            </div>
            <div className='flex flex-col items-center justify-end my-2 lg:w-1/2 lg:max-w-[450px] lg:items-start lg:ml-24'>
                <p className='text-[#D87D4A]  tracking-[10px] my-4'>NEW PRODUCT</p>
                <h2 className='font-bold text-black text-center text-3xl tracking-[1px] lg:text-left'>ZX9<br />SPEAKER</h2>
                <p className='opacity-50 font-medium text-lg text-black text-center px-2 my-4 lg:text-left lg:p-0'>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                <Link href="/speakers/zx9"><button className='bg-[#D87D4A] font-bold px-6 py-4 hover:cursor-pointer hover:bg-[#FBAF85]'>SEE PRODUCT</button></Link>
            </div>
        </div>
    )
}

export default ZX9Speaker;