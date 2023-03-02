import { MongoClient } from "mongodb";

export default async function handler(req, res) {
	// MongoDB
	const client = await MongoClient.connect(
		`mongodb+srv://qlquansume:${process.env.mongodb_password}@${process.env.mongodb_clustername}.aj0zbaj.mongodb.net/?retryWrites=true&w=majority`
	);

	if (req.method === "GET") {
		let today = new Date();
		const userCountTimestamp = Date.now();
		const userCountTime = new Date(userCountTimestamp);
		const KST = today.toLocaleString();
		console.log(userCountTimestamp);
		console.log(userCountTime);
		var db;
		db = client.db("preLuanch");
		const result = await db.collection("homeVisitorNumber").insertOne({
			type: "home",
			timestamp: userCountTimestamp,
			time: userCountTime,
		});
		res.status(201).json({
			message: "user visit to home",
			timestamp: userCountTimestamp,
			time: userCountTime,
			KST: KST,
		});
	}
	client.close();
}
