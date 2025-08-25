import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root") || (() => {
  const el = document.createElement("div");
  el.id = "modal-root";
  document.body.appendChild(el);
  return el;
})();

function Modal({ isOpen, onClose, children }) {
  const [el] = useState(() => document.createElement("div"));

    useEffect(() => {
     if (isOpen) {
      modalRoot.appendChild(el);
      return () => {
       if (modalRoot.contains(el)) modalRoot.removeChild(el);
     };
  }
}, [isOpen, el]);


  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex", justifyContent: "center", alignItems: "center"
      }}
      onClick={onClose}
    >
      <div
        style={{ background: "white", padding: 20, borderRadius: 8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} style={{ float: "right" }}>X</button>
        {children}
      </div>
    </div>,
    el
  );
}

export default function Exercise17() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h2>Exercise 17: Modal with Portals</h2>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h3>Modal Content</h3>
        <p>Bruh</p>
      </Modal>
    </div>
  );
}
