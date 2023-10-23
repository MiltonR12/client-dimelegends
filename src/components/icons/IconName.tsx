
function IconName({ firstName }: { firstName: string }) {
  return (
    <h3
      className="w-20 h-20 rounded-full bg-zinc-950 border-red-600 border-4 flex items-center justify-center select-none text-3xl md:text-5xl font-bold">
      <span>{firstName.toUpperCase().charAt(0)}</span>
    </h3>
  )
}

export default IconName