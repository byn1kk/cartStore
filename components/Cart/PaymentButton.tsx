import { Button } from "rsuite";
import { useCartStore } from "../../stores/useCartStore";
import { PaymentType } from "../../stores/models/IPayment";
import { useMoneyStore } from "../../stores/useMoneyStore";

interface IPaymentButtonProps {
  paymentType: PaymentType;
}

const PaymentButton = ({ paymentType }: IPaymentButtonProps) => {
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
          (paymentType === PaymentType.Dollar && dollars < sum) ||
          (paymentType === PaymentType.Coin && coins < sum)
        }
        block
        appearance="primary"
        color="violet"
        onClick={() => {
          payment(paymentType, sum);
          deleteProducts();
        }}
      >
        {`К оплате ${sum} ${paymentType === PaymentType.Dollar ? "$" : "coin"}`}
      </Button>
      {paymentType === PaymentType.Dollar && dollars < sum && (
        <p>На счету недостаточно Dollar</p>
      )}
      {paymentType === PaymentType.Coin && coins < sum && (
        <p>На счету недостаточно Сoin</p>
      )}
    </>
  );
};

export default PaymentButton;
