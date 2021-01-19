require("dotenv").config();
const apiKeyM = process.env.API_KEY_MERRIAM;
const apiKeyP = process.env.API_KEY_PEXELS;

const axios = require("axios").default;
const pexels = require("pexels").createClient;
const client = pexels(apiKeyP);

module.exports = () => {
  const Merriam = (searchTerm) => {
    axios
      .get(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchTerm}?key=${apiKeyM}`
      )
      .then((response) => {
        console.log(response.data[0].shortdef[0]);
        console.log(response.headers);
      });
  };

  const imageApi = (searchImage) => {
    client.photos
      .search({
        query: searchImage,
        per_page: 1,
      })
      .then((photos) => {});
  };
};

// const imageApi = (searchImage) => {
//   axios
//     .get(`https://api.pexels.com/v1/search?query=${searchImage}`, {
//       headers: { Authorization: apiKeyP },
//     })
//     .then((response) => {
//       console.log(response.data);
//       console.log(response.headers);
//     });
// };

// const imageApi = (searchImage) => {
//   client.photos
//     .search({
//       query: searchImage,
//       per_page: 1,
//     })
//     .then((photos) => {});
// };

// const pic = "Nature";
// imageApi(pic);
