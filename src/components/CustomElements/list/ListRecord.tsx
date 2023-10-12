"use client"
import { useDeleteTorneo, useGetMyTorneo } from '@/hooks/useTournament'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { AiFillDelete } from 'react-icons/ai'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { showDelete } from '@/components/show/DeleteShow'
import SkeletonRecords from '@/components/Skeleton/SkeletonRecords'

type Props = {
  closeNav: () => void
}

function ListRecord({ closeNav }: Props) {

  const { data = [], isLoading, isError } = useGetMyTorneo()
  const { mutate: deleteTorneo } = useDeleteTorneo()

  const params = useParams()

  const handlerDelete = (nro: string) => {
    showDelete({
      onSuccess() {
        deleteTorneo(nro)
      }
    })
  }

  return (
    <div
      onClick={closeNav}
      className="flex flex-col h-full overflow-y-auto" >

      {isLoading && <SkeletonRecords />}

      {!isLoading && isError && <p>Error al cargar</p>}

      {
        data.map((item, index) => (
          <div key={index}
            className={`
            ${params.nro === item.nro ? "bg-gradient-to-r" : ""}
            flex justify-between items-center text-xl from-cyan-400 to-blue-800`} >
            {
              item.formUrl ? <a
                href={item.formUrl}
                target='_blank'
                className="text-ellipsis overflow-hidden transition-all p-3 w-full">
                {item.tournamentName}
              </a> :
                <Link
                  href={`/record/${item.nro}`}
                  className="text-ellipsis overflow-hidden transition-all p-3 w-full">
                  {item.tournamentName}
                </Link>
            }
            <div className='flex gap-3 px-3 pr-7 items-center' >
              <Link href={`/torneo/update/${item.nro}`} >
                <HiOutlinePencilSquare />
              </Link>
              <button onClick={() => handlerDelete(item.nro)} className='text-red-600' >
                <AiFillDelete />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ListRecord