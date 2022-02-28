import { useState, useEffect } from "react";
import { add } from "../../utils/searchService";

export default function Text({ chapterMeta, loading, setLoading }) {
  const [versesArray, setVersesArray] = useState([]);
  const [addMode, toggleAddMode] = useState(false);
  useEffect(() => {
    if (chapterMeta && chapterMeta.results) {
      setLoading(false);
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
            className="w-6 h-6 text-theme-dark font-semibold bg-theme-light rounded-full transition in-expo duration-150 hover:bg-opacity-40"
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
          className="text-white transition in-expo duration-150 rounded-lg hover:bg-theme-4"
        >
          <sup className="font-semibold text-xl">{v[1].verse}</sup>
          <span className="mr-2 text-lg">{v[1].text}</span>
          &nbsp;
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
      {chapterMeta && chapterMeta.results ? (
        <div>
          <h1 className="my-4 text-3xl text-white">
            {chapterMeta.results[0].book_name}{" "}
            {chapterMeta.results[0].chapter_verse}
          </h1>
          <div>{versesSpans}</div>
        </div>
      ) : (
        <p className="text-center text-xl text-white">
          {loading
            ? 'If no text appears after clicking "Go", then refresh.'
            : ""}
        </p>
      )}
    </div>
  );
}
