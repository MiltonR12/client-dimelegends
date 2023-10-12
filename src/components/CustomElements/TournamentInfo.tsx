"use client"
import { useGetTorneo } from "@/hooks/useTournament"
import { TournamentComplet } from "@/types/interfaces"
import InfoTournament from "../Skeleton/InfoTournament"
import TournamentFeatures from "./TournamentFeatures"


function TournamentInfo({ nro }: { nro: string }) {

  const { data: torneo, isError, isLoading } = useGetTorneo<TournamentComplet>(nro)

  return (
    <div className="max-w-[1400px] mx-auto" >
      {isLoading && <InfoTournament />}
      {isError && !isLoading && <span>Error</span>}
      {
        !isLoading && !isError && <TournamentFeatures torneo={torneo} />
      }
    </div>
  )
}

export default TournamentInfo