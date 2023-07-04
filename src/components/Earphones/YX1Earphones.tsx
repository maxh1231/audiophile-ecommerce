import Link from 'next/link';
import Image from 'next/image';
import { useWindowSize } from '@/hooks/useWindowResize';

function PagePreviewMobile(): JSX.Element {
    return <Image src="/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}
function PagePreviewTablet(): JSX.Element {
    return <Image src="/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg" className='rounded-lg mx-auto' alt="earphones" width={750} height={352} />
}
function PagePreviewDesktop(): JSX.Element {
    return <Image src="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg" className='rounded-lg' alt="earphones" width={750} height={352} />
}

const YX1Earphones = (): JSX.Element => {
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
            <div className='flex flex-col items-center justify-end my-2 lg:w-1/2 lg:max-w-[500px] lg:items-start lg:ml-12'>
                <p className='text-[#D87D4A]  tracking-[10px] my-4'>NEW PRODUCT</p>
                <h2 className='font-bold text-black text-center text-3xl tracking-[1px] lg:text-left'>YX1 WIRELESS<br />EARPHONES</h2>
                <p className='opacity-50 font-medium text-lg text-black text-center px-2 my-4 lg:text-left lg:p-0'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                <Link href="/earphones/yx1"><button className='bg-[#D87D4A] font-bold px-6 py-4 hover:cursor-pointer hover:bg-[#FBAF85]'>SEE PRODUCT</button></Link>
            </div>
        </div>
    )
}

export default YX1Earphones;