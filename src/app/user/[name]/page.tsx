"use client"
import Profile from "@/components/CustomElements/Profile"
import { useUserState } from "@/state/user"
import { useRouter } from 'next/navigation'
import Authenticate from '@/components/PartPage/Authenticate'
import PageProfile from "@/components/CustomElements/PageProfile"

function UserPage() {

  const { resetState } = useUserState()
  const router = useRouter()

  const logaut = () => {
    resetState()
    router.push('/login')
  }

  return (
    <section className="pt-14 md:pt-20" >
      <Authenticate>
        <div className="p-2" >
          <div>
            <Profile />
          </div>
          <div>
            <PageProfile />
          </div>
          <button onClick={() => router.push('/record')} >
            Registros
          </button>
          <button
            className="bg-red-600 py-1 px-3"
            onClick={logaut}
          >
            Cerrar Session
          </button>
        </div>
      </Authenticate>
    </section>
  )
}

export default UserPage