
function HeaderVersus({ isUser }: { isUser?: boolean }) {
  return (
    <thead className='bg-slate-950 text-cyan-500 font-semibold sticky top-0' >
      <tr className={`text-xl ${isUser ? "grid grid-cols-4" : ""}`} >
        <th>
          Participante 1
        </th>
        <th>
          Fecha
        </th>
        <th>
          Hora
        </th>
        <th>
          Participante 2
        </th>
      </tr>
    </thead>
  )
}

export default HeaderVersus