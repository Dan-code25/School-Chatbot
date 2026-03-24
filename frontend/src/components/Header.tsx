import schoolLogo from "../assets/school-logo.svg";

export default function Header() {
  return (
    <header className="w-full h-15 bg-[#630F10] flex items-center px-3 font-lexend shadow-md gap-3 md:px-5">
      <img src={schoolLogo} alt="hncs-logo" className="h-12" />
      <div className="flex flex-col">
        <p className="text-sm font-bold text-white">
          Holy Nazarene Christian School
        </p>
        <p className="text-[10px] text-[#D4AF37]">HNCS Assistant Chatbot</p>
      </div>
    </header>
  );
}
