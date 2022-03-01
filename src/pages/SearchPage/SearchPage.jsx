import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Text from "../../components/Text/Text";
import { retrieve } from "../../utils/searchService";

export default function SearchPage() {
  const [queryObj, setQueryObj] = useState({});
  const [chapterMeta, setChapterMeta] = useState({});
  const [loading, setLoading] = useState(false);

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
    <div className="mt-12 bg-primary text-center">
      <h1 className="my-8 font-theme text-white text-3xl">Search for a Bible Chapter</h1>
      <SearchForm getQueryObj={getQueryObj} setLoading={setLoading}/>
      <Text chapterMeta={chapterMeta} loading={loading} setLoading={setLoading}/>
    </div>
  );
}
