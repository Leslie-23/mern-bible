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
    <div className="flex justify-center font-vesper-libre">
      <form onSubmit={handleSubmit}>
        <select name="book" id="" onChange={handleChange} className="mr-8 bg-primary border-2 border-black rounded font-theme text-xl">
          <option value="">Book</option>
          {bookList}
        </select>
        <select name="chapter" id="" onChange={handleChange} className="mr-8 bg-primary border-2 border-black rounded font-theme text-xl">
          <option value="">Chapter</option>
          {chapterList}
        </select>
        <button
          className="bg-primary px-4 py-1 border-2 border-black rounded-full font-theme text-xl"
          type="submit"
          disabled={query.book === "" || query.chapter === null}
        >
          Go
        </button>
      </form>
    </div>
  );
}
