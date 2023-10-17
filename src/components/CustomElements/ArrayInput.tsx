import { Field, FieldArray, FieldArrayRenderProps } from 'formik'
import { AiFillDelete } from 'react-icons/ai'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin']
})

type Props = {
  name: string,
  title: string,
  placeholder?: string,
  values: string[],
  required?: boolean
}

function ArrayInput({ name, title, placeholder = "", values, required = false }: Props) {
  return (
    <div>
      <FieldArray
        name={name}
        render={(actions: FieldArrayRenderProps) => {
          return (
            <div className='flex flex-col gap-1' >
              <div className={`${roboto.className} flex justify-between items-center`} >
                <label className='text-cyan-400 text-xl' >
                  {title}
                </label>
                <button type="button" onClick={() => actions.push("")}>
                  Agregar +
                </button>
              </div>
              <div className='flex flex-col gap-2' >
                {values.map((item, index) => (
                  <div key={index} className='flex gap-2 justify-between bg-zinc-900 py-1 px-2
                  rounded-md border-l-4 border-red-600' >
                    <Field
                      placeholder={placeholder}
                      required={required}
                      autoComplete="off"
                      className='bg-transparent outline-none w-full md:text-xl'
                      name={`${name}.${index}`} />
                    <button
                      className='text-red-600 text-2xl'
                      type="button"
                      onClick={() => actions.remove(index)}>
                      <AiFillDelete />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )
        }}
      />
    </div>
  )
}

export default ArrayInput