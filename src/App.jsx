import React, { useState } from "react";
import GenerateQuote from "./components/RandomQuoteGenerated";
import { backgroundColors } from "./utils/colors";
import "./styles/styles.css";
import "./styles/App.css";


function App() {
  const [color,setColor]=useState("#e6dbcd")

  function handleBackgroundColor(){
    const randomIndex = Math.floor(Math.random() * backgroundColors.length);
    setColor(backgroundColors[randomIndex]);
  }
  return (
    <div className="app-container" style={{ backgroundColor: color }}>
      <header className="app-header">
        <h1><span className="project-name"><a href="https://github.com/LaudeDignus/quotInspi" target="blank">QuotInpsi</a></span> - Générateur de citations</h1>
      </header>
      <main className="quote-section" style={{backgroundColor:"#e6dbcd"}}>
        <GenerateQuote
          quoteInit="Life is what happens when you're busy making other plans."
          authorInit="John Lennon"
          onChangeColor={handleBackgroundColor}
        />
      </main>
    </div>
  );
}

export default App;