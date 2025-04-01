import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/games', async (req, res) => {
    const apiUrl = 'https://www.freetogame.com/api/games';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        res.json(data);

    } catch (error) {
        console.error('Error fetching data from FreeToGame API:', error);
        res.status(500).json({ error: 'Failed to fetch data from the external API' });
    }
});

app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});