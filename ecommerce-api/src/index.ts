import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();
const router = express.Router();

interface Item {
    id: number,
    name: string,
    price: number
};

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Hello World!</h1>');
});

app.use(router);
app.listen(5000, () => {
    console.log("Server running at port 5000!");
});