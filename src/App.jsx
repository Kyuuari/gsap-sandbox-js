import { useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

function App() {
  const ref = useRef(null);

  useEffect(() => {
    TweenMax.to(ref.current, 1, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      <h1>Hello, World!</h1>
      <p>This is a GSAP animation in React!</p>
    </div>
  );
}

export default App;
