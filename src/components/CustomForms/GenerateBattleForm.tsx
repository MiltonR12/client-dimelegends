import { useCreateAllBattles } from "@/hooks/useBattle"
import { Formik } from 'formik'
import InputCustom from "../CustomElements/InputCustom"

function GenerateBattleForm({ nro }: { nro: string }) {

  const { mutate: createAllBattles, isLoading } = useCreateAllBattles()

  const generateBattles = (nroBattlesByDay: number,
    timeBattles: number, startBattles: string) => {
    createAllBattles({
      nro,
      data: {
        nroBattlesByDay: nroBattlesByDay,
        timeBattles: timeBattles,
        startBattles: startBattles
      }
    })
  }

  return (
    <div>
      <Formik
        initialValues={{
          nroBattlesByDay: 0, timeBattles: 0, startBattles: ""
        }}
        onSubmit={({ nroBattlesByDay, timeBattles, startBattles }) => {
          generateBattles(nroBattlesByDay, timeBattles, startBattles)
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} >
            <div className="grid grid-cols-2 gap-3 bg-slate-950 p-3" >
              <InputCustom
                name="nroBattlesByDay"
                title="Nº de encuentros por dia"
                type="number"
                required={true}
              />

              <InputCustom
                name="timeBattles"
                title="Tiempo por encuentro"
                type="number"
                required={true}
              />

              <InputCustom
                name="startBattles"
                title="Inicio de los horarios"
                type="datetime-local"
                required={true}
              />

              <button
                disabled={isLoading}
              >Generar Horarios</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default GenerateBattleForm