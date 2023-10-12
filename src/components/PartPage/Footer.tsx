import Link from 'next/link'
import { AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h4 className="text-2xl font-bold">Enlaces</h4>
          <ul className="mt-4">
            <li>
              <Link href='/'
                className="text-3xl text-white hover:text-gray-400" >
                Inicio
              </Link>
            </li>
            <li>
              <Link href='/torneos' className="text-3xl text-white hover:text-gray-400" >
                Torneos
              </Link>
            </li>
            <li>
              <Link href='/contacto' className="text-3xl text-white hover:text-gray-400" >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h4 className="text-2xl font-bold">Contacto</h4>
          <p className="mt-4">Correo electrónico: miltonaguilar1235@gmail.com</p>
          <p>Teléfono: +591 69795574</p>
          <p>Dirección: La Paz - Bolivia</p>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-2xl font-bold">Síguenos</h4>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a href='https://www.facebook.com/DimeLegendsBolivia'
                className="text-xl text-white hover:text-gray-400 flex gap-3 items-center" >
                <AiFillFacebook /> <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href='https://chat.whatsapp.com/K5AH26VUJwC9zhLMnZ7OI1'
                className="text-xl text-white hover:text-gray-400 flex gap-3 items-center" >
                <AiOutlineWhatsApp /> <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a href='https://discord.gg/Rkf4rsCm'
                className="text-xl text-white hover:text-gray-400 flex gap-3 items-center" >
                <BsDiscord /> <span>Discord</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>

  )
}

export default Footer