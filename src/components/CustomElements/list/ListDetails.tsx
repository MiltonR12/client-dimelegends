"use client"
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useState } from 'react'

type Props = {
  title: string,
  values: string[]
}

function ListDetails({ title, values }: Props) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='rounded-sm border-2 border-cyan-400' >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex justify-between items-center text-xl bg-black py-1 w-full px-3'
      >
        <span>{title}</span>
        {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>
      <ul className={`${isOpen ? "flex" : "hidden"} flex-col py-2 gap-2 bg-black`} >
        {values.map((item, index) => (
          <li
            className='ml-5 list-outside'
            key={index} > {item} </li>
        ))}
      </ul>
    </div>
  )
}

export default ListDetails