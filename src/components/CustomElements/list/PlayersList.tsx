
function PlayersList({ players, isOpen }: { players: string[], isOpen: boolean }) {
  return (
    <tr className={`${isOpen ? "flex" : "hidden"} flex-col gap-1 mx-7 text-xl list-decimal`} >
      {
        players.map((item, index) => (
          <td key={index} >{item}</td>
        ))
      }
    </tr>
  )
}

export default PlayersList