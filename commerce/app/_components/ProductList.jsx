import ProductItem from "./ProductItem";
function ProductList({ productList }) {
  return (
    <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-2 sm:p-4">
      {productList.map((item) => (
        <div key={item.id}>
          <ProductItem product={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
