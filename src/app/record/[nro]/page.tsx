import PanelRecord from '@/components/panel/PanelRecord'

function RecordPage({ params }: { params: { nro: string } }) {

  return (
    <article className="p-2 md:p-5 overflow-x-auto flex min-h-[calc(100vh-56px)]" >
      <div className=' w-full md:max-w-6xl mx-auto' >
        <h3 className="text-center text-5xl text-cyan-400 font-semibold mb-5" >
          Administrar Torneo
        </h3>
        <PanelRecord nro={params.nro} />
      </div>
    </article>
  )
}

export default RecordPage