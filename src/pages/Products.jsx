import { useEffect, useState } from "react";
import FilterBar from "../components/products/FilterBar";
import SearchBar from "../components/SearchBar";
import SortByPrice from "../components/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../components/ProductCard";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);

    const fetch = async () => {
      axios
        .get(
          `http://localhost:4000/all-products?title=${search}&page=${page}&limit=9&sort=${sort}&brand=${brand}&category=${category}`
        )
        .then((res) => {
          setProducts(res.data.products);
          setUniqueBrand(res.data.brands);
          setUniqueCategory(res.data.categories);
          setTotalPages(Math.ceil(res.data.totalproducts / 9));
          setLoading(false);
          console.log(res.data);
        });
    };
    fetch();
  }, [search, sort, brand, category, page]);

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

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto my-4">
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
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
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
          <div className="flex justify-center items-center gap-2 my-8 w-full">
            <button disabled={ page ===1} className="btn btn-outline text-xl" onClick={() => handlePageChange(page - 1)}>
              <FaRegArrowAltCircleLeft />
            </button>
            <p>
              Page {page} of {totalPages}
            </p>
            <button className="btn btn-outline text-xl" onClick={() => handlePageChange(page + 1)}>
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
