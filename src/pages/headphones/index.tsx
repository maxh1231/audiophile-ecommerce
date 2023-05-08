import dynamic from 'next/dynamic';

const XXMarkII = dynamic(() =>
    import('../../components/XXMarkII')
)

const XXMarkI = dynamic(() =>
    import('../../components/XXMarkI')
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
        </div>
    )
}

export default Headphones;