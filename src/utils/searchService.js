const retrieve = async (queryObj) => {
  try {
    const dataObj = await fetch(
      `https://api.biblesupersearch.com/api?bible=kjv&reference=${queryObj.book}%20${queryObj.chapter}`
      // triggering fetch with handleSubmit prevents wasting an API call upon mount elsewhere
    );
    const resObj = await dataObj.json();
    console.log(resObj, "<= resObj");
    return resObj;
  } catch (err) {
    console.log(err);
  }
};

const add = (verseObj) => {
  console.log(verseObj, "<= triggered by click");
}

export { retrieve, add };
