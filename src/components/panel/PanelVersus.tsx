import { useGetBattles } from "@/hooks/useBattle"
import HeaderVersus from "../CustomElements/headers/HeaderVersus"
import CampTableBattle from "../CustomElements/camp/CampTableBattle"
import TableSkeleton from "../Skeleton/TableSkeleton"
import { orderByPhase } from "@/utils/function"
import { Battle } from "@/types/interfaces"

interface BattleTime extends Battle {
  battleID: string;
}

function PanelVersus({ nro, group }: { nro: string, group: number }) {

  const { data = [], isLoading, isError } = useGetBattles(nro)

  const orderByGroup = (data: BattleTime[]) => {
    if (group === 1) {
      return orderByPhase(data.filter((item) => item.battleGroup === "A"))
    } else if (group === 2) {
      return orderByPhase(data.filter((item) => item.battleGroup === "B"))
    }
    return orderByPhase(data)
  }

  const versusPhase = orderByGroup(data)

  return (
    <div className="overflow-auto" >

      {isLoading && <table
        className="grid text-center border-collapse w-full" >
        <HeaderVersus isUser={true} />
        <TableSkeleton nroCamp={5} />
      </table>}
      {!isLoading && isError && <small>Error</small>}

      {!isLoading && !isError && <div className="min-w-[580px] max-h-80" >

        <table
          className="table-auto text-center border-collapse w-full" >
          <HeaderVersus />
          <tbody >
            {
              versusPhase.map((item, index) => (
                <>
                  <tr
                    key={index}
                    className="text-center bg-zinc-950 py-1 sticky top-[30px] text-xl" >
                    <td colSpan={4} >
                      N* De Fase {index + 1}
                    </td>
                  </tr>
                  {
                    item.map((elem, index) => (
                      <CampTableBattle key={elem.battleID} battle={elem} num={index} />
                    ))
                  }
                </>

              ))
            }
          </tbody>

        </table>

      </div>
      }
    </div>
  )
}

export default PanelVersus