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

interface Background {
    background: string,
}

const Headphones = ({ background }: Background): JSX.Element => {
    return (
        <div className={`${background}`}>
            <header className="h-[102px] flex justify-center items-center">
                <h1 className="font-bold text-2xl tracking-[2px]">
                    HEADPHONES
                </h1>
            </header>

            <div className='bg-white'>
                <section className='bg-white py-12 md:pb-0'>
                    <XXMarkII />
                </section>

                <section className='bg-white py-12 md:pb-0'>
                    <XXMarkI />
                </section>

                <section className='bg-white py-12 md:pb-0 lg:pb-12'>
                    <XX59 />
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

export default Headphones;