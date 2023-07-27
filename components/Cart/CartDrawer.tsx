import { Button, Drawer } from "rsuite";
import { useCartStore } from "../../stores/useCartStore";
import CartList from "./CartList";

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
