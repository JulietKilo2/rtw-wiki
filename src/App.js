import { useState, useEffect } from "react";
import rawData from "./Data";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [data, setData] = useState(rawData[0]);
  const [isSearchMod, setIsSearchMod] = useState(false);
  const [searchEntry, setSearchEntry] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const changeDisplay = (faction) => {
    const newFaction = rawData.find((item) => {
      return item.name === faction;
    });
    setData(newFaction);
  };

  const unitOnlyDB = [];
  rawData.forEach((item) => {
    unitOnlyDB.push(...item.units);
  });
  const temporalArr = [];

  useEffect(() => {
    unitOnlyDB.forEach((item) => {
      if (item.name.includes(searchEntry)) {
        temporalArr.push(item);
        setSearchResult(temporalArr);
      }
    });
  }, [searchEntry]);

  return (
    <div className="App">
      <Nav
        data={rawData}
        changeDisplay={changeDisplay}
        searchEntry={searchEntry}
        setSearchEntry={setSearchEntry}
        isSearchMod={isSearchMod}
        setIsSearchMod={setIsSearchMod}
      />
      {isSearchMod ? (
        <Search results={searchResult} searchEntry={searchEntry} />
      ) : (
        <Display data={data} />
      )}
    </div>
  );
}

export default App;
