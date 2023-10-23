"use client"
import { useGetPage, useUpdatePage } from "@/hooks/usePage"
import { useRouter } from 'next/navigation'
import ButtonCreatePage from "./Buttons/ButtonCreatePage"
import ButtonAdd from "./Buttons/ButtonAdd"
import { showDialogInput } from '@/components/show/showDialog'
import CampEnlace from "./camp/CampEnlace"
import ButtonManage from "./Buttons/ButtonManage"
import UploadForm from "../CustomForms/UploadForm"
import Image from 'next/image'
import { useState } from 'react'
import Clipboard from 'clipboard'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function PageProfile() {

  const { data, isLoading, isError } = useGetPage()
  const { mutate: updatePage } = useUpdatePage()
  const router = useRouter()
  const [editar, setEditar] = useState(false)
  const clip = new Clipboard("btn")


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

          {data.urlImage ?
            !editar ? <div >
              <Image
                src={data.urlImage}
                alt={data.pageName}
                width={300}
                height={300}
                className="mx-auto"
              />
              <button
                className="bg-zinc-800 py-2 px-4 text-xl rounded-lg mt-5"
                onClick={() => setEditar(true)} >Editar Imagen</button>
            </div> : <div>
              <UploadForm />
              <button
                className="bg-zinc-800 py-2 px-4 text-xl rounded-lg mt-5"
                onClick={() => setEditar(false)} >No Editar Imagen</button>
            </div>
            : <UploadForm />}



          {
            data.urlGroup ? <CampEnlace
              textCopy={data.urlGroup}
              handleClick={addLinkGroup}
              title={`Copiar enlace del grupo`} /> : <ButtonAdd
              action={addLinkGroup}
              title="Añadir enlace del grupo" />
          }

          {
            data.urlPage ? <CampEnlace
              textCopy={data.urlPage}
              handleClick={addLinkPage}
              title={`Copiar enlace de la pagina`}
            /> : <ButtonAdd
              action={addLinkPage}
              title="Añadir enlace de la pagina" />
          }

        </div>

      </div>}

    </div>
  )
}

export default PageProfile