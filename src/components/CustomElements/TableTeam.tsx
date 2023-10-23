"use client"
import { useGetRecords } from "@/hooks/useRecord"
import CardRecord from "../CustomCards/CardRecord"
import HeaderTable from "./headers/HeaderTable"
import { Record } from "@/types/interfaces"
import SearchTeam from "./SearchTeam"
import Link from "next/link"
import { useState } from "react"
import TableSkeleton from "../Skeleton/TableSkeleton"

function TableTeam({ nro }: { nro: string}) {

  const { data = [], isLoading, isError } = useGetRecords(nro)
  const [search, setSearch] = useState("")

  const handleSearch = (team: Record) => {
    const teamName = team.teamName.toLowerCase().trim()
    const phone = team.phone.toLowerCase().trim()
    const captain = team.captain.toLowerCase().trim()
    const textSearch = search.toLowerCase().trim()

    if (teamName.includes(textSearch)) {
      return true
    } else if (phone.includes(textSearch)) {
      return true
    } else if (captain.includes(textSearch)) {
      return true
    }
    return false
  }

  return (
    <div className="flex flex-col" >
      <div className='flex items-center bg-zinc-950 pt-5 pb-2 px-4 justify-between' >
        <SearchTeam search={search} setSearch={setSearch} />
        <div>
          <Link
            className="py-1 px-3 bg-zinc-700 rounded-lg"
            href={`/form/create/${nro}`} >Añadir Equipo</Link>
        </div>
      </div>
      <table>
        <HeaderTable />
        {isLoading && <TableSkeleton />}
        {isError && !isLoading && <span>Ocurrio un error</span>}
        <tbody>
          {
            data.filter((elem) => handleSearch(elem)).map((item, index) => (
              <CardRecord record={item} isPar={index % 2 === 0} key={index} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableTeam