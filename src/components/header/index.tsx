import { BsPencil } from "react-icons/bs"

export const Header = () => {
  return (
    <header className="flex w-full justify-between items-center px-6 py-3">
      <div className="flex flex-1 gap-x-2 items-center">
        <h1 className="text-4xl font-bold text-neutral-800">Meu Kanban</h1>
        <BsPencil size={24} />
      </div>
      <div>
        <img src="https://github.com/andradematheusdev.png" className="rounded-full w-16 h-16"/>
      </div>
    </header>
  )
}