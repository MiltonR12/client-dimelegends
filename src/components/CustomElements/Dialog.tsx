type Props = {
  children: React.ReactNode,
  isVisible: boolean,
  setIsVisible: Function,
  action?: Function
}

function Dialog({ children, isVisible, setIsVisible, action }: Props) {

  const handleClick = () => {
    if (action) {
      action()
    }
    setIsVisible(false)
  }

  return (
    <div
      className={`${isVisible ? 'flex' : 'hidden'} fixed inset-0 flex-col items-center justify-center`}>
      <div className="bg-zinc-950 p-6 rounded shadow-lg">
        <div>
          {children}
        </div>
        <div className="grid grid-cols-2 gap-3 mt-6" >
          <button
            className="bg-zinc-800 py-1"
            onClick={handleClick}
          >Aceptar</button>
          <button
            onClick={() => setIsVisible(false)}
            className="bg-red-600 py-1"
          >Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default Dialog