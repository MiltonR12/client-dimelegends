import Portada from "@/components/PartPage/Portada"
import Image from 'next/image'
import copa from '@/imgs/copa.png'
import ContentCreators from "@/components/panel/ContentCreators"
import PrimaryButton from "@/components/CustomElements/Buttons/PrimaryButton"

function HomePage() {
  return (
    <>
      <Portada />
      <section className="bg-black py-10 px-3 w-full" >
        <div className="fondoCircle max-w-xl py-5 rounded-2xl mx-auto grid sm:grid-cols-2" >
          <h3 className="px-3 py-2 font-semibold text-4xl text-red-600" >
            Crea tu torneo
          </h3>
          <div className="sm:row-span-2 flex items-center justify-center" >
            <Image src={copa} alt="copa" width={200} />
          </div>
          <div className="px-3" >
            <p className="max-w-xs mb-6 text-zinc-200 block" >
              Potencia tu pasión por los videojuegos creando torneos en Dime Legends. Organiza competencias gamer emocionantes y compite con jugadores de todo el mundo. ¡Únete ahora!
            </p>
            <PrimaryButton href='/torneo/create' >
              Crear Torneo
            </PrimaryButton>
          </div>

        </div>
      </section>
      <ContentCreators />
    </>
  )
}

export default HomePage