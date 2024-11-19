/* eslint-disable react/prop-types */
import { GrPowerReset } from "react-icons/gr";
import { TbFilter } from "react-icons/tb";

const FilterBar = ({setBrand, setCategory, handleReset}) => {
  return (
    <div className=" bg-gray-200 h-full min-h-screen p-4 rounded-t-lg">
      <div className="flex items-center gap-1">
        <TbFilter className="text-xl" />
        <h2 className="text-xl font-semibold">Filters</h2>
      </div>
      <div  className="my-4 flex flex-col gap-4">
        <div>
          <select className="select select-bordered w-full max-w-xs"
          onChange={(e) => setBrand(e.target.value)}
          >
            <option selected disabled>
              Brand
            </option>
            <option value="">High to Low</option>
          </select>
        </div>
        <div>
          <select className="select select-bordered w-full max-w-xs"
          onChange={(e) => setCategory(e.target.value)}
          >
            <option selected disabled>
              Category
            </option>
            <option value="">High to Low</option>
          </select>
        </div>
      </div>
      <button onClick={handleReset} className="btn btn-outline w-full text-lg"><GrPowerReset/> Reset</button>
    </div>
  );
};

export default FilterBar;
