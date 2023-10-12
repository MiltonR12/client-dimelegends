"use client"
import { useGetAllPages } from "@/hooks/usePage"
import ListCreators from "../CustomElements/list/ListCreators"

function ContentCreators() {

  const { data = [], isLoading, isError } = useGetAllPages()

  return (
    <section className="py-10 px-3 bg-gradient-to-b from-black to-violet-950" >

      <h4 className="text-center text-3xl font-semibold mb-5" >
        Creadores de contenido
      </h4>

      {isLoading && <p>Cargando...</p>}
      {!isLoading && isError && <small>Error</small>}
      {!isLoading && !isError && <ListCreators page={data} />}
    </section>
  )
}

export default ContentCreators