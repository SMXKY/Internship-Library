import searchIcon from "../../images-and-icons/search.png";
export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search" className="search-bar" />
      <button className="search-btn">
        <img src={searchIcon} alt="search-icon" className="header-icon" />
      </button>
    </div>
  );
}
