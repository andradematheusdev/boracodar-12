import { BsSearch } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import Logo from "../Logo"

export const MobileHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 sm:hidden w-full h-12 bg-violet-600">
      <Logo width={30} />
      <div className="flex items-center gap-x-4">
        <BsSearch size={18} color="#fff" />
        <FiMenu size={24} color="#fff"/>
      </div>
    </div>
  )
}
