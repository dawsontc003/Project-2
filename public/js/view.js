// Environmental variables for storing API keys
require("dotenv").config();
const apiKeyM = process.env.API_KEY_MERRIAM;
const apiKeyTwo = process.env.API_KEY_TWO;

// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("dom loaded!");

  const nameEntry = document.getElementById("userName");

  const scoreKeeper = () => {
    fetch("api/recents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success in getting score:", data);
        animalObj = data;
        // function();
      });
    console.log(apiKeyM);
  };

  scoreKeeper();

  // SUM of a_1, a_2, a_3, from Animaldb, take total score, from 3 to 9 and compare to table of animals
  // switch statement (Animalsdb.score = 3, fetch animal image, description from API/APIs
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9
});
