// // Environmental variables for storing API keys
// const dotenv = require("dotenv").config();
// const apiKeyM = process.env.API_KEY_MERRIAM;
// const apiKeyTwo = process.env.API_KEY_TWO;

// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("dom loaded!");

  const update = (input) => {
    fetch("api/recents", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  function testApp() {
    $.ajax({
      type: "get",
      url: `https://www.dictionaryapi.com/api/v3/references/collegiate/json/snake?key=2f19cdcb-c4b2-4508-a21c-7b48e35dbd48`,
    }).then(function (response) {
      let definition = response[0].shortdef[0];
      console.log(definition);
    });
  }

  // testApp();

  // SUM of a_1, a_2, a_3, from Animaldb, take total score, from 3 to 9 and compare to table of animals
  // switch statement (Animalsdb.score = 3, fetch animal image, description from API/APIs
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9
});
