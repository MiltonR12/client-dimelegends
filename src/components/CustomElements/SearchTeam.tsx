import { ChangeEvent } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"

type Props = {
  search: string,
  setSearch: Function
}

function SearchTeam({ search, setSearch }: Props) {

  const searchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    const text = e.target.value
  }

  return (
    <div className="bg-zinc-900 py-1 px-5 flex gap-1 items-center rounded-2xl" >
      <input
        type="text"
        onChange={e => searchText(e)}
        value={search}
        placeholder="Buscar"
        className="bg-zinc-900 outline-none text-xl" />
      <span className="text-zinc-400" >
        <FaMagnifyingGlass />
      </span>
    </div>
  )
}

export default SearchTeam