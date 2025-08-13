document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    // Prepare a plain object for non-file fields
    const fields = [
        'gender', 'name', 'designation', 'companyName', 'country',
        'email', 'productCode', 'purpose', 'quantity', 'dfeedback'
    ];
    const data = {};
    fields.forEach(field => {
        data[field] = formData.get(field);
    });

    // Combine country code and phone
    const countryCode = formData.get('countryCode') || '';
    const phone = formData.get('phone') || '';
    data.phone = countryCode + ' ' + phone;

    // Prepare FormData for fetch (file + JSON fields)
    const sendData = new FormData();
    sendData.append('picture', formData.get('picture'));
    sendData.append('formData', JSON.stringify(data));

    const responseMsg = document.getElementById('responseMsg');
    responseMsg.textContent = '';

    try {
        const res = await fetch('http://localhost:5000/api/form', {
            method: 'POST',
            body: sendData
        });

        if (res.ok) {
            responseMsg.textContent = 'Form submitted successfully!';
            form.reset();
        } else {
            responseMsg.textContent = 'Failed to submit form.';
            responseMsg.style.color = 'red';
        }
    } catch (err) {
        responseMsg.textContent = 'Error connecting to server.';
        responseMsg.style.color = 'red';
    }
});

