import { Col, Content, Grid, Row } from "rsuite";
import HeaderComponent from "./HeaderComponent";
import CartListComponent from "./CartListComponent";

const ContentComponent = () => {
  return (
    <Content>
      <Grid fluid>
        <div className="wrapper">
          <Row className="show-grid">
            <Col xsHidden smHidden mdHidden lg={3}></Col>
            <Col xs={24} sm={24} md={24} lg={18}>
              <div className="main-grid">
                <HeaderComponent />
                <hr />
                <CartListComponent />
              </div>
            </Col>
            <Col xsHidden smHidden mdHidden lg={3}></Col>
          </Row>
        </div>
        <style jsx>{`
          .wrapper {
            margin-top: 50px;
          }
          .main-grid {
            background: white;
            border-radius: 12px;
            padding: 8px;
            margin-bottom: 50px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}</style>
      </Grid>
    </Content>
  );
};

export default ContentComponent;
