import Card from "./Card";

const Search = ({ results, searchEntry }) => {
  console.log(results);
  return (
    <div className="display-container">
      <h3 className="search-entry">Search Entry: {searchEntry}</h3>
      <div className="display-contents">
        {results.map((item, index) => {
          return <Card info={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Search;
