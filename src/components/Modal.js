const Modal = ({ handleModal }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-content">
          <h1>Attention!</h1>
          <p>
            The project is <span>largely complete</span> including the main
            features <span>(browsing and searching items)</span> but the
            database itself, which I built from the scratch, is not complete
            yet. The database will be <span>gradually updated.</span>
          </p>
          <h3>Planned changes:</h3>
          <ul>
            <li>
              Unified Roman faction, due to the redundance of shared units.
            </li>
            <li>
              Simplified faction menu due to categorization by culture not being
              useful.
            </li>
          </ul>
        </div>
        <button onClick={handleModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
