import { Page } from '@/types/interfaces'
import Image from 'next/image'
import PrimaryButton from '../CustomElements/Buttons/PrimaryButton'
import SecondaryButton from '../CustomElements/Buttons/SecondaryButton'

type Props = {
  organizer: Page
}

function CardOrganizer({ organizer }: Props) {
  return (
    <div className='flex flex-col gap-3 p-3 items-center ' >
      <h4 className='text-center text-2xl font-semibold ' >
        {organizer.pageName}
      </h4>
      {
        organizer.urlImage ? <Image src={organizer.urlImage} alt={organizer.pageName}
          width={200} height={400} /> : <div className='bg-zinc-900 h-28 rounded-lg' ></div>
      }
      <div className='grid grid-cols-2 gap-3 font-semibold text-xl w-full' >

        {organizer.urlPage && <PrimaryButton target="_blank" href={organizer.urlPage} >
          Pagina
        </PrimaryButton>}

        {organizer.urlGroup && <SecondaryButton href={organizer.urlGroup} >
          Grupo
        </SecondaryButton>}

      </div>
    </div>
  )
}

export default CardOrganizer