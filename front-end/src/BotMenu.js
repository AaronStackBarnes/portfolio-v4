import React, { Component } from "react";

class BotMenu extends Component {
  render() {
    return (
      <div className="callout" style={{ borderColor: "green" }}>
        <p>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              this.props.getBots();
            }}
          >
            Show Bots
          </a>
        </p>
        <p>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              this.props.startBotMaker();
            }}
          >
            Make a Bot
          </a>
        </p>
        <p>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              this.props.getMatches();
            }}
          >
            Matches
          </a>
        </p>
        <p>
          <a href="#">Reports - Under Construction</a>
        </p>
        <p>
          <a href="#">Statistics - Under Construction</a>
        </p>
        <p>
          <a href="#">Heat Map - Under Construction</a>
        </p>
        <p>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              this.props.exit();
            }}
          >
            Exit
          </a>
        </p>
      </div>
    );
  }
}

export default BotMenu;
