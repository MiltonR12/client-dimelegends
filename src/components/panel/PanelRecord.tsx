"use client"
import { useState } from "react"
import TableTeam from "../CustomElements/TableTeam"
import PanelHorarios from "./PanelHorarios"
import ButtonPressed from "../CustomElements/Buttons/ButtonPressed"


function PanelRecord({ nro }: { nro: string }) {

  const [isList, setIsList] = useState(true)

  return (
    <div className="bg-zinc-950" >
      <div className="grid grid-cols-2" >
        <ButtonPressed onClick={() => setIsList(true)} isActive={isList} >
          Lista de inscritos
        </ButtonPressed>
        <ButtonPressed onClick={() => setIsList(false)} isActive={isList === false} >
          Tabla de horarios
        </ButtonPressed>
      </div>
      <div>
        {isList ? <TableTeam nro={nro} /> : <PanelHorarios nro={nro} />}
      </div>
    </div>
  )
}

export default PanelRecord