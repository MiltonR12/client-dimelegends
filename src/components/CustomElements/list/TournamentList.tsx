"use client"
import { useGetAllTorneo } from "@/hooks/useTournament"
import { CardTournament } from '@/types/interfaces'
import DetailsTorneo from "@/components/CustomCards/DetailsTorneo"
import Link from 'next/link'
import TournamentSkeleton from "@/components/Skeleton/TournamentSkeleton"

function TournamentList() {

  const { data = [], isLoading, isError } = useGetAllTorneo<CardTournament[]>()

  if (isLoading) return <div className="flex flex-wrap gap-5 justify-center" >
    <TournamentSkeleton />
    <TournamentSkeleton />
    <TournamentSkeleton />
  </div>

  if (isError) return <p>Error</p>

  return (
    <div className="flex flex-wrap gap-5 justify-center" >

      {data.length === 0 && <Link
        className="bg-zinc-950 text-2xl px-4 py-2 rounded-lg text-cyan-400 border-2 border-cyan-400"
        href="/torneo/create" >Crear Torneo</Link>}

      {data.map((item, index) => <DetailsTorneo key={index} torneo={item} />)}

    </div>
  )
}

export default TournamentList