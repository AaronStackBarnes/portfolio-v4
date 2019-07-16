import React, { Component } from "react";

class BotMenu extends Component {
  render() {
    return (
      <div className="callout" style={{ borderColor: "green" }}>
        <p>
          <a
            href="www.aboutblank.com"
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
            href="www.aboutblank.com"
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
            href="www.aboutblank.com"
            onClick={e => {
              e.preventDefault();
              this.props.getMatches();
            }}
          >
            Show Matches
          </a>
        </p>
        <p>
          <a href="www.aboutblank.com">Show Reports - Under Construction</a>
        </p>
        <p>
          <a href="www.aboutblank.com">Open Dashboard - Under Construction</a>
        </p>
        <p>
          <a
            href="www.aboutblank.com"
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
