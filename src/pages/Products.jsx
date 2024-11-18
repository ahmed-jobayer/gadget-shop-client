import { useEffect, useState } from "react";
import FilterBar from "../components/products/FilterBar";
import SearchBar from "../components/SearchBar";
import SortByPrice from "../components/SortByPrice";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetch = async () => {
      axios.get(`http://localhost:4000/all-products`).then((res) => {
        console.log(res.data);
      });
    };
    fetch();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className=" my-8 text-2xl font-semibold text-center">
        {" "}
        All Products
      </h1>
      <div className="flex justify-between items-center w-full mb-6">
        <SearchBar />
        <SortByPrice />
      </div>
      {/* content and sidebar */}
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          {" "}
          <FilterBar />
        </div>
        <div className="col-span-10">Products</div>
      </div>
    </div>
  );
};

export default Products;
