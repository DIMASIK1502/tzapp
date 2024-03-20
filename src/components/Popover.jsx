import { useState, useRef, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

const Popover = ({ content, children }) => {
  const [show, setShow] = useState(false);
  const popoverRef = useRef(null);
  const childrenRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const loading = useSelector((state) => state.clients.loading);

  const updatePosition = useCallback(() => {
    if (!childrenRef.current) return;
    const { top, left } = childrenRef.current.getBoundingClientRect();
    setPosition({ top, left });
  }, []);

  useEffect(() => {
    window.removeEventListener("scroll", updatePosition);
    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, [updatePosition, loading]);

  const handleToggle = () => {
    setShow(!show);
  };

  const handleOutsideClick = (event) => {
    if (!childrenRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (!document) return;
    document.removeEventListener("click", handleOutsideClick);
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div onClick={handleToggle} ref={childrenRef}>
        {children}
      </div>
      {show && (
        <div
          style={{
            zIndex: 1000,
            position: "fixed",
            top: position.top,
            left: position.left,
            background:
              "linear-gradient(rgba(255, 255, 255, 0) 38%, rgb(255, 255, 255) 38%)",
            transition: 0.3,
            width: childrenRef.current.offsetWidth,
            borderRadius: 16,
            height: childrenRef.current.offsetHeight * 2 + 20,
          }}
          ref={popoverRef}
        >
          <div
            style={{ marginTop: childrenRef.current.offsetHeight - 40 }}
          ></div>
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
