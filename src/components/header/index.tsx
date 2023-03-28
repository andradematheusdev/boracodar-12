import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { BsPencilFill } from "react-icons/bs"

export const Header = () => {
  const [title, setTitle] = useState("Meu Kanban");
  const [readOnly, setReadOnly] = useState(true);
  const titleEl = useRef<HTMLInputElement>();
  const [titleWidth, setTitleWidth] = useState<number | undefined>();
  
  useEffect(() => {
    if(titleEl.current!.value.length < 8){
      setTitleWidth(8);
    }else if(titleEl.current!.value.length >= 28){
        setTitleWidth(28);
    }else{
      setTitleWidth(titleEl.current!.value.length);
    }
  }, [title])

  function handleEdit(){
      setReadOnly(!readOnly);    
  }

  function handleTitleChange(text: string){
    setTitle(text);
  }  

  return (
    <header className="flex w-full justify-between items-center px-6 py-3">
      <div className="flex flex-1 items-center">
        <input
          type={"text"}
          className={
            clsx({
              "underline": !readOnly},
              `flex bg-transparent text-4xl font-bold text-neutral-700 focus:outline-none p-0`,
            )}
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          readOnly={readOnly}
          style={{width: `${titleWidth}ch`}}
          placeholder={"Sem nome"}
          ref={titleEl}
          maxLength={32}
        />
        {/* {title.length} */}
        <a href="#" className="">
          <BsPencilFill size={24} className="text-neutral-400" onClick={handleEdit} />
        </a>
      </div>
      <div>
        <img src="https://github.com/andradematheusdev.png" className="rounded-full w-16 h-16"/>
      </div>
    </header>
  )
}