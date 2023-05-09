import Image from 'next/image';

function PagePreview(): JSX.Element {
    return <Image src="/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg" className='rounded-lg' alt="earphones" width={372} height={352} />
}

const XX59Headphones = (): JSX.Element => {
    return (

        <div className='mx-[24px] h-[724px]'>
            <div>
                {PagePreview()}
            </div>
            <div className='flex flex-col items-center justify-end my-2'>
                <h2 className='font-bold text-black text-center text-3xl tracking-[1px] mt-4'>XX59<br />HEADPHONES</h2>
                <p className='opacity-50 font-medium text-lg text-black text-center px-2 my-4'>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                <button className='bg-[#D87D4A] font-bold px-6 py-4 my-'>SEE PRODUCT</button>
            </div>
        </div>
    )
}

export default XX59Headphones;