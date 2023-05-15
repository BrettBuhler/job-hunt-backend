const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

async function getKeyWords (text) {
    const configuration = new Configuration({
        apiKey: process.env.OPEN_AI_KEY,
      })
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Format your answer in a comma delimited string such as 'javascript,HTML,CSS'. Do not return anything else. Extract keywords from this text:\n${text}`,
        temperature: 0.5,
        max_tokens: 1000,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      })
      console.log(response.data)
      return response.data
}

module.exports = getKeyWords