import SessionForm from '@/components/CustomForms/SessionForm'

function RegisterPage() {
  return (
    <section className='min-h-screen fondo flex items-center justify-center p-3' >
      <SessionForm isLogin={false} />
    </section>
  )
}

export default RegisterPage