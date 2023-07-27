import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Product from "./Product";
import { Placeholder } from "rsuite";

const ProductList = () => {
  const { data, isLoading } = useQuery(["carts"], () => {
    return axios("https://dummyjson.com/carts");
  });
  const carts = data?.data.carts[0].products;

  if (isLoading) {
    return <Placeholder.Paragraph style={{ marginTop: 30 }} />;
  }

  return (
    <>
      {carts?.map((x) => {
        return <Product key={x.id} cartItem={x} />;
      })}
    </>
  );
};

export default ProductList;
