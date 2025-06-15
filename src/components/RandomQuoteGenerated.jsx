import { useState } from "react";
import { allQuote } from "../utils/quotes";
import "../styles/Quote.css"
import { speak } from "../utils/textToSpeech";

function RandomQuoteGenerated({quoteInit, authorInit,onChangeColor}){
    const [quote,setQuote]=useState({ text: quoteInit, author: authorInit });

    function handleRandomQuote(){
        const quote = allQuote[Math.floor(Math.random() * allQuote.length)];
        setQuote(quote);
        onChangeColor();
    }
     function speakQuote() {
       speak(`${quote.text} by ${quote.author}`);
    }

    return(
        <div className="quote-container">
            <p className="quote">{quote.text}</p><br/>
            <p className="author">{quote.author}</p><br/>
            <button onClick={handleRandomQuote} className="btn btn-quote">Generate Random Quote</button>
            <button onClick={speakQuote} className="btn btn-speak">🔈 Speak</button>
        </div>
    )
}

export default RandomQuoteGenerated;