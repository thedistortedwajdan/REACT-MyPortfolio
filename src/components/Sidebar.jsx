import ProfileImage from "./ProfileImage";
import mail from "../assets/mail.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import phone from "../assets/phone.svg";

export default function Sidebar() {
  return (
    <div className="text-white bg-[#1E1E1F] border-[#383838] border-1 rounded-2xl  h-fit w-fit sticky top-24">
      <div className="flex flex-col items-center m-5">
        <ProfileImage />
        <div>Muhammad Wajdan Ismail</div>
        <div>Software Engineer</div>
        <div className="bg-[#383838] w-[100%] h-[1px] "></div>
        <ul className="items-start flex flex-col w-[100%] gap-5 ">
          <li className="flex items-center justify-start gap-2">
            <img src={mail} alt="My Profile" className="w-5" />
            <div>
              <div>EMAIL</div>
              <div>wajdan.mohammad@gmail.com</div>
            </div>
          </li>
          <li className="flex items-center justify-start gap-2">
            <img src={github} alt="My Profile" className="w-5" />
            <div>
              <div>GITHUB</div>{" "}
              <a
                href="https://github.com/thedistortedwajdan"
                target="_blank"
                className="hover:text-[#FDC463] transition duration-300"
              >
                github.com/thedistortedwajdan
              </a>
            </div>
          </li>
          <li className="flex items-center justify-start gap-2">
            <img src={linkedin} alt="My Profile" className="w-5" />
            <div>
              <div>LINKEDIN</div>{" "}
              <a
                href="https://www.linkedin.com/in/wajdan-ismail/"
                target="_blank"
                className="hover:text-[#FDC463] transition duration-300"
              >
                linkedin.com/in/wajdan-ismail/
              </a>
            </div>
          </li>
          <li className="flex items-center justify-start gap-2">
            <img src={phone} alt="My Profile" className="w-5" />
            <div>
              <div>PHONE</div>
              <div>+92-3342007188</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
