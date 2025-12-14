// Book Reader for Section 2 (Pages 101-200)
let currentPage = 1;
const totalPages = 100;

// Function to load book page
function loadBookPage(page) {
  const bookImage = document.getElementById('bookImage');
  const noImageText = document.getElementById('noImageText');
  const pageNumberElement = document.getElementById('pageNumber');
  
  // Calculate actual page number (101-200)
  const actualPage = page + 100;
  
  // Update page number display
  pageNumberElement.textContent = actualPage;
  document.getElementById('pageInfo').textContent = `Page ${actualPage} of 200`;
  
  // Try to load the image
  const imagePath = `../assets/images/page${actualPage}.jpg`;
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