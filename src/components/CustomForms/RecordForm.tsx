"use client"
import { Formik } from 'formik'
import { Record } from '@/types/interfaces'
import InputCustom from '../CustomElements/InputCustom'
import ArrayInput from '../CustomElements/ArrayInput'
import gamer from '@/imgs/gamer.jpg'
import Image from 'next/image'
import { useCreateRecord, useUpdateRecord } from '@/hooks/useRecord'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import RecordSuccess from '../show/RecordSuccess'
import { useState } from 'react'
import { RecordDefault } from '@/utils/defaultForm'

type Prosp = {
  initialValues?: Omit<Record, "teamID">
  isCreate: boolean
}

function RecordForm({ initialValues = RecordDefault, isCreate }: Prosp) {

  const { mutate: createRecord } = useCreateRecord()
  const { mutate: updateRecord } = useUpdateRecord()
  const [success, setSuccess] = useState(false)

  const params = useParams()
  const router = useRouter()

  const handleSubmit = (record: Omit<Record, "teamID">) => {
    if (isCreate) {
      createRecord({ record, nro: params.nro as string }, {
        onSuccess() {
          setSuccess(true)
        },
      })
    } else {
      updateRecord({ record, nro: params.nro as string, id: params.id as string }, {
        onSuccess() {
          router.push(`/record/${params.nro}`)
        }
      })
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(record) => handleSubmit(record)}
    >
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}
          className='w-full max-w-5xl md:grid grid-cols-2 rounded-2xl overflow-hidden bg-zinc-950' >
          {
            success ? <RecordSuccess /> :
              <div className='p-7 flex flex-col gap-3' >

                <h3 className='text-cyan-400 text-4xl font-semibold text-center' >
                  {isCreate ? "Registrar Equipo" : "Actualizar Equipo"}
                </h3>

                <InputCustom name='teamName' title='Nombre del Equipo' />
                <InputCustom name='captain' title='Nombre del Capitan' />
                <InputCustom name='phone' title='Numero del Capitan' />
                <ArrayInput name='players' title='Integrantes' values={values.players} />

                <div className='flex gap-3 items-center' >
                  {!isCreate && <Link
                    className='border-zinc-800 bg-zinc-800 border-4 rounded-xl py-2 
                    text-xl mt-3 w-full text-center'
                    href={`/record/${params.nro as string}`} >
                    Cancelar
                  </Link>}
                  <button
                    type="submit"
                    className='border-cyan-400 border-4 rounded-xl py-2 
                    text-xl mt-3 w-full'>
                    {isCreate ? "Registrar Equipo" : "Guardar Cambios"}
                  </button>
                </div>
              </div>
          }
          <div className='hidden md:block ' >
            <Image src={gamer} alt='gamer' className='h-full object-cover object-center' />
          </div>
        </form>
      )}
    </Formik>
  )
}

export default RecordForm