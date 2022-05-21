import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const SendoProductFather = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://6278f089d00bded55ae17142.mockapi.io/sendo/product"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setProducts(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <div>Loading ...</div>;
  };
  const ShowProducts = () => {
    return (
      <ul className="lg:mt-4 lg:ml-4 grid lg:grid-cols-5 gap-x-1 gap-y-4 grid-cols-1 ml-12 mt-3">
        {products.slice(0, 20).map((productItem) => (
          <li
            key={productItem.id}
            className="w-[220px] h-[458px] p-2 item bg-[#FFFFFF] group-item hover:-translate-y-2 transition-all"
          >
            <ProductItem productItem={productItem} />
          </li>
        ))}
      </ul>
    );
  };
  return <>{loading ? <Loading /> : <ShowProducts />}</>;
};

export default SendoProductFather;
