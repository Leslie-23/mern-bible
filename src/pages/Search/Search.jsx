import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Text from "../../components/Text/Text";

export default function Search(props) {
  const [queryObj, setQueryObj] = useState({});

  const getQueryObj = (obj) => {
    setQueryObj(obj);
  }

  console.log(queryObj, "<= queryObj");

  return (
    <div>
      <h1>Search</h1>
      <SearchForm getQueryObj={getQueryObj}/>
      <Text queryObj={queryObj}/>
    </div>
  );
}
