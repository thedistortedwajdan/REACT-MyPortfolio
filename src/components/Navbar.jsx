import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul
        className="bg-[#282829] border-white border-3 flex items-center justify-between p-5 rounded-bl-2xl rounded-tr-2xl "
      >
        <li className="">
          <Link to={"/"}>About</Link>
        </li>
        <li>
          <Link to={"/resume"}>Resume</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
