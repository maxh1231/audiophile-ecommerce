import Image from 'next/image';

function PagePreview(): JSX.Element {
    return <Image src="/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

const YX1Earphones = () => {
    return (
        <div className='mx-[24px] h-[724px]'>
            <div>
                {PagePreview()}
            </div>
            <div className='flex flex-col items-center justify-end my-2'>
                <p className='text-[#D87D4A]  tracking-[10px] my-4'>NEW PRODUCT</p>
                <h2 className='font-bold text-black text-center text-3xl tracking-[1px]'>YX1 WIRELESS<br />EARPHONES</h2>
                <p className='opacity-50 font-medium text-lg text-black text-center px-2 my-4'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                <button className='bg-[#D87D4A] font-bold px-6 py-4 my-'>SEE PRODUCT</button>
            </div>
        </div>
    )
}

export default YX1Earphones;