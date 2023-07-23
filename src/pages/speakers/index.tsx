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

interface Background {
    background: string,
}

const Speakers = ({ background }: Background) => {
    return (
        <div className={`${background}`}>
            <header className="h-[102px]  flex justify-center items-center">
                <h1 className="font-bold text-2xl tracking-[2px]">
                    SPEAKERS
                </h1>
            </header>
            <div className='bg-white'>
                <section className='bg-white py-12 md:pb-0'>
                    <ZX9 />
                </section>

                <section className='bg-white py-12 md:pb-0 lg:pb-12'>
                    <ZX7 />
                </section>

                <section className='bg-white py-12 md:pb-0'>
                    <Menu />
                </section>

                <section className='bg-white pt-12'>
                    <Footer />
                </section>
            </div>
        </div>
    )
}

export default Speakers;