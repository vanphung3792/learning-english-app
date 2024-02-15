import { HiHome } from "react-icons/hi"
import { Link } from "react-router-dom"

const Navbar = () => {

    const iconStyle = "text-3xl text-rose-500 hover:text-rose-900"
  return (
    <nav
        className="
            flex
            justify-between
            items-center
            h-16
            bg-rose-200
            shadow-sm
            px-10
        "
    >
        <Link to="/"><HiHome className={iconStyle} /></Link>
    </nav>
  )
}
export default Navbar