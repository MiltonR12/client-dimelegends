import AuthenticatedRoute from "@/components/PartPage/Authenticate"
import NavRecords from "@/components/PartPage/NavRecords"
import estilos from '@/styles/layoutRecord.module.css'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="pt-14 md:pt-20" >
      <AuthenticatedRoute>
        <NavRecords />
        <div className={`${estilos.contRecord} w-screen md:w-auto`} >
          {children}
        </div>
      </AuthenticatedRoute>
    </section>
  )
}

export default layout