"use client"
import { useUserState } from "@/state/user"
import { useRouter } from 'next/navigation'
import Sweet from 'sweetalert2'

function ExitButton() {

  const { resetState } = useUserState()
  const router = useRouter()

  const showDialogExit = () => {
    Sweet.fire({
      title: "¿Estas seguro de salir?",
      color: "#ff0000",
      background: "#000",
      showCancelButton: true,
      confirmButtonText: "Salir",
      confirmButtonColor: "#ff0000",
      cancelButtonText: "Cancelar",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        resetState()
        router.push('/login')
      }
    })
  }

  return (
    <button
      className="bg-red-600 py-1 px-3 mx-auto text-xl rounded-lg"
      onClick={showDialogExit} >
      Cerrar Session
    </button>
  )
}

export default ExitButton