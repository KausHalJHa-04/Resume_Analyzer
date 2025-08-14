import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar h-[90px]">
            <Link to="/">
                <img src="/logo-us.png" className="w-[200px] h-[62px] mb-3" alt="logo"  />
            </Link>
            <Link to="/upload" className="primary-button w-fit hover:bg-red-500">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar
