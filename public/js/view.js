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
});
