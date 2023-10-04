function HeaderTable() {
  return (
    <thead className="grid" >
      <tr className='grid grid-cols-4 bg-zinc-950 p-2 gap-2 text-2xl text-center 
      text-cyan-400'>
        <th >Nombre</th>
        <th >Celular</th>
        <th >Capitan</th>
        <th className="text-white" >Acciones</th>
      </tr>
    </thead>
  )
}

export default HeaderTable
