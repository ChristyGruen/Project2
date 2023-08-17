const tipFormHandler = async function (event) {
  event.preventDefault();

  const topic = document.querySelector("#topic");
  const content = document.querySelector("#tip-content");

//   const response = await fetch('/api/tips', {
//     method: "POST",
//     body: JSON.stringify({
//       topic,
//       content,
//     }),
//     headers: {"Content-Type": "application/json",},
//   });


//   if (response.ok) {
//     document.location.replace("/question");
//   } else {
//     alert("Failed to create project");
//   }
// };

if (topic && content) {
  const response = await fetch(`/api/tips`, {
    method: "POST",
    body: JSON.stringify({
      topic,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/tips");
  } else {
    alert("Failed to create project");
  }
}
};


document
.querySelector('#tip-form')
.addEventListener('submit', tipFormHandler);
