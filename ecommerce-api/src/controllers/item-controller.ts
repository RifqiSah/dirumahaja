import { Request, Response, NextFunction } from 'express';
import Item from '../models/item';

// List of Items
const items: Item[] = [
    {
        'id': 1,
        'name': 'Laptop',
        'price': 10000
    },
    {
        'id': 2,
        'name': 'Mouse',
        'price': 2000
    },
    {
        'id': 3,
        'name': 'Keyboard',
        'price': 5000
    },
    {
        'id': 4,
        'name': 'HP',
        'price': 2000
    },
    {
        'id': 5,
        'name': 'Lampu',
        'price': 500
    },
];

export default class ItemController {
    static index(req: Request, res: Response, next: NextFunction) {
        const query = req.query;
        let result = items;

        // Item Query
        if (Object.keys(query).length !== 0) {
            // Item name
            result = items.filter((i) => {
                return i.name.toLowerCase().indexOf(query.q.toString().toLowerCase()) !== -1;
            });

            // Item price
            if (query.price) {
                for (let [k, v] of Object.entries(query.price)) {
                    let op = k;
                    let price = Number(v);

                    result = result.filter((i) => {
                        if (op == 'is') return i.price == price;
                        if (op == 'lte') return i.price <= price;
                        if (op == 'gte') return i.price >= price;
                    });
                }
            }
        }

        if (!result.length) {
            return res.status(404).send({
                errors: {
                    message: 'No item found for the specified criteria',
                }
            });
        }

        res.send(result);
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