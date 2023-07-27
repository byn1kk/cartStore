import { IconButton, InputNumber } from "rsuite";
import CloseIcon from "@rsuite/icons/Close";
import { IProductByCart } from "../../stores/models/IProduct";
import styles from "../../styles/CartList.module.css";

interface ICartListProps {
  item: IProductByCart;
  removeProduct: (id: number) => void;
  setCountProduct: (productId: number, count: number) => void;
}

const CartList = ({ item, removeProduct, setCountProduct }: ICartListProps) => {
  return (
    <>
      <div key={item.id} className={styles.CartListBlock}>
        <div>{item.title}</div>
        <div className={styles.CartListPrice}>
          {item.price}$ <b>x</b>
          <InputNumber
            min={1}
            size="sm"
            className={styles.InputNumberPrice}
            defaultValue={item.count}
            onChange={(value: number) => setCountProduct(item.id, value)}
          />
          <IconButton
            icon={<CloseIcon />}
            size="sm"
            onClick={() => removeProduct(item.id)}
          />
        </div>
      </div>
    </>
  );
};

export default CartList;
