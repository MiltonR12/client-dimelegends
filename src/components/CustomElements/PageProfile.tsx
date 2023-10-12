"use client"
import { useGetPage, useUpdatePage } from "@/hooks/usePage"
import { useRouter } from 'next/navigation'
import ButtonCreatePage from "./Buttons/ButtonCreatePage"
import ButtonAdd from "./Buttons/ButtonAdd"
import { showDialogInput } from '@/components/show/showDialog'
import CampEnlace from "./camp/CampEnlace"
import ButtonManage from "./Buttons/ButtonManage"
import UploadForm from "../CustomForms/UploadForm"

function PageProfile() {

  const { data, isLoading, isError } = useGetPage()
  const { mutate: updatePage } = useUpdatePage()
  const router = useRouter()

  const addLinkGroup = () => {
    showDialogInput({
      buttonAcept: "Agregar Enlace",
      placeholder: "Enlace",
      title: "Agregar enlace de tú grupo",
      onSuccess(values: string) {
        data && updatePage({ ...data, urlGroup: values }, {
          onError() {
            alert('Error al cambiar la url del grupo')
          }
        })
      }
    })
  }

  const addLinkPage = () => {
    showDialogInput({
      title: "Agregar enlace de tú pagina",
      placeholder: "Enlace",
      buttonAcept: "Agregar Enlace",
      onSuccess(value: string) {
        data && updatePage({ ...data, urlPage: value }, {
          onError() {
            alert('Error al cambiar la url de la pagina')
          }
        })
      }
    })
  }

  if (isLoading) return <p>Cargando...</p>

  if (isError) router.push('/login')

  return (
    <div className="flex flex-col" >

      {!data && <ButtonCreatePage />}

      {data && <div>

        <h4
          className="text-cyan-500 text-center text-2xl font-semibold first-letter:mb-3" >
          Cuenta
        </h4>

        <p className="text-xl text-center mb-5" >
          {data.pageName}:
        </p>

        <div className="py-3 flex flex-col gap-3" >

          <ButtonManage />

          <UploadForm />

          {
            !data.urlGroup ? <ButtonAdd
              action={addLinkGroup}
              title="Añadir enlace del grupo" /> : <CampEnlace
              handleClick={addLinkGroup}
              title={`Enlace Del Grupo: ${data.urlGroup}`} />
          }

          {
            !data.urlPage ? <ButtonAdd
              action={addLinkPage}
              title="Añadir enlace de la pagina" /> : <CampEnlace
              handleClick={addLinkPage}
              title={`Enlace De La Pagina: ${data.urlPage}`}
            />
          }

        </div>

      </div>}

    </div>
  )
}

export default PageProfile