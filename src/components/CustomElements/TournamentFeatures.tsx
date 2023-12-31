import { TournamentComplet } from "@/types/interfaces"
import ListDetails from "./list/ListDetails"
import SectionInfo from "./SectionInfo"
import NameTeamsList from "./list/NameTeamsList"
import SecondaryButton from "./Buttons/SecondaryButton"
import PrimaryButton from "./Buttons/PrimaryButton"
import PanelVersus from "../panel/PanelVersus"
import { compareTime } from "@/utils/dateLocal"
import ButtonPressed from "./Buttons/ButtonPressed"
import { useState } from 'react'

function TournamentFeatures({ torneo }: { torneo: TournamentComplet }) {

  const [group, setGroup] = useState(0)

  const dateTournament = new Date(torneo.dateStart).toLocaleString("es", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  const pickDate = torneo.dateStart.split("-").reduce((acc, item) => acc + item, "")

  return (
    <div className="bg-black rounded-lg border-4 border-red-600 grid md:grid-cols-2" >
      <div className="p-5 flex flex-col gap-3" >
        <div>
          <h3 className="text-red-600 text-3xl text-center truncate font-semibold" >
            {torneo.tournamentName}
          </h3>
        </div>

        <div className="bg-zinc-900 rounded-md p-2 overflow-hidden text-center" >
          <h4 className="text-white text-xl font-semibold text-left" >
            Descripción
          </h4>
          <p className="text-zinc-300" >{torneo.description}</p>
        </div>

        <div className="my-3" >
          <SectionInfo title="Organizador" value={torneo.Page.pageName} />
          <SectionInfo title="Inicio" value={dateTournament} />
          <SectionInfo title="Costo de Inscripcion" value={torneo.cost} />
          <SectionInfo title="Juego" value={torneo.game} />
        </div>

        <ListDetails title="Requisitos" values={torneo.requirements} />
        <ListDetails title="Modalidad" values={torneo.modality} />
        <ListDetails title="Reglas" values={torneo.rules} />
        <ListDetails title="Premio(s)" values={torneo.award} />

        <div className="grid md:grid-cols-2 gap-3 mt-5" >
          {
            compareTime(pickDate) ? <PrimaryButton
              href={torneo.formUrl ? torneo.formUrl : `/form/create/${torneo.nro}`} >
              Formulario
            </PrimaryButton> : <span className="text-center py-2" >
              INSCRIPCIONES CERRADAS
            </span>
          }
          {torneo.Page.urlGroup && <SecondaryButton href={torneo.Page.urlGroup} >
            Grupo
          </SecondaryButton>}
        </div>

      </div>

      <div className="bg-zinc-900 p-3 overflow-auto select-none" >
        <h4 className="text-center text-2xl mb-3 font-semibold text-white" >
          LISTA DE INSCRITOS
        </h4>
        <NameTeamsList nameList={torneo.Team} />
        <h4 className="text-center text-2xl my-3 font-semibold text-white" >
          HORARIOS
        </h4>
        <div className="grid grid-cols-3" >
          <ButtonPressed isActive={group === 0} onClick={() => setGroup(0)} >
            TODOS
          </ButtonPressed>
          <ButtonPressed isActive={group === 1} onClick={() => setGroup(1)} >
            GRUPO A
          </ButtonPressed>
          <ButtonPressed isActive={group === 2} onClick={() => setGroup(2)} >
          GRUPO B
        </ButtonPressed>
      </div>
      <PanelVersus group={group} nro={torneo.nro} />
    </div>

    </div >
  )
}

export default TournamentFeatures