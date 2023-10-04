import TableTeam from '@/components/CustomElements/TableTeam'

function RecordPage({ params }: { params: { nro: string } }) {

  return (
    <article className="p-5" >
      <h3 className="text-center text-5xl text-cyan-400 font-semibold mb-5" >
        Lista de Equipos
      </h3>
      <TableTeam nro={params.nro} />
    </article>
  )
}

export default RecordPage