import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import VideoCard from "./components/VideoCard";
// import "./index.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar onMenuClick={toggleSidebar} />
      <div className="main-container">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="content">
          <Header />
          <div className="video-grid" id="video-grid-container">
            <VideoCard />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
