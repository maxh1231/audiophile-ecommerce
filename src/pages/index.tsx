import dynamic from 'next/dynamic';


const NewProduct = dynamic(() =>
  import('../components/NewProduct'))

const Menu = dynamic(() =>
  import('../components/Menu'))

const ZX9Speaker = dynamic(() =>
  import('../components/ZX9Speaker')
)

const ZX7Speaker = dynamic(() =>
  import('../components/ZX7Speaker')
)

const YX1Earphones = dynamic(() =>
  import('../components/YX1Earphones')
)

const BestGear = dynamic(() =>
  import('../components/BestGear')
)

const Footer = dynamic(() =>
  import('../components/Footer')
)

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <NewProduct />
        <section>
          <div className='py-10 bg-white'>
            <Menu />;
          </div>
        </section>
        <section className='bg-white py-10'>
          <ZX9Speaker />
        </section>
        <section className='bg-white py-10'>
          <ZX7Speaker />
        </section>
        <section className='bg-white py-10'>
          <YX1Earphones />
        </section>
        <section className='bg-white py-10'>
          <BestGear />
        </section>
        <section className='bg-white pt-10'>
          <Footer />
        </section>
      </div>
    </>
  )
}
