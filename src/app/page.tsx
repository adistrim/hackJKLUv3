import Image from 'next/image'
import Header from './components/header'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen flex-col mx-24">
        <div className="border bg-transparent shadow-[0_0_5px_rgba(0,0,0,0.1)] flex items-start mx-0 my-5 p-5 rounded-[3rem] border-2 border-solid border-[#eee]">
          <div className="bg-white flex flex-col md:flex-row p-4">
            <h2>something</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
