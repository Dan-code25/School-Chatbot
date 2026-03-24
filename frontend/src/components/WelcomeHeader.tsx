import botImg from "../assets/chatbot.svg";

export default function WelcomeHeader() {
  return (
    <div className="flex flex-col justify-center items-center mt-12 font-lexend gap-3 px-4 text-center">
      <img
        src={botImg}
        alt="medy"
        className="w-20 h-20 sm:w-30 sm:h-30 shadow-lg rounded-full"
      />

      <div className="flex flex-col items-center gap-1">
        <p className="font-bold text-sm sm:text-xl">HNCS Assistant Chatbot</p>

        <p className="font-medium text-xs sm:text-sm text-[#6E6A6A] max-w-sm">
          Ask me anything about Holy Nazarene Christian School. I am here to
          help!
        </p>
      </div>
    </div>
  );
}
