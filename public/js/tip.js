// const tipFormHandler = async function(event) {
//   event.preventDefault();

//   const topic = document.querySelector("#topic").value.trim();
//   const content = document.querySelector("#tip-content").value.trim();
  
//   if (topic && content){
//     const response = await fetch(`/api/tips`, (
//       method: "POST",
//       body: JSON.stringify({
//         topic, 
//         content,
//       }),
//     ))
//   }
// }