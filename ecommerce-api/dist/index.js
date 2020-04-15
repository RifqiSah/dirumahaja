"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const item_routes_1 = __importDefault(require("./routes/item-routes"));
const app = express_1.default();
;
const router = express_1.default.Router();
// JSON parsing
app.use(express_1.default.json());
/**
 * Items API
 */
app.use('/items', item_routes_1.default);
// Run!
app.listen(5000, () => {
    console.log("Server running at port 5000!");
});
//# sourceMappingURL=index.js.map