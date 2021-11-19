import { useEffect, useState } from "react";
import { index } from "../../utils/savedService";
import SavedVerseList from "../../components/SavedVerseList/SavedVerseList";

export default function SavedPage() {
  const [verses, setVerses] = useState([]);

  const getVersesArray = async() => {
    try {
      const versesObj = await index();
      console.log(versesObj)
      setVerses(versesObj.verses)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getVersesArray();
  }, []);

  return (
    <div>
      <h1>My Saved Verses</h1>
      <SavedVerseList verses={verses}/>
    </div>
  );
}
