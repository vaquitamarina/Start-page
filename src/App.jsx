import { Github, Youtube, Palette, Facebook, Bot } from "lucide-react";
import { useEffect } from "react";
import { Header } from "./Components/Header.jsx";
import { Card } from "./Components/Card.jsx";
import { Clock } from "./Components/Clock.jsx";
import { Weather } from "./Components/Weather.jsx";

import "./App.css";
function App() {
  // useEffect(() => {
  //   const keyDownHandler = (event) => {
  //     console.log("key pressed:" + event.key);
  //   };
  //   window.addEventListener("keydown", keyDownHandler);
  //   return () => {
  //     window.removeEventListener("keydown", keyDownHandler);
  //   };
  // }, []);
  return (
    <>
      <Header></Header>
      <div className="wrap">
        <div className="grid1">
          <Card title={""} href={"https://github.com/vaquitamarina"} keyId={""}>
            <Github size={48} />
          </Card>
        </div>

        <div className="grid2">
          <Card title={""} href={"https://chat.openai.com/"} keyId={"c"}>
            <Bot size={48} />
          </Card>
        </div>

        <div className="grid5">
          <Card
            title={""}
            href={"https://github.com/vaquitamarina"}
            keyId={"g"}
          >
            <Github size={48} />
          </Card>
        </div>

        <div className="grid6">
          <Card title={""} href={"https://www.youtube.com/"} keyId={"y"}>
            <Youtube size={48} />
          </Card>
        </div>

        <div className="grid7">
          <Card title={""} href={"https://coolors.co/generate"} keyId={"e"}>
            <Weather></Weather>
          </Card>
        </div>

        <div className="grid8">
          <Card title={""} href={"https://coolors.co/generate"} keyId={"h"}>
            <Palette size={48} />
          </Card>
        </div>

        <div className="grid9">
          <Card title={""} href={"https://www.facebook.com/"} keyId={"f"}>
            <Facebook size={48} />
          </Card>
        </div>

        <div className="grid10">
          <Card title={""} href={"https://coolors.co/generate"}>
            <Clock></Clock>
          </Card>
        </div>

        <div className="grid11">
          <Card title={""} href={"https://coolors.co/generate"}>
            <Palette size={48} />
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
