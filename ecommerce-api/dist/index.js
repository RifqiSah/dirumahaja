"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.send('<h1>Hello World!</h1>');
});
app.use(router);
app.listen(5000, () => {
    console.log("Server running at port 5000!");
});
//# sourceMappingURL=index.js.map