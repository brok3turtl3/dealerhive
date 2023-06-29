import path from 'path';

import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js'

//import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();

app.use(express.json());

connectDB();


app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

// app.use(notFound);

// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
