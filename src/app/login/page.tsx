import SessionForm from "@/components/CustomForms/SessionForm"

function LoginPage() {
  return (
    <section className="min-h-screen fondo flex items-center justify-center p-3" >
      <SessionForm isLogin={true} />
    </section>
  )
}

export default LoginPage