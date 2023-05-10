import Link from 'next/link';
import Image from 'next/image';

function PagePreview(): JSX.Element {
    return <Image src="/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

const ZX7Speaker = (): JSX.Element => {
    return (

        <div className='mx-[24px] h-[724px]'>
            <div>
                {PagePreview()}
            </div>
            <div className='flex flex-col items-center justify-end my-2'>
                <h2 className='font-bold text-black text-center text-3xl tracking-[1px] mt-4'>ZX7<br />SPEAKER</h2>
                <p className='opacity-50 font-medium text-lg text-black text-center px-2 my-4'>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                <Link href="/speakers/zx7"><button className='bg-[#D87D4A] font-bold px-6 py-4 my-'>SEE PRODUCT</button></Link>
            </div>
        </div>
    )
}

export default ZX7Speaker;