import { Button } from "rsuite";
import { useCartStore } from "../../stores/useCartStore";
import { СurrencyType } from "../../stores/models/IPayment";
import { useMoneyStore } from "../../stores/useMoneyStore";
import ReplenishmentModal from "../Modal/ReplenishmentModal";
import { useState } from "react";

interface IInsufficientFundsProps {
  paymentType: СurrencyType;
}

const InsufficientFunds = ({ paymentType }: IInsufficientFundsProps) => {
  const [open, setOpen] = useState(false);
  const [dollars, coins] = useMoneyStore((state) => [
    state.dollars,
    state.coins,
  ]);
  const items = useCartStore((state) => state.products);

  const sum = items.reduce((acc, item) => {
    return acc + item.count * item.price;
  }, 0);

  return (
    <>
      <ReplenishmentModal
        isOpen={open}
        onClose={() => setOpen(false)}
        paymentType={paymentType}
      />
      {paymentType === СurrencyType.Coin && coins < sum && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>На счету недостаточно Сoin</p>
          <Button size="xs" appearance="link" onClick={() => setOpen(true)}>
            пополнить
          </Button>
        </div>
      )}
      {paymentType === СurrencyType.Dollar && dollars < sum && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>На счету недостаточно Dollar</p>
          <Button size="xs" appearance="link" onClick={() => setOpen(true)}>
            пополнить
          </Button>
        </div>
      )}
    </>
  );
};

export default InsufficientFunds;
