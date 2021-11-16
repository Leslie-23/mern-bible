import { useState } from "react";
import Chapters from "../../Arrays/Chapters";

export default function SearchForm() {
  const [qBook, setQBook] = useState("");

  const bookList = Chapters.map((c, i) => {
    return (
      <option key={i} value={c.book}>
        {c.book}
      </option>
    );
  });

  const handleBookChange = (e) => {
    setQBook(e.target.value);
  };

  console.log(qBook);

  const bookObj = Chapters.find(({ book }) => book === qBook);
  let chapterArr = [];
  if (bookObj) {
    console.log(bookObj.chapters);
    for (let n = 1; n <= bookObj.chapters; n++) {
      chapterArr.push(n);
    }
  }

  const chapterList = chapterArr.map((n, i) => {
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
        <select name="book" id="" onChange={handleBookChange}>
          <option value="book">book</option>
          {bookList}
        </select>
        <select name="chapter" id="">
          <option value="chapter">chapter</option>
          {chapterList}
        </select>
        <button type="submit">Go</button>
      </form>
    </div>
  );
}
