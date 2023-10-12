
type Props = {
  action: Function,
  title: string
}

function ButtonAdd({ action, title }: Props) {

  const handleClick = () => {
    action()
  }

  return (
    <button
      onClick={handleClick}
      className="bg-zinc-800 block py-2 px-4 rounded-lg mb-3 text-cyan-400" >
      {title}
    </button>
  )
}

export default ButtonAdd