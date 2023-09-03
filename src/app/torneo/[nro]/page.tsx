"use client"
import ListDetails from "@/components/CustomElements/ListDetails"
import { useGetTorneo } from "@/hooks/useTournament"
import { Tournament } from "@/types/interfaces"
import Link from "next/link"

const TorneoPage = ({ params }: {params: { nro: string }}) => {

  const { data: torneo, isError, isLoading } = useGetTorneo<Tournament>(params.nro)

  if (isLoading) return <p>Cargando...</p>

  if (isError || !torneo) return <p>Error</p>

  return (
    <div className="p-2 md:p-5" >
      <div className="bg-black/80 backdrop-blur-sm p-3 rounded-md border-2 border-red-700
      flex flex-col gap-3" >
        <div>
          <h3 className="text-red-600 text-3xl text-center truncate font-semibold" >
            {torneo.tournamentName}
          </h3>
        </div>
        <div className="bg-zinc-900 rounded-md p-2 overflow-hidden text-center" >
          <h4 className="text-white text-2xl font-semibold" >Descripción</h4>
          <p className="text-zinc-300" >{torneo.description}</p>
        </div>
        <div>
          <h4>Organizado Por: </h4>
          <p>{torneo.Page.pageName}</p>
        </div>
        <ListDetails title="Requisitos" values={torneo.requirements} />
        <ListDetails title="Modalidad" values={torneo.modality} />
        <ListDetails title="Reglas" values={torneo.rules} />
        <ListDetails title="Premio(s)" values={torneo.award} />
        {
          torneo.formUrl ? <a href={torneo.formUrl} >Formulario De Inscripcion</a> : <Link
            href={`/form/create/${torneo.nro}`} >Formulario De Inscripcion</Link>
        }
      </div>
    </div>
  )
}

export default TorneoPage
