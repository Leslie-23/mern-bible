import { useState } from "react";
import Chapters from "../../Fixtures/Chapters";

export default function SearchForm({ getQueryObj }) {
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
    getQueryObj(query);
  };

  return (
    <div class="flex justify-center">
      <form onSubmit={handleSubmit}>
        <select name="book" id="" onChange={handleChange} class="mr-8">
          <option value="">Book</option>
          {bookList}
        </select>
        <select name="chapter" id="" onChange={handleChange} class="mr-8">
          <option value="chapter">Chapter</option>
          {chapterList}
        </select>
        <button
          class="bg-white px-4"
          type="submit"
          disabled={query.book === "" || query.chapter === null}
        >
          Go
        </button>
      </form>
    </div>
  );
}
