import { IoSearchSharp } from "react-icons/io5";
const SearchBox = ({ search, setSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button>
        <IoSearchSharp />
      </button>
    </div>
  );
};

export default SearchBox;
