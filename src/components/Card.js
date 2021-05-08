const Card = ({ info, category }) => {
  const {
    ammo,
    armour,
    charge,
    def_skill,
    melee,
    missile,
    morale,
    name,
    range,
    shield,
    total_def,
    type,
    abilities,
    faction,
  } = info;
  const unitImgPath = `./imgs/units/${faction}/${name}.png`;
  const factionImgPath = `./imgs/symbols/${faction}.png`;
  return (
    <div className="unit-card">
      <div className="unit-name">
        <h3>{name}</h3>
        <img className="unit-faction" src={factionImgPath} alt={faction} />
      </div>
      <div className="card-inner-wrapper">
        <div className="card-img-container">
          <img className="unit-img" src={unitImgPath} alt={name} />
        </div>
        <div className="card-info">
          <p>morale: {morale}</p>
          <p>melee: {melee}</p>
          <p>charge bonus: {charge}</p>
          <p>{missile ? `missile: ${missile}` : ""}</p>
          <p>{range ? `range: ${range}` : ""}</p>
          <p>total defense: {total_def}</p>
          <p>armour: {armour}</p>
          <p>defense skill: {def_skill}</p>
          <p>shield: {shield}</p>
        </div>
        <div className="card-attr">
          <h4>at a glance</h4>
          {abilities[0].attrs.map((item, index) => {
            return (
              <p key={index}>
                <span className="symbol-pro">&#9650;</span>
                {item}
              </p>
            );
          })}
          {abilities[1].attrs.map((item, index) => {
            return (
              <p key={index}>
                {" "}
                <span className="symbol-con"> &#9660;</span>
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
