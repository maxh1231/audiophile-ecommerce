import dynamic from 'next/dynamic';

const XXMarkII = dynamic(() =>
    import('../../components/Headphones/XXMarkIIHeadphones')
)

const XXMarkI = dynamic(() =>
    import('../../components/Headphones/XXMarkIHeadphones')
)

const XX59 = dynamic(() =>
    import('../../components/Headphones/XX59Headphones')
)

const Menu = dynamic(() =>
    import('../../components/Menu'))

const Footer = dynamic(() =>
    import('../../components/Footer')
)

const Headphones = (): JSX.Element => {
    return (
        <div className=''>
            <header className="h-[102px]  flex justify-center items-center">
                <h1 className="font-bold text-2xl tracking-[2px]">
                    HEADPHONES
                </h1>
            </header>

            <section className='bg-white py-12'>
                <XXMarkII />
            </section>

            <section className='bg-white py-12'>
                <XXMarkI />
            </section>

            <section className='bg-white py-12'>
                <XX59 />
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

export default Headphones;