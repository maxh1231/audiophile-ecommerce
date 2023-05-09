import Image from 'next/image';

function PagePreview(): JSX.Element {
    return <Image src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

const XXMarkIIHeadphones = (): JSX.Element => {
    return (

        <div className='mx-[24px] h-[724px]'>
            <div>
                {PagePreview()}
            </div>
            <div className='flex flex-col items-center justify-end my-2'>
                <p className='text-[#D87D4A]  tracking-[10px] my-4'>NEW PRODUCT</p>
                <h2 className='font-bold text-black text-center text-3xl tracking-[1px]'>XX99 MARK II<br />HEADPHONES</h2>
                <p className='opacity-50 font-medium text-lg text-black text-center px-2 my-4'>The new XX99 Mark II headphones are the pinnicale of pristine audio. It redefines your premium headphones experience by reporducing the balanced depth and precision of studio-quality sound.</p>
                <button className='bg-[#D87D4A] font-bold px-6 py-4 my-'>SEE PRODUCT</button>
            </div>
        </div>
    )
}

export default XXMarkIIHeadphones;