import Link from 'next/link';
import Image from 'next/image';
import { useWindowSize } from '../../hooks/useWindowResize';

function PagePreviewMobile(): JSX.Element {
    return <Image src="/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg" className='rounded-lg m-auto' alt="earphones" width={372} height={352} />
}
function PagePreviewTablet(): JSX.Element {
    return <Image src="/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg" className='rounded-lg mx-auto' alt="earphones" width={750} height={352} />
}
function PagePreviewDesktop(): JSX.Element {
    return <Image src="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg" className='rounded-lg' alt="earphones" width={750} height={352} />
}

const XXMarkIHeadphones = (): JSX.Element => {
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
        <div className='mx-[24px] flex flex-col lg:flex-row-reverse justify-center'>
            <div className='lg:w-1/2 lg:max-w-[500px]'>
                {pagePreview}
            </div>
            <div className='flex flex-col items-center justify-end lg:justify-center my-2 lg:w-1/2 lg:max-w-[500px] lg:items-start lg:ml-12'>
                <h2 className='font-bold text-black text-center text-3xl tracking-[1px] mt-4 lg:text-left'>XX99 MARK I<br />HEADPHONES</h2>
                <p className='opacity-50 font-medium text-lg text-black text-center px-2 my-4 md:w-3/4 lg:text-left lg:p-0'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                <Link href="/headphones/xx99-mark-i"><button className='bg-[#D87D4A] font-bold px-6 py-4 hover:cursor-pointer hover:bg-[#FBAF85]'>SEE PRODUCT</button></Link>
            </div>
        </div>
    )
}

export default XXMarkIHeadphones;