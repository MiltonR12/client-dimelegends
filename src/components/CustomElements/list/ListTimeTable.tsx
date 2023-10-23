import { useGetBattles } from "@/hooks/useBattle"
import HeaderHorario from "../headers/HeaderHorario"
import GenerateBattleForm from "@/components/CustomForms/GenerateBattleForm"
import TableSkeleton from "@/components/Skeleton/TableSkeleton"
import { orderByPhase } from "@/utils/function"
import TablePhase from "@/components/CustomForms/TablePhase"

function ListTimeTable({ nro, group }: { nro: string, group: number }) {

  const { data = [], isLoading, isError } = useGetBattles(nro)

  const orderByData = () => {
    if (group === 1) {
      return orderByPhase(data.filter((item) => item.battleGroup === "A"))
    } else if (group === 2) {
      return orderByPhase(data.filter((item) => item.battleGroup === "B"))
    }
    return orderByPhase(data)
  }

  const battlePhase = orderByData()

  return (
    <div className="bg-zinc-950" >
      {isLoading && <table className="w-full" >
        <HeaderHorario />
        <TableSkeleton nroCamp={8} />
      </table>}
      {!isLoading && isError && <small>Error en el servidor</small>}
      {!isLoading && !isError && data.length === 0 && <GenerateBattleForm nro={nro} />}
      <table className="w-full" >
        <HeaderHorario />
        <tbody>
          {
            battlePhase.map((item, index) => (
              <TablePhase
                key={index}
                battle={item}
                nro={nro}
                nroPhase={index + 1} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListTimeTable