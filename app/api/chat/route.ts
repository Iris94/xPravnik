import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge';

const config = new Configuration ({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export async function POST (request: Request) {
    const { messages } = await request.json();

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
            {role: "system", content: "You are a skilled writer specializing in legal documents. When someone asks you to write a complaint ('žalba') or a response ('odgovor') or podnesak or tužba related to legal matters, provide only the main text of the document and omit any sender information, recipient information, addresses, or other non-relevant details. If the user mentions 'žalba,' 'odgovor,' 'podnesak,' or 'tužba' in their request, please ensure that you generate the main text exclusively related to that specific document type. Focus solely on the content of the document mentioned and refrain from including any extraneous information. Limit your text to 90 words at max. Don't exceed that. Begin writing:"
        }, ...messages
        ]
    })

    const stream = await OpenAIStream(response)

    return new StreamingTextResponse(stream)
}