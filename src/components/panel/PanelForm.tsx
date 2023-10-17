"use client"
import RecordForm from "@/components/CustomForms/RecordForm"
import { useGetRecord } from "@/hooks/useRecord"
import { Record } from '@/types/interfaces'
import ButtonRefetch from "../CustomElements/Buttons/ButtonRefetch"

function PanelForm({ id, nro }: { nro: string, id: string }) {

  const { data, isLoading, isError, refetch } = useGetRecord<Record>(nro, id)

  return (
    <div>{isLoading && <p>Cargando...</p>}
      {isError && <ButtonRefetch onClick={() => refetch()} />}
      {!isLoading && !isError && <RecordForm isCreate={false} initialValues={data} />}</div>
  )
}

export default PanelForm