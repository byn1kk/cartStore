import { IconButton, InputNumber } from "rsuite";
import CloseIcon from "@rsuite/icons/Close";
import { IProductByCart } from "../../stores/models/IProduct";

interface ICartListProps {
  item: IProductByCart;
  removeProduct: (id: number) => void;
  setCountProduct: (productId: number, count: number) => void;
}

const CartList = ({ item, removeProduct, setCountProduct }: ICartListProps) => {
  return (
    <>
      <div
        key={item.id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginBottom: 8 }}>{item.title}</div>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: 8,
          }}
        >
          {item.price}$ <b>x</b>
          <InputNumber
            min={1}
            size="xs"
            style={{
              width: 70,
            }}
            defaultValue={item.count}
            onChange={(value: number) => setCountProduct(item.id, value)}
          />
          <IconButton
            icon={<CloseIcon />}
            size="xs"
            onClick={() => removeProduct(item.id)}
          />
        </div>
      </div>
    </>
  );
};

export default CartList;
