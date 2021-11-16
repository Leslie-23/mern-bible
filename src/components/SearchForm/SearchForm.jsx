import { useEffect, useState } from "react";
import Chapters from "../../Arrays/Chapters";

export default function SearchForm() {
  const [query, setQuery] = useState({
    book: "",
    chapter: null,
  });

  //   const [chapterArray, setChapterArray] = useState([]);

  const bookList = Chapters.map((c, i) => {
    return (
      <option key={i} value={c.book}>
        {c.book}
      </option>
    );
  });

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  console.log(query.book, "<= query.book");
  console.log(query.chapter, "<= query.chapter");

  const chapterArray = [];
  const bookObj = Chapters.find(({ book }) => book === query.book);
  if (bookObj) {
    console.log(bookObj.chapters, "<= bookObj.chapters");
    for (let n = 1; n <= bookObj.chapters; n++) {
      chapterArray.push(n);
    }
  }

  const chapterList = chapterArray.map((n, i) => {
    return (
      <option value={n} key={i}>
        {n}
      </option>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div>
      <h1>SearchForm go here</h1>
      <form action="" onSubmit={handleSubmit}>
        <select name="book" id="" onChange={handleChange}>
          <option value="book">book</option>
          {bookList}
        </select>
        <select name="chapter" id="" onChange={handleChange}>
          <option value="chapter">chapter</option>
          {chapterList}
        </select>
        <button type="submit">Go</button>
      </form>
    </div>
  );
}
