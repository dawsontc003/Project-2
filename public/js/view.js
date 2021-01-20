// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("dom loaded!");

  // const update = (input) => {
  //   fetch("api/questions", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(input),
  //   })
  //     .then(() => {
  //       window.location.reload();
  //     })
  //     .catch((err) => console.error(err));
  // };

  const score = () => {
    console.log("js script working");
    console.log("-----------------");
    totalScore = [];
    const playerName = "AppPost";
    const submitQ1 = document.getElementById("submit");
    $('.resultscore1 input[type="radio"]').click(function () {
      const answervalue1 = $(this).val();
      submitQ1.addEventListener("click", () => {
        console.log(answervalue1);
        totalScore.push(answervalue1);
      });
    });
    $('.resultscore2 input[type="radio"]').click(function () {
      const answervalue2 = $(this).val();
      submitQ1.addEventListener("click", () => {
        console.log(answervalue2);
        totalScore.push(answervalue2);
      });
    });
    $('.resultscore3 input[type="radio"]').click(function () {
      const answervalue3 = $(this).val();
      submitQ1.addEventListener("click", () => {
        console.log(answervalue3);
        totalScore.push(answervalue3);
        console.log(totalScore);
        console.log(playerName);
        const sum = (numOne, numTwo, numThree) => numOne + numTwo + numThree;
        const addCallBacks = (functionOne) =>
          functionOne(
            parseInt(totalScore[0]),
            parseInt(totalScore[1]),
            parseInt(totalScore[2])
          );
        let combinedScore = addCallBacks(sum);
        console.log(combinedScore);
        console.log("-------------separation for fetchpost---------------");
        let dataPost = {
          name: playerName,
          a_1: totalScore[0],
          a_2: totalScore[1],
          a_3: totalScore[2],
          score: combinedScore,
        };
        console.log(dataPost);
        fetch(`/api/questions`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataPost),
        })
          .then(() => {
            // Reload the page
            // window.location.reload();
          })
          .catch((err) => console.error(err));
        console.log("post made");
      });
    });
  };
  score();

  // const start = () => {
  //   fetch("api/questions", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   }).catch((err) => console.error(err));
  // };
  // const startButton = document.getElementById("button");
  // $(".start").click(function () {
  //   startButton.addEventListener("click", () => {
  //     start();
  //   });
  // });

  const animalImage = () => {};

  const animalDescription = () => {
    fetch("/api/results:id", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        // window.location.reload();
      })
      .catch((err) => console.error(err));
  };
});
