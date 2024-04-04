import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    showScroll && (
      <button
        onClick={scrollTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          cursor: "pointer",
          height: "40px",
          width: "40px",
          borderRadius: "0%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffea00",
          border: "2px solid black",
          fontSize: "16px",
          color: "black",
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
