import { BsClipboard, BsFileEarmarkText, BsGear, BsPeople } from "react-icons/bs";
export const Navigation = () => {
  return (
    <ul className="flex w-full flex-col items-center justify-center lg:block nav-links text-white">
      <li>
        <a href="#">
          <BsClipboard/> <span>Boards</span>
        </a>
      </li>
      <li>
        <a href="#">
          <BsPeople /> <span>Equipes</span>
        </a>
      </li>
      <li>
        <a href="#">
          <BsFileEarmarkText /> <span>Relatórios</span>
        </a>
      </li>
      <li>
        <a href="#">
          <BsGear />
          <span>Ajustes</span>
        </a>
      </li>
    </ul>
  );
};
