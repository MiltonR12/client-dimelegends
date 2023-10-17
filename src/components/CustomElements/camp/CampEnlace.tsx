type Props = {
  handleClick: Function,
  title: string
}

function CampEnlace({ handleClick, title }: Props) {
  return (
    <div className="flex justify-between text-xl bg-zinc-900 p-2 rounded-xl items-center" >
      <h4> {title} </h4>
      <button
        className="bg-zinc-800 py-2 px-4 text-xl rounded-lg"
        onClick={() => handleClick()} >
        Editar
      </button>
    </div>
  )
}

export default CampEnlace