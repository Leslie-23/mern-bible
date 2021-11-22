import { remove } from "../../utils/savedService";

export default function SavedVerseList({ verses, setVerses }) {
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
      <div key={i} onDoubleClick={() => handleRemove(v)}>
        <h1 className="text-2xl">
          {v.book} {v.chapter}:{v.verse}
        </h1>
        <p className="text-xl">{v.text}</p>
        <br/>
      </div>
    );
  });
  return <div>{verseList}</div>;
}
