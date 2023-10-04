"use client"
import { useCreatePage, useGetPage } from "@/hooks/usePage"
import Sweet from 'sweetalert2'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function PageProfile() {

  const { data, isLoading, isError } = useGetPage()
  const { mutate: createPage } = useCreatePage()
  const router = useRouter()

  const showDialog = () => {
    Sweet.fire({
      title: 'Crear Pagina',
      input: "text",
      preConfirm: (value) => {
        if (!value) {
          Sweet.showValidationMessage("Coloca un nombre")
        }
      },
      inputPlaceholder: "Nombre de la pagina",
      color: "#fff",
      background: "#000",
      showCancelButton: true,
      confirmButtonText: "Crear",
      confirmButtonColor: "#06B6D4",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        createPage({ pageName: result.value }, {
          onError() {
            alert('Ocurrio un error al crear la pagina')
          }
        })
      }
    })
  }

  if (isLoading) return <p>Cargando...</p>


  if (isError) router.push('/login')

  return (
    <div className="flex flex-col gap-5" >
      {!data && <button className="text-2xl text-blue-700 py-2 px-4 bg-zinc-900"
        onClick={showDialog}>Crear Pagina</button>}
      {data && <>
        <p>{data.pageName}</p>
        <div>
          <Link
            className="bg-zinc-900 px-4 py-2 text-xl"
            href='/record' >
            Administrar Torneos
          </Link>
        </div>
      </>}
    </div>
  )
}

export default PageProfile