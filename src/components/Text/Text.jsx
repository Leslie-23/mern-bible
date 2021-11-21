import { useState, useEffect } from "react";
import { add } from "../../utils/searchService";
export default function Text({ chapterMeta }) {
  const [versesArray, setVersesArray] = useState([]);
  const [selected, setSelected] = useState(false);
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
      <span
        key={i}
        onDoubleClick={() => handleAdd(v)}
        className="hover:bg-theme-light"
      >
        <strong>{v[1].verse} </strong>
        {v[1].text} &nbsp;
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
    <div class="text-left font-theme px-4">
      <br/>
      {chapterMeta && chapterMeta.results ? (
        <>
          <h1 className="text-2xl">
            {chapterMeta.results[0].book_name}{" "}
            {chapterMeta.results[0].chapter_verse}
          </h1>
          <br/>
          <div class="text-black">{versesSpans}</div>
        </>
      ) : (
        <p className="text-center">Chapter text will appear shortly after clicking "Go". <br/>If nothing happens, refresh the page and try again.</p>
      )}
    </div>
  );
}
