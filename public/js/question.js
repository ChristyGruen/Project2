const newFormHandler = async (event) => {
  event.preventDefault();

  const topic = document.querySelector("#topic").value.trim();
  const content = document.querySelector("#question-content").value.trim();
  const answer1 = document.querySelector("#answer-1").value.trim();
  const answer2 = document.querySelector("#answer-2").value.trim();
  const answer3 = document.querySelector("#answer-3").value.trim();
  const answer4 = document.querySelector("#answer-4").value.trim();

  const answerInput1 = document.querySelector("#answer-input-1").value.trim();
  const answerInput2 = document.querySelector("#answer-input-2").value.trim();
  const answerInput3 = document.querySelector("#answer-input-3").value.trim();
  const answerInput4 = document.querySelector("#answer-input-4").value.trim();

  console.log(topic);
  console.log(content);
  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
  console.log(answer4);
  console.log(answerInput1);
  console.log(answerInput2);
  console.log(answerInput3);
  console.log(answerInput4);

  if (topic && content) {
    const response = await fetch(`/api/question`, {
      method: "POST",
      body: JSON.stringify({
        topic,
        content,
        answer1,
        answer2,
        answer3,
        answer4,
        answerInput1,
        answerInput2,
        answerInput3,
        answerInput4,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/question");
    } else {
      alert("Failed to create question");
    }
  }
};

document
  .querySelector(".new-question-form")
  .addEventListener("submit", newFormHandler);
