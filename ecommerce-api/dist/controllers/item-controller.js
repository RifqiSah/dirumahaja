"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// List of Items
const items = [];
class ItemController {
    static index(req, res, next) {
        res.send(items);
    }
    static store(req, res, next) {
        items.push(req.body);
        res.send(req.body);
    }
    static show(req, res, next) {
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
    static update(req, res, next) {
        items.push(req.body);
        res.send(req.body);
    }
    static delete(req, res, next) {
        items.push(req.body);
        res.send(req.body);
    }
}
exports.default = ItemController;
//# sourceMappingURL=item-controller.js.map