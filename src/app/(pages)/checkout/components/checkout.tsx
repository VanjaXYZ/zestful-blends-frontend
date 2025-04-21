"use client";
const CheckoutList= {
  id: 1,
  productName: "Test",
price: 10.99,};
const CheckoutListPage = () => {
  return (
    <div>
      <div>
        <p>Name is= {CheckoutList.productName}</p>
        <p>Color is= {CheckoutList.price}</p>
      </div>;
    </div>
  );
};

export default CheckoutListPage;
