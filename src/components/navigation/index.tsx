import clsx from "clsx";
import { BsClipboard, BsFileEarmarkText, BsGear, BsPeople } from "react-icons/bs";

interface INavigationProps{
  center?: boolean;
}

export const Navigation = ({center = false}: INavigationProps) => {
  return (
    <ul className={clsx("flex w-full flex-col justify-center lg:block nav-links text-white", {"items-center": center})}>
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
