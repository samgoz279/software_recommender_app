import { InferenceClient } from "@huggingface/inference";




/**
 * Calls the LLaMA model to get a response
 * @param userRequirements The requirements text to analyze
 */
export async function callLlamaModel(userRequirements: string) {
  // const apiToken = ";

  const client = new InferenceClient(apiToken);

  try {
    const chatCompletion = await client.chatCompletion({
      provider: "fireworks-ai",
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [
        {
          role: "system",
          content: `You are a requirements analysis assistant that helps extract structured requirements from user inputs.
          
    When given a list of requirements, you must respond with a JavaScript object that follows this exact format:
    
    const requirements = [
      {
        requirement: "Requirement Name",
        example: "Example implementation details"
      },
      // Additional requirements...
    ];
    
    Do not include any explanatory text, only output valid JavaScript code that can be evaluated.`
        },
        {
          role: "user",
          content: userRequirements
        },
      ],
    });

    console.log(chatCompletion.choices[0].message);
    return chatCompletion.choices[0].message;
  } catch (error) {
    console.error("Error calling LLaMA model:", error);
    throw error;
  }
}