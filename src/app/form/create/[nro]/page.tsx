import RecordForm from "@/components/CustomForms/RecordForm"

const initialValues = {
  teamName: "",
  captain: "",
  phone: "",
  players: [""]
}

function FormCreatePage() {
  return (
    <div>
      <RecordForm isCreate={true} initialValues={initialValues} />
    </div>
  )
}

export default FormCreatePage