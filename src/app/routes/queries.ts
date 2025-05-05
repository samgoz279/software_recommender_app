const { callLlamaModel } = require('./services/llama-service.js');
// const express = require('express');

const router = express.Router();


// Get Query
router.get("/llm", async (req: import('express').Request, res: import('express').Response) => {
  try {

      const llmResponse = await callLlamaModel();

      res.json({

        response: llmResponse,
      });
    } catch (err) {
      console.error("Error calling LLaMA model:", err);
      res.status(500).json({ message: "Error generating response from LLaMA model." });
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/me`
  });

module.exports = router;

