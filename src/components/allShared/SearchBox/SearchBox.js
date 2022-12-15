// Design + images
import "./SearchBox.css";

// ////////////////

const SearchBox = ({
  searchTerm,
  setSearchTerm,
  setHaveNewPost,
}) => {
  // -
  // -
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(searchTerm);
    setHaveNewPost(true);
  };

  // -

  return (
    <div>
      <form
        className="search-bg"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <i className="fa-solid fa-magnifying-glass search-icon"></i>

        <input
          className="search-input"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          placeholder="Your text here"
        ></input>
        <button
          type="submit"
          className="search-submitbtn"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
