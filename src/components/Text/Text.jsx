import { useState, useEffect } from "react";
import { add } from "../../utils/searchService";
export default function Text({ chapterMeta }) {
  const [versesArray, setVersesArray] = useState([]);
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
      <span key={i} onClick={() => handleClick(v)}>
        <strong>{v[1].verse} </strong>
        {v[1].text} &nbsp;
      </span>
    );
  });

  const handleClick = (v) => {
    add({
      book: chapterMeta.results[0].book_name,
      chapter: Number(chapterMeta.results[0].chapter_verse),
      verse: v[1].verse,
      text: v[1].text,
    });
  };

  return (
    <div>
      {chapterMeta && chapterMeta.results ? (
        <>
          <h1>
            {chapterMeta.results[0].book_name}{" "}
            {chapterMeta.results[0].chapter_verse}
          </h1>
          <div class="text-black">{versesSpans}</div>
        </>
      ) : (
        <p>Search for a Bible chapter</p>
      )}
    </div>
  );
}
