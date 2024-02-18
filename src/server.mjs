import app from './app.mjs';
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default server;
