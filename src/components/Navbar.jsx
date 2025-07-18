import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between gap-[100px] ">
        <div>Page Name</div>
        <ul className="bg-[#282829] border-[#383838] border-l-3 border-b-3 flex items-center justify-between p-5 rounded-bl-2xl rounded-tr-2xl gap-5 ">
          <li>
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
      </div>
    </>
  );
}

export default Navbar;
