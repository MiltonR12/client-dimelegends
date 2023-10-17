import { useCreateAllBattles, useGetBattles } from "@/hooks/useBattle"
import CampBattle from "../camp/CampBattle"
import HeaderHorario from "../headers/HeaderHorario"

function ListTimeTable({ nro }: { nro: string }) {

  const { data = [], isLoading, isError } = useGetBattles(nro)
  const { mutate: createAllBattles } = useCreateAllBattles()

  const generateBattles = () => {
    createAllBattles({
      nro,
      data: {
        nroBattlesByDay: 3,
        timeBattles: 30,
        startBattles: new Date()
      }
    })
  }

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {!isLoading && isError && <small>Error en el servidor</small>}
      {!isLoading && !isError && <button onClick={generateBattles} >
        Generar Encuentros
      </button>}
      <table className="w-full" >
        <HeaderHorario />
        <tbody >
          {
            data.map((item, index) => (
              <CampBattle battle={item} num={index} key={index} nro={nro} />
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default ListTimeTable