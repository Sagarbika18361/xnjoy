import { connectToDatabase } from "@/utils/db"; // Helper to connect to MongoDB
import Visitor from "@/models/Visitor.model"; // Mongoose model for Visitor

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { user_id } = body;

    if (!user_id) {
      return new Response(JSON.stringify({ message: "User ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Connect to the database
    await connectToDatabase();

    // Check if the user already exists
    let visitor = await Visitor.findOne({ user_id });

    if (visitor) {
      // Increment the visit count
      visitor.count += 1;
      await visitor.save();
      return new Response(
        JSON.stringify({
          message: "Visit count updated",
          visitor,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      // Create a new visitor
      visitor = new Visitor({ user_id, count: 1 });
      await visitor.save();
      return new Response(
        JSON.stringify({
          message: "New visitor recorded",
          visitor,
        }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Error handling visitor:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
