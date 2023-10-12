import { useGetBattles } from "@/hooks/useBattle"
import CampBattle from "../camp/CampBattle"
import HeaderHorario from "../headers/HeaderHorario"

function ListTimeTable({ nro }: { nro: string }) {

  const { data = [], isLoading, isError } = useGetBattles(nro)

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {!isLoading && isError && <small>Error en el servidor</small>}
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