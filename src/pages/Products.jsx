import { useEffect, useState } from "react";
import FilterBar from "../components/products/FilterBar";
import SearchBar from "../components/SearchBar";
import SortByPrice from "../components/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    setLoading(true);

    const fetch = async () => {
      axios
        .get(
          `http://localhost:4000/all-products?title=${search}&sort=${sort}&brand=${brand}&category=${category}`
        )
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        });
    };
    fetch();
  }, [search, sort, brand, category]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
    console.log(e.target.search.value);
  };

  const handleReset = () => {
    setSearch("");
    setBrand("");
    setCategory("");
    setSort("asc");
    window.location.reload();
  };

  return (
    <div className="container mx-auto">
      <h1 className=" my-8 text-2xl font-semibold text-center">
        {" "}
        All Products
      </h1>
      <div className="flex justify-between items-center w-full mb-6">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>
      {/* content and sidebar */}
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2">
          {" "}
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
          />
        </div>
        <div className="col-span-10">
          {loading ? (
            <Loading />
          ) : (
            <>
              {products.length === 0 ? (
                <div className="min-h-screen flex items-center justify-center">
                  <h1>No product found</h1>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
