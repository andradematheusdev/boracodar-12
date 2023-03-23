import { BsFilter, BsSearch } from "react-icons/bs";

export const Search = () => {
  return (
    <div className="flex w-full items-stretch h-12 gap-x-2 px-6">
      <button className="flex items-center justify-center text-white bg-violet-600 rounded-lg w-36 text-sm gap-x-2 hover:bg-violet-700">
        <BsFilter size={22} /> Filtrar
      </button>
      <div className="flex flex-1 items-center shadow-lg shadow-slate-200 border border-neutral-200 rounded-lg overflow-hidden px-7">
        <BsSearch size={18} />
        <input
          type="text"
          name="search"
          id="search-input"
          className="flex-1 focus:outline-none px-3 bg-transparent"
          placeholder="Busque por cards, assuntos ou responsáveis..."
        />
      </div>
    </div>
  );
};
