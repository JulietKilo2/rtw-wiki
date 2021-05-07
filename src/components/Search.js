import Card from "./Card";

const Search = ({ results, searchEntry, searchType }) => {
  //   console.log(results);
  return (
    <div className="display-container">
      <h3 className="search-entry">
        Searching: {searchEntry} (search type: {searchType})
      </h3>
      <div className="display-contents">
        {results.map((item, index) => {
          return <Card info={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Search;
