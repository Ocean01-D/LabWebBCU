import React, { useState, useEffect, useContext } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const socket = io("http://localhost:5000");

export default function ChatRoom() {
  const { logout } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  const sendMessage = () => {
    if (message.trim() && username.trim()) {
      socket.emit("send_message", { user: username, text: message });
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1 className="chat-title">💬 Chat Trực Tuyến</h1>
        <div className="chat-nav">
          <Link to="/dashboard" className="nav-button">
            📊 Dashboard
          </Link>
          <button onClick={logout} className="logout-button">
            Đăng xuất
          </button>
        </div>
      </div>

      {!username ? (
        <div className="username-setup">
          <div className="username-card">
            <h3>Chào mừng đến Chat Room!</h3>
            <p>Vui lòng nhập tên của bạn để bắt đầu trò chuyện</p>
            <input
              className="username-input"
              placeholder="Nhập tên của bạn..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setUsername(e.target.value)}
            />
            <button 
              className="username-button"
              onClick={() => username.trim() && setUsername(username)}
            >
              Bắt đầu Chat
            </button>
          </div>
        </div>
      ) : (
        <div className="chat-main">
          <div className="chat-messages">
            <div className="messages-header">
              <span>💬 Tin nhắn</span>
              <span className="online-indicator">🟢 Online as {username}</span>
            </div>
            <div className="messages-list">
              {chat.length === 0 ? (
                <div className="empty-chat">
                  <p>🌟 Chưa có tin nhắn nào. Hãy bắt đầu cuộc trò chuyện!</p>
                </div>
              ) : (
                chat.map((c, i) => (
                  <div key={i} className={`message ${c.user === username ? 'own-message' : 'other-message'}`}>
                    <div className="message-header">
                      <strong className="message-user">{c.user}</strong>
                      <span className="message-time">{new Date().toLocaleTimeString()}</span>
                    </div>
                    <div className="message-text">{c.text}</div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          <div className="chat-input-area">
            <div className="input-container">
              <input
                className="message-input"
                placeholder="Nhập tin nhắn của bạn..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button 
                className="send-button" 
                onClick={sendMessage}
                disabled={!message.trim()}
              >
                📤 Gửi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
