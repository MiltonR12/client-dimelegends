import { CardTournament } from "@/types/interfaces"
import SectionInfo from "../CustomElements/SectionInfo"
import { GiTrophyCup } from 'react-icons/gi'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import Link from 'next/link'

type Props = {
  torneo: CardTournament
}

function DetailsTorneo({ torneo }: Props) {

  const dateStart = new Date(torneo.dateStart).toLocaleString("es", { month: "long", day: "numeric" })

  return (
    <div className="bg-zinc-950 w-full max-w-lg border-b-2 border-cyan-400 rounded-md" >
      <div className="bg-gradient-to-r from-blue-700 to-cyan-400 p-2 px-3" >
        <h3 className="text-2xl md:text-4xl capitalize font-semibold truncate" >
          {torneo.tournamentName}
        </h3>
      </div>
      <div className="md:grid md:grid-cols-3" >
        <div className="hidden md:flex items-center justify-center h-full text-9xl" >
          <GiTrophyCup />
        </div>
        <div className="p-3 flex flex-col gap-2 col-span-2" >
          <div className="text-center text-cyan-400" >
            <h4 className="text-2xl" >Descripción</h4>
            <p className="text-zinc-200 block h-20 w-full overflow-hidden" >
              {torneo.description}
            </p>
          </div>
          <SectionInfo title="Fecha de Inicio" value={dateStart} />
          <SectionInfo title="Juego" value={torneo.game} />
          <SectionInfo title="Costo" value={torneo.cost} />
          <SectionInfo title="Creador" value={torneo.Page.pageName} />
          <Link
            href={`/torneo/${torneo.nro}`}
            className="bg-cyan-400 text-black rounded-lg py-1 text-xl font-semibold
            flex items-center justify-center gap-3" >
            <span>Ver Mas</span> <AiOutlineDoubleRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsTorneo