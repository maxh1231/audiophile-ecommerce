import dynamic from 'next/dynamic';


const NewProduct = dynamic(() =>
  import('../components/Home/NewProduct'))

const Menu = dynamic(() =>
  import('../components/Menu'))

const ZX9Speaker = dynamic(() =>
  import('../components/Home/ZX9Speaker')
)

const ZX7Speaker = dynamic(() =>
  import('../components/Home/ZX7Speaker')
)

const YX1Earphones = dynamic(() =>
  import('../components/Home/YX1Earphones')
)

const Footer = dynamic(() =>
  import('../components/Footer')
)

interface Background {
  background: string,
}

export default function Home({ background }: Background) {
  return (
    <>
      <div className={`bg-white ${background}`}>
        <NewProduct />
        <section>
          <div className='py-10 md:pt-10 md:pb-0 bg-white'>
            <Menu />;
          </div>
        </section>
        <section className='bg-white py-10 md:pt-0'>
          <ZX9Speaker />
        </section>
        <section className='bg-white py-10 md:pt-0'>
          <ZX7Speaker />
        </section>
        <section className='bg-white py-10 md:pt-0'>
          <YX1Earphones />
        </section>
        <section className='bg-white pt-10'>
          <Footer />
        </section>
      </div>
    </>
  )
}
