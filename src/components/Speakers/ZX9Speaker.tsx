import Link from 'next/link';
import Image from 'next/image';

function PagePreview(): JSX.Element {
    return <Image src="/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

const ZX9Speaker = (): JSX.Element => {
    return (

        <div className='mx-[24px] h-[724px]'>
            <div>
                {PagePreview()}
            </div>
            <div className='flex flex-col items-center justify-end my-2'>
                <p className='text-[#D87D4A]  tracking-[10px] my-4'>NEW PRODUCT</p>
                <h2 className='font-bold text-black text-center text-3xl tracking-[1px]'>ZX9<br />SPEAKER</h2>
                <p className='opacity-50 font-medium text-lg text-black text-center px-2 my-4'>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                <Link href="/speakers/zx9"><button className='bg-[#D87D4A] font-bold px-6 py-4 hover:cursor-pointer hover:bg-[#FBAF85]'>SEE PRODUCT</button></Link>
            </div>
        </div>
    )
}

export default ZX9Speaker;