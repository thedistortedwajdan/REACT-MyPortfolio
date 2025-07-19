function Card({ title, desc, logo }) {
  return (
    <>
      <div className="w-[45%] bg-[#232224] border-1 border-[#383838] p-4 rounded-xl shadow flex items-center justify-start gap-3">
        <div>
          {logo ? (
            <img src={logo} alt="My Profile" className="w-32 h-32" />
          ) : (
            "logo"
          )}
        </div>
        <div>
          <div>{title || "title"}</div>
          <div>{desc || "desc"}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
