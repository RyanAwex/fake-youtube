import { useState } from "react";

function Sidebar({ isOpen }) {
  const [activeBar, setActiveBar] = useState("home");

  const bars = [
    { i: "home", span: "Home" },
    { i: "explore", span: "Explore" },
    { i: "subscriptions", span: "Subscriptions" },
    { i: "video_library", span: "Library" },
    { i: "history", span: "History" },
    { i: "watch_later", span: "Watch Later" },
    { i: "thumb_up", span: "Liked Videos" },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {bars.map((bar) => (
        <div key={bar.i}>
          <div
            className={`sidebar-item ${activeBar === bar.i ? "active" : ""}`}
            onClick={() => setActiveBar(bar.i)}
          >
            <i className="material-icons">{bar.i}</i>
            <span>{bar.span}</span>
          </div>

          {/* 👇 insert <hr /> after subscriptions */}
          {bar.i === "subscriptions" && <hr />}
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
