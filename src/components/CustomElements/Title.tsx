import { Anton } from 'next/font/google'

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
      <button
        className='bg-zinc-950 border-2 border-cyan-400 rounded-lg py-2 w-full 
        max-w-sm text-2xl text-cyan-400'>
        JUGAR
      </button>
    </div>
  )
}

export default Title