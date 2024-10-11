import { Link } from "react-router-dom";
import logo from "/morphius-logo.png";

export default function Navigation() {
  return (
    <nav className="py-4 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="morphius logo" className="w-[100px]" />
        </Link>
        <div>
          <ul className="flex items-center gap-4">
            <li className="text-gray-950 font-medium">
              <Link to={"/contact"} className="hover:underline">
                Contact
              </Link>
            </li>
            <li className="text-gray-950 font-medium">
              <Link to={"/about"} className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
