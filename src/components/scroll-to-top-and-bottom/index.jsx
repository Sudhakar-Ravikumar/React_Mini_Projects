import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const topRef = useRef(); // Changed from TopRef to topRef for consistency
  const bottomRef = useRef();

  function handleScrollToTop() {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error) {
    return <h1>Error occurred! Please try again.</h1>;
  }

  if (pending) {
    return <h1>Loading! Please wait</h1>;
  }

  return (
    <div>
      <div ref={topRef}></div>
      <p>Title: Scroll To Top And Bottom Feature</p>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}
