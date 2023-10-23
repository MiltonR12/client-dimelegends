"use client"
import { Formik } from 'formik'
import InputCustom from '../CustomElements/InputCustom'
import { useGetRecords } from '@/hooks/useRecord'
import { useCreateBattle, useUpdateBattle } from '@/hooks/useBattle'
import { defaultBattle } from '@/utils/defaultForm'
import SelectRadio from './SelectRadio'

type Props = {
  nro: string,
  isUpdate?: boolean,
  initValues?: {
    teamOne: string,
    teamTwo: string,
    battleDate: string,
    battleGroup: string,
    battlephase: number,
    battleID: string
  }
}

function BattleForm({ nro, isUpdate = false, initValues = defaultBattle }: Props) {

  const { data: record = [] } = useGetRecords(nro)
  const { mutate: createBattle } = useCreateBattle()
  const { mutate: updateBattle } = useUpdateBattle()

  const listTeam = record.map((item) => item.teamName)

  return (
    <Formik
      initialValues={initValues}
      onSubmit={(battle) => {
        if (isUpdate) {
          updateBattle({ nro, battle })
        } else {
          const newBattle = { ...battle, battleGroup: battle.battleGroup === "on" ? null : battle.battleGroup }
          createBattle({ nro, battle: newBattle })
        }
      }}
    >
      {({ handleSubmit, values }) => (
        <form
          onSubmit={handleSubmit}
          className='bg-zinc-950 p-2 flex flex-col gap-3'
        >
          <div className='grid md:grid-cols-3 gap-3 text-center' >
            <InputCustom
              required={true} name='teamOne'
              title='Equipo 1' isList={true} listOptiones={listTeam} />
            <InputCustom
              required={true} name='battleDate' title='Fecha Y Hora' type='datetime-local' />
            <InputCustom
              required={true} name='teamTwo' title='Equipo 2'
              isList={true} listOptiones={listTeam} />
          </div>

          <div>
            <h4 className='text-cyan-400 text-2xl text-center' >GRUPO DE ENCUENTRO</h4>
          </div>

          <SelectRadio
            listTitles={["Ninguno", "Grupo A", "Grupo B"]}
            listValues={["on", "A", "B"]}
            name='battleGroup'
            value={values.battleGroup} />

          <div>
            <InputCustom name='battlephase' title='Nro De Fase' type='number' />
          </div>

          <button
            type='submit'
            className='bg-cyan-400 py-2 px-4 rounded-lg font-semibold text-xl hover:bg-zinc-900 
              transition-all mx-auto'>
            {isUpdate ? "Guardar Cambios" : "Crear Horario"}
          </button>
        </form>
      )}
    </Formik>
  )
}

export default BattleForm