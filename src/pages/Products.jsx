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

  useEffect(() => {
    setLoading(true);

    const fetch = async () => {
      axios.get(`http://localhost:4000/all-products`).then((res) => {
        setProducts(res.data);
        setLoading(false);
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
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2">
          {" "}
          <FilterBar />
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
                    {
                        products.map(product => <ProductCard key={product.objectId} product={product}/>)
                    }
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
