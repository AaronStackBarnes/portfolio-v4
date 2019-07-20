const sendRequest = require("../helpers/sendRequest");

module.exports = {
  get: async (req, res) => {
    let path;
    if (req.query.pageNumber && req.query.nPerPage) {
      path = `/reports?pageNumber=${req.query.pageNumber}&nPerPage=${
        req.query.nPerPage
      }`;
    } else {
      path = `/reports`;
    }

    let options = {
      // host: "localhost",
      // port: 8080,
      host: "167.99.235.109",
      path: path,
      method: "GET",
      headers: {
        "Auth-Token": process.env.AUTH_TOKEN
      }
    };

    let result = await sendRequest(options);
    res.status(200).json({ result: result });
  }
};
