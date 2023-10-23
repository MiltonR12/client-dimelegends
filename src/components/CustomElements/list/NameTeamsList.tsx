type Props = {
  nameList: {
    teamName: string
  }[]
}

function NameTeamsList({ nameList }: Props) {

  return (
    <ul className="overflow-auto max-h-56" >
      {
        nameList.map((item, index) => (
          <li
            key={index}
            className={`text-black px-3 py-1 list-decimal ${index % 2 === 0 ? "bg-zinc-200" : "bg-zinc-300"}`} > {(index + 1) + " " + item.teamName}</li>
        ))
      }
    </ul>
  )
}

export default NameTeamsList