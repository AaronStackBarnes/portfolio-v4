const axios = require('axios')
const apiAiToken = process.env.APIAI_TOKEN
const apiAiClient = require('apiai')(apiAiToken)

module.exports = (req, res) => {
  ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  const apiaiSession = apiAiClient.textRequest(req.body.text, {
    sessionId: ip
  })

  apiaiSession.on('response', async (response) => {
    try {
      res.status(200).json({text: response.result.fulfillment.speech})
    } catch (error) {
      res.status(500).send('I failed...')
    }
  })

  apiaiSession.on('error', error => console.log(error))
  apiaiSession.end()
}
