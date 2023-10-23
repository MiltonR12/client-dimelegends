"use client"
import { useState } from "react"
import ButtonPressed from "../CustomElements/Buttons/ButtonPressed"
import ListTimeTable from "../CustomElements/list/ListTimeTable"
import BattleForm from "../CustomForms/BattleForm"

type Props = {
  nro: string
}

function PanelHorarios({ nro }: Props) {

  const [group, setGroup] = useState(0)

  return (
    <>
      <div className="grid grid-cols-3 bg-zinc-950" >
        <ButtonPressed isActive={group === 0} onClick={() => setGroup(0)} >
          Todos
        </ButtonPressed>
        <ButtonPressed isActive={group === 1} onClick={() => setGroup(1)} >
          Grupo A
        </ButtonPressed>
        <ButtonPressed isActive={group === 2} onClick={() => setGroup(2)} >
          Grupo B
        </ButtonPressed>
      </div>
      <ListTimeTable group={group} nro={nro} />
      <BattleForm nro={nro} />
    </>
  )
}

export default PanelHorarios