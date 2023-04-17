const searchInput = document.getElementById('search-input');
const faqQuestions = document.querySelectorAll('.faq-question');
const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value.toLowerCase();

  faqQuestions.forEach((question) => {
    const questionText = question.textContent.toLowerCase();

    if (questionText.includes(searchTerm)) {
      question.nextElementSibling.classList.add('show-answer');
    } else {
      question.nextElementSibling.classList.remove('show-answer');
    }
  });
});

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    question.nextElementSibling.classList.toggle('show-answer');
  });
});






