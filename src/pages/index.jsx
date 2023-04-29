import React, { useState, useEffect } from "react";
import "./styles/main.css";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  const [quotes, setQuotes] = useState(0);
  const getData = () =>
    fetch("data/quotes.json")
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        const length = resultData.length;
        const random = Math.floor(Math.random() * length);

        setQuotes(resultData[random]);
      });

  useEffect(() => {
    getData();
  }, []);

  return (
    <main style={pageStyles}>
      <button className="refreshButton" onClick={getData}>Next</button>
      {""}
      <blockquote className="otro-blockquote">
        {" "}
        {quotes.quotes} <span> {quotes.author} </span>{" "}
      </blockquote>{" "}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title> Home Pages </title>;
