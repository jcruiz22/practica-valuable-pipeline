import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Bye Bye Bye Bye Bye!!!');
});

export default app;
