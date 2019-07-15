import React, { Component } from "react";
import axios from "axios";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import startUpText from "./startUpText";
import SeeSoundCallout from "./SeeSoundCallout";
import Bot from "./Bot";
import BotMenu from "./BotMenu";
import Activity from "./Activity";
import asb from "./img/asb.png";
import "./App.css";

const server = "https://aaron-stack.herokuapp.com";
// const server = "http://localhost:3030";

class App extends Component {
  state = {
    text: "",
    typeBox: "",
    botMakerStep: 0,
    facebookAccount: "",
    facebookPassword: "",
    messages: [],
    loadingText: "Initializing AI",
    loadingTextVisibility: "hidden"
  };

  componentDidMount() {
    this.toggleLoadingText();
    setTimeout(() => {
      this.displayBoot();
    }, 4000);
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
    }, 10000);
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

    this.submitMessageToServer(this.state.text);

    this.setState({
      messages: [
        ...this.state.messages,
        <p key={+new Date()}> >> {this.state.text}</p>
      ],
      text: ""
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter" && this.state.botMakerStep === 0) {
      this.handleSubmit(event);
    } else if (event.key === "Enter") {
      this.botCreator();
    }
  };

  submitMessageToServer = async message => {
    try {
      const response = await axios.post(server + "/messages", {
        text: message
      });

      let resText = response.data.text;

      if (resText === "resume") {
        this.setState({
          messages: [...this.state.messages, <Resume />]
        });
      } else if (resText === "portfolio") {
        this.setState({
          messages: [...this.state.messages, <Portfolio />]
        });
      } else if (resText === "activateBotNetwork") {
        this.setState({
          messages: [
            ...this.state.messages,
            <BotMenu
              startBotMaker={() => {
                this.setState({ botMakerStep: 1 }, this.botCreator);
              }}
              getBots={() => {
                this.botFetcher("activities");
              }}
              getMatches={() => {
                this.botFetcher("activities");
              }}
              exit={() => {
                this.setState({
                  messages: [
                    ...startUpText
                      .split("[")
                      .map((lineOfText, i) => (
                        <p key={Math.random() + i}>[{lineOfText}</p>
                      )),
                    <SeeSoundCallout key={Math.random()} />
                  ]
                });
              }}
            />
          ]
        });
      } else {
        this.typewriter(resText);
        this.chatBox.scrollIntoView();
      }
    } catch (error) {
      console.error(error);
    }
  };

  botFetcher = async type => {
    let response;
    if (type === "getBots") {
      response = await axios.get(server + "/bots");
    } else if (type === "activities") {
      response = await axios.get(server + "/messages");
    }

    if (
      response &&
      type === "getBots" &&
      response.data &&
      response.data.result &&
      response.data.result.accounts
    ) {
      response = await axios.get(server + "/bots");

      this.setState({
        messages: [
          ...this.state.messages,
          ...response.data.result.accounts.map((account, i) => (
            <Bot key={`${account._id}_${+new Date()}`} {...account} />
          ))
        ]
      });
    }

    if (
      response &&
      type === "activities" &&
      response.data &&
      response.data.result &&
      response.data.result.accounts
    ) {
      this.setState({
        messages: [
          ...this.state.messages,
          ...response.data.result.accounts.map((account, i) => (
            <Activity key={`${account._id}_${+new Date()}`} {...account} />
          ))
        ]
      });
    }
  };

  botCreator = async () => {
    if (this.state.botMakerStep === 1) {
      this.setState({ botMakerStep: 2 });
      this.typewriter("please enter bot facebook email");
      this.chatBox.scrollIntoView();
    } else if (this.state.botMakerStep === 2) {
      if (!this.state.text) {
        return;
      }
      this.setState({
        facebookAccount: this.state.text,
        text: "",
        botMakerStep: 3
      });
      this.typewriter(this.state.text);
      this.typewriter("please enter bot facebook password");
      this.chatBox.scrollIntoView();
    } else if (this.state.botMakerStep === 3) {
      this.setState(
        {
          facebookPassword: this.state.text,
          text: "",
          botMakerStep: 4
        },
        this.botCreator
      );
      this.typewriter(this.state.text);
      this.typewriter("attempting to create bot");
      this.chatBox.scrollIntoView();
    } else if (this.state.botMakerStep === 4) {
      this.typewriter(
        `curl -X {email: ${this.state.facebookAccount.trim()} password: ${this.state.facebookPassword.trim()}}`
      );
      this.chatBox.scrollIntoView();
      try {
        let response = await axios.post(server + "/bots", {
          facebookAccount: this.state.facebookAccount.trim(),
          facebookPassword: this.state.facebookPassword.trim()
        });
        console.log(response);
      } catch (e) {
        console.error(e);
      } finally {
        this.setState({
          facebookAccount: "",
          facebookPassword: "",
          text: "",
          botMakerStep: 0
        });
      }
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
