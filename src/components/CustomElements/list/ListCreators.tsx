import CardOrganizer from '@/components/CustomCards/CardOrganizer'
import { Page } from '@/types/interfaces'

function ListCreators({ page }: { page: Page[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,500px))] justify-center gap-3" >
      {
        page.map((item, index) => (
          <CardOrganizer key={index} organizer={item} />
        ))
      }
    </div>
  )
}

export default ListCreators