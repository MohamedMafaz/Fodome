
const searchInput = document.getElementById('search-input');
const faqQuestions = document.querySelectorAll('.faq-question');
const searchForm = document.getElementById('search-form');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    question.nextElementSibling.classList.toggle('show-answer');
  });
});


function toggleAnswer(id) {
  var answer = document.getElementById("answer" + id);
  var toggleIcon = document.querySelector(".faq:nth-child(" + (id + 1) + ") .toggle-icon");

  if (answer.style.display === "none") {
    answer.style.display = "block";
    toggleIcon.textContent = "-";
  } else {
    answer.style.display = "none";
    toggleIcon.textContent = "+";
  }
}