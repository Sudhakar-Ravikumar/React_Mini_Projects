import { useState } from "react";

export default function Tabs({ tabsContent }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
  }

  return (
    <div className="wrapper">
        <div>Title : Custom tabs</div>
      <div className="heading">
        
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)} >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
      {tabsContent[currentTabIndex].content ? tabsContent[currentTabIndex].content : null}

      </div>
    </div>
  );
}