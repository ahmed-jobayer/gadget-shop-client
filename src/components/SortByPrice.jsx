const SortByPrice = () => {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option selected value='asc'>Low to High</option>
      <option value='desc'>High to Low</option>
    </select>
  );
};

export default SortByPrice;
