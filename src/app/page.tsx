import Portada from "@/components/PartPage/Portada"
import Image from 'next/image'
import copa from '@/imgs/copa.png'
import Link from 'next/link'

function HomePage() {
  return (
    <>
      <Portada />
      <section className="bg-black py-10 px-3 w-full" >
        <div className="bg-zinc-900 max-w-xl py-5 rounded-lg relative mx-auto" >
          <h3 className="bg-cyan-400 p-2 text-3xl block" >Crea tu torneo</h3>
          <div className="px-3" >
            <div>
              <p className="py-5 text-xl max-w-xs" >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quibusdam atque assumenda quasi ratione autem perspiciatis molestiae aut ullam magnam.
              </p>
              <Link
                href='/torneo/create'
                className="text-2xl border-2 border-cyan-400 px-5 py-1 rounded-md">
                Crear Torneo
              </Link>
            </div>
            <div className="w-56 h-56 rounded-full border-[30px] absolute
            top-1/2 bottom-1/2 -translate-y-1/2 right-4 border-cyan-400 items-center justify-center hidden sm:flex" >
              <Image src={copa} alt="copa" width={200} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage