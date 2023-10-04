"use client"
import { Tournament } from '@/types/interfaces'
import { Formik } from 'formik'
import InputForm from '../CustomElements/InputForm'
import ListCustom from '../CustomElements/ListCustom'
import ArrayInput from '../CustomElements/ArrayInput'
import { useCreatTorneo, useUpdateTorneo } from '@/hooks/useTournament'
import { useParams, useRouter } from 'next/navigation'
import DynamicInput from '../CustomElements/DynamicInput'
import list from '@/data/juegos.json'
import { TournametDefault } from '@/utils/defaultForm'

type Props = {
  isCreate: boolean,
  initValues?: Omit<Tournament, "nro" | "Page">,
}

function TorneoForm({ initValues = TournametDefault, isCreate }: Props) {

  const { mutate: creatTorneo } = useCreatTorneo()
  const { mutate: updateTorneo } = useUpdateTorneo()
  const router = useRouter()
  const params = useParams()

  return (
    <Formik
      initialValues={initValues}
      onSubmit={(data) => {
        if (isCreate) {
          creatTorneo(data, {
            onSuccess() {
              router.push('/record')
            },
            onError(error: any) {
              if (error.response?.status === 401) {
                router.push('/login')
              }
            },
          })
        } else {
          updateTorneo({ ...data, nro: params.nro as string }, {
            onSuccess() {
              router.push(`/record`)
            }, onError(error: any, variables, context) {
              if (error.response?.status === 401) {
                router.push('/login')
              }
            },
          })
        }
      }}
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <form onSubmit={handleSubmit} >
          <div className='p-3 md:p-5 bg-slate-950 flex flex-col gap-3 max-w-xl mx-auto border-2 border-cyan-400 rounded-md' >
            <h3 className='text-center text-3xl text-cyan-500 font-semibold' >
              {isCreate ? "Crear Torneo" : "Actualizar Torneo"}
            </h3>

            <InputForm name='tournamentName' title='Nombre del torneo' required={true} />
            <DynamicInput
              name='formUrl'
              title='Enlace del formulario'
              setFieldValue={setFieldValue} />
            <InputForm
              name='dateStart'
              title='Fecha de inicio'
              required={true}
              type='date' />
            <DynamicInput
              name='cost'
              required={true}
              title='Costo de inscripcion'
              resetValue='Gratis'
              setFieldValue={setFieldValue} />
            <ListCustom name='game' title='Juego' list={list} />
            <InputForm name='description' title='Descripcion' required={true} type='textarea' />
            <ArrayInput name='requirements' title='Requisitos' values={values.requirements} />
            <ArrayInput name='modality' title='Modalidad' values={values.modality} />
            <ArrayInput name='rules' title='Reglas' values={values.rules} />
            <ArrayInput name='award' title='Premio(s)' values={values.award} />
            <button
              type="submit"
              className='py-1 bg-cyan-500 text-2xl border-2 border-cyan-500 hover:text-cyan-500
              hover:bg-zinc-950 transition-all font-semibold ' >
              {isCreate ? "Crear torneo" : "Guardar Cambios"}
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default TorneoForm