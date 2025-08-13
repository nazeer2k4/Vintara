// Function to fetch and display forms
async function fetchForms() {
    const tbody = document.getElementById('formsTableBody');
    tbody.innerHTML = '<tr><td colspan="14">Loading...</td></tr>';
    try {
        const res = await fetch('http://localhost:5000/api/form');
        if (res.ok) {
            const data = await res.json();
            if (!data.length) {
                tbody.innerHTML = '<tr><td colspan="14">No submissions yet.</td></tr>';
                return;
            }
            tbody.innerHTML = data.map((form, idx) => `
                <tr>
                    <td>${idx + 1}</td>
                    <td>${form.gender || ''}</td>
                    <td>${form.name || ''}</td>
                    <td>${form.designation || ''}</td>
                    <td>${form.companyName || ''}</td>
                    <td>${form.phone || ''}</td>
                    <td>${form.country || ''}</td>
                    <td>${form.email || ''}</td>
                    <td>${form.productCode || ''}</td>
                    <td>${form.quantity || ''}</td>
                    <td>${form.purpose || ''}</td>
                    <td>${form.dfeedback || ''}</td>
                    <td>${form.createdAt ? new Date(form.createdAt).toLocaleString() : ''}</td>
                </tr>
            `).join('');
        } else {
            tbody.innerHTML = '<tr><td colspan="14">Error loading data.</td></tr>';
        }
    } catch {
        tbody.innerHTML = '<tr><td colspan="14">Error connecting to server.</td></tr>';
    }
}

window.addEventListener('DOMContentLoaded', fetchForms);