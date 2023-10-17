import Link from 'next/link'

function Enlace({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li className='hover:text-red-600 transition-all hover:border-b-2 border-red-600
    font-semibold' >
      <Link href={href} >
        {children}
      </Link>
    </li>
  )
}

export default Enlace