import tokenService from "./tokenService";

const retrieve = async (queryObj) => {
  try {
    const dataObj = await fetch(
      `https://api.biblesupersearch.com/api?bible=kjv&reference=${queryObj.book}%20${queryObj.chapter}`,
      {
        method: "GET"
      //   mode: "no-cors",
      }
      // triggering fetch with handleSubmit prevents wasting an API call upon mount elsewhere
    );
    const resObj = await dataObj.json();
    console.log(resObj, "<= resObj");
    return resObj;
  } catch (err) {
    console.log(err);
  }
};

const add = async (verseObj) => {
  console.log(verseObj, "<= triggered by click");
  await fetch("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(verseObj),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Must be logged in to add a verse");
    }
  });
};

export { retrieve, add };
