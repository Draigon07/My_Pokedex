export default function Search({ arr, onSearch, setOnSearch }) {
  function match(txt) {
    const found = arr.filter((el) => el.name.toLowerCase().includes(txt));
    setOnSearch(found);
  }

  return (
    <div className="search_pokemon_container">
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            const cleanTxt = e.target.value.trim().toLowerCase();
            match(cleanTxt);
          }}
        ></input>
      </form>
    </div>
  );
}
