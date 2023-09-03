"use client"
import CardRecord from "@/components/CustomCards/CardRecord"
import { useGetRecords } from "@/hooks/useRecord"
import { Record } from '@/types/interfaces'

type Props = {
  params: {
    nro: string
  }
}

function RecordPage({ params }: Props) {

  const { data = [], isLoading, isError } = useGetRecords<Record[]>(params.nro)

  if (isLoading) return <p>cargando...</p>

  if (isError) return <p>Error</p>

  return (
    <section className="p-5" >
      <div>
        <h3 className="text-center text-5xl text-cyan-400 font-semibold mb-5" >
          Lista de Equipos
        </h3>
      </div>
      <div className="" >
        <div className='grid grid-cols-4 bg-zinc-950 p-2 gap-2 text-2xl text-center' >
          <div className='col-span-3 grid grid-cols-3 text-cyan-400' >
            <h3>Nombre</h3>
            <p>Celular</p>
            <p>Capitan</p>
          </div>
          <div className='' >
            Acciones
          </div>
        </div>
        {
          data.map((item, index) => (
            <div key={index} className={`${index % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"}`} >
              <CardRecord record={item} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default RecordPage