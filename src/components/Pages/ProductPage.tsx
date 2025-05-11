import React, { useEffect, useState } from "react";
import productsData from "../../data/products.json";
import Product from "../Product";
import "./ProductPage.css";
import Menu from "../Menu";
import type { ProductType } from "../../Types/OrderTypes";

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="container">
      <Menu />
      <div className="grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
