import { InputNumber } from "rsuite";
import { useMoneyStore } from "../../stores/useMoneyStore";

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
        style={{ marginTop: 8 }}
        min={1}
        max={dollars}
      />
      <p style={{ color: "#898888" }}>dollars на счету: {dollars}</p>
    </label>
  );
};

export default InputCoin;
