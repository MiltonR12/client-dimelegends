"use client"
import RecordForm from "@/components/CustomForms/RecordForm"
import { useGetRecord } from "@/hooks/useRecord"
import { Record } from '@/types/interfaces'

function UpdateRecordPage({ params }: { params: { nro: string, id: string } }) {

  const { data, isLoading, isError } = useGetRecord<Record>(params.nro, params.id)

  return (
    <div className="w-full p-2 md:p-3" >
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Se produjo un Error</p>}
      {!isLoading && !isError && <RecordForm isCreate={false} initialValues={data} />}
    </div>
  )
}

export default UpdateRecordPage