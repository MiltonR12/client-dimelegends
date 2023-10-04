import TournamentList from "@/components/CustomElements/list/TournamentList"

function TorneosPage() {

  return (
    <div className="p-2" >
      <h2 className="text-5xl text-center mb-5 font-semibold" >Torneos</h2>
      <TournamentList />
    </div>
  )
}

export default TorneosPage