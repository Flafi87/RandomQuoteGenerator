import React from 'react';
import { Card, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Quotes = ({quote, author, handleClick}) => {
return(
  <Card id="quote-box">
    <div id="text">
      <h3>
      &quot;
        {quote}
      &quot;
      </h3>

    </div>
    <div id="author">
      <h4>
-
        {author}
      </h4>
    </div>
    <div className="buttons">
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`}
        id="tweet-quote"
        title="Tweet this quote!"
      >
        <i className="fa fa-twitter" />
      </a>
      <Button
        type="button"
        id="new-quote"
        onClick={handleClick
        }
      >
        NEW QUOTE
      </Button>
    </div>
  </Card>
)
}

Quotes.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Quotes