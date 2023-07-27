import { Button } from "rsuite";
import { useState } from "react";
import { useMoneyStore } from "../stores/useMoneyStore";
import ReplenishmentModal from "./Modal/ReplenishmentModal";

const DollarButton = () => {
  const dollars = useMoneyStore((state) => state.dollars);
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
        {dollars} $
      </Button>
    </>
  );
};

export default DollarButton;
