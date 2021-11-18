import { useState } from "react";
import Chapters from "../../Fixtures/Chapters";
import * as searchService from "../../utils/searchService";

export default function SearchForm(props) {
  const [query, setQuery] = useState({
    book: "",
    chapter: null,
  });

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

  const chapterArray = []; // has to be done this way insead of with state to prevent too many re-renders
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
    props.getVersesObj(searchService.retrieve(query));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="book" id="" onChange={handleChange}>
          <option value="">Book</option>
          {bookList}
        </select>
        <select name="chapter" id="" onChange={handleChange}>
          <option value="chapter">Chapter</option>
          {chapterList}
        </select>
        <button
          type="submit"
          disabled={query.book === "" || query.chapter === null}
        >
          Go
        </button>
      </form>
    </div>
  );
}
