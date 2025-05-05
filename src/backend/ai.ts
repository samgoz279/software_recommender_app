

const express = require('express');

const cors = require('cors');

const dotenv = require('dotenv');
const apiToken = process.env.apiToken!;
const query = require('../app/routes/queries')
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

app.use("/routes/queries", query);

