"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import Header from "@/components/Header";
import Home from "@/components/Home";
import Line from "@/components/Line";
import HowToPlay from "@/components/HowToPlay";
import About from "@/components/About";
import NFT from "@/components/NFT";
import Tokenomic from "@/components/Tokenomic";
import Foot from "@/components/Foot";
import "swiper/css";

const setDomFontSize = () => {
  let clientWidth = document.body.clientWidth;
  const htmlNode = document.getElementsByTagName("html")[0];
  if (clientWidth < 1366) {
    clientWidth = 1366;
  }
  htmlNode.style.fontSize = `${(clientWidth / 1920) * 16}px`;
};

export default function HomePage() {
  const [show, setShow] = useState(false);
  useLayoutEffect(() => {
    // 初始化时设置一次
    setDomFontSize();
    setShow(true);
    // 添加resize事件监听器
    window.addEventListener("resize", setDomFontSize);

    // 在组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("resize", setDomFontSize);
    };
  }, []);

  return (
    show && (
      <main>
        <Header />
        <Home />
        <div id="play"></div>
        <Line />
        <HowToPlay />
        <div id="about"></div>
        <Line />
        <About />
        <Line />
        <NFT />

        <div id="tokenomic"></div>
        <Line />
        <Tokenomic />
        <Line />
        <Foot />
      </main>
    )
  );
}
