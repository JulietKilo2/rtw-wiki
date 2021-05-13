import { useState, useEffect } from "react";
import rawData from "./Data";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [data, setData] = useState(rawData[0]);
  const [isSearchMod, setIsSearchMod] = useState(false);
  const [searchEntry, setSearchEntry] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchType, setSearchType] = useState("name");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const unitOnlyDB = [];
  rawData.forEach((item) => {
    unitOnlyDB.push(...item.units);
  });

  const temporalArr = [];

  const handleModal = () => {
    setIsModalOpen(false);
  };

  const changeDisplay = (faction) => {
    const newFaction = rawData.find((item) => {
      return item.name === faction;
    });
    setData(newFaction);
  };

  const handleQuery = (e) => {
    e.preventDefault();
    searchFunction();
  };

  const getKeywords = (array) => {
    // const newArr = [...array[0].attrs, ...array[1].attrs];
    const edit = [];
    const final = [];
    array.forEach((item) => {
      edit.push(item.split(" "));
    });
    for (let i = 0; i < edit.length; i++) {
      final.push(...edit[i]);
    }
    return final;
  };

  const searchFunction = () => {
    if (searchEntry === "") {
      setSearchResult([]);
      return;
    } else if (searchType === "abilities") {
      unitOnlyDB.forEach((item) => {
        const abilities = [
          ...item.abilities[0].attrs,
          ...item.abilities[1].attrs,
        ];
        const sorted = getKeywords(abilities);
        if (sorted.includes(searchEntry)) {
          temporalArr.push(item);
          setSearchResult(temporalArr);
        }
        return;
      });
    } else {
      unitOnlyDB.forEach((item) => {
        if (item[searchType].includes(searchEntry)) {
          temporalArr.push(item);
          setSearchResult(temporalArr);
        }
      });
    }
  };

  useEffect(() => {
    searchFunction();
  }, [searchEntry]);

  useEffect(() => {
    setSearchEntry("");
  }, [searchType]);

  return (
    <div className="App">
      {isModalOpen && <Modal handleModal={handleModal} />}
      <Nav
        data={rawData}
        changeDisplay={changeDisplay}
        searchEntry={searchEntry}
        setSearchEntry={setSearchEntry}
        isSearchMod={isSearchMod}
        setIsSearchMod={setIsSearchMod}
        handleQuery={handleQuery}
        searchType={searchType}
        setSearchType={setSearchType}
      />
      {isSearchMod ? (
        <Search
          results={searchResult}
          searchEntry={searchEntry}
          searchType={searchType}
        />
      ) : (
        <Display data={data} />
      )}
    </div>
  );
}

export default App;
