
function PlayersList({ players, isOpen }: { players: string[], isOpen: boolean }) {
  return (
    <tr className={`${isOpen ? "flex" : "hidden"} bg-neutral-900 grid gap-1 p-2 text-xl list-decimal`} >
      {
        players.map((item, index) => (
          <td colSpan={4} key={index} >{item}</td>
        ))
      }
    </tr>
  )
}

export default PlayersList