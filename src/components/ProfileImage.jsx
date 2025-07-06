import image from "../assets/me.jpeg";
export default function ProfileImage() {
  return (
    <div>
      <img src={image} alt="My Profile" className="w-32 h-32 rounded-[25%]" />
    </div>
  );
}
