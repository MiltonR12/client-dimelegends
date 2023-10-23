"use client"
import { useUserState } from "@/state/user"
import FormPassword from "../CustomForms/FormPassword"
import IconName from "../icons/IconName"

function Profile() {

  const { user } = useUserState()

  return (
    <div>
      <div
        className="flex flex-col sm:flex-row items-center gap-3
         border-b-2 border-zinc-300 pb-3" >

        <IconName firstName={user.firstName} />
        
        <p className="text-xl sm:text-3xl">
          {user.firstName} {user.lastName}
        </p>
      </div>
      <div>
        <p className="text-center my-3 text-xl text-zinc-200" > {user.email} </p>
      </div>
      <div>
        <h4 className="text-cyan-400 text-xl sm:text-2xl" >Biografia</h4>
        <p> {user.biography} </p>
      </div>
      <FormPassword />
    </div>
  )
}

export default Profile