require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // frontend chạy ở 3000
    methods: ["GET", "POST"],
  },
});

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

// connect DB & start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("DB connection error:", err));


// socket.io
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send_message", (data) => {
    io.emit("receive_message", data); // gửi cho tất cả client
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});