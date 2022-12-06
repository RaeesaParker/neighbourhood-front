import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div>
      <form className="search-bg">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <p>Search</p>
        <input
          className="search-input"
          placeholder="Your text here"
        ></input>
      </form>
    </div>
  );
};

export default SearchBox;
