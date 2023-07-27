import { Button, InputNumber, Modal } from "rsuite";
import { useState } from "react";
import { useMoneyStore } from "../stores/useMoneyStore";

const DollarButton = () => {
  const [dollars, addDollar] = useMoneyStore((state) => [
    state.dollars,
    state.addDollar,
  ]);
  const [open, setOpen] = useState(false);
  const [replenishmentAmount, setReplenishmentAmount] = useState(0);
  const handleOnSubmit = () => {
    addDollar(replenishmentAmount);
    setReplenishmentAmount(0);
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Пополнить счёт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ width: 250, margin: 10 }}>
            <label>
              Укажите сумму для пополнения:
              <InputNumber
                value={replenishmentAmount}
                onChange={(value: number) => setReplenishmentAmount(value)}
                style={{ marginTop: 8 }}
              />
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
        {dollars} $
      </Button>
    </>
  );
};

export default DollarButton;
