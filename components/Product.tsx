import { Button, Panel } from "rsuite";
import { useCartStore } from "../stores/useCartStore";
import styles from "../styles/Product.module.css";
interface IProductProps {
  cartItem;
}

const Product = ({ cartItem }: IProductProps) => {
  const [items, addItem, removeItem] = useCartStore((state) => [
    state.products,
    state.addProduct,
    state.removeProduct,
  ]);

  const isSelected = items.filter((x) => x.id === cartItem.id).length !== 0;

  return (
    <Panel key={cartItem.id} className={styles.productPanel} bordered>
      <strong className={styles.productPanelTitle}>{cartItem.title}</strong>
      <div className={styles.productPrice}>
        <p>{cartItem.price} $</p>
        <Button
          appearance={isSelected ? "default" : "primary"}
          color="violet"
          size="xs"
          onClick={() =>
            isSelected
              ? removeItem(cartItem.id)
              : addItem({ ...cartItem, count: 1 })
          }
        >
          {isSelected ? "добавлен" : "в корзину"}
        </Button>
      </div>
    </Panel>
  );
};

export default Product;
