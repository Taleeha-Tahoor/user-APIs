import express from "express";
import bodyParser from 'body-parser';
import usersRoutes from './routes/usersRoute.js';
import errorHandler from "./middleware/errorHandler.js";
import connectDb from "./config/dbConnection.js";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
connectDb();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(errorHandler);
app.use('/users', usersRoutes);
app.use(cors({"origins":"*"}));


app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`));