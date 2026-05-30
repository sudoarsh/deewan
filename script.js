document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = ''; 
    
    deewanData.forEach(row => {
        if (!row.id) return;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="id-col">${row.id}</td>
            <td class="urdu-text col-BL">${row.BL}</td>
            <td class="urdu-text col-TO">${row.TO}</td>
            <td class="urdu-text col-SJ">${row.SJ}</td>
            <td class="urdu-text col-GM">${row.GM}</td>
        `;
        tbody.appendChild(tr);
    });

    const checkboxes = document.querySelectorAll('.col-toggle');
    checkboxes.forEach(box => {
        box.addEventListener('change', function() {
            const columnClass = 'col-' + this.value;
            const elements = document.querySelectorAll('.' + columnClass);
            elements.forEach(el => {
                if (this.checked) {
                    el.classList.remove('hide-col');
                } else {
                    el.classList.add('hide-col');
                }
            });
        });
    });
});