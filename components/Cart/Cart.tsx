import { Button, List } from "rsuite";
import { useCartStore } from "../../stores/useCartStore";
import CartList from "./CartList";
import { useState } from "react";
import { СurrencyType } from "../../stores/models/IPayment";
import PaymentButton from "./PaymentButton";
import RadioPaymentType from "./RadioPaymentType";

interface ICartProps {
  onClose: () => void;
}

const Cart = ({ onClose }: ICartProps) => {
  const [items, removeProduct, setCountProduct] = useCartStore((state) => [
    state.products,
    state.removeProduct,
    state.setCountProduct,
  ]);
  const [paymentType, setPaymentType] = useState(СurrencyType.Dollar);

  if (items.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <h5>Корзина пуста</h5>
        <Button onClick={onClose}>Вернуться в магазин</Button>
      </div>
    );
  }
  return (
    <>
      <List bordered>
        {items.map((item) => (
          <List.Item key={item.id}>
            <CartList
              item={item}
              removeProduct={(id) => removeProduct(id)}
              setCountProduct={(productId, count) =>
                setCountProduct(productId, count)
              }
            />
          </List.Item>
        ))}
      </List>
      <div style={{ marginTop: 20 }}>
        <RadioPaymentType paymentType={paymentType} onChange={setPaymentType} />
        <PaymentButton paymentType={paymentType} onClick={onClose} />
      </div>
    </>
  );
};

export default Cart;
