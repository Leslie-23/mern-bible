import { remove } from "../../utils/savedService";

export default function SavedVerseList({ verses, setVerses }) {
  console.log(verses, "<= my verses");

  const handleDelete = (v) => {
    remove(v);
    let tempArray = verses.filter((verse) => verse !== v);
    console.log(tempArray);
    setVerses(tempArray);
    console.log(verses);
  };

  const verseList = verses.map((v, i) => {
    return (
      <div key={i} onClick={() => handleDelete(v)}>
        <h1>
          {v.book} {v.chapter} {v.verse}
        </h1>
        <p>{v.text}</p>
      </div>
    );
  });
  return <div>{verseList}</div>;
}
