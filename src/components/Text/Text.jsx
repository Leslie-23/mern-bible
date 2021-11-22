import { useState, useEffect } from "react";
import { add } from "../../utils/searchService";
export default function Text({ chapterMeta }) {
  const [versesArray, setVersesArray] = useState([]);
  const [addMode, toggleAddMode] = useState(false);
  useEffect(() => {
    if (chapterMeta && chapterMeta.results) {
      const dataForText = chapterMeta.results[0];
      const versesEntries = Object.entries(
        dataForText.verses.kjv[Number(dataForText.chapter_verse)]
      );
      setVersesArray(versesEntries);
    } else {
      console.log("Nothing searched for yet");
    }
  }, [chapterMeta]);

  const versesSpans = versesArray.map((v, i) => {
    return (
      <>
        {addMode ? (
          <button
            className="text-primary bg-theme-dark w-6 h-6 rounded-full transition in-expo duration-150 hover:bg-theme-light"
            onClick={() => handleAdd(v)}
          >
            +
          </button>
        ) : (
          ""
        )}
        <span
          key={i}
          onClick={() => toggleAddMode(!addMode)}
          className="transition in-expo duration-150 hover:bg-theme-light"
        >
          <strong>{v[1].verse} </strong>
          {v[1].text} &nbsp;
        </span>
      </>
    );
  });

  const handleAdd = (v) => {
    add({
      book: chapterMeta.results[0].book_name,
      chapter: Number(chapterMeta.results[0].chapter_verse),
      verse: v[1].verse,
      text: v[1].text,
    });
  };

  return (
    <div className="text-left font-theme px-4">
      <br />
      {chapterMeta && chapterMeta.results ? (
        <>
          <h1 className="text-2xl">
            {chapterMeta.results[0].book_name}{" "}
            {chapterMeta.results[0].chapter_verse}
          </h1>
          <br />
          <div className="text-black text-xl">{versesSpans}</div>
        </>
      ) : (
        <p className="text-center text-xl">
          Chapter text will appear shortly after clicking "Go". <br />
          If nothing happens, refresh the page and try again.
        </p>
      )}
    </div>
  );
}
