import { Tag } from "../tag"

export const Card = () => {
  return (
    <div className="bg-white hover:shadow-md hover:shadow-violet-100 p-6 rounded-xl transition-all">
      <h3 className="font-bold mb-3">#boraCodar um Kanban 🧑‍💻</h3>
      <p className="mb-3">Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
      <div>
        <Tag />
      </div>
    </div>
  )
}
