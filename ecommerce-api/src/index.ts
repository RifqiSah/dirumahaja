import express, { Express } from 'express';
import ItemRouter from './routes/item-routes';

const app: Express = express();;

// JSON parsing
app.use(express.json());

//Items API
app.use('/items', ItemRouter);

// Run!
app.listen(5000, () => {
    console.log("Server running at port 5000!");
});