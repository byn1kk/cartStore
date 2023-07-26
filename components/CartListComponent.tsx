import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CartItemComponent from "./CartItemComponent";
import { Placeholder } from "rsuite";

const CartListComponent = () => {
  const { data, isLoading } = useQuery(["carts"], () => {
    return axios("https://dummyjson.com/carts");
  });
  const carts = data?.data.carts.map((x) => x.products).flat();

  if (isLoading) {
    return <Placeholder.Paragraph style={{ marginTop: 30 }} />;
  }

  return (
    <>
      {carts?.map((x, i) => {
        return <CartItemComponent key={i} cartItem={x} />;
      })}
    </>
  );
};

export default CartListComponent;
