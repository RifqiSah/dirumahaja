import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();
const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Hello World!</h1>');
});

app.use(router);
app.listen(5000, () => {
    console.log("Server running at port 5000!");
});