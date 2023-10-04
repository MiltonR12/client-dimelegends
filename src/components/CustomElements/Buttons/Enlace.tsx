import Link from 'next/link'

function Enlace({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li className='hover:text-cyan-400 transition-all hover:border-b-2 border-cyan-400' >
      <Link href={href} >
        {children}
      </Link>
    </li>
  )
}

export default Enlace