import Link from 'next/link'

function NavSession() {
  return (
    <div className='flex gap-3 justify-center text-xl font-semibold' >
      <Link
        className='bg-cyan-500 text-slate-950 border-cyan-500 border-2 py-1 px-2 rounded-lg'
        href='/login' >Iniciar Session</Link>
      <Link
        className='text-cyan-500 border-cyan-500 border-2 py-1 px-2 rounded-lg'
        href='/register' >Registrarse</Link>
    </div>
  )
}

export default NavSession