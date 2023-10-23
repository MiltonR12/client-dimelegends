import { Formik } from 'formik'
import InputCustom from '../CustomElements/InputCustom'
import { useUpdatePassword } from '@/hooks/useUser'
import { useRef, useState } from 'react'
import MessageError from '../CustomElements/MessageError'

function FormPassword() {

  const { mutate: updatePassword } = useUpdatePassword()
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const [errores, setErrores] = useState<any>(null)

  const handleOpenDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }

  const handleCloseDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  return (
    <>
      <dialog ref={dialogRef} className='w-full max-w-lg px-3 bg-transparent' >
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: ""
          }}
          onSubmit={(data) => {
            updatePassword(data, {
              onSuccess() {
                dialogRef.current?.close()
              }, onError(error, variables, context) {
                setErrores(error)
              },
            })
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} >
              <div className='flex flex-col gap-5 p-5 bg-zinc-950 w-full' >
                
                <h3 className='text-white text-center text-3xl' >
                  Cambiar la contraseña
                </h3>

                <MessageError errores={errores} />
                <InputCustom name='oldPassword' title='Contraseña actual' type='password' />
                <InputCustom name='newPassword' title='Contraseña nueva' type='password' />

                <div className='grid grid-cols-2 gap-3' >
                  <button
                    type='button'
                    className='border-2 border-cyan-400 text-cyan-400 py-2 rounded-xl
                    text-xl'
                    onClick={handleCloseDialog} >
                    Cancelar
                  </button>
                  <button className='py-2 bg-cyan-400 text-slate-950 rounded-xl
                  text-xl font-semibold hover:bg-cyan-500 transition-all border-2
                  border-cyan-400 hover:border-cyan-500' >
                    Enviar
                  </button>
                </div>

              </div>
            </form>
          )}
        </Formik>
      </dialog>
      <button
        className='bg-zinc-800 py-2 px-4 mt-5 rounded-lg'
        onClick={handleOpenDialog} >
        Cambiar Contraseña
      </button>
    </>
  )
}

export default FormPassword

