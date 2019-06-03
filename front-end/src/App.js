import React, { Component } from "react";
import axios from "axios";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import startUpText from "./startUpText";
import SeeSoundCallout from "./SeeSoundCallout";
import Bot from "./Bot";
import Activity from "./Activity";
import asb from "./img/asb.png";
import "./App.css";

const server = "https://aaron-stack.herokuapp.com";
// const server = "http://localhost:3030";

class App extends Component {
  state = {
    text: "",
    typeBox: "",
    messages: [],
    loadingText: "Initializing AI",
    loadingTextVisibility: "hidden"
  };

  componentDidMount() {
    this.toggleLoadingText();
    setTimeout(() => {
      this.displayBoot();
    }, 5000);
  }

  toggleLoadingText = () => {
    let interval = 500;
    for (let i = 0; i <= 10; i++) {
      (x => {
        setTimeout(() => {
          this.setState({
            loadingTextVisibility:
              this.state.loadingTextVisibility === "hidden"
                ? "visible"
                : "hidden"
          });

          if (x === 4) {
            this.setState({
              loadingText: "Connected to System Intelligence"
            });
          } else if (x === 8) {
            this.setState({
              loadingText: "Please Hold"
            });
          }
        }, i * interval);
      })(i);
    }

    setTimeout(() => {
      this.setState({
        loadingText: "Loaded. Thanks for scrolling back up."
      });
      this.typewriter("Well are you going to say hello...");
    }, 11000);
  };

  displayBoot = () => {
    let startUpArray = startUpText.split("[");
    let interval = 20;
    startUpArray.forEach((lineOfText, i) => {
      setTimeout(() => {
        this.setState({
          messages: [...this.state.messages, <p key={i}>[{lineOfText}</p>]
        });

        this.chatBox.scrollIntoView();
      }, i * interval);
    });

    setTimeout(() => {
      this.setState({
        messages: [
          ...this.state.messages,
          <SeeSoundCallout key={startUpArray.length} />
        ]
      });
      this.chatBox.scrollIntoView();
    }, startUpArray.length * interval);
  };

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.text) {
      return;
    }

    if (this.state.text === "bots ls") {
      this.botFetcher("bots");
    } else if (this.state.text === "bots tail -100") {
      this.botFetcher("activities");
    } else {
      this.submitMessageToServer(this.state.text);
    }

    this.setState({
      messages: [
        ...this.state.messages,
        <p key={+new Date()}> >> {this.state.text}</p>
      ],
      text: ""
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.handleSubmit(event);
    }
  };

  submitMessageToServer = async message => {
    try {
      const response = await axios.post(server + "/messages", {
        text: message
      });

      if (response.data.text === "resume") {
        this.setState({
          messages: [...this.state.messages, <Resume />]
        });
      } else if (response.data.text === "portfolio") {
        this.setState({
          messages: [...this.state.messages, <Portfolio />]
        });
      } else {
        this.typewriter(response.data.text);
        this.chatBox.scrollIntoView();
      }
    } catch (error) {
      console.error(error);
    }
  };

  botFetcher = async type => {
    try {
      const response = await axios.post(server + "/bots", {
        type: type
      });

      if (!response.data || !response.data.result) {
        return;
      }

      if (
        response.data.result.bots &&
        response.data.result.bots.length &&
        type === "bots"
      ) {
        this.setState({
          messages: [
            ...this.state.messages,
            ...response.data.result.bots.map((datum, i) => (
              <Bot key={`${i}A`} {...datum} />
            ))
          ]
        });
      } else if (
        response.data.result.activities &&
        response.data.result.activities.length &&
        type === "activities"
      ) {
        this.setState({
          messages: [
            ...this.state.messages,
            ...response.data.result.activities.map((datum, i) => (
              <Activity key={`${i}A`} {...datum} />
            ))
          ]
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  typewriter = text => {
    let i = 0;
    let speed = 15;
    let message = `[AM] ${text}`;

    let type = () => {
      if (i < message.length) {
        this.setState({ typeBox: this.state.typeBox + message[i] });
        i++;
        setTimeout(type, speed);
      } else {
        this.setState({
          messages: [
            ...this.state.messages,
            <p key={+new Date()}>{message}</p>
          ],
          typeBox: ""
        });
      }
    };
    type();
  };

  render() {
    return (
      <>
        <div className="overlay" />
        <div className="scanline" />
        <div className="wrapper">
          <div className="content clearfix">
            <header className="site clearfix">
              <img src={asb} alt="ASB ACII" id="logo-v" />
              <h4>Full Stack Solutions (MM)</h4>
              <p>----------------------------------------</p>
              <p>TERMINAL v 4.0.0</p>
              <p>{new Date().toString()}</p>
              <p style={{ visibility: this.state.loadingTextVisibility }}>
                - {this.state.loadingText} -
              </p>
            </header>

            <p>The Allied Master Computer (AM) - INIT INTELLIGENCE</p>
            <p>System Administrator (SYSADM) - Bot Name: {+new Date()}</p>

            <p className="clear">
              <br />
            </p>

            {this.state.messages}
            <p>{this.state.typeBox}</p>
            <form onSubmit={this.handleSubmit}>
              <label>Message >></label>
              <textarea
                onKeyPress={this.handleKeyPress}
                value={this.state.text}
                onChange={this.handleTextChange}
                id="text"
                rows="1"
              />
              <br />
              <br />
              <br />
              <input
                ref={chatBox => {
                  this.chatBox = chatBox;
                }}
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default App;
