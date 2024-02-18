import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World! Funciona por favooooor');
});

export default app;
