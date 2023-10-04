"use client"
import { Record } from '@/types/interfaces'
import { AiFillDelete } from 'react-icons/ai'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useDeleteRecord } from '@/hooks/useRecord'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import PlayersList from '../CustomElements/list/PlayersList'
import { useState } from 'react'
import { showDelete } from '../show/DeleteShow'

function CardRecord({ record }: { record: Record }) {

  const [isOpen, setIsOpen] = useState(false)
  const { mutate: deleteRecord } = useDeleteRecord()
  const params = useParams()

  const handlerDelete = () => {
    showDelete({
      onSuccess() {
        deleteRecord({ nro: params.nro as string, id: record.teamID })
      }
    })
  }

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <tr className='grid grid-cols-4 gap-2 p-2' >
        <td>{record.teamName}</td>
        <td>{record.phone}</td>
        <td>{record.captain}</td>
        <td className='flex justify-around text-2xl' >
          <button onClick={handleClick} >
            {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </button>
          <Link href={`/form/update/${params.nro}/${record.teamID}`} >
            <HiOutlinePencilSquare />
          </Link>
          <button
            onClick={handlerDelete}
            className='text-red-600' >
            <AiFillDelete />
          </button>
        </td>
      </tr>
      <PlayersList isOpen={isOpen} players={record.players} />
    </>
  )
}

export default CardRecord