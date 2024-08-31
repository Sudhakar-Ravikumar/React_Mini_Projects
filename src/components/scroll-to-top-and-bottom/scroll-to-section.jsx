import React, { useRef } from "react";

const data = [
  {
    label: "First Card",
    style: {
      width: "100%",
      height: "600px",
      background: "red",
    },
    contentId: "content1",
  },
  {
    label: "Second Card",
    style: {
      width: "100%",
      height: "600px",
      background: "grey",
    },
    contentId: "content2",
  },
  {
    label: "Third Card",
    style: {
      width: "100%",
      height: "600px",
      background: "blue",
    },
    contentId: "content3",
  },
  {
    label: "Fourth Card",
    style: {
      width: "100%",
      height: "600px",
      background: "green",
    },
    contentId: "content4",
  },
  {
    label: "Fifth Card",
    style: {
      width: "100%",
      height: "600px",
      background: "orange",
    },
    contentId: "content5",
  },
];

const ScrollToSection = () => {
  const menu = useRef(null);

  const handleCardClick = (contentId) => {
    const element = document.getElementById(contentId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMenu = () => {
    if (menu.current) {
      menu.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    
<div ref={menu}>
    <div><br></br> <p>Title : View particular page</p><br></br><br></br></div>
  <div
    className="cards"
    style={{ display: "flex", justifyContent: "center", gap: "5px" }}
  >
    {data.map((card, index) => (
      <div key={index} onClick={() => handleCardClick(card.contentId)}>
        <button>{card.label}</button>
      </div>
    ))}
  </div>

  <br></br>
  <div
    id="content1"
    style={{
      height: "600px",
      background: "red",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <h1>Content for First Card</h1>
      <button onClick={scrollToMenu}>Main menu</button>
    </div>
  </div>

  <div
    id="content2"
    style={{
      height: "600px",
      background: "black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <h1>Content for Second Card</h1>
      <button onClick={scrollToMenu}>Main menu</button>
    </div>
  </div>

  <div
    id="content3"
    style={{
      height: "600px",
      background: "violet",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <h1>Content for Third Card</h1>
      <button onClick={scrollToMenu}>Main menu</button>
    </div>
  </div>

  <div
    id="content4"
    style={{
      height: "600px",
      background: "green",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <h1>Content for Fourth Card</h1>
      <button onClick={scrollToMenu}>Main menu</button>
    </div>
  </div>

  <div
    id="content5"
    style={{
      height: "600px",
      background: "blue",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <h1>Content for Fifth Card</h1>
      <button onClick={scrollToMenu}>Main menu</button>
    </div>
  </div>
</div>

  );
};

export default ScrollToSection;
