const tipFormHandler = async function (event) {
  event.preventDefault();
  console.log('hello')

  const topic = document.querySelector("#topic").value;
  // const title = document.querySelector('#title')
  const content = document.querySelector("#tip-content").value;

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
      content
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/tips");
  } else {
    alert("Failed to create tip!");
  }
}
};

document
// .querySelector('#tip-form')
.querySelector("#rainbow")
.addEventListener('click', tipFormHandler);
