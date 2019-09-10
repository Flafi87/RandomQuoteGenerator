import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Spinner } from "reactstrap";
import Quotes from "./Quotes";

const App = () => {
  const [quotes, setQuotes] = useState();
  const [myQuote, setMyQuote] = useState();

  useEffect(() => {
    fetchaQuote();
  }, []);

  const fetchaQuote = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then(res => {
        setQuotes(res.data.quotes);
        setMyQuote(res.data.quotes[Math.floor(Math.random() * 102)]);
      });
  };

  const handleClick = () => {
    setMyQuote(quotes[Math.floor(Math.random() * 102)]);
  };

  const spinner = (
    <div className='d-flex justify-content-center align-middle'>
      <Spinner color='primary' />
    </div>
  );
  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <Button
          className='my-3'
          color='success'
          href='https://flafi.hu/index.html#jscript'
        >
          Back to the website
        </Button>
        <Button
          className='my-3'
          color='primary'
          href='https://github.com/Flafi87/RandomQuoteGenerator'
          target='_blank'
        >
          Repo
        </Button>
      </div>
      {myQuote ? (
        <Quotes
          handleClick={handleClick}
          quote={myQuote.quote}
          author={myQuote.author}
        />
      ) : (
        spinner
      )}
    </div>
  );
};

export default App;
