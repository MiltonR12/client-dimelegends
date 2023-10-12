import Link from 'next/link'

function ButtonManage() {
  return (
    <Link
      className="bg-zinc-800 block text-center py-2 text-xl rounded-lg mb-3
            text-cyan-400"
      href='/record' >
      Administrar Torneos
    </Link>
  )
}

export default ButtonManage