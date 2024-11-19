/* eslint-disable react/prop-types */
import { IoMdSearch } from "react-icons/io";

 
const SearchBar = ({handleSearch}) => {
    return (
        <form onSubmit={handleSearch} className="flex  gap-[1px] rounded-l-md">
            <input type="text"
            placeholder="Search Products"
            name="search"
            className=" max-w-md p-[11px] border border-black rounded-l-md"
            />
            <button className="btn btn-outline rounded-l-none bg-gray-200"><IoMdSearch/></button>
        </form>
    );
};

export default SearchBar;