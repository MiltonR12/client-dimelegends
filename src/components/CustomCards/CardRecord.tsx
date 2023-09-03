import { Record } from '@/types/interfaces'
import { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useDeleteRecord } from '@/hooks/useRecord'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Swal from 'sweetalert2'

type Props = {
  record: Record
}

function CardRecord({ record }: Props) {

  const [isOpen, setIsOpen] = useState(false)
  const { mutate: deleteRecord } = useDeleteRecord()
  const params = useParams()

  const handlerDelete = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar?",
      background: "#000",
      color: "#fff",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#1C1C1C",
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#d33",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRecord({ nro: params.nro as string, id: record.teamID })
      }
    })
  }

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className='grid grid-cols-4 gap-2 p-2 ' >
        <div className='col-span-3 grid grid-cols-3' >
          <h3>{record.teamName}</h3>
          <p>{record.phone}</p>
          <p>{record.captain}</p>
        </div>
        <div className='flex justify-around text-2xl' >
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
        </div>
      </div>
      <ul className={`${isOpen ? "flex" : "hidden"} flex-col gap-1 mx-7 text-xl list-decimal`} >
        {
          record.players.map((item, index) => (
            <li key={index} >{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default CardRecord