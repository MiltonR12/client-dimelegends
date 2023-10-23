import { BsWhatsapp, BsFacebook, BsDiscord } from 'react-icons/bs'
import Image from 'next/image'
import contacto from '@/imgs/contacto.jpg'

function ContactoPage() {
  return (
    <div className="p-3 md:p-5 flex items-center justify-center" >
      <div className='grid md:grid-cols-2 gap-5 max-w-3xl mx-auto p-5 bg-zinc-950 rounded-2xl' >
        <div className='flex flex-col justify-center gap-5 text-center md:text-left' >
          <h3 className=" text-3xl md:text-5xl font-semibold text-rose-600" >Contactanos!</h3>
          <p className='text-zinc-300' >
            ¡No esperes más para unirte a la diversión! Tu pasión por los videojuegos merece ser compartida. ¡Contáctame ahora y descubre un mundo de emocionantes torneos gaming en mi página web! ¡Juntos, crearemos experiencias inolvidables!
          </p>
          <h5 className='text-cyan-400 text-center text-3xl border-b-2 border-cyan-400' >
            Nuestas Redes
          </h5>
          <div className='flex text-4xl gap-3 justify-center' >
            <a target='_blank' href="https://wa.me/59169795574"
              className='bg-green-500 rounded-full p-3' >
              <BsWhatsapp />
            </a>
            <a target='_blank' href="https://www.facebook.com/DimeLegendsBolivia"
              className='bg-white text-blue-600 p-3 rounded-full' >
              <BsFacebook />
            </a>
            <a target='_blank' href="https://discord.gg/U2yKU7E6"
              className='bg-indigo-600 p-3 rounded-full' >
              <BsDiscord />
            </a>
          </div>
        </div>
        <div className='w-4/5 mx-auto' >
          <Image src={contacto} alt='contacto' className='rounded-2xl' />
        </div>
      </div>
    </div>
  )
}

export default ContactoPage