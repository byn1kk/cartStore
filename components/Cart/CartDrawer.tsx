import { Drawer } from "rsuite";
import Cart from "./Cart";
import styles from "../../styles/CartDrawer.module.css";

interface ICartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: ICartDrawerProps) => {
  return (
    <Drawer open={isOpen} onClose={onClose} className={styles.CartDrawer}>
      <Drawer.Header>
        <Drawer.Title>Корзина</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <Cart onClose={onClose} />
      </Drawer.Body>
    </Drawer>
  );
};

export default CartDrawer;
