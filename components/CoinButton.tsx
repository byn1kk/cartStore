import { Button } from "rsuite";
import { useState } from "react";
import { useMoneyStore } from "../stores/useMoneyStore";
import ReplenishmentModal from "./Modal/ReplenishmentModal";

const CoinButton = () => {
  const coins = useMoneyStore((state) => state.coins);
  const [open, setOpen] = useState(false);

  return (
    <>
      <ReplenishmentModal isOpen={open} onClose={() => setOpen(false)} />
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
