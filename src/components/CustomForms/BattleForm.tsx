"use client"
import { Formik } from 'formik'
import InputCustom from '../CustomElements/InputCustom'
import { useState } from 'react'
import CustomRadio from './CustomRadio'
import { useGetRecords } from '@/hooks/useRecord'
import { useCreateBattle } from '@/hooks/useBattle'
import { Battle } from '@/types/interfaces'

const initialValues: Omit<Battle, "battleID"> = {
  teamOne: "",
  teamTwo: "",
  battleDate: "",
  battleGroup: "on",
  battlephase: 1,
  battleWinner: null
}

function BattleForm({ nro }: { nro: string }) {

  const [check, setCheck] = useState(1)
  const { data: record = [] } = useGetRecords(nro)
  const { mutate: createBattle } = useCreateBattle()

  const listTeam = record.map((item) => item.teamName)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(battle) => {
        const newBattle = { ...battle, battleGroup: battle.battleGroup === "on" ? null : battle.battleGroup }
        createBattle({ nro, battle: newBattle })
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}
          className='bg-zinc-950 p-3 grid grid-cols-3 gap-3 text-center'
        >
          <InputCustom
            required={true} name='teamOne'
            title='Equipo 1' isList={true} listOptiones={listTeam} />
          <InputCustom
            required={true} name='battleDate' title='Fecha Y Hora' type='datetime-local' />
          <InputCustom
            required={true} name='teamTwo' title='Equipo 2'
            isList={true} listOptiones={listTeam} />

          <div className='col-span-2' >
            <h4 className='text-cyan-400 text-2xl' >GRUPO DE ENCUENTRO</h4>
          </div>
          <div className='col-span-2 grid grid-cols-3 text-xl gap-3 py-2' >

            <CustomRadio
              onClick={(e) => setCheck(e)}
              name='battleGroup' id='1' isCheck={check === 1} >
              NINGUNO
            </CustomRadio>
            <CustomRadio
              onClick={(e) => setCheck(e)}
              name='battleGroup' id='2' value='A' isCheck={check === 2} >
              GRUPO A
            </CustomRadio>
            <CustomRadio
              onClick={(e) => setCheck(e)}
              name='battleGroup' id='3' value='B' isCheck={check === 3} >
              GRUPO B
            </CustomRadio>

          </div>
          <div>
            <InputCustom name='battlephase' title='Nro De Fase' type='number' />
          </div>
          <button
            type='submit'
            className='bg-zinc-800 py-2 rounded-lg font-semibold text-xl hover:bg-zinc-900 
            transition-all'
          >Crear Horario</button>
        </form>
      )}
    </Formik>
  )
}

export default BattleForm