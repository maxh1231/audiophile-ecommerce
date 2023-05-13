import dynamic from 'next/dynamic';


const YX1Earphones = dynamic(() =>
    import('../../components/Earphones/YX1Earphones')
)

const Menu = dynamic(() =>
    import('../../components/Menu'))

const Footer = dynamic(() =>
    import('../../components/Footer')
)

interface Background {
    background: string,
}

const Earphones = ({ background }: Background) => {
    return (
        <div className={`${background}`}>
            <header className="h-[102px]  flex justify-center items-center">
                <h1 className="font-bold text-2xl tracking-[2px]">
                    EARPHONES
                </h1>
            </header>

            <div className='bg-white'>
                <section className='bg-white py-12'>
                    <YX1Earphones />
                </section>

                <section className='bg-white py-12'>
                    <Menu />
                </section>

                <section className='bg-white pt-12'>
                    <Footer />
                </section>
            </div>
        </div>
    )
}

export default Earphones;