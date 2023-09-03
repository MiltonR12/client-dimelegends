import estilos from '@/styles/layoutform.module.css'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className={`${estilos.contForm} pt-14 md:pt-20 min-h-screen p-3 flex items-center justify-center`} >
      {children}
    </section>
  )
}

export default layout