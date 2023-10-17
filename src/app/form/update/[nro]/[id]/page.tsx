import PanelForm from "@/components/panel/PanelForm"


function UpdateRecordPage({ params }: { params: { nro: string, id: string } }) {

  return (
    <div className="w-full p-2 md:p-3" >
      <PanelForm key={params.id} nro={params.nro} id={params.id} />
    </div>
  )
}

export default UpdateRecordPage