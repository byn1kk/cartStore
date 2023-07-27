import { InputNumber } from "rsuite";
import styles from "../../styles/InputDollar.module.css";
interface IInputDollarProps {
  onChange: (value: number) => void;
}

const InputDollar = ({ onChange }: IInputDollarProps) => {
  return (
    <label>
      Укажите сумму для пополнения:
      <InputNumber
        onChange={(value: number) => onChange(value)}
        className={styles.InputDollar}
      />
    </label>
  );
};

export default InputDollar;
