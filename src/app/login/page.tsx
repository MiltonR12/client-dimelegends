import SessionForm from "@/components/CustomForms/SessionForm"

const initValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}

function LoginPage() {
  return (
    <section className="pt-14 sm:pt-20 h-screen" >
      <div className="p-2 flex items-center justify-center h-full" >
        <SessionForm isLogin={true} initValues={initValues} />
      </div>
    </section>
  )
}

export default LoginPage