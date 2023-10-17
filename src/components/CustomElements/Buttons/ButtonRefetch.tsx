type Props = {
  onClick: () => void
}

function ButtonRefetch({ onClick }: Props) {
  return (
    <button 
      className="bg-zinc-900 text-xl py-2 px-4 rounded-xl border-2 border-cyan-400
      text-cyan-400"
    onClick={onClick} >
      Reintentar
    </button>
  )
}

export default ButtonRefetch