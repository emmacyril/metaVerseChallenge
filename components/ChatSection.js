function ChatSection() {
  return (
    <div>
      <div className="chat">
        <div className="chat-title">
          <h1>Fabio Ottaviani</h1>
          <h2>Supah</h2>
          <figure className="avatar">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" />
          </figure>
        </div>

        <div className="messages">
          <div className="messages-content"></div>
        </div>
        <div className="message-box">
          <textarea
            type="text"
            className="message-input"
            placeholder="Type message..."
          ></textarea>
          <button type="submit" className="message-submit">
            Send
          </button>
        </div>
      </div>

      <div className="flex w-100 h-100 top-0 left-0 z-0" style={{}}></div>
    </div>
  );
}

export default ChatSection;
