import { useEffect, useState } from "react";
import { index } from "../../utils/savedService";
import SavedVerseList from "../../components/SavedVerseList/SavedVerseList";

export default function SavedPage() {
  const [verses, setVerses] = useState([]);
  useEffect(() => {
    getVersesArray();
  }, []);

  const getVersesArray = async () => {
    try {
      const versesObj = await index();
      console.log(versesObj);
      setVerses(versesObj.verses);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center">My Saved Verses</h1>
      <SavedVerseList verses={verses} setVerses={setVerses} />
    </div>
  );
}
