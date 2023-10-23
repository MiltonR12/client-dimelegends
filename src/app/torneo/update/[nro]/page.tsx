"use client"
import TorneoForm from "@/components/CustomForms/TorneoForm"
import AuthenticatedRoute from "@/components/PartPage/Authenticate"
import { useGetTorneo } from "@/hooks/useTournament"

function UpdateTournamentPage({ params }: { params: { nro: string } }) {

  const { data, isLoading, isError } = useGetTorneo(params.nro)

  return (
    <div>
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Error</p>}
      <AuthenticatedRoute>
        {data && <TorneoForm isCreate={false} initValues={data} />}
      </AuthenticatedRoute>
    </div>
  )
}

export default UpdateTournamentPage