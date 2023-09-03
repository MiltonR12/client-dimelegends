"use client"
import { useUserState } from '@/state/user'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavSession from '../CustomElements/NavSession'

function Navigation() {

  const { user, isAllow } = useUserState()

  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='bg-slate-950 text-white fixed w-full' >
      <div
        className='max-w-7xl mx-auto flex items-center justify-between h-14 md:h-20 px-3' >

        <Link href='/' >
          <h1 className='text-2xl text-cyan-400 font-semibold md:text-3xl' >
            Dime Legends
          </h1>
        </Link>

        <button
          onClick={handleClick}
          className='p-1 border rounded-sm border-zinc-300 md:hidden' >
          <GiHamburgerMenu />
        </button>

        <nav
          className={`absolute top-14 w-full bg-slate-950 p-5 transition-all flex flex-col gap-5 md:flex-row items-center md:inset-0 md:relative md:w-auto md:p-0 ${isOpen ? "left-0" : "left-full"} `} >

          <ul className='flex flex-col gap-3 items-center text-2xl md:flex-row' >
            <li>
              <Link href='/' >Home</Link>
            </li>
            <li>
              <Link href='/torneos' >Torneos</Link>
            </li>
            <li>
              <Link href='/contacto' >Contacto</Link>
            </li>
          </ul>

          { isClient && !isAllow && <NavSession />}
          { isClient && isAllow && <Link
            href={`/user/${user.firstName}`}
            className='bg-cyan-500 rounded-full h-14 w-14 items-center justify-center
            text-3xl font-semibold hidden md:flex' >
            <h3> {user.firstName.charAt(0)} </h3>
          </Link>}

        </nav>
      </div>
    </header>
  )
}

export default Navigation
