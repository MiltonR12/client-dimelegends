import { Field } from 'formik'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '300',
  subsets: ['latin']
})

type Props = {
  name: string,
  title: string,
  type?: string,
  placeholder?: string,
  required?: boolean
}

function InputForm({ name, title, type = "text", placeholder = "", required = false }: Props) {
  return (
    <div className={`${roboto.className} flex flex-col`} >
      <label className='text-cyan-400 text-xl block' >
        {title}
      </label>
      <Field
        className='py-1 px-3 bg-transparent outline-none border-b border-cyan-300
        md:text-xl'
        name={name}
        type={type}
        autoComplete="off"
        required={required}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputForm