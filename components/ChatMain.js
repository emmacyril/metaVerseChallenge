import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import Messages from "./Messages";

function ChatMain() {
  const { isAuthenticated, logout, user } = useMoralis();
  return (
    <section className="relative py-16 bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center ">
                <div className="relative rounded-full flex-col h-40 w-40 text-white bg-black items-center justify-center mt-[-40px] border bottom-10 border-yellow-500">
                  <Avatar />
                </div>
              </div>
            </div>

            <Messages />
          </div>
        </div>
        <p className="flex w-full text-center items-center justify-center">
          You are up to date {user.get("username")}
        </p>
      </div>
    </section>
  );
}

export default ChatMain;
