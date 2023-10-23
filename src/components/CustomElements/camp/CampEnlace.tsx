import { useRef } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { AiFillEdit } from 'react-icons/ai'

type Props = {
  handleClick: Function,
  title: string
  textCopy: string
}

function CampEnlace({ handleClick, title, textCopy }: Props) {

  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleCopyText = () => {
    if (inputRef.current) {
    }
  }

  return (
    <div className="flex justify-between text-xl bg-zinc-900 items-center
    border border-cyan-400" >
      <CopyToClipboard
        text={textCopy}
        onCopy={() => true}>
        <span role='button' className='w-full py-2 px-4 block text-center' >
          {title}
        </span>
      </CopyToClipboard>
      <button
        className="bg-cyan-400 text-slate-950 py-2 px-4 text-xl flex gap-3 items-center"
        onClick={() => handleClick()} >
        <AiFillEdit />
        <span>Editar</span>
      </button>
    </div>
  )
}

export default CampEnlace