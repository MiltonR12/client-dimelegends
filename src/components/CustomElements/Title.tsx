import { Anton } from 'next/font/google'
import Link from 'next/link'

const text = Anton({
  style: ["normal"],
  weight: ["400"],
  subsets: ["latin"]
})

function Title() {
  return (
    <div className="text-center" >
      <h1 className={`${text.className} text-7xl lg:text-9xl font-semibold bg-clip-text text-transparent bg-gradient-to-r to-cyan-400 from-blue-600 py-3
      transition-all`} >
        Dime Legends
      </h1>
      <div
        className='bg-cyan-400 h-1 w-full'
      ></div>
      <p className="text-xl sm:text-3xl text-zinc-300 my-5 sm:my-10" >
        Crea, Participa y Gana en torneos
      </p>
      <div className='flex justify-center max-w-xs mx-auto' >
        <Link
          className='bg-cyan-400 border-cyan-400 border-4 text-center rounded-xl py-2
        cursor-pointer text-2xl font-semibold text-slate-950 w-full'
          href={'/torneos'} >
          Torneos
        </Link>
      </div>
    </div>
  )
}

export default Title