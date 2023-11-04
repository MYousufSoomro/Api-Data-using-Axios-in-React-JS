import { useState, useEffect } from "react";
import axios from "axios";
import MUIAppBar from "./components/Appbar";
import Card from "./components/Card";
import LinearLoading from "./components/LinearLoading";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");

      setProductsData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  // console.log(productsData);

  return (
    <div>
      <MUIAppBar cartCount={cartCount} />
      {isLoading && <LinearLoading />}

      {!isLoading && (
        <div className="row" style={{ whiteSpace: "wrap" }}>
          {productsData.map((product, index) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.image}
              category={product.category}
              price={product.price}
              description={product.description}
              rating={product.rating.rate}
              reviewsCount={product.rating.count}
              onClickAddCart={() => setCartCount((prev) => prev + 1)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
