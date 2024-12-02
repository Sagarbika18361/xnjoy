import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema(
    {
        user_id: { type: String, required: true, unique: true },
        count: { type: Number, default: 1 },
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.models.Visitor || mongoose.model("Visitor", VisitorSchema);
