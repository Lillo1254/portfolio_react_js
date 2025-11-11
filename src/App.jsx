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
  const [visible, setVisible] = useState(false);

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
    // console.log("ScrollY:", scrollValue);
    if (scrollValue > 200) {
      setVisible(true);
    }else{ setVisible(false); }
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

  const handleClick =()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  }



  return (
    <div className={`relative ${isDesktop ? "min-h-[9000px]" : "min-h-screen"}`}>
      {screenWidth>=720 ? <video
        src={video1}
        id="video"
        loop
        muted
        className="fixed w-full h-full object-cover"
        preload="auto"
      ></video> : <video
        src={video1}
        id="video"
        loop
        muted
          className="fixed w-full h-full object-cover"
          preload="auto"
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

      {visible &&

      <div className="fixed px-4 top-[97%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-cyan-500/20 border border-cyan-400/30 grid place-items-center" onClick={handleClick}>

      <button className=" font-bold bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(45,212,191,0.35)] bg-linear-to-r from-cyan-700 via-blue-700 to-emerald-700" >home</button>
      </div>
      }
    </div>
  );
}

export default App;
