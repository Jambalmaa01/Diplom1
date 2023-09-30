const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
// const morgan = require('morgan');
const authRoutes = require('./routes/auth')
const  connectDB =require('./connect/index')

dotenv.config();
var whitelist = ["http://10.0.1.157:8081/"]
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
const app = express();
app.use(cors());
const port = process.env.PORT || 8081; 
// const mongodb_url = process.env.mongodb_url || 
connectDB()
// mongoose
//   .connect(mongodb_url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('DB connected'))
//   .catch((err) => console.log('DB CONNECTION ERROR:', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('<h1>hello world from the ap</h1>');
  console.log('jlkal')
});

app.use('/', authRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
