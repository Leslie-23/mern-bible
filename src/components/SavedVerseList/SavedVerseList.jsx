import { useState } from "react";
import { remove } from "../../utils/savedService";

export default function SavedVerseList({ verses, setVerses }) {
  const [removeMode, toggleRemoveMode] = useState(false);

  console.log(verses, "<= my verses");

  const handleRemove = (v) => {
    remove(v);
    let tempArray = verses.filter((verse) => verse !== v);
    console.log(tempArray);
    setVerses(tempArray);
    console.log(verses);
  };

  const verseList = verses.map((v, i) => {
    return (
      <>
        {removeMode ? (
          <button
            className="text-primary bg-theme-dark w-6 h-6 rounded-full transition ease-in-out hover:bg-theme-light"
            onClick={() => handleRemove(v)}
          >
            -
          </button>
        ) : (
          ""
        )}
        <div
          key={i}
          className="inline-block hover:bg-theme-light"
          onClick={() => toggleRemoveMode(!removeMode)}
        >
          <h1 className="text-2xl">
            {v.book} {v.chapter}:{v.verse}
          </h1>
          <p className="text-xl">{v.text}</p>
        </div>
        <br />
        <br />
      </>
    );
  });
  return <div>{verseList}</div>;
}
