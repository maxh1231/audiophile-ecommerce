import dynamic from 'next/dynamic';


const NewProduct = dynamic(() =>
  import('../components/NewProduct'))

export default function Home() {
  return (
    <>
      <div className="">
        <NewProduct />
        <h1 className="text-white">Next</h1>
      </div>
    </>
  )
}
