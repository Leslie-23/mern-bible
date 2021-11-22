import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Text from "../../components/Text/Text";
import { retrieve } from "../../utils/searchService";

export default function SearchPage() {
  const [queryObj, setQueryObj] = useState({});
  const [chapterMeta, setChapterMeta] = useState({});

  const getQueryObj = (obj) => {
    setQueryObj(obj);
  };

  useEffect(() => {
    if (queryObj && queryObj.book && queryObj.chapter) {
      // if statement prevents wasting an API call upon mount or refresh
      retrieve(queryObj).then((data) => setChapterMeta(data));
    }
  }, [queryObj]);

  console.log(chapterMeta, "<= chapterMeta");

  return (
    <div className="bg-primary text-center">
      <h1 className="font-theme text-3xl">Search for a Bible Chapter</h1>
      <br />
      <SearchForm getQueryObj={getQueryObj} />
      <Text chapterMeta={chapterMeta} />
    </div>
  );
}
