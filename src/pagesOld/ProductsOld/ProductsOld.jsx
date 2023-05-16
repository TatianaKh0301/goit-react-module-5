import { useSearchParams } from "react-router-dom";
import { ProductListOld } from "components/ProductListOld/ProductListOld";
import { SearchBox } from "components/SearchBox/SearchBox";
import { getProducts } from "fakeAPI";

const ProductsOld = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";
  console.log("productName", productName);
  
  const visibleProducts = products.filter((product) => 
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? {name} : {};
    setSearchParams(nextParams);
  }

    return (
        <main>
          <SearchBox value={productName} onChange = {updateQueryString} /> 
          <ProductListOld products={visibleProducts}/>
        </main>
    );
}

export default ProductsOld;