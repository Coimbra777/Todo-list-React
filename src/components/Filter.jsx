const Filter = () => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>status:</p>
          <select>
            <option value="all">Todas</option>
            <option value="completed">Completas</option>
            <option value="incomplete">Incoompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabética</p>
          <button>Asc</button>
          <button>Des</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
