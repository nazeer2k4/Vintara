const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    gender: { type: String, required: true },
    name: { type: String, required: true },
    designation: { type: String },
    companyName: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true },
    productCode: { type: String },
    picture: { type: String }, // store file path or URL
    purpose: { type: String },
    quantity: { type: String },
    dfeedback: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);
