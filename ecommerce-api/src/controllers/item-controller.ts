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

    static show(req: Request, res: Response, next: NextFunction) {
        const id = Number(req.params.id);
        const result = items.find(x => x.id === id);

        if (!result) {
            return res.status(404).send({
                errors: {
                    message: 'Item not found',
                }
            });
        }

        res.send(result);
    }

    static update(req: Request, res: Response, next: NextFunction) {
        const id = Number(req.params.id);
        const result = items.find(x => x.id === id);

        if (!result) {
            return res.status(404).send({
                errors: {
                    message: 'Item not found',
                }
            });
        }
        
        result.name = req.body.name;
        result.price = req.body.price;

        res.send(req.body);
    }

    static delete(req: Request, res: Response, next: NextFunction) {
        const id = Number(req.params.id);
        const result = items.findIndex(x => x.id === id);

        if (!result) {
            return res.status(404).send({
                errors: {
                    message: 'Item not found',
                }
            });
        }

        items.splice(result, 1);

        res.send(items);
    }
}