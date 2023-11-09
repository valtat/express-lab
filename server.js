const express = require('express');
const { errorMiddleware } = require('./middleware/errorMiddleware');

const app = express();

// Body Parser Middleware
app.use(express.json());

// Users API Routes
app.use('/api/users', require('./routes/usersRoutes'));

// Services API Routes
app.use('/api/services', require('./routes/servicesRoutes'));

// Tours API Routes
app.use('/api/tours', require('./routes/toursRoutes'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(errorMiddleware);