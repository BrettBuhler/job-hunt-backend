const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

async function getCoverLetter (text) {
    const configuration = new Configuration({
        apiKey: process.env.OPEN_AI_KEY,
      })
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${text}`,
        temperature: 0.5,
        max_tokens: 4000,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      })
      console.log(response.data)
      return response.data
}