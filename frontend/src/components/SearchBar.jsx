function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar-container">
      <span className="searchbar-icon">@</span>
      <input
        type="text"
        className="searchbar-input"
        placeholder="Buscar maquillaje..."
        value={value}

        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          className="searchbar-clear"
          onClick={() => onChange("")}
          title="Limpiar búsqueda"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;