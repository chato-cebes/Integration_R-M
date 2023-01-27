
export default function SearchBar(props) {
  const onSearch = (characterID) => window.alert(characterID);

  return (
    <div>
      <input type="search" />
      <button onClick={onSearch}>Agregar</button>
    </div>
  );
}
