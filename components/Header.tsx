import { ButtonGroup, Stack } from "rsuite";
import CartButton from "./Cart/CartButton";
import DollarButton from "./DollarButton";
import CoinButton from "./CoinButton";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.Header}>
        <h4>FakeStore</h4>
        <Stack spacing={8}>
          <ButtonGroup vertical>
            <DollarButton />
            <CoinButton />
          </ButtonGroup>

          <CartButton />
        </Stack>
      </div>
    </>
  );
};

export default Header;
