import { useState, useEffect } from "react";
export default function Text(props) {
  const [versesArray, setVersesArray] = useState([]);
  useEffect(() => {
    if (props.chapterMeta.results) {
      const dataForText = props.chapterMeta.results[0];
      const versesEntries = Object.entries(
        dataForText.verses.kjv[Number(dataForText.chapter_verse)]
      );
      setVersesArray(versesEntries);
      console.log(versesEntries.length);
    } else {
      console.log("Nothing searched for yet");
    }
  }, [props.chapterMeta]);

  const makeVersesText = (arr) => {
    const versesSpans = arr.map((v, i) => {
      return (
        <span key={i} onClick={() => handleClick(v)}>
          <strong>{v[1].verse} </strong>
          {v[1].text} &nbsp;
        </span>
      );
    });
    return versesSpans;
  };

  const handleClick = (v) => {
    console.log("click");
  };
  
  return (
    <div>
      {props.chapterMeta.results ? (
        <>
          <h1>
            {props.chapterMeta.results[0].book_name}{" "}
            {props.chapterMeta.results[0].chapter_verse}
          </h1>
          <p>{makeVersesText(versesArray)}</p>
        </>
      ) : (
        <p>No</p>
      )}
    </div>
  );
}
