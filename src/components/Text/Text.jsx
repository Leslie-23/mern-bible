import { useState, useEffect } from "react";
import { add } from "../../utils/searchService";
export default function Text(props) {
  const [versesArray, setVersesArray] = useState([]);
  useEffect(() => {
    if (props.chapterMeta && props.chapterMeta.results) {
      const dataForText = props.chapterMeta.results[0];
      const versesEntries = Object.entries(
        dataForText.verses.kjv[Number(dataForText.chapter_verse)]
      );
      setVersesArray(versesEntries);
    } else {
      console.log("Nothing searched for yet");
    }
  }, [props.chapterMeta]);

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
      book: props.chapterMeta.results[0].book_name,
      chapter: Number(props.chapterMeta.results[0].chapter_verse),
      verse: v[1].verse,
      text: v[1].text,
    });
  };

  return (
    <div>
      {props.chapterMeta && props.chapterMeta.results ? (
        <>
          <h1>
            {props.chapterMeta.results[0].book_name}{" "}
            {props.chapterMeta.results[0].chapter_verse}
          </h1>
          <p>{versesSpans}</p>
        </>
      ) : (
        <p>Search for a Bible chapter</p>
      )}
    </div>
  );
}
