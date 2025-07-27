const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["developer", "admin"], default: "developer"},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
