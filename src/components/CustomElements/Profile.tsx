"use client"
import { useUserState } from "@/state/user"

function Profile() {

  const { user } = useUserState()

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center gap-3" >
        <h3
          className="w-20 h-20 rounded-full bg-zinc-950 border-cyan-400 border-2 flex items-center justify-center select-none text-3xl md:text-5xl font-bold">
          <span>{user.firstName.charAt(0)}</span>
        </h3>
        <p
          className="text-xl sm:text-3xl"
        > {user.firstName} {user.lastName} </p>
      </div>
      <div>
        <p className="text-center my-3" > {user.email} </p>
      </div>
      <div>
        <h4 className="text-cyan-400 text-xl sm:text-2xl" >Biografia</h4>
        <p> {user.biography} </p>
      </div>
    </div>
  )
}

export default Profile