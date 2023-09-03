import TorneoForm from "@/components/CustomForms/TorneoForm"
import { Tournament } from "@/types/interfaces"

const initialValues: Omit<Tournament, "nro" | "Page"> = {
  tournamentName: "",
  formUrl: "",
  dateStart: "",
  cost: "",
  game: "",
  description: "",
  modality: [""],
  requirements: [""],
  rules: [""],
  award: [""]
}

function CreateTournamentPage() {
  return (
    <div className='p-2' >
      <TorneoForm initValues={initialValues} isCreate={true} />
    </div>
  )
}

export default CreateTournamentPage