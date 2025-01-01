const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://parthrajput7281:parthraj@cluster0.blawt52.mongodb.net/Foody?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();

        const foodcaegory = await mongoose.connection.db.collection("foodcaegory").find({}).toArray();

        // Now you can process the fetched data or assign it to a global variable
        global.food_items = fetched_data;
        global.foodcaegory = foodcaegory;

        // console.log("Assigned fetched data to global.food_items:", global.food_items);
        // console.log("Assigned fetched data to global.foodcaegory:", global.foodcaegory);
    
        } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = mongoDB;
