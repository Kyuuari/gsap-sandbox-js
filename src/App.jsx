import { useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import gsap from "gsap";

function App() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(ref.current, {
            duration: 1,
            opacity: 1,
            y: -20,
            ease: "power3.out",
          });
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      <h1>Hello, World!</h1>
      <p>This is a GSAP animation in React!</p>
    </div>
  );
}

export default App;
