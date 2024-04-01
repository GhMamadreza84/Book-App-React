import { IoSearchSharp } from "react-icons/io5";
const SearchBox = ({search,setSearch}) => {
  return (
    <div>
      <input type="text" placeholder="Search Title" />
      <button>
        <IoSearchSharp />
      </button>
    </div>
  );
};

export default SearchBox;
