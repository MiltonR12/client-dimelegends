function TableSkeleton({ nroCamp = 10 }: { nroCamp?: number }) {

  const num = Array.from({ length: nroCamp }, (_, index) => index + 1);

  return (
    <tbody>
      {
        num.map((item) => (
          <tr key={item} className='grid grid-cols-4 gap-3 px-3 py-2 bg-zinc-950' >
            <td className='h-8 bg-zinc-700 animate-pulse' ></td>
            <td className='h-8 bg-zinc-700 animate-pulse' ></td>
            <td className='h-8 bg-zinc-700 animate-pulse' ></td>
            <td className='h-8 bg-zinc-700 animate-pulse' ></td>
          </tr>
        ))
      }
    </tbody>
  )
}

export default TableSkeleton