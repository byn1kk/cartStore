import { RadioTile, RadioTileGroup } from "rsuite";
import { Icon } from "@rsuite/icons";
import CreditCardPlusIcon from "@rsuite/icons/CreditCardPlus";
import CouponIcon from "@rsuite/icons/Coupon";
import { СurrencyType } from "../../stores/models/СurrencyType";
import styles from "../../styles/RadioPaymentType.module.css";

interface IRadioPaymentTypeProps {
  paymentType: СurrencyType;
  onChange: (number: СurrencyType) => void;
}

const RadioPaymentType = ({
  paymentType,
  onChange,
}: IRadioPaymentTypeProps) => {
  return (
    <div className={styles.RadioPaymentTypeBlock}>
      <RadioTileGroup
        defaultValue={paymentType}
        inline
        aria-label="Payment choice"
        onChange={onChange}
      >
        <RadioTile
          icon={<Icon as={CreditCardPlusIcon} />}
          label="Оплатить dollar"
          value={СurrencyType.Dollar}
        ></RadioTile>
        <RadioTile
          icon={<Icon as={CouponIcon} />}
          label="Оплатить coin"
          value={СurrencyType.Coin}
        ></RadioTile>
      </RadioTileGroup>
    </div>
  );
};

export default RadioPaymentType;
