/* import React, { useState, useEffect } from "react";
import Scaledrone from "scaledrone-react-native";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const drone = new Scaledrone("CHANNEL_ID", {
    secretKey: "SECRET_KEY"
  });

  const room = drone.subscribe("observable-room");

  const handleMessage = message => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
    drone.on("open", error => {
      if (error) {
        console.error(error);
      } else {
        console.log("Successfully connected to Scaledrone!");
      }
    });

    room.on("data", handleMessage);
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    if (text) {
      drone.publish({
        room: "observable-room",
        message: text
      });
      setText("");
    }
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.data}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
 */