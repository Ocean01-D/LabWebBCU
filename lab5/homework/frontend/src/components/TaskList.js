import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function TaskList() {
  const { token } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, [token]);

  return (
    <div className="task-list-container">
      <h2 className="task-list-title">Danh sách công việc</h2>
      {tasks.length === 0 ? (
        <div className="empty-state">
          <p>Chưa có công việc nào. Hãy thêm công việc đầu tiên của bạn!</p>
        </div>
      ) : (
        <ul className="task-list">
          {tasks.map((t) => (
            <li key={t._id} className={`task-item ${t.completed ? 'completed' : ''}`}>
              <div className="task-content">{t.title}</div>
              <div className="task-status">
                {t.completed ? "✅" : "⏳"}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
