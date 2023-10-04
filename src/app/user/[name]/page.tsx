import Profile from "@/components/CustomElements/Profile"
import Authenticate from '@/components/PartPage/Authenticate'
import PageProfile from "@/components/CustomElements/PageProfile"
import ExitButton from "@/components/CustomElements/Buttons/ExitButton"

function UserPage() {

  return (
    <section className="p-3" >
      <Authenticate>
        <div className="p-2 flex flex-col gap-5 container mx-auto" >
          <Profile />
          <PageProfile />
          <ExitButton />
        </div>
      </Authenticate>
    </section>
  )
}

export default UserPage