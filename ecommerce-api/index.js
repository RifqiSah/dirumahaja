const express = require("express");
const app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`<h1>Hello, ${req.user.name}!</h1>`);
});

app.use((req, res, next) => {
    req.user = {
        id: 1,
        name: 'Rifqi'
    };

    next();
});
app.use(router);

app.listen(5000, () => {
    console.log("Server running at port 5000!");
});