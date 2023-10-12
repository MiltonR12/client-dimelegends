"use client"

import ListTimeTable from "../CustomElements/list/ListTimeTable"
import BattleForm from "../CustomForms/BattleForm"

type Props = {
  nro: string
}

function PanelHorarios({ nro }: Props) {
  return (
    <div>
      <ListTimeTable nro={nro} />
      <BattleForm nro={nro} />
    </div>
  )
}

export default PanelHorarios