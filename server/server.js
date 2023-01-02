import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Transaction from "./models/Transaction.js"

mongoose.set('strictQuery', true);

const PORT = 4000
const app = express();

app.use(cors())
app.use(bodyParser.json())

await mongoose.connect(
    "mongodb+srv://kedar:kedar19@expensor-mern.vuyicpz.mongodb.net/?retryWrites=true&w=majority"
);
console.log('MongoDB is connected');
// .catch((err) => console.error(err))

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.post("/transaction", async (req, res) => {
    const { amount, description, date } = req.body;
    const transaction = new Transaction({
        amount,
        description,
        date,

    })
    await transaction.save();
    res.json({ message: "Success" });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})