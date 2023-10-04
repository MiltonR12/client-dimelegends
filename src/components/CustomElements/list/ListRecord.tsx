"use client"
import { useDeleteTorneo, useGetMyTorneo } from '@/hooks/useTournament'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { AiFillDelete } from 'react-icons/ai'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { showDelete } from '@/components/show/DeleteShow'

type Mitorneo = {
  nro: string,
  tournamentName: string,
  formUrl: string
}

function ListRecord() {

  const { data = [], isLoading, isError, error, refetch } = useGetMyTorneo<Mitorneo[]>()
  const { mutate: deleteTorneo } = useDeleteTorneo()

  const params = useParams()
  const router = useRouter()

  const handlerDelete = (nro: string) => {
    showDelete({
      onSuccess: () => {
        deleteTorneo(nro)
      }
    })
  }

  if (isLoading) return <p>Cargando...</p>

  if (isError && error instanceof Error) return <p>{error.message}</p>

  return (
    <div className="flex flex-col h-full overflow-y-auto" >
      {
        data.map((item, index) => (
          <div key={index}
            className={`
            ${params.nro === item.nro ? "bg-gradient-to-r" : ""}
            flex justify-between text-xl from-cyan-400 to-blue-800`} >
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
            <div className='flex gap-3 px-3 items-center' >
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