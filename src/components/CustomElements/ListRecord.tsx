"use client"
import { useGetMyTorneo } from '@/hooks/useTournament'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type Mitorneo = {
  nro: string,
  tournamentName: string
}

function ListRecord() {

  const { data = [], isLoading, isError } = useGetMyTorneo<Mitorneo[]>()

  const params = useParams()

  if (isLoading) return <p>Cargando...</p>

  if (isError) return <p>Error</p>

  return (
    <div className="flex flex-col" >
      {
        data.map((item, index) => (
          <Link
            key={index}
            href={`/record/${item.nro}`}
            className={`${params.nro === item.nro ? "bg-blue-800" : ""} hover:bg-blue-800 
            py-2 px-3`}>
            {item.tournamentName}
          </Link>
        ))
      }
    </div>
  )
}

export default ListRecord