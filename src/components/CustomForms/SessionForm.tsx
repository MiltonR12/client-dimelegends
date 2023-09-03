"use client"
import { Formik } from 'formik'
import InputCustom from '../CustomElements/InputCustom'
import Link from 'next/link'
import { useLogin, useRegister } from '@/hooks/useUser'
import { User } from '@/types/interfaces'
import { useUserState } from '@/state/user'
import { useRouter } from 'next/navigation'

type Props = {
  isLogin: boolean
  initValues: Omit<User, "urlPhoto" | "biography">
}

function SessionForm({ isLogin, initValues}: Props) {

  const { mutate: register, isLoading: loadingRegister } = useRegister()
  const { mutate: login, isLoading: loadingLogin } = useLogin()
  const { updateState } = useUserState()
  const router = useRouter()

  const isAction = () => {
    if (isLogin) {
      return loadingLogin
    } else {
      return loadingRegister
    }
  }

  return (
    <Formik
      initialValues={initValues}
      onSubmit={({ email, password, firstName, lastName }) => {
        if (isLogin) {
          login({ email, password }, {
            onSuccess(data) {
              const { token, user } = data
              updateState(user, token)
              router.push(`/user/${user.firstName}`)
            },
            onError(error) {
              console.log(error)
            }
          })
        } else {
          register({ firstName, lastName, email, password }, {
            onSuccess() {
              router.push('/login')
            },
            onError(error) {
              console.log(error)
            },
          })
        }
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}
          className='w-full max-w-md bg-gradient-to-r to-blue-800 from-blue-950 rounded-md'
        >
          <div
            className='p-3 md:p-7 flex flex-col gap-3'>

            <h3 className='text-3xl text-center font-semibold' >
              {isLogin ? "Iniciar Session" : "Registrarse"}
            </h3>

            {
              !isLogin && <div className='flex flex-col gap-3 md:flex-row' >
                <InputCustom required={true} title='Nombre' name='firstName' />
                <InputCustom required={true} title='Apellido' name='lastName' />
              </div>
            }

            <InputCustom required={true} title='Email' name='email' type='email' />
            <InputCustom required={true} title='Contraseña' name='password' type='password' />

            <button
              disabled={isAction()}
              className='bg-zinc-950 py-1 text-2xl rounded-md mt-3 disabled:bg-zinc-700'
            >
              {isLogin ? "Iniciar Session" : "Crear Cuenta"}
            </button>

            <div>
              <Link
                className='text-xl hover:text-cyan-400'
                href={isLogin ? '/register' : '/login'}>
                {isLogin ? "No tengo cuenta" : "Tengo cuenta"}
              </Link>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default SessionForm