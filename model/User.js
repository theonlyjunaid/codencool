const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    category: {type: String},
    subCategory: {type: String},
    companyName: {type: String},
    companyLocation: {type: String},
    linkedin: {type: String}
}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('User', UserSchema);