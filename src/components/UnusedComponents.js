import { useState } from "react";

const Nav = ({
  data,
  changeDisplay,
  searchEntry,
  setSearchEntry,
  isSearchMod,
  setIsSearchMod,
  handleQuery,
  searchType,
  setSearchType,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const menuToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const cultures = data.reduce((total, curr) => {
    if (!total.includes(curr.culture)) {
      total.push(curr.culture);
    }
    return total;
  }, []);

  return (
    <nav className="nav-container">
      <h1>Rome</h1>
      <div className="line"></div>
      <h2>Total War</h2>
      <div className="nav-menu">
        <h3 onClick={() => setIsSearchMod(false)}>Browse</h3>
        <h3 onClick={() => setIsSearchMod(true)}>Search</h3>
      </div>
      {isSearchMod ? (
        <form className="search-form" onSubmit={(e) => handleQuery(e)}>
          <input
            className="search-input"
            type="text"
            value={searchEntry}
            onChange={(e) => setSearchEntry(e.target.value)}
          />
          <select
            className="search-select"
            name="search-select"
            id="search-select"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="name">name</option>
            <option value="type">type</option>
            <option value="abilities">abilities</option>
          </select>
          <button className="search-btn">Search</button>
        </form>
      ) : (
        <>
          <button className="nav-menu-btn" onClick={menuToggle}>
            {isExpanded ? "Close" : "All Factions"}
          </button>
          <div className={`faction-container ${isExpanded && "expanded"}`}>
            {cultures.map((culture, index) => {
              const groupedByCulture = data.filter((item) => {
                if (item.culture === culture) {
                  return item;
                }
              });
              return (
                <div className="faction-category" key={index}>
                  <h4>{culture}</h4>
                  {groupedByCulture.map((item) => {
                    const imgPath = `../imgs/symbols/${item.name}.png`;
                    return (
                      <div
                        className="faction-card"
                        key={item.id}
                        onClick={() => {
                          changeDisplay(item.name);
                          setIsExpanded(false);
                        }}
                      >
                        <img
                          className="faction-symbol"
                          src={imgPath}
                          alt={item.name}
                        />
                        <p className="faction-name">{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
