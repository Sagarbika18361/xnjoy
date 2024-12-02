import { connectToDatabase } from "../../utils/db";
import Visitor from "../../models/Visitor";

export default async function handler(req, res) {
    const { method } = req;

    // Connect to the database
    await connectToDatabase();

    switch (method) {
        case "POST":
            try {
                const { user_id } = req.body;

                if (!user_id) {
                    return res.status(400).json({ message: "User ID is required" });
                }

                // Find visitor by user_id
                let visitor = await Visitor.findOne({ user_id });

                if (visitor) {
                    // Increment visit count
                    visitor.count += 1;
                    await visitor.save();
                    return res.status(200).json({
                        message: "Visit count updated",
                        visitor,
                    });
                } else {
                    // Create a new visitor
                    visitor = new Visitor({ user_id, count: 1 });
                    await visitor.save();
                    return res.status(201).json({
                        message: "New visitor recorded",
                        visitor,
                    });
                }
            } catch (error) {
                console.error("Error in visitor route:", error);
                res.status(500).json({ message: "Internal server error", error });
            }
            break;

        default:
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
