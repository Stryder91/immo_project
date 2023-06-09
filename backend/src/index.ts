
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import { homeRouter } from './routes/home';
// const { auth } = require('express-openid-connect');

dotenv.config({ override: true, debug: true })

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.AUTH0_CLIENT_SECRET,
//   baseURL: process.env.BASE_URL,
//   clientID: process.env.AUTH0_CLIENT_ID,
//   issuerBaseURL: process.env.AUTH0_DOMAIN
// };


const app = express();

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/', homeRouter);

const CONNECTION_URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER}/${process.env.DB}`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => 
    app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
  )
  .catch((error: Error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);