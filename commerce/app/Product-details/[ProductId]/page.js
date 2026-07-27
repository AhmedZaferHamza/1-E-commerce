import ProductBanner from './_components/ProductBanner';
import ProductInfo from './_components/ProductInfo';
import MinProductList from './_components/MinProductList'; // استيراد المكون الخاص بالمنتجات المشابهة
import ProductApis from '../../_utils/ProductApis';
import BreadCrumb from '../../_components/BreadCrumb';

export default async function ProductDetails({ params }) {
  const { ProductId } = await params;
  const id = Number(ProductId);

  const res = await ProductApis.getLatestProducts();
  const productDetails = res?.data?.data || [];


  const currentProduct = productDetails.find((item) => item.id === id);
  const currentCategory = currentProduct?.Category;


  const similarProducts = productDetails.filter(
    (item) => item.Category === currentCategory && item.id !== id
  );

  return (
    <div className="px-10 py-8 md:px-28">
      <BreadCrumb product={productDetails} />
      
      <div className="flex flex-col items-center md:items-center md:flex-row gap-8 mt-12">
        <ProductBanner product={productDetails} productId={ProductId} />
        <ProductInfo product={productDetails} productId={ProductId} />
      </div>

      <div className="mt-16">
        <MinProductList productList={similarProducts} />
      </div>
    </div>
  );
}