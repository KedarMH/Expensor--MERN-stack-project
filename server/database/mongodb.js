import mongoose from "mongoose";
mongoose.set('strictQuery', true);

async function connect() {
    await mongoose.connect(
        "mongodb+srv://kedar:kedar19@expensor-mern.vuyicpz.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log('MongoDB is connected');
}



export default connect;