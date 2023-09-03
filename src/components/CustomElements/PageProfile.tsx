"use client"
import { useCreatePage, useGetPage } from "@/hooks/usePage"
import { useState } from "react"
import Dialog from "./Dialog"

function PageProfile() {

  const { data, isLoading, isError } = useGetPage()
  const { mutate: createPage } = useCreatePage()
  const [isVisible, setIsVisible] = useState(false)
  const [namePage, setNamePage] = useState("")

  const actionHandler = () => {
    createPage({ pageName: namePage })
  }

  if (isLoading) return <p>Cargando...</p>

  if (isError) return <p>Error</p>

  return (
    <div>
      {!data && <>
        <button
          onClick={() => setIsVisible(!isVisible)}
        >Crear Pagina</button>
        <Dialog
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          action={actionHandler}
        >
          <h3>Crear Pagina</h3>
          <input
            type="text"
            value={namePage}
            onChange={(e) => setNamePage(e.target.value)}
            placeholder="Nombre de la pagina" />
        </Dialog>
      </>}
      { data && <p>{data.pageName}</p> }
    </div>
  )
}

export default PageProfile