type Props = {
  nameList: {
    teamName: string
  }[]
}

function NameTeamsList({ nameList }: Props) {

  return (
    <ul className="bg-black rounded-lg overflow-auto max-h-56" >
        {
          nameList.map((item, index) => (
            <li
              key={index}
              className={`ml-5 px-3 py-1 list-decimal ${index % 2 === 0 ? "bg-zinc-700" : "bg-zinc-800"}`} >{item.teamName}</li>
          ))
        }
      </ul>
  )
}

export default NameTeamsList