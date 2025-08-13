const Form = require('../models/model');

// POST: Save form data
exports.submitForm = async (req, res) => {
    try {
        let formData = req.body.formData;
        if (typeof formData === 'string') {
            formData = JSON.parse(formData);
        }
        const {
            gender,
            name,
            designation,
            companyName,
            phone,
            country,
            email,
            productCode,
            purpose,
            quantity,
            dfeedback
        } = formData;

        // If file uploaded, get its path
        let picture = '';
        if (req.file) {
            picture = req.file.path;
        } else if (formData.picture) {
            picture = formData.picture;
        }

        const form = new Form({
            gender,
            name,
            designation,
            companyName,
            phone,
            country,
            email,
            productCode,
            picture,
            purpose,
            quantity,
            dfeedback
        });
        await form.save();
        res.status(201).json({ success: true, message: 'Form saved' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error saving form', error: err.message });
    }
};

// GET: Get all form submissions
exports.getForms = async (req, res) => {
    try {
        const forms = await Form.find().sort({ createdAt: -1 });
        res.json(forms);
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error fetching forms', error: err.message });
    }
};
