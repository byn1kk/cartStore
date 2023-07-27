import { Button } from "rsuite";
import { useCartStore } from "../../stores/useCartStore";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

const CartButton = () => {
  const [openWithHeader, setOpenWithHeader] = useState(false);
  const items = useCartStore((state) => state.products);

  return (
    <>
      <CartDrawer
        isOpen={openWithHeader}
        onClose={() => setOpenWithHeader(false)}
      />
      <Button
        appearance={items.length !== 0 ? "primary" : "default"}
        color="violet"
        size="lg"
        onClick={() => setOpenWithHeader(true)}
      >
        {`Корзина ${items.length}`}
      </Button>
    </>
  );
};

export default CartButton;
