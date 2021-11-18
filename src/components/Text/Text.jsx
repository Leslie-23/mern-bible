import { useEffect } from "react";
import { useState } from "react";
export default function Text(props) {
  const handleClick = (v) => {
    console.log("click");
  };

  console.log(props.versesObj);
  if (props.versesObj) {
    const versesEntries = Object.entries(props.versesObj);
    console.log(versesEntries);
    const verseText = versesEntries.map((v, i) => {
      return (
        <span key={i} onClick={() => handleClick(v)}>
          <strong>{v[1].verse} </strong>
          {v[1].text} &nbsp;
        </span>
      ) 
    });
    return <p>{verseText}</p>;
  } else {
    return <p>Wait...</p>
  }
}
