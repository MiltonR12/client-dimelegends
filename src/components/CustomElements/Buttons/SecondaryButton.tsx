import Link from 'next/link'

type Props = {
  href: string,
  children: React.ReactNode,
  target?: string
}

function SecondaryButton({ href, children }: Props) {

  if (href.charAt(0) === '/') {
    return <Link
      className='border-4 border-cyan-400 bg-black rounded-xl text-center py-2 
      cursor-pointer text-xl block'
      href={href} >
      {children}
    </Link>
  }

  return (
    <a
      target="_blank"
      className='border-4 border-cyan-400 bg-black rounded-xl text-center py-2 
      cursor-pointer text-xl block'
      href={href} >
      {children}
    </a>
  )
}

export default SecondaryButton