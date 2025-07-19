import ProfileImage from "./ProfileImage";

export default function Sidebar() {
  return (
    <div className="text-white bg-[#1E1E1F] border-[#383838] border-1 rounded-2xl  h-fit w-fit">
      <div className="flex flex-col items-center m-5">
        <ProfileImage />
        <div>Muhammad Wajdan Ismail</div>
        <div>Software Engineer</div>
        <div className="bg-[#383838] w-[100%] h-[1px] "></div>
        <ul className="items-start flex flex-col w-[100%] gap-5 ">
          <li>email</li>
          <li>github</li>
          <li>linkedin</li>
          <li>phone</li>
        </ul>
      </div>
    </div>
  );
}
