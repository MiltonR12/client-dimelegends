import { Field } from "formik"

type Props = {
  value: string,
  name: string,
  listValues: string[],
  listTitles: string[]
}

function SelectRadio({ listTitles, listValues, name, value }: Props) {
  return (
    <div role="group" className='col-span-2 grid grid-cols-3 text-xl gap-3 py-2' >
      {
        listValues.map((item, index) => (
          <label
            key={index}
            className={`py-2 rounded-lg border-2 md:border-4 border-cyan-400 flex justify-center items-center cursor-pointer md:font-semibold 
            ${value === item ? "bg-cyan-400 text-slate-950" : ""}`}
            htmlFor={(index + 1) + ""}>
            <Field
              type="radio"
              name={name}
              value={item}
              id={(index + 1) + ""}
              className="hidden" />
            {listTitles[index]}
          </label>
        ))
      }
    </div>
  )
}

export default SelectRadio