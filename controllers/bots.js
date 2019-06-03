const http = require("http");

const getData = type => {
  return new Promise(function(resolve, reject) {
    var options = {
      host: "167.99.235.109",
      path: `/${type}`,
      method: "GET",
      headers: {
        "Auth-Token": process.env.AUTH_TOKEN
      }
    };

    http
      .get(options, resp => {
        let data = "";

        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          resolve(JSON.parse(data));
        });
      })
      .on("error", err => {
        console.log("Error: " + err.message);
      });
  });
};

module.exports = async (req, res) => {
  let result = await getData(req.body.type);
  res.status(200).json({ result: result });
};
