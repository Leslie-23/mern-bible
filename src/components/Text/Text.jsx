import { useState, useEffect } from "react";
import { add } from "../../utils/searchService";
import userService from "../../utils/userService";

export default function Text({ chapterMeta, loading, setLoading }) {
  const [versesArray, setVersesArray] = useState([]);
  const [addMode, toggleAddMode] = useState(false);

  const user = userService.getUser();
  console.log(user, "<= user");

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
      <span key={i} className="text-white rounded-lg hover:bg-theme-4">
        {user && addMode ? (
          <button
            className="px-2 text-theme-dark font-semibold bg-white rounded-lg transition in-expo duration-150 hover:bg-theme-light"
            onClick={() => handleAdd(v)}
          >
            + {v[1].verse}
          </button>
        ) : (
          <button disabled className="px-2 text-theme-dark font-semibold bg-white rounded-lg transition in-expo duration-150">
            {v[1].verse}
          </button>
        )}
        <span onClick={() => toggleAddMode(!addMode)} className="text-lg">
          {v[1].text}
        </span>
        &nbsp;
      </span>
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
    <div className="text-left font-theme">
      {chapterMeta && chapterMeta.results ? (
        <div>
          <h1 className="my-4 text-3xl text-white">
            {chapterMeta.results[0].book_name}{" "}
            {chapterMeta.results[0].chapter_verse}
          </h1>
          <hr />
          <br />
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
