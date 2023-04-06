import { BsSearch, BsX } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Logo from "../Logo";
import { Navigation } from "../navigation";
import { useState } from "react";
import clsx from "clsx";

export const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="flex items-center justify-between px-4 py-2 h-12 sm:hidden w-full bg-violet-600">
        <Logo width={30} />
        <div className="flex items-center gap-x-4">
          <BsSearch size={18} color="#fff" />
          {
            menuOpen
            ? <BsX size={24} color="#fff" className="cursor-pointer" onClick={()=>setMenuOpen(false)} />
            : <FiMenu size={24} color="#fff" className="cursor-pointer" onClick={()=>setMenuOpen(true)} />}
        </div>
      </div>
      <div className={clsx("flex w-full transition-all duration-500", {"h-0 p-0 overflow-hidden": !menuOpen},{"px-4 pt-9 bg-violet-500": menuOpen})}>
        <Navigation />
      </div>
    </header>
  );
};
