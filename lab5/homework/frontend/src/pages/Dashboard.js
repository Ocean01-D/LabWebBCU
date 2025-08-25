import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Bảng điều khiển</h1>
        <div className="dashboard-actions">
          <Link to="/chat" className="nav-button">
            💬 Chat Room
          </Link>
          <button onClick={logout} className="logout-button">
            Đăng xuất
          </button>
        </div>
      </div>
      <TaskList />
    </div>
  );
}
