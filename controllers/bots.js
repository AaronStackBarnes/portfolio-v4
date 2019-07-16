const sendRequest = require("../helpers/sendRequest");

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
