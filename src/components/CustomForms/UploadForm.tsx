import { ChangeEvent, useState, FormEvent, useRef } from "react"
import { uploadFile } from '@/api/pageApi'
import { BiSolidImage } from 'react-icons/bi'

function UploadForm() {

  const [selectImage, setSelectImage] = useState<File | null>(null)
  const refImage = useRef<HTMLSpanElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectImage(e.target.files[0])
      if (refImage.current) {
        refImage.current.textContent = e.target.files[0].name
      }
    }
  }

  const handleUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    if (selectImage) {
      const formData = new FormData()
      formData.append('image', selectImage)
      try {
        await uploadFile(formData)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    } else {
      if (refImage.current) {
        refImage.current.textContent = "Seleccionar una imagen"
      }
    }

  }

  return (
    <form onSubmit={e => handleUpload(e)} >
      <div className="flex items-center justify-center mb-5" >
        <label
          htmlFor="image"
          className="p-8 px-16 bg-rose-600 rounded-xl text-9xl flex flex-col
          cursor-pointer items-center"
        >
          <BiSolidImage />
          <span ref={refImage} className="text-2xl font-semibold" >Seleccionar Imagen</span>
        </label>
      </div>
      <input className="hidden" id="image" type="file" onChange={e => handleChange(e)} />
      <button
        disabled={isLoading}
        className="px-4 py-2 border-4 rounded-lg mx-auto block border-rose-600"
      >Subir Imagen</button>
    </form>
  )
}

export default UploadForm