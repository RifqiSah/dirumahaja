import { Request, Response, NextFunction } from 'express';
import Item from '../models/item';

// List of Items
const items: Item[] = [];

export default class ItemController {
    static index(req: Request, res: Response, next: NextFunction) {
        res.send(items);
    }

    static store(req: Request, res: Response, next: NextFunction) {
        items.push(req.body);
        res.send(req.body);
    }
}