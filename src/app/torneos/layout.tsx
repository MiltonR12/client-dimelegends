import estilos from '@/styles/layoutTorneo.module.css'

import React from 'react'

function LayoutTorneos({ children }: { children: React.ReactNode }) {
  return (
    <section className={`${estilos.contLayout} min-h-screen pt-14 md:pt-20`} >
      {children}
    </section>
  )
}

export default LayoutTorneos