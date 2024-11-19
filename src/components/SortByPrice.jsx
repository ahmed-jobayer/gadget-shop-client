/* eslint-disable react/prop-types */
const SortByPrice = ({setSort}) => {
  return (
    <select className="select select-bordered w-full max-w-xs" onChange={(e)=> setSort(e.target.value)}>
      <option selected value='asc'>Low to High</option>
      <option value='desc'>High to Low</option>
    </select>
  );
};

export default SortByPrice;
