import Card from "./Card";

const Display = ({ data }) => {
  const { name: factionName, units, category } = data;
  return (
    <div className="display-container">
      <header className="display-header">
        <h2>{factionName}</h2>
        <img
          className="display-faction-img"
          src={`./imgs/symbols/${factionName}.png`}
          alt={factionName}
        />
      </header>
      <div className="display-contents">
        {units.map((item) => {
          return <Card key={item.id} info={item} />;
        })}
      </div>
    </div>
  );
};

export default Display;
