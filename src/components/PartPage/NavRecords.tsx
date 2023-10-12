"use client"
import React, { useState } from 'react'
import ListRecord from '../CustomElements/list/ListRecord'
import Link from 'next/link'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import PrimaryButton from '../CustomElements/Buttons/PrimaryButton'

function NavRecords() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`max-w-xs w-full h-screen left-0 top-0 z-50 bg-slate-950 fixed transition-all
    ${isOpen ? "-translate-x-full" : ""}`} >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='absolute -right-7 top-2/4 text-5xl z-50 text-cyan-400' >
        {isOpen ? <AiOutlineRightCircle /> : <AiOutlineLeftCircle />}
      </button>
      <div className='flex flex-col justify-between h-screen' >
        <h3 className="text-center text-3xl text-cyan-400 font-semibold py-3" >
          TORNEOS
        </h3>
        <ListRecord closeNav={() => setIsOpen(true)} />
        <PrimaryButton href='/torneo/create' >
          Crear Torneo
        </PrimaryButton>
      </div>
    </div>
  )
}

export default NavRecords