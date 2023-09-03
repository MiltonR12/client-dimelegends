"use client"
import DetailsTorneo from "@/components/CustomCards/DetailsTorneo"
import { useGetAllTorneo } from "@/hooks/useTournament"
import { CardTournament } from '@/types/interfaces'

function TorneosPage() {

  const { data = [], isLoading, isError } = useGetAllTorneo<CardTournament[]>()

  if (isLoading) return <p>Cargando...</p>

  if (isError) return <p>Error</p>

  return (
    <div className="p-2" >
      <h2 className="text-5xl text-center" >Torneos</h2>
      <div className="flex flex-wrap gap-5 justify-center" >
        {
          data.map((item, index) => (
            <DetailsTorneo key={index} torneo={item} />
          ))
        }
      </div>
    </div>
  )
}

export default TorneosPage