import { useDeleteBattle, useUpdateWinner } from "@/hooks/useBattle"
import { Battle } from "@/types/interfaces"
import { AiFillDelete } from "react-icons/ai"
import { HiOutlinePencilSquare } from "react-icons/hi2"
import { showDelete } from '@/components/show/DeleteShow'
import { dateBattle, hoursBattle } from "@/utils/dateLocal"
import BattleForm from "@/components/CustomForms/BattleForm"
import { useState } from 'react'

type Props = { battle: Battle, nro: string }
type EventClick = React.MouseEvent<HTMLButtonElement>

function CampBattle({ battle, nro }: Props) {

  const { mutate: deleteBattle } = useDeleteBattle()
  const { mutate: updateWinner } = useUpdateWinner()
  const [isVisible, setIsVisible] = useState(false)

  const handleDelete = () => {
    showDelete({
      onSuccess() {
        deleteBattle({ nro, id: battle.battleID })
      }
    })
  }

  const handleWinner = (e: EventClick) => {
    const winner = e.currentTarget.textContent

    if (winner) {
      if (winner === battle.battleWinner) {
        updateWinner({ nro, id: battle.battleID, winner: null })
      } else {
        updateWinner({ nro, id: battle.battleID, winner })
      }
    }
  }

  return (
    <>
      <tr
        className={`md:text-xl hover:bg-slate-700 transition-all bg-slate-900 
      flex border-collapse border border-zinc-500`} >
        <td className="grid grid-cols-2 md:grid-cols-3 w-[90%]" >
          <button onClick={handleWinner}
            className={`${battle.teamOne === battle.battleWinner ?
              "border-green-800 text-green-950 bg-green-300" : ""}
               py-2 truncate`} >
            {battle.teamOne}
          </button>
          <div className="grid row-span-2 md:row-auto py-2 text-center md:grid-cols-2" >
            <p className="truncate" >{dateBattle(battle.battleDate)}</p>
            <p className="truncate" >{hoursBattle(battle.battleDate)}</p>
          </div>
          <button onClick={handleWinner}
            className={`${battle.teamTwo === battle.battleWinner ?
              "border-green-800 text-green-950 bg-green-300" : ""} 
              py-2 truncate `} >
            {battle.teamTwo}
          </button>
        </td>
        <td className="w-[10%] grid md:grid-cols-2 items-center justify-center text-xl" >
          <div className="flex items-center justify-center h-full" >
            <button onClick={() => setIsVisible(!isVisible)} >
              <HiOutlinePencilSquare />
            </button>
          </div>
          <div className="flex items-center justify-center h-full" >
            <button
              onClick={handleDelete}
              className='text-red-600' >
              <AiFillDelete />
            </button>
          </div>
        </td>
      </tr>
      {isVisible && <tr>
        <td>
          <BattleForm
            isUpdate={true}
            nro={nro}
            initValues={{ ...battle, battleGroup: battle.battleGroup ?? "on", }} />
        </td>
      </tr>}
    </>
  )
}

export default CampBattle