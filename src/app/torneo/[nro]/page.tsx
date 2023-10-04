import TournamentInfo from "@/components/CustomElements/TournamentInfo"

const TorneoPage = ({ params }: { params: { nro: string } }) => {

  return (
    <div className="p-3" >
      <TournamentInfo nro={params.nro} />
    </div>
  )
}

export default TorneoPage
