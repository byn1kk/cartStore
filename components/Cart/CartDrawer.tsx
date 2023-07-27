import { Button, Drawer, RadioTile, RadioTileGroup } from "rsuite";
import { useCartStore } from "../../stores/useCartStore";
import CartList from "./CartList";
import { Icon } from "@rsuite/icons";
import CreditCardPlusIcon from "@rsuite/icons/CreditCardPlus";
import CouponIcon from "@rsuite/icons/Coupon";
import { useState } from "react";
import { PaymentType } from "../../stores/models/IPayment";
import PaymentButton from "./PaymentButton";
import Cart from "./Cart";

interface ICartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: ICartDrawerProps) => {
  return (
    <Drawer open={isOpen} onClose={onClose}>
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
