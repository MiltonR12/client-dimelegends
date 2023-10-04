import RecordForm from "@/components/CustomForms/RecordForm"



function FormCreatePage() {
  return (
    <div className="w-full p-2 md:p-3" >
      <RecordForm isCreate={true} />
    </div>
  )
}

export default FormCreatePage