import { Button, InputNumber, Modal } from "rsuite";
import { useState } from "react";
import { useMoneyStore } from "../stores/useMoneyStore";

const CoinButton = () => {
  const [dollars, coins, addCoin] = useMoneyStore((state) => [
    state.dollars,
    state.coins,
    state.addCoin,
  ]);
  const [open, setOpen] = useState(false);
  const [replenishmentCoin, setReplenishmentCoin] = useState(0);
  const handleOnSubmit = () => {
    addCoin(replenishmentCoin);
    setReplenishmentCoin(0);
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Обменный пункт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ width: 250, margin: 10 }}>
            <label>
              Укажите желаемое количество coin:
              <InputNumber
                value={replenishmentCoin}
                onChange={(value: number) => setReplenishmentCoin(value)}
                style={{ marginTop: 8 }}
                min={1}
                max={dollars}
              />
              <p style={{ color: "#898888" }}>dollars на счету: {dollars}</p>
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOnSubmit} appearance="primary">
            Подтвердить
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Отмена
          </Button>
        </Modal.Footer>
      </Modal>

      <Button
        appearance="primary"
        color="violet"
        size="xs"
        onClick={() => setOpen(true)}
      >
        {coins} Coin
      </Button>
    </>
  );
};

export default CoinButton;
