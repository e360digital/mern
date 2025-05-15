import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import logger from './util/logger';
import config from './config';
import Middlewares from './api/middlewares';
import Authentication from './api/authentication';
import UserRouter from './user/router';

if (!process.env.JWT_SECRET) {
  const err = new Error('No JWT_SECRET in env variable');
  logger.warn(err.message);
}

// Initialize Express App
const app = express();

// Connect to MongoDB
mongoose.connect(config.mongoose.uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info(`✅ MongoDB connected `))
  .catch(err => {
    logger.error(`❌ MongoDB connection error: ${err.message}`);
    process.exit(1); // optional: stop the server if DB fails
  });

mongoose.Promise = global.Promise;

// Middleware Setup
app.use(cors({
  origin: ['https://www.amazingandyyy.com', 'http://localhost:3000', 'http://localhost:1234']
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/ping', (req, res) => res.send('pong'));
app.get('/', (req, res) => res.json({ source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlc4gBX0Ihxk_xIXQ4M760-rO7htHcP-5Jg&s' }));
app.post('/signup', Authentication.signup);
app.post('/signin', Authentication.signin);
app.get('/auth-ping', Middlewares.loginRequired, (req, res) => res.send('connected'));
app.use('/user', Middlewares.loginRequired, UserRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  logger.error(`❌ ${err.message}`);
  res.status(422).json(err.message);
});

// Start Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  logger.info(`🚀 Server is running on http://localhost:${port}`);
});
