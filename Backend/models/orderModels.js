import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    books: {
        type: mongoose.Schema.Types.ObjectId,
        ref: " books"
    },
    status: {
        type: String,
        default: "order Placed",
        enum: ["Order Placed", "Out for delivery", "Deliverd", "Canceled"]
    }
}, { timestamps: true });

export const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);