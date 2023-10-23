"use client"
import { useGetAllTorneo } from "@/hooks/useTournament"
import { CardTournament } from '@/types/interfaces'
import DetailsTorneo from "@/components/CustomCards/DetailsTorneo"
import Link from 'next/link'
import TournamentSkeleton from "@/components/Skeleton/TournamentSkeleton"
import ButtonRefetch from "../Buttons/ButtonRefetch"

function TournamentList() {

  const { data = [], isLoading, isError, refetch } = useGetAllTorneo<CardTournament[]>()

  return (
    <div className="flex flex-wrap gap-5 justify-center" >

      {isLoading && <>
        <TournamentSkeleton />
        <TournamentSkeleton />
        <TournamentSkeleton />
      </>}

      {!isLoading && isError && <ButtonRefetch onClick={() => refetch()} />}

      {!isLoading && !isError && data.map((item, index) => (
        <DetailsTorneo key={index} torneo={item} />
      ))}

      {!isLoading && !isError && data.length === 0 && <Link
        className="bg-zinc-950 text-2xl px-4 py-2 rounded-lg text-cyan-400 border-2 border-cyan-400"
        href="/torneo/create" >Crear Torneo</Link>}

    </div>
  )
}

export default TournamentList