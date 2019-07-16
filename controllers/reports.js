const sendRequest = require("../helpers/sendRequest");

module.exports = {
  get: async (req, res) => {
    let options = {
      // host: "localhost",
      // port: 8080,
      host: "167.99.235.109",
      path: "/reports",
      method: "GET",
      headers: {
        "Auth-Token": process.env.AUTH_TOKEN
      }
    };

    let result = await sendRequest(options);
    res.status(200).json({ result: result });
  }
};
