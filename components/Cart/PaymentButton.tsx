import { Button } from "rsuite";
import { useCartStore } from "../../stores/useCartStore";
import { СurrencyType } from "../../stores/models/СurrencyType";
import { useMoneyStore } from "../../stores/useMoneyStore";
import { NotificationHelper } from "../../root/NotificationHelper";
import ReplenishmentModal from "../Modal/ReplenishmentModal";
import { useState } from "react";
import InsufficientFunds from "./InsufficientFunds";

interface IPaymentButtonProps {
  paymentType: СurrencyType;
  onClick: () => void;
}

const PaymentButton = ({ paymentType, onClick }: IPaymentButtonProps) => {
  const [dollars, coins, payment] = useMoneyStore((state) => [
    state.dollars,
    state.coins,
    state.payment,
  ]);
  const [deleteProducts] = useCartStore((state) => [state.deleteProducts]);
  const items = useCartStore((state) => state.products);

  const sum = items.reduce((acc, item) => {
    return acc + item.count * item.price;
  }, 0);

  return (
    <>
      <Button
        disabled={
          (paymentType === СurrencyType.Dollar && dollars < sum) ||
          (paymentType === СurrencyType.Coin && coins < sum)
        }
        block
        appearance="primary"
        color="violet"
        onClick={() => {
          payment(paymentType, sum);
          onClick();
          deleteProducts();
          NotificationHelper.ShowSuccess("Оплата прошла успешно");
        }}
      >
        {`К оплате ${sum} ${
          paymentType === СurrencyType.Dollar ? "$" : "coin"
        }`}
      </Button>
      <InsufficientFunds paymentType={paymentType} />
    </>
  );
};

export default PaymentButton;
