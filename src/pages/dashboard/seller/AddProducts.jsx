import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const AddProducts = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data)
    const title = data.title;
    const brand = data.brand;
    const price = data.price;
    const stock = data.stock;
    const category = data.category;
    const description = data.description;
    const email = user.email;
  };

  //   title
  // brand
  // price
  // stock
  // selleremail
  // category
  // description

  return (
    <div>
      <h1 className="text-center font-bold text-3xl"> Add Products</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Product Title"
              className="input input-bordered"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-red-500 text-sm font-light">
                Title is required
              </p>
            )}
          </div>
          {/* brand and category */}
          <div className="grid grid-cols-2 gap-12">
            {/* brand */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                placeholder="Brand Name"
                className="input input-bordered"
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <p className="text-red-500 text-sm font-light">
                  Brand is required
                </p>
              )}
            </div>
            {/* category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Product Category"
                className="input input-bordered"
                {...register("category", { required: true })}
              />
              {errors.category && (
                <p className="text-red-500 text-sm font-light">
                  Title is required
                </p>
              )}
            </div>
          </div>
          {/* price and Stock */}
          <div className="grid grid-cols-2 gap-12">
            {/* price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Product Price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-red-500 text-sm font-light">
                  Price is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                placeholder="Product Title"
                className="input input-bordered"
                {...register("stock", { required: true })}
              />
              {errors.stock && (
                <p className="text-red-500 text-sm font-light">
                  Stock is required
                </p>
              )}
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
