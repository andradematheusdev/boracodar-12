import { BsFilter, BsSearch } from "react-icons/bs";

export const Search = () => {
  return (
    <div className="hidden sm:flex w-full items-stretch gap-x-4 px-6 my-4">
      <button className="flex items-center justify-center text-white bg-violet-600 rounded w-36 text-sm gap-x-2 hover:bg-violet-700 leading-none h-12">
        <BsFilter size={22} />
        <span>Filtrar</span>
      </button>
      <div className="flex flex-1 items-center border border-neutral-200 rounded-lg overflow-hidden px-7 bg-white h-12">
        <BsSearch size={18} />
        <input
          type="text"
          name="search"
          id="search-input"
          className="flex-1 focus:outline-none px-3 bg-transparent bg-white"
          placeholder="Busque por cards, assuntos ou responsáveis..."
        />
      </div>
    </div>
  );
};
