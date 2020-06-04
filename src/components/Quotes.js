import React from "react";
import { Card } from "reactstrap";
import PropTypes from "prop-types";

const Quotes = ({ quote, author }) => (
  <Card id="quote-box">
    <div id="text">
      <p>
        &quot;
        {quote}
        &quot;
      </p>
    </div>
    <div id="author">
      <h4>{author}</h4>
    </div>
    {/* <div className="buttons">
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`}
        id="tweet-quote"
        title="Tweet this quote!"
      >
        <i className="fa fa-twitter" />
      </a>
    </div> */}
  </Card>
);

Quotes.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Quotes;
