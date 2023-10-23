type MessageError = {
  msg: string,
  type: string,
  value: string,
  path: string
}

function MessageError({ errores }: { errores: any }) {

  const err = () => {
    if (!errores) return []
    const contErrores: MessageError[] = []
    if (errores.response.status === 400) {
      for (let clave in errores.response.data.message) {
        const nuevo = errores.response.data.message[clave]
        contErrores.push(nuevo)
      }
    }

    if (errores.response.status === 401) {
      errores.response.data.error.map((item: MessageError, index: number) => {
        contErrores.push(item)
      })
    }

    if (errores.response.status === 500) {
      const nuevo = errores.response.data.message
      contErrores.push({
        msg: nuevo,
        path: "",
        type: "",
        value: ""
      })
    }
    return contErrores
  }

  return (
    <small className={` ${err().length === 0 ? "hidden" : "block"} bg-red-300 text-red-800 border-2 border-red-800 py-1 px-2 font-semibold text-xl`} >
      <ul>
        {err().map((item, index) => <li key={index} >{item.msg}</li>)}
      </ul>
    </small>
  )
}

export default MessageError