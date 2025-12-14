// Book Reader for Section 1 (Pages 1-100)
let currentPage = 1;
const totalPages = 100;

// Function to load book page
function loadBookPage(page) {
  const bookImage = document.getElementById('bookImage');
  const noImageText = document.getElementById('noImageText');
  const pageNumberElement = document.getElementById('pageNumber');
  
  // Update page number display
  pageNumberElement.textContent = page;
  document.getElementById('pageInfo').textContent = `Page ${page} of ${totalPages}`;
  
  // Try to load the image
  const imagePath = `../assets/images/page${page}.jpg`;
  bookImage.src = imagePath;
  
  // Show image when loaded, hide if failed
  bookImage.onload = function() {
    bookImage.style.display = 'block';
    noImageText.style.display = 'none';
  };
  
  bookImage.onerror = function() {
    bookImage.style.display = 'none';
    noImageText.style.display = 'block';
  };
  
  // Update button states
  document.getElementById('prevPage').disabled = (page === 1);
  document.getElementById('nextPage').disabled = (page === totalPages);
}

// Function to change page
function changePage(delta) {
  const newPage = currentPage + delta;
  if (newPage >= 1 && newPage <= totalPages) {
    currentPage = newPage;
    loadBookPage(currentPage);
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  // Load initial page
  loadBookPage(currentPage);
  
  // Add event listeners to pagination buttons
  document.getElementById('prevPage').addEventListener('click', () => {
    changePage(-1);
  });
  
  document.getElementById('nextPage').addEventListener('click', () => {
    changePage(1);
  });
});