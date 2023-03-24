import clsx from "clsx";
import { useState } from "react";
import { BsPencilFill } from "react-icons/bs"

export const Header = () => {
  const [title, setTitle] = useState("Meu Kanban");
  const [readOnly, setReadOnly] = useState(true);

  function handleEdit(){
    setReadOnly(!readOnly);
  }

  function handleTitleChange(text: string){
    setTitle(text)
  }

  return (
    <header className="flex w-full justify-between items-center px-6 py-3">
      <div className="flex flex-1 gap-x-2 items-center">
        <input
          type={"text"}
          className={clsx({"underline": !readOnly},"flex w-auto text-4xl font-bold text-neutral-700 bg-transparent focus:outline-none")}
          value={title}
          onChange={(e)=>handleTitleChange(e.target.value) }
          readOnly={readOnly}
        />
        <a href="#">
          <BsPencilFill size={24} className="text-neutral-400" onClick={handleEdit} />
        </a>
      </div>
      <div>
        <img src="https://github.com/andradematheusdev.png" className="rounded-full w-16 h-16"/>
      </div>
    </header>
  )
}