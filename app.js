// app.js
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) =>{
    res.send('About page');
});

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;