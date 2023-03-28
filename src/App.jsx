import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Ensure that ScrollTrigger is enabled.
    gsap.registerPlugin(ScrollTrigger);

    // Define a GSAP timeline for the animation.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });

    // Add animation steps to the timeline.
    tl.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
    });

    // Make sure to clean up the ScrollTrigger on unmount.
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.revert());
    };
  }, []);

  return (
    <>
      <div className="h-screen bg-red-500"></div>
      <div
        ref={containerRef}
        className="h-screen bg-blue-500 grid place-items-center"
      >
        <div ref={contentRef} className="content opacity-0">
          <h1 className="text-xl">Hello, World!</h1>
          <p>This is some content that will be animated in.</p>
        </div>
      </div>
      <div className="h-screen bg-green-400"></div>
    </>
  );
}

export default App;
