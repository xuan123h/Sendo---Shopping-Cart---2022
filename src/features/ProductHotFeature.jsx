import React from "react";
import ProductHotList from "../components/ProductHot/ProductHotList";

const ProductHotFeature = () => {
  const productHotList = [
    {
      id: 1,
      image: "https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png",
      title: "Siêu nhiều hàng tốt",
      description: "Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm",
    },
    {
      id: 2,
      image: "https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png",
      title: "Siêu yên tâm",
      description: "Miễn phí đổi trả 48h",
    },
    {
      id: 3,
      image: "https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png",
      title: "Siêu tiện lợi",
      description: "Mang thế giới mua sắm của Sendo trong tầm tay bạn",
    },
    {
      id: 4,
      image: "https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png",
      title: "Siêu tiết kiệm",
      description:
        "Giá hợp lý, vừa túi tiền. Luôn có nhiều chương trình khuyến mãi",
    },
  ];
  return (
    <div className="flex items-center justify-center bg-[#ffffff] ">
      <ProductHotList productHotList={productHotList} />
    </div>
  );
};

export default ProductHotFeature;
