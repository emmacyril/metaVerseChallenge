import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessageRef }) {
  const { Moralis, user } = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };
  return (
    <form className="flex relative bottom-10 px-6 py-2 mt-20 w-11/12 bg-black opacity-80 max-w-2xl shadow-xl rounded-full border-4 border-blue-400 z-50">
      <input
        className="flex-grow border-0 outline-none bg-transparent text-white placeholder-gray-500 pr-5 ring-0 focus:ring-0"
        placeholder={`Start typing ${user.get("username")}`}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send{" "}
      </button>
    </form>
  );
}

export default SendMessage;
