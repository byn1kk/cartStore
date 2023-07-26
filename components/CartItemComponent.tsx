import { Button, Panel } from "rsuite";

interface ICartItemProps {
  cartItem;
}

const CartItemComponent = ({ cartItem }: ICartItemProps) => {
  return (
    <Panel
      key={cartItem.id}
      style={{
        display: "inline-block",
        height: 130,
        width: 200,
        margin: 8,
      }}
      bordered
    >
      <strong
        style={{
          display: "block",
          height: 60,
          fontSize: 15,
        }}
      >
        {cartItem.title}
      </strong>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{cartItem.price} $</p>
        <Button appearance="ghost" color="violet" size="xs">
          добавить
        </Button>
      </div>
    </Panel>
  );
};

export default CartItemComponent;
