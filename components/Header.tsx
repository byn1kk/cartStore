import { ButtonGroup, Stack } from "rsuite";
import CartButton from "./Cart/CartButton";
import DollarButton from "./DollarButton";
import CoinButton from "./CoinButton";

const Header = () => {
  return (
    <>
      <div className="header">
        <h4>FakeStore</h4>
        <Stack spacing={8}>
          <ButtonGroup vertical>
            <DollarButton />
            <CoinButton />
          </ButtonGroup>

          <CartButton />
        </Stack>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Header;
