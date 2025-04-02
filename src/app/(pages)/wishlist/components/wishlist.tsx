"use client";
const WishList = {
  id: 1,
  productName: "Test",
  productColor: "Red",
  productId: "120",
};
const WishListPage = () => {
  return (
    <div>
      <div>
        <p>Name is= {WishList.productName}</p>
        <p>Color is= {WishList.productColor}</p>
        <p>Product Id is= {WishList.productId}</p>
      </div>;
    </div>
  );
};

export default WishListPage;
