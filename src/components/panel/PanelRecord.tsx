"use client"
import { useState } from "react"
import TableTeam from "../CustomElements/TableTeam"
import PanelHorarios from "./PanelHorarios"


function PanelRecord({ nro }: { nro: string }) {

  const [isList, setIsList] = useState(true)

  return (
    <div>
      <div className="bg-zinc-950 grid grid-cols-2 p-2 gap-3 text-xl" >
        <button
          className={`rounded-xl py-2 border-2 border-cyan-400
           ${isList ? "bg-cyan-400" : ""}`}
          onClick={() => setIsList(true)} >Lista De Inscritos</button>
        <button
          className={`rounded-xl py-2 border-2 border-cyan-400
          ${!isList ? "bg-cyan-400" : ""}`}
          onClick={() => setIsList(false)} >Horarios</button>
      </div>
      <div>
        {isList ? <TableTeam nro={nro} /> : <PanelHorarios nro={nro} />}
      </div>
    </div>
  )
}

export default PanelRecord