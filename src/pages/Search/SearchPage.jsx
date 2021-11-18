import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Text from "../../components/Text/Text";

export default function Search(props) {
  const [versesObj, setVersesObj] = useState({});
  const getVersesObj = (obj) => {
    setVersesObj(obj);
  };

  useEffect(() => {});

  console.log(versesObj, "<= versesObj");

  return (
    <div>
      <h1>Search</h1>
      <SearchForm getVersesObj={getVersesObj} />
      <Text versesObj={versesObj} />
    </div>
  );
}
