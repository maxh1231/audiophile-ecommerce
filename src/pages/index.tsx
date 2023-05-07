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

export default function Home() {
  return (
    <>
      <div className="">
        <NewProduct />
        <section className='bg-white'>
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

        <h1 className="text-white">Next</h1>
      </div>
    </>
  )
}
