import { useDeleteBattle, useUpdateWinner } from "@/hooks/useBattle"
import { Battle } from "@/types/interfaces"
import { AiFillDelete } from "react-icons/ai"
import { HiOutlinePencilSquare } from "react-icons/hi2"
import { showDelete } from '@/components/show/DeleteShow'
import { dateBattle, hoursBattle } from "@/utils/dateLocal"

type Props = { battle: Battle, num: number, nro: string }

function CampBattle({ battle, num, nro }: Props) {

  const { mutate: deleteBattle } = useDeleteBattle()
  const { mutate: updateWinner } = useUpdateWinner()

  const handleDelete = () => {
    showDelete({
      onSuccess() {
        deleteBattle({ nro, id: battle.battleID })
      }
    })
  }

  const handleWinner = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <tr
      className={`md:text-xl hover:bg-slate-700
      transition-all bg-slate-900 
      flex border-collapse border border-zinc-500`} >
      <td className="grid grid-cols-3 text-center w-[90%]" >
        <button onClick={handleWinner}
          className={`${battle.teamOne === battle.battleWinner ?
            "border-green-800 text-green-950 bg-green-300" : ""}
          py-2`} >
          {battle.teamOne}
        </button>
        <div className="grid grid-cols-2 py-2" >
          <p>{dateBattle(battle.battleDate)}</p>
          <p>{hoursBattle(battle.battleDate)}</p>
        </div>
        <button onClick={handleWinner}
          className={`${battle.teamTwo === battle.battleWinner ?
            "border-green-800 text-green-950 bg-green-300" : ""}
          py-2`} >
          {battle.teamTwo}
        </button>
      </td>
      <td className="flex justify-center gap-5 w-[10%] text-2xl" >
        <button>
          <HiOutlinePencilSquare />
        </button>
        <button
          onClick={handleDelete}
          className='text-red-600' >
          <AiFillDelete />
        </button>
      </td>
    </tr>
  )
}

export default CampBattle