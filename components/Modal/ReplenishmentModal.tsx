import { Button, ButtonGroup, ButtonToolbar, Modal } from "rsuite";
import { useEffect, useState } from "react";
import { useMoneyStore } from "../../stores/useMoneyStore";
import InputDollar from "./InputDollar";
import InputCoin from "./InputCoin";
import { СurrencyType } from "../../stores/models/СurrencyType";
import styles from "../../styles/ReplenishmentModal.module.css";

interface IAddDollarModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentType?: СurrencyType;
}

const ReplenishmentModal = ({
  isOpen,
  onClose,
  paymentType,
}: IAddDollarModalProps) => {
  const dollars = useMoneyStore((state) => state.dollars);
  const addDollar = useMoneyStore((state) => state.addDollar);
  const addCoin = useMoneyStore((state) => state.addCoin);
  const [currencyType, setСurrencyType] = useState(СurrencyType.Dollar);
  const [replenishment, setReplenishment] = useState(0);
  const handleOnSubmit = () => {
    onClose();
    setReplenishment(0);
    if (currencyType === СurrencyType.Dollar) {
      addDollar(replenishment);
      return;
    }
    addCoin(replenishment);
  };

  useEffect(() => {
    if (!paymentType) {
      return;
    }
    setСurrencyType(paymentType);
  }, [paymentType]);

  return (
    <Modal open={isOpen} onClose={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Пополнить счёт</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.ChangeButton}>
          <ButtonToolbar>
            <ButtonGroup>
              <Button
                active={currencyType === СurrencyType.Dollar}
                onClick={() => setСurrencyType(СurrencyType.Dollar)}
              >
                Пополнить счёт
              </Button>
              <Button
                active={currencyType === СurrencyType.Coin}
                onClick={() => setСurrencyType(СurrencyType.Coin)}
              >
                Получить coin
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        <div className={styles.InputReplenishment}>
          {currencyType === СurrencyType.Dollar ? (
            <InputDollar onChange={setReplenishment} />
          ) : (
            <InputCoin onChange={setReplenishment} />
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={
            replenishment <= 0 ||
            (currencyType === СurrencyType.Coin && dollars <= 0)
          }
          onClick={handleOnSubmit}
          appearance="primary"
        >
          Подтвердить
        </Button>
        <Button onClick={onClose} appearance="subtle">
          Отмена
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReplenishmentModal;
