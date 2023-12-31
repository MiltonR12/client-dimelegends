import { CardTournament } from "@/types/interfaces"
import SectionInfo from "../CustomElements/SectionInfo"
import { AiOutlineDoubleRight } from 'react-icons/ai'
import Link from 'next/link'
import Cup from "../icons/Cup"

function DetailsTorneo({ torneo }: { torneo: CardTournament }) {

  const dateStart = new Date(torneo.dateStart).toLocaleString("es", { month: "long", day: "numeric" })

  return (
    <article className="bg-zinc-950 w-full max-w-lg border-b-2 border-red-600 rounded-md" >
      <div className="bg-gradient-to-r from-red-600 to-fuchsia-700 p-2 px-3" >
        <h3 className="text-2xl md:text-4xl capitalize font-semibold truncate" >
          {torneo.tournamentName}
        </h3>
      </div>
      <div className="md:grid md:grid-cols-3" >
        <Cup />
        <div className="p-3 flex flex-col gap-2 col-span-2" >
          <div className="text-center font-semibold text-red-600" >
            <h4 className="text-2xl" >Descripción</h4>
            <p className="text-zinc-300 block h-20 w-full overflow-hidden" >
              {torneo.description}
            </p>
          </div>
          <div className="my-3">
            <SectionInfo title="Fecha de Inicio" value={dateStart} />
            <SectionInfo title="Juego" value={torneo.game} />
            <SectionInfo title="Costo" value={torneo.cost} />
            <SectionInfo title="Creador" value={torneo.Page.pageName} />
          </div>
          <Link
            href={`/torneo/${torneo.nro}`}
            className="bg-red-600 text-white rounded-lg py-1 text-xl font-semibold
            flex items-center justify-center gap-3" >
            <span>Ver Mas</span> <AiOutlineDoubleRight />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default DetailsTorneo