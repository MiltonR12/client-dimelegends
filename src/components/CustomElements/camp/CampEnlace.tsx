type Props = {
  handleClick: Function,
  title: string
}

function CampEnlace({ handleClick, title }: Props) {
  return (
    <div className="flex justify-between text-xl" >
      <h4> {title} </h4>
      <button onClick={() => handleClick()} >
        Editar
      </button>
    </div>
  )
}

export default CampEnlace