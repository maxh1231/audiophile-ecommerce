import Image from 'next/image';

function PagePreview(): JSX.Element {
    return <Image src="/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

const XXMarkIHeadphones = (): JSX.Element => {
    return (

        <div className='mx-[24px] h-[724px]'>
            <div>
                {PagePreview()}
            </div>
            <div className='flex flex-col items-center justify-end my-2'>
                <h2 className='font-bold text-black text-center text-3xl tracking-[1px] mt-4'>XX99 MARK I<br />HEADPHONES</h2>
                <p className='opacity-50 font-medium text-lg text-black text-center px-2 my-4'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                <button className='bg-[#D87D4A] font-bold px-6 py-4 my-'>SEE PRODUCT</button>
            </div>
        </div>
    )
}

export default XXMarkIHeadphones;