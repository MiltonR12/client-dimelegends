
function TournamentSkeleton() {
  return (
    <div className="bg-zinc-950 w-full max-w-lg rounded-lg overflow-hidden" >
      <div className="animate-pulse" >
        <div className="bg-zinc-700 h-10" ></div>

        <div className="md:grid md:grid-cols-3" >
          <div className="p-10" >
            <div className="bg-zinc-700 w-full h-full" ></div>
          </div>
          <div className="p-3 flex flex-col gap-2 col-span-2" >
            <h4 className="bg-zinc-700 h-8" ></h4>
            <p className="bg-zinc-700 h-10" ></p>
            <div className="bg-zinc-700 h-5" ></div>
            <div className="bg-zinc-700 h-5" ></div>
            <div className="bg-zinc-700 h-5" ></div>
            <div className="bg-zinc-700 h-5" ></div>

            <div className="bg-zinc-700 h-8" ></div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TournamentSkeleton