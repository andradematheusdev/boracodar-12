import { Tag } from "../tag"

export const Card = () => {
  return (
    <div className="bg-white shadow-xl shadow-violet-50 p-6 rounded-lg">
      <h3 className="font-bold mb-3">#boraCodar um Kanban 🧑‍💻</h3>
      <p className="mb-3">Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
      <div>
        <Tag />
      </div>
    </div>
  )
}
