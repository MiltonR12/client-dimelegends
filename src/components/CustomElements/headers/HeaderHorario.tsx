
function HeaderHorario() {
  return (
    <thead className="flex bg-slate-950 py-2 text-center text-2xl" >
      <tr className="grid grid-cols-3 w-[90%] text-cyan-400" >
        <td>
          Participante 1
        </td>
        <td className="grid grid-cols-2" >
          <span>Fecha</span>
          <span>Hora</span>
        </td>
        <td>
          Participante 2
        </td>
      </tr>
      <tr className="w-[10%]" >
        <td>Acciones</td>
      </tr>
    </thead>
  )
}

export default HeaderHorario