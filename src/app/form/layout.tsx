import estilos from '@/styles/layoutform.module.css'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className={`${estilos.contForm} h-full pt-14 md:pt-20 grid justify-center`} >
      {children}
    </section>
  )
}

export default layout