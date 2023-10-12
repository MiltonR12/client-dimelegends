import Link from 'next/link'

type Props = {
  href: string,
  children: React.ReactNode,
  target?: "_blank" | "_parent" | "_self" | "_top"
}

function PrimaryButton({ href, children, target }: Props) {

  if (href.charAt(0) === '/') {
    return <Link
      target={target}
      className='bg-cyan-400 border-cyan-400 border-4 text-center rounded-xl py-2 px-4
        cursor-pointer text-xl font-semibold text-slate-950'
      href={href} >
      {children}
    </Link>
  }

  return <a
    target={target}
    className='bg-cyan-400 border-cyan-400 border-4 text-center rounded-xl py-2
        cursor-pointer text-xl font-semibold text-slate-950'
    href={href} >
    {children}
  </a>
}

export default PrimaryButton