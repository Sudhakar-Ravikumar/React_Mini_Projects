import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listener(event) {
    //   if the click happens inside , it returns nothing
      if (ref.current.contains(event.target)) {
        return;
      }
    //   If an outside click is detected, the handler function (() => setShowContent(false)) is executed.
    //   This sets showContent to false, which causes the content to disappear (because showContent being false means the content is not rendered).
      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler]);
}