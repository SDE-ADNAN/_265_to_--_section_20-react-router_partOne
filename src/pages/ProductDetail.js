import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>ProductDetail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
