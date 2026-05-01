import React, { useEffect, useState } from "react";
import testimonios from "./data";
import Testimonial from "./components/Testimonial";
import Controls from "./components/Controls";
import './styles.css';

export default function App() {
  const [index, setIndex] = useState(0);
  const lenght = testimonios.length;
  const autoplayRef = useRef(null);

  const next = () => setIndex(prev => (prev + 1) % lenght);
  const prev = () => setIndex(prev => (prev - 1 + lenght) % lenght);
  const random = () => {
    let r = Math.floor(Math.random() * lenght);
    if (r === index) r = (r + 1) % lenght;
    setIndex(r);
  }
};

useEffect(() => {
  autoplayRef.current = setInterval(() => {
    setIndex(i => (i + 1) % length);
  }, 5000);
  return () => clearInterval(autoplayRef.current);
}, [length]);

const handleuserAction = (actionFn) => {
  clearInterval(autoplayRef.current);
  actionFn();

  autoplayRef.current = setInterval(() => {
    setIndex(i => (i + 1) % length);
  }, 5000)
};

return (
  <main className = "app">
    <h1>Testimonios</h1>
    <div>
      <Testimonial item = {testimonios[index]}/>
    </div>

    <Controls
      onPrev={() => handleuserAction(prev)}
      onNext={() => handleuserAction(next)}
      onRandom={() => handleuserAction(random)}
    />
    <p className = "counter"> {index + 1} / {length} </p>
  </main>
  
);

