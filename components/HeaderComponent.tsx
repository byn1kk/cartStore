import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button, ButtonGroup, Stack } from "rsuite";

const HeaderComponent = () => {
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

          <Button appearance="default" color="violet" size="lg">
            Корзина 0
          </Button>
        </Stack>
      </div>

      <style jsx>{`
        .wrapper {
          margin-top: 50px;
        }
        .main-grid {
          background: white;
          border-radius: 12px;
          padding: 8px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default HeaderComponent;
