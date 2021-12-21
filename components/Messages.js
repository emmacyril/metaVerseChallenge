import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
function Messages() {
  return (
    <div className="pt-5 pb-56 border-t border-gray-300 text-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-9/12">
          <ByMoralis
            variant="dark"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            An artist of considerable range, Jenna the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <div>
            <div></div>
            <div className="flex justify-center">
              <SendMessage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
