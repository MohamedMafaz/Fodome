
const searchInput = document.getElementById('search-input');
const faqQuestions = document.querySelectorAll('.faq-question');
const searchForm = document.getElementById('search-form');
const navMenu = document.querySelector('#navMenu');
const hamburger = document.querySelector('#hamburger');


// searchForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const searchTerm = searchInput.value.toLowerCase();

//   faqQuestions.forEach((question) => {
//     const questionText = question.textContent.toLowerCase();

//     if (questionText.includes(searchTerm)) {
//       question.nextElementSibling.classList.add('show-answer');
//     } else {
//       question.nextElementSibling.classList.remove('show-answer');
//     }
//   });
// });

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    question.nextElementSibling.classList.toggle('show-answer');
  });
});


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    console.log("...")
})


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






