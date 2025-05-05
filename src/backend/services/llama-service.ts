const testPrompt = {
  "messages": [
    {"role": "user", "content": "What is the weather like in Boston?"},
  ],
  "functions": [
    {
      "name": "get_current_weather",
      "description": "Get the current weather in a given location",
      "parameters": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "The city and state, e.g. San Francisco, CA",
          },
          "days": {
            "type": "number",
            "description": "for how many days ahead you wants the forecast",
          },
          "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
        },
      },
      "required": ["location", "days"],
    }
  ],
  "stream": false,
  "function_call": "get_current_weather",
};

/**
 * Calls the LLaMA model to get a response
 */
export async function callLlamaModel() {
  const apiToken = process.env.apiToken;

  try {
    const response = await fetch('https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ testPrompt, max_tokens: 100 }),
    });

    const data = await response.json();
    return data.generated_text;
  } catch (error) {
    console.error("Error calling LLaMA model:", error);
    throw error;
  }
}