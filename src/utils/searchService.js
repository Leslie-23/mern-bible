const retrieve = (query) => {
  fetch(
    `https://api.biblesupersearch.com/api?bible=kjv&reference=${query.book}%20${query.chapter}`
    // placing fetch in handleSubmit prevents wasting an API call upon mount elsewhere
  )
    .then((res) => res.json())
    .then((dataObj) => {
      console.log(dataObj.results[0].verses.kjv[query.chapter]);
      return dataObj.results[0].verses.kjv[query.chapter];
    })
    .catch((err) => {
      console.log(err);
    });
};

export { retrieve };
