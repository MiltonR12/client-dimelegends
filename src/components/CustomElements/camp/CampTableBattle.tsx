import { Battle } from '@/types/interfaces'
import { dateBattle, hoursBattle } from '@/utils/dateLocal'

interface BattleTime extends Battle {
  battleID: string;
}

function CampTableBattle({ battle, num }: { battle: BattleTime, num: number }) {
  return (
    <tr className={`border-zinc-950 border
              text-black ${num % 2 === 0 ? "bg-cyan-100" : "bg-cyan-200"}`} >
      <td
        className={`py-1 ${battle.battleWinner === battle.teamOne ?
          "bg-green-300 text-green-700" : ""}`}
      >{battle.teamOne}</td>
      <td className="py-1" >
        {dateBattle(battle.battleDate)}
      </td>
      <td className="py-1" >
        {hoursBattle(battle.battleDate)}
      </td>
      <td
        className={`py-1 ${battle.battleWinner === battle.teamTwo ?
          "bg-green-300 text-green-700" : ""}`}
      >{battle.teamTwo}
      </td>
    </tr>
  )
}

export default CampTableBattle