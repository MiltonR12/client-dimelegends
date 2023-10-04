import estilos from '@/styles/layoutTorneo.module.css'

function LayoutTorneos({ children }: { children: React.ReactNode }) {
  return (
    <section className={`${estilos.contLayout} h-full pt-14 md:pt-20`} >
      {children}
    </section>
  )
}

export default LayoutTorneos