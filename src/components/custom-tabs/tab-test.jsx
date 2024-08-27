import Tabs from "./tabs";
import './tabs.css';

function RandomComponent() {
  return <h1>Some random content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <h1>This is content for Tab 1</h1>,
    },
    {
      label: "Tab 2",
      content: <h1>This is content for Tab 2</h1>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

 

  return <Tabs tabsContent={tabs} />;
}