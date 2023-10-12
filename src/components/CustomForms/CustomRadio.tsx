import { Field } from 'formik'

type Props = {
  name: string,
  value?: string | null,
  id: string,
  children: React.ReactNode,
  isCheck: boolean,
  onClick: (nro: number) => void
}

function CustomRadio({ name, value, id, children, isCheck, onClick }: Props) {
  return (
    <label
      onClick={() => onClick(parseInt(id))}
      className={`py-2 rounded-lg border-4 border-cyan-400 flex justify-center items-center cursor-pointer font-semibold ${isCheck ? "bg-cyan-400 text-slate-950" : ""}`}
      htmlFor={id}>
      <Field type="radio" name={name} value={value} id={id} className="hidden" />
      {children}
    </label>
  )
}

export default CustomRadio