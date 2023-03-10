import Transaction from "../models/Transaction.js";

export const index = async (req, res) => {
    console.log(req.user._id);
    const transaction = await Transaction.find({ user_id: req.user._id }).sort({ createdAt: -1 })
    res.json({ data: transaction })
}

export const create = async (req, res) => {
    const { amount, description, date, category_id } = req.body;
    const transaction = new Transaction({
        amount,
        description,
        date,
        user_id: req.user._id,
        category_id,
    });
    await transaction.save();
    res.json({ message: "Success" });
}

export const destroy = async (req, res) => {
    await Transaction.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "Success" })
}

export const update = async (req, res) => {
    await Transaction.updateOne({ _id: req.params.id }, { $set: req.body })
    res.json({ message: "Success" })
}