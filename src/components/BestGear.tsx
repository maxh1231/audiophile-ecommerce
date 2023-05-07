const BestGear = (): JSX.Element => {
    return (
        <div className="flex flex-col h-[698px] mx-[24px]">
            <div className="bg-mobile-best-gear h-1/2 bg-cover bg-no-repeat rounded-md"></div>
            <div className="flex flex-col items-center justify-center h-1/2 my-6">
                <h3 className="text-black font-bold text-[28px] tracking-[1px] text-center my-6">BRINGING YOU THE <span className="text-[#D97D4A]">BEST</span> AUDIO GEAR</h3>
                <p className="text-black text-center opacity-50 font-medium leading-[25px]">Located at the heart of New York City, Audipphile is the preimer store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience. Stop by our store to meet some of the fantastic people who make Audiphile the best place to buy your portable audio equipment.</p>
            </div>
        </div>
    )
}

export default BestGear;