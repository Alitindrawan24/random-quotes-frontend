import React, { useState, useEffect } from "react"
import "./styles/main.css"

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};


const IndexPage = () => {

    const [quotes, setQuotes] = useState(0)
    const getData = () => fetch(`http://localhost:8080`)
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
            setQuotes(resultData)
        })

    useEffect(() => { getData() }, [])

    return ( <
        main style = { pageStyles } >
        <
        blockquote className = "otro-blockquote" > { quotes.quotes } <
        span > { quotes.author } < /span> <
        /blockquote> <
        button className = "refreshButton"
        onClick = { getData } >
        <
        span class = "reload" > & #x21bb; < /span> <
        /button> <
        /main>
    );
};

export default IndexPage;

export const Head = () => < title > Home Pages < /title>;