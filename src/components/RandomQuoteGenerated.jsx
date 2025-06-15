import { useState } from "react";
import { allQuote } from "../utils/quotes";
import "../styles/Quote.css"

function RandomQuoteGenerated({quoteInit, authorInit,onChangeColor}){
    const [quote,setQuote]=useState({ text: quoteInit, author: authorInit });

    function handleRandomQuote(){
        const quote = allQuote[Math.floor(Math.random() * allQuote.length)];
        setQuote(quote);
        onChangeColor();
    }

    return(
        <div className="quote-container">
            <p className="quote">{quote.text}</p><br/>
            <p className="author">{quote.author}</p><br/>
            <button onClick={handleRandomQuote} className="btn-quote">Generate Random Quote</button>
        </div>
    )
}

export default RandomQuoteGenerated;