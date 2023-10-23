
type Props = {
  onClick: () => void,
  isActive: boolean,
  children: React.ReactNode
}

function ButtonPressed({ isActive, onClick, children }: Props) {
  return (
    <button
      className={`border-2 border-cyan-400 py-2 text-xl md:text-2xl
      ${isActive ? "bg-cyan-400" : ""}`}
      onClick={onClick} >
      {children}
    </button>
  )
}

export default ButtonPressed