/* eslint-disable react/prop-types */

const ProductCard = ({product}) => {
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <div className="flex justify-between items-center">
            <h3>{product.brand}</h3>
            <h3>{product.category}</h3>
          </div>
          <div className="flex justify-between items-center">
            <h3>{product.price}</h3>
            <h3>{product.stock}</h3>
          </div>
          <p>{product.description.length > 50 ? `${product.description.slice(0,50)} ...`: product.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline w-full">Add to Wishlist</button>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;