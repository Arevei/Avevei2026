
import { DollarSign, Handshake, Moon, Watch } from 'lucide-react'
const Features = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 px-8">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-black">
            100+ Professionals
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-green-400 sm:text-4xl lg:text-5xl">
          Get a team of Professionals working for YOU
        </h2>
        <p className="mt-4 text-xl leading-relaxed text-white">
          Arevei is known for Perfectionism and Timely Delivery
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-5 lg:grid-cols-2">
        <div className='w-[70%] mx-auto border-r-[0.5px] border-b-[0.5px] border-r-gray-500 border-b-gray-500 rounded-lg p-5'>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <DollarSign className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-[#14B8A6]">Business Growth</h3>
          <p className="mt-4 text-sm text-white">
            Expand your reach and Boost revenue with strategic branding
          </p>
        </div>
        <div className='w-[70%] mx-auto'>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Handshake className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-[#14B8A6]">Collaboration</h3>
          <p className="mt-4 text-sm text-whhite">
            Join hands with Arevei to unlock Innovative Partnership Oppurtunities
          </p>
        </div>
        <div className='w-[70%] mx-auto'>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Moon className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-[#14B8A6]">Creativity</h3>
          <p className="mt-4 text-sm text-white">
            Elevate your brand with Global Talent Pool! Collaborate with Industry Experts for every Creative Eendeavour
          </p>
        </div>
        <div className='w-[70%] mx-auto border-t-[0.5px] border-l-[0.5px] border-t-gray-500 border-l-gray-500 rounded-lg p-5'>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Watch className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-[#14B8A6]">Time Matters</h3>
          <p className="mt-4 text-sm text-white">
            At Arevei, We prioritize your time and ensure swift project completion
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features