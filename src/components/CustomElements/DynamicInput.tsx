import { Field, FormikErrors } from 'formik'
import { useState } from 'react'

type Props = {
  title: string,
  name: string,
  required?: boolean,
  placeholder?: string,
  type?: string,
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<any>>,
  resetValue?: string
}

function DynamicInput({ name, required = false, placeholder = "", title, type = "text", setFieldValue, resetValue = "" }: Props) {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setFieldValue(name, resetValue)
    } else {
      setFieldValue(name, "")
    }
  }

  return (
    <div>
      <label className='text-cyan-400 text-xl block' >
        {title}
      </label>
      <div className='flex gap-3' >
        <button type='button' className='bg-cyan-400 py-2 px-4' onClick={handleClick} >
          {isOpen ? "Eliminar" : "Agregar"}
        </button>
        <Field
          className={`py-1 px-3 bg-transparent w-full outline-none border-b border-cyan-300
          md:text-xl ${isOpen ? "block" : "hidden"}`}
          name={name}
          type={type}
          autoComplete="off"
          required={required}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default DynamicInput