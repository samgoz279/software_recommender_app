import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { callLlamaModel } from './services/llama-service.ts';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

app.post('/llm', async (req, res) => {
    try {
        const { requirements } = req.body;
        console.log("Received requirements:", requirements);
        const response = await callLlamaModel(requirements);
        res.json({
            success: true,
            data: response
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to get LLM response'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});