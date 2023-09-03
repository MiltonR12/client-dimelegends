"use client"
import { Tournament } from '@/types/interfaces'
import { Formik } from 'formik'
import InputForm from '../CustomElements/InputForm'
import ListCustom from '../CustomElements/ListCustom'
import ArrayInput from '../CustomElements/ArrayInput'
import { useCreatTorneo } from '@/hooks/useTournament'
import { useRouter } from 'next/navigation'

type Props = {
  isCreate: boolean,
  initValues: Omit<Tournament, "nro" | "Page">
}

function TorneoForm({ initValues, isCreate }: Props) {

  const { mutate: creatTorneo } = useCreatTorneo()
  const router = useRouter()

  return (
    <Formik
      initialValues={initValues}
      onSubmit={(data) => {
        if (isCreate) {
          creatTorneo(data, {
            onSuccess() {
              router.push('/torneos')
            },
            onError(error) {
              console.log(error)
            },
          })
        }
      }}
    >
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} >
          <div className='p-3 md:p-5 bg-slate-950 flex flex-col gap-3 max-w-xl mx-auto border-2 border-cyan-400 rounded-md' >
            <h3 className='text-center text-3xl text-cyan-500 font-semibold' >
              {isCreate ? "Crear Torneo" : "Actualizar Torneo"}
            </h3>
            <InputForm name='tournamentName' title='Nombre del torneo' required={true} />
            <InputForm name='formUrl' title='Enlace del formulario' />
            <InputForm
              name='dateStart'
              title='Fecha de inicio'
              required={true}
              type='date' />
            <InputForm name='cost' title='Costo de Inscripcion' required={true} />
            <ListCustom name='game' title='Juego' list={["mobil", "left"]} />
            <InputForm name='description' title='Descripcion' required={true} />
            <ArrayInput name='requirements' title='Requisitos' values={values.requirements} />
            <ArrayInput name='modality' title='Modalidad' values={values.modality} />
            <ArrayInput name='rules' title='Reglas' values={values.rules} />
            <ArrayInput name='award' title='Premio(s)' values={values.award} />
            <button
              type="submit"
              className='py-1 bg-cyan-500 text-2xl border-2 border-cyan-500 hover:text-cyan-500
              hover:bg-zinc-950 transition-all font-semibold ' >
              CREAR
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default TorneoForm