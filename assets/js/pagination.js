let currentPage = 1;
const itemsPerPage = 10;
const container = document.getElementById('data-container');
const items = container.getElementsByClassName('publication');
const totalPages = Math.ceil(items.length / itemsPerPage);

function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }
    
    for (let i = start; i < end && i < items.length; i++) {
        items[i].style.display = 'block';
    }
    
    document.getElementById('page-info').textContent = `Page ${page} of ${totalPages}`;
    document.getElementById('prev-page').disabled = page === 1;
    document.getElementById('next-page').disabled = page === totalPages;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

showPage(currentPage);
