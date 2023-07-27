import { InputNumber } from "rsuite";
import { useMoneyStore } from "../../stores/useMoneyStore";
import styles from "../../styles/InputCoin.module.css";

interface IInputCoinProps {
  onChange: (value: number) => void;
}

const InputCoin = ({ onChange }: IInputCoinProps) => {
  const dollars = useMoneyStore((state) => state.dollars);

  return (
    <label>
      Укажите желаемое количество coin:
      <InputNumber
        onChange={(value: number) => onChange(value)}
        className={styles.InputCoin}
        min={1}
        max={dollars}
      />
      <p className={styles.InputCoinTextHelper}>dollars на счету: {dollars}</p>
    </label>
  );
};

export default InputCoin;
