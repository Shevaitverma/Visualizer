import asyncHandler from "express-async-handler";
import { MongoClient } from 'mongodb';

// logic to fetch data from the mongoDB database
const getData = asyncHandler(async (req, res)=>{
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("visualizer"); // database name
        const collection = database.collection("data"); // collection name

        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        await client.close();
    }
})

export {
    getData
}