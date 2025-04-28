const HUGGING_FACE_API_URL = "https://api-inference.huggingface.co/models/meta-llama/Llama-3-13b-chat-hf";
const HUGGING_FACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN!; // in your `.env.local`

// ai.ts

const HUGGING_FACE_API_URL = "https://api-inference.huggingface.co/models/meta-llama/Llama-3-13b-chat-hf";
const HUGGING_FACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN!; // in your `.env.local`

export async function callLlamaModel(requirements: string) {
  const prompt = `
You are a helpful software analyst.

Given the following software requirements list:

"""
${requirements}
"""

Break it down into a structured JSON format, with each requirement clearly extracted under fields like:
- "feature"
- "description"
- "priority" (if you can infer it)
Return **only JSON**, no extra commentary.
`;

  const response = await fetch(HUGGING_FACE_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HUGGING_FACE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: prompt,
      parameters: {
        max_new_tokens: 512,
        temperature: 0.2,
      }
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to call LLaMA API: ${response.statusText}`);
  }

  const data = await response.json();

  const outputText = data.generated_text ?? data[0]?.generated_text; // depends on API's structure
  const structured = JSON.parse(outputText);

  return structured;
}