const faqData = [
  {
    id: 1,
    question: 'Who are we?',
    answer:
      'We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.',
  },
  {
    id: 2,
    question: 'What do we do?',
    answer:
      'Building learning communities with Our Affordable & Competent Courses',
  },
  {
    id: 3,
    question: 'Are the community classes boring?',
    answer: 'No, not at all!!!',
  },
];

const accordianBody = document.querySelector(".accordian_body");

function createFaq() {
  for (const faqs of faqData) {
    
    // creating elements
    const faqDiv = document.createElement('div');
    const faqHeader = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    // adding class
    faqDiv.classList.add('faqDiv');
    faqHeader.classList.add('faqHeader');
    p.classList.add('hidden');
    btn.classList.add('btn');

    // updating innnetext
    h3.innerText = faqs.question;
    p.innerText = faqs.answer;
    btn.innerText = '+';

    // appending elements
    faqHeader.append(h3);
    faqHeader.append(btn);
    faqDiv.append(faqHeader);
    faqDiv.append(p);
    accordianBody.append(faqDiv);

    // Btn functionality
    btn.addEventListener('click', () => {
      p.classList.toggle('hidden');
    });
  }
}

createFaq();



