export default function SavedVerseList({ verses }) {
  console.log(verses, "<= my verses");

  const handleDelete = (v) => {};

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
