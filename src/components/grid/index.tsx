import { Card } from "../card"

export const Grid = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-1 text-neutral-700 py-8">
      <div>
        <span className="block text-xl font-bold mb-6">A Fazer</span>
        <Card />
      </div>
      <div>
        <span className="block text-xl font-bold mb-6">Fazendo</span>
      </div>
      <div>
        <span className="block text-xl font-bold mb-6">Feito</span>
      </div>
    </div>
  )
}
