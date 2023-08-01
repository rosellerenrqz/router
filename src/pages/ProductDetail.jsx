import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <div>ProductDetail</div>
      <p className="mb-5">{params.productId}</p>
      <p>
        <Link
          to=".."
          relative="path"
          className="px-4 py-2 bg-blue-400 rounded-md hover:bg-blue-300 active:bg-blue-200">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetail;
