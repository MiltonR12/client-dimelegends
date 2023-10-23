"use client"
import { useGetTorneo } from "@/hooks/useTournament"
import InfoTournament from "../Skeleton/InfoTournament"
import TournamentFeatures from "./TournamentFeatures"
import ButtonRefetch from "./Buttons/ButtonRefetch"
import { useParams } from "next/navigation"

function TournamentInfo() {

  const { nro } = useParams()
  const { data: torneo, isError, isLoading, refetch } = useGetTorneo(nro as string)

  return (
    <div className="max-w-[1400px] mx-auto" >
      {isLoading && <InfoTournament />}
      {!isLoading && isError && <ButtonRefetch onClick={() => refetch()} />}
      {
        !isLoading && !isError && <TournamentFeatures torneo={torneo} />
      }
    </div>
  )
}

export default TournamentInfo