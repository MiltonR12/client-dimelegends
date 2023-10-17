"use client"
import { useGetTorneo } from "@/hooks/useTournament"
import { TournamentComplet } from "@/types/interfaces"
import InfoTournament from "../Skeleton/InfoTournament"
import TournamentFeatures from "./TournamentFeatures"
import ButtonRefetch from "./Buttons/ButtonRefetch"


function TournamentInfo({ nro }: { nro: string }) {

  const { data: torneo, isError, isLoading, refetch } = useGetTorneo<TournamentComplet>(nro)

  return (
    <div className="max-w-[1400px] mx-auto" >
      {isLoading && <InfoTournament />}
      {isError && !isLoading && <ButtonRefetch onClick={() => refetch()} />}
      {
        !isLoading && !isError && <TournamentFeatures torneo={torneo} />
      }
    </div>
  )
}

export default TournamentInfo