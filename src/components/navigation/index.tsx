import { BsClipboard, BsFileEarmarkText, BsGear, BsPeople } from 'react-icons/bs';
export const Navigation = () => {
  return (
    <ul className="nav-links text-white">
      <li><BsClipboard /> <span>Boards</span></li>
      <li><BsPeople /> <span>Equipes</span></li>
      <li><BsFileEarmarkText /> <span>Relatórios</span></li>
      <li><BsGear /><span>Ajustes</span></li>
    </ul>
  )
}