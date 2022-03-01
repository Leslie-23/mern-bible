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
        <div>
          {removeMode ? (
            <button
              className="text-theme-dark font-semibold bg-theme-light w-6 h-6 rounded-full transition in-expo duration-150 hover:bg-theme-4"
              onClick={() => handleRemove(v)}
            >
              -
            </button>
          ) : (
            ""
          )}
          <div
            key={i}
            className="transition in-expo duration-150 rounded hover:bg-theme-4"
            onClick={() => toggleRemoveMode(!removeMode)}
          >
            <h1 className="inline-flex text-2xl text-white">
              {v.book} {v.chapter}:{v.verse}
            </h1>
            <p className="text-xl text-white">{v.text}</p>
          </div>
        </div>
        <br />
      </>
    );
  });
  return <div>{verseList}</div>;
}
