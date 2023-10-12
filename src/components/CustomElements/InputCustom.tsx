import { Field } from 'formik'

type Props = {
  title: string,
  name: string,
  type?: string,
  required?: boolean
  placeholder?: string,
  isList?: boolean
  listOptiones?: string[]
}

function InputCustom({ title, name, placeholder = "", type = "text", required = false,
  isList = false, listOptiones = [] }: Props) {
  return (
    <div className='flex flex-col gap-1 w-full' >
      <label className='text-xl font-semibold text-cyan-400' >{title}</label>
      <Field
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        type={type}
        required={required}
        className='text-white bg-zinc-800 py-1 px-3 outline-none rounded-md'
        list={`${isList ? "opciones" : "default"}`}
      />
      {
        isList && <datalist id='opciones' >
          {
            listOptiones.map((item, index) => (
              <option value={item} key={index} ></option>
            ))
          }
        </datalist>
      }
    </div>
  )
}

export default InputCustom