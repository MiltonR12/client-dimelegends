type Props = {
  title: string,
  value: string
}

function SectionInfo({ title, value }: Props) {
  return (
    <div className="flex justify-between" >
      <h4 className="text-cyan-500 text-xl" >{title}</h4>
      <p className="text-cyan-300" >{value}</p>
    </div>
  )
}

export default SectionInfo