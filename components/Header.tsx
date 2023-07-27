import { Button, ButtonGroup, Stack } from "rsuite";
import CartButton from "./Cart/CartButton";

const Header = () => {
  return (
    <>
      <div className="header">
        <h4>FakeStore</h4>
        <Stack spacing={8}>
          <ButtonGroup vertical>
            <Button appearance="primary" color="violet" size="xs">
              0 $
            </Button>
            <Button appearance="primary" color="violet" size="xs">
              0 Coin
            </Button>
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
