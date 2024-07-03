import express from 'express';

const app = express();

/**
 * Root endpoint that responds with "Hello World!".
 * @name /
 * @function
 * @memberof module:app
 * @inner
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * Endpoint that responds with a personalized greeting.
 * @name /saludo/:nombre
 * @function
 * @memberof module:app
 * @inner
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Request parameters.
 * @param {string} req.params.nombre - Name to greet.
 * @param {Object} res - Express response object.
 */
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}`);
});

/**
 * Starts the server on port 3000.
 * @function
 * @memberof module:app
 */
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
