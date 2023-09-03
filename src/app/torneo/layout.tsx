import estilos from '@/styles/layoutTorneo.module.css'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <section className={`${estilos.contLayout} pt-14 md:pt-20 min-h-screen`} >
      {children}
    </section>
    )
}

export default Layout