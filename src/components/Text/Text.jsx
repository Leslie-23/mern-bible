import { useEffect } from "react";
import { useState } from "react";
export default function Text(props) {
  const [dataForText, setDataForText] = useState({});
  useEffect(() => {
    if (props.chapterMeta.results) {
      setDataForText(props.chapterMeta.results[0]);
    } else {
      return;
    }
  }, [props.chapterMeta]);

  console.log(dataForText);
  // }, [props.chapterMeta.results]);
  // props.chapterMeta.results !== undefined
  //   ? console.log(props.chapterMeta.results[0])
  //   : console.log("nothing");
  // // setDataForText(props.chapterMeta.results);

  // console.log(dataForText, "<= dataForText");

  // const handleClick = (v) => {
  //   console.log("click");
  // };

  // if (dataForText.verses) {
  //   const versesEntries = Object.entries(dataForText.verses.kjv);
  //   console.log(versesEntries, "<= versesEntries");
  // }
  //   const chapterText = versesEntries.map((v, i) => {
  //     return (
  //       <span key={i} onClick={() => handleClick(v)}>
  //         <strong>{v[1].verse} </strong>
  //         {v[1].text} &nbsp;
  //       </span>
  //     )
  //   });
  //   return <p>{verseText}</p>;
  // } else {
  //   return <p>Wait...</p>
  // }
  return (
    <div>
      <h1>{/* {dataForText.book_name} {dataForText.chapter_verse} */}</h1>
      <p>{props.chapterMeta.results ? "Yes" : "ChapterText"}</p>
      
    </div>
  );
}
