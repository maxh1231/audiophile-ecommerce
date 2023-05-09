import dynamic from 'next/dynamic';


const ZX9 = dynamic(() =>
    import('../../components/Speakers/ZX9Speaker')
)

const ZX7 = dynamic(() =>
    import('../../components/Speakers/ZX7Speaker')
)

const Menu = dynamic(() =>
    import('../../components/Menu'))

const Footer = dynamic(() =>
    import('../../components/Footer')
)

const Speakers = () => {
    return (
        <div className=''>
            <header className="h-[102px]  flex justify-center items-center">
                <h1 className="font-bold text-2xl tracking-[2px]">
                    SPEAKERS
                </h1>
            </header>

            <section className='bg-white py-12'>
                <ZX9 />
            </section>

            <section className='bg-white py-12'>
                <ZX7 />
            </section>

            <section className='bg-white py-12'>
                <Menu />
            </section>

            <section className='bg-white pt-12'>
                <Footer />
            </section>

        </div>
    )
}

export default Speakers;