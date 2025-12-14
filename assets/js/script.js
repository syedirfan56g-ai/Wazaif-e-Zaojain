// Sample job data
const jobs = [
  {
    id: 1,
    title: "Marketing Manager",
    company: "Tech Solutions Ltd.",
    location: "Karachi, Pakistan",
    salary: "PKR 80,000 - 120,000/month",
    datePosted: "2023-06-15",
    description: "We are looking for a dynamic marketing manager to lead our marketing team."
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Innovate Tech",
    location: "Lahore, Pakistan",
    salary: "PKR 90,000 - 140,000/month",
    datePosted: "2023-06-10",
    description: "Join our development team to create cutting-edge software solutions."
  },
  {
    id: 3,
    title: "HR Specialist",
    company: "Global Enterprises",
    location: "Islamabad, Pakistan",
    salary: "PKR 70,000 - 100,000/month",
    datePosted: "2023-06-05",
    description: "Seeking an experienced HR professional to manage our human resources."
  },
  {
    id: 4,
    title: "Financial Analyst",
    company: "Finance Plus",
    location: "Karachi, Pakistan",
    salary: "PKR 85,000 - 130,000/month",
    datePosted: "2023-06-01",
    description: "Analyzing financial data and preparing reports for executive management."
  },
  {
    id: 5,
    title: "Graphic Designer",
    company: "Creative Minds",
    location: "Lahore, Pakistan",
    salary: "PKR 60,000 - 90,000/month",
    datePosted: "2023-05-28",
    description: "Creating visually appealing designs for digital and print media."
  },
  {
    id: 6,
    title: "Sales Executive",
    company: "Market Leaders",
    location: "Islamabad, Pakistan",
    salary: "PKR 50,000 - 80,000/month + Commission",
    datePosted: "2023-05-25",
    description: "Driving sales growth through strategic client engagement."
  }
];

// Function to render job listings
function renderJobs() {
  const jobGrid = document.querySelector('.job-grid');
  jobGrid.innerHTML = '';
  
  jobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    jobCard.innerHTML = `
      <div class="job-card-header">
        <h3>${job.title}</h3>
      </div>
      <div class="job-card-body">
        <span class="company">${job.company}</span>
        <div class="location">${job.location}</div>
        <div class="salary">${job.salary}</div>
        <div class="date">Posted: ${job.datePosted}</div>
        <p>${job.description}</p>
      </div>
    `;
    jobGrid.appendChild(jobCard);
  });
}

// Function to handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  document.getElementById('contact-form').reset();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  // Add event listener to contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Add smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});