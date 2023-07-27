import { InputNumber } from "rsuite";

interface IInputDollarProps {
  onChange: (value: number) => void;
}

const InputDollar = ({ onChange }: IInputDollarProps) => {
  return (
    <label>
      Укажите сумму для пополнения:
      <InputNumber
        onChange={(value: number) => onChange(value)}
        style={{ marginTop: 8 }}
      />
    </label>
  );
};

export default InputDollar;
