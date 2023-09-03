import ListRecord from "@/components/CustomElements/ListRecord"
import estilos from '@/styles/layoutTorneo.module.css'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="pt-14 md:pt-20 h-screen flex" >
      <div className="max-w-xs w-full bg-slate-950" >
        <h3 className="text-center text-2xl mb-3" >Lista de Registros</h3>
        <ListRecord />
      </div>
      <div className={`${estilos.contLayout} w-full overflow-y-auto`} >
        {children}
      </div>
    </section>
  )
}

export default layout