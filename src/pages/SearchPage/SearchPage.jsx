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
    <div class="bg-primary text-center">
      <h1 class="font-theme text-2xl">Search for a Bible chapter</h1>
      <br />
      <SearchForm getQueryObj={getQueryObj} />
      <Text chapterMeta={chapterMeta} />
    </div>
  );
}
