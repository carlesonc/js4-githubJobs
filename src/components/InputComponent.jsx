import React, { useState, useContext } from "react";
import { SearchContext } from "../context/SearchContextProvider";

export default function InputComponent({ setJobList }) {
  const [searchWord, setSearchWord] = useState("");

  const { jobContext, setJobContext } = useContext(SearchContext);

  function handleOnSearch(keyword) {
    // Replace all blanc spaces with '+'
    keyword = keyword.replaceAll(" ", "+");
    // Remove '+' at the start of string
    while (keyword.indexOf("+") === 0) {
      keyword = keyword.replace("+", "");
    }
    // Remove '+' at the end of string
    while (keyword.substring(keyword.length - 1) === "+") {
      keyword = keyword.substring(0, keyword.length - 1);
    }
    while (keyword.includes("++")) {
      keyword = keyword.replaceAll("++", "+");
    }

    if (jobContext.hasOwnProperty(keyword)) {
      setJobList(jobContext[keyword]);
    } else {
      const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${keyword}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setJobList(data);
          setJobContext({ ...jobContext, [keyword]: data });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
  return (
    <div>
      <label>Search for a job: </label>
      <input placeholder="Your job here..." onChange={(e) => setSearchWord(e.currentTarget.value)} />
      <button onClick={() => handleOnSearch(searchWord)}>🔍</button>
      <hr />
    </div>
  );
}
