import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";

import ChatBodyMessage from "./ChatBodyMessage";
import SendMessage from "./SendMessage";
function LiveChatMessage() {
  const { Moralis, user } = useMoralis();
  const endOfMessageRef = useRef(null);

  const MIN_DURATION = 15;

  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MIN_DURATION)
        ),
    [],
    { live: true }
  );

  return (
    <div className="pb56">
      <div className="py-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div className="space-y-4 p-4">
        {data.map((message) => (
          <ChatBodyMessage key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>

      <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
        <p>You are up to date {user.getUsername()}!</p>
      </div>
    </div>
  );
}

export default LiveChatMessage;
