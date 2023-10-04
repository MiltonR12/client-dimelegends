import ListRecord from "@/components/CustomElements/list/ListRecord"
import AuthenticatedRoute from "@/components/PartPage/Authenticate"
import estilos from '@/styles/layoutRecord.module.css'
import Link from 'next/link'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full pt-14 md:pt-20 flex" >
      <AuthenticatedRoute>
        <div className="max-w-xs w-full bg-slate-950 flex flex-col justify-between" >
          <h3 className="text-center text-2xl py-3" >
            Torneos
          </h3>
          <ListRecord />
          <Link
            className="bg-cyan-400 text-2xl py-2 text-center"
            href='/torneo/create' >
            Crear Torneo
          </Link>
        </div>
        <div className={`${estilos.contRecord} w-full overflow-y-auto`} >
          {children}
        </div>
      </AuthenticatedRoute>
    </section>
  )
}

export default layout