import { showDialogInput } from '@/components/show/showDialog'
import { useCreatePage } from '@/hooks/usePage'

function ButtonCreatePage() {

  const { mutate: createPage } = useCreatePage()

  const showDialog = () => {
    showDialogInput({
      title: "Crear Pagina",
      buttonAcept: "Crear",
      placeholder: "Nommbre de la pagina",
      buttonCancel: "Cancelar",
      onSuccess: (value: string) => {
        createPage({ pageName: value }, {
          onError() {
            alert('Error al crear la cuenta')
          }
        })
      }
    })
  }

  return (
    <button className="text-2xl text-cyan-400 py-2 px-4 bg-zinc-900 
      border-cyan-400 rounded-lg border-4"
      onClick={showDialog}>
      Crear Pagina
    </button>
  )
}

export default ButtonCreatePage