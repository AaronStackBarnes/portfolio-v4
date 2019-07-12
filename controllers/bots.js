const http = require("http");

const sendRequest = (options, data) => {
  return new Promise(function(resolve, reject) {
    const req = http.request(options, resp => {
      let result = "";

      // A chunk of data has been recieved.
      resp.on("data", chunk => {
        result += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        resolve(JSON.parse(result));
      });
    });

    req.on("error", err => {
      reject("Error: " + err.message);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
};

module.exports = {
  get: async (req, res) => {
    let options = {
      // host: "localhost",
      // port: 8080,
      host: "167.99.235.109",
      path: "/accounts",
      method: "GET",
      headers: {
        "Auth-Token": process.env.AUTH_TOKEN
      }
    };

    let result = await sendRequest(options);
    res.status(200).json({ result: result });
  },
  messages: async (req, res) => {
    let options = {
      // host: "localhost",
      // port: 8080,
      host: "167.99.235.109",
      path: "/matches",
      method: "GET",
      headers: {
        "Auth-Token": process.env.AUTH_TOKEN
      }
    };

    let result = await sendRequest(options);
    res.status(200).json({ result: result });
  },
  stats: async (req, res) => {
    let options = {
      // host: "localhost",
      // port: 8080,
      host: "167.99.235.109",
      path: "/statistics",
      method: "GET",
      headers: {
        "Auth-Token": process.env.AUTH_TOKEN
      }
    };

    let result = await sendRequest(options);
    res.status(200).json({ result: result });
  },
  post: async (req, res) => {
    let options = {
      // host: "localhost",
      // port: 8080,
      host: "167.99.235.109",
      path: "/accounts",
      method: "POST",
      headers: {
        "Auth-Token": process.env.AUTH_TOKEN,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };

    const data = {
      facebookAccount: req.body.facebookAccount,
      facebookPassword: req.body.facebookPassword
    };

    let result = await sendRequest(options, data);
    res.status(200).json({ result: result });
  }
};
