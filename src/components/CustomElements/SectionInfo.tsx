type Props = {
  title: string,
  value: string
}

function SectionInfo({ title, value }: Props) {
  return (
    <div className="flex justify-between" >
      <h4 className="text-red-600 text-xl font-semibold" >{title}</h4>
      <p className="" >{value}</p>
    </div>
  )
}

export default SectionInfo