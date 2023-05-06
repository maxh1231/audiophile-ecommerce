import dynamic from 'next/dynamic';


const NewProduct = dynamic(() =>
  import('../components/NewProduct'))

const Menu = dynamic(() =>
  import('../components/Menu'))

export default function Home() {
  return (
    <>
      <div className="">
        <NewProduct />
        <section className='bg-white'>
          <div className='py-10'>
            <Menu />;
          </div>
        </section>

        <h1 className="text-white">Next</h1>
      </div>
    </>
  )
}
