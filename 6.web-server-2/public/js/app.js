console.log("Client side javascript file is loaded!");

// ----------------Pratice----------------------
// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//     // console.log(response);
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })

// ----------------Challenge----------------------
// ---use form to get response from weather page
const searchForm = document.querySelector("form");
const searchBox = document.querySelector("input");
const message1 = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");

console.log(searchForm);
console.log(searchBox);
// console.log(__dirname);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = searchBox.value;

  // ---use fetch to get response from weather page
  fetch(`/weather?address=${location}`).then((response) => {
    // console.log(response);
    response.json().then((data) => {
      if (data.error) {
        message1.textContent = data.error;
        message2.textContent = "";
      } else {
        message1.textContent = data.location;
        message2.textContent = data.forecast;
      }
      console.log(data);
    });
  });

  searchBox.value = "";
});
