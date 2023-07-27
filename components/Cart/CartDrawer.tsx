import { Button, Drawer, RadioTile, RadioTileGroup } from "rsuite";
import { useCartStore } from "../../stores/useCartStore";
import CartList from "./CartList";
import { Icon } from "@rsuite/icons";
import CreditCardPlusIcon from "@rsuite/icons/CreditCardPlus";
import CouponIcon from "@rsuite/icons/Coupon";
import { useState } from "react";
import { PaymentType } from "../../stores/models/IPayment";

interface ICartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: ICartDrawerProps) => {
  const [items, removeProduct, setCountProduct] = useCartStore((state) => [
    state.products,
    state.removeProduct,
    state.setCountProduct,
  ]);
  const [currencyPayment, setCurrencyPayment] = useState(PaymentType.Dollar);

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <Drawer.Header>
        <Drawer.Title>Корзина</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
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
          <Button block appearance="primary" color="violet">
            {`К оплате ${items.reduce((acc, item) => {
              return acc + item.count * item.price;
            }, 0)} $`}
          </Button>
        </div>
      </Drawer.Body>
    </Drawer>
  );
};

export default CartDrawer;
