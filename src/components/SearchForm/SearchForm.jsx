import { useState } from "react";
import Chapters from "../../Fixtures/Chapters";

export default function SearchForm({ getQueryObj, setLoading }) {
  const [query, setQuery] = useState({
    book: "",
    chapter: null,
  });

  const bookList = Chapters.map((c, i) => {
    return (
      <option key={i} value={c.book} className="bg-white text-theme-dark">
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
      <option key={i} value={n} className="bg-white text-theme-dark">
        {n}
      </option>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("submitted");
    getQueryObj(query);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <select
          name="book"
          id=""
          onChange={handleChange}
          className="mx-4 my-2 bg-theme-dark border-4 border-theme-light rounded-lg font-theme text-xl text-white focus:outline-none"
        >
          <option value="">Book</option>
          {bookList}
        </select>
        <select
          name="chapter"
          id=""
          onChange={handleChange}
          className="mx-4 my-2 bg-theme-dark border-4 border-theme-light rounded-lg font-theme text-xl text-white focus:outline-none"
        >
          <option value="">Chapter</option>
          {chapterList}
        </select>
        <button
          type="submit"
          style={{ height: 45.6 }}
          className="mx-4 my-2 px-4 bg-theme-light rounded-lg text-theme-dark font-theme text-xl hover:bg-theme-4 in-expo duration-150"
          disabled={query.book === "" || query.chapter === null}
        >
          Go
        </button>
      </form>
    </div>
  );
}
