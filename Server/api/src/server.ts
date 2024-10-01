import express from "express";
import { PORT } from "./util/config";
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${port}`);
})