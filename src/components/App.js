import React from "react";
import axios from "axios";
import { Button, Spinner } from "reactstrap";
import Quotes from "./Quotes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: {},
      myQuote: {},
    };
  }

  componentDidMount() {
    this.fetchaQuote();
  }

  fetchaQuote = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        this.setState({ quotes: res.data.quotes });
        this.setState({
          myQuote: res.data.quotes[Math.floor(Math.random() * 102)],
        });
      });
  };

  handleClick = () => {
    const { quotes } = this.state;
    this.setState({
      myQuote: quotes[Math.floor(Math.random() * 102)],
    });
  };

  render() {
    const { myQuote } = this.state;
    const { quote, author } = myQuote;
    const spinner = (
      <div className="d-flex justify-content-center align-middle">
        <Spinner color="primary" />
      </div>
    );
    return (
      <div className="container" bg="dark">
        <div className="d-flex justify-content-between">
          <Button
            className="my-3"
            color="success"
            href="https://flafi.me/index.html#jscript"
          >
            Back to the website
          </Button>
          <Button
            className="my-3"
            color="primary"
            href="https://github.com/Flafi87/RandomQuoteGenerator"
            target="_blank"
          >
            Repo
          </Button>
        </div>

        {quote ? (
          <>
            <div className="d-flex justify-content-center align-middle">
              <Button type="button" id="new-quote" onClick={this.handleClick}>
                NEW QUOTE
              </Button>
            </div>
            <Quotes
              handleClick={this.handleClick}
              quote={quote}
              author={author}
            />
          </>
        ) : (
          spinner
        )}
      </div>
    );
  }
}

export default App;
