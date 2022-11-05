const mongoose = require('mongoose');
const ReferralSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,

    },
    subCategory: {
        type: String,
        required: true,

    },
    companyName: {
        type: String,
        required: true,

    },
    companyLocation: {
        type: String,
        required: true,

    },
    github: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    portfolio:{
        type: String,
    }
}, { timestamps: true });

mongoose.models = {};
export default mongoose.model('Referral', ReferralSchema);