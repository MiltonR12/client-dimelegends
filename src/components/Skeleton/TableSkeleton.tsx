const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function TableSkeleton() {
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