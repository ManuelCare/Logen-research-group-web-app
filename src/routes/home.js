import { useEffect, useState } from "react";
import duck from "../public/duck.jpg"
import computer from "../public/computer.png"
import "./homeStyles.css";

export default function Home() {
  const [text, setText] = useState('');
  const words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum elit a finibus ultrices. Praesent mattis scelerisque metus sit amet lacinia. Nulla mattis pretium leo eu semper. Donec id nisi auctor, scelerisque sem a, dapibus ante. Sed at libero porta, hendrerit enim ac, fermentum ipsum. Nam vulputate porta enim a bibendum. Donec vel diam fermentum, sollicitudin arcu eget, mollis massa";
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText(words.substring(0, index));
      index++;

      if (index > words.length) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Home">
      <div className="d1">
        <div className="Home-text-upperbar"></div>
        <div className="Home-text">{text}</div>
      </div>
    </div>
  );
}