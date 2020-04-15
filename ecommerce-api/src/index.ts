import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();
const router = express.Router();

// JSON parsing
app.use(express.json());

// Item interface
interface Item {
    id: number,
    name: string,
    price: number
};

// List of Items
const items: Item[] = [];

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Hello World!</h1>');
});

/**
 * Items API
 */
router.get('/items', (req: Request, res: Response, next: NextFunction) => {
    res.send(items);
});

router.post('/items', (req: Request, res: Response, next: NextFunction) => {
    items.push(req.body);
    res.send(req.body);
});

// Run!
app.use(router);
app.listen(5000, () => {
    console.log("Server running at port 5000!");
});