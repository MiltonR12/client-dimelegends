"use client"
import ListDetails from "@/components/CustomElements/list/ListDetails"
import { useGetTorneo } from "@/hooks/useTournament"
import { Tournament } from "@/types/interfaces"
import Link from "next/link"
import InfoTournament from "../Skeleton/InfoTournament"

function TournamentInfo({ nro }: { nro: string }) {

  const { data: torneo, isError, isLoading } = useGetTorneo<Tournament>(nro)

  return (
    <div className="p-2 md:p-5 max-w-4xl mx-auto" >
      {isLoading && <InfoTournament />}
      {isError && !isLoading && <span>Error</span>}
      {
        !isLoading && !isError && <div className="bg-black/80 backdrop-blur-sm p-3 md:p-5 rounded-md border-2 border-red-700
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
          <div className="md:text-2xl flex justify-between" >
            <h4>Organizado Por: </h4>
            <p>{torneo.Page.pageName}</p>
          </div>
          <div className="md:text-2xl flex justify-between" >
            <h4>Fecha de inicio</h4>
            <p>{new Date(torneo.dateStart).toLocaleString("es", {
              day: "numeric",
              month: "long",
              year: "2-digit"
            })}</p>
          </div>
          <div className="md:text-2xl flex justify-between" >
            <h4>Costo de inscripcion</h4>
            <p>{torneo.cost}</p>
          </div>
          <div className="md:text-2xl flex justify-between" >
            <h4>Juego</h4>
            <p>{torneo.game}</p>
          </div>
          <ListDetails title="Requisitos" values={torneo.requirements} />
          <ListDetails title="Modalidad" values={torneo.modality} />
          <ListDetails title="Reglas" values={torneo.rules} />
          <ListDetails title="Premio(s)" values={torneo.award} />
          <div className="py-5 w-full flex justify-center md:justify-start" >
            {
              torneo.formUrl ? <a
                className="px-4 py-2 text-xl bg-rose-600 rounded-lg"
                href={torneo.formUrl} >Formulario De Inscripcion</a> : <Link
                  className="px-4 py-2 text-xl bg-rose-600 rounded-lg"
                  href={`/form/create/${torneo.nro}`} >Formulario De Inscripcion</Link>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default TournamentInfo