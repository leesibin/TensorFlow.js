import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-yR3ENrdqWba32qJxF7pmWKfa",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();