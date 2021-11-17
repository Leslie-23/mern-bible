import { useEffect } from "react";
import { useState } from "react";
// 'Access-Control-Allow-Origin'
export default function Text(props) {
  const [resultObj, setResultObj] = useState({});
  useEffect(() => {
    const superSearchUrl = `https://api.biblesupersearch.com/api?bible=kjv&reference=${props.queryObj.book}%20${props.queryObj.chapter}`;

    fetch(superSearchUrl)
      .then((res) => res.json())
      .then((dataObj) => {
        console.log(dataObj, "<= dataObj");
        setResultObj(dataObj);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.queryObj]);

  const getVersesObj = () => {
    let versesObj = -1;
    if (resultObj.results) {
      versesObj =
        resultObj.results[0].verses.kjv[
          Number(resultObj.results[0].chapter_verse)
        ];
    } else {
      versesObj = -1;
    }
    return versesObj;
  };

  const handleClick = (v) => {
    
    console.log("click");
  };

  const versesEntries = Object.entries(getVersesObj());
  const verseText = versesEntries.map((v, i) => {
    return (
      <span key={i} onClick={() => handleClick(v)}>
        <strong>{v[1].verse} </strong>
        {v[1].text} &nbsp;
      </span>
    );
  });
  console.log(versesEntries);
  //   console.log(resultObj.results[0].verses.kjv[Number(resultObj.results[0].chapter_verse)], "<= versesObj")

  return <p>{verseText}</p>;
}
