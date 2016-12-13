import React from 'react';

export default class GuessInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <div id="feedback">Feedback Here</div>
          <input type="text" className="guess-input" placeholder="Enter your Guess"/>
          <button type="submit" id="guessButton" className="button">Guess</button>
          <p>Guess #!</p>
          <div id="prevGuesses">Previous Guesses Here</div>
        </div>
      )
    }

}