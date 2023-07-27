import { Button, RadioTile, RadioTileGroup } from "rsuite";
import { useCartStore } from "../../stores/useCartStore";
import CartList from "./CartList";
import { Icon } from "@rsuite/icons";
import CreditCardPlusIcon from "@rsuite/icons/CreditCardPlus";
import CouponIcon from "@rsuite/icons/Coupon";
import { useState } from "react";
import { PaymentType } from "../../stores/models/IPayment";
import PaymentButton from "./PaymentButton";

interface ICartProps {
  onClose: () => void;
}

const Cart = ({ onClose }: ICartProps) => {
  const [items, removeProduct, setCountProduct] = useCartStore((state) => [
    state.products,
    state.removeProduct,
    state.setCountProduct,
  ]);
  const [currencyPayment, setCurrencyPayment] = useState(PaymentType.Dollar);

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
      {items.map((item) => (
        <CartList
          key={item.id}
          item={item}
          removeProduct={(id) => removeProduct(id)}
          setCountProduct={(productId, count) =>
            setCountProduct(productId, count)
          }
        />
      ))}
      <div style={{ marginTop: 20 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <RadioTileGroup
            defaultValue={currencyPayment}
            inline
            aria-label="Payment choice"
            onChange={(value: number) => setCurrencyPayment(value)}
          >
            <RadioTile
              icon={<Icon as={CreditCardPlusIcon} />}
              label="Оплатить dollar"
              value={PaymentType.Dollar}
            ></RadioTile>
            <RadioTile
              icon={<Icon as={CouponIcon} />}
              label="Оплатить coin"
              value={PaymentType.Coin}
            ></RadioTile>
          </RadioTileGroup>
        </div>
        <PaymentButton paymentType={currencyPayment} onClick={onClose} />
      </div>
    </>
  );
};

export default Cart;
