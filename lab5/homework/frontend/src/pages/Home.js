import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">TaskManager</h1>
      <p className="home-subtitle">
        Quản lý công việc của bạn một cách hiệu quả và đơn giản
      </p>
      <div className="home-links">
        <Link to="/login" className="home-link login">
          Đăng nhập
        </Link>
        <Link to="/register" className="home-link register">
          Đăng ký
        </Link>
      </div>
    </div>
  );
}
