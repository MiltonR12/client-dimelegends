import { Field } from 'formik'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin']
})

type Props = {
  name: string,
  title: string,
  list: string[]
}

function ListCustom({ name, title, list }: Props) {
  return (
    <div className={`${roboto.className} flex flex-col gap-1 w-full`} >
      <label className='text-cyan-400 text-xl' >
        {title}
      </label>
      <Field
        name={name} as="select"
        className="bg-zinc-900 py-1 px-3 outline-none border border-cyan-400"
      >
        {list.map((item, index) => (
          <option
            className='py-1 text-xl text-cyan-400'
            value={item}
            key={index} >{item}</option>
        ))}
      </Field>
    </div>
  )
}

export default ListCustom