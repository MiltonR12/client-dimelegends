import { useGetBattles } from "@/hooks/useBattle"
import HeaderVersus from "../CustomElements/headers/HeaderVersus"
import CampTableBattle from "../CustomElements/camp/CampTableBattle"

function PanelVersus({ nro }: { nro: string }) {

  const { data = [], isLoading, isError } = useGetBattles(nro)

  const practice = () => {
    let max = 0
    data.forEach(elem => {
      if (elem.battlephase > max) {
        max = elem.battlephase
      }
    });
    const arrayPhase = []
    for (let i = 1; i < max + 1; i++) {
      const newArray = data.filter((item) => item.battlephase === i)
      arrayPhase.push(newArray)
    }
    return arrayPhase
  }

  const versusPhase = practice()

  return (
    <div className="overflow-auto" >
      {isLoading && <p>Cargando...</p>}
      {!isLoading && isError && <small>Error</small>}
      {!isLoading && !isError && <div className="min-w-[580px] max-h-80" >

        <table
          className="table-auto text-center border-collapse w-full" >
          <HeaderVersus />
          <tbody >
            {
              versusPhase.map((item, index) => (
                <>
                  <tr key={index} className="text-center bg-zinc-950 py-1 sticky top-[30px]
                  text-xl"  >
                    <td colSpan={4} >Phase {index + 1}</td>
                  </tr>
                  {
                    item.map((elem, index) => (
                      <CampTableBattle key={index} battle={elem} num={index} />
                    ))
                  }
                </>

              ))
            }
          </tbody>

        </table>

      </div>}
    </div>
  )
}

export default PanelVersus