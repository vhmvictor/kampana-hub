const database = require("mime-db");
const mongoose = require("../database");

const LeadSchema = new mongoose.Schema({
    rd_id: {
        type: Number,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    personal_phone: {
        type: Number,
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

const Lead = mongoose.model("Lead", LeadSchema);

module.exports = Lead;