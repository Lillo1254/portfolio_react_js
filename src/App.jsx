import { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";
import Section1 from "./components/macroComponents/Section1";

import video1 from "./assets/video7.mp4";
import Section3 from "./components/macroComponents/Section3.jsx";
import Section2 from "./components/macroComponents/Section2.jsx";
import Section4 from "./components/macroComponents/Section4.jsx";
import {
  computeSection1Scale,
  computeSection2Scale,
  computeSection3Scale,
  computeSection4Scale,
} from "./function/scriptBasic";

function App() {
  const [scale1, setScale1] = useState(1);
  const [scale2, setScale2] = useState(0);
  const [scale3, setScale3] = useState(0);
  const [scale4, setScale4] = useState(0);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const scrollTimeoutRef = useRef(null);

  const isDesktop = screenWidth >= 720;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateScale = useCallback(() => {
    if (!isDesktop) return;
    const scrollValue = window.scrollY;
    console.log("ScrollY:", scrollValue);
    const video = document.getElementById("video");
      if (video && scrollValue <= 7100) {
      video.play();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        video.pause();
      }, 500);
    }else if(video){
      video.play();
    }
    // compute scales parametrically
    setScale1(computeSection1Scale(scrollValue));
    setScale2(computeSection2Scale(scrollValue));
    setScale3(computeSection3Scale(scrollValue));
    setScale4(computeSection4Scale(scrollValue));
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      return;
    }

    window.addEventListener("scroll", updateScale);
    return () => {
      window.removeEventListener("scroll", updateScale);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
    };
  }, [isDesktop, updateScale]);

  useEffect(() => {
    if (isDesktop) {
      setScale1(1);
      setScale2(0);
      setScale3(0);
      setScale4(0);
      return;
    }

    setScale1(1);
    setScale2(1);
    setScale3(1);
    setScale4(1);
  }, [isDesktop]);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);




  return (
    <div className={`relative ${isDesktop ? "min-h-[9000px]" : "min-h-screen"}`}>
      {screenWidth>=720 ? <video
        src={video1}
        id="video"
        loop
        muted
        className="fixed w-full h-full object-cover"
      ></video> : <video
        src={video1}
        id="video"
        loop
        muted
        className="fixed w-full h-full object-cover"
      ></video>}
      

      <Section1
        style={
          isDesktop
            ? {
                transform: `scale(${scale1})`,
                transition: "transform 0.5s ease",
              }
            : undefined
        }
        isDesktop={isDesktop}
      />

      <Section2
        style={
          isDesktop
            ? {
                transform: `scale(${scale2})`,
                transition: "transform 0.5s ease",
              }
            : undefined
        }
        isDesktop={isDesktop}
      />

      <Section3
        style={
          isDesktop
            ? {
                transform: `scale(${scale3})`,
                transition: "transform 0.5s ease",
              }
            : undefined
        }
        isDesktop={isDesktop}
      />

      <Section4
        style={
          isDesktop
            ? {
                transform: `scale(${scale4})`,
                transition: "transform 0.5s ease",
              }
            : undefined
        }
        isDesktop={isDesktop}
      />
    </div>
  );
}

export default App;
