import TorneoForm from "@/components/CustomForms/TorneoForm"
import Authenticate from '@/components/PartPage/Authenticate'

function CreateTournamentPage() {
  return (
    <div className='p-2' >
      <Authenticate>
        <TorneoForm isCreate={true} />
      </Authenticate>
    </div>
  )
}

export default CreateTournamentPage