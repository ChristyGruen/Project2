const newFormHandler = async (event) => {
  event.preventDefault();

  const topic = document.querySelector("#topic").value.trim();
  const content = document.querySelector("#question-content").value.trim();
  const answer1 = document.querySelector("#answer1").value.trim();
  const answer2 = document.querySelector("#answer2").value.trim();
  const answer3 = document.querySelector("#answer3").value.trim();
  const answer4 = document.querySelector("#answer4").value.trim();

  if (topic && content && answer1 && answer2 && answer3 && answer4) {
    const response = await fetch(`/api/question`, {
      method: "POST",
      body: JSON.stringify({
        topic,
        content,
        answer1,
        answer2,
        answer3,
        answer4,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/question");
    } else {
      alert("Failed to create project");
    }
  }
};

//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');

//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };

document
  .querySelector(".form new-question-form")
  .addEventListener("submit", newFormHandler);

//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
