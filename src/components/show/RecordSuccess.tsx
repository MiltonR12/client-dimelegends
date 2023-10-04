import Link from 'next/link'
import good from '@/imgs/icons/good.png'
import Image from 'next/image'

function RecordSuccess() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 p-5' >
      <h3 className='text-center text-3xl md:text-5xl font-semibold py-2
      bg-gradient-to-tr from-violet-700 to-orange-500 text-transparent bg-clip-text' >
        Registro Exitoso!
      </h3>
      <div className='text-9xl text-green-500' >
        <Image src={good} alt='bien' />
      </div>
      <Link href="/torneos"
        className='bg-zinc-800 w-full text-center py-2 rounded-lg text-3xl' >
        Regresar
      </Link>
    </div>
  )
}

export default RecordSuccess