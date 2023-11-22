const mongoose = require("mongoose");
console.log(process.env.MONGO_URL)
async function connectToMongoDB() {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            writeConcern: { w: 'majority' }
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw new Error("Error connecting to MongoDB");
    }
}

connectToMongoDB();
