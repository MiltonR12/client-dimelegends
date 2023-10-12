import Title from '../CustomElements/Title'
import Image from 'next/image'
import copa from '@/imgs/copa.png'
import logo from '@/imgs/logo.png'

function Portada() {

  return (
    <section
      className={`fondo h-screen flex place-items-center p-3 transition-all`} >
      <div
        className='container mx-auto flex gap-5 flex-col sm:flex-row justify-around items-center' >
        <div className='w-96 hidden sm:block' >
          <Image src={logo} alt='logo' />
        </div>
        <Title />
        <div className='w-52 sm:w-96' >
          <Image src={copa} alt='copa' />
        </div>
      </div>
    </section>
  )
}

export default Portada