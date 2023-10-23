import { useState } from "react"
import { Battle } from '@/types/interfaces'
import CampBattle from "../CustomElements/camp/CampBattle"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface BattleTime extends Battle {
  battleID: string;
}

type Props = {
  battle: BattleTime[],
  nro: string,
  nroPhase: number
}

function TablePhase({ battle, nro, nroPhase }: Props) {

  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <tr className="bg-zinc-950 text-2xl"  >
        <td colSpan={4}>
          <button onClick={() => setIsVisible(!isVisible)}
            className="py-2 w-full flex justify-center gap-5 items-center" >
            {isVisible ? <AiFillCaretUp /> : <AiFillCaretDown />}
            Fase {nroPhase}
            {isVisible ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </button>
        </td>
      </tr>
      {
        isVisible && battle.map((elem, index2) => (
          <CampBattle battle={elem} key={index2} nro={nro} />
        ))
      }
    </>
  )
}

export default TablePhase