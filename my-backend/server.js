// const express = require('express');
// const connectDB = require('./db');
// const cors = require('cors');
// const productRoutes = require('./routes/productRoutes');
// const paymentRoutes = require('./routes/paymentRoutes');
// require('dotenv').config();
// const path = require('path');

// const app = express();

// // Connect to database
// connectDB();

// app.use(cors({
//   origin: process.env.FRONTEND_URL && 'http://localhost:3000/' ,
//   methods: ['GET', 'POST', 'OPTIONS'],
//   credentials: true, // Allow credentials (cookies, authorization headers)
// }));

// app.use(express.json()); // Parse JSON bodies

// // Use routes
// app.use('/api', productRoutes);
// app.use('/api', paymentRoutes);
// // Start the server
// app.use(express.static(path.join(__dirname, '../build')));

// // Route to serve index.html for all non-API requests
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// // const HOST = 'localhost'; // Bind to all network interfaces

// // app.listen(PORT, HOST, () => {
// //   console.log(`Server running on http://${HOST}:${PORT}`);
// // });




const express = require('express');
const { renderToString } = require('react-dom/server');
const React = require('react');
const { Helmet } = require('react-helmet');
const path = require('path');
const fs = require('fs');

const App = require('./src/App').default;

const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
  const appString = renderToString(React.createElement(App));
  const helmet = Helmet.renderStatic();

  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${appString}</div>`
      )
      .replace(
        '<title></title>',
        `${helmet.title.toString()}${helmet.meta.toString()}`
      )
    );
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
