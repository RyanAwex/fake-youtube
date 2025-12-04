import React, { useState } from "react";

function Header() {
  const [activeTag, setActiveTag] = useState("All");

  const tags = [
    "All",
    "Gaming",
    "Music",
    "Technology",
    "Live",
    "Podcasts",
    "Travel",
    "Cooking",
    "News",
  ];

  return (
    <header className="header">
      {tags.map((tag) => (
        <div
          key={tag}
          className={`tag ${activeTag === tag ? "active" : ""}`}
          onClick={() => setActiveTag(tag)}
        >
          {tag}
        </div>
      ))}
    </header>
  );
}

export default Header;
