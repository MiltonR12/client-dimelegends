import SessionForm from '@/components/CustomForms/SessionForm'
import React from 'react'

const initValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}

function RegisterPage() {
  return (
    <section className='pt-14 sm:pt-20 h-screen' >
      <div className="p-2 flex items-center justify-center h-full" >
        <SessionForm isLogin={false} initValues={initValues} />
      </div>
    </section>
  )
}

export default RegisterPage