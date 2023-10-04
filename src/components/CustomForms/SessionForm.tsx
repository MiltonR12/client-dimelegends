"use client"
import { Formik } from 'formik'
import InputCustom from '../CustomElements/InputCustom'
import Link from 'next/link'
import { useLogin, useRegister } from '@/hooks/useUser'
import { User } from '@/types/interfaces'
import { useUserState } from '@/state/user'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import gamer from '@/imgs/gamer.jpg'
import { useState } from 'react'
import MessageError from '../CustomElements/MessageError'
import { SessionDefault } from '@/utils/defaultForm'
import UserCircle from '../icons/UserCircle'

type Props = {
  isLogin: boolean
  initValues?: Omit<User, "urlPhoto" | "biography">
}

function SessionForm({ isLogin, initValues = SessionDefault }: Props) {

  const { mutate: register, isLoading: loadingRegister } = useRegister()
  const { mutate: login, isLoading: loadingLogin } = useLogin()
  const { updateState } = useUserState()
  const router = useRouter()
  const [errores, setErrores] = useState<any>(null)

  return (
    <Formik
      initialValues={initValues}
      onSubmit={({ email, password, firstName, lastName }) => {
        if (isLogin) {
          login({ email, password }, {
            onSuccess({ token, user }) {
              updateState(user, token)
              router.push(`/user/${user.firstName}`)
            }, onError(error) {
              setErrores(error)
            },
          })
        } else {
          register({ firstName, lastName, email, password }, {
            onSuccess() {
              router.push('/login')
            },
            onError(error) {
              setErrores(error)
            },
          })
        }
      }}
    >
      {({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-4xl bg-zinc-950 grid md:grid-cols-2 
          rounded-xl overflow-hidden'>
          <div className='p-3 md:p-7 flex flex-col gap-3'>

            <h3 className='text-3xl text-center font-semibold text-cyan-400 mb-5' >
              {isLogin ? "Iniciar Session" : "Registrarse"}
            </h3>

            <UserCircle />

            <MessageError errores={errores} />

            {!isLogin && <div className='grid md:grid-cols-2 gap-3' >
              <InputCustom required={true} title='Nombre' name='firstName' />
              <InputCustom required={true} title='Apellido' name='lastName' />
            </div>}

            <InputCustom required={true} title='Email' name='email' type='email' />
            <InputCustom required={true} title='Contraseña' name='password' type='password' />

            <button
              disabled={isLogin ? loadingLogin : loadingRegister}
              className='bg-zinc-900 py-1 text-2xl rounded-2xl mt-3 disabled:bg-zinc-700'>
              {isLogin ? "Iniciar Session" : "Crear Cuenta"}
            </button>

            <div>
              <Link
                className='text-xl hover:text-cyan-400 items-end'
                href={isLogin ? '/register' : '/login'}>
                {isLogin ? "No tengo cuenta" : "Tengo cuenta"}
              </Link>
            </div>
          </div>
          <div className='hidden md:block' >
            <Image src={gamer} alt='gamer' />
          </div>
        </form>
      )}
    </Formik>
  )
}

export default SessionForm